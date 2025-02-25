// core
import Link from 'next/link'
// components
import { IDefaultProps } from '.'
import { CheckoutButton } from './CheckoutButton'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(custom-layouts)/(no-nav)/dream-life/config'
// libraries
import cx from 'classnames'
// utils
import { EExternalRoutes } from '@/utils/constants'

interface IPaymentOptionsProps extends IDefaultProps {
  placement?: 'top' | 'bottom'
  configKey: TPaymentOptionsConfigKey
}

export const PaymentOptions = ({
  className,
  placement = 'top',
  configKey,
}: IPaymentOptionsProps) => {
  const config = allConfigs[configKey]

  return (
    <div className={cx(`flex flex-col space-y-4 lg:justify-between items-center`, className)}>
      <Link href={config.checkoutUrl} className="hover:!no-underline">
        <div className="relative max-w-[474px] flex flex-row items-center space-x-5 text-white bg-primary rounded-[30px] p-6 lg:px-7 lg:pt-7 lg:pb-5">
          <p className="absolute -top-5 font-bold text-black bg-blue rounded-10 py-2 px-4">
            {config.offerLabel}
          </p>

          <div className="text-left">
            {config.offerType && <p className="tracking-33 font-bold">{config.offerType}</p>}

            <h2 className="mt-3">{config.title}</h2>

            <p className="max-w-[336px] mt-4 lg:block">{config.copy}</p>
          </div>
        </div>
      </Link>

      <CheckoutButton
        className="w-fit !font-bold border-none p-4 mt-4 mb-4 lg:mt-10"
        label={config.ctaLabel}
        href={config.checkoutUrl}
      />

      {config.disclaimer && (
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
  checkoutUrl: EExternalRoutes
  disclaimer?: string
}

const baseConfig: TConfig = {
  offerLabel: 'BEST VALUE',
  offerType: TH.HERO.offer.type,
  title: TH.HERO.offer.title,
  copy: TH.HERO.offer.copy,
  ctaLabel: 'TRY FOR FREE',
  checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_7_DAY_TRIAL,
}

const fourteendayFTConfig: TConfig = {
  offerLabel: 'LIMITED TIME OFFER',
  offerType: 'GET UNLIMITED ACCESS',
  title: '14-Day Free Trial',
  copy: 'Unlock 60+ Courses, Personalized Tools, and Expert Guidance to Experience Breakthroughs, Overcome Relationship Challenges, and Achieve Personal Goals',
  ctaLabel: 'START YOUR 14-DAY FREE TRIAL',
  checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL,
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
    title: 'Needs Course for Life + 7-Day Free Trial',
    copy: 'Take Our Free Trial to Our All-Access Pass Membership. Plus, Get the Discover, Embrace & Fulfill Your Personal Needs Course For FREE for LIFE to Support Your Growth!',
    ctaLabel: 'JOIN & START YOUR COURSE',
    checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_JAN_2025_PROMO_TRIAL,
    disclaimer:
      '*Start your free trial today! Plans start at $67.00/month after your trial ends. Cancel anytime before your trial ends to avoid charges. Don’t wait; this limited-time offer won’t last!*',
  },
  dreamLifeSexCourse: {
    offerLabel: 'Get Free Course For Life!',
    offerType: '',
    title: 'Get Your Emotional Intimacy & Sex Roadmap For Life - For FREE!',
    copy: (
      <>
        Sign up for a Free Trial to own the <strong>Attachment Styles & Sex Course</strong> for
        LIFE, so you can always navigate intimacy with clarity, build deeper connections, and
        embrace more enjoyable experiences.
      </>
    ),
    ctaLabel: 'SIGN UP FOR YOUR BEST LOVE LIFE!*',
    checkoutUrl: EExternalRoutes.THINKIFIC_CHECKOUT_MARCH_2025_PROMO_TRIAL,
    disclaimer:
      '*When you sign up today, you’ll get a 7-day free trial to the All-Access Pass Membership. At the end of the 7-day trial, you’ll move to a $67.00/month plan. If you cancel before your trial ends, you get to keep and access the Attachment Styles & Sex Course for life.',
  },
} satisfies Record<string, TConfig>

export type TPaymentOptionsConfigKey = keyof typeof allConfigs
