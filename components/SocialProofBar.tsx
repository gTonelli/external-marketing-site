'use client'

// core
import React, { useRef } from 'react'
// components
import { IDefaultProps } from '.'
// libraries
import cx from 'classnames'
import { useCountUp } from 'react-countup'
import { Image } from './Image'
import { Text } from './Text/Text'

interface ISocialProofBarProps extends IDefaultProps {
  /**
   * Classnames for the cards
   */
  classNameCard?: string
  /**
   * Classnames for the icons
   */
  classNameIcon?: string
  /**
   * Icons to be displayed
   * @default '["images/TrialPage/trial-page-members-icon.svg", "images/TrialPage/trial-page-yt-icon.svg", "images/TrialPage/trial-page-facebook-icon.svg"]'
   */
  iconImgs?: [string, string, string]
  /**
   * Texts to display in the 3 cards
   * @default "['Members and Counting', 'Youtube Views', 'Facebook Group Members']"
   */
  cardTexts?: [string, string, string]
  /**
   * Card numbers to display and count up to
   * @default '[15000, 21000000, 15000]'
   */
  cardNumbers?: [number, number, number]
}

export const SocialProofBar = ({
  cardTexts = ['Members and Counting', 'Youtube Views', 'Facebook Group Members'],
  cardNumbers = [15000, 21000000, 15000],
  className,
  classNameCard,
  classNameIcon,
  iconImgs = [
    'TrialPage/trial-page-members-icon.svg',
    'TrialPage/trial-page-yt-icon.svg',
    'TrialPage/trial-page-facebook-icon.svg',
  ],
}: ISocialProofBarProps) => {
  return (
    <div
      className={cx(
        `max-w-sm mx-auto py-10 text-center px-2 xxs:px-4 xs:px-6
                    lg:gap-4  lg:max-w-screen-xl lg:grid lg:grid-cols-3 xl:gap-12`,
        className
      )}>
      {iconImgs.map((icon, i) => (
        <SocialProofCard
          key={`social_proof-card_${i}`}
          className={classNameCard}
          classNameIcon={classNameIcon}
          img={iconImgs[i]}
          label={cardTexts[i]}
          metric={cardNumbers[i]}
        />
      ))}
    </div>
  )
}

interface ISocialProofCardProps extends IDefaultProps {
  classNameIcon?: string
  img: string
  metric: number
  label: string
}

const SocialProofCard = ({
  className,
  classNameIcon,
  img,
  metric,
  label,
}: ISocialProofCardProps) => {
  // ==================== Context ====================
  const countUpRef = useRef(null)

  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: metric,
    delay: 0,
    duration: 2.5,
    separator: ',',
    suffix: '+',
  })

  return (
    <div
      className={cx(
        'flex flex-center py-4 px-2 my-4 rounded-3xl text-left shadow-center-light bg-white xxs:px-4 xs:px-7',
        className
      )}>
      <div className="grid grid-cols-12 gap-2 items-center">
        <Image
          className={cx(
            'w-4/5 p-2 rounded-2xl bg-blue-lightest col-span-4 lg:w-4/5',
            classNameIcon
          )}
          src={img}
        />

        <div className="col-span-8">
          <div ref={countUpRef} className="font-sspb text-3xl" />

          <Text content={label} />
        </div>
      </div>
    </div>
  )
}
