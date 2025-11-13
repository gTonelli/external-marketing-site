import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
import { externalRoutes } from '@/utils/constants'

export const CONFIG: TPromotionPageConfig = {
  paymentOptionsConfigKey: 'somaticAttachmentHealing',
  checkoutUrl: externalRoutes.checkoutNov2025PromoTrial,
  timer: {
    title:
      'LIMITED TIME: Claim Your FREE Somatic Attachment Healing Course ($250 Value) For Life + Your 7 Day Free PDS Membership',
  },
  banner: {
    title: 'Black Friday Special: Get Our #1 Most Powerful Healing Course FREE For Life',
    theme: 'dark',
  },
  courseOutcome: {
    title:
      'We’ve Never Offered This Before! Unlock the Tools To Heal, Regulate, and Move Through Your Emotions in Just One Week.',
    copy: (
      <>
        <strong>
          Healing from your past and self-soothing your pain is the first step toward welcoming
          secure, healthy love into your life. Whether you are feeling overwhelmed by triggers or
          carrying stress from past relationship patterns, the Somatic Attachment Healing Course
          helps you:
        </strong>
      </>
    ),
    outcomes: [
      'Feel and name sensations instead of numbing, so you can move through emotion safely.',
      'Improve self-esteem by regulating first, then updating beliefs from a calm state.',
      'Self-soothe with science-backed tools, including labeling sensations, tailbone-to-crown breathing, and opposites-imagery equilibration.',
      'End repeating patterns by building a safe nervous-system baseline you can return to anytime.',
      'Acknowledge your strengths with guided reflection once the charge is below 3, so you respond instead of react.',
      'Create self-compassion by practicing non-judgment and one-pointed focus on the present moment.',
      'Strengthen your relationship with yourself by taking needs-based action after you regulate.',
    ],
    image: '/images/TrialHeadspace/somatic-course-mockup.png',
    imageAlt: 'A desktop screen showcasing the Release Emotions with Somatic Processing Course',
    offer: [
      'Get your Black Friday Deal! Start a 7-Day Free Trial today and explore on-demand, science-backed courses, daily live Q&As with me (Thais Gibson), and a private global community, all designed to help you become securely attached and see tangible results in as little as one week.',
      <>
        Most students complete the <strong>Somatic Attachment Healing Course</strong> in a few
        sessions and feel more regulated, clear, and grounded. They then use the remaining trial
        days to practice the tools with live coaching and community feedback.
      </>,
      'Even if you cancel before the trial ends, this $250 course is yours forever. We do this because results speak louder than promises, and we know you’ll feel the shift and want to keep going.',
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
  },
  howItHelps: {
    title: 'Here’s How The Best Deal of the Year Will Help You Feel Whole Again',
    leftList: [
      <>
        <strong>Process feelings you can’t intellectualize</strong> by switching from story to{' '}
        <strong>body</strong>: witness, name the emotion, and describe the{' '}
        <strong>exact sensations</strong> you feel.
      </>,
      <>
        <strong>Bring your cortex back online</strong> when you’re flooded by labeling sensations
        (tight chest, knot in stomach, heat in face) to reduce reactivity.
      </>,
      <>
        <strong>Calm fast at the body level</strong>: take a tailbone-to-crown breath, then focus on{' '}
        <strong>the dominant sensation</strong> for 30–90 seconds.
      </>,
      <>
        <strong>Equilibrate the charge</strong> with opposites-imagery (tightness &rarr; threads
        untying, heat &rarr; cool lake over the torso, pressure &rarr; balloon release) until
        activation drops to a 1–2.
      </>,
    ],
    rightList: [
      <>
        <strong>Self-soothe without distractions</strong> using 4-7-8 breathing, a five-senses
        mindfulness anchor, or a Vipassana-style body scan.
      </>,
      <>
        <strong>Pause action while dysregulated</strong>—no texting, posting, or decisions until
        your charge &lt; 3—then choose a needs-based boundary or next step.
      </>,
      <>
        <strong>Map triggers to unmet needs</strong> after regulation so you can meet the need
        directly (reassurance, clarity, space) instead of looping the story.
      </>,
      <>
        <strong>Stabilize your baseline</strong> with simple daily rhythms: morning scan, afternoon
        reset, evening wind-down to keep your nervous system in a regulated comfort zone.
      </>,
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    disclaimer: (
      <>
        *Accessing the course automatically signs you up to a 7‑day Free Trial of our All‑Access
        Pass Membership. At the end of 7 days, you’ll automatically become a member for
        $67.00/month. The Somatic Attachment Healing Course is yours to keep for life, even if you
        don’t stay on as a member.
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
      title: 'Dive Into the Somatic Course (Yours to Keep!)',
      copy: 'Process feelings you can’t think through by working at the body level. Calm your nervous system, rebuild self-trust and self-worth, and feel grounded on your own to break old cycles and create healthy, secure connections. Feel the shift in as little as one week!',
      image: '/images/course-somatic-processing.jpg',
    },
    ctaLabel: 'CLAIM YOUR COURSE + 7-DAY TRIAL!',
  },
  communityTeaser: {
    teaserHeading:
      'Start Your 7-Day All-Access Pass & Keep the Somatic Attachment Healing Course for LIFE!',
    communityBullets: [
      'Heal from acute or long-held emotional pain without numbing by working directly with body sensations.',
      'Apply somatic tools (witness, label, breathe, equilibrate) to self-soothe, restore safety, and experience real change within seven days.',
      'Boost self-trust and self-worth by regulating first, then updating beliefs and boundaries from a calm nervous system.',
      'Turn overwhelming feelings into clear signals you can regulate using evidence-based practices grounded in neuroscience and attachment.',
    ],
  },
}
