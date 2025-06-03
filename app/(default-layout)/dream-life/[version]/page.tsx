// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Faq } from '@/components/Faq/Faq'
import { Section } from '@/components/Section'
import { CountdownTimer } from '@/components/CountDownTimer'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { LifetimePricing } from '@/components/LifetimePricing'
import {
  faComment,
  faDove,
  faFacePersevering,
  faGem,
  faHeart,
} from '@awesome.me/kit-545b942488/icons/classic/light'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// config
import { config as AB_CART_CONFIG } from './config'

type TPageVersion =
  | 'trial'
  | 'membership'
  | '14-day-trial'
  | 'quarterly-membership'
  | 'annual-membership'
  | 'lifetime-membership'

export type TParams = {
  params: {
    version: TPageVersion
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return [
    { version: 'membership' },
    { version: 'trial' },
    { version: '14-day-trial' },
    { version: 'quarterly-membership' },
    { version: 'annual-membership' },
    { version: 'lifetime-membership' },
  ]
}

export async function generateMetadata({ params }: TParams): Promise<Metadata> {
  return {
    title: AB_CART_CONFIG[params.version].seoTitle,
    description: AB_CART_CONFIG[params.version].seoDescription,
    robots: 'noindex',
  }
}

export default function AbandonedCartOffer({ params }: TParams) {
  const config = AB_CART_CONFIG[params.version]

  return (
    <Page
      className="w-full text-center z-10"
      page_name={`Abandoned Card Offer - ${params.version}`}>
      <Section
        className="!p-0"
        classNameInner="relative overflow-hidden xs:!max-w-none md:grid md:grid-cols-2">
        <div
          className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-[#ECF7F9] to-primary-light z-15
         md:bg-gradient-to-r md:from-[rgba(227,237,237,0.5)] md:via-[rgba(213,184,216,0.75)] md:to-[rgba(213,184,216,0.75)]
         lg:via-[rgba(213,184,216,0.25)] lg:to-[rgba(213,184,216,0)]"
        />

        <Image
          alt="A man and woman exlaiming excitedly sharing a computer on the couch. They are sitting next to a dog."
          className="w-full h-auto relative md:hidden"
          src="/images/DreamLifeMembershipTrial/hero.png"
          width={375}
          height={300}
        />

        <Image
          alt="A man and woman exlaiming excitedly sharing a computer on the couch. They are sitting next to a dog."
          className="w-full h-auto relative hidden col-span-2 row-start-1 col-start-1 md:block"
          src="/images/DreamLifeMembershipTrial/hero-desktop.png"
          width={1920}
          height={1080}
        />

        <div className="default-padding text-left !pb-8 relative z-15 col-span-2 col-start-1 row-start-1 lg:col-span-1 lg:col-start-1 lg:flex">
          <div className="lg:max-w-xl lg:ml-auto lg:flex lg:flex-col lg:justify-center">
            <h1>{config.heading}</h1>

            <p>{config.subheading}</p>

            <CountdownTimer
              includeDays={false}
              className="!justify-start bg-transparent mb-4"
              classNameDate="!text-4xl font-ssp lg:!text-5xl"
              classNameDateSeperator="text-transparent"
              classNameLabel="lowercase"
              theme="transparent"
            />

            <AbandonCartCTA page={params.version} label={config.heroCtaLabel} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-4">What’s the Cost of Not Taking Your Chance?</h2>

          <p className="mb-4">
            Every day you wait is another day you miss the chance for personal growth, true
            happiness, and creating real and loving connections. Are you willing to risk a lifetime
            of these missed opportunities?
          </p>

          <p className="tracking-33 mb-8">
            <strong>NOW, TAKE A MINUTE AND IMAGINE:</strong>
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8 lg:grid-cols-5">
            <div>
              <FontAwesomeIcon className="text-primary mb-4" icon={faDove} size="3x" />

              <p>
                Letting go of your overwhelming patterns to create a love that honors your
                independence.
              </p>
            </div>

            <div>
              <FontAwesomeIcon className="text-primary mb-4" icon={faHeart} size="3x" />

              <p>
                Building authentic connections without fears and being genuinely seen, heard, and
                valued.
              </p>
            </div>

            <div>
              <FontAwesomeIcon className="text-primary mb-4" icon={faGem} size="3x" />

              <p>
                Reclaiming your worth and your values and finally feeling like a priority in your
                relationships.
              </p>
            </div>

            <div>
              <FontAwesomeIcon className="text-primary mb-4" icon={faFacePersevering} size="3x" />

              <p>Overcoming fears of rejection and trust to form safe and exciting connections.</p>
            </div>

            <div className="col-span-2 w-1/2 mx-auto lg:col-span-1 lg:w-full">
              <FontAwesomeIcon className="text-primary mb-4" icon={faComment} size="3x" />

              <p>
                Understanding your partner deeply, clearly communicating, and building a future
                together.
              </p>
            </div>
          </div>

          <p className="mb-4">{config.costCopy1}</p>

          <p className="mb-4">{config.costCopy2}</p>
        </div>

        {params.version === 'lifetime-membership' && (
          <div id="pricing">
            <LifetimePricing />
          </div>
        )}
      </Section>

      <Section
        className="overflow-hidden relative"
        classNameInner="max-w-none pb-10 pt-72 grid-cols-2 gap-4 md:pt-10 md:grid md:max-w-screen-lg">
        <Image
          alt="A man and woman smiling and sharing a computer on the couch. They are sitting next to a dog and working together on their PC."
          className="absolute h-full aspect-[3/2] w-auto object-cover top-0 left-0 z-5 md:hidden"
          src="/images/DreamLifeMembershipTrial/offer-bg.png"
          width={375}
          height={250}
        />

        <Image
          alt="A man and woman smiling and sharing a computer on the couch. They are sitting next to a dog and working together on their PC."
          className="absolute h-full aspect-[3.21/1] w-auto object-cover top-0 left-0 z-5 hidden md:block 2xl:w-full 2xl:h-auto"
          src="/images/DreamLifeMembershipTrial/offer-bg-desktop.png"
          width={1024}
          height={319}
        />

        <div className="relative bg-white shadow-2xl rounded-20 z-10 p-6 xs:p-10">
          <h2 className="mb-4">{config.hookTitle}</h2>

          <p className="mb-4">
            {`It’s time to take control of your love life and relationships—because you deserve more than just “getting by.” You deserve connection, joy, and love that lasts.${
              params.version === 'lifetime-membership'
                ? ' And the peace of knowing you’ll never be alone on this journey again.'
                : ''
            }`}
          </p>

          <AbandonCartCTA page={params.version} label="RECLAIM YOUR LIFE NOW" />
        </div>
      </Section>

      <Section className="bg-pink-auxiliary">
        <h2 className="mb-4">Is This Revolutionary Offer For You?</h2>

        <p className="max-w-3xl mx-auto mb-8">{config.offerCopy}</p>

        <div className="text-left mb-4 xxs:gap-4 xxs:grid xxs:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="mb-4">
              <strong>Proprietary &amp; PDS-Only Healing Model</strong>
            </p>

            <p>
              The only platform using the revolutionary Integrated Attachment Theory™. This
              science-backed approach shows you how to rewire your subconscious mind to create
              rapid, lasting transformation.
            </p>
          </div>

          <div>
            <p className="mb-4">
              <strong>Results-Proven Outcomes</strong>
            </p>

            <p>
              Even if traditional therapies and methods have failed, Integrated Attachment Theory™
              provides the simple, practical tools for real change – proven by 40,000+ people
              worldwide.
            </p>
          </div>

          <div>
            <p className="mb-4">
              <strong>Industry-Leading Guidance</strong>
            </p>

            <p>
              Attend live sessions with me, Thais Gibson – personal development leader and school
              co-founder – to uncover your attachment style, break limiting patterns, and create
              lasting change.
            </p>
          </div>

          <div>
            <p className="mb-4">
              <strong>Daily Peer Support Groups</strong>
            </p>

            <p>
              You're not alone. Connect daily with Certified IAT™ Coaches and like-minded and
              dedicated peers, practice transformational IAT™ tools, share progress, and grow in a
              supportive space.
            </p>
          </div>

          <div>
            <p className="mb-4">
              <strong>Exclusive Community Access</strong>
            </p>

            <p>
              Join a thriving private community on Facebook and Discord. Share your story, learn new
              tools, and build healthy, meaningful connections with like-minded individuals who’ve
              been where you are.
            </p>
          </div>

          <div>
            <p className="mb-4">
              <strong>Your Life, Your Personalized Journey</strong>
            </p>

            <p>
              Access self-paced and guided courses tailored to your attachment style and
              relationship struggles. Learn and challenge old patterns to finally experience real,
              lasting growth.
            </p>
          </div>
        </div>

        <AbandonCartCTA page={params.version} label="START YOUR TRANSFORMATION" />
      </Section>

      <Section>
        <Faq
          className="!max-w-4xl"
          heading="Last Minute Questions…"
          classNameHeading="pl-4"
          faq={config.faqs}
        />

        <AbandonCartCTA page={params.version} label="LAST CHANCE TO JOIN!" />
      </Section>
    </Page>
  )
}

type TAbandonCartCTAParams = {
  page: TPageVersion
  label: string
}

const AbandonCartCTA = ({ page, label }: TAbandonCartCTAParams) => {
  const config = AB_CART_CONFIG[page]

  if (page === 'lifetime-membership')
    return <ButtonScroll className="w-fit" target="#pricing" label={label} />

  return <ButtonCheckout href={config.checkoutLink} label={label} />
}
