import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/PromotionPage'
import { externalRoutes } from '@/utils/constants'

export const CONFIG: TPromotionPageConfig = {
  paymentOptionsConfigKey: 'dreamLifePillarsCourse',
  checkoutUrl: externalRoutes.checkoutJune2025PromoTrial,
  timer: {
    title:
      'LIMITED TIME: Claim Your FREE Create Secure Relationships Course ($250 Value) for Life + Your 7 Day Free PDS Membership',
  },
  banner: {
    title: 'Get the Only Tools You Need to Build The Best Relationship with Yourself and Others',
  },
  courseOutcome: {
    title: 'Unlock the Tools to Create Healthy, Secure Relationships',
    copy: (
      <strong>
        When you master personal growth and healing, you stop chasing the wrong relationships—and
        start choosing the right person for you. This is what the Key Pillars for a Secure
        Relationship course will empower you to do:
      </strong>
    ),
    outcomes: [
      'Uncover how past conditioning affects your present behavior and replace these self-sabotaging cycles with secure, respectful ones.',
      'Learn to handle conflict resolution and express your feelings clearly to talk through the hard stuff with grace and confidence.',
      'Articulate your non-negotiables, recognize compatibility faster, and attract partners who meet your values and future desires.',
      'Cultivate emotional self-awareness, self-trust, and a stronger inner compass—so you stop losing yourself in others.',
      "Turn everyday moments into opportunities for bonding and being emotionally present, whether you're dating or in a relationship.",
      'Protect your peace while staying emotionally open—so you can build relationships based on mutual respect.',
    ],
    image: '/images/TrialHeadspace/secure-pillars-mockup.png',
    imageAlt: 'A desktop screen showcasing the Key Pillars to Secure Course',
    offer: [
      <>
        <strong>
          Get 7 days of full access to our All-Access Pass, our all-inclusive membership! Explore
          70+ life-changing courses, live webinars, and a private support community embedded with
          our science-backed, results-driven proprietary method designed to help you become securely
          attached and see results in just 1 week.
        </strong>
      </>,
      <>
        <strong>
          Even if you cancel before the trial ends, you'll keep our Key Pillars for a Secure
          Relationship course (A FREE GIFT WORTH $250) for life.
        </strong>
      </>,
      <>
        <strong>
          Why are we giving all this away at no cost? Because we know you'll love what The Personal
          Development School has to offer, and we're willing to let you try it to believe it, at no
          risk or cost to you.
        </strong>
      </>,
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
  },
  howItHelps: {
    title: 'What If One Free Course Could Help You Find Real Love?',
    leftList: [
      'Use the Needs and Expectations inventory to bring clarity and alignment into your relationship',
      'Introduce powerful rituals of connection that deepen intimacy and build trust, commitment, and honesty',
      'Learn effective communication strategies that lead to real emotional maturity and long-term compatibility',
    ],
    rightList: [
      'Break the cycle of reactive relationship patterns and beliefs by getting off autopilot',
      'Reprogram unhealthy relationship habits to create a deep, lasting bond without losing yourself',
      'Build a true and authentic partnership where both people feel seen, valued, and loved',
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    disclaimer: (
      <>
        *When you join now, you'll sign up for our All-Access Pass Membership. At the end of the
        trial, you'll automatically become a member of the $67.00/month plan. Plus, even if you
        don't stay with us after 7 days, you still get to keep and access the Key Pillars for a
        Secure Relationship Course for life.
      </>
    ),
  },
  steps: {
    title: 'Use the Revolutionary Tools Only Available In Our School!',
    copy: 'Learn and use the Integrated Attachment Theory™ to create and build healthy relationships.',
    stepTwo: {
      title: 'Dive Into the Pillars Course (Yours to Keep!)',
      copy: "Discover the patterns, fears, and blocks that have been holding you back in your love life. You'll uncover the root causes of your dating or relationship challenges and start reprogramming your mind for connection, trust, and emotional safety. This course is yours forever.",
      image: '/images/course-pillars-to-secure-relationships.jpg',
    },
    ctaLabel: 'SIGN UP NOW',
  },
  communityTeaser: {
    teaserHeading: 'Free Trial + Key Pillars for a Secure Relationship Course for LIFE!',
    communityBullets: [
      'Discover the Key Pillars the create strong, healthy relationships that are built on authenticity and honesty',
      'Apply the tools from our course to experience real transformative results within 7 days',
      'Understand what you need and deserve in your relationship to experience true joy and fulfillment',
      'Use our proven framework to create deeper connections, heal wounds, and grow together with your loved one',
    ],
  },
}
