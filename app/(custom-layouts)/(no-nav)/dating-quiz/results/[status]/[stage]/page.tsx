// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { faStars } from '@awesome.me/kit-545b942488/icons/classic/solid'
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
// styles
import '@/styles/default-styles.css'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { List } from '@/components/List'
import { faCheckCircle, faXmarkCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { externalRoutes } from '@/utils/constants'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import {
  BootcampOfferingsSection,
  EndResultSection,
  FooterCtaSection,
  GuaranteeSection,
  LearnHowToSection,
  PdsHealingStepsSection,
  PricingSection,
  RoadmapSection,
  SocialProofSection,
  TestimonialsSection,
  TrustbarSection,
  WhoThisIsForSection,
} from '../../../page'

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
    <Page page_name={`Dating Quiz Results - ${status} - ${stage}`}>
      <Section className="bg-gradient-to-b from-pink-auxiliary to-white">
        <h1 className="text-primary">{CONFIG['common'].banner.header}</h1>

        <p>{CONFIG['common'].banner.copy}</p>

        <div className="w-fit bg-black text-white rounded-10 mx-auto p-4">
          <p className="mb-0">
            <span className="mr-2">
              <FontAwesomeIcon icon={faStars} />
            </span>
            {CONFIG['common'].banner.label}
          </p>
        </div>

        <div className="max-w-3xl mx-auto my-4">
          <div className="w-full bg-white rounded-2xl shadow-xl p-4 mx-auto">
            <VideoYoutube
              playInline
              classNameThumbnail="w-full"
              videoId={CONFIG[status][stage].videoId}
              thumbnail="/images/AttachmentQuizResults/thais-writing.jpg"
              thumbnailAlt={`Video about Dating Quiz Results - ${status} - ${stage}`}
              type={`dating quiz results ${status} ${stage}`}
            />
          </div>
        </div>
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
              key={`healing_step_${index}`}
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
