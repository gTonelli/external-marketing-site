'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { MutableRefObject } from 'react'
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import type { StripeElementsOptionsMode, StripePaymentElementOptions } from '@stripe/stripe-js'
import type { Stripe } from '@stripe/stripe-js'
import { Regexes } from '@/utils/constants'
import type { CheckoutPrice, CheckoutProduct, CheckoutSessionIdentity } from '../types'
import type { CheckoutSessionResponse } from '../types'
import { CheckoutIdentityFields } from './CheckoutIdentityFields'
import { CheckoutPanelLoadingOverlay } from './CheckoutPanelLoadingOverlay'

const thinkificBase =
  process.env.NEXT_PUBLIC_THINKIFIC_URL ?? 'https://university.personaldevelopmentschool.com'

/** Match legacy vanilla checkout ordering; adjust if Strapi/dashboard differs */
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
        managementURL: `${thinkificBase}/account/billing`,
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
        managementURL: `${thinkificBase}/pages/membership`,
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

function buildThankYouUrl(params: {
  email: string
  productId: string | null
  newUser: boolean
}) {
  const email = params.email.trim()
  const u = new URL('/pages/checkout-v2-thank-you', thinkificBase)
  u.searchParams.set('newUser', params.newUser ? 'true' : 'false')
  u.searchParams.set('email', email)
  if (params.productId != null && params.productId !== '') {
    u.searchParams.set('product_id', params.productId)
  }
  return u.toString()
}

/** Once POST /api/checkout returns newUser: true, never downgrade to false on later POSTs (e.g. after confirm fails). */
function applyStickyNewUser(
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

/** Matches native checkout fields (`border-black-2`) */
const CHECKOUT_INPUT_BORDER = '1px solid #2C2E35'

/**
 * Appearance for Payment Element (passed as `Elements` `options.appearance`).
 * Note: `CheckoutProvider` from React Stripe.js is only for Stripe Checkout sessions, not Payment Element + deferred intent — use `Elements` with the same `Appearance` shape.
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
        // Match `CheckoutIdentityFields` (`rounded-lg` ≈ 8px)
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
 * Stripe iframes do not inherit page CSS; register Effra via `fonts` + absolute cssSrc when `assetsOrigin` is set.
 * @see https://docs.stripe.com/payments/accept-a-payment-deferred
 */
export function buildDeferredElementsOptions(
  price: CheckoutPrice,
  connectAccountId?: string | null,
  assetsOrigin?: string | null
): StripeElementsOptionsMode {
  const currency = price.currency.toLowerCase()
  const appearance = buildCheckoutElementsAppearance(assetsOrigin)

  const fonts: StripeElementsOptionsMode['fonts'] | undefined = assetsOrigin
    ? [{ cssSrc: `${assetsOrigin}/fonts/checkout/effra.css` }]
    : undefined

  const trialActive = price.trialPeriodDays != null && price.trialPeriodDays > 0

  const base: StripeElementsOptionsMode = {
    ...(fonts ? { fonts } : {}),
    appearance,
  }

  if (trialActive) {
    return { ...base, mode: 'setup', currency }
  }
  if (price.type === 'recurring') {
    return {
      ...base,
      mode: 'subscription',
      currency,
      amount: price.currentPrice,
    }
  }
  return {
    ...base,
    mode: 'payment',
    currency,
    amount: price.currentPrice,
  }
}

type StripePaymentFormProps = {
  stripePromise: Promise<Stripe | null>
  elementsOptions: StripeElementsOptionsMode
  strapiOrigin: string
  lookupKey: string
  productId: string | null
  product: CheckoutProduct
  price: CheckoutPrice
  sessionIdentity?: CheckoutSessionIdentity | null
  identityFieldsLocked?: boolean
}

function DeferredCheckoutFormInner({
  strapiOrigin,
  lookupKey,
  productId,
  product,
  price,
  sessionIdentity,
  identityFieldsLocked = false,
}: {
  strapiOrigin: string
  lookupKey: string
  productId: string | null
  product: CheckoutProduct
  price: CheckoutPrice
  sessionIdentity?: CheckoutSessionIdentity | null
  identityFieldsLocked?: boolean
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [email, setEmail] = useState(() => sessionIdentity?.email ?? '')
  const [firstName, setFirstName] = useState(() => sessionIdentity?.firstName ?? '')
  const [lastName, setLastName] = useState(() => sessionIdentity?.lastName ?? '')
  const [paymentElementReady, setPaymentElementReady] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const stickyNewUserRef = useRef<boolean | undefined>(undefined)

  useEffect(() => {
    setPaymentElementReady(false)
  }, [lookupKey, price.id])

  const billingName = `${firstName.trim()} ${lastName.trim()}`.trim()
  const billingEmail = email.trim()

  const staticPaymentElementOptions = useMemo(
    () => buildPaymentElementOptions(product, price),
    [product, price]
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    if (!stripe || !elements) return
    if (!billingEmail || !firstName.trim() || !lastName.trim()) {
      setErrorMessage('Please enter your first name, last name, and email.')
      return
    }
    if (!Regexes.email.test(billingEmail)) {
      setErrorMessage('Please enter a valid email address.')
      return
    }

    setSubmitting(true)
    try {
      const { error: submitError } = await elements.submit()
      if (submitError) {
        setErrorMessage(submitError.message ?? 'Check your payment details.')
        return
      }

      const res = await fetch(`${strapiOrigin}/api/checkout`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lookupKey,
          email: billingEmail,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
        }),
      })
      const data: CheckoutSessionResponse = await res.json()
      if (!res.ok) {
        setErrorMessage(
          typeof data.message === 'string'
            ? data.message
            : `Could not start checkout (${res.status}).`
        )
        return
      }
      if (!data.clientSecret) {
        setErrorMessage('Checkout did not return a payment client secret.')
        return
      }

      applyStickyNewUser(stickyNewUserRef, data.newUser)
      const newUserForThankYou = stickyNewUserRef.current ?? false

      const returnUrl = buildThankYouUrl({
        email: billingEmail,
        productId,
        newUser: newUserForThankYou,
      })
      const billing_details = {
        email: billingEmail,
        name: billingName,
      }
      const confirmParams = {
        return_url: returnUrl,
        payment_method_data: { billing_details },
      }

      const isSetup = data.type === 'setup'
      const { error: confirmError } = isSetup
        ? await stripe.confirmSetup({
            elements,
            clientSecret: data.clientSecret,
            confirmParams,
          })
        : await stripe.confirmPayment({
            elements,
            clientSecret: data.clientSecret,
            confirmParams,
          })

      if (confirmError) {
        setErrorMessage(
          confirmError.message ??
            (isSetup ? 'Setup could not be completed.' : 'Payment could not be completed.')
        )
      }
    } catch {
      setErrorMessage('Network error during checkout.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="font-effra">
      <CheckoutPanelLoadingOverlay
        show={!paymentElementReady || submitting}
        minHeightClassName="min-h-0">
        <div className="flex flex-col gap-5">
          <p className="text-xs text-[#888a95]">
            Enter your details, then add your card. Google Pay and other wallets may appear when
            supported.
          </p>

          <CheckoutIdentityFields
            idPrefix="stripe"
            email={email}
            firstName={firstName}
            lastName={lastName}
            onEmailChange={setEmail}
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
            disabled={identityFieldsLocked}
          />

          <PaymentElement
            options={{
              ...staticPaymentElementOptions,
              defaultValues: {
                billingDetails: {
                  email: billingEmail,
                  name: billingName,
                },
              },
            }}
            onReady={() => setPaymentElementReady(true)}
            onLoadError={() => setPaymentElementReady(true)}
          />

          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          <button
            type="submit"
            disabled={!stripe || submitting || !paymentElementReady}
            className="mt-5 w-full max-w-max self-center rounded-full bg-primary px-8 py-3 text-center text-base font-bold uppercase tracking-[1.5px] text-white transition-opacity disabled:opacity-50">
            {submitting ? 'Processing…' : 'Subscribe & Pay'}
          </button>

          <p className="mt-4 text-xs leading-4 text-[#888a95]">
            By confirming, you allow The Personal Development School to charge your card now and at
            each renewal, per your plan&apos;s terms. Your subscription will renew automatically at the
            current rate each billing period. Cancel anytime before renewal to avoid future charges.
          </p>
        </div>
      </CheckoutPanelLoadingOverlay>
    </form>
  )
}

export function StripePaymentForm({
  stripePromise,
  elementsOptions,
  strapiOrigin,
  lookupKey,
  productId,
  product,
  price,
  sessionIdentity,
  identityFieldsLocked,
}: StripePaymentFormProps) {
  return (
    <Elements stripe={stripePromise} options={elementsOptions}>
      <DeferredCheckoutFormInner
        strapiOrigin={strapiOrigin}
        lookupKey={lookupKey}
        productId={productId}
        product={product}
        price={price}
        sessionIdentity={sessionIdentity}
        identityFieldsLocked={identityFieldsLocked}
      />
    </Elements>
  )
}
