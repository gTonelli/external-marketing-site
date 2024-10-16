'use client'

// core
import React from 'react'
// components
import { IDefaultProps } from '@/components'
import { Button } from '@/components/Button/Button'
import { Text } from '@/components/Text/Text'
// libraries
import cx from 'classnames'
import { formatPrice } from '@/utils/functions'
import { Card } from '../Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@awesome.me/kit-545b942488/icons/classic/solid'

interface IBenefit {
  included: boolean
  title: string
}
export interface ICardIATPricingProps extends IDefaultProps {
  /** Whether this pricing is recommended by the PDS team */
  bRecommended: boolean
  /** List of included benefits */
  benefits: IBenefit[]
  /** Current price */
  currentPrice: number
  /** Original price */
  originalPrice: number
  /** Short text under the title */
  subTitle: string
  /** Title/name of the pricing */
  title: string
  /** Event called when user clicks the "Sign up" or "Buy now" buttons */
  onSelect(): void
}

/** `Card` variant for displaying pricing plans of becoming a coach on IAT page */
export const CardIATPricing = ({
  benefits,
  bRecommended,
  className,
  currentPrice,
  originalPrice,
  subTitle,
  title,
  onSelect,
}: ICardIATPricingProps) => {
  return (
    <Card
      className={cx(
        'flex-1 shadow-none',
        bRecommended ? 'bg-primary border-2 border-primary' : 'bg-white',
        className
      )}>
      {/* RECOMMENDED HIGHLIGHT */}
      <div className="w-full h-10 flex-center">
        {bRecommended && (
          <Text
            className="font-bold text-center text-white"
            content="HIGHLY RECOMMENDED"
            spacing="tracking-0.325"
          />
        )}
      </div>

      <div className="h-full text-center border border-primary-light rounded-20 bg-white shadow-lg px-6 py-10 lg:py-20">
        <Text.Heading className="mb-8" content={title} size={3} />

        <Text className="h-16 font-bold text-primary mb-8" content={subTitle} />

        <Text className="line-through" content={formatPrice(originalPrice)} />
        <Text className="font-bold text-2xl text-primary" content={formatPrice(currentPrice)} />

        <div className="w-full border-b border-grey my-6" />

        <div className="w-full flex flex-col space-y-6 text-left mb-10">
          {benefits.map((benefit, index) => (
            <div
              key={`card_iat_pricing_benefit_${index}`}
              className={cx('w-full flex', !benefit.included && 'opacity-50')}>
              <FontAwesomeIcon
                className="text-primary pt-[3px] mr-2"
                icon={benefit.included ? faCheck : faTimes}
              />

              <Text content={benefit.title} />
            </div>
          ))}

          <Text content="...and much more!" />
        </div>

        <Button
          className="w-full"
          label={bRecommended ? 'SIGN UP FOR WAITLIST' : 'BUY NOW'}
          onClick={onSelect}
        />
      </div>
    </Card>
  )
}
