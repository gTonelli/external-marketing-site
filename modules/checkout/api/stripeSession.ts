// modules
import type { CheckoutSessionResponse } from '@/modules/checkout/types'

type StartStripeCheckoutSessionParams = {
  strapiOrigin: string
  lookupKey: string
  email: string
  firstName: string
  lastName: string
  promoLabel?: string | null
}

export async function startStripeCheckoutSession({
  strapiOrigin,
  lookupKey,
  email,
  firstName,
  lastName,
  promoLabel,
}: StartStripeCheckoutSessionParams): Promise<{
  ok: boolean
  status: number
  data: CheckoutSessionResponse
}> {
  const res = await fetch(`${strapiOrigin}/api/checkout`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      lookupKey,
      email,
      firstName,
      lastName,
      promoLabel,
    }),
  })
  const data: CheckoutSessionResponse = await res.json()
  return {
    ok: res.ok,
    status: res.status,
    data,
  }
}
