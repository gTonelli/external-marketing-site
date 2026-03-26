'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import type { CheckoutPrice, CheckoutSessionIdentity } from '../types'
import { CheckoutIdentityFields } from './CheckoutIdentityFields'
import { CheckoutPanelLoadingOverlay } from './CheckoutPanelLoadingOverlay'
import {
  payPalModeForPrice,
  strapiPayPalCaptureOrder,
  strapiPayPalConfirmSubscription,
  strapiPayPalCreateSubscription,
  strapiPayPalCreateOrder,
  strapiPayPalOrderApproved,
} from './paypalStrapi'

const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? ''

const thinkificBase =
  process.env.NEXT_PUBLIC_THINKIFIC_URL ?? 'https://university.personaldevelopmentschool.com'

function thankYouUrl(email: string, productId: string | null) {
  const e = email.trim()
  const u = new URL('/pages/checkout-v2-thank-you', thinkificBase)
  u.searchParams.set('newUser', e)
  u.searchParams.set('email', e)
  if (productId != null && productId !== '') u.searchParams.set('product_id', productId)
  return u.toString()
}

export type PayPalCheckoutSectionProps = {
  strapiOrigin: string
  lookupKey: string
  price: CheckoutPrice
  productId: string | null
  thinkificProductId: number | null
  sessionIdentity?: CheckoutSessionIdentity | null
  identityFieldsLocked?: boolean
}

export function PayPalCheckoutSection({
  strapiOrigin,
  lookupKey,
  price,
  productId,
  thinkificProductId,
  sessionIdentity,
  identityFieldsLocked = false,
}: PayPalCheckoutSectionProps) {
  const [email, setEmail] = useState(() => sessionIdentity?.email ?? '')
  const [firstName, setFirstName] = useState(() => sessionIdentity?.firstName ?? '')
  const [lastName, setLastName] = useState(() => sessionIdentity?.lastName ?? '')
  const [paypalButtonsReady, setPaypalButtonsReady] = useState(false)
  const [paypalProcessing, setPaypalProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const paypalActionsRef = useRef<{ enable?: () => void; disable?: () => void } | null>(null)

  const mode = payPalModeForPrice(price)
  const currency = price.currency.toUpperCase()

  useEffect(() => {
    setPaypalButtonsReady(false)
    setPaypalProcessing(false)
    paypalActionsRef.current = null
  }, [mode, currency, price.payPalPriceApiId])

  const scriptOptions = useMemo(() => {
    const base = {
      clientId: paypalClientId,
      currency,
      intent: mode === 'subscription' ? ('subscription' as const) : ('capture' as const),
      vault: mode === 'subscription',
    }
    return base
  }, [currency, mode])

  const identityIsValid = useMemo(() => {
    const e = email.trim()
    const fn = firstName.trim()
    const ln = lastName.trim()
    return Boolean(e && fn && ln && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))
  }, [email, firstName, lastName])

  const validateIdentity = useCallback(() => {
    const e = email.trim()
    const fn = firstName.trim()
    const ln = lastName.trim()
    if (!e || !fn || !ln) {
      setErrorMessage('Please enter your first name, last name, and email.')
      return null
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      setErrorMessage('Please enter a valid email address.')
      return null
    }
    setErrorMessage(null)
    return { email: e, firstName: fn, lastName: ln }
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
      const identity = validateIdentity()
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
        })

        window.location.href =
          typeof res.destination === 'string' && res.destination
            ? res.destination
            : thankYouUrl(identity.email, productId)
      } catch (err) {
        setPaypalProcessing(false)
        setErrorMessage(
          err instanceof Error ? err.message : 'Could not complete PayPal subscription.'
        )
      }
    },
    [price.payPalPriceApiId, productId, strapiOrigin, validateIdentity]
  )

  const createOrder = useCallback(async () => {
    const identity = validateIdentity()
    if (!identity) throw new Error('Invalid details')
    return strapiPayPalCreateOrder(
      strapiOrigin,
      { lookupKey },
      {
        email: identity.email,
        currency: price.currency.toUpperCase() as 'USD' | 'CAD',
        promoLabel: null,
      }
    )
  }, [lookupKey, price.currency, strapiOrigin, validateIdentity])

  const handlePayPalButtonsError = useCallback((err: unknown) => {
    setPaypalButtonsReady(true)
    setPaypalProcessing(false)
    const msg =
      typeof err === 'object' &&
      err !== null &&
      'message' in err &&
      typeof (err as { message: unknown }).message === 'string'
        ? (err as { message: string }).message
        : 'PayPal error.'
    setErrorMessage(msg)
  }, [])

  const onApproveOrder = useCallback(
    async (data: { orderID?: string }) => {
      const orderID = data.orderID
      if (!orderID) {
        setErrorMessage('PayPal did not return an order id.')
        return
      }
      const identity = validateIdentity()
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
        })

        window.location.href =
          typeof res.destination === 'string' && res.destination
            ? res.destination
            : thankYouUrl(identity.email, productId)
      } catch (err) {
        setPaypalProcessing(false)
        setErrorMessage(err instanceof Error ? err.message : 'Could not capture PayPal payment.')
      }
    },
    [lookupKey, productId, strapiOrigin, validateIdentity]
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
                  const identity = validateIdentity()
                  return identity ? actions.resolve() : actions.reject()
                }}
                createSubscription={async (_data, actions) => {
                  const identity = validateIdentity()
                  if (!identity) throw new Error('Invalid details')
                  if (!productId) throw new Error('Missing product id for PayPal fulfillment.')
                  if (!price.payPalPriceApiId) throw new Error('Missing PayPal plan id.')
                  if (thinkificProductId == null) {
                    throw new Error('Missing Thinkific product id for subscription create.')
                  }
                  // Custom backend controller creates subscription + links to order.
                  return await strapiPayPalCreateSubscription(
                    strapiOrigin,
                    { lookupKey },
                    {
                      planId: price.payPalPriceApiId,
                      productId,
                      thinkificProductId,
                      email: identity.email,
                      promoLabel: null,
                    }
                  )
                }}
                onApprove={async (data) => {
                  await onSubscriptionApprove({
                    subscriptionID: data.subscriptionID,
                    orderID: (data as { orderID?: string | null }).orderID,
                  })
                }}
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
                  const identity = validateIdentity()
                  return identity ? actions.resolve() : actions.reject()
                }}
                onApprove={onApproveOrder}
                onError={handlePayPalButtonsError}
              />
            )}
          </PayPalScriptProvider>
        </div>
      </CheckoutPanelLoadingOverlay>
    </div>
  )
}
