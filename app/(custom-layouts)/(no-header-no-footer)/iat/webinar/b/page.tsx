// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { IATWebinarForm } from '@/components/Forms/IATWebinarForm'
import { List } from '@/components/List'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { CountdownTimer } from '@/components/CountDownTimer'
// config
import { COPY } from './config'
// libraries
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
// utils
import { getOfferEndDate } from '@/utils/functions'
// style
import '../style.css'
import { faTriangleExclamation } from '@awesome.me/kit-545b942488/icons/classic/solid'

export const metadata: Metadata = {
  title: 'Free IAT™ Masterclass with Thais Gibson',
  description:
    'Limited spots available! Save your spot in this exclusive free IAT™ Masterclass hosted by Thais Gibson. Learn what it’s like to be a Certified IAT™ Coach.',
  robots: 'noindex',
}

export default function IATWebinarVariantPage() {
  return (
    <Page page_name="IAT Webinar Variant Page">
      <section className="bg-purple-dark">
        <div className="default-padding pt-4 lg:pt-8">
          <CountdownTimer
            date={getOfferEndDate(new Date('2025-09-08T17:30:00-04:00'), 1)}
            theme="dark"
          />
        </div>
      </section>

      <Section
        className="bg-hero w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-hero-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-8">
          <p className="font-bold tracking-33 mb-4">{COPY.header.subtitle}</p>

          <h1 className="mb-4">{COPY.header.title}</h1>

          {COPY.header.copy1.map((copy, index) => (
            <p className="mb-4" key={`header-copy1-${index}`}>
              {copy}
            </p>
          ))}

          <List
            classNameIcon="!text-green-check mt-1"
            classNameListItems="mb-4"
            icon={faCircleCheck}
            listItems={COPY.header.list}
          />

          {COPY.header.copy2.map((copy, index) => (
            <p className="mb-4" key={`header-copy2-${index}`}>
              {copy}
            </p>
          ))}

          <IATWebinarForm submitButtonLabel="SAVE MY SPOT FOR THE MASTERCLASS" />
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="grid gap-8 lg:grid-cols-2">
        <div className="text-left lg:order-1">
          <h2 className="mb-4">{COPY.bigThings.title}</h2>

          <p className="font-bold tracking-33 mb-4">{COPY.bigThings.subtitle}</p>

          <List
            className="mb-8"
            classNameIcon="!text-green-check mt-1"
            classNameListItems="mb-4"
            icon={faCircleCheck}
            listItems={COPY.bigThings.list}
          />

          <IATWebinarForm submitButtonLabel="I'M READY TO LEARN HOW TO BECOME A COACH" />
        </div>

        <div className="flex items-center">
          <Image
            alt="Webinar on Zoom"
            src="/images/IATWebinar/iat-webinar-mockup.jpg"
            width={560}
            height={300}
          />
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">{COPY.thais.title}</h2>

          <p className="font-bold tracking-33 mb-4">{COPY.thais.subtitle}</p>

          {COPY.thais.copy.map((copy, index) => (
            <p className="mb-4" key={`thais-${index}`}>
              {copy}
            </p>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Image
            alt="Thais Gibson"
            src="/images/IATPage/InfoPage/thais.png"
            width={568}
            height={620}
          />
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="grid gap-8 md:grid-cols-2">
        <div className="text-left md:order-2">
          <h2 className="mb-4">{COPY.successStory.title}</h2>

          <p className="font-bold tracking-33 mb-4">{COPY.successStory.subtitle}</p>

          {COPY.successStory.copy.map((copy, index) => (
            <p className="mb-4" key={`successStory-${index}`}>
              {copy}
            </p>
          ))}
        </div>

        <div className="flex justify-center items-center md:order-1">
          <Image
            alt="Sanjana Kumar"
            src="/images/IATWebinar/iat-sanjana-kumar.jpg"
            width={480}
            height={480}
          />
        </div>
      </Section>

      <CarouselTestimonialThinkific
        className="mt-8 mb-16"
        testimonials={[
          {
            author: {
              name: 'Rebecca O.',
            },
            content:
              'The IAT™ training equipped me to become financially independent doing something that is aligned with my personality and need for personal development. I am truly grateful for how much you shared and how attentive you were during the training.',
          },
          {
            author: {
              name: 'Professor Anderson Parks, Jr.',
            },
            content:
              'Thank you so much for an amazing learning experience. I have taken and passed the exam and my certificate is proudly displayed! This was a very well organized and facilitated training program from start to finish. I have benefited greatly, both personally and professionally! I plan to integrate IAT™ into my current Emotional Intelligence courses and am looking forward to this next evolution.',
          },
          {
            author: {
              name: 'Michele W.',
            },
            content:
              'As a student of the IAT Personal Development program, I have learned a valuable skill set. The cutting edge information and knowledge shared during the course in a very comprehensive manner has been enriching. The tool set and assistance for providing others with steps forward is impressive. I am highly recommending this program to anyone interested in self improvement or supporting others in change.',
          },
        ]}
      />

      <Section
        className="bg-footer w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-footer-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-8" id="iat-webinar-form">
          <h2 className="mb-4">{COPY.signUp.title}</h2>

          <p className="mb-4">{COPY.signUp.copy1}</p>

          <List
            classNameIcon="!text-black"
            classNameListItems="mb-4"
            icon={faTriangleExclamation}
            listItems={COPY.signUp.list}
          />

          <p className="mb-4">{COPY.signUp.copy2}</p>

          <IATWebinarForm />
        </div>
      </Section>
    </Page>
  )
}
