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
  title: 'Get Your Dream Life with a Free Trial & Course for Life!',
  description:
    'It’s time for you to discover your needs in life. Sign up for our 7-Day Free Trial to our All-Access Pass and get our Needs Course for Free for LIFE!',
  robots: 'noindex',
}

export default function DreamLifeFreeCoursePage() {
  const checkoutUrl = externalRoutes.checkoutJan2025PromoTrial

  return (
    <Page page_name="Dreamlife Pillars Course Page" className="relative">
      <section className="text-center bg-purple-dark px-2">
        <h2 className="text-white pt-4 max-w-screen-lg mx-auto">
          LIMITED TIME OFFER: Get The Discover, Fulfill, and Embrace Your Personal Needs Course
          ($250 Value) FREE FOR LIFE with a 7-Day Free Trial to the All-Access Pass
        </h2>

        <div className="pb-4">
          <CountdownTimer date={new Date(`2025-05-17T23:59:59-04:00`)} theme="dark" />
        </div>
      </section>

      <section className="w-full text-center bg-pink-auxiliary pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <h1 className="max-w-xl leading-[50px] mx-auto mb-4">
          Lasting Love Begins Now. Learn What You Need to Attract a Secure, Fulfilling Relationship
        </h1>

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions
            showDisclaimer={false}
            className="!max-w-xl mx-auto lg:flex-col"
            configKey="dreamLifeFreeCourse"
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
        <h2>Unearth Your Needs and Transform Every Relationship</h2>

        <div className="grid gap-8 text-left my-8 lg:grid-cols-2">
          <div>
            <p>
              Uncovering your personal needs is the first step to thriving in life and love. The{' '}
              <strong>Discover, Embrace, and Fulfill Your Personal Needs</strong> course helps you:
            </p>

            <List
              classNameIcon="text-primary"
              icon={faCheckCircle}
              listItems={[
                'Rewire your daily habits, upgrade your communication, and build unshakeable self‑trust so your self‑talk and relationships support your goals.',
                'Transform conflict into connection by speaking with clarity and turning tense moments into bonding breakthroughs that actually bring you closer.',
                'Turn procrastination into purposeful momentum by linking every task to deep subconscious motivation, making your progress natural and unshakeable.',
                'Spot true compatibility in minutes, not months, naturally attracting partners, projects, and opportunities that honour your values and future vision.',
                'Create daily bonding rituals that keep your love life or relationship exciting and trustworthy, even when life is busy.',
                'Protect your peace while staying open to love, setting healthy boundaries that let you feel seen, valued, and energized.',
              ]}
            />
          </div>

          <div>
            <Image
              alt="A desktop screen showcasing the Discover, Embrace and Fulfill Personal Needs Course"
              src="/images/TrialHeadspace/needs-course-mockup.png"
              width={588}
              height={470}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>

        <div className="bg-pink-tertiary rounded-2xl p-6 mb-4">
          <p>
            Activate your free trial today and explore 70+ science‑backed courses, daily live Q&As
            with me (Thais Gibson), and a private global community—all designed to help you become
            securely attached and see tangible results in as little as one week.
          </p>

          <p>
            Most students finish the{' '}
            <strong>Discover, Embrace, and Fulfill Your Personal Needs</strong> course in just 3–4
            evenings, then use the remaining trial days to practice the tools with live coaching and
            community feedback.
          </p>

          <p>
            Even if you cancel before the trial ends, this $250 course is yours forever. We do this
            because results speak louder than promises, and we know you’ll feel the shift and want
            to keep going.
          </p>
        </div>

        <ButtonCheckout href={checkoutUrl} label="CLAIM YOUR FREE COURSE NOW" />
      </Section>

      <Section classNameInner="bg-white-secondary rounded-2xl p-6">
        <h2>When You Know Your Needs, Love Lasts. Here's How:</h2>

        <div className="grid gap-4 text-left my-4 lg:grid-cols-2">
          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={[
              'Turn vague feelings into clear requests so that your partner knows exactly how to love you (and you them) without guesswork.',
              'Create weekly rituals to satisfy core needs for certainty, growth, and intimacy, keeping affection and trust strong even on busy days.',
              'Speak the "attachment‑safe" language of needs to turn hard conversations into cooperative problem‑solving.',
            ]}
          />

          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={[
              'Link triggers to unmet needs so you can calm conflict in minutes and replace reactive patterns with compassionate responses.',
              'Transform self‑sabotage into self‑support by rewiring habits that once drained you into routines that refill you and your relationship.',
              'Build a future‑proof partnership where both people feel seen, valued, and excited about what’s next because every need has a healthy way to be met.',
            ]}
          />
        </div>

        <ButtonCheckout className="mb-4" href={checkoutUrl} label="CLAIM YOUR FREE COURSE NOW" />

        <p>
          <em>
            *When you join now, you’ll enter a 7‑day Free Trial of our All‑Access Pass. After the
            trial, you’ll automatically continue on the $67/month plan. But whether you stay on or
            not, the $250 Discover, Embrace, and Fulfill Your Personal Needs course is yours for
            life.
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
        teaserHeading="Start Your 7-Day All-Access Pass & Keep the Discover, Embrace & Fulfill Your Personal Needs Course for LIFE!"
        classNamePaymentOptions="!max-w-xl mx-auto lg:flex-col"
        paymentOptionsConfigKey="dreamLifeFreeCourse"
        communityBullets={[
          'Discover your core needs to create authentic self-worth and secure, healthy relationships.',
          'Apply the course tools to meet those needs and experience real, transformative change within seven days.',
          'Understand exactly what you need and deserve so you can enjoy daily joy, fulfillment, and inner peace.',
          'Use our proven framework to set healthy boundaries, deepen connections, and grow alongside the people you love.',
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
    title: 'Dive Into the Needs Course (Yours to Keep!)',
    copy: 'Decode your personal subconscious needs, learn to communicate without misunderstanding, and install micro‑habits that refill your emotional tank automatically. Within one week, you’ll resolve conflicts in minutes, less procrastination, and become more connected in your relationships.',
    image: '/images/course-personal-needs-alt.jpg',
  },
  {
    icon: faSquare3,
    step: 'STEP THREE',
    title: 'Keep Growing with the All-Access Pass',
    copy: 'Stay on your healing journey with full access to everything inside the All-Access Pass: courses on boundaries, self-esteem, attachment styles, emotional mastery, and more, plus live webinars and community access. This is how lasting continues to foster.',
    image: '/images/TrialHeadspace/pds-courses-mockup.png',
  },
]
