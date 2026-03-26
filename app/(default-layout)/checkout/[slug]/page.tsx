import type { Metadata } from 'next'
import { CheckoutClient } from './CheckoutClient'
import type { CheckoutPriceDataResponse } from '../types'
import { Page } from '@/components/Page'

/** Staging API host from OpenAPI; override with NEXT_PUBLIC_STRAPI_URL (e.g. ngrok). */
const STRAPI_ORIGIN =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? 'https://staging.strapi.personaldevelopmentschool.com'

export const metadata: Metadata = {
  title: 'Checkout',
  robots: 'noindex',
}

type PageProps = {
  params: { slug: string }
}

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

export default async function CheckoutPage({ params }: PageProps) {
  const lookupKey = decodeURIComponent(params.slug)
  const url = new URL('/api/checkout', STRAPI_ORIGIN)
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
    return (
      <Page page_name="Checkout Page" className="mx-auto max-w-lg px-6 py-16 text-center">
        <h1 className="text-xl font-bold text-black-2">Checkout unavailable</h1>

        <p className="mt-2 text-black-2/80">{fetchError}</p>
      </Page>
    )
  }

  if (status !== 200 || !isCheckoutPriceData(payload)) {
    return (
      <Page page_name="Checkout Page" className="mx-auto max-w-lg px-6 py-16 text-center">
        <h1 className="text-xl font-bold text-black-2">Checkout</h1>

        <p className="mt-2 text-black-2/80">
          Could not load this plan{status ? ` (HTTP ${status})` : ''}. Check the link or try again
          later.
        </p>

        {typeof payload === 'object' &&
          payload !== null &&
          'message' in payload &&
          typeof (payload as { message?: unknown }).message === 'string' && (
            <p className="mt-2 text-sm text-red-600">{(payload as { message: string }).message}</p>
          )}
      </Page>
    )
  }

  return <CheckoutClient priceData={payload} strapiOrigin={STRAPI_ORIGIN} />
}
