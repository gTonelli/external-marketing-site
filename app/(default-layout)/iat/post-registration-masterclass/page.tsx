// core
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// components
import { Page } from '@/components/Page'
import { Button } from '@/components/Button/Button'
import { Section } from '@/components/Section'
import { ShowSuccessModal } from './ShowSuccessModal'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// config
import { IATTestimonials } from './config'
// utils
import { EExternalRoutes } from '@/utils/constants'
// styles
import './style.css'
import { IATCoachCareerBenefits } from './IATCoachCareerBenefits'

export const metadata: Metadata = {
  title: 'Thanks for Registering for the IAT™ Masterclass!',
  description:
    'Thanks for registering to join the next IAT™ Masterclass! To get you prepared and excited, why not watch this little part of it?',
  robots: 'noindex',
}

const trustbarSlides = [
  'mel-robbins-logo.png',
  'psychology-today-logo.png',
  'new-york-post-logo.png',
  'ceo-weekly-logo.png',
  'yahoo-logo.png',
]

export default function PostRegistrationMasterclassPage() {
  return (
    <Page page_name="IAT Post Registration Masterclass Page">
      <ShowSuccessModal />

      <Section className="max-w-3xl mx-auto">
        <h1 className="mb-4">Don’t Miss This Free Limited-Time Masterclass Video</h1>

        <p className="mb-4">
          Discover The Revolutionary Program That Is Disrupting & Transforming The Coaching Industry
          & Is Unlike Anything You’ve Ever Seen Before! Check your inbox for the email with the link
          to the live session!
        </p>

        <div className="w-fit rounded-2xl shadow-lg p-4 mx-auto">
          <VideoThumbnail
            className="w-full"
            srcUrl="https://storage.googleapis.com/pds_videos/IAT_Post_Webinar_Registration_Video.mp4"
          />
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

      <Section className="max-w-full !py-0 my-16" classNameInner="!max-w-full !m-0 !p-0">
        <h2 className="mb-8">Meet the Visionaries in Our Empowering Community</h2>

        <CarouselTestimonialThinkific testimonials={IATTestimonials} initialSlide={1} />
      </Section>

      <IATCoachCareerBenefits />

      <Section className="max-w-full bg-black text-white !py-16">
        <h2 className="mb-4">Excited to learn more about the IAT™ Program?</h2>

        <p className="tracking-33 mb-4">SCHEDULE A FREE CALL</p>

        <p className="mb-8">
          Book a quick talk with our Coaching Specialist to discuss your experience, current goals,
          and the IAT™ Program, and how it will work for you.
        </p>

        <Link href={EExternalRoutes.CALENDLY_MELANIE}>
          <Button label="BOOK A DISCOVERY CALL" />
        </Link>
      </Section>

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
            'I would like to thank you for watching this free video! I hope it gave you an insight into what to expect when you attend our next IAT™ Masterclass.',
            'This free, no-pressure webinar is the perfect place to show you how the revolutionary and game-changing IAT™ Program will change your life, career, and finances, where you can ask me any burning questions, and how you can envision yourself as a Certified IAT™ Coach.',
            'Stay tuned for your email which will have the live link to the Masterclass!',
            'I’m excited to see you there!',
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
        </div>
      </Section>
    </Page>
  )
}
