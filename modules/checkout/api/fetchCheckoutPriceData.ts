import type { CheckoutPriceDataResponse } from '@/modules/checkout/types'

export type FetchCheckoutPriceDataResult =
  | { kind: 'ok'; payload: CheckoutPriceDataResponse }
  | { kind: 'network_error'; message: string }
  | { kind: 'http_error'; status: number | null; message?: string }

function isCheckoutPriceData(data: unknown): data is CheckoutPriceDataResponse {
  if (!data || typeof data !== 'object') return false
  const d = data as Record<string, unknown>
  return (
    d.success === true &&
    typeof d.product === 'object' &&
    d.product !== null &&
    typeof d.price === 'object' &&
    d.price !== null
  )
}

export async function fetchCheckoutPriceData(params: {
  strapiOrigin: string
  lookupKey: string
}): Promise<FetchCheckoutPriceDataResult> {
  const { strapiOrigin, lookupKey } = params
  const url = new URL('/api/checkout', strapiOrigin)
  url.searchParams.set('price', lookupKey)

  let payload: unknown
  let status: number | null = null
  let fetchError: string | null = null

  try {
    const res = await fetch(url.toString(), { cache: 'no-store' })
    status = res.status
    payload = await res.json()
    console.log('[checkout] GET /api/checkout', {
      url: url.toString(),
      status: res.status,
      lookupKey,
      body: payload,
    })
  } catch (err) {
    fetchError = err instanceof Error ? err.message : 'Request failed'
    console.error('[checkout] GET /api/checkout failed', { url: url.toString(), err })
  }

  if (fetchError) {
    return { kind: 'network_error', message: fetchError }
  }

  if (status !== 200 || !isCheckoutPriceData(payload)) {
    const message =
      typeof payload === 'object' &&
      payload !== null &&
      'message' in payload &&
      typeof (payload as { message?: unknown }).message === 'string'
        ? (payload as { message: string }).message
        : undefined

    return { kind: 'http_error', status, message }
  }

  return { kind: 'ok', payload }
}
