'use client'

import ErrorMessage from '@/components/ErrorMessage'
import { Loader } from '@/components/Loader'
import { Section } from '@/components/Section'
import { useFacebookPixel } from '@/modules/FacebookPixel'
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
import { sendGTMEvent } from '@next/third-parties/google'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'

export default function OrderCompletePage() {
  const session_id = useSearchParams().get('session_id')
  const [finalizeError, setFinalizeError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const fbq = useFacebookPixel()

  useEffect(() => {
    const cookies = new Cookies()
    if (!fbq || !session_id) return

    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/thinkific-checkout-finalize', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'include',
      body: JSON.stringify({
        session_id: session_id,
        fbc: cookies.get('_fbc'),
        fbp: cookies.get('_fbp'),
      }),
    }).then(async (res) => {
      const response = await res.json()
      if (!response.success || !response.destination) {
        console.error('Error when finalizing checkout')
        setErrorMessage(response.message)
        setFinalizeError(true)
      }
      if (response.email) {
        Mixpanel.setUser(response.email)
        Storage.set('lastUserEmail', response.first_name)
      }
      if (response.first_name && typeof response.first_name === 'string') {
        Storage.set('userFirstName', response.first_name)
      }

      fbq?.event('Purchase', {
        event_id: response.orderId,
        value: response.value || 67.0,
        currency: 'USD',
        contents: [
          {
            id: response.orderId,
            quantity: 1,
          },
        ],
        content_name: 'The All-Access Pass',
        content_type: 'product',
      })

      sendGTMEvent({
        event: 'conversion',
        send_to: 'AW-696431615/YmoxCI3L77UBEP_niswC',
        value: response.value,
        currency: 'USD',
        transaction_id: response.orderId,
      })

      if (response.destination) {
        window.location.assign(response.destination)
      }
    })
  }, [fbq, session_id])

  if (finalizeError) {
    return (
      <Section className="!py-48 lg:!py-72">
        <ErrorMessage message={errorMessage} />
      </Section>
    )
  }
  return <Loader className="!py-48 lg:!py-72" />
}
