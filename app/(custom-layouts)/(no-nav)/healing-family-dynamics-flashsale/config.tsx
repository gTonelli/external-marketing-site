import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
import { externalRoutes } from '@/utils/constants'

export const CONFIG: TPromotionPageConfig = {
  paymentOptionsConfigKey: 'dreamLifeFamilyDynamics',
  checkoutUrl: externalRoutes.checkoutFamilyDynamicsFlashsale,
  timer: {
    title:
      'LIMITED TIME NEW OFFER: Claim Your FREE Healing Family Dynamics Course For Life + Your Bonus 7-Day Free Trial to the All-Access Pass',
  },
  banner: {
    title:
      'Spring Flash Sale: Break Free From Old Family Patterns And Create Healthier Relationships',
    theme: 'dark',
  },
  courseOutcome: {
    title:
      'Understand the Family Patterns That Shape Your Relationships. This Special Offer Won’t Be Available For Long',
    copy: (
      <>
        <p>
          Family dynamics shape your subconscious patterns for relationships, safety, and
          self-worth. What you experienced growing up became the blueprint for how you handle
          conflict, set boundaries, and show up in relationships.
        </p>
        <p>
          {' '}
          Most family trauma is not obvious or dramatic. It is systemic, subtle, and normalized. It
          lives in patterns like emotional neglect, control, chaos, disconnection, or image
          management. Because these dynamics were familiar, they were easy to overlook, yet they
          shape your relationships long after childhood.
        </p>
        <p>
          {' '}
          The <strong>Healing Family Dynamics</strong> course helps you identify the family patterns
          that matter most and begin repairing them at the root so you can have a healthier family
          dynamic in the New Year.
        </p>
      </>
    ),
    outcomes: [
      <>
        <strong>Identify your primary and secondary family dynamics</strong>, so you can focus on
        the patterns creating the most impact in your life'
      </>,
      <>
        <strong>Understand the predictable emotional injuries each family system creates</strong>,
        including wounds around trust, safety, shame, control, and belonging
      </>,
      <>
        <strong>Build internal safety, boundaries, and emotional clarity</strong>, creating change
        that starts within you and extends into your relationships
      </>,
      <>
        <strong>
          Break repeating relationship patterns by addressing the blueprint formed in childhood
        </strong>
        , not just the surface behavior
      </>,
      <>
        <strong>Learn how to ask for what you need without guilt, fear, or self-abandonment</strong>
      </>,
      <>
        <strong>Choose how you participate in family systems going forward</strong>, instead of
        reacting from old roles or expectations
      </>,
    ],
    image: '/images/family-dynamics-course-mockup.png',
    imageAlt: 'A desktop screen showcasing the Release Emotions with Somatic Processing Course',
    offer: [
      <>
        Get the exact tools and support you need to have a smoother holiday season with less
        conflict. This free course and your 7-Day Free Trial of the All-Access Pass work together to
        offer you the most effective blueprint for healing difficult family dynamics and stepping
        into empowered adult relationships with your loved ones.{' '}
      </>,
      <>
        Most students complete the <strong>Healing Family Dynamics Course</strong> in a few sessions
        and feel more regulated, clear, and grounded. They then use the remaining trial days to
        practice the tools with live coaching and community feedback.
      </>,
      <>
        Even if you cancel before the trial ends, this $250-value course is yours forever at no cost
        to you. We do this because results speak louder than promises, and we know you’ll feel the
        shift and want to keep going.
      </>,
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
  },
  howItHelps: {
    title: ' Here’s How This Brand New Offer Will Help You Have a Better Holiday Season',
    leftList: [
      <>
        <strong>
          Start by understanding how family systems shape your sense of safety, love, and self-worth
        </strong>
        , so you can see your patterns as learned responses rather than personal flaws
      </>,
      <>
        <strong>Explore the most common types of dysfunctional families</strong>, and recognize
        which ones influenced how you relate, cope, and connect today
      </>,
      <>
        <strong>Identify the emotional injuries formed in those environments</strong>, bringing
        clarity to patterns like distrust, shame, emotional distance, control, or instability
      </>,
      <>
        <strong>Learn how to repair those injuries using targeted strategies</strong>, instead of
        repeating cycles of blame, avoidance, or over-functioning
      </>,
    ],
    rightList: [
      <>
        <strong>Recognize the roles you learned to take on in your family</strong>, and how they
        still shape your behavior in close relationships
      </>,
      <>
        <strong>Work through a structured six-step process</strong>, guiding you to improve
        relationships one-on-one with specific family members
      </>,
      <>
        <strong>Heal the relationship you have with yourself first</strong>, addressing where old
        family wounds still influence your needs, boundaries, and self-talk
      </>,
      <>
        <strong>Set clear intentions and boundaries moving forward</strong>, so you can choose how
        you participate in family relationships, even if others don’t change
      </>,
    ],
    ctaLabel: 'CLAIM YOUR FREE COURSE NOW',
    disclaimer: (
      <>
        *Accessing the course automatically signs you up to a 7‑day Free Trial of our All‑Access
        Pass Membership. At the end of 7 days, you’ll automatically become a member for
        $67.00/month. The Healing Family Trauma and Challenging Family Dynamics is yours to keep for
        life, even if you don’t stay on as a member.
      </>
    ),
  },
  steps: {
    title: 'Dive Into the Healing Family Dynamics Course (Yours to Keep!)',
    copy: (
      <>
        Navigate family gatherings with more clarity and self-trust. Learn how to prepare for
        difficult conversations, set boundaries without guilt, and respond calmly in triggering
        moments, so you can move through the holidays without falling back into old patterns.
      </>
    ),
    stepTwo: {
      title: 'Heal Family Trauma & Painful Patterns (Yours to Keep!)',
      copy: 'Clear frameworks and practical tools to begin breaking generational cycles and creating healthier, more secure connections, starting with your relationship to yourself and extending outward into every area of life.',
      image: '/images/course-healing-family-dynamics.png',
    },
    ctaLabel: 'CLAIM YOUR COURSE + 7-DAY TRIAL!',
  },
  communityTeaser: {
    teaserHeading:
      'Start Your 7-Day All-Access Pass & Keep the Healing Family Dynamics Course for LIFE!',
    communityBullets: [
      <>
        <strong>Address old family wounds with targeted repair strategies</strong>, so you can
        respond with clarity and boundaries instead of reacting from past roles or patterns,
      </>,
      <>
        <strong>Prepare for difficult conversations</strong> by understanding your triggers,
        clarifying your needs, and choosing how you want to show up before interactio,
      </>,
      <>
        <strong>Practice setting and maintaining boundaries without guilt</strong>, even when family
        members resist, minimize, or revert to familiar behaviors,
      </>,
      <>
        <strong>Engage in family relationships more intentionally</strong>, using structured steps
        to improve one-on-one connections while protecting your emotional well-being,
      </>,
    ],
  },
}
