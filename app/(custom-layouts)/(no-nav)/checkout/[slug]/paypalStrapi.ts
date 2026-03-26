import type { CheckoutPrice } from '../types'

/**
 * Strapi PayPal endpoints — align names/payloads with your backend OpenAPI.
 * Adjust `PAYPAL_API` paths if your routes differ.
 */
const paths = {
  createOrder: '/api/paypal-order',
  captureOrder: '/api/capture-paypal-order',
  orderApproved: '/api/paypal-order-approved',
  createSubscription: '/api/paypal-subscription',
  confirmSubscription: '/api/paypal-subscription-approved',
} as const

function parseOrderId(body: Record<string, unknown>): string {
  const id =
    (typeof body.orderID === 'string' && body.orderID) ||
    (typeof body.orderId === 'string' && body.orderId) ||
    (typeof body.id === 'string' && body.id)
  if (!id) throw new Error('Checkout did not return a PayPal order id.')
  return id
}

export type PayPalCreateOrderBody = {
  lookupKey: string
  email: string
  firstName: string
  lastName: string
}

/** One-time / payment: server creates PayPal order and returns orderID */
export async function strapiPayPalCreateOrder(
  strapiOrigin: string,
  body: PayPalCreateOrderBody
): Promise<string> {
  const res = await fetch(`${strapiOrigin}${paths.createOrder}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = (await res.json()) as Record<string, unknown>
  if (!res.ok) {
    throw new Error(
      typeof data.message === 'string' ? data.message : `PayPal order failed (${res.status})`
    )
  }
  return parseOrderId(data)
}

export async function strapiPayPalCaptureOrder(
  strapiOrigin: string,
  orderID: string
): Promise<void> {
  const res = await fetch(`${strapiOrigin}${paths.captureOrder}/${orderID}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  })
  const data = (await res.json()) as Record<string, unknown>
  if (!res.ok) {
    throw new Error(
      typeof data.message === 'string' ? data.message : `PayPal capture failed (${res.status})`
    )
  }
}

export type PayPalOrderApprovedBody = {
  paypalOrderId: string
  productId: string
  lookupKey: string
  bonusCourseId?: string | null
  bonusBundleId?: string | null
}

/** One-time: fulfill after PayPal capture (enroll, mark paid, return destination URL). */
export async function strapiPayPalOrderApproved(
  strapiOrigin: string,
  body: PayPalOrderApprovedBody
): Promise<{ destination?: string }> {
  const res = await fetch(`${strapiOrigin}${paths.orderApproved}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = (await res.json()) as Record<string, unknown>
  if (!res.ok) {
    throw new Error(
      typeof data.message === 'string' ? data.message : `PayPal order approved failed (${res.status})`
    )
  }
  return typeof data.destination === 'string' ? { destination: data.destination } : {}
}

export type PayPalCreateSubscriptionBody = {
  planId: string
  productId: string
  thinkificProductId: number
  email: string
  promoLabel?: string | null
}

function parseSubscriptionId(body: Record<string, unknown>): string {
  const subscription =
    typeof body.subscription === 'object' && body.subscription !== null
      ? (body.subscription as Record<string, unknown>)
      : null
  const id = subscription && typeof subscription.id === 'string' && subscription.id
  if (!id) throw new Error('Checkout did not return a PayPal subscription id.')
  return id
}

/** Subscription: server creates subscription + links it to order */
export async function strapiPayPalCreateSubscription(
  strapiOrigin: string,
  params: { lookupKey: string; coupon?: string },
  body: PayPalCreateSubscriptionBody
): Promise<string> {
  const u = new URL(`${strapiOrigin}${paths.createSubscription}`)
  u.searchParams.set('lookup_key', params.lookupKey)
  if (params.coupon) u.searchParams.set('coupon', params.coupon)

  const res = await fetch(u.toString(), {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = (await res.json()) as Record<string, unknown>
  if (!res.ok) {
    throw new Error(
      typeof data.message === 'string'
        ? data.message
        : `PayPal subscription create failed (${res.status})`
    )
  }
  return parseSubscriptionId(data)
}

export type PayPalConfirmSubscriptionBody = {
  email: string
  firstName: string
  lastName: string
  paypalSubscriptionId: string
  productId: string
  orderId: string
  paypalPlanId: string
}

export async function strapiPayPalConfirmSubscription(
  strapiOrigin: string,
  body: PayPalConfirmSubscriptionBody
): Promise<{ destination?: string }> {
  const res = await fetch(`${strapiOrigin}${paths.confirmSubscription}`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const data = (await res.json()) as Record<string, unknown>
  if (!res.ok) {
    throw new Error(
      typeof data.message === 'string' ? data.message : `PayPal subscription failed (${res.status})`
    )
  }

  return typeof data.destination === 'string' ? { destination: data.destination } : {}
}

export function payPalModeForPrice(price: CheckoutPrice): 'subscription' | 'order' | 'unavailable' {
  if (price.type === 'recurring') {
    return price.payPalPriceApiId ? 'subscription' : 'unavailable'
  }
  return 'order'
}
