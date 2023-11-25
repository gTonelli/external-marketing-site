'use client'

import { Loader } from '@/components/Loader'
import { useEffect } from 'react'

export default function OrderCompletePage({ params }: { params: { session_id: string } }) {
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
      }
    })
  }, [])

  return <Loader className="!py-48 lg:!py-72" />
}
