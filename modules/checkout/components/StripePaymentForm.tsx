'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import type { StripeElementsOptionsMode } from '@stripe/stripe-js'
import type { Stripe } from '@stripe/stripe-js'
import type { CheckoutPrice, CheckoutProduct, CheckoutSessionIdentity } from '@/modules/checkout/types'
import { CheckoutIdentityFields } from '@/modules/checkout/components/CheckoutIdentityFields'
import { CheckoutPanelLoadingOverlay } from '@/modules/checkout/components/CheckoutPanelLoadingOverlay'
import { startStripeCheckoutSession } from '@/modules/checkout/api/stripeSession'
import {
  applyStickyNewUser,
  buildDeferredElementsOptions,
  buildPaymentElementOptions,
} from '@/modules/checkout/lib/stripe'
import { isValidEmail } from '@/modules/checkout/lib/identity'
import { buildThankYouUrl } from '@/modules/checkout/lib/thankYou'

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
    if (!isValidEmail(billingEmail)) {
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

      const { ok, status, data } = await startStripeCheckoutSession({
        strapiOrigin,
        lookupKey,
        email: billingEmail,
        firstName: firstName.trim(),
        lastName: lastName.trim(),
      })

      if (!ok) {
        setErrorMessage(
          typeof data.message === 'string' ? data.message : `Could not start checkout (${status}).`
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
            each renewal, per your plan&apos;s terms. Your subscription will renew automatically at
            the current rate each billing period. Cancel anytime before renewal to avoid future
            charges.
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

export { buildDeferredElementsOptions }
