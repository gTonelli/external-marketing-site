'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import { loadStripe } from '@stripe/stripe-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRotateLeft,
  faHeadset,
  faShieldCheck,
  faSquareCheck,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faSquare } from '@awesome.me/kit-545b942488/icons/classic/regular'
import type { CheckoutPrice, CheckoutPriceDataResponse, CheckoutProduct } from '../types'
import { PayPalCheckoutSection } from './PayPalCheckoutSection'
import { StripePaymentForm, buildDeferredElementsOptions } from './StripePaymentForm'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''

function formatMoney(cents: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100)
}

function priceLineLabel(price: CheckoutPrice): string {
  const money = formatMoney(price.currentPrice, price.currency)
  if (price.type !== 'recurring' || !price.recurring) return money
  const { interval, intervalCount } = price.recurring
  if (intervalCount === 1) {
    if (interval === 'month') return `${money}/month`
    if (interval === 'year') return `${money}/year`
    if (interval === 'week') return `${money}/week`
    if (interval === 'day') return `${money}/day`
  }
  return `${money} / ${intervalCount} ${interval}s`
}

function totalLabel(price: CheckoutPrice): string {
  return `${price.currency} ${priceLineLabel(price)}`
}

/** Strapi `product.documentId` from GET /api/checkout → thank-you `product_id`. */
function thankYouProductIdFromStrapi(product: CheckoutProduct): string | null {
  const doc = product.documentId.trim()
  return doc.length > 0 ? doc : null
}

function TrustBlock({ className = '' }: { className?: string }) {
  return (
    <section className={`flex flex-col gap-6 ${className}`}>
      <h2 className="text-lg font-bold leading-7 text-black-2">Purchase with confidence</h2>

      <div className="flex gap-5">
        <FontAwesomeIcon
          icon={faArrowRotateLeft}
          className="mt-0.5 h-10 w-10 shrink-0 text-primary"
          size="lg"
        />

        <div className="flex flex-col gap-2 text-black-2">
          <p className="text-base font-normal leading-[22px]">Refund / Cancellation Policy</p>

          <p className="text-sm leading-[18px]">
            Feel safe. 15 days for a Full refund, where applicable.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <FontAwesomeIcon
          icon={faShieldCheck}
          className="mt-0.5 h-10 w-10 shrink-0 text-primary"
          size="lg"
        />

        <div className="flex flex-col gap-2 text-black-2">
          <p className="text-base font-normal leading-[22px]">Privacy and Security</p>

          <p className="text-sm leading-[18px]">
            All Personal information you submit is Encrypted and Secure
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <FontAwesomeIcon
          icon={faHeadset}
          className="mt-0.5 h-10 w-10 shrink-0 text-primary"
          size="lg"
        />

        <div className="flex flex-col gap-2 text-black-2">
          <p className="text-base font-normal leading-[22px]">Easy Support & Help</p>

          <p className="text-sm leading-[18px]">
            Need help? Our support team is available at any time. Please visit{' '}
            <a
              href="https://support.personaldevelopmentschool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#142bd5] underline">
              support.personaldevelopmentschool.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

function OrderSummary({ data }: { data: CheckoutPriceDataResponse }) {
  const { product, price } = data
  const imageUrl =
    product.image && typeof product.image === 'object' && 'url' in product.image
      ? (product.image as { url?: string }).url
      : undefined

  const startLabel = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date())

  return (
    <div className="flex flex-col gap-4">
      <h2 className="hidden text-lg font-bold leading-7 text-black-2 lg:block">
        Review order details
      </h2>

      <div className="flex gap-6">
        <div className="relative h-[104px] w-[104px] shrink-0 overflow-hidden rounded-lg bg-neutral-200">
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- remote Strapi URLs vary
            <img src={imageUrl} alt="" className="h-full w-full object-cover" />
          ) : (
            <Image
              src="/images/pds-icon.png"
              alt=""
              fill
              className="object-contain p-4"
              sizes="104px"
            />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 text-black-2">
          <p className="text-base font-bold leading-[22px]">{product.name}</p>

          {product.description && (
            <p className="text-base font-normal leading-[22px]">{product.description}</p>
          )}
        </div>
      </div>

      <div className="h-px w-full bg-[#dddee4]" />

      <p className="text-base leading-[22px] text-black-2">Starting membership on {startLabel}</p>

      <div className="h-px w-full bg-[#dddee4]" />

      <div className="flex items-center justify-between text-base leading-[22px] text-black-2">
        <span>
          {price.type === 'recurring' &&
          price.recurring?.interval === 'month' &&
          price.recurring.intervalCount === 1
            ? 'Monthly'
            : price.title}
        </span>

        <span className="text-right">{priceLineLabel(price)}</span>
      </div>

      <div className="h-px w-full bg-[#dddee4]" />

      <div className="flex items-center justify-between text-xl font-bold leading-7 text-black-2">
        <span>Total</span>

        <span className="text-right">{totalLabel(price)}</span>
      </div>
    </div>
  )
}

type CheckoutClientProps = {
  priceData: CheckoutPriceDataResponse
  strapiOrigin: string
}

export function CheckoutClient({ priceData, strapiOrigin }: CheckoutClientProps) {
  const [paymentTab, setPaymentTab] = useState<'card' | 'paypal'>('card')
  /** Stripe iframes need absolute font URLs; set after mount so SSR/hydration match. */
  const [elementsAssetsOrigin, setElementsAssetsOrigin] = useState<string | null>(null)
  useEffect(() => {
    setElementsAssetsOrigin(window.location.origin)
  }, [])

  const stripePromise = useMemo(() => {
    if (!publishableKey) return null
    return loadStripe(publishableKey, {
      stripeAccount: priceData.stripeAccount ?? undefined,
    })
  }, [priceData.stripeAccount])

  const deferredElementsOptions = useMemo(
    () =>
      buildDeferredElementsOptions(priceData.price, priceData.stripeAccount, elementsAssetsOrigin),
    [priceData.price, priceData.stripeAccount, elementsAssetsOrigin]
  )

  const thankYouProductId = thankYouProductIdFromStrapi(priceData.product)
  const thinkificProductId =
    typeof priceData.product.thinkificId === 'number' ? priceData.product.thinkificId : null

  return (
    <div
      className={`checkout-page min-h-screen w-full bg-[#f9f9fb] font-effra text-black-2 antialiased
      lg:min-h-0 lg:flex-1 lg:flex lg:flex-col lg:py-12
      lg:bg-[linear-gradient(90deg,#f9f9fb_0%,#f9f9fb_50%,#ffffff_50%,#ffffff_100%)]`}>
      <div
        className={`mx-auto flex w-full max-w-[1200px] flex-col
        lg:min-h-0 lg:flex-1 lg:flex-row lg:items-stretch`}>
        <div
          className={`flex w-full flex-col justify-center bg-[#f9f9fb] px-5 pb-10 pt-4
          lg:min-h-0 lg:w-1/2 lg:min-w-0 lg:flex-1 lg:px-10 lg:py-12 lg:pr-8`}>
          <h2 className="mb-4 text-xl font-bold leading-7 text-black-2 lg:hidden">
            Review order details
          </h2>

          <div className="lg:pt-0">
            <OrderSummary data={priceData} />
          </div>

          <TrustBlock className="mt-10 hidden lg:flex" />
        </div>

        <div
          className={`flex w-full flex-col justify-center bg-white px-5 pb-10 pt-4
          lg:min-h-0 lg:w-1/2 lg:min-w-0 lg:flex-1 lg:px-8 lg:py-12`}>
          <div className="overflow-hidden rounded-none border border-[#dddee4] lg:rounded-2xl">
            <div className="flex flex-col lg:grid lg:grid-cols-2">
              <button
                type="button"
                onClick={() => setPaymentTab('paypal')}
                className={`order-1 flex items-center gap-2 border-b border-[#dddee4] px-4 py-2 text-left lg:order-2 lg:border-b-0 ${
                  paymentTab === 'paypal' ? 'bg-white' : 'bg-[#f9f9fb]'
                }`}>
                <FontAwesomeIcon
                  icon={paymentTab === 'paypal' ? faSquareCheck : faSquare}
                  className="h-8 w-8 text-primary"
                />

                <span className="text-lg font-bold tracking-tight text-[#003087]">PayPal</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentTab('card')}
                className={`order-2 flex items-center gap-2 border-b border-[#dddee4] px-4 py-2 text-left lg:order-1 lg:border-b-0 lg:border-r lg:border-[#dddee4] lg:pr-4 ${
                  paymentTab === 'card' ? 'bg-white' : 'bg-[#f9f9fb]'
                }`}>
                <FontAwesomeIcon
                  icon={paymentTab === 'card' ? faSquareCheck : faSquare}
                  className="h-8 w-8 text-primary"
                />

                <span className="text-base font-bold leading-[22px] text-black-2">
                  Payment Options
                </span>
              </button>
            </div>

            <div className="px-4 py-4 lg:px-5 lg:py-4">
              {paymentTab === 'paypal' ? (
                <PayPalCheckoutSection
                  strapiOrigin={strapiOrigin}
                  lookupKey={priceData.price.lookupKey}
                  price={priceData.price}
                  productId={thankYouProductId}
                  thinkificProductId={thinkificProductId}
                />
              ) : !publishableKey || !stripePromise ? (
                <p className="text-center text-sm text-red-600">
                  Stripe is not configured (missing publishable key).
                </p>
              ) : (
                <StripePaymentForm
                  key={elementsAssetsOrigin ?? 'stripe-elements-pending'}
                  stripePromise={stripePromise}
                  elementsOptions={deferredElementsOptions}
                  strapiOrigin={strapiOrigin}
                  lookupKey={priceData.price.lookupKey}
                  productId={thankYouProductId}
                  product={priceData.product}
                  price={priceData.price}
                />
              )}
            </div>
          </div>

          <TrustBlock className="mt-10 lg:hidden" />
        </div>
      </div>
    </div>
  )
}
