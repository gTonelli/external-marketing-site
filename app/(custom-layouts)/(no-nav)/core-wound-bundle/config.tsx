import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
import { externalRoutes } from '@/utils/constants'

export const CONFIG: TPromotionPageConfig = {
  paymentOptionsConfigKey: 'coreWoundBundle',
  checkoutUrl: externalRoutes.checkoutCoreWoundWebinarBundle,
  timer: {
    title:
      'LIMITED TIME OFFER: Get The Core Wound Healing Course Bundle ($250 Value) FREE FOR LIFE with a 7-Day Free Trial to the All-Access Pass',
  },
  banner: {
    title: 'Lasting Change Begins at the Root. Heal the Core Wounds Shaping Your Relationships',
  },
  courseOutcome: {
    title: 'Unearth Your Core Wounds and Transform How You Relate to Yourself and Others',
    copy: (
      <>
        <strong>
          Healing your core wounds is one of the most powerful ways to create lasting emotional
          change. The Core Wound Healing Course Bundle helps you:
        </strong>
      </>
    ),
    outcomes: [
      'Rewire the subconscious beliefs that drive self-criticism, emotional overreactions, and relationship anxiety, so your inner world feels safer and more supportive.',
      'Break free from trigger-response cycles by understanding what your nervous system is protecting you from, and teaching it that those threats no longer exist.',
      'Reduce emotional spirals and shutdown patterns by healing the meaning attached to pain, not just managing the feelings that follow.',
      'Stop misreading situations through fear-based lenses, allowing you to respond to people and relationships with clarity instead of projection.',
      'Experience steadier connection by softening abandonment, betrayal, or “not good enough” wounds that create push-pull dynamics.',
      'Build internal safety that allows closeness without losing yourself, so connection feels grounding, not overwhelming or risky.',
    ],
    image: '/images/TrialHeadspace/core-wound-bundle-mockup.png',
    imageAlt: 'A desktop screen showcasing the Core Wound Bundle',
    offer: [
      <>
        Activate your <strong>7-Day Free Trial</strong> today and explore 70+ science‑backed
        courses, daily live Q&As with me (Thais Gibson), and a private global community, all
        designed to help you become securely attached and see tangible results in as little as one
        week.
      </>,
      <>
        Most students finish the <strong>Core Wound Healing Course Bundle</strong> in just 3–4
        evenings, then use the remaining trial days to practice the tools with live coaching and
        community feedback.
      </>,
      <>
        Even if you cancel before the trial ends, this $250 course bundle is yours forever. We do
        this because results speak louder than promises, and we know you’ll feel the shift and want
        to keep going.
      </>,
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE BUNDLE NOW',
  },
  howItHelps: {
    title: 'When You Heal Core Wounds, Love Lasts. Here’s How:',
    leftList: [
      'Turn confusing emotional reactions into clear insight by identifying the core wound underneath the trigger, so you stop reacting before you understand why.',
      'Soften abandonment, betrayal, and “not good enough” responses that create anxiety or distance, allowing closeness to feel safer and more natural.',
      'Interrupt reactive cycles at the belief level, so difficult moments no longer escalate into shutdowns, spirals, or push-pull dynamics.',
    ],
    rightList: [
      'Create relationships that feel steady and future-oriented because fear-based expectations are no longer shaping how you connect, trust, or commit.',
      'Link triggers to subconscious meaning instead of surface behavior, making it easier to calm your nervous system and respond with clarity.',
      'Transform self-sabotage into self-protection you no longer need, rewiring old survival strategies into healthier emotional patterns.',
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE BUNDLE NOW',
    disclaimer: (
      <>
        *When you join now, you’ll enter a 7‑day Free Trial of our All‑Access Pass. After the trial,
        you’ll automatically continue on the $67/month plan. But whether you stay on or not, the
        $250 Core Wound Healing Course Bundle is yours for life.
      </>
    ),
  },
  steps: {
    title: 'Use the Revolutionary Tools Only Available In Our School!',
    copy: (
      <>
        Learn and use the Integrated Attachment Theory<sup>TM</sup> to navigate the dating stage
        with clarity and confidence.
      </>
    ),
    stepTwo: {
      title: 'Dive Into the Core Wound Healing Course Bundle (Yours to Keep!)',
      copy: 'Identify the subconscious beliefs driving emotional triggers, relationship fears and self-doubt, and learn how to begin rewiring them at the root. Within one week, you’ll understand why certain moments activate strong reactions and start responding with more emotional steadiness, clarity, and self-trust.',
      image: '/images/course-core-wound-bundle.jpg',
    },
    ctaLabel: 'SIGN UP NOW',
  },
  communityTeaser: {
    teaserHeading:
      'Start Your 7-Day All-Access Pass Trial & Keep the Core Wound Healing Bundle for LIFE!',
    communityBullets: [
      'Identify the core emotional wounds shaping your reactions, relationship patterns, and self-perception.',
      'Apply subconscious reprogramming tools to soften triggers and experience real emotional relief within 7 days.',
      'Understand the deeper meaning driving emotional pain so you can respond with clarity instead of fear or self-doubt.',
      'Use the Core Wound Healing Course anytime you want to revisit and heal old patterns during different stages of life or relationships.',
    ],
  },
}
