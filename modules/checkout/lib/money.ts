// modules
import type { CheckoutPrice } from '@/modules/checkout/types'

export function formatMoney(cents: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(cents / 100)
}

export function priceLineLabel(price: CheckoutPrice, useCurrentPrice = true): JSX.Element | string {
  const money = formatMoney(
    useCurrentPrice ? price.currentPrice : price.originalPrice,
    price.currency
  )
  if (price.type !== 'recurring' || !price.recurring) return money
  const { interval, intervalCount } = price.recurring
  if (intervalCount === 1) {
    if (interval === 'month') return `${money}/month`
    if (interval === 'year') return `${money}/year`
    if (interval === 'week') return `${money}/week`
    if (interval === 'day') return `${money}/day`
  }
  return `${money} / ${intervalCount} ${interval}s`
}

export function totalLabel(price: CheckoutPrice): string {
  return `${price.currency} ${priceLineLabel(price)}`
}
