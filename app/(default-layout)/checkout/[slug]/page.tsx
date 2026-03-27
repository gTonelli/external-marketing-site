// core
import type { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
// modules
import { fetchCheckoutPriceData } from '@/modules/checkout/api/fetchCheckoutPriceData'
import { CheckoutClient } from '@/modules/checkout/components/CheckoutClient'

/** Staging API host from OpenAPI; override with NEXT_PUBLIC_STRAPI_URL (e.g. ngrok). */
const STRAPI_ORIGIN =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? 'https://staging.strapi.personaldevelopmentschool.com'

export const metadata: Metadata = {
  title: 'Checkout',
  robots: 'noindex',
  description: 'Checkout page for the Personal Development School',
  openGraph: {
    title: 'Checkout',
    description: 'Checkout page for the Personal Development School',
    images: [{ url: 'https://www.personaldevelopmentschool.com/images/pds-icon.png' }],
  },
}

type PageProps = {
  params: { slug: string }
}

export default async function CheckoutPage({ params }: PageProps) {
  const lookupKey = decodeURIComponent(params.slug)
  const checkoutResult = await fetchCheckoutPriceData({
    strapiOrigin: STRAPI_ORIGIN,
    lookupKey,
  })

  if (checkoutResult.kind === 'network_error') {
    return (
      <Page page_name="Checkout Page" className="mx-auto max-w-lg px-6 py-16 text-center">
        <h1 className="text-xl font-bold text-black-2">Checkout unavailable</h1>

        <p className="mt-2 text-black-2/80">{checkoutResult.message}</p>
      </Page>
    )
  }

  if (checkoutResult.kind === 'http_error') {
    return (
      <Page page_name="Checkout Page" className="mx-auto max-w-lg px-6 py-16 text-center">
        <h1 className="text-xl font-bold text-black-2">Checkout</h1>

        <p className="mt-2 text-black-2/80">
          Could not load this plan
          {checkoutResult.status ? ` (HTTP ${checkoutResult.status})` : ''}. Check the link or try
          again later.
        </p>

        {checkoutResult.message && (
          <p className="mt-2 text-sm text-red-600">{checkoutResult.message}</p>
        )}
      </Page>
    )
  }

  return <CheckoutClient priceData={checkoutResult.payload} strapiOrigin={STRAPI_ORIGIN} />
}
