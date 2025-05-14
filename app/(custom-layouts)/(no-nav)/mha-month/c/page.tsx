// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Section } from '@/components/Section'
import { Page } from '@/components/Page'
import { faStar } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faSquareCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { List } from '@/components/List'
import { CarouselPromotionCourses } from '@/components/Carousel/variants/CarouselPromotionCourses'
import {
  PDS14dftFAQ,
  PDS14dftFeatureOffers,
  PDS14dftTestimonialVideo,
  PDSSocialProof,
} from '@/components/SpecialPromotion'
import { MHAButton } from '@/components/MHAButton'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import { ThaisIntro } from '@/components/ThaisIntro'
import {
  faCircleCheck,
  faClock,
  faEye,
  faHeart,
  faSadTear,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const metadata: Metadata = {
  title: 'Find Calmness & Clarity with Our 14-Day Free Trial',
  description:
    'Your mental health matters. Make it a priority with our All-Access Pass, available for 14 days for FREE this Mental Health Awareness Month.',
  robots: 'noindex',
}

export default function MHAPage() {
  return (
    <Page page_name="mha-month-singles" className="w-full overflow-hidden">
      <MHAHero />

      <Section
        className="2xl:py-24"
        classNameInner="lg:grid lg:grid-cols-2 lg:gap-12 xl:max-w-6xl xl:items-start">
        <div className="col-start-2 text-left">
          <p className="mb-4">
            With our revolutionary one-of-a-kind healing model, you can unlock the hidden force of
            your subconscious mind to heal your relationships, rebuild trust, create a soulful and
            balanced connection, and uncover the secrets to lasting love in your life.
          </p>

          <p className="mb-4">
            Our comprehensive two-week free trial provides you with access to ALL of our courses
            (including the best starting point: <i>Attachment Style Courses</i>), live webinars and
            Q&A sessions, and online support groups, allowing you to…
          </p>

          <p className="mb-4">
            Arm yourself with the science-backed, results-proven tools and personalized strategies (
            <i>that have been proven to work for anyone</i>) to break through the roadblocks in your
            romantic relationships, love life, and dating journey so you experience real and
            profound progress!
          </p>
        </div>

        <div className="lg:row-start-2 lg:col-span-2">
          <MHAButton label="START YOUR FREE TRIAL NOW!" />

          <p className="font-bold italic mt-3">* This offer is available for a limited time *</p>
        </div>

        <Image
          alt="hero image"
          className="w-full rounded-20 my-4 lg:my-0 lg:col-start-1 lg:row-start-1"
          width={768}
          height={513}
          src="/images/BlackFridayPage/mha-hero.jpg"
        />
      </Section>

      <Section>
        <div className="max-w-5xl text-center mx-auto">
          <h2>Ready to break your old relationship patterns?</h2>

          <p>For a limited time, you’ll gain access to the exact courses you need to:</p>

          <List
            className="mt-10"
            classNameIcon="!text-green-check !text-xl"
            classNameListItems="my-4 lg:my-5 lg:first:!mt-0 lg:!pl-7"
            classNameText="lg:pl-3"
            icon={faSquareCheck}
            listItems={[
              'Heal Your Attachment Style – Understand how your past impacts your dating life and attract better connections.',
              'Break Old Cycles – Identify and overcome the patterns that keep you stuck in unfulfilling dating circles and find lasting love.',
              'Build Real Confidence – Let go of self-doubt, feeling unworthy, and show up as your authentic, secure self.',
              'Find True Connection – Learn to communicate effectively and attract meaningful, lasting relationships.',
            ]}
          />

          <div className="text-left">
            <p>
              All it takes is just 10 minutes a day to start creating real change – and with $0
              down, there’s nothing stopping you from starting today.
            </p>

            <p className="my-6">
              Your two-week free trial gives you full access to our powerful courses, live webinars
              with relationship expert <strong>Thais Gibson</strong>, and a supportive community of
              like-minded singles.
            </p>
          </div>
          <MHAButton label="START YOUR 14-DAY FREE TRIAL NOW!" />
        </div>
      </Section>

      <Section className="!py-16">
        <div className="grid grid-cols-1 gap-8 !text-left lg:grid-cols-3">
          {STEPS_TO_PURCHASE.map((item, idx) => (
            <div key={`purchase_steps_${idx}`}>
              <div className="min-h-48 mb-4">
                <Image
                  className="rounded-xl"
                  alt="PDS Journey Step"
                  src={item.image}
                  width={360}
                  height={180}
                />
              </div>

              <p className="font-bold tracking-33 mb-4">{item.step}</p>

              <h3 className="mb-4">{item.title}</h3>

              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-white bg-black-secondary lg:pb-0 2xl:py-24 2xl:pb-0">
        <MHAPDSBenefits />

        <PDSSocialProof />
      </Section>

      <Image
        alt="black wave vector"
        className="w-full md:hidden"
        width={391}
        height={103}
        src="/images/BlackFridayPage/black-secondary-wave.jpg"
      />

      <Image
        alt="black wave vector"
        className="w-full hidden md:block"
        width={1440}
        height={218}
        src="/images/BlackFridayPage/black-secondary-wave-desktop.jpg"
      />

      <div className="w-full max-w-[100vw]">
        <CarouselTestimonial
          className="mt-6"
          classNameHeader="text-center"
          headingText="You Could Be Joining Our Members in Having Breakthroughs Like This:"
          showQuotations={false}
        />
      </div>

      <PDS14dftFeatureOffers />

      <CarouselPromotionCourses
        title="Instant Access to 65+ Life-Changing Courses To Heal Yourself & Your Relationships!"
        copy="Our healing and attachment style courses set you on the path to a fulfilled love life. Join thousands who’ve broken free from destructive patterns and embraced secure attachment. Your breakthrough starts now!"
      />

      <ThaisIntro />

      <Image
        alt="purple wave vector"
        className="w-full"
        width={2881}
        height={430}
        src="/images/BlackFridayPage/mha-purple-wave-desktop.jpg"
      />

      <MHANegativePatterns />

      <MHAPDSFeatures />

      <PDS14dftTestimonialVideo />

      <PDS14dftFAQ />
    </Page>
  )
}

export const MHAHero = () => {
  return (
    <>
      <Section className="relative z-10 bg-blue-lightest lg:pb-0">
        <h2 className="!text-xl font-effra rounded-lg font-bold bg-blue-dark text-white mb-3 px-8 py-2 lg:py-4 lg:!text-3xl">
          Claim Your 14-Day Free Trial! Limited Time Only!
        </h2>

        <h1 className="text-primary font-bold mb-4 lg:leading-10 lg:max-w-[940px] lg:mx-auto lg:mb-8">
          Uncover the Hidden Secret to Attracting the Love You Deserve & Want!
        </h1>

        <p className="!text-lg font-bold mb-4 lg:max-w-3xl lg:mx-auto">
          Ready to break free from the dating patterns that have held you back? With our 14-day FREE
          trial to the All-Access Pass, you’ll get instant access to the exact courses designed to
          help you break old habits, heal past wounds, and confidently attract and build the
          meaningful connection you really want – all risk-free. Thousands of singles have already
          used these proven tools to create the secure, fulfilling relationships they’ve always
          wanted. Now, it’s your turn.
        </p>

        <MHAButton label="FIND THE LOVE YOU DESERVE TODAY" />

        <p className="max-w-xl italic mx-auto mt-4">
          *Start your free trial today! Plans start at $67.00/month after your trial ends. Cancel
          anytime before your trial ends to avoid charges. Don’t wait; this limited-time offer won’t
          last!*
        </p>
      </Section>

      <Image
        alt="green wave vector"
        className="relative w-full mt-0 z-5 2xl:-mt-5"
        width={1700}
        height={89}
        src="/images/styled-wave-green.png"
      />
    </>
  )
}

export const MHAPDSBenefits = () => {
  return (
    <>
      <h2 className="mb-4">Rewrite Your Love Story for Good</h2>

      <p className="font-bold text-xl !tracking-widest lg:text-3xl lg:max-w-4xl lg:mx-auto mb-12">
        TRANSFORM YOUR PATTERNS, REBUILD YOUR CONFIDENCE, AND THRIVE IN RELATIONSHIPS WITH OUR
        ALL-ACCESS PASS!
      </p>

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="text-left">
          <p className="mb-4">
            Maybe you’ve been stuck in painful cycles—constant arguments, misunderstandings, or
            feeling unseen and unheard.
          </p>

          <p className="mb-4">
            Perhaps you struggle with expressing your needs, staying silent to avoid conflict, or
            feeling overwhelmed by different goals and emotions. Or you're in a rut of hopeless and
            mindless dates.
          </p>

          <p className="mb-4">
            <strong>This Mental Health Awareness Month, don’t let it define your love life.</strong>
          </p>

          <p className="mb-4">
            Activate your <strong>14-day free trial of our All-Access Pass</strong> to use our
            scientifically proven model and expert guidance to uncover the root causes of your
            emotional struggles – then transform them by:
          </p>
        </div>

        <div className="text-left mb-8">
          <List
            classNameIcon="!text-xl text-yellow"
            classNameListItems="my-4 lg:my-5 lg:first:!mt-0 lg:!pl-7"
            classNameText="lg:pl-3"
            icon={faStar}
            listItems={[
              'Breaking free from the suffocating patterns of feeling overwhelmed to form a relationship that honors your independence and emotional depth.',
              'Creating a love life where you’re truly seen, heard, and understood without the crushing weight of criticism or the fear of losing yourself.',
              'Reclaiming the deep sense of being truly wanted and valued, feeling like a priority in your relationships, and finally experiencing security and confidence.',
              'Overcoming the fear of rejection and abandonment and silencing the voices of self-doubt to develop profound, lasting connections that leave you feeling safe and understood.',
              "Understanding your partner on a deeper level than ever before so you're able to communicate better, develop stronger bonds, and align on future goals.",
            ]}
          />
        </div>
      </div>

      <MHAButton label="START YOUR FREE TRIAL" />
    </>
  )
}

export const MHAPDSFeatures = () => {
  return (
    <Section className="bg-black-secondary text-white 2xl:py-24">
      <h2>Your New Love Life Begins with a Single Step</h2>

      <p className="max-w-2xl tracking-widest text-xl mx-auto mb-4 mt-8">
        YOUR FIRST 14 DAYS ARE ON US!
      </p>

      <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:my-8">
        <Image
          alt="best value mockup"
          className="w-full"
          width={1980}
          height={981}
          src="/images/best-value-mockup.png"
        />

        <div className="text-left">
          <p className="font-bold my-4">
            Join our All-Access Pass Membership to get instant access to:
          </p>

          <List
            className="mb-4"
            classNameIcon="text-success"
            classNameListItems="my-4"
            icon={faCircleCheck}
            listItems={[
              `**A library of powerful video courses** to manage your emotions, conquer challenges, and repair your relationships`,
              `**Weekly webinars and Q&A sessions** where you can get real-time support and ask me burning questions while connecting with others on the same journey.`,
              `**Community support** from our vibrant, caring network, with online forums and weekly support groups to help you heal, grow, and thrive in your relationships.`,
              `**The powerful secrets to lasting love** — understand your unique attachment style (secure, anxious, dismissive, or fearful avoidant) and transform how to build relationships.`,
            ]}
          />
        </div>
      </div>

      <MHAButton label="GET 14 DAYS FREE!" />

      <p className="italic font-medium mt-4">* This offer is available for a limited time *</p>
    </Section>
  )
}

export const MHANegativePatterns = ({ background = 'bg-primary-light-50' }) => {
  return (
    <Section className={`${background} lg:pt-0 2xl:pb-24`}>
      <div className={background === 'white' ? 'pt-12' : ''}>
        <h2>Don't Let Your Love Life Take a Back Seat – It's Time for a Change. Ask Yourself:</h2>

        <div className="lg:grid lg:grid-cols-4 lg:gap-6">
          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto my-4">
              <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faEye} />
            </div>

            <p className="w-3/4 mx-auto lg:w-auto">
              Am I letting my fear of vulnerability keep me from real, meaningful connections?
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto my-4">
              <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faHeart} />
            </div>

            <p className="w-3/4 mx-auto lg:w-auto">
              How much longer can I allow self-doubt and fear of rejection to keep me single?
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto my-4">
              <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faSadTear} />
            </div>

            <p className="w-3/4 mx-auto lg:w-auto">
              What will my love life look like if I keep attracting the same unfulfilling
              connections?
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto my-4">
              <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faClock} />
            </div>

            <p className="w-3/4 mx-auto lg:w-auto">
              Am I ready to break the cycle of loneliness and finally find a relationship where I
              feel truly valued and understood?
            </p>
          </div>
        </div>

        <p className="max-w-xl font-bold mx-auto my-4">
          This is your wake-up call. Don’t let old patterns keep you stuck. This limited-time offer
          is your chance to break free, build real confidence, and attract the secure, fulfilling
          relationship you deserve.
        </p>

        <MHAButton label="CLAIM YOUR FREE 14-DAY TRIAL NOW!" />
      </div>
    </Section>
  )
}

const STEPS_TO_PURCHASE = [
  {
    step: 'STEP ONE',
    title: 'Sign Up for Your 14-Day Free Trial',
    copy: 'Unlock complete access to our All-Access Pass, including on-demand courses, live webinars, expert Q&A sessions, and community access.',
    image: '/images/RoyalRumblePage/rr-offer.png',
  },
  {
    step: 'STEP TWO',
    title: 'Start Your Healing Courses',
    copy: 'Start either the Thriving Conscious Dating, Attachment Style Course Bundle, or Needs Course. Learn simple yet powerful tools to transform and heal so you can find the love you want!',
    image: '/images/TrialHeadspace/pds-courses-mockup.png',
  },
  {
    step: 'STEP THREE',
    title: 'Continue Building the Love Life You Deserve',
    copy: 'Continue as a member to experience lasting change in how you show up in your love life and feel about yourself – all for FREE for 14 days.',
    image: '/images/TrialHeadspace/pds-courses-mockup-2.png',
  },
]
