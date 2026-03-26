// core
import type { MutableRefObject } from 'react'
import type { StripeElementsOptionsMode, StripePaymentElementOptions } from '@stripe/stripe-js'
// modules
import type { CheckoutPrice, CheckoutProduct } from '@/modules/checkout/types'

const THINKIFIC_BASE =
  process.env.NEXT_PUBLIC_THINKIFIC_URL ?? 'https://university.personaldevelopmentschool.com'

/** Match legacy vanilla checkout ordering; adjust if Strapi/dashboard differs. */
export const CHECKOUT_PAYMENT_METHOD_ORDER: string[] = ['card', 'apple_pay', 'google_pay', 'link']

const PAYMENT_ELEMENT_TERMS: NonNullable<StripePaymentElementOptions['terms']> = {
  applePay: 'never',
  auBecsDebit: 'never',
  bancontact: 'never',
  card: 'never',
  cashapp: 'never',
  googlePay: 'never',
  ideal: 'never',
  paypal: 'never',
  sepaDebit: 'never',
  sofort: 'never',
  usBankAccount: 'never',
}

function addDays(date: Date, days: number): Date {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

/** Stripe Apple Pay recurring line item interval (week is converted to days). */
type ApplePayRecurringIntervalUnit = 'year' | 'month' | 'day' | 'hour' | 'minute'

function normalizeApplePayRecurringInterval(
  interval: NonNullable<CheckoutPrice['recurring']>['interval'],
  intervalCount: number
): { unit: ApplePayRecurringIntervalUnit; count: number } {
  if (interval === 'week') {
    return { unit: 'day', count: intervalCount * 7 }
  }
  return { unit: interval as ApplePayRecurringIntervalUnit, count: intervalCount }
}

function buildApplePayOption(
  product: CheckoutProduct,
  price: CheckoutPrice
): StripePaymentElementOptions['applePay'] {
  const trialDays =
    price.trialPeriodDays != null && price.trialPeriodDays > 0 ? price.trialPeriodDays : 0

  if (trialDays > 0) {
    return {
      deferredPaymentRequest: {
        paymentDescription: product.name,
        managementURL: `${THINKIFIC_BASE}/account/billing`,
        deferredBilling: {
          amount: price.currentPrice,
          label: 'Deferred Payment',
          deferredPaymentDate: addDays(new Date(), trialDays),
        },
      },
    }
  }

  if (price.type === 'recurring' && price.recurring) {
    const { unit, count } = normalizeApplePayRecurringInterval(
      price.recurring.interval,
      price.recurring.intervalCount
    )
    const description = (product.description?.trim() || product.name).trim()
    return {
      recurringPaymentRequest: {
        paymentDescription: description,
        managementURL: `${THINKIFIC_BASE}/pages/membership`,
        regularBilling: {
          amount: price.currentPrice,
          label: 'Regular billing cycle',
          recurringPaymentStartDate: new Date(),
          recurringPaymentIntervalUnit: unit,
          recurringPaymentIntervalCount: count,
        },
      },
    }
  }

  return undefined
}

export function buildPaymentElementOptions(
  product: CheckoutProduct,
  price: CheckoutPrice
): StripePaymentElementOptions {
  const applePay = buildApplePayOption(product, price)
  const base: StripePaymentElementOptions = {
    layout: { type: 'tabs', defaultCollapsed: false },
    wallets: { applePay: 'auto', googlePay: 'auto' },
    terms: PAYMENT_ELEMENT_TERMS,
    fields: {
      billingDetails: {
        name: 'never',
        email: 'never',
        address: 'if_required',
      },
    },
    paymentMethodOrder: CHECKOUT_PAYMENT_METHOD_ORDER,
  }
  return applePay != null ? { ...base, applePay } : base
}

/** Once POST /api/checkout returns newUser: true, never downgrade to false on later POSTs. */
export function applyStickyNewUser(
  ref: MutableRefObject<boolean | undefined>,
  fromResponse: boolean | undefined
) {
  if (fromResponse === true) {
    ref.current = true
    return
  }
  if (ref.current === true) return
  if (typeof fromResponse === 'boolean') {
    ref.current = fromResponse
  }
}

const SANS_FALLBACK =
  'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

/** Matches native checkout fields (`border-black-2`). */
const CHECKOUT_INPUT_BORDER = '1px solid #2C2E35'

/**
 * Appearance for Payment Element (passed as `Elements` `options.appearance`).
 * @see https://docs.stripe.com/sdks/stripejs-react#elements-provider
 * @see https://docs.stripe.com/elements/appearance-api
 */
export function buildCheckoutElementsAppearance(
  assetsOrigin?: string | null
): NonNullable<StripeElementsOptionsMode['appearance']> {
  const effraLoaded = Boolean(assetsOrigin)
  return {
    theme: 'stripe',
    variables: {
      fontFamily: effraLoaded ? '"Effra", sans-serif' : SANS_FALLBACK,
      fontSizeBase: '16px',
      colorPrimary: '#8a50a0',
      spacingUnit: '5px',
    },
    rules: {
      '.Input': {
        borderRadius: '8px',
        border: CHECKOUT_INPUT_BORDER,
        boxShadow: 'none',
        padding: '19px 20px',
      },
      '.Input:focus': {
        border: CHECKOUT_INPUT_BORDER,
        boxShadow: '0 0 0 2px rgba(138, 80, 160, 0.3)',
      },
      '.Input--invalid': {
        border: '1px solid #df1b41',
        boxShadow: 'none',
      },
      '.Label': {
        fontWeight: '700',
      },
    },
  }
}

/**
 * Deferred-intent Elements options — Payment Element before clientSecret exists.
 * Stripe iframes do not inherit page CSS; register Effra when `assetsOrigin` is set.
 */
export function buildDeferredElementsOptions(
  price: CheckoutPrice,
  connectAccountId?: string | null,
  assetsOrigin?: string | null
): StripeElementsOptionsMode {
  void connectAccountId
  const currency = price.currency.toLowerCase()
  const appearance = buildCheckoutElementsAppearance(assetsOrigin)
  const fonts: StripeElementsOptionsMode['fonts'] | undefined = assetsOrigin
    ? [{ cssSrc: `${assetsOrigin}/fonts/checkout/effra.css` }]
    : undefined
  const trialActive = price.trialPeriodDays != null && price.trialPeriodDays > 0
  const base: StripeElementsOptionsMode = { ...(fonts ? { fonts } : {}), appearance }

  if (trialActive) return { ...base, mode: 'setup', currency }
  if (price.type === 'recurring') {
    return { ...base, mode: 'subscription', currency, amount: price.currentPrice }
  }
  return { ...base, mode: 'payment', currency, amount: price.currentPrice }
}
