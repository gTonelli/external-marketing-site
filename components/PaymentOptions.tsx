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
  theme?: 'light' | 'dark'
  configKey: TPaymentOptionsConfigKey
}

export const PaymentOptions = ({
  className,
  showDisclaimer = true,
  theme = 'light',
  configKey,
}: IPaymentOptionsProps) => {
  const config: TConfig = allConfigs[configKey]

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
              theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
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
            'max-w-xl mx-auto mb-4',
            theme === 'light' ? 'text-gray-800' : 'text-gray-200'
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
  disclaimer?: string | JSX.Element
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
    ctaLabel: 'SIGN UP & TRANSFORM',
    disclaimer:
      '*Start your free trial today! Plans start at $67.00/month after your trial ends. Cancel anytime before your trial ends to avoid charges. Don’t wait; this limited-time offer won’t last!*',
  },
  dreamLifeFreeCourse: {
    offerLabel: 'Free Trial & Exclusive Bonus Offer',
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
    disclaimer: (
      <>
        *
        <strong>
          With your 7 day free trial, you’ll get to keep the Personal Needs Course for free (and
          keep it for life, even after your trial ends!) After 7 days, you’ll become a member of PDS
          and get access to every course and every live event for $67/month. You won’t be charged
          before day 7 and can cancel anytime prior with no charge.
        </strong>
      </>
    ),
  },
  dreamLifeSexCourse: {
    offerLabel: 'Free Course For Life + Free Trial',
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
    disclaimer: (
      <>
        *
        <strong>
          With your 7 day free trial, you’ll get to keep the Attachment Styles & Sex Course for free
          (and keep it for life, even after your trial ends!) After 7 days, you’ll become a member
          of PDS and get access to every course and every live event for $67/month. You won’t be
          charged before day 7 and can cancel anytime prior with no charge.
        </strong>
      </>
    ),
  },
  dreamLifePillarsCourse: {
    offerLabel: 'Free Trial & Exclusive Free Course!',
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
    disclaimer: (
      <>
        *
        <strong>
          With your 7 day free trial, you’ll get to keep the Key Pillars for a Secure Relationship
          Course for free (and keep it for life, even after your trial ends!) After 7 days, you’ll
          become a member of PDS and get access to every course and every live event for $67/month.
          You won’t be charged before day 7 and can cancel anytime prior with no charge.
        </strong>
      </>
    ),
  },
  dreamLifeSomatic: {
    offerLabel: 'One Powerful Course. Lifetime Results. Just $19.',
    title: 'Unlock the Powerful Tools to Start Healing & Reconnecting With Yourself',
    copy: (
      <>
        For only $19, you can get the <strong>Release Emotions with Somatic Processing</strong>{' '}
        course and learn to calm your body and mind, unpack and self-soothe your emotions, and start
        healing and reconnecting with yourself and others.
      </>
    ),
    checkoutUrl: externalRoutes.checkoutJuly2025PromoTrial,
    ctaLabel: 'GET THE COURSE NOW!',
  },
  dreamLifeUpsell: {
    offerLabel: 'Take Step 2 RISK-FREE',
    title: 'Get the Emotional Mastery Course FOR FREE for 7 Days with an All-Access Pass Trial',
    copy: (
      <>
        You’ve taken the first step; now deepen your transformation with our{' '}
        <strong>Emotional Mastery & Belief Reprogramming</strong> course. Rewire your emotional
        responses, replace limiting beliefs, and create resilience and security in every
        relationship, including with yourself. Take this entire course — and get everything else we
        offer inside the school, including attachment style-specific programs — all for FREE for 7
        days.
      </>
    ),
    ctaLabel: 'START YOUR TRIAL NOW + ACCESS STEP 2',
    checkoutUrl: externalRoutes.checkout7DayTrial,
    disclaimer:
      '*When you join now, you’ll sign up for our All-Access Pass Membership. At the end of the trial, you’ll automatically become a member of the $67.00/month plan.',
  },
  dreamLifeBreakupCourse: {
    offerLabel: 'Free Trial & Exclusive Free Course',
    title: 'Get the Heal From a Breakup Course Free Forever & Start Healing Now',
    copy: (
      <>
        When you start your 7-Day Free Trial of the All-Access Pass Membership, you’ll get the{' '}
        <strong>Heal From a Breakup course (valued at $250) completely FREE for LIFE</strong>. This
        course will help you get answers on why any relationship (romantic, friendship, or family)
        broke down, understand what is driving your pain, and discover how to rebuild yourself from
        a place of calmness and self-love. In just one week, you’ll begin transforming that pain
        into growth, strengthening your relationship with yourself, and creating space for healthier
        connections.
      </>
    ),
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    checkoutUrl: externalRoutes.checkoutSep2025PromoTrial,
    disclaimer: (
      <>
        *
        <strong>
          With your 7 day free trial, you’ll get to keep the How to Heal from A Break Up Course for
          free (and keep it for life, even after your trial ends!) After 7 days, you’ll become a
          member of PDS and get access to every course and every live event for $67/month. You won’t
          be charged before day 7 and can cancel anytime prior with no charge.
        </strong>
      </>
    ),
  },
  dreamLifeCodependencyCourse: {
    offerLabel: 'Free Trial & Exclusive Free Course',
    title: 'Get the Ending Codependency Course Free Forever & Start Thriving in Love and Life',
    copy: (
      <>
        When you start your <strong>7-Day Free Trial of the All-Access Pass</strong>, you’ll get the{' '}
        <strong>Ending Codependency & Enmeshment</strong> course (valued at $250) completely{' '}
        <strong>FREE for LIFE</strong>. In just one week, you’ll reclaim your identity, set healthy
        boundaries, and finally create safe, secure, and fulfilling relationships.
      </>
    ),
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    checkoutUrl: externalRoutes.checkoutOct2025PromoTrial,
    disclaimer: (
      <>
        *
        <strong>
          When you join now, you’ll sign up for our All-Access Pass Membership. At the end of the
          trial, you’ll automatically become a member of the $67.00/month plan. Plus, even if you
          don’t stay with us after 7 days, you still get to keep and access the Ending Codependency
          & Enmeshment course for life.
        </strong>
      </>
    ),
  },
  somaticAttachmentHealing: {
    offerLabel: 'Free Trial & Exclusive Free Course',
    title: 'Get the Somatic Attachment Healing Course & Feel Calmer FAST',
    copy: (
      <>
        For the first time ever, we’re giving away the <em>Somatic Attachment Healing Course</em>
        —our most transformative, body-based program—for free. Experience our biggest offer yet and
        feel the difference in just one week. When you start your 7-Day Free Trial of the All-Access
        Pass Membership, you’ll get the <strong>Somatic Attachment Healing Course</strong> (valued
        at $250) completely
        <strong>FREE for LIFE</strong>. This course is designed to help you calm your nervous
        system, process emotions safely, rebuild a sense of safety in your body, and turn
        dysregulation into personal growth, and improve your relationship with yourself and your
        loved ones while creating steady, secure connection.
      </>
    ),
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    checkoutUrl: externalRoutes.checkoutNov2025PromoTrial,
    disclaimer: (
      <>
        *
        <em>
          When you join now, you’ll sign up for our All-Access Pass Membership. At the end of the
          trial, you’ll automatically become a member of the $67.00/month plan. Plus, even if you
          don’t stay with us after 7 days, you still get to keep and access the{' '}
          <strong>Somatic Attachment Healing Course</strong> for life.
        </em>
      </>
    ),
  },
} satisfies Record<string, Partial<TConfig>>

export type TPaymentOptionsConfigKey = keyof typeof allConfigs
