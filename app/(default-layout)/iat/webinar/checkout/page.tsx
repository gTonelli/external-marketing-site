// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { CountdownTimer } from '@/components/CountDownTimer'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { InlineCalendlyWidget } from '@/components/InlineCalendlyWidget'
import { List } from '@/components/List'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// utils
import { getOfferEndDate } from '@/utils/functions'
// style
import './style.css'

const trustbarSlides = [
  'mel-robbins-logo.png',
  'psychology-today-logo.png',
  'new-york-post-logo.png',
  'ceo-weekly-logo.png',
  'yahoo-logo.png',
]

export default function IATWebinarSqueezePage() {
  return (
    <Page page_name="IAT Webinar Squeeze Page">
      <Section
        className="bg-hero w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-hero-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-7">
          <p className="mb-4 tracking-33">UNLEASH YOUR SPECIAL $300 MASTERCLASS DISCOUNT</p>

          <h1 className="mb-4">
            <span className="text-primary">Transform Lives</span> & Secure Your Financial Future
          </h1>

          <p className="font-bold text-xl mb-8">Join the Live IAT™ Program on January 8th, 2025</p>

          {/* countdown for December 15, 2024 */}
          <CountdownTimer
            className="!justify-start"
            classNameDate="!bg-inherit !shadow-none !text-black !p-0"
            theme="light"
            date={getOfferEndDate(new Date('2024-12-15T00:16:00-05:00'), 1)}
          />

          <ButtonScroll className="mt-8" label="JOIN NOW & SAVE $300" target="#pricing" />
        </div>
      </Section>

      <Section className="!py-0 mb-6">
        <TrustbarSlider
          brandLogosList={trustbarSlides}
          className="items-stretch !pb-0"
          classNameImage="!mx-0"
          classNameSlides="flex flex-col flex-1 items-center justify-center"
        />
      </Section>

      <Section
        className="bg-hero w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-hero-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-7">
          <h2 className="mb-8">Ready to Become a Certified & 6-Figure Relationship Coach?</h2>

          <List
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={[
              'Insights into Integrated Attachment Theory™',
              'Rare Direct Learning from Thais Gibson',
              '30+ Hours of Groundbreaking Training',
              'Exclusive Results-Proven Business Strategies',
              'Lifetime Access to Coaching & Business Resources',
              'Exclusive Membership to The Personal Development School',
              'Recognized and Accredited Certification',
              '100% Remote Learning Across the Globe',
              'Lively & Supportive Online Community',
              'Valued at Over $7000',
            ]}
          />
        </div>
      </Section>

      <Section className="bg-black" classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-white text-left">
          <h2 className="mb-4">Talk to an IAT™ Coaching Specialist</h2>

          <p className="mb-8">
            Have some last-minute questions before you sign up? Book a quick talk with our Coaching
            Specialist.
          </p>

          {[
            'Choose a date and time and our IAT™ Coaching Specialist will call you',
            'Discuss your experience, current goals, and the IAT™ Programs',
            'Get all your questions answered and talk through the next steps',
            'Enjoy an additional discount when you sign up via our IAT™ Coaching Specialist',
          ].map((item, idx) => (
            <p key={idx} className="flex mb-4">
              <span className="flex !w-7 !h-7 items-center justify-center bg-primary !rounded-full mr-4">
                {idx + 1}
              </span>

              <span className="font-bold">{item}</span>
            </p>
          ))}
        </div>

        <div className="min-h-min">
          <InlineCalendlyWidget />
        </div>
      </Section>

      <Section className="max-w-full !py-0 my-8" classNameInner="!max-w-full !m-0 !p-0">
        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>
    </Page>
  )
}
