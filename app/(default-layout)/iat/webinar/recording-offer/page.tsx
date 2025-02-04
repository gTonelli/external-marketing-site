import Link from 'next/link'
import { Button } from '@/components/Button/Button'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'

export default function IATMasterclassRecordingPage() {
  return (
    <Page page_name="IAT Webinar Recording Page">
      <Section>
        <h1 className="mb-4">This Is The Life-Altering Masterclass Video You Must Watch!</h1>

        <p className="max-w-3xl mx-auto mb-8">
          Watch Thais Gibson Describe In Detail What It’s Like To Be a High Impact Relationship
          Coach & the Revolutionary Program That Will Set You Up For Success
        </p>

        <div className="w-fit rounded-2xl shadow-lg p-4 mx-auto">
          <VideoThumbnail />
        </div>
      </Section>

      <Section className="max-w-full w-full bg-black text-white">
        <h2 className="mb-4">Are You Ready to Transform Lives & Secure Your Financial Future?</h2>

        <p className="mb-4">
          Sign up for the Live IAT™ Program starting on Thursday, March 20th, 2025, and get your
          exclusive Masterclass discount!
        </p>

        <CountdownTimer className="mb-8" />

        <Link href="/iat/webinar/checkout">
          <Button label="SIGN UP RIGHT NOW!" />
        </Link>
      </Section>

      <Section className="max-w-full !py-0 my-16" classNameInner="!max-w-full !m-0 !p-0">
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
    </Page>
  )
}
