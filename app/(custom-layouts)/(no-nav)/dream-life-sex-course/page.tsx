// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { CommunityTeaser } from '@/components/CommunityTeaser'
import { PaymentOptions } from '@/components/PaymentOptions'
import { CountdownTimer } from '@/components/CountDownTimer'
import VideoTeaser from '@/components/Video/variants/VideoTeaser'
import { faSquare1, faSquare2, faSquare3 } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// utils
import { externalRoutes } from '@/utils/constants'
// style
import '../dream-life-free-course/style.css'

export const metadata: Metadata = {
  title: 'Have the Best Sex Life Ever – Thanks to This Course!',
  description:
    'Sign up for our 7-day trial to get your FREE Attachment Style Sex Course for LIFE! Transform and have the best sex life with this guided program!',
  robots: 'noindex',
}

export default function DreamLifeSexCoursePage() {
  const checkoutUrl = externalRoutes.checkoutMarch2025PromoTrial

  return (
    <Page page_name="Dreamlife Sex Course Page" className="relative">
      <section className="text-center bg-purple-dark px-2">
        <h2 className="text-white pt-4 max-w-screen-lg mx-auto">
          LIMITED TIME: Claim your FREE Attachment Styles & Sex Course ($250 Value) For LIFE With
          Your 7-Day Free Trial to All-Access Pass
        </h2>

        <div className="pb-4">
          <CountdownTimer date={new Date(`2025-05-17T23:59:59-04:00`)} theme="dark" />
        </div>
      </section>

      <section className="w-full text-center bg-pink-auxiliary pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <h1 className="max-w-xl leading-[50px] mx-auto mb-4">
          What If Intimacy and Relationships Could Feel Easier and More Comfortable?
        </h1>

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions
            showDisclaimer={false}
            className="!max-w-xl mx-auto lg:flex-col"
            configKey="dreamLifeSexCourse"
          />
        </div>

        <Image
          className="w-full mx-auto sm:w-3/4 md:w-1/2 lg:hidden"
          src="/images/TrialHeadspace/hero-left-mockup.png"
          alt="hero-mockup-left"
          width={729}
          height={796}
          quality={100}
          sizes="100vw"
        />
      </section>

      <Image
        className="hidden absolute w-1/2 top-60 lg:-left-56 lg:block xl:w-1/3 xl:-left-32 2xl:-left-44"
        src="/images/TrialHeadspace/hero-left-mockup.png"
        alt="hero-mockup-left"
        width={729}
        height={796}
        quality={100}
        sizes="100vw"
      />

      <Image
        className="hidden absolute w-1/2 top-60 lg:-right-56 lg:block xl:w-1/3 xl:-right-32"
        src="/images/TrialHeadspace/hero-right-mockup.png"
        alt="hero-mockup-right"
        width={656}
        height={708}
        quality={100}
        sizes="100vw"
      />

      <Section>
        <h2>Heal Intimacy Blocks and Reignite Desire In Your Relationship</h2>

        <div className="grid gap-8 text-left my-8 lg:grid-cols-2">
          <div>
            <p>
              The <strong>Attachment Styles & Sex</strong> course helps you uncover how your
              attachment style influences sexual connection, so you can break free from intimacy
              struggles and create emotionally and physically fulfilling relationships. You’ll learn
              to:
            </p>

            <List
              classNameIcon="text-primary"
              icon={faCheckCircle}
              listItems={[
                'Understand why sexual and intimate desires fade and how to reignite them without pressure, guilt, or resentment.',
                'Identify how your attachment style shows up in the bedroom and how it may be sabotaging emotional or physical closeness.',
                'Heal anxious, avoidant, or fearful patterns so you can feel safe being seen, touched, and deeply connected.',
                'Speak up about your intimate needs, preferences, and boundaries with clarity and confidence.',
                'Transform intimacy into a source of joy, trust, and mutual fulfillment, instead of stress or confusion.',
                'Build a lasting connection with a partner who values closeness, respects your limits, and helps you feel secure in love and sex.',
              ]}
            />
          </div>

          <div>
            <Image
              alt="A desktop screen showcasing the Key Pillars to Secure Course"
              src="/images/TrialHeadspace/sex-course-mockup.png"
              width={588}
              height={470}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>

        <div className="bg-pink-tertiary rounded-2xl p-6 mb-4">
          <p>
            Get 7 days of full access to our <strong>All-Access Pass</strong>, our all-inclusive
            membership! Explore 70+ life-changing courses, live webinars with me (Thais Gibson), and
            a private support community embedded with our science-backed, results-driven proprietary
            method designed to help you become securely attached and see results in just 1 week.
          </p>

          <p>
            Even if you cancel before the trial ends, you’ll keep our{' '}
            <strong>Attachment Styles & Sex</strong> course (A FREE GIFT WORTH $250) for{' '}
            <strong>life</strong>.
          </p>

          <p>
            Why are we giving all this away at no cost? Because we know you’ll love what{' '}
            <strong>The Personal Development School</strong> has to offer, and we’re willing to let
            you try it to believe it, at no risk or cost to you.
          </p>
        </div>

        <ButtonCheckout href={checkoutUrl} label="GET YOUR FREE COURSE & TRIAL" />
      </Section>

      <Section classNameInner="bg-white-secondary rounded-2xl p-6">
        <h2>Learn Exactly How to Create Lasting Emotional and Physical Closeness</h2>

        <div className="grid gap-4 text-left my-4 lg:grid-cols-2">
          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={[
              'Strengthen your relationship by making sex feel safe, connected, and meaningful',
              'Explore how different attachment styles impact your sex life',
              'Identify why intimacy may diminish and how to reignite the passion',
            ]}
          />

          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={[
              'Learn how to set healthy and realistic expectations for yourself and others',
              'End the push-pull dynamic and stop repeating cycles that leave you disconnected',
              'Feel emotionally secure and safe in your connections and relationships',
            ]}
          />
        </div>

        <ButtonCheckout className="mb-4" href={checkoutUrl} label="GET YOUR FREE COURSE & TRIAL*" />

        <p>
          <em>
            *When you join now, you’ll enter a 7‑day Free Trial of our All‑Access Pass. After the
            trial, you’ll automatically continue on the $67/month plan. But whether you stay on or
            not, the $250 Attachment Styles & Sex course is yours for life.
          </em>
        </p>
      </Section>

      <Section className="bg-black text-white !py-16">
        <h2>Use the Revolutionary Tools Only Available In Our School!</h2>

        <p>
          Learn and use the Integrated Attachment Theory™ to create and build healthy relationships.
        </p>

        <div className="grid gap-8 text-left my-8 lg:grid-cols-3">
          {STEPS_TO_PURCHASE.map((item, idx) => (
            <div key={`puchase_steps_${idx}`}>
              <div className="min-h-48 mb-4">
                <Image
                  className="w-full rounded-xl lg:max-h-48"
                  alt="PDS Journey Step"
                  src={item.image}
                  width={360}
                  height={180}
                />
              </div>

              <div className=" bg-white text-black rounded-2xl p-4">
                <p className="font-bold tracking-33 text-primary mb-4">
                  <span className="mt-1 mr-2">
                    <FontAwesomeIcon className="text-xl" icon={item.icon} />
                  </span>
                  {item.step}
                </p>

                <h3 className="mb-4">{item.title}</h3>

                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <ButtonCheckout href={checkoutUrl} label="SIGN UP NOW" />
      </Section>

      <Section>
        <h2 className="mb-8">Use Your Free Trial to Continue Growing Your Relationships!</h2>

        <div className="grid gap-4 mb-8 lg:grid-cols-3">
          {PDS_FEATURES.map((feature, idx) => (
            <div key={`feature_${idx}`}>
              <div className="flex justify-center mb-4">
                <Image alt="vector icon" src={feature.icon} width={92} height={86} />
              </div>

              <h3 className="mb-4">{feature.title}</h3>

              <p>{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2>Don't Stop Your Personal Growth</h2>

          <p>
            Unlock our most popular courses to gain powerful tools for emotional insight,
            self-awareness, and lasting relationship growth.
          </p>

          <ButtonCheckout href={checkoutUrl} label="TRY THEM WITH A FREE TRIAL" />
        </div>

        <VideoTeaser
          className="bg-white-secondary"
          description="Progression is the key to success! With the All-Access Pass, you can continue your personal and relationship growth."
        />
      </Section>

      <CommunityTeaser
        sectionHeading="Experience Belonging to an Unstoppable Powerhouse Community That Ignites Your Life!"
        teaserHeading="Free Trial + Attachment Styles & Sex Course FREE for LIFE!"
        classNamePaymentOptions="!max-w-xl mx-auto lg:flex-col"
        paymentOptionsConfigKey="dreamLifeSexCourse"
        communityBullets={[
          'Understand how your attachment style shapes comfort, desire, and vulnerability, so intimacy feels safe and mutually fulfilling.',
          'Apply science-based strategies and notice a deeper bond within one week, using practical exercises you can revisit anytime.',
          'Clarify the emotional and physical experiences that matter most to you, turning intimacy into a reliable source of joy and confidence.',
          'Follow our evidence-based framework to communicate needs, set healthy boundaries, and sustain passion as your relationship grows.',
        ]}
      />
    </Page>
  )
}

const PDS_FEATURES = [
  {
    icon: '/images/TrialHeadspace/watching-on-laptop.svg',
    title: '70+ Self-Paced Courses',
    subtitle:
      'Transform your life or relationships by becoming securely attached. Explore and choose from our 70+ courses on attachment styles, relationships, and more.',
  },
  {
    icon: '/images/TrialHeadspace/couple-holding-heart-message.svg',
    title: 'Interactive Webinars',
    subtitle:
      'Embrace a classroom experience by attending weekly live webinars and Q&A sessions with me, Thais Gibson, and our team of Certified Relationship Coaches.',
  },
  {
    icon: '/images/TrialHeadspace/fly-on-rocket.svg',
    title: 'Supportive Community',
    subtitle:
      'Take inspiration, share your experiences, and learn and grow with like-minded people from around the world in our private online community.',
  },
]

const STEPS_TO_PURCHASE = [
  {
    icon: faSquare1,
    step: 'STEP ONE',
    title: 'Sign Up for Your Free Trial Right Here & Now',
    copy: 'Activate your 7-Day Free Trial and instantly unlock everything inside the All-Access Pass. You’ll get immediate access to over 70 expert-led courses, live webinars, and a supportive community that truly gets you. No strings attached — just real tools that work.',
    image: '/images/RoyalRumblePage/rr-offer.png',
  },
  {
    icon: faSquare2,
    step: 'STEP TWO',
    title: 'Start & Keep the Attachment Styles & Sex Course',
    copy: 'Discover how your attachment style impacts intimacy, attraction, and emotional connection. You’ll uncover the unconscious beliefs and patterns that create distance or dissatisfaction in your love life—and start reprogramming your mind for safety, vulnerability, and passion.',
    image: '/images/course-attachment-styles-and-sex.jpg',
  },
  {
    icon: faSquare3,
    step: 'STEP THREE',
    title: 'Keep Growing with the All-Access Pass',
    copy: 'Stay on your healing journey with full access to everything inside the All-Access Pass: courses on boundaries, self-esteem, attachment styles, emotional mastery, and more, plus live webinars and community access. This is how lasting continues to foster.',
    image: '/images/TrialHeadspace/pds-courses-mockup.png',
  },
]
