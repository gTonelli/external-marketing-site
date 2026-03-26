// modules
import type { CheckoutProduct } from '@/modules/checkout/types'

const THINKIFIC_BASE =
  process.env.NEXT_PUBLIC_THINKIFIC_URL ?? 'https://university.personaldevelopmentschool.com'

/** Strapi `product.documentId` from GET /api/checkout -> thank-you `product_id`. */
export function thankYouProductIdFromStrapi(product: CheckoutProduct): string | null {
  const doc = product.documentId.trim()
  return doc.length > 0 ? doc : null
}

export function buildThankYouUrl(params: { email: string; productId: string | null; newUser: boolean }) {
  const email = params.email.trim()
  const u = new URL('/pages/checkout-v2-thank-you', THINKIFIC_BASE)
  u.searchParams.set('newUser', params.newUser ? 'true' : 'false')
  u.searchParams.set('email', email)
  if (params.productId != null && params.productId !== '') {
    u.searchParams.set('product_id', params.productId)
  }
  return u.toString()
}
