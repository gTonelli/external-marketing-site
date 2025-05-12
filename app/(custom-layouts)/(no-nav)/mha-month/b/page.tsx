// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { SocialProofBar } from '@/components/SocialProofBar'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import {
  PDS14dftBreakthrough,
  PDS14dftFeatureOffers,
  PDS14dftTestimonialVideo,
  ValentinesFAQs,
} from '@/components/SpecialPromotion'
import { CarouselPromotionCourses } from '@/components/Carousel/variants/CarouselPromotionCourses'
import { ThaisIntro } from '@/components/ThaisIntro'
import { Faq } from '@/components/Faq/Faq'
import { faCircleSmall, faStar } from '@awesome.me/kit-545b942488/icons/classic/solid'
import {
  faArrowsSpin,
  faCheckCircle,
  faDove,
  faMessageHeart,
  faStars,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// utils
import { EExternalRoutes } from '@/utils/constants'
// style
import './style.css'

export const metadata: Metadata = {
  title: 'Find Calmness & Clarity with Our 14-Day Free Trial',
  description:
    'Your mental health matters. Make it a priority with our All-Access Pass, available for 14 days for FREE this Mental Health Awareness Month.',
  robots: 'noindex',
}

export default function MentalHealthAwarenessPage() {
  const ctaUrl = EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL

  return (
    <Page page_name="mha-month-b">
      <Section
        className="bg-gradient-to-b from-primary-light to-white"
        classNameInner="!max-w-4xl mx-auto py-8">
        <h1 className="mb-8">
          Break Free From Toxic Relationship Patterns, Heal Your Attachment Style And Find Lasting
          Love. Get Unlimited Access to Courses That Will Transform Your Relationships With This 14
          - Day Free Trial.
        </h1>

        <p className="max-w-3xl mx-auto mb-8">
          <strong>
            We’re giving you 14-Days of FREE Access to the All-Access Pass, your all-in-one resource
            with courses, webinars and a community that teach you powerful tools, strategies, and
            support to reprogram and heal your attachment style, calm emotional chaos, and build the
            secure life and relationships you deserve. <br /> Start your healing journey at your own
            time in the comfort of your home, and experience transformational results in two weeks!
            Available for a limited time for Mental Health Awareness Month Only!
          </strong>
        </p>

        <ButtonCheckout href={ctaUrl} label="START YOUR FREE TRIAL" />
      </Section>

      <Section
        className="bg-woman-looking-out-window min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-woman-looking-out-window-mobile lg:hidden" />

        <div className="relative text-left p-4 z-5 lg:col-span-7">
          <h2 className="mb-4">
            This Isn’t Just a Free Trial — It’s Your First Step Toward Healing Your Attachment Style
            and Finding Lasting Love
          </h2>

          <p className="tracking-33 mb-4">
            <strong>
              Here’s What You’ll Start to Experience With Your Free Trial Within the Next 14 Days:
            </strong>
          </p>

          <List
            classNameIcon="!text-primary mt-1"
            classNameListItems="mb-4"
            icon={faCircleSmall}
            listItems={[
              'A shift from emotional chaos to emotional clarity.',
              'Building a secure relationship with yourself or your partner.',
              'Reprogramming your subconscious patterns that have kept you stuck for years.',
              'Feeling seen, safe, and fully understood—maybe for the first time.',
              'Stop chasing love and start attracting healthy connections.',
              'You stop with the “what’s wrong with me” voice and start building real self-worth.',
            ]}
          />

          <p className="mb-4">
            <strong>We see you. We hear you. And we want to help.</strong>
          </p>

          <p className="mb-4">
            You’ll get instant access to TWO FULL WEEKS of step-by-step courses that will guide you
            through healing from heartbreak, building boundaries, dealing with anxiety, reconnecting
            in your relationship, or any challenge you’re ready to conquer!
          </p>

          <ButtonCheckout href={ctaUrl} label="START YOUR FREE TRIAL" />
        </div>
      </Section>

      <Section>
        <h2 className="mb-8">
          Our All-Access Pass is yours, for FREE, for 14 days, so you get everything you need to
          take back control of your life:
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <Image
              alt="Access PDS content on different devices"
              src="/images/SimplifiedFAPage/special-bonus-mockup.jpg"
              width={581}
              height={307}
            />
          </div>

          <div className="text-left">
            <List
              classNameListItems="mb-4"
              icon={faCheckCircle}
              listItems={[
                <>
                  <strong>70+ Courses</strong> on breaking toxic cycles, building confidence, and
                  overcoming anxiety
                </>,
                <>
                  <strong>Attachment courses</strong> that guide you to go from insecure to securely
                  attached — the key to healthy relationships
                </>,
                <>
                  <strong>Live coaching webinars and Q&As with Thais Gibson</strong> to help you
                  learn, process, and heal
                </>,
                <>
                  <strong>A supportive community</strong> that truly understands what you're going
                  through
                </>,
                <>
                  <strong>Simple yet powerful tools</strong> to create healthy habits, fundamental
                  changes, and lasting transformations that stay with you
                </>,
              ]}
            />

            <p className="my-4">
              <strong>You don’t have to stay stuck. Your breakthrough is waiting.</strong>
            </p>

            <ButtonCheckout className="mt-b" href={ctaUrl} label="START YOUR FREE TRIAL TODAY*" />

            <p className="text-gray-600 text-sm mt-2">
              *This offer is available for a limited time. After the 14-day trial, you’ll
              automatically become a member for $67/month.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-black-secondary" classNameInner="text-white">
        <h2 className="mb-4">Heal & Rebuild Yourself &amp; Your Relationships</h2>

        <p className="tracking-33 mb-8">
          <strong>WITH OUR ALL-ACCESS PASS - THE COMPLETE PLATFORM FOR HEALING</strong>
        </p>

        <div className="grid grid-cols-1 text-left gap-8 lg:grid-cols-2">
          <div>
            {[
              'Your mental health is the foundation for how you show up in every part of your life—including your current or future relationships.',
              'That’s why understanding and supporting your mental health is one of the most powerful things you can do for yourself and your relationships.',
              'This Mental Health Awareness Month, The Personal Development School is focusing on the connection between emotional well-being and relational health.',
              'Activate your 14-day All-Access Pass Trial to begin your healing journey. Because when you feel grounded, connected, and safe within yourself, you and your relationships thrive.',
            ].map((copy, idx) => (
              <p key={`benefits_${idx}`} className="mb-4">
                {copy}
              </p>
            ))}
          </div>

          <div>
            <List
              classNameIcon="!text-2xl text-yellow"
              classNameListItems="mb-4 font-bold lg:!pl-7"
              classNameText="lg:pl-3"
              icon={faStar}
              listItems={[
                <>
                  <strong>Calm your anxiety</strong> and emotions to navigate life’s challenges with
                  greater ease, clarity, and confidence.
                </>,
                <>
                  <strong>Rediscover hope</strong> and a renewed sense of purpose to feel more
                  engaged and connected to yourself and the world around you.
                </>,
                <>
                  <strong>Empower your confidence</strong> to take risks and pursue your goals,
                  knowing that you are capable and worthy of success.
                </>,
                <>
                  <strong>Enhance your understanding</strong> and express your emotions more
                  effectively to create deeper, more meaningful connections.
                </>,
                <>
                  <strong>Create sustainable habits</strong> that promote mental well-being,
                  improving your overall quality of life and sense of control.
                </>,
              ]}
            />
          </div>
        </div>

        <SocialProofBar
          cardNumbers={[70000, 50000000, 45000]}
          cardTexts={[
            'Course enrolments',
            'Views on YouTube',
            'Members in over 120 countries worldwide',
          ]}
          className="text-black"
          classNameCard="lg:pt-7 xs:!px-3 lg:pb-5"
          classNameIcon="!bg-white"
        />
      </Section>

      <Section
        className="bg-woman-hugging-herself min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-woman-hugging-herself-mobile lg:hidden" />

        <div className="relative text-left p-4 z-5 lg:col-start-6 lg:col-span-7">
          <h2 className="mb-4">
            Join Thousands of Our Members in Learning Practical, Powerful, and Proven Techniques for
            Creating Change That Actually Lasts.
          </h2>

          {[
            'Wondering why we’re giving away free access to our platform?',
            'Because we know that our courses work.',
            'The techniques we teach inside of The Personal Development School work directly with the different parts of your mind to bring you the breakthrough you need to create change that lasts a lifetime.',
            'We’ve surveyed thousands of our students from around the world who have taken our courses and given us honest ratings. They consistently report:',
          ].map((copy, idx) => (
            <p key={`results_${idx}`} className="mb-4">
              {copy}
            </p>
          ))}

          <List
            classNameListItems="mb-4"
            icon={faCircleSmall}
            listItems={[
              '3X more self-confidence and fulfillment in their dating lives (if single).',
              'A 50% improvement in their current relationship (if in a committed relationship).',
              'A 40% improvement in their self-esteem and self-talk.',
              '30% fewer anxiety and panic attacks than they had before.',
              '90% success rate in forming a new habit within 21 days.',
            ]}
          />

          <p className="mb-4">
            <strong>
              Whether you need help building healthier habits, understanding where your toxic
              relationship patterns come from, or learning healthy coping mechanisms for dealing
              with your anxiety week to week, you’ll spend the next 14 days learning essential tools
              that will help you create the change you’re looking for in a short amount of time.
            </strong>
          </p>

          <ButtonCheckout href={ctaUrl} label="JOIN & TRANSFORM" />
        </div>
      </Section>

      <Section className="max-w-full !p-0 my-8" classNameInner="!max-w-full !m-0 !p-0">
        <h2 className="mb-4">
          You could be joining our members in having breakthroughs like this:
        </h2>

        <p className="mb-8">
          The Personal Development School has helped thousands of people make inspiring life
          transformations.
        </p>

        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>

      <PDS14dftFeatureOffers />

      <CarouselPromotionCourses />

      <ThaisIntro />

      <Section classNameInner="!max-w-5xl mx-auto">
        <h2 className="mb-4">What If Prioritizing Yourself Changed Everything?</h2>

        <p className="mb-8">
          <strong>
            Imagine a life where anxiety, self-doubt, and emotional pain no longer hold you back.
            Think about this:
          </strong>
        </p>

        <div className="grid grid-cols-1 gap-4 mb-8 lg:grid-cols-4">
          {prioritizeSection.map((item, idx) => (
            <div key={`prioritize_${idx}`} className="flex flex-col items-center">
              <div className="!w-24 !h-24 flex justify-center items-center rounded-full shadow-md mb-6">
                <FontAwesomeIcon className="!text-primary" icon={item.icon} size="2x" />
              </div>

              <p>{item.copy}</p>
            </div>
          ))}
        </div>

        <p className="mb-4">
          <strong>
            You’ve spent so much time caring for others—now it’s your turn to focus on YOU. And
            we’re here to help you with our empowering courses, insightful live webinars, and
            supportive community.
          </strong>
        </p>

        <p className="mb-4">
          <strong>
            Every moment you invest in your well-being is a step toward peace, confidence, and the
            life you truly deserve. Let this be the moment you choose you.
          </strong>
        </p>

        <ButtonCheckout href={ctaUrl} label="SIGN UP & PUT YOURSELF FIRST!" />
      </Section>

      <PDS14dftBreakthrough />

      <PDS14dftTestimonialVideo />

      <Faq
        classNameHeading="text-center"
        classNameIcon="text-primary"
        heading="Questions You Might Have"
        faq={ValentinesFAQs}
      />
    </Page>
  )
}

const prioritizeSection = [
  {
    icon: faDove,
    copy: 'How empowering will it feel to finally take control of my anxiety every day?',
  },
  {
    icon: faMessageHeart,
    copy: 'How fulfilling will it be to attract a relationship that is secure and loving?',
  },
  {
    icon: faArrowsSpin,
    copy: 'How proud will I be of myself for staying committed to my healthy habits?',
  },
  {
    icon: faStars,
    copy: 'How much more can I accomplish when I fully believe in myself and my worth?',
  },
]
