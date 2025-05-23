// ─── External ──────────────────────────────────────────────────────────────
import { Metadata } from 'next'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'

// ─── Components ────────────────────────────────────────────────────────────
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { CountdownTimer } from '@/components/CountDownTimer'
import { FaqDefault } from '@/components/Faq/variants/FaqDefault'
import { InlineCalendlyWidget } from '@/components/InlineCalendlyWidget'
import { IATPriceCardSection } from '@/components/IAT/IATPriceCardSection'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'

// ─── Modules ───────────────────────────────────────────────────────────────
import { Pages } from '@/modules/Mixpanel'

// ─── Utils ─────────────────────────────────────────────────────────────────
import { getOfferEndDate } from '@/utils/functions'

// ─── Styles ────────────────────────────────────────────────────────────────
import './style.css'

// ─── Config ────────────────────────────────────────────────────────────────
import { AB_CART_COPY } from '../config'

export const dynamicParams = false

export function generateStaticParams() {
  return [
    { format: 'live' },
    { format: 'ondemand' },
  ]
}

type AbcartParams = { params: { format: 'live' | 'ondemand' } }

export async function generateMetadata({ params }: AbcartParams): Promise<Metadata> {
  const seo = AB_CART_COPY[params.format].seo
  return {
    title: seo.title,
    description: seo.description,
    robots: 'noindex',
  }
}

export default function AbandonCartPage({ params }: AbcartParams) {
  const content = AB_CART_COPY[params.format]
  const shared = AB_CART_COPY.shared

  return (
    <Page page_name={`IAT ${content.formatLabel} Abandoned Cart Page` as Pages}>
      <Section
        className="bg-hero w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12"
      >
        <div className="bg-gradient lg:hidden" />
        <div className="bg-hero-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-7">
          <h1 className="mb-4">{content.hero.heading}</h1>

          <p className="font-bold tracking-33 mb-4">{content.hero.subheading}</p>

          <CountdownTimer
            includeDays={false}
            className="!justify-start gap-4"
            classNameDate="!bg-inherit !shadow-none text-primary !p-0"
            classNameLabel="text-primary"
            theme="transparent"
            date={getOfferEndDate(new Date('2025-04-18T23:59:59-04:00'), 1)}
          />

          <Link
            href="https://calendly.com/info-pds/call-with-melanie-pds"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block w-full max-w-[320px] bg-primary text-white hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:brightness-110 hover:shadow-md"
          >
            BOOK A DISCOVERY CALL NOW
          </Link>
        </div>
      </Section>

      <Section className="max-w-6xl mx-auto">
        <h2 className="mb-4 text-center">Envision Your Future as a Certified IAT™ Relationship Coach</h2>

        <p className="mb-8 text-lg font-semibold text-center">THIS LIFE IS FOR YOU IF YOU WANT TO…</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {shared.benefits.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 text-base leading-relaxed">
              <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1 shrink-0" />

              <p className="text-left">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="pricing">
        <h2 className="mb-4 text-center">Here are Your Options…</h2>

        <IATPriceCardSection />
      </Section>

      <Section className="bg-black text-white" id="calendly">
        <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
          <div className="pl-2 md:pl-6 lg:pl-10">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-left">
              Have Some Last-Minute
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6 text-left">
              Questions Before You Join?
            </h2>

            <div className="space-y-4 text-sm md:text-base text-left">
              {shared.calendlySteps.map((step, idx) => (
                <div key={`shared_calendly_step_${idx}`} className="flex items-start space-x-4">
                  <div className="min-w-[32px] h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>

                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          <InlineCalendlyWidget />
        </div>
      </Section>

      <Section className="!py-0">
        <TrustbarSlider
          brandLogosList={[
            'mel-robbins-logo.png',
            'psychology-today-logo.png',
            'new-york-post-logo.png',
            'ceo-weekly-logo.png',
            'yahoo-logo.png',
          ]}
        />
      </Section>

      <Section className="max-w-full !p-0 my-8" classNameInner="!max-w-full !m-0 !p-0">
        <h2 className="mb-4">This How You Can Be Transforming Lives</h2>
        <p className="mb-8">Just Like Our IAT™ Graduate Coaches</p>

        <CarouselTestimonialThinkific initialSlide={1} />
      </Section> 

      <Section className="bg-watch w-full z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40" classNameInner="relative !max-w-full !m-0 lg:!max-w-6xl lg:!mx-auto flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="block lg:hidden relative w-full bg-watch-desktop h-[400px] sm:h-[600px]" />

        <div className="bg-white rounded-xl shadow-lg text-center p-6 lg:p-8 z-10 w-[90%] max-w-md lg:max-w-xl absolute lg:static left-1/2 transform -translate-x-1/2 bottom-6 max-[600px]:top-6 max-[600px]:bottom-auto lg:translate-x-0 lg:left-auto lg:bottom-auto lg:ml-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to be a Game-Changer?</h2>

          <p className="mb-6 text-base">
            It's time to unlock your coaching potential with this revolutionary program.
          </p>

          <a
            href="https://calendly.com/info-pds/call-with-melanie-pds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:brightness-110 hover:shadow-md"
          >
            BOOK YOUR DISCOVERY CALL
          </a>
        </div>
      </Section>

      <FaqDefault
        heading="Last Minute Questions…"
        faq={[
          ...shared.faqs.common,
          ...(params.format === 'ondemand' ? shared.faqs.ondemandOnly : []),
        ]}
      />

      <div className="max-w-screen-md mx-auto px-4 lg:px-16 mt-8 mb-16">
        <ButtonScroll
          label="LAST CHANCE TO JOIN!"
          target="#pricing"
          className="inline-block bg-primary text-white font-bold text-sm md:text-base py-3 px-6 rounded-full transition-all duration-300 hover:brightness-110 hover:text-white hover:no-underline"
        />
      </div>
    </Page>
  )
}
