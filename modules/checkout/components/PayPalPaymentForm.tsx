'use client'

// core
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
// components
import { CheckoutIdentityFields } from '@/modules/checkout/components/CheckoutIdentityFields'
import { CheckoutPanelLoadingOverlay } from '@/modules/checkout/components/CheckoutPanelLoadingOverlay'
// libraries
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
// modules
import {
  payPalModeForPrice,
  strapiPayPalCaptureOrder,
  strapiPayPalConfirmSubscription,
  strapiPayPalCreateSubscription,
  strapiPayPalCreateOrder,
  strapiPayPalOrderApproved,
} from '@/modules/checkout/api/paypal'
import {
  isValidEmail,
  validateUserIdentity as validateCheckoutUserIdentity,
} from '@/modules/checkout/lib/identity'
import { buildThankYouUrl } from '@/modules/checkout/lib/thankYou'
import type { CheckoutPrice, CheckoutSessionIdentity } from '@/modules/checkout/types'
import Mixpanel from '@/modules/Mixpanel'

const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? ''

export type PayPalPaymentFormProps = {
  strapiOrigin: string
  lookupKey: string
  price: CheckoutPrice
  productName: string
  productId: string | null
  thinkificProductId: number | null
  sessionIdentity?: CheckoutSessionIdentity | null
  identityFieldsLocked?: boolean
}

export function PayPalPaymentForm({
  strapiOrigin,
  lookupKey,
  price,
  productName,
  productId,
  thinkificProductId,
  sessionIdentity,
  identityFieldsLocked = false,
}: PayPalPaymentFormProps) {
  const [email, setEmail] = useState(() => sessionIdentity?.email ?? '')
  const [firstName, setFirstName] = useState(() => sessionIdentity?.firstName ?? '')
  const [lastName, setLastName] = useState(() => sessionIdentity?.lastName ?? '')
  const [paypalButtonsReady, setPaypalButtonsReady] = useState(false)
  const [paypalProcessing, setPaypalProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const paypalActionsRef = useRef<{ enable?: () => void; disable?: () => void } | null>(null)
  const payPalFieldsLoadedTrackedRef = useRef(false)
  const searchParams = useSearchParams()
  const mode = payPalModeForPrice(price)
  const currency = price.currency.toUpperCase()

  useEffect(() => {
    setPaypalButtonsReady(false)
    setPaypalProcessing(false)
    paypalActionsRef.current = null
    payPalFieldsLoadedTrackedRef.current = false
  }, [mode, currency, price.payPalPriceApiId])

  useEffect(() => {
    if (!paypalButtonsReady || payPalFieldsLoadedTrackedRef.current) return
    payPalFieldsLoadedTrackedRef.current = true
    Mixpanel.track.PaymentFieldsLoaded({
      provider: 'PayPal',
      page_name: 'Checkout Page',
    })
  }, [paypalButtonsReady])

  const scriptOptions = useMemo(
    () => ({
      clientId: paypalClientId,
      currency,
      intent: mode === 'subscription' ? ('subscription' as const) : ('capture' as const),
      vault: mode === 'subscription',
    }),
    [currency, mode]
  )

  const identityIsValid = useMemo(() => {
    const e = email.trim()
    const fn = firstName.trim()
    const ln = lastName.trim()
    return Boolean(e && fn && ln && isValidEmail(e))
  }, [email, firstName, lastName])

  const validateUserIdentity = useCallback(() => {
    const result = validateCheckoutUserIdentity({
      email,
      firstName,
      lastName,
    })
    if (!result.identity) {
      setErrorMessage(result.errorMessage)
      return null
    }

    Mixpanel.setUser(result.identity.email)
    setErrorMessage(null)
    return result.identity
  }, [email, firstName, lastName])

  useEffect(() => {
    const actions = paypalActionsRef.current
    if (!actions) return
    if (identityIsValid) actions.enable?.()
    else actions.disable?.()
  }, [identityIsValid])

  const onSubscriptionApprove = useCallback(
    async (data: { subscriptionID?: string | null; orderID?: string | null }) => {
      const id = data.subscriptionID ?? undefined
      if (!id) {
        setErrorMessage('PayPal did not return a subscription id.')
        return
      }
      const orderId = data.orderID ?? undefined
      if (!orderId) {
        setErrorMessage('PayPal did not return an order id.')
        return
      }
      const identity = validateUserIdentity()
      if (!identity) return
      if (!productId) {
        setErrorMessage('Missing product id for PayPal fulfillment.')
        return
      }
      if (!price.payPalPriceApiId) {
        setErrorMessage('Missing PayPal plan id for this offer.')
        return
      }
      setErrorMessage(null)
      setPaypalProcessing(true)
      try {
        const res = await strapiPayPalConfirmSubscription(strapiOrigin, {
          ...identity,
          paypalSubscriptionId: id,
          productId,
          orderId,
          paypalPlanId: price.payPalPriceApiId,
          promoLabel: searchParams.get('promo_label'),
        })

        window.location.href =
          typeof res.destination === 'string' && res.destination
            ? res.destination
            : buildThankYouUrl({ email: identity.email, productId, newUser: true })
      } catch (err) {
        setPaypalProcessing(false)
        setErrorMessage(
          err instanceof Error ? err.message : 'Could not complete PayPal subscription.'
        )
      }
    },
    [price.payPalPriceApiId, productId, searchParams, strapiOrigin, validateUserIdentity]
  )

  const createOrder = useCallback(async () => {
    const identity = validateUserIdentity()
    if (!identity) throw new Error('Invalid details')
    Mixpanel.track.PaymentInitiated({
      provider: 'PayPal',
      'Product Name': productName,
      'Plan Type': price.type,
      'Payment Method': 'PayPal',
      page_name: 'Checkout Page',
    })
    return strapiPayPalCreateOrder(
      strapiOrigin,
      { lookupKey },
      {
        email: identity.email,
        currency: price.currency.toUpperCase() as 'USD' | 'CAD',
        promoLabel: searchParams.get('promo_label'),
      }
    )
  }, [
    lookupKey,
    price.currency,
    price.type,
    productName,
    searchParams,
    strapiOrigin,
    validateUserIdentity,
  ])

  const handlePayPalButtonsError = useCallback((err: unknown) => {
    setPaypalButtonsReady(true)
    setPaypalProcessing(false)
    Mixpanel.track.PaymentFailed({
      Message: 'An error occurred with PayPal buttons',
      Error: err,
      page_name: 'Checkout Page',
    })
    const msg =
      typeof err === 'object' &&
      err !== null &&
      'message' in err &&
      typeof (err as { message: unknown }).message === 'string'
        ? (err as { message: string }).message
        : 'PayPal error.'
    setErrorMessage(msg)
  }, [])

  const handlePayPalButtonsCancel = useCallback(async (data: { orderID?: string | null }) => {
    setPaypalProcessing(false)
    Mixpanel.track.PaymentFailed({
      Message: 'Payment cancelled by user',
      Code: 'incomplete',
      'Order ID': data.orderID ?? undefined,
      page_name: 'Checkout Page',
    })
  }, [])

  const onApproveOrder = useCallback(
    async (data: { orderID?: string }) => {
      const orderID = data.orderID
      if (!orderID) {
        setErrorMessage('PayPal did not return an order id.')
        return
      }
      const identity = validateUserIdentity()
      if (!identity) return
      if (!productId) {
        setErrorMessage('Missing product id for PayPal fulfillment.')
        return
      }
      setErrorMessage(null)
      setPaypalProcessing(true)
      try {
        await strapiPayPalCaptureOrder(strapiOrigin, orderID)
        const res = await strapiPayPalOrderApproved(strapiOrigin, {
          ...identity,
          paypalOrderId: orderID,
          productId,
          lookupKey,
          promoLabel: searchParams.get('promo_label'),
        })

        window.location.href =
          typeof res.destination === 'string' && res.destination
            ? res.destination
            : buildThankYouUrl({ email: identity.email, productId, newUser: true })
      } catch (err) {
        setPaypalProcessing(false)
        setErrorMessage(err instanceof Error ? err.message : 'Could not capture PayPal payment.')
      }
    },
    [lookupKey, productId, strapiOrigin, searchParams, validateUserIdentity]
  )

  if (!paypalClientId) {
    return (
      <p className="text-center text-sm text-red-600">
        PayPal is not configured (missing NEXT_PUBLIC_PAYPAL_CLIENT_ID).
      </p>
    )
  }

  if (mode === 'unavailable') {
    return (
      <p className="text-center text-sm text-black-2/80">
        PayPal is not enabled for this plan. Please pay with card or choose another offer.
      </p>
    )
  }

  return (
    <div className="font-effra">
      <CheckoutPanelLoadingOverlay
        show={!paypalButtonsReady || paypalProcessing}
        minHeightClassName="min-h-0">
        <div className="flex flex-col gap-5">
          <p className="text-xs text-[#888a95]">
            Enter your details, then sign in with PayPal to complete payment.
          </p>

          <CheckoutIdentityFields
            idPrefix="paypal"
            email={email}
            firstName={firstName}
            lastName={lastName}
            onEmailChange={setEmail}
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
            disabled={identityFieldsLocked}
          />

          {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

          <PayPalScriptProvider
            options={scriptOptions}
            key={`${mode}-${currency}-${price.payPalPriceApiId ?? 'order'}`}>
            {mode === 'subscription' && price.payPalPriceApiId ? (
              <PayPalButtons
                disabled={!identityIsValid}
                style={{ layout: 'vertical', shape: 'rect', label: 'subscribe' }}
                onInit={(_data, actions) => {
                  paypalActionsRef.current = actions
                  if (!identityIsValid) actions.disable()
                  setPaypalButtonsReady(true)
                }}
                onClick={(_data, actions) => {
                  const identity = validateUserIdentity()
                  return identity ? actions.resolve() : actions.reject()
                }}
                createSubscription={async () => {
                  const identity = validateUserIdentity()
                  if (!identity) throw new Error('Invalid details')
                  if (!productId) throw new Error('Missing product id for PayPal fulfillment.')
                  if (!price.payPalPriceApiId) throw new Error('Missing PayPal plan id.')
                  if (thinkificProductId == null) {
                    throw new Error('Missing Thinkific product id for subscription create.')
                  }
                  Mixpanel.track.PaymentInitiated({
                    provider: 'PayPal',
                    'Product Name': productName,
                    'Plan Type': price.type,
                    'Payment Method': 'PayPal Subscription',
                    page_name: 'Checkout Page',
                  })
                  return await strapiPayPalCreateSubscription(
                    strapiOrigin,
                    { lookupKey },
                    {
                      planId: price.payPalPriceApiId,
                      productId,
                      thinkificProductId,
                      email: identity.email,
                      promoLabel: searchParams.get('promo_label'),
                    }
                  )
                }}
                onApprove={async (data) => {
                  await onSubscriptionApprove({
                    subscriptionID: data.subscriptionID,
                    orderID: (data as { orderID?: string | null }).orderID,
                  })
                }}
                onCancel={handlePayPalButtonsCancel}
                onError={handlePayPalButtonsError}
              />
            ) : (
              <PayPalButtons
                disabled={!identityIsValid}
                style={{ layout: 'vertical', shape: 'rect', label: 'paypal' }}
                createOrder={createOrder}
                onInit={(_data, actions) => {
                  paypalActionsRef.current = actions
                  if (!identityIsValid) actions.disable()
                  setPaypalButtonsReady(true)
                }}
                onClick={(_data, actions) => {
                  const identity = validateUserIdentity()
                  return identity ? actions.resolve() : actions.reject()
                }}
                onApprove={onApproveOrder}
                onCancel={handlePayPalButtonsCancel}
                onError={handlePayPalButtonsError}
              />
            )}
          </PayPalScriptProvider>
        </div>
      </CheckoutPanelLoadingOverlay>
    </div>
  )
}
