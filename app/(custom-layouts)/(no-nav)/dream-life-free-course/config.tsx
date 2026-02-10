import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
import { externalRoutes } from '@/utils/constants'

export const CONFIG: TPromotionPageConfig = {
  paymentOptionsConfigKey: 'dreamLifeFreeCourse',
  checkoutUrl: externalRoutes.checkoutJan2025PromoTrial,
  timer: {
    title:
      'LIMITED TIME OFFER: Get The Discover, Fulfill, and Embrace Your Personal Needs Course ($250 Value) FREE FOR LIFE with a 7-Day Free Trial to the All-Access Pass',
  },
  banner: {
    title:
      'Lasting Love Begins Now. Learn What You Need to Attract & Build a Secure, Fulfilling Relationship',
  },
  courseOutcome: {
    title: 'Unearth Your Needs and Transform Every Relationship',
    copy: (
      <>
        Uncovering your personal needs is the first step to thriving in life and love. The{' '}
        <strong>Discover, Embrace, and Fulfill Your Personal Needs</strong> course helps you:
      </>
    ),
    outcomes: [
      'Rewire your daily habits, upgrade your communication, and build unshakeable self‑trust so your self‑talk and relationships support your goals.',
      'Transform conflict into connection by speaking with clarity and turning tense moments into bonding breakthroughs that actually bring you closer.',
      'Turn procrastination into purposeful momentum by linking every task to deep subconscious motivation, making your progress natural and unshakeable.',
      'Spot true compatibility in minutes, not months, naturally attracting partners, projects, and opportunities that honour your values and future vision.',
      'Create daily bonding rituals that keep your love life or relationship exciting and trustworthy, even when life is busy.',
      'Protect your peace while staying open to love, setting healthy boundaries that let you feel seen, valued, and energized.',
    ],
    image: '/images/TrialHeadspace/needs-course-mockup.png',
    imageAlt: 'A desktop screen showcasing the Discover, Embrace and Fulfill Personal Needs Course',
    offer: [
      'Activate your 7-Day Free Trial today and explore 70+ science‑backed courses, daily live Q&As with me (Thais Gibson), and a private global community—all designed to help you become securely attached and see tangible results in as little as one week.',
      <>
        Most students finish the <strong>Discover, Embrace, and Fulfill Your Personal Needs</strong>{' '}
        course in just 3–4 evenings, then use the remaining trial days to practice the tools with
        live coaching and community feedback.
      </>,
      <>
        Even if you cancel before the trial ends, this <strong>$250 course</strong> is yours
        forever. We do this because results speak louder than promises, and we know you’ll feel the
        shift and want to keep going.
      </>,
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
  },
  howItHelps: {
    title: "When You Know Your Needs, Love Lasts. Here's How:",
    leftList: [
      'Turn vague feelings into clear requests so that your partner knows exactly how to love you (and you them) without guesswork.',
      'Create weekly rituals to satisfy core needs for certainty, growth, and intimacy, keeping affection and trust strong even on busy days.',
      'Speak the "attachment‑safe" language of needs to turn hard conversations into cooperative problem‑solving.',
    ],
    rightList: [
      'Link triggers to unmet needs so you can calm conflict in minutes and replace reactive patterns with compassionate responses.',
      'Transform self‑sabotage into self‑support by rewiring habits that once drained you into routines that refill you and your relationship.',
      'Build a future‑proof partnership where both people feel seen, valued, and excited about what’s next because every need has a healthy way to be met.',
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW*',
    disclaimer:
      '*When you join now, you’ll enter a 7‑day Free Trial of our All‑Access Pass. After the trial, you’ll automatically continue on the $67/month plan. But whether you stay on or not, the $250 Discover, Embrace, and Fulfill Your Personal Needs course is yours for life.',
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
      title: 'Dive Into the Needs Course (Yours to Keep!)',
      copy: 'Decode your personal subconscious needs, learn to communicate without misunderstanding, and install micro‑habits that refill your emotional tank automatically. Within one week, you’ll resolve conflicts in minutes and become more connected in your relationships.',
      image: '/images/course-personal-needs-alt.jpg',
    },
    ctaLabel: 'SIGN UP NOW',
  },
  communityTeaser: {
    teaserHeading:
      'Start Your 7-Day All-Access Pass Trial & Keep the Discover, Embrace & Fulfill Your Personal Needs Course for LIFE!',
    communityBullets: [
      'Discover your core needs to create authentic self-worth and secure, healthy relationships.',
      'Apply the course tools to meet those needs and experience real, transformative change within 7 days.',
      'Understand exactly what you need and deserve so you can embrace daily joy, fulfillment, and inner peace.',
      'Use our proven framework to set healthy boundaries, deepen connections, and grow alongside the people you love.',
    ],
  },
}
