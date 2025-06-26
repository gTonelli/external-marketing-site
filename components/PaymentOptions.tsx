// core
import Link from 'next/link'
// components
import { IDefaultProps } from '.'
import { ButtonCheckout } from './Button/variants/ButtonCheckout'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(custom-layouts)/(no-nav)/dream-life/config'
// libraries
import cx from 'classnames'
// utils
import { externalRoutes } from '@/utils/constants'

interface IPaymentOptionsProps extends IDefaultProps {
  showDisclaimer?: boolean
  placement?: 'top' | 'bottom'
  configKey: TPaymentOptionsConfigKey
}

export const PaymentOptions = ({
  className,
  showDisclaimer = true,
  placement = 'top',
  configKey,
}: IPaymentOptionsProps) => {
  const config = allConfigs[configKey]

  return (
    <div className="flex flex-col items-center space-y-4 lg:justify-between">
      <Link href={config.checkoutUrl} className="hover:!no-underline">
        <div
          className={cx(
            'relative max-w-[474px] flex flex-row items-center space-x-5 text-white bg-primary rounded-[30px] p-6 lg:px-7 lg:pt-7 lg:pb-5',
            className
          )}>
          <p
            className={`absolute -top-7 font-bold max-w-[calc(100%-3rem)] xxs:-top-5 ${
              placement === 'top' ? 'bg-black text-white' : 'bg-white text-black'
            } rounded-10 py-2 px-4`}>
            {config.offerLabel}
          </p>

          <div className="text-left">
            {config.offerType && <p className="tracking-33 font-bold">{config.offerType}</p>}

            <h2 className="mt-3">{config.title}</h2>

            <p className="mt-4 lg:block">{config.copy}</p>
          </div>
        </div>
      </Link>

      <ButtonCheckout
        className="w-fit !font-bold border-none p-4 mt-4 mb-4 lg:mt-10"
        label={config.ctaLabel}
        href={config.checkoutUrl}
      />

      {showDisclaimer && config.disclaimer && (
        <p
          className={cx(
            'max-w-xl mx-auto',
            placement === 'top' ? 'text-gray-800' : 'text-gray-200'
          )}>
          <i>{config.disclaimer}</i>
        </p>
      )}
    </div>
  )
}

type TConfig = {
  offerLabel: string
  offerType?: string
  title: string
  copy: string | JSX.Element
  ctaLabel: string
  checkoutUrl: string
  disclaimer?: string
}

const baseConfig: TConfig = {
  offerLabel: 'BEST VALUE',
  offerType: TH.HERO.offer.type,
  title: TH.HERO.offer.title,
  copy: TH.HERO.offer.copy,
  ctaLabel: 'TRY FOR FREE',
  checkoutUrl: externalRoutes.checkout7DayTrial,
}

const fourteendayFTConfig: TConfig = {
  offerLabel: 'LIMITED TIME OFFER',
  offerType: 'GET UNLIMITED ACCESS',
  title: '14-Day Free Trial',
  copy: 'Unlock 60+ Courses, Personalized Tools, and Expert Guidance to Experience Breakthroughs, Overcome Relationship Challenges, and Achieve Personal Goals',
  ctaLabel: 'START YOUR 14-DAY FREE TRIAL',
  checkoutUrl: externalRoutes.checkout14DayTrial,
  disclaimer:
    '*$67.00/month after your free trial. Cancel any time before your trial ends to avoid being charged. This offer ends soon!*',
}

const allConfigs = {
  dreamLife: baseConfig,
  blackFriday14day: { ...fourteendayFTConfig, offerLabel: 'BLACK FRIDAY OFFER' },
  cyberMonday14day: { ...fourteendayFTConfig, offerLabel: 'CYBER MONDAY OFFER' },
  dreamLifeHoliday: {
    ...baseConfig,
    offerType: '',
    ctaLabel: 'SIGN UP & TRANSFORM',
    disclaimer:
      '*Start your free trial today! Plans start at $67.00/month after your trial ends. Cancel anytime before your trial ends to avoid charges. Don’t wait; this limited-time offer won’t last!*',
  },
  dreamLifeFreeCourse: {
    offerLabel: 'Free Trial & Exclusive Bonus Offer',
    offerType: '',
    title: 'Get the Personal Needs Course Free Forever & Start Thriving in Love and Life',
    copy: (
      <>
        When you start your <strong>7-Day Free Trial of the All-Access Pass</strong>, you’ll get the{' '}
        <strong>Discover, Embrace & Fulfill Your Personal Needs</strong> course (valued at $250)
        completely <strong>FREE for LIFE</strong>. In just one week, you’ll understand your
        subconscious needs, build healthy, fulfilling routines, and start thriving in your
        relationships.
      </>
    ),
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    checkoutUrl: externalRoutes.checkoutJan2025PromoTrial,
    disclaimer:
      '*When you join now, you’ll sign up for our All-Access Pass Membership. At the end of the trial, you’ll automatically become a member of the $67.00/month plan. Plus, even if you don’t stay with us after 7 days, you still get to keep and access the Discover, Embrace, and Fulfill Your Personal Needs course for life.',
  },
  dreamLifeSexCourse: {
    offerLabel: 'Free Course For Life + Free Trial',
    offerType: '',
    title: 'Get Your Attachment Styles & Sex Course ($250 Value) - For Free!',
    copy: (
      <>
        Start your <strong>7-Day Free Trial to the All-Access Pass</strong> today and unlock
        lifetime access to the <strong>Attachment Styles & Sex</strong> course (a $250 value)
        absolutely <strong>FREE</strong>. Get the proven roadmap to help you navigate intimacy,
        build deeper connections, embrace more enjoyable experiences, and learn how you and your
        partner approach intimacy based on your attachment style. Even if you leave before the trial
        ends, you’ll keep the course forever!
      </>
    ),
    ctaLabel: 'GET YOUR FREE COURSE & TRIAL',
    checkoutUrl: externalRoutes.checkoutMarch2025PromoTrial,
    disclaimer:
      '*When you join now, you’ll sign up for our All-Access Pass Membership. At the end of the trial, you’ll automatically become a member of the $67.00/month plan. Plus, even if you don’t stay with us after 7 days, you still get to keep and access the Attachment Styles & Sex Course for life. ',
  },
  dreamLifePillarsCourse: {
    offerLabel: 'Free Trial & Exclusive Free Course!',
    offerType: '',
    title: 'Get the Key Pillars Course For Free & Start Building Relationships With Confidence',
    copy: (
      <>
        Sign up for a 7-day Free Trial to our All-Access Pass and KEEP the Key Pillars for a Secure
        Relationship Course for LIFE. Learn how to heal deep wounds, break unhealthy patterns, and
        feel secure in love!
      </>
    ),
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    checkoutUrl: externalRoutes.checkoutJune2025PromoTrial,
    disclaimer:
      '*When you join now, you’ll sign up for our All-Access Pass Membership. At the end of the trial, you’ll automatically become a member of the $67.00/month plan. Plus, even if you don’t stay with us after 7 days, you still get to keep and access the Key Pillars for a Secure Relationship Course for life.',
  },
} satisfies Record<string, TConfig>

export type TPaymentOptionsConfigKey = keyof typeof allConfigs
