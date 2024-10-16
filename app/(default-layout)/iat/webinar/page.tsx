// core
import Image from 'next/image'
// components
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { IATWebinarForm } from '@/components/Forms/IATWebinarForm'
import { List } from '@/components/List'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// config
import { COPY } from './config'
// libraries
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
// style
import './style.css'

export default function IATWebinarPage() {
  return (
    <Page page_name="IAT Webinar Page">
      <Section
        className="bg-hero w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-hero-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-7">
          <p className="font-bold tracking-33 mb-4">{COPY.header.subtitle}</p>

          <h1 className="mb-4">{COPY.header.title}</h1>

          {COPY.header.copy.map((copy, index) => (
            <p className="mb-4" key={`header-${index}`}>
              {copy}
            </p>
          ))}

          <IATWebinarForm />
        </div>
      </Section>

      <Section className="max-w-3xl mx-auto">
        <p className="font-bold tracking-33 mb-4">{COPY.video.subtitle}</p>

        <h2 className="mb-4">{COPY.video.title}</h2>

        <VideoThumbnail
          srcUrl={COPY.video.videoUrl}
          thumbnailUrl="/IATWebinar/iat-webinar-thumbnail.jpg"
          thumbnailAlt="High Impact Relationship Coach Masterclass"
        />
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="text-left lg:order-1">
          <h2 className="mb-4">{COPY.bigThings.title}</h2>

          <p className="font-bold tracking-33 mb-4">{COPY.bigThings.subtitle}</p>

          {COPY.bigThings.copy.map((copy, index) => (
            <p className="mb-4" key={`bigThings-${index}`}>
              {copy}
            </p>
          ))}

          <IATWebinarForm />
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

      <Section className="max-w-5xl mx-auto">
        <h2 className="mb-4">{COPY.lifeAsCoach.title}</h2>

        <p className="font-bold tracking-33 mb-8">{COPY.lifeAsCoach.subtitle}</p>

        <div className="grid grid-cols-1 gap-0 text-left md:grid-cols-2 md:gap-4">
          <List
            classNameIcon="!text-green-check mt-1"
            classNameListItems="font-bold mb-4"
            icon={faCircleCheck}
            listItems={COPY.lifeAsCoach.leftList}
          />

          <List
            classNameIcon="!text-green-check mt-1"
            classNameListItems="font-bold mb-4"
            icon={faCircleCheck}
            listItems={COPY.lifeAsCoach.rightList}
          />
        </div>

        <p className="mt-8">
          <ButtonScroll label="SAVE YOUR MASTERCLASS SEAT" target="#iat-webinar-form" />
        </p>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">{COPY.successStory.title}</h2>

          <p className="font-bold tracking-33 mb-4">{COPY.successStory.subtitle}</p>

          {COPY.successStory.copy.map((copy, index) => (
            <p className="mb-4" key={`successStory-${index}`}>
              {copy}
            </p>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <Image
            alt="Sanjana Kumar"
            src="/images/IATWebinar/iat-sanjana-kumar.jpg"
            width={480}
            height={480}
          />
        </div>
      </Section>

      <CarouselTestimonialThinkific className="mt-8 mb-16" initialSlide={1} />

      <Section
        className="bg-footer w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-footer-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-7" id="iat-webinar-form">
          <h2 className="mb-4">{COPY.signUp.title}</h2>

          {COPY.signUp.copy.map((copy, index) => (
            <p className="mb-4" key={`signUp-${index}`}>
              {copy}
            </p>
          ))}

          <IATWebinarForm />
        </div>
      </Section>
    </Page>
  )
}
