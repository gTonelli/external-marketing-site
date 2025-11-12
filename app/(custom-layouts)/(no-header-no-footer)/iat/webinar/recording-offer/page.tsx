// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { IATWebinarPricing } from '@/components/IAT/IATWebinarPricing'
import { IATCoachCareerBenefits } from '@/components/IAT/IATCoachCareerBenefits'
// libraries
import { InlineHigherLevelWidget } from '@/components/InlineHigherLevelWidget'
// utils
import { getOfferEndDate } from '@/utils/functions'
// styles
import './style.css'

export const metadata: Metadata = {
  title: 'Watch This Life-Altering IAT™ Masterclass Video!',
  description:
    'Missed the IAT™ Masterclass? Don’t stress – you can watch Thais Gibson in the latest webinar explain what it’s like to be a high-impact relationship coach!',
  robots: 'noindex',
}

const trustbarSlides = [
  'mel-robbins-logo.png',
  'psychology-today-logo.png',
  'new-york-post-logo.png',
  'ceo-weekly-logo.png',
  'yahoo-logo.png',
]

export default function IATMasterclassRecordingPage() {
  const liveCohortDate = 'Monday, December 1st, 2025'
  return (
    <Page page_name="IAT Webinar Recording Page">
      <Section>
        <h1 className="mb-4">This Is The Life-Altering Masterclass You Must Watch!</h1>

        <p className="max-w-3xl mx-auto mb-8">
          Watch Thais Gibson Describe In Detail What It’s Like To Be a High Impact Relationship
          Coach & the Revolutionary Program That Will Set You Up For Success
        </p>

        <div className="w-full rounded-2xl shadow-lg p-4 mx-auto">
          <VideoYoutube
            playInline
            classNameThumbnail="w-full"
            videoId="jfwyVk0k6dU"
            thumbnail="/images/IATWebinar/iat-webinar-thumbnail.jpg"
            thumbnailAlt="Thais Gibson Masterclass Video Thumbnail"
          />
        </div>
      </Section>

      <Section className="max-w-full w-full bg-gradient-to-b from-primary-light-50 to-white">
        <h2 className="mb-4">Are You Ready to Transform Lives & Secure Your Financial Future?</h2>

        <p className="mb-16">
          Sign up for the Live IAT™ Program starting on <strong>{liveCohortDate}</strong>, and get
          your exclusive Masterclass discount!
        </p>

        <p className="mb-2">
          <strong>Time Left to Claim Your Exclusive Masterclass Discount</strong>
        </p>

        <CountdownTimer
          className="mb-8"
          theme="light"
          date={getOfferEndDate(new Date('2025-11-28T23:59:59-05:00'), 1)}
        />
      </Section>

      <IATWebinarPricing />

      <Section>
        <p className="font-bold tracking-33">OUR SCHOOL HAS BEEN FEATURED ON</p>

        <TrustbarSlider
          brandLogosList={trustbarSlides}
          className="items-stretch !pb-0"
          classNameImage="!mx-0"
          classNameSlides="flex flex-col flex-1 items-center justify-center"
        />
      </Section>

      <Section className="max-w-full !py-0 my-8" classNameInner="!max-w-full !m-0 !p-0">
        <h2 className="mb-8">Meet the Visionaries in Our Empowering Community</h2>

        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>

      <Section className="bg-black" classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-white text-left">
          <h2 className="mb-4">Have Some Last-Minute Questions Before You Join?</h2>

          {[
            'Book a call with our IAT™ Coaching Specialist on a date and time that works for you.',
            'Get your questions answered, discuss your Relationship Coaching goals, and talk through the next steps.',
          ].map((item, idx) => (
            <p key={idx} className="flex mb-4">
              <span className="flex !w-7 !h-7 items-center justify-center bg-primary !rounded-full p-1 mr-4">
                {idx + 1}
              </span>

              <span className="font-bold">{item}</span>
            </p>
          ))}
        </div>

        <div className="min-h-min">
          <InlineHigherLevelWidget />
        </div>
      </Section>

      <IATCoachCareerBenefits title="Here’s Your Life as a Certified IAT™ Coach" />

      <Section
        className="bg-thais w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-thais-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-start-6 lg:col-span-6 lg:ml-6">
          <h2 className="mb-4">Unlock Your Inner Coach</h2>

          <p className="font-bold tracking-33 mb-8">JOIN OUR LIVE IAT™ PROGRAM NOW</p>

          {[
            "Thank you for watching the latest High Impact Relationship Coach Masterclass! You've taken the first step toward transforming lives – including your own.",
            <>
              <strong>
                The IAT™ Program is your once-in-a-lifetime opportunity to become a Certified
                Relationship Coach.
              </strong>
            </>,
            'This revolutionary program is designed to equip you with the practical tools and knowledge from our proprietary healing model and the business solutions to turn your passion for helping people into a fulfilling and financially rewarding career.',
            <>
              Enrolment for our next cohort starting <strong>{liveCohortDate}</strong>, is closing
              soon!
            </>,
            'This is your final chance to be part of a groundbreaking movement that is changing the way people experience personal growth and transformation.',
            'Secure your spot today!',
            'Love,',
          ].map((copy, idx) => (
            <p key={`thais_letter_copy_${idx}`} className="mb-4">
              {copy}
            </p>
          ))}

          <Image
            width={144}
            height={40}
            src="/images/thais-gibson-signature.svg"
            alt="Signature of Thais Gibson"
          />

          <ButtonScroll className="mt-8" label="CLAIM YOUR DISCOUNT NOW" target="#pricing" />
        </div>
      </Section>
    </Page>
  )
}
