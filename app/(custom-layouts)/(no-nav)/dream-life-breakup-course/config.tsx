import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
import { externalRoutes } from '@/utils/constants'

export const CONFIG: TPromotionPageConfig = {
  paymentOptionsConfigKey: 'dreamLifeBreakupCourse',
  checkoutUrl: externalRoutes.checkoutSep2025PromoTrial,
  timer: {
    title:
      'LIMITED TIME: Claim Your FREE Heal From a Breakup Course ($250 Value) For Life + Your 7-Day Free All-Access Pass Trial',
  },
  banner: {
    title: 'Turn Past Pain Into Breakthroughs: Unlock Personal Growth & New Love!',
  },
  courseOutcome: {
    title:
      'Unlock the Tools To Heal, Grow, & Move On From Your Past Romances, Friendships, or Family Bonds in Just One Week!',
    copy: (
      <>
        Healing from your past and self-soothing your pain is the first step toward welcoming
        secure, healthy love into your life. Whether you're recently single, going through a
        difficult period with relationships, or dealing with the grief of any relationship
        ending—family, friends, or romantic—the <strong>Heal From a Breakup</strong> course is here
        to help. And because it's yours for life, you can return to it anytime you face a difficult
        season or a relationship struggling or ending. It helps you:
      </>
    ),
    outcomes: [
      'Look back at past relationships to understand behaviors through attachment styles.',
      'Discover whether a relationship is truly right for you—and what to do right now.',
      'Self-soothe with science-backed techniques that are proven to help you feel better in a healthy way.',
      'Navigate distance (or no contact) in any relationship—romantic, friendship, or family.',
      'Overcome challenging periods in any relationship now and in the future.',
      'Create self-compassion and turn grief into gratitude with simple mindset shifts and new perspectives.',
      'Strengthen your relationship with yourself so you can start your next romantic connection whole, complete, and ready for secure love.',
    ],
    image: '/images/TrialHeadspace/breakup-course-mockup.png',
    imageAlt: 'A desktop screen showcasing the Heal from Breakup Course',
    offer: [
      <>
        Activate your <strong>7-Day Free Trial</strong> today and explore 70+ science‑backed
        courses, daily live Q&As with me (Thais Gibson), and a private global community, all
        designed to help you become securely attached and see tangible results in as little as one
        week.
      </>,
      <>
        Most students finish the <strong>Heal From a Breakup course</strong> in a few sessions, and
        end up feeling transformed and ready to seek new relationships. They then use the remaining
        trial days to practice the tools with live coaching and community feedback.
      </>,
      <>
        Even if you cancel before the trial ends, this <strong>$250 course</strong> is yours
        forever. We do this because results speak louder than promises, and we know you'll feel the
        shift and want to keep going.
      </>,
    ],
    ctaLabel: 'GET YOUR FREE COURSE NOW',
  },
  howItHelps: {
    title: "Here's How This FREE Course Will Help You Feel Whole Again",
    leftList: [
      'Turn late-night spirals into grounded clarity so you can fall asleep and wake up with a simple plan instead of a pit in your stomach.',
      'Translate overwhelming emotions into one compassionate story so the "what-ifs" stop running your day.',
      'Create clean distance both online and offline so your heart can breathe without guilt, pressure, or mixed signals.',
      'Self-soothe without distractions or unhealthy coping mechanisms.',
    ],
    rightList: [
      "Link triggers to unmet needs so you can calm them in minutes and choose responses you're proud of.",
      'Spot the "gold" you gained from past relationships so you can rebuild self-worth and carry your strengths forward.',
      "Build simple daily rhythms that restore focus and energy so you feel like yourself again by week's end.",
      'Heal from recent or past relationship trauma.',
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    disclaimer: (
      <>
        *With your 7 day free trial, you'll get to keep the How to Heal from A Break Up Course for
        free (and keep it for life, even after your trial ends!) After 7 days, you'll become a
        member of PDS and get access to every course and every live event for $67/month. You won't
        be charged before day 7 and can cancel anytime prior with no charge.
      </>
    ),
  },
  steps: {
    title: 'Use the Revolutionary Tools Only Available In Our School!',
    copy: (
      <>
        Learn and use the Integrated Attachment Theory<sup>TM</sup> to create and build healthy
        relationships.
      </>
    ),
    stepTwo: {
      title: 'Dive Into the Breakup Course (Yours to Keep!)',
      copy: "Process and heal from heavy emotions, rebuild your self-worth, self-compassion and turn grief into gratitude, and feel confident on your own so you can break toxic cycles and welcome new, healthy love into your life. You'll learn to heal your heart in as little as one week!",
      image: '/images/course-heal-from-breakup.jpg',
    },
    ctaLabel: 'GET YOUR COURSE + 7-DAY TRIAL!',
  },
  communityTeaser: {
    teaserHeading:
      'Start Your 7-Day All-Access Pass & Keep the Heal From a Breakup Course for LIFE!',
    communityBullets: [
      'Heal from the pain of recent or past breakups without numbing or distracting yourself from the uncomfortable emotions.',
      'Apply the course tools to heal your self-esteem, self-soothe, and experience real, transformative change within seven days.',
      'Turn negative feelings into positive potential for growth with guided support and evidence-based exercises.',
      'Boost your self-esteem and rewrite limiting beliefs to make your next relationship healthier and more secure.',
    ],
  },
}
