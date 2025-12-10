import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
import { externalRoutes } from '@/utils/constants'

export const CONFIG: TPromotionPageConfig = {
  paymentOptionsConfigKey: 'boxingWeek',
  checkoutUrl: externalRoutes.checkoutMarch2025PromoTrial.concat('-boxing-week'),
  timer: {
    title:
      'BOXING WEEK SPECIAL: Claim your FREE Attachment Styles & Sex Course ($250 Value) For LIFE With Your 7-Day Free Trial to All-Access Pass',
    className: 'bg-white !text-black',
    imageClassName: 'max-w-xl w-full mx-auto mb-4 lg:w-fit',
    imageAlt:
      'Christmast decorations - bulb, hat, christmas tree, gift and socks hanging from a wire',
    imageSrc: '/images/NewYearPromotion/hanging-christmas-decorations.png',
    imageWidth: 735,
    imageHeight: 60,
    classNameDate: '!bg-red-500 !text-white !w-12 !h-12 lg:!leading-1',
    classNameDateLabel: '!text-black',
    classNameDateSeperator: '!text-red-500',
    date: '2025-12-26T23:59:59-05:00',
  },
  banner: {
    title: 'Step Into the New Year With More Warmth and Connection',
    className: 'bg-snowflakes !bg-blue-auxiliary',
  },
  courseOutcome: {
    title: 'Heal Intimacy Blocks and Reignite Desire In Your Relationship',
    copy: (
      <>
        <strong>
          The Attachment Styles & Sex course helps you uncover how your attachment style influences
          sexual connection, so you can break free from intimacy struggles and create emotionally
          and physically fulfilling relationships. This Boxing Week exclusive will help you learn
          to:
        </strong>
      </>
    ),
    outcomes: [
      'Understand why sexual and intimate desires fade and how to reignite them without pressure, guilt, or resentment.',
      'Identify how your attachment style shows up in the bedroom and how it may be sabotaging emotional or physical closeness.',
      'Heal anxious, avoidant, or fearful patterns so you can feel safe being seen, touched, and deeply connected.',
      'Speak up about your intimate needs, preferences, and boundaries with clarity and confidence.',
      'Transform intimacy into a source of joy, trust, and mutual fulfillment, instead of stress or confusion.',
      'Build a lasting connection with a partner who values closeness, respects your limits, and helps you feel secure in love and sex.',
    ],
    image: '/images/TrialHeadspace/sex-course-mockup.png',
    imageAlt: 'A desktop screen showcasing the Key Pillars to Secure Course',
    offer: [
      <>
        This Boxing Week only, get 7 days of full access to our All-Access Pass, our all-inclusive
        membership! Explore life-changing courses, live webinars with me (Thais Gibson), and a
        private support community embedded with our science-backed, results-driven proprietary
        method designed to help you become securely attached and see results in just 1 week.
      </>,
      <>
        Even if you cancel before the trial ends, you'll keep our{' '}
        <strong>Attachment Styles & Sex</strong> course (A FREE GIFT WORTH $250) for{' '}
        <strong>life</strong>.
      </>,
      <>
        Why are we giving all this away at no cost? Because we know you'll love what{' '}
        <strong>The Personal Development School</strong> has to offer, and we're willing to let you
        try it to believe it, at no risk or cost to you.
      </>,
    ],
    ctaLabel: 'GET YOUR FREE COURSE & TRIAL',
  },
  howItHelps: {
    title: 'Learn Exactly How to Create Lasting Emotional and Physical Closeness',
    className: '',
    classNameInner: 'relative bg-snowflakes !bg-blue-auxiliary',
    classNameImage: 'absolute -top-8 -left-8 w-24 h-24 lg:-top-16 lg:-left-16 lg:w-40 lg:h-40',
    imageSrc: '/images/NewYearPromotion/santa-hat.png',
    imageAlt: 'Santa hat',
    imageWidth: 150,
    imageHeight: 150,
    leftList: [
      'Strengthen your relationship by making sex feel safe, connected, and meaningful',
      'Explore how different attachment styles impact your sex life',
      'Identify why intimacy may diminish and how to reignite the passion',
    ],
    rightList: [
      'Learn how to set healthy and realistic expectations for yourself and others',
      'End the push-pull dynamic and stop repeating cycles that leave you disconnected',
      'Feel emotionally secure and safe in your connections and relationships',
    ],
    ctaLabel: 'GET YOUR FREE COURSE & TRIAL*',
    disclaimer: (
      <>
        *When you join now, you'll enter a 7‑day Free Trial of our All‑Access Pass. After the trial,
        you'll automatically continue on the $67/month plan. But whether you stay on or not, the
        $250 <strong>Attachment Styles & Sex</strong> course is yours for life.
      </>
    ),
  },
  steps: {
    title: 'Use the Revolutionary Tools Only Available In Our School!',
    className: 'relative !pt-44',
    classNameImage: 'absolute top-0 left-0 w-[1440px] h-[100px] object-none mx-auto lg:w-full',
    imageSrc: '/images/NewYearPromotion/leaves-and-berries.png',
    imageAlt: 'Leaves and berries',
    imageWidth: 1440,
    imageHeight: 100,
    copy: 'Learn and use the Integrated Attachment Theory™ to create and build healthy relationships.',
    stepTwo: {
      title: 'Start & Keep the Attachment Styles & Sex Course',
      copy: "Discover how your attachment style impacts intimacy, attraction, and emotional connection. You'll uncover the unconscious beliefs and patterns that create distance or dissatisfaction in your love life—and start reprogramming your mind for safety, vulnerability, and passion.",
      image: '/images/course-attachment-styles-and-sex.jpg',
    },
    ctaLabel: 'GET YOUR COURSE + 7-DAY TRIAL!',
  },
  communityTeaser: {
    teaserHeading:
      'Boxing Week Exclusive: Free Trial + Attachment Styles & Sex Course FREE for Life!',
    communityBullets: [
      'Understand how your attachment style shapes comfort, desire, and vulnerability, so intimacy feels safe and mutually fulfilling.',
      'Apply science-based strategies and notice a deeper bond within one week, using practical exercises you can revisit anytime.',
      'Clarify the emotional and physical experiences that matter most to you, turning intimacy into a reliable source of joy and confidence.',
      'Follow our evidence-based framework to communicate needs, set healthy boundaries, and sustain passion as your relationship grows.',
    ],
    footerImageClassName: 'w-[1440px] h-[100px] object-none mt-8 mx-auto lg:w-full',
    footerImageSrc: '/images/NewYearPromotion/leaves-and-berries.png',
    footerImageAlt: 'Leaves and berries',
    footerImageWidth: 1440,
    footerImageHeight: 100,
  },
}
