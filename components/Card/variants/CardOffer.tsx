'use client'

// core
import React from 'react'
// components
import { IDefaultProps } from '@/components'
// utils
import cx from 'classnames'
// modules
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'

interface ICardOfferProps extends IDefaultProps {
  /**
   * Render the offer section with badges?
   * @default false
   */
  showBadges?: boolean
  /**
   * Render the offer section with disclaimer text?
   * @default false
   */
  showDisclaimer?: boolean
  /**
   * Bottom text
   */
  bottomText?: string
  /**
   * Bottom sub text
   */
  bottomSubText?: string
  /**
   * Link for the card
   */
  link: string
  /**
   * Offer Price
   */
  offerPrice?: string
  /**
   * Size of the offerPrice font
   * @default 'xl'
   */
  offerPriceFontSize?: 'md' | 'lg' | 'xl'
  /**
   * Offer sub text (bottom)
   */
  offerSubText?: string
  /**
   * Size of the offerSubtext font
   * @default 'sm'
   */
  offerSubTextFontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /**
   * Offer sup text (top)
   */
  offerSupText?: string
  /**
   * Size of the offerSuptext font
   * @default 'dm'
   */
  offerSupTextFontSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /**
   * Text at the top of the card
   */
  topText?: string
  /**
   * Inline strikethrough text in the heading
   */
  topStrikethroughText?: string
  /**
   * Subheading text at the top of the card
   */
  topSubheadingText?: string
}

export const CardOffer = ({
  className,
  showBadges = false,
  showDisclaimer = false,
  bottomText,
  bottomSubText,
  link,
  offerPrice,
  offerPriceFontSize = 'xl',
  offerSubText,
  offerSubTextFontSize = 'sm',
  offerSupText,
  offerSupTextFontSize = 'sm',
  topText,
  topStrikethroughText,
  topSubheadingText,
}: ICardOfferProps) => {
  return (
    <div>
      <a
        className={cx(
          `block cursor-pointer bg-gradient-to-tr text-center shadow-gray rounded-[64px] from-purple-dark to-purple-medium 
                        my-4 p-8 transition-all hover:opacity-90 hover:no-underline hover:shadow-centered hover:scale-105
                        xs:rounded-[96px]`,
          className
        )}
        href={link}>
        <Text.Wrapper
          className="inline-block mb-2 border-t-2 border-b-2 font-bold text-white border-white py-1 
                          xs:tracking-widest xs:px-4">
          <Text className="text-2xl inline" content={topText} />

          {topStrikethroughText && (
            <Text className="text-2xl inline line-through" content={topStrikethroughText} />
          )}
        </Text.Wrapper>

        <Text className="underline text-xl text-white" content={topSubheadingText} />

        {offerSupText && (
          <Text
            className={`text-${offerSupTextFontSize} text-yellow-secondary mb-6 ${
              offerSupTextFontSize === 'xl' ? 'mt-4' : ''
            }`}
            content={offerSupText}
          />
        )}

        <Text
          className={`trial-text-stroke ${
            offerPriceFontSize === 'xl'
              ? 'text-[130px] leading-[125px] xs:text-[154px] xs:leading-[145px]'
              : offerPriceFontSize === 'lg'
              ? 'text-[90px] leading-[85px]'
              : 'text-[45px] leading-[40px] trial-text-stroke-md my-6'
          } font-semibold`}
          content={offerPrice}
        />

        <Text
          className={`text-${offerSubTextFontSize} text-yellow-secondary mb-6 ${
            offerSubTextFontSize === 'xl' ? 'mt-4' : ''
          }`}
          content={offerSubText}
        />

        <Text className="underline text-xl text-white font-medium mb-1" content={bottomText} />

        <Text className="text-white mb-2" content={bottomSubText} />
      </a>

      {showBadges && (
        <div className="grid grid-cols-3 gap-8 text-center mt-8">
          <Image className="mx-auto" src="TrialPage/trial-page-badge-money-back.svg" />

          <Image className="mx-auto" src="TrialPage/trial-page-badge-lock.svg" />

          <Image className="mx-auto" src="TrialPage/trial-page-badge-7-days.svg" />
        </div>
      )}

      {showDisclaimer && (
        <>
          <Text
            className="text-center font-semibold mt-6"
            content="Risk-Free Satisfaction Guarantee:"
          />
          <Text
            className="text-center font-semibold"
            content="60 Full Days • 100% Refund • No Questions Asked"
          />
        </>
      )}
    </div>
  )
}
