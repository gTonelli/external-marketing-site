'use client'

// core
import { useContext, useEffect, useMemo, useState } from 'react'
// components
import { Page } from '@/components/Page'
import { OrderSummary } from '@/modules/checkout/components/OrderSummary'
import { PayPalPaymentForm } from '@/modules/checkout/components/PayPalPaymentForm'
import {
  StripePaymentForm,
  buildDeferredElementsOptions,
} from '@/modules/checkout/components/StripePaymentForm'
import { TrustBlock } from '@/modules/checkout/components/TrustBlock'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faSquare } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { loadStripe } from '@stripe/stripe-js'
// modules
import { deriveSessionIdentity } from '@/modules/checkout/lib/identity'
import { thankYouProductIdFromStrapi } from '@/modules/checkout/lib/thankYou'
import type { CheckoutPriceDataResponse } from '@/modules/checkout/types'
// utils
import { UserDataContext } from '@/utils/contexts'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''

type CheckoutClientProps = {
  priceData: CheckoutPriceDataResponse
  strapiOrigin: string
}

function CheckoutClientInner({ priceData, strapiOrigin }: CheckoutClientProps) {
  const userData = useContext(UserDataContext)
  const sessionIdentity = useMemo(() => deriveSessionIdentity(userData), [userData])
  const identityFieldsLocked = sessionIdentity != null
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
      className={`mx-auto flex w-full max-w-[1200px] flex-col
        lg:min-h-0 lg:grid lg:grid-cols-2 lg:items-stretch`}>
      <div
        className={`flex w-full flex-col justify-center bg-[#f9f9fb] px-5 pb-10 pt-4
          lg:min-h-0 lg:min-w-0 lg:flex-1 lg:px-10 lg:py-12 lg:pr-8`}>
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
          lg:min-h-0 lg:min-w-0 lg:flex-1 lg:px-8 lg:py-12`}>
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
              <PayPalPaymentForm
                strapiOrigin={strapiOrigin}
                lookupKey={priceData.price.lookupKey}
                price={priceData.price}
                productId={thankYouProductId}
                thinkificProductId={thinkificProductId}
                sessionIdentity={sessionIdentity}
                identityFieldsLocked={identityFieldsLocked}
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
                sessionIdentity={sessionIdentity}
                identityFieldsLocked={identityFieldsLocked}
              />
            )}
          </div>
        </div>

        <TrustBlock className="mt-10 lg:hidden" />
      </div>
    </div>
  )
}

export function CheckoutClient(props: CheckoutClientProps) {
  return (
    <Page
      page_name="Checkout Page"
      className={`checkout-page min-h-screen w-full bg-[#f9f9fb] font-effra text-black-2 antialiased
      lg:min-h-0 lg:flex-1 lg:flex lg:flex-col lg:py-12
      lg:bg-[linear-gradient(90deg,#f9f9fb_0%,#f9f9fb_50%,#ffffff_50%,#ffffff_100%)]`}>
      <CheckoutClientInner {...props} />
    </Page>
  )
}
