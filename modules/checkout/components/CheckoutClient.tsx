'use client'

// core
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
// components
import { gtag } from '@/components/GoogleAdsTag'
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
import { payPalModeForPrice } from '@/modules/checkout/api/paypal'
import { useFacebookPixel } from '@/modules/FacebookPixel'
import { deriveSessionIdentity } from '@/modules/checkout/lib/identity'
import { thankYouProductIdFromStrapi } from '@/modules/checkout/lib/thankYou'
import type { CheckoutPriceDataResponse } from '@/modules/checkout/types'
import Mixpanel from '@/modules/Mixpanel'
// utils
import { UserDataContext } from '@/utils/contexts'
import { googleAdsConversion } from '@/utils/constants'

const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''

type CheckoutClientProps = {
  priceData: CheckoutPriceDataResponse
  strapiOrigin: string
}

export function CheckoutClient({ priceData, strapiOrigin }: CheckoutClientProps) {
  const FBQ = useFacebookPixel()
  const userData = useContext(UserDataContext)
  const sessionIdentity = useMemo(() => deriveSessionIdentity(userData), [userData])
  const identityFieldsLocked = sessionIdentity != null
  const [paymentTab, setPaymentTab] = useState<'card' | 'paypal'>('card')
  const fbInitiateCheckoutTrackedRef = useRef(false)
  const googleInitiateCheckoutTrackedRef = useRef(false)
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
  const payPalMode = payPalModeForPrice(priceData.price)
  const finalAmount = priceData.price.currentPrice / 100
  const priceCurrency = priceData.price.currency.toUpperCase()
  const contentName = priceData.product.description ?? priceData.product.name

  useEffect(() => {
    if (!FBQ || fbInitiateCheckoutTrackedRef.current) return
    FBQ.event('InitiateCheckout', {
      value: finalAmount,
      currency: priceCurrency,
      content_name: contentName,
      content_type: 'product',
    })
    fbInitiateCheckoutTrackedRef.current = true
  }, [FBQ, contentName, finalAmount, priceCurrency])

  useEffect(() => {
    if (googleInitiateCheckoutTrackedRef.current) return
    gtag('event', 'conversion', { send_to: googleAdsConversion.initiateCheckout })
    const userEmail = sessionIdentity?.email?.trim()
    if (userEmail) {
      gtag('set', 'user_data', { email: userEmail })
    }
    googleInitiateCheckoutTrackedRef.current = true
  }, [sessionIdentity?.email])

  const handleSelectPayPal = () => {
    if (paymentTab === 'paypal') return
    setPaymentTab('paypal')

    Mixpanel.track.PaymentMethodSelected({
      provider: 'PayPal',
      'Product Name': priceData.product.name,
      'Plan Type': priceData.price.type,
      'Payment Method': payPalMode === 'subscription' ? 'PayPal Subscription' : 'PayPal',
      page_name: 'Checkout Page',
    })
  }

  return (
    <Page
      page_name="Checkout Page"
      className={`checkout-page min-h-screen w-full bg-[#f9f9fb] font-effra text-black-2 antialiased
    lg:min-h-0 lg:flex-1 lg:flex lg:flex-col
    lg:bg-[linear-gradient(90deg,#f9f9fb_0%,#f9f9fb_50%,#ffffff_50%,#ffffff_100%)]`}>
      <div
        className={`mx-auto flex w-full max-w-screen-xl flex-col
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
                onClick={handleSelectPayPal}
                className={`order-1 flex items-center gap-2 border-b border-[#dddee4] px-4 py-2 text-left lg:order-2 lg:border-b-0 ${
                  paymentTab === 'paypal' ? 'bg-white' : 'bg-[#f9f9fb]'
                }`}>
                <FontAwesomeIcon
                  icon={paymentTab === 'paypal' ? faSquareCheck : faSquare}
                  className="text-primary pl-2"
                  size="lg"
                />
                <span className="text-lg font-bold tracking-tight text-[#003087] ml-2">PayPal</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentTab('card')}
                className={`order-2 flex items-center gap-2 border-b border-[#dddee4] px-4 py-2 text-left lg:order-1 lg:border-b-0 lg:border-r lg:border-[#dddee4] lg:pr-4 ${
                  paymentTab === 'card' ? 'bg-white' : 'bg-[#f9f9fb]'
                }`}>
                <FontAwesomeIcon
                  icon={paymentTab === 'card' ? faSquareCheck : faSquare}
                  className="text-primary pl-2"
                  size="lg"
                />

                <span className="text-base font-bold leading-[22px] text-black-2 ml-2">
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
                  productName={priceData.product.name}
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
    </Page>
  )
}
