// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Section } from '@/components/Section'
import { Page } from '@/components/Page'
import { faSquareCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faStar } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { List } from '@/components/List'
import { CarouselPromotionCourses } from '@/components/Carousel/variants/CarouselPromotionCourses'
import {
  PDS14dftFAQ,
  PDS14dftFeatureOffers,
  PDS14dftTestimonialVideo,
  PDSSocialProof,
} from '@/components/SpecialPromotion'
import { MHAButton } from '@/components/MHAButton'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import { ThaisIntro } from '@/components/ThaisIntro'
import {
  faCircleCheck,
  faClock,
  faEye,
  faHeart,
  faSadTear,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
// config
import { MHAConfig } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// modules
import { Pages } from '@/modules/Mixpanel'
import { TMHAPageConfig } from './config'

export const metadata: Metadata = {
  title: 'Find Calmness & Clarity with Our 14-Day Free Trial',
  description:
    'Your mental health matters. Make it a priority with our All-Access Pass, available for 14 days for FREE this Mental Health Awareness Month.',
  robots: 'noindex',
}

export default function MHAPage() {
  return <MentalHealthPage page_name="mha-month" MHAConfig={MHAConfig} />
}

interface IMHAPageProps {
  page_name: Pages
  MHAConfig: TMHAPageConfig
}

export const MentalHealthPage = ({ page_name, MHAConfig }: IMHAPageProps) => {
  return (
    <Page page_name={page_name} className="w-full overflow-hidden">
      {/** HERO SECTION */}
      <Section className="relative z-10 bg-blue-lightest lg:pb-0">
        <p className="!text-xl font-effra rounded-lg font-bold bg-blue-dark text-white mb-3 px-8 py-2 lg:py-4 lg:!text-3xl">
          {MHAConfig.HERO.header}
        </p>

        <h1 className="text-primary mb-4 lg:leading-10 lg:max-w-[940px] lg:mx-auto lg:mb-8">
          {MHAConfig.HERO.subheader}
        </h1>

        <p className="!text-lg font-bold mb-4 lg:max-w-3xl lg:mx-auto">{MHAConfig.HERO.copy}</p>

        <MHAButton label={MHAConfig.HERO.ctaLabel} />

        <p className="max-w-xl italic mx-auto mt-4">{MHAConfig.HERO.freeTrial}</p>
      </Section>

      <Image
        alt="green wave vector"
        className="relative w-full mt-0 z-5 2xl:-mt-5"
        width={1700}
        height={89}
        src="/images/styled-wave-green.png"
      />

      {/** REVOLUTIONARY MODEL SECTION */}
      <Section
        className="2xl:py-24"
        classNameInner="lg:grid lg:grid-cols-2 lg:gap-12 xl:max-w-6xl xl:items-start">
        <div className="col-start-2 text-left">
          <p className="mb-4">{MHAConfig.REVOLUTIONARY_MODEL.copy[0]}</p>

          <p className="mb-4">{MHAConfig.REVOLUTIONARY_MODEL.copy[1]}</p>

          <p className="mb-4">{MHAConfig.REVOLUTIONARY_MODEL.copy[2]}</p>
        </div>

        <div className="lg:row-start-2 lg:col-span-2">
          <MHAButton label={MHAConfig.REVOLUTIONARY_MODEL.ctaLabel} />

          <p className="font-bold italic mt-3">{MHAConfig.REVOLUTIONARY_MODEL.limitedOffer}</p>
        </div>

        <Image
          alt="hero image"
          className="w-full rounded-20 my-4 lg:my-0 lg:col-start-1 lg:row-start-1"
          width={768}
          height={513}
          src="/images/BlackFridayPage/mha-hero.jpg"
        />
      </Section>

      {/**BREAK YOUR RELATIONSHIP PATTERNS SECTION */}
      {page_name !== 'mha-month' && (
        <Section>
          <div className="max-w-5xl text-center mx-auto">
            <h2>{MHAConfig.RELATIONSHIP_PATTERNS.header}</h2>

            <p>{MHAConfig.RELATIONSHIP_PATTERNS.subheader}</p>

            <List
              className=" mt-10"
              classNameIcon="!text-green-check !text-xl"
              classNameListItems="my-4 lg:my-5 lg:first:!mt-0 lg:!pl-7"
              classNameText="lg:pl-3"
              icon={faSquareCheck}
              listItems={MHAConfig.RELATIONSHIP_PATTERNS.listItems}
            />

            <div className="text-left">
              <p>{MHAConfig.RELATIONSHIP_PATTERNS.copy[0]}</p>

              <p className="my-6">{MHAConfig.RELATIONSHIP_PATTERNS.copy[1]}</p>
            </div>

            <MHAButton label={MHAConfig.RELATIONSHIP_PATTERNS.ctaLabel} />
          </div>
        </Section>
      )}

      {/** PURCHASE STEPS SECTION */}
      <Section className="!py-10">
        <div className="grid grid-cols-1 gap-8 !text-left lg:grid-cols-3">
          {MHAConfig.STEPS_TO_PURCHASE.map((item, idx) => (
            <div key={`purchase_steps_${idx}`}>
              <div className="min-h-48 mb-4">
                <Image
                  className="rounded-xl"
                  alt="PDS Journey Step"
                  src={item.image}
                  width={360}
                  height={180}
                />
              </div>

              <p className="font-bold tracking-33 mb-4">{item.step}</p>

              <h3 className="mb-4">{item.title}</h3>

              <p>{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      {/** BENEFITS SECTION */}
      <Section className="text-white bg-black-secondary lg:pb-0 2xl:pt-12">
        <div>
          <h2 className="mb-4">{MHAConfig.BENEFITS_SECTION.header}</h2>

          <p className="font-bold text-xl !tracking-33 lg:text-3xl lg:max-w-4xl lg:mx-auto mb-12">
            {MHAConfig.BENEFITS_SECTION.subheader}
          </p>

          <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="text-left">
              <p className="mb-4">{MHAConfig.BENEFITS_SECTION.copy[0]}</p>

              <p className="mb-4">{MHAConfig.BENEFITS_SECTION.copy[1]}</p>

              <p className="mb-4">{MHAConfig.BENEFITS_SECTION.copy[2]}</p>

              <p className="mb-4">{MHAConfig.BENEFITS_SECTION.copy[3]}</p>
            </div>

            <div className="text-left mb-8">
              <List
                classNameIcon="!text-xl text-yellow"
                classNameListItems="my-4 lg:my-5 lg:first:!mt-0 lg:!pl-7"
                classNameText="lg:pl-3"
                icon={faStar}
                listItems={MHAConfig.BENEFITS_SECTION.benefits}
              />
            </div>
          </div>

          <MHAButton label={MHAConfig.BENEFITS_SECTION.ctaLabel} />
        </div>

        <PDSSocialProof />
      </Section>

      <Image
        alt="black wave vector"
        className="w-full md:hidden"
        width={391}
        height={103}
        src="/images/BlackFridayPage/black-secondary-wave.jpg"
      />

      <Image
        alt="black wave vector"
        className="w-full hidden md:block"
        width={1440}
        height={218}
        src="/images/BlackFridayPage/black-secondary-wave-desktop.jpg"
      />

      {/** TESTIMONIAL SECTION */}
      <div className="w-full max-w-[100vw]">
        <CarouselTestimonial
          showQuotations={false}
          className="mt-6"
          classNameHeader="text-center"
          headingText="You Could Be Joining Our Members in Having Breakthroughs Like This:"
        />
      </div>

      {/** FEATURES SECTION */}
      <PDS14dftFeatureOffers />

      {/** COURSES SECTION */}
      <CarouselPromotionCourses
        title={MHAConfig.COURSES_SECTION.header}
        copy={MHAConfig.COURSES_SECTION.copy}
      />

      {/** THAIS` SECTION */}
      <ThaisIntro />

      <Image
        alt="purple wave vector"
        className="w-full"
        width={2881}
        height={430}
        src="/images/BlackFridayPage/mha-purple-wave-desktop.jpg"
      />

      {/** NEGATIVE PATTERNS SECTION */}
      <Section className="bg-primary-light-50 lg:pt-0 2xl:pb-24">
        <div>
          <h2>{MHAConfig.NEGATIVE_PATTERN_SECTION.header}</h2>

          <div className="lg:grid lg:grid-cols-4 lg:gap-6">
            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto my-4">
                <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faEye} />
              </div>

              <p className="w-3/4 mx-auto lg:w-auto">{MHAConfig.NEGATIVE_PATTERN_SECTION.copy1}</p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto my-4">
                <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faHeart} />
              </div>

              <p className="w-3/4 mx-auto lg:w-auto">{MHAConfig.NEGATIVE_PATTERN_SECTION.copy2}</p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto my-4">
                <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faSadTear} />
              </div>

              <p className="w-3/4 mx-auto lg:w-auto">{MHAConfig.NEGATIVE_PATTERN_SECTION.copy3}</p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto my-4">
                <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faClock} />
              </div>

              <p className="w-3/4 mx-auto lg:w-auto">{MHAConfig.NEGATIVE_PATTERN_SECTION.copy4}</p>
            </div>
          </div>

          <p className="max-w-xl font-bold mx-auto my-4">
            {MHAConfig.NEGATIVE_PATTERN_SECTION.copy5}
          </p>

          <MHAButton label={MHAConfig.NEGATIVE_PATTERN_SECTION.ctaLabel} />
        </div>
      </Section>

      {/** PDS FEATURES SECTION */}
      <Section className="bg-black-secondary text-white 2xl:py-24">
        <h2>{MHAConfig.FEATURES_SECTION.header}</h2>

        <p className="max-w-2xl tracking-33 text-xl mx-auto mb-4 mt-8">
          {MHAConfig.FEATURES_SECTION.subheader}
        </p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:my-8">
          <Image
            alt="best value mockup"
            className="w-full"
            width={1980}
            height={981}
            src="/images/best-value-mockup.png"
          />

          <div className="text-left">
            <p className="font-bold my-4">{MHAConfig.FEATURES_SECTION.featureHeading}</p>

            <List
              className="mb-4"
              classNameIcon="text-success"
              classNameListItems="my-4"
              icon={faCircleCheck}
              listItems={MHAConfig.FEATURES_SECTION.features}
            />
          </div>
        </div>

        <MHAButton label={MHAConfig.FEATURES_SECTION.ctaLabel} />

        <p className="italic font-medium mt-4">{MHAConfig.FEATURES_SECTION.limitedOffer}</p>
      </Section>

      {/** TESTIMONAIL VIDEO SECTION */}
      <PDS14dftTestimonialVideo />

      {/** FAQ SECTION */}
      <PDS14dftFAQ />
    </Page>
  )
}
