'use client'

import ErrorMessage from '@/components/ErrorMessage'
import { Loader } from '@/components/Loader'
import { Section } from '@/components/Section'
import { useEffect, useState } from 'react'

export default function OrderCompletePage({ params }: { params: { session_id: string } }) {
  const [finalizeError, setFinalizeError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/thinkific-checkout-finalize', {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'include',
      body: JSON.stringify({
        session_id: params.session_id,
      }),
    }).then(async (res) => {
      const response = await res.json()
      if (response.success && response.destination) {
        window.location.assign(response.destination)
      } else {
        console.error('Error when finalizing checkout')
        setErrorMessage(response.message)
        setFinalizeError(true)
      }
    })
  }, [])

  if (finalizeError)
    return (
      <Section className="!py-48 lg:!py-72">
        <ErrorMessage message={errorMessage} />
      </Section>
    )
  return <Loader className="!py-48 lg:!py-72" />
}
