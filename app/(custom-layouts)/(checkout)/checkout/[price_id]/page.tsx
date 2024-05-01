'use client'

import { Loader } from '@/components/Loader'
import Mixpanel from '@/modules/Mixpanel'
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react'
import { Maybe } from 'yup'
import { captureMessage } from '@sentry/nextjs'
import { useSearchParams } from 'next/navigation'

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

export default function CheckoutPage({ params }: { params: { price_id: string } }) {
  const [clientSecret, setClientSecret] = useState<Maybe<string>>()
  const discount_id = useSearchParams().get('discount_id')

  useEffect(() => {
    Mixpanel.track.CheckoutStepStarted({
      'Checkout Page': 'checkout_page',
      'Product Price': 'The All-Access Pass $67.00 / month',
    })

    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/thinkific-checkout', {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify({
        priceId: params.price_id,
        discountId: discount_id,
        uiMode: 'embedded',
      }),
    })
      .then(async (res) => {
        const response = await res.json()
        if (!response.success || !response.clientSecret) {
          throw 'Missing success status or clientSecret'
        }

        setClientSecret(response.clientSecret)
      })
      .catch((error) => {
        alert('Something has gone wrong! Please try again.')
        console.error(error)
        captureMessage(`Error with custom checkout`)
      })
  }, [])

  if (!clientSecret) return <Loader className="!py-48 lg:!py-72" />

  return (
    <EmbeddedCheckoutProvider stripe={stripe} options={{ clientSecret }}>
      <EmbeddedCheckout className="pb-12 flex flex-grow lg:py-12 bg-blue-lightest" />
    </EmbeddedCheckoutProvider>
  )
}
