'use client'

// core
import Image from 'next/image'
// modules
import { formatMoney, priceLineLabel, totalLabel } from '@/modules/checkout/lib/money'
import type { CheckoutPriceDataResponse } from '@/modules/checkout/types'

export function OrderSummary({ data }: { data: CheckoutPriceDataResponse }) {
  const { product, price } = data
  const discountAmount = Math.abs(price.originalPrice - price.currentPrice)
  const showDiscountLine = price.originalPrice !== price.currentPrice
  const discountSign = price.originalPrice > price.currentPrice ? '-' : '+'
  const imageUrl =
    product.image && typeof product.image === 'object' && 'url' in product.image
      ? (product.image as { url?: string }).url
      : undefined

  const startLabel = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date())

  return (
    <div className="flex flex-col gap-4">
      <h2 className="hidden text-lg font-bold leading-7 text-black-2 mb-10 lg:block">
        Review order details
      </h2>

      <div className="flex gap-6">
        <div className="relative h-[104px] w-[104px] shrink-0 overflow-hidden rounded-lg bg-neutral-200">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="Product Image"
              className="h-full w-full object-cover"
              width={104}
              height={104}
            />
          ) : (
            <Image
              src="/images/pds-icon.png"
              alt="PDS Icon"
              fill
              className="object-contain p-4"
              sizes="104px"
            />
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2 text-black-2">
          <p className="text-base font-bold leading-[22px]">{product.name}</p>

          {(price.description || product.description) && (
            <p className="text-base font-normal leading-[22px]">
              {price.description || product.description}
            </p>
          )}
        </div>
      </div>

      <div className="h-px w-full bg-[#dddee4]" />

      <p className="text-base leading-[22px] text-black-2">Starting membership on {startLabel}</p>

      <div className="h-px w-full bg-[#dddee4]" />

      <div className="flex items-center justify-between text-base leading-[22px] text-black-2">
        <span>
          {price.type === 'recurring' &&
          price.recurring?.interval === 'month' &&
          price.recurring.intervalCount === 1
            ? 'Monthly'
            : price.title}
        </span>

        <span className="text-right">{priceLineLabel(price)}</span>
      </div>

      {showDiscountLine && (
        <>
          <div className="h-px w-full bg-[#dddee4]" />

          <div className="flex items-center justify-between text-base leading-[22px] text-black-2">
            <span>Discounts</span>

            <span className="text-right">
              {discountSign}

              {formatMoney(discountAmount, price.currency)}
            </span>
          </div>
        </>
      )}

      <div className="h-px w-full bg-[#dddee4]" />

      <div className="flex items-center justify-between text-xl font-bold leading-7 text-black-2">
        <span>Total</span>

        <span className="text-right">{totalLabel(price)}</span>
      </div>
    </div>
  )
}
