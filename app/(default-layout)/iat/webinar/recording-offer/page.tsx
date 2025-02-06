// core
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Button } from '@/components/Button/Button'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { IATCoachCareerBenefits } from '../../post-registration-masterclass/IATCoachCareerBenefits'
// functions
import { getOfferEndDate } from '@/utils/functions'
// styles
import './style.css'

export const metadata: Metadata = {
  title: 'Watch This Life-Altering IAT™ Masterclass Video!',
  description:
    'Watch this High Impact Relationship Coach Masterclass to sign up for the revolutionary IAT™ Program that will transform your life, career, and finances!',
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
  return (
    <Page page_name="IAT Webinar Recording Page">
      <Section>
        <h1 className="mb-4">This Is The Life-Altering Masterclass Video You Must Watch!</h1>

        <p className="max-w-3xl mx-auto mb-8">
          Watch Thais Gibson Describe In Detail What It’s Like To Be a High Impact Relationship
          Coach & the Revolutionary Program That Will Set You Up For Success
        </p>

        <div className="w-full rounded-2xl shadow-lg p-4 mx-auto">
          <VideoYoutube
            playInline
            classNameThumbnail="w-full"
            videoId="uzMGyoMz74c"
            thumbnail="/images/IATWebinar/iat-webinar-thumbnail.jpg"
            thumbnailAlt="Thais Gibson Masterclass Video Thumbnail"
          />
        </div>
      </Section>

      <Section className="max-w-full w-full bg-black text-white">
        <h2 className="mb-4">Are You Ready to Transform Lives & Secure Your Financial Future?</h2>

        <p className="mb-16">
          Sign up for the Live IAT™ Program starting on Thursday, March 20th, 2025, and get your
          exclusive Masterclass discount!
        </p>

        <p className="mb-2">
          <strong>Time Left to Claim Your Exclusive Masterclass Discount</strong>
        </p>

        {/* Countdown for Feb 21, 2025 11:59 PM ET */}
        <CountdownTimer
          className="mb-8"
          date={getOfferEndDate(new Date('2025-02-21T23:59:00-05:00'), 1)}
        />

        <Link href="/iat/webinar/checkout">
          <Button label="SIGN UP RIGHT NOW!" />
        </Link>
      </Section>

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

      <Section className="max-w-full w-full bg-black text-white">
        <h2 className="mb-4">Unlock Your Coaching Potential Now!</h2>

        <p className="mb-4">
          Do you have any last-minute questions before joining? Book a quick chat with our Coaching
          Specialist to discuss your experience, current goals, and how the IAT™ Program will work
          for you – and claim your Masterclass discount!
        </p>

        <Link href="https://calendly.com/info-pds/call-with-melanie-pds">
          <Button label="BOOK YOUR FREE CALL" />
        </Link>
      </Section>

      <IATCoachCareerBenefits title="Here’s Your Life as a Certified IAT™ Coach" />

      <Section
        className="bg-thais w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-thais-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-start-6 lg:col-span-6">
          <h2 className="mb-4">Unlock Your Inner Coach</h2>

          <p className="font-bold tracking-33 mb-8">
            DON'T MISS OUR HIGH IMPACT RELATIONSHIP COACH MASTERCLASS
          </p>

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
              Enrolment for our next cohort starting <strong>Thursday, March 20th, 2025</strong>, is
              closing soon!
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

          <Link href="/iat/webinar/checkout">
            <Button className="mt-4" label="CLAIM YOUR DISCOUNT NOW" />
          </Link>
        </div>
      </Section>
    </Page>
  )
}
