// core
import Image from 'next/image'
// components
import { Page } from '../Page'
import { List } from '../List'
import { Section } from '../Section'
import { CountdownTimer } from '../CountDownTimer'
import { ButtonCheckout } from '../Button/variants/ButtonCheckout'
import { CommunityTeaser } from '../CommunityTeaser'
import VideoTeaser from '../Video/variants/VideoTeaser'
import { PaymentOptions, TPaymentOptionsConfigKey } from '../PaymentOptions'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faSquare1, faSquare2, faSquare3 } from '@awesome.me/kit-545b942488/icons/classic/solid'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// modules
import { Pages } from '@/modules/Mixpanel'
// styles
import './style.css'

interface IPromotionPageProps {
  pageName: Pages
  config: TPromotionPageConfig
}

export const PromotionPage = ({ config, pageName }: IPromotionPageProps) => {
  return (
    <Page page_name={pageName} className="relative">
      <section className="text-center bg-purple-dark px-2">
        <h2 className="text-white pt-4 max-w-screen-lg mx-auto">{config.timer.title}</h2>

        <div className="pb-4">
          <CountdownTimer date={new Date(`2025-05-17T23:59:59-04:00`)} theme="dark" />
        </div>
      </section>

      <section className="w-full text-center bg-pink-auxiliary pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <h1 className="max-w-2xl leading-[50px] mx-auto mb-4">{config.banner.title}</h1>

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions
            className="!max-w-xl mx-auto lg:flex-col"
            configKey={config.paymentOptionsConfigKey}
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
        <h2>{config.courseOutcome.title}</h2>

        <div className="grid gap-8 text-left my-8 lg:grid-cols-2">
          <div>
            <p>{config.courseOutcome.copy}</p>

            <List
              classNameIcon="text-primary"
              icon={faCheckCircle}
              listItems={config.courseOutcome.outcomes}
            />
          </div>

          <div>
            <Image
              alt={config.courseOutcome.imageAlt}
              src={config.courseOutcome.image}
              width={588}
              height={470}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>

        <div className="bg-pink-tertiary rounded-2xl p-6 mb-4">
          {config.courseOutcome.offer.map((item, idx) => (
            <p key={`course_outcome_offer_${idx}`}>{item}</p>
          ))}
        </div>

        <ButtonCheckout href={config.checkoutUrl} label={config.courseOutcome.ctaLabel} />
      </Section>

      <Section classNameInner="bg-white-secondary rounded-2xl p-6">
        <h2>{config.howItHelps.title}</h2>

        <div className="grid gap-4 text-left my-4 lg:grid-cols-2">
          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={config.howItHelps.leftList}
          />

          <List
            classNameIcon="text-primary"
            icon={faCheckCircle}
            listItems={config.howItHelps.rightList}
          />
        </div>

        <ButtonCheckout
          className="mb-4"
          href={config.checkoutUrl}
          label={config.howItHelps.ctaLabel}
        />

        <p>
          <em>{config.howItHelps.disclaimer}</em>
        </p>
      </Section>

      <Section className="bg-black text-white !py-16">
        <h2>{config.steps.title}</h2>

        <p>{config.steps.copy}</p>

        <div className="grid gap-8 text-left my-8 lg:grid-cols-3">
          {[
            STEPS_TO_PURCHASE[0],
            { ...STEPS_TO_PURCHASE[1], ...config.steps.stepTwo },
            STEPS_TO_PURCHASE[2],
          ].map((item, idx) => (
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

        <ButtonCheckout href={config.checkoutUrl} label={config.steps.ctaLabel} />
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

          <ButtonCheckout href={config.checkoutUrl} label="TRY THEM WITH A FREE TRIAL" />
        </div>

        <VideoTeaser
          className="bg-white-secondary"
          description="Progression is the key to success! With the All-Access Pass, you can continue your personal and relationship growth."
        />
      </Section>

      <CommunityTeaser
        sectionHeading="Experience Belonging to an Unstoppable Powerhouse Community That Ignites Your Life!"
        teaserHeading={config.communityTeaser.teaserHeading}
        classNamePaymentOptions="!max-w-xl mx-auto lg:flex-col"
        paymentOptionsConfigKey={config.paymentOptionsConfigKey}
        communityBullets={config.communityTeaser.communityBullets}
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
    title: '',
    copy: '',
    image: '',
  },
  {
    icon: faSquare3,
    step: 'STEP THREE',
    title: 'Keep Growing with the All-Access Pass',
    copy: 'Stay on your healing journey with full access to everything inside the All-Access Pass: courses on boundaries, self-esteem, attachment styles, emotional mastery, and more, plus live webinars and community access. This is how lasting continues to foster.',
    image: '/images/TrialHeadspace/pds-courses-mockup.png',
  },
]

export type TPromotionPageConfig = {
  paymentOptionsConfigKey: TPaymentOptionsConfigKey
  checkoutUrl: string
  timer: {
    title: string
  }
  banner: {
    title: string
  }
  courseOutcome: {
    title: string
    copy: string | JSX.Element
    outcomes: (string | JSX.Element)[]
    image: string
    imageAlt: string
    offer: (string | JSX.Element)[]
    ctaLabel: string
  }
  howItHelps: {
    title: string
    leftList: (string | JSX.Element)[]
    rightList: (string | JSX.Element)[]
    ctaLabel: string
    disclaimer: string | JSX.Element
  }
  steps: {
    title: string
    copy: string | JSX.Element
    stepTwo: {
      title: string
      copy: string | JSX.Element
      image: string
    }
    ctaLabel: string
  }
  communityTeaser: {
    teaserHeading: string
    communityBullets: string[]
  }
}
