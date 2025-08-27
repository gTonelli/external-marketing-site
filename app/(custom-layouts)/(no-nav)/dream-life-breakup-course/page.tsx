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
  title: 'Heal Your Heart & Thrive in Relationships!',
  description:
    'Breakups hurt. This free course for life will help you move forward and thrive in relationships! And get a 7-Day All-Access Pass Free Trial!',
  robots: 'noindex',
}

export default function DreamLifeBreakupCoursePage() {
  const checkoutUrl = externalRoutes.checkoutSep2025PromoTrial

  return (
    <Page page_name="Dreamlife Breakup Course Page" className="relative">
      <section className="text-center bg-purple-dark px-2">
        <h2 className="text-white pt-4 max-w-screen-lg mx-auto">
          LIMITED TIME: Claim Your FREE Heal From a Breakup Course ($250 Value) For Life + Your
          7-Day Free All-Access Pass Trial
        </h2>

        <div className="pb-4">
          <CountdownTimer date={new Date(`2025-09-01T23:59:59-04:00`)} theme="dark" />
        </div>
      </section>

      <section className="w-full text-center bg-pink-auxiliary pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <h1 className="max-w-xl leading-[50px] mx-auto mb-4">
          Turn Breakups into Breakthroughs to Experience Personal Growth & New Love!
        </h1>

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions
            className="!max-w-xl mx-auto lg:flex-col"
            configKey="dreamLifeBreakupCourse"
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
        <h2>
          Unlock the Tools To Heal, Grow, & Move On From Your Past Relationships in Just One Week!
        </h2>

        <div className="grid gap-8 text-left my-8 lg:grid-cols-2">
          <div>
            <p>
              <strong>
                Healing from your past and self-soothing your pain is the first step toward
                welcoming secure, healthy love into your life. Whether you’re recently single or
                still trying to heal from past relationship trauma, the Heal From a Breakup course
                helps you:
              </strong>
            </p>

            <List
              classNameIcon="text-primary"
              icon={faCheckCircle}
              listItems={[
                'Sit with your feelings, heal through your pain, and make it to the other side, instead of just numbing yourself.',
                'Improve your self-esteem by teaching you to release limiting beliefs and replace them with positive ones.',
                'Self-soothe with science-backed techniques that are proven to help you feel better in a healthy way.',
                'End the cycle of falling for the same types of partners by empowering you to feel comfortable being on your own.',
                'Acknowledge what you bring to the table so you never settle for anything less than you deserve again in future relationships.',
                'Create self-compassion and turn grief into gratitude with simple mindset shifts and new perspectives.',
                'Strengthen your relationship with yourself so you can start your next romantic connection whole, complete, and ready for secure love.',
              ]}
            />
          </div>

          <div>
            <Image
              alt="A desktop screen showcasing the Heal from Breakup Course"
              src="/images/TrialHeadspace/breakup-course-mockup.png"
              width={588}
              height={470}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>

        <div className="bg-pink-tertiary rounded-2xl p-6 mb-4">
          <p>
            Activate your <strong>7-Day Free Trial</strong> today and explore 70+ science‑backed
            courses, daily live Q&As with me (Thais Gibson), and a private global community, all
            designed to help you become securely attached and see tangible results in as little as
            one week.
          </p>

          <p>
            Most students finish the <strong>Heal From a Breakup course</strong> in a few sessions,
            and end up feeling transformed and ready to seek new relationships. They then use the
            remaining trial days to practice the tools with live coaching and community feedback.
          </p>

          <p>
            Even if you cancel before the trial ends, this <strong>$250 course</strong> is yours
            forever. We do this because results speak louder than promises, and we know you’ll feel
            the shift and want to keep going.
          </p>
        </div>

        <ButtonCheckout href={checkoutUrl} label="GET YOUR FREE COURSE NOW" />
      </Section>

      <Section classNameInner="bg-white-secondary rounded-2xl p-6">
        <h2>Here’s How This FREE Course Will Help You Feel Whole Again</h2>

        <div className="grid gap-4 text-left my-4 lg:grid-cols-2">
          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={[
              'Turn late-night spirals into grounded clarity so you can fall asleep and wake up with a simple plan instead of a pit in your stomach.',
              'Translate overwhelming emotions into one compassionate story so the “what-ifs” stop running your day.',
              'Create clean distance both online and offline so your heart can breathe without guilt, pressure, or mixed signals.',
              'Self-soothe without distractions or unhealthy coping mechanisms.',
            ]}
          />

          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={[
              'Link triggers to unmet needs so you can calm them in minutes and choose responses you’re proud of.',
              'Spot the “gold” you gained from past relationships so you can rebuild self-worth and carry your strengths forward.',
              'Build simple daily rhythms that restore focus and energy so you feel like yourself again by week’s end.',
              'Heal from recent or past relationship trauma.',
            ]}
          />
        </div>

        <ButtonCheckout className="mb-4" href={checkoutUrl} label="CLAIM YOUR FREE COURSE NOW" />

        <p>
          <em>
            *When you join now, you’ll sign up for our All-Access Pass Membership. At the end of the
            trial, you’ll automatically become a member of the $67.00/month plan. Plus, even if you
            don’t stay with us after 7 days, you still get to keep and access the $250-valued Heal
            From a Breakup course for life.
          </em>
        </p>
      </Section>

      <Section className="bg-black text-white !py-16">
        <h2>Use the Revolutionary Tools Only Available In Our School!</h2>

        <p>
          Learn and use the Integrated Attachment Theory<sup>TM</sup> to create and build healthy
          relationships.
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

        <ButtonCheckout href={checkoutUrl} label="GET YOUR COURSE + 7-DAY TRIAL!" />
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
        teaserHeading="Start Your 7-Day All-Access Pass & Keep the Heal From a Breakup Course for LIFE!"
        classNamePaymentOptions="!max-w-xl mx-auto lg:flex-col"
        paymentOptionsConfigKey="dreamLifeBreakupCourse"
        communityBullets={[
          'Heal from the pain of recent or past breakups without numbing or distracting yourself from the uncomfortable emotions.',
          'Apply the course tools to heal your self-esteem, self-soothe, and experience real, transformative change within seven days.',
          'Turn negative feelings into positive potential for growth with guided support and evidence-based exercises.',
          'Boost your self-esteem and rewrite limiting beliefs to make your next relationship healthier and more secure.',
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
    title: 'Dive Into the Breakup Course (Yours to Keep!)',
    copy: "Process and heal from heavy emotions, rebuild your self-worth, self-compassion and turn grief into gratitude, and feel confident on your own so you can break toxic cycles and welcome new, healthy love into your life. You'll learn to heal your heart in as little as one week!",
    image: '/images/course-heal-from-breakup.jpg',
  },
  {
    icon: faSquare3,
    step: 'STEP THREE',
    title: 'Keep Growing with the All-Access Pass',
    copy: 'Stay on your healing journey with full access to everything inside the All-Access Pass: courses on boundaries, self-esteem, attachment styles, emotional mastery, and more, plus live webinars and community access. This is how lasting continues to foster.',
    image: '/images/TrialHeadspace/pds-courses-mockup.png',
  },
]
