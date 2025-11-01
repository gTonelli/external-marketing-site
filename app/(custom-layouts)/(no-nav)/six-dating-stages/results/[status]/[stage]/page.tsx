// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { List } from '@/components/List'
import { Trustbar } from '@/components/Trustbar/Trustbar'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { faCircle, faStars } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCheckCircle, faXmarkCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
// config
import {
  DATING_QUIZ_RESULTS_CONFIG as CONFIG,
  DATING_QUIZ_RESULTS_SEO as SEO_CONFIG,
  TDatingStatus,
  TDatingQuizResultsParams,
} from './config'
// utils
import { externalRoutes } from '@/utils/constants'
// styles
import '@/styles/default-styles.css'
import './style.css'

export const dynamicParams = false

interface IDatingQuizResultsParams {
  params: Promise<{
    status: TDatingStatus
    stage: TDatingQuizResultsParams
  }>
}

export function generateStaticParams(): {
  status: TDatingStatus
  stage: TDatingQuizResultsParams
}[] {
  return [
    { status: 'single', stage: 'dating' },
    { status: 'single', stage: 'power-struggle' },
    { status: 'single', stage: 'rhythm' },
    { status: 'single', stage: 'devotion' },
    { status: 'relationship', stage: 'dating' },
    { status: 'relationship', stage: 'power-struggle' },
    { status: 'relationship', stage: 'rhythm' },
    { status: 'relationship', stage: 'devotion' },
  ]
}

export async function generateMetadata({ params }: IDatingQuizResultsParams): Promise<Metadata> {
  const { status, stage } = await params

  return {
    title: SEO_CONFIG[status][stage].seoTitle,
    description: SEO_CONFIG[status][stage].seoDescription,
    robots: 'noindex',
  }
}
export default async function DatingQuizResultsPage({ params }: IDatingQuizResultsParams) {
  const { status, stage } = await params
  const checkoutUrl = externalRoutes.checkoutRegularSubscription

  return (
    <Page page_name={`Dating Quiz Results Page - ${status} - ${stage}`}>
      <Section className="bg-gradient-to-b from-pink-auxiliary to-white">
        <h1 className="text-primary">{CONFIG['common'].banner.header1}</h1>

        <p>{CONFIG['common'].banner.copy1}</p>

        <div className="w-fit bg-black text-white rounded-10 mx-auto p-4">
          <p className="mb-0">
            <span className="mr-2">
              <FontAwesomeIcon icon={faStars} />
            </span>
            {CONFIG['common'].banner.label}
          </p>
        </div>

        <div className="my-8 lg:grid lg:items-end lg:grid-cols-2 lg:gap-4">
          <div className="p-4 bg- shadow-xl rounded-20">
            <VideoStream
              className="bg-white"
              videoId="18c795d0f3e4c719fa8e395078d289db"
              thumbnailSrc="https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/thais_writing_video_thumbnail_a5e6bc6f9e.jpg"
            />
          </div>

          <div className="text-left mt-4">
            <h2>{CONFIG['common'].banner.header2}</h2>

            <p>{CONFIG['common'].banner.copy2}</p>

            <div className="bg-pink-tertiary-60 rounded-20 p-4">
              <p className="font-ssp font-bold text-xl">{CONFIG['common'].banner.header3}</p>

              <p className="mb-0">{CONFIG['common'].banner.copy3}</p>
            </div>
          </div>
        </div>

        <ButtonCheckout label={CONFIG['common'].banner.buttonLabel} />

        <p className="text-sm mt-2">
          <em>{CONFIG['common'].banner.disclaimer}</em>
        </p>
      </Section>

      <Section>
        <h2>{CONFIG['common'].relationshipStages.title}</h2>

        <p>{CONFIG['common'].relationshipStages.description}</p>

        <div className="text-left rounded-20 overflow-hidden my-8">
          <div className="grid grid-cols-2 xxs:grid-cols-3 lg:grid-cols-4">
            <div className="border-white border-2 bg-primary px-2 py-4 lg:p-4 font-bold text-white">
              Stage
            </div>

            <div className="border-white border-2 bg-primary px-2 py-4 lg:p-4 font-bold text-white xxs:col-span-2 lg:col-span-3">
              Description
            </div>
          </div>

          {CONFIG['common'].relationshipStages.stages.map(({ title, paragraph }, index) => (
            <div
              className="grid grid-cols-2 xxs:grid-cols-3 lg:grid-cols-4"
              key={`relationshipStages_item_${index}`}>
              <div className="border-white border-2 bg-pink-6 px-2 py-4 lg:p-4 font-bold">
                {title}
              </div>

              <div className="border-white border-2 bg-pink-6 px-2 py-4 lg:p-4 xxs:col-span-2 lg:col-span-3">
                {paragraph}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2>{CONFIG[status][stage].painPoints.title}</h2>

        {CONFIG[status][stage].painPoints.copy.map((copy, index) => (
          <p key={`painPoints_copy_${index}`} className="first-of-type:!mb-0">
            {copy}
          </p>
        ))}

        <List
          icon={faXmarkCircle}
          classNameIcon="!text-danger mt-1"
          classNameListItems="text-left mb-2"
          className={cx(
            'mb-4 lg:grid lg:gap-6',
            CONFIG[status][stage].painPoints.list.length > 2
              ? 'md:grid-cols-2 lg:grid-cols-3'
              : 'lg:grid-cols-2'
          )}
          listItems={CONFIG[status][stage].painPoints.list}
        />

        {CONFIG[status][stage].painPoints.hook && (
          <div className="bg-blue-lightest-50 rounded-10 mb-4 p-4">
            <p className="flex text-left mb-0">
              <span className="block text-primary">
                <FontAwesomeIcon className="mr-2" icon={faStars} />
              </span>

              <span className="block">{CONFIG[status][stage].painPoints.hook}</span>
            </p>
          </div>
        )}

        <div className="bg-blue-lightest rounded-20 p-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-6">
          <div>
            <Image
              src="/images/money-back-7-day.png"
              alt="Money back guarantee"
              className="w-full h-auto"
              width={100}
              height={100}
            />
          </div>

          <div className="text-left md:col-span-2 lg:col-span-3">
            <h2>{CONFIG['common'].offer.title}</h2>

            <p>{CONFIG['common'].offer.copy}</p>

            <List
              icon={faCheckCircle}
              className="mb-4"
              classNameIcon="!text-primary mt-1"
              classNameListItems="text-left"
              listItems={CONFIG['common'].offer.list}
            />

            <ButtonCheckout href={checkoutUrl} label={CONFIG['common'].offer.ctaLabel} />

            <p className="text-sm mt-2">
              <em>{CONFIG['common'].offer.disclaimer}</em>
            </p>
          </div>
        </div>
      </Section>

      <Section classNameInner="lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="bg-pink-auxiliary rounded-10 text-left p-4">
          <h2>{CONFIG[status][stage].rewirePlan.title}</h2>

          <ul>
            {CONFIG[status][stage].rewirePlan.plan.map((item, index) => (
              <li key={`rewirePlan_item_${index}`} className="flex gap-2 mb-4">
                <span className="block mt-[1px]">
                  <FontAwesomeIcon icon={item.icon} />
                </span>

                <span className="block">{item.copy}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-left">
          <h2>{CONFIG['common'].implementation.title}</h2>

          <p>{CONFIG['common'].implementation.copy}</p>

          {CONFIG['common'].implementation.support.map((step, index) => (
            <div
              key={`implementation_support_item_${index}`}
              className="flex text-left bg-pink-auxiliary rounded-10 gap-2 p-4 mb-4">
              <span className="block text-primary">
                <FontAwesomeIcon icon={faStars} />
              </span>

              <span className="block">{step}</span>
            </div>
          ))}

          <List
            icon={faCheckCircle}
            className="mb-4"
            classNameIcon="!text-green-check mt-1"
            classNameListItems="text-left mb-4"
            listItems={CONFIG['common'].implementation.offer}
          />

          <ButtonCheckout href={checkoutUrl} label={CONFIG['common'].implementation.ctaLabel} />
        </div>
      </Section>

      <Section>
        <h2>{CONFIG['common'].nextSteps.title}</h2>

        <Image
          src="/images/AttachmentQuizResults/steps-paper-airplane.svg"
          alt="The number 1 through 5 in a line followed by a paper airplane."
          className="w-full mb-6 max-w-[942px] mx-auto"
          width={311}
          height={75}
        />

        <div className="text-left mb-4 lg:grid lg:grid-cols-5 lg:gap-4">
          {CONFIG['common'].nextSteps.steps.map((step, index) => (
            <div
              key={`nextSteps_step_${index}`}
              className="bg-white-secondary rounded-lg default-padding mb-4 lg:mb-0 lg:py-4">
              <div className="flex mb-4">
                <FontAwesomeIcon className="text-primary py-1 rounded" icon={step.icon} />

                <p className="text-primary ml-2 mb-0 font-bold">Step {index + 1}</p>
              </div>

              <p className="mb-0">{step.text}</p>
            </div>
          ))}
        </div>

        <ButtonCheckout href={checkoutUrl} label={CONFIG['common'].nextSteps.ctaLabel} />

        <p className="text-sm mt-2">
          <em>{CONFIG['common'].nextSteps.disclaimer}</em>
        </p>
      </Section>

      <BootcampOfferingsSection />

      <RoadmapSection />

      <TestimonialsSection />

      <SocialProofSection />

      <PricingSection />

      <TrustbarSection />

      <GuaranteeSection />

      <WhoThisIsForSection />

      <LearnHowToSection />

      <EndResultSection />

      <FooterCtaSection />
    </Page>
  )
}

const BootcampOfferingsSection = () => {
  return (
    <Section
      className="!w-full bg-white-secondary"
      classNameInner="grid items-stretch gap-4 lg:grid-cols-3">
      <div className="text-left lg:col-span-2">
        <h2 className="mb-4">{CONFIG['common'].bootcampOfferings.title}</h2>

        {/* ::after element is used to show the dashed line between the items; hide it for the last item */}
        <ol className="[&>li:last-child>span]:after:hidden">
          {CONFIG['common'].bootcampOfferings.items.map((item, index) => (
            <li key={`bootcamp_item_${index}`} className="relative flex items-start pb-6 last:pb-0">
              {/* create a dashed line using ::after element */}
              <span className="block flex-shrink-0 after:content-[''] after:block after:w-0 after:h-full after:border-l-2 after:border-dashed after:border-primary after:absolute after:top-0 after:left-[15px] after:z-0">
                <span className="relative w-8 h-8 rounded-full inline-flex items-center justify-center mr-4 bg-primary text-white z-10">
                  <strong>{index + 1}</strong>
                </span>
              </span>

              <div>
                <p>
                  <strong>{item.title}</strong>
                </p>

                <p className="mt-1">{item.description}</p>

                {item.bonusItems && (
                  <div className="mt-1">
                    <List
                      icon={faCircle}
                      iconSize="2xs"
                      classNameIcon="mt-1"
                      listItems={item.bonusItems}
                      className="grid lg:grid-cols-2 lg:gap-x-8"
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <Image
          src="/images/DatingQuiz/quiz-mockup.png"
          className="w-full h-full object-contain"
          alt="Mockup of the quiz and a couple talking about using PDS is the best decision they've made."
          width={406}
          height={621}
          quality={100}
          sizes="100vw"
        />
      </div>
    </Section>
  )
}

const RoadmapSection = () => {
  return (
    <Section
      className="!pb-0 bg-[#EFEDF2]"
      classNameInner="!text-left lg:grid lg:grid-cols-2 lg:gap-8">
      <Image
        src="/images/AttachmentQuizResults/thais-couch-desktop.png"
        alt="Thais sitting on a couch smiling with her head slightly tilted to the side."
        className="hidden lg:block lg:self-end"
        width={668}
        height={321}
      />

      <div>
        <h2 className="mb-4">{CONFIG['common'].roadmap.title}</h2>

        <List
          icon={faCheckCircle}
          classNameIcon="!text-green-check mt-1"
          classNameListItems="mb-4"
          listItems={CONFIG['common'].roadmap.list}
        />

        <div className="mb-8">
          {CONFIG['common'].roadmap.copy.map((copy, index) => (
            <p key={`roadmap_copy_${index}`}>{copy}</p>
          ))}
        </div>
      </div>

      <Image
        src="/images/AttachmentQuizResults/thais-couch-mobile.png"
        alt="Thais sitting on a couch smiling with her head slightly tilted to the side."
        className="w-full lg:hidden"
        width={343}
        height={321}
      />
    </Section>
  )
}

const TestimonialsSection = () => {
  return (
    <Section className="!px-4 lg:!px-0" classNameInner="!max-w-full">
      <h2 className="mb-4">{CONFIG['common'].testimonials.title}</h2>

      <CarouselTestimonialThinkific
        className="mb-4"
        classNameCard="!from-white-secondary !to-white-secondary"
        initialSlide={1}
      />
    </Section>
  )
}

const SocialProofSection = () => {
  return (
    <Section className="!py-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5, 6].map((item, idx) => (
            <Image
              key={`headshot_${idx}`}
              className="w-16 h-16 bg-gray-500 border border-white rounded-full -m-2 lg:!w-20 lg:!h-20"
              alt="Headshot of a student"
              src={`/images/FlashSalePage/testimonial-headshot-${item}.jpg`}
              width={64}
              height={64}
            />
          ))}
        </div>

        <p className="max-w-xl mx-auto">{CONFIG['common'].socialProof.text}</p>
      </div>
    </Section>
  )
}

const PricingSection = () => {
  return (
    <Section classNameInner="!text-left lg:grid lg:gap-4 lg:grid-cols-2 lg:items-center">
      <div className="flex items-center justify-center">
        <Image
          alt="PDS platform is accessible on any device - laptop, tablet, and mobile."
          className=""
          src="/images/DatingQuiz/various-devices-mockup.png"
          width={588}
          height={338}
          quality={100}
          sizes="100vw"
        />
      </div>

      <div className="default-padding rounded-2xl shadow-centered-card relative overflow-hidden lg:p-6">
        <p className="w-full text-center text-white absolute top-8 -right-[calc(50%-39px)] rotate-45 bg-green-check">
          {CONFIG['common'].pricing.badge}
        </p>

        <p className="font-ssp lg:text-2xl">
          <strong>{CONFIG['common'].pricing.title}</strong>
        </p>

        <p>
          <strong>{CONFIG['common'].pricing.subtitle}</strong>
        </p>

        <div className="flex items-center pl-10 my-4 lg:mb-6">
          <p>
            <strong>{CONFIG['common'].pricing.priceLabel}</strong>
          </p>

          <p className="text-primary text-h1 font-bold font-ssp mx-2 mb-0 lg:text-6xl">
            {CONFIG['common'].pricing.price}
          </p>

          <p className="text-primary mb-0">{CONFIG['common'].pricing.priceUnit}</p>
        </div>

        <p className="mb-4">{CONFIG['common'].pricing.description}</p>

        <ButtonCheckout label={CONFIG['common'].pricing.buttonLabel} />
      </div>
    </Section>
  )
}

const TrustbarSection = () => {
  return (
    <Section className="!p-4" classNameInner="!w-full !p-0">
      <p className="tracking-33 mb-4">
        <strong>OUR PRODUCTS HAVE BEEN FEATURED ON</strong>
      </p>

      <Trustbar />
    </Section>
  )
}

const GuaranteeSection = () => {
  return (
    <Section
      className="bg-watch w-full z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
      classNameInner="relative !max-w-full p-6 lg:!p-0 !m-0 lg:grid lg:grid-cols-12 lg:gap-4">
      <div className="max-w-2xl mx-auto text-left bg-white rounded-20 shadow-lg p-7 lg:col-span-5 lg:col-start-7">
        <h2 className="mb-4">{CONFIG['common'].guarantee.title}</h2>

        {CONFIG['common'].guarantee.copy.map((text, index) => (
          <p key={`guarantee_copy_${index}`} className="mb-4">
            {text}
          </p>
        ))}

        <ButtonCheckout label={CONFIG['common'].guarantee.buttonLabel} />

        <p className="text-center">
          <small>
            <em>{CONFIG['common'].guarantee.disclaimer}</em>
          </small>
        </p>
      </div>
    </Section>
  )
}

const WhoThisIsForSection = () => {
  return (
    <Section classNameInner="lg:grid lg:grid-cols-2 lg:gap-4">
      <div className="text-left">
        <h2 className="mb-4">{CONFIG['common'].whoThisIsFor.title}</h2>

        <List
          icon={faCheckCircle}
          className="mb-4"
          classNameIcon="!text-green-check mt-1"
          classNameListItems="mb-2"
          listItems={CONFIG['common'].whoThisIsFor.list}
        />

        {CONFIG['common'].whoThisIsFor.copy.map((text, index) => (
          <p key={`whoThisIsFor_copy_${index}`} className="mb-2">
            {text}
          </p>
        ))}
      </div>

      <div>
        <Image
          src="/images/DatingQuiz/bootcamp.png"
          alt="Mockup of the course offering"
          width={486}
          height={386}
          quality={100}
          sizes="100vw"
        />
      </div>
    </Section>
  )
}

const LearnHowToSection = () => {
  return (
    <Section classNameInner="!max-w-4xl lg:grid lg:grid-cols-2 lg:gap-4 !mx-auto">
      <div>
        <Image
          src="/images/DatingQuiz/illustration.svg"
          alt="An illustration representing how talking about your attachment style can help you understand yourself better and improve your relationships."
          width={400}
          height={400}
          quality={100}
          sizes="100vw"
        />
      </div>

      <div className="text-left">
        <h2 className="mb-4">{CONFIG['common'].learnHowTo.title}</h2>

        <List
          icon={faCheckCircle}
          className="mb-4"
          classNameIcon="!text-green-check mt-1"
          classNameListItems="mb-2"
          listItems={CONFIG['common'].learnHowTo.list}
        />
      </div>
    </Section>
  )
}

const EndResultSection = () => {
  return (
    <Section className="relative text-left !pb-64 lg:!py-28 lg:!px-56 xl:!py-32 2xl:!py-40">
      <div className="relative max-w-xl text-white text-left z-10">
        <h2 className="mb-4">{CONFIG['common'].endResult.title}</h2>

        {CONFIG['common'].endResult.copy1.map((text, index) => (
          <p key={`endResult_copy1_${index}`} className="mb-2">
            {text}
          </p>
        ))}

        <p className="mt-4">{CONFIG['common'].endResult.copy2}</p>
      </div>

      <Image
        alt="A pink flower growing out of asphalt."
        className="absolute w-full h-full object-cover top-0 left-0 lg:hidden"
        src="/images/AttachmentQuizResults/flower-asphalt-mobile.png"
        height={400}
        width={375}
        sizes="100vw"
        quality={100}
      />

      <Image
        alt="A pink flower growing out of asphalt."
        className="hidden absolute w-full h-full object-cover top-0 left-0 lg:block"
        src="/images/AttachmentQuizResults/flower-asphalt-desktop.png"
        height={300}
        width={1440}
        sizes="100vw"
        quality={100}
      />
    </Section>
  )
}

const FooterCtaSection = () => {
  return (
    <Section className="relative !py-40 lg:!py-22" classNameInner="!max-w-2xl py-12">
      <Image
        src="/images/SegmentedResultsPages/vector-wave-background-1.png"
        alt="A stylized wave of vectors meant to accent the inner text"
        className="absolute top-0 left-0 w-full h-full object-cover z-5 md:hidden"
        width={375}
        height={748}
        sizes="100vw"
        quality={100}
        tabIndex={-1}
      />

      <Image
        src="/images/SegmentedResultsPages/vector-wave-background-desktop.png"
        alt="A stylized wave of vectors meant to accent the inner text"
        className="absolute top-0 left-0 w-full h-full object-cover z-5 hidden md:block"
        width={1440}
        height={500}
        sizes="100vw"
        quality={100}
        tabIndex={-1}
      />

      <div className="relative z-10">
        <h2 className="mb-4">{CONFIG['common'].footer.header}</h2>

        <p className="mb-4">{CONFIG['common'].footer.description}</p>

        <ButtonCheckout label={CONFIG['common'].footer.ctaLabel} />

        <p>
          <small>
            <em>{CONFIG['common'].footer.disclaimer}</em>
          </small>
        </p>
      </div>
    </Section>
  )
}
