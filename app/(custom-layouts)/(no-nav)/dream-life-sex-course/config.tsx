import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/PromotionPage'
import { externalRoutes } from '@/utils/constants'

export const CONFIG: TPromotionPageConfig = {
  paymentOptionsConfigKey: 'dreamLifeSexCourse',
  checkoutUrl: externalRoutes.checkoutMarch2025PromoTrial,
  timer: {
    title:
      'LIMITED TIME: Claim your FREE Attachment Styles & Sex Course ($250 Value) For LIFE With Your 7-Day Free Trial to All-Access Pass',
  },
  banner: {
    title: 'What If Intimacy and Relationships Could Feel Easier and More Comfortable?',
  },
  courseOutcome: {
    title: 'Heal Intimacy Blocks and Reignite Desire In Your Relationship',
    copy: (
      <>
        The <strong>Attachment Styles & Sex</strong> course helps you uncover how your attachment
        style influences sexual connection, so you can break free from intimacy struggles and create
        emotionally and physically fulfilling relationships. You'll learn to:
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
        Get 7 days of full access to our <strong>All-Access Pass</strong>, our all-inclusive
        membership! Explore 70+ life-changing courses, live webinars with me (Thais Gibson), and a
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
        $250 Attachment Styles & Sex course is yours for life.
      </>
    ),
  },
  steps: {
    title: 'Use the Revolutionary Tools Only Available In Our School!',
    copy: 'Learn and use the Integrated Attachment Theory™ to create and build healthy relationships.',
    stepTwo: {
      title: 'Start & Keep the Attachment Styles & Sex Course',
      copy: "Discover how your attachment style impacts intimacy, attraction, and emotional connection. You'll uncover the unconscious beliefs and patterns that create distance or dissatisfaction in your love life—and start reprogramming your mind for safety, vulnerability, and passion.",
      image: '/images/course-attachment-styles-and-sex.jpg',
    },
    ctaLabel: 'SIGN UP NOW',
  },
  communityTeaser: {
    teaserHeading: 'Free Trial + Attachment Styles & Sex Course FREE for LIFE!',
    communityBullets: [
      'Understand how your attachment style shapes comfort, desire, and vulnerability, so intimacy feels safe and mutually fulfilling.',
      'Apply science-based strategies and notice a deeper bond within one week, using practical exercises you can revisit anytime.',
      'Clarify the emotional and physical experiences that matter most to you, turning intimacy into a reliable source of joy and confidence.',
      'Follow our evidence-based framework to communicate needs, set healthy boundaries, and sustain passion as your relationship grows.',
    ],
  },
}
