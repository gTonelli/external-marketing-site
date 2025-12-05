'use client'

// core
import { useRef } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Text } from '@/components/Text/Text'
import { faCalendarCheck, faUserPlus } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faYoutube } from '@awesome.me/kit-545b942488/icons/classic/brands'
// libraries
import cx from 'classnames'
import { useCountUp } from 'react-countup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

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
  icons?: [IconProp, IconProp, IconProp]
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
  cardTexts = ['Course Enrolments', 'Views on YouTube', 'Members in 120+ countries'],
  cardNumbers = [70000, 76500000, 45000],
  className,
  classNameCard,
  classNameIcon,
  icons = [faCalendarCheck, faYoutube, faUserPlus],
}: ISocialProofBarProps) => {
  return (
    <div
      className={cx(
        `max-w-sm mx-auto py-10 text-center px-2 xxs:px-4 xs:px-6 lg:gap-4  lg:max-w-screen-xl lg:grid lg:grid-cols-3 xl:gap-12`,
        className
      )}>
      {cardNumbers.map((_, i) => (
        <SocialProofCard
          key={`social_proof-card_${i}`}
          className={classNameCard}
          classNameIcon={classNameIcon}
          icon={icons[i]}
          label={cardTexts[i]}
          metric={cardNumbers[i]}
        />
      ))}
    </div>
  )
}

interface ISocialProofCardProps extends IDefaultProps {
  classNameIcon?: string
  icon: IconProp
  metric: number
  label: string
}

const SocialProofCard = ({
  className,
  classNameIcon,
  icon,
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
        'py-4 px-2 my-4 rounded-3xl text-left shadow-center-light bg-white xxs:px-4 xs:px-7',
        className
      )}>
      <div className="grid text-left grid-cols-12 gap-2 items-center">
        <div className="flex justify-center items-center col-span-4">
          <FontAwesomeIcon className={cx('!text-primary', classNameIcon)} icon={icon} size="2x" />
        </div>

        <div className="col-span-8 text-black">
          <div ref={countUpRef} className="font-sspb text-3xl" />

          <p>{label}</p>
        </div>
      </div>
    </div>
  )
}
