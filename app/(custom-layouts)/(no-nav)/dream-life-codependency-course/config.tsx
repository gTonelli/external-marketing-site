import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/PromotionPage'
import { externalRoutes } from '@/utils/constants'

export const CONFIG: TPromotionPageConfig = {
  paymentOptionsConfigKey: 'dreamLifeCodependencyCourse',
  checkoutUrl: externalRoutes.checkoutOct2025PromoTrial,
  timer: {
    title:
      'LIMITED TIME: Claim Your FREE Ending Codependency & Enmeshment Course ($250 Value) For Life + Your 7 Day Free PDS Membership',
  },
  banner: {
    title: 'Break Free from Codependency: Build Secure, Balanced Relationships',
  },
  courseOutcome: {
    title: 'Heal Codependency and Create Relationships That Last',
    copy: (
      <>
        <strong>
          Breaking free from codependency is the first step to building secure, balanced
          relationships. The Ending Codependency & Enmeshment course helps you:
        </strong>
      </>
    ),
    outcomes: [
      'Reclaim your sense of self by honouring your unique needs and values, so you no longer lose yourself in relationships.',
      'Transform conflict into connection by setting and communicating boundaries with clarity, turning tension into trust and closeness.',
      'End cycles of people-pleasing and overgiving by learning practical tools that protect your peace without shutting others out.',
      'Recognize unhealthy patterns early and move toward relationships built on true compatibility, reciprocity, and respect.',
      'Rebuild a secure self-identity with daily practices that create lasting balance, trust, and fulfillment.',
      'Reprogram core beliefs that keep codependent cycles alive, shifting from guilt and fear to self-worth and empowerment.',
    ],
    image: '/images/TrialHeadspace/codependency-course-mockup.png',
    imageAlt: 'A desktop screen showcasing the Ending Codependency & Enmeshment Course',
    offer: [
      'Activate your free trial today and explore 70+ science-backed courses, daily live Q&As with me (Thais Gibson), and a private global community—all designed to help you end codependency and create healthy, balanced relationships.',
      <>
        Most students finish the <strong>Ending Codependency & Enmeshment</strong> course in just
        3–4 evenings, then use the remaining trial days to practice the tools with live coaching and
        community feedback.
      </>,
      'Even if you cancel before the trial ends, this $250 course is yours forever. We do this because results speak louder than promises, and we know you’ll feel the shift and want to keep going.',
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
  },
  howItHelps: {
    title: 'When You Heal Codependency, Love Becomes Secure. Here’s How:',
    leftList: [
      'Stop people-pleasing by learning to say no without guilt and yes with confidence, so your relationships feel balanced instead of one-sided.',
      'Build healthy boundaries that protect your peace and energy while deepening trust and connection.',
      'Break free from reactive cycles by calming triggers and replacing old patterns with compassionate communication.',
    ],
    rightList: [
      'Reclaim your sense of self by honoring your own needs and values without losing closeness with others.',
      'Release guilt, shame, and fear, transforming them into self-worth and empowerment that sustain healthy love.',
      'Create secure, reciprocal relationships where both people feel respected, supported, and excited for the future.',
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    disclaimer: (
      <>
        *
        <strong>
          *When you join now, you’ll enter a 7‑day Free Trial of our All‑Access Pass. After the
          trial, you’ll automatically continue on the $67/month plan. But whether you stay on or
          not, the $250 Ending Codependency & Enmeshment course is yours for life.
        </strong>
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
      title: 'Dive Into the Codependency Course (Yours to Keep!)',
      copy: 'Rebuild your sense of self, set boundaries with confidence, and practice daily habits that protect your energy automatically. Within one week, you’ll feel more grounded, communicate without fear, and experience healthier, more secure connections.',
      image: '/images/course-codependency-enmeshment.jpg',
    },
    ctaLabel: 'GET YOUR COURSE + 7-DAY TRIAL!',
  },
  communityTeaser: {
    teaserHeading:
      'Start Your 7-Day All-Access Pass & Keep the Ending Codependency & Enmeshment Course for LIFE!',
    communityBullets: [
      'Identify hidden patterns that keep you stuck in codependency and replace them with habits that build self-trust and confidence.',
      'Reprogram limiting beliefs around love, worth, and boundaries so you can finally feel safe and empowered in your relationships.',
      'Practice real-life scripts and tools to communicate clearly, express needs without guilt, and stop cycles of conflict or overgiving.',
      'Cultivate lasting balance by protecting your peace, honoring your identity, and building relationships rooted in mutual respect.',
    ],
  },
}
