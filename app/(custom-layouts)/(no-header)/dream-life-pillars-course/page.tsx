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
import './style.css'

export const metadata: Metadata = {
  title: 'Get a 7-Day Free Trial and the Pillars of a Secure Relationship course for LIFE!',
  description:
    'This is your chance to get a 7-day free trial to the All-Access Pass and own the 6 Key Pillars of a Secure Relationship course forever. Sign up now!',
  robots: 'noindex',
}

export default function DreamLifeFreeCoursePage() {
  const checkoutUrl = externalRoutes.checkoutJune2025PromoTrial

  return (
    <Page page_name="Dreamlife Pillars Course Page" className="relative">
      <section className="text-center bg-purple-dark px-2">
        <h2 className="text-white pt-4 max-w-screen-lg mx-auto">
          LIMITED TIME: Claim Your FREE Create Secure Relationships Course ($250 Value) for Life +
          Your 7 Day Free PDS Membership
        </h2>

        <div className="pb-4">
          <CountdownTimer date={new Date(`2025-05-17T23:59:59-04:00`)} theme="dark" />
        </div>
      </section>

      <section className="w-full text-center bg-pink-auxiliary pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <h1 className="max-w-xl leading-[50px] mx-auto mb-4">
          Get the Only Tools You Need to Build The Best Relationship with Yourself and Others
        </h1>

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions
            showDisclaimer={false}
            className="!max-w-xl mx-auto lg:flex-col"
            configKey="dreamLifePillarsCourse"
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
        <h2>Unlock the Tools to Create Healthy, Secure Relationships</h2>

        <div className="grid gap-8 text-left my-8 lg:grid-cols-2">
          <div>
            <p>
              <strong>
                When you master personal growth and healing, you stop chasing the wrong
                relationships—and start choosing the right person for you. This is what the Key
                Pillars for a Secure Relationship course will empower you to do:
              </strong>
            </p>

            <List
              classNameIcon="text-primary"
              icon={faCheckCircle}
              listItems={[
                'Uncover how past conditioning affects your present behavior and replace these self-sabotaging cycles with secure, respectful ones.',
                'Learn to handle conflict resolution and express your feelings clearly to talk through the hard stuff with grace and confidence.',
                'Articulate your non-negotiables, recognize compatibility faster, and attract partners who meet your values and future desires.',
                'Cultivate emotional self-awareness, self-trust, and a stronger inner compass—so you stop losing yourself in others.',
                "Turn everyday moments into opportunities for bonding and being emotionally present, whether you're dating or in a relationship.",
                'Protect your peace while staying emotionally open—so you can build relationships based on mutual respect.',
              ]}
            />
          </div>

          <div>
            <Image
              alt="A desktop screen showcasing the Key Pillars to Secure Course"
              src="/images/TrialHeadspace/secure-pillars-mockup.png"
              width={588}
              height={470}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>

        <div className="bg-pink-tertiary rounded-2xl p-6 mb-4">
          <p>
            <strong>
              Get 7 days of full access to our All-Access Pass, our all-inclusive membership!
              Explore 70+ life-changing courses, live webinars, and a private support community
              embedded with our science-backed, results-driven proprietary method designed to help
              you become securely attached and see results in just 1 week.
            </strong>
          </p>

          <p>
            <strong>
              Even if you cancel before the trial ends, you’ll keep our Key Pillars for a Secure
              Relationship course (A FREE GIFT WORTH $250) for life.
            </strong>
          </p>

          <p>
            <strong>
              Why are we giving all this away at no cost? Because we know you’ll love what The
              Personal Development School has to offer, and we’re willing to let you try it to
              believe it, at no risk or cost to you.
            </strong>
          </p>
        </div>

        <ButtonCheckout href={checkoutUrl} label="CLAIM YOUR FREE COURSE NOW" />
      </Section>

      <Section classNameInner="bg-white-secondary rounded-2xl p-6">
        <h2>What If One Free Course Could Help You Find Real Love?</h2>

        <div className="grid gap-4 text-left my-4 lg:grid-cols-2">
          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={[
              'Use the Needs and Expectations inventory to bring clarity and alignment into your relationship',
              'Introduce powerful rituals of connection that deepen intimacy and build trust, commitment, and honesty',
              'Learn effective communication strategies that lead to real emotional maturity and long-term compatibility',
            ]}
          />

          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={[
              'Break the cycle of reactive relationship patterns and beliefs by getting off autopilot',
              'Reprogram unhealthy relationship habits to create a deep, lasting bond without losing yourself',
              'Build a true and authentic partnership where both people feel seen, valued, and loved',
            ]}
          />
        </div>

        <ButtonCheckout className="mb-4" href={checkoutUrl} label="CLAIM YOUR FREE COURSE NOW" />

        <p>
          <em>
            *When you join now, you’ll sign up for our All-Access Pass Membership. At the end of the
            trial, you’ll automatically become a member of the $67.00/month plan. Plus, even if you
            don’t stay with us after 7 days, you still get to keep and access the Key Pillars for a
            Secure Relationship Course for life.
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
        teaserHeading="Free Trial + Key Pillars for a Secure Relationship Course for LIFE!"
        classNamePaymentOptions="!max-w-xl mx-auto lg:flex-col"
        paymentOptionsConfigKey="dreamLifePillarsCourse"
        communityBullets={[
          'Discover the Key Pillars the create strong, healthy relationships that are built on authenticity and honesty',
          'Apply the tools from our course to experience real transformative results within 7 days',
          'Understand what you need and deserve in your relationship to experience true joy and fulfillment',
          'Use our proven framework to create deeper connections, heal wounds, and grow together with your loved one',
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
    copy: 'Activate your 7-day free trial and instantly unlock everything inside the All-Access Pass. You’ll get immediate access to over 70 expert-led courses, live webinars, and a supportive community that truly gets you. No strings attached — just real tools that work.',
    image: '/images/RoyalRumblePage/rr-offer.png',
  },
  {
    icon: faSquare2,
    step: 'STEP TWO',
    title: 'Dive Into the Pillars Course (Yours to Keep!)',
    copy: 'Discover the patterns, fears, and blocks that have been holding you back in your love life. You’ll uncover the root causes of your dating or relationship challenges and start reprogramming your mind for connection, trust, and emotional safety. This course is yours forever.',
    image: '/images/course-pillars-to-secure-relationships.jpg',
  },
  {
    icon: faSquare3,
    step: 'STEP THREE',
    title: 'Keep Growing with the All-Access Pass',
    copy: 'Stay on your healing journey with full access to everything inside the All-Access Pass: courses on boundaries, self-esteem, attachment styles, emotional mastery, and more, plus live webinars and community access. This is how lasting continues to foster.',
    image: '/images/TrialHeadspace/pds-courses-mockup.png',
  },
]
