// core
import Image from 'next/image'
// components
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { Faq } from '@/components/Faq/Faq'
import { List } from '@/components/List'
import { Section } from '@/components/Section'
import { PDSFeaturesSection } from './PDSFeaturesSection'
import { faCircleCheck, faInfoCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faSparkles } from '@awesome.me/kit-545b942488/icons/classic/solid'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// utils
import { TStyle } from '@/utils/types'
import { getAttachmentStyleText } from '@/utils/functions'
import { externalRoutes } from '@/utils/constants'
// config
import { config } from './config'
// style
import './style.css'

interface IPDSResultsOfferProps {
  style: TStyle
  checkoutUrl?: string
}

export const PDSResultsOfferSection = ({
  style,
  checkoutUrl = externalRoutes.checkoutRegularSubscription,
}: IPDSResultsOfferProps) => {
  const attachmentStyleLong = getAttachmentStyleText(style)
  const { base: baseConfig } = config
  const pdsGrowthConfig = baseConfig.pdsGrowth(style)
  const pdsHealingStepsConfig = baseConfig.healingSteps(style, attachmentStyleLong)
  const pdsTestimonialConfig = baseConfig.testimonials(style)
  const pdsNextStepsConfig = baseConfig.nextSteps(style, attachmentStyleLong)

  return (
    <>
      <Section classNameInner="lg:!max-w-screen-xl" id="pds-offer">
        <h2>{pdsGrowthConfig.title}</h2>

        {pdsGrowthConfig.subtitle && (
          <p className="mb-4">
            <strong>{pdsGrowthConfig.subtitle}</strong>
          </p>
        )}

        <div className="mb-4 lg:mb-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">
          <Image
            src={`/images/AttachmentQuizResults/course-player-mockup-${style}.png`}
            className="w-full mb-4 lg:mb-0"
            alt="2 Card images overlaid on each other with some text. The first image is of a woman sitting and smiling doing a course workbook. The second image is a mockup of the PDS course player on a lap top. The text reads: 'Easy, step-by-step program. Teaches you everything you need to know about relationships.'"
            width={300}
            height={215}
            quality={100}
            sizes="100vw"
          />

          <div className="text-left">
            {pdsGrowthConfig.copy.map((value, idx) => (
              <p key={`pds_growth_${idx}`}>{value}</p>
            ))}

            <div className="flex bg-white-secondary text-primary rounded mb-4 px-4 py-2">
              <FontAwesomeIcon className="mt-1" icon={faSparkles} />

              <p className="ml-2 mb-0">{pdsGrowthConfig.hook}</p>
            </div>

            <p>
              And it’s all included in your <strong>All-Access Pass</strong>.
            </p>
          </div>
        </div>

        <h2 className="lg:mb-6">{pdsGrowthConfig.featureSectionTitle}</h2>

        <PDSFeaturesSection style={style} attachmentStyleLong={attachmentStyleLong} />

        <Image
          src="/images/AttachmentQuizResults/course-player-mockup-2.png"
          className="w-full max-w-[816px] mx-auto mb-6 lg:mb-10"
          alt="An image of the Pds course player on several devices: a 3 different size tablets, a phone, and a mac"
          width={343}
          height={113}
          quality={100}
          sizes="100vw"
        />

        <p className="text-lg font-bold">So what does this look like for you?</p>

        <ButtonCheckout
          href={checkoutUrl}
          className="mb-4"
          label="JOIN THE ALL-ACCESS & SAVE 30%"
        />

        <div className="w-fit bg-blue-3 flex items-center text-blue-darkest p-4 mx-auto">
          <FontAwesomeIcon className="mr-2" icon={faInfoCircle} />

          <p className="mb-0">
            When you sign up, you'll pay the monthly membership of $67 instead of the regular price
            $97!
          </p>
        </div>
      </Section>

      <Section className="bg-white-secondary">
        <h2>{pdsHealingStepsConfig.title}</h2>

        <p>{pdsHealingStepsConfig.copy}</p>

        <p className="mb-4">
          <strong>{pdsHealingStepsConfig.subtitle}</strong>
        </p>

        <Image
          src="/images/AttachmentQuizResults/steps-paper-airplane.svg"
          alt="The number 1 through 5 in a line followed by a paper airplane."
          className="w-full mb-6 max-w-[942px] mx-auto"
          width={311}
          height={75}
        />

        <div className="text-left mb-4 lg:grid lg:grid-cols-5 lg:gap-4">
          {pdsHealingStepsConfig.steps.map((step, i) => (
            <div
              key={`healing_step_${i}`}
              className="bg-white rounded-lg default-padding mb-4 lg:mb-0 lg:py-4">
              <div className="flex mb-4">
                <FontAwesomeIcon
                  className="text-white bg-primary py-1 px-2 rounded"
                  icon={step.icon}
                />

                <p className="text-primary ml-2 mb-0 font-bold">Step {i + 1}</p>
              </div>

              <p className="mb-0">{step.text}</p>
            </div>
          ))}
        </div>

        <ButtonCheckout href={checkoutUrl} label="START YOUR JOURNEY TODAY" />
      </Section>

      <Section className="!px-4 lg:!px-0" classNameInner="!max-w-full">
        <h2>{pdsTestimonialConfig.title}</h2>

        {pdsTestimonialConfig.text.map((copy, idx) => (
          <p key={`pds_testimonial_${idx}`}>{copy}</p>
        ))}

        <CarouselTestimonialThinkific className="mb-4" initialSlide={1} />
      </Section>

      <Section className="!pb-0 bg-[#EFEDF2]" classNameInner="!text-left lg:grid lg:grid-cols-2">
        <div>
          <h2 className="mb-0">Meet Thais Gibson, PhD:</h2>

          <h2>Your Mentor and Attachment Expert</h2>

          {baseConfig.thaisBio(style).map((copy, idx) => (
            <p key={`pds_thais_bio_${idx}`}>{copy}</p>
          ))}

          <List
            useMD={false}
            icon={faCircleCheck}
            className="mb-16"
            classNameListItems="mb-4"
            listItems={[
              <>
                In our webinars, you’ll get live mentorship directly from Thais every week in the
                Q&A Webinars. Each session is built on{' '}
                <strong>respect for your individual boundaries</strong>, so you can finally trust
                that you’re growing without sacrificing who you are.
              </>,
              <>
                You’ll learn from someone who has helped{' '}
                <strong>over 30,000 people transform</strong> and understands exactly what it takes
                because she’s walked that path herself.
              </>,
            ]}
          />
        </div>

        <Image
          src="/images/AttachmentQuizResults/thais-couch-mobile.png"
          alt="Thais sitting on a couch smiling with her head slightly tilted to the side."
          className="w-full lg:hidden"
          width={343}
          height={321}
        />

        <Image
          src="/images/AttachmentQuizResults/thais-couch-desktop.png"
          alt="Thais sitting on a couch smiling with her head slightly tilted to the side."
          className="hidden lg:block lg:self-end"
          width={668}
          height={321}
        />
      </Section>

      <Section classNameInner="!text-left lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">
        <div>
          <h2>Your Next Step—Start Experiencing the Relationships You Truly Desire</h2>

          <p>{pdsNextStepsConfig.copy}</p>

          <Image
            alt="A mockup of PDS courses on the PDs course players on 2 tablets and a laptop."
            className="mb-4 w-full max-w-[502px]"
            src={`/images/AttachmentQuizResults/course-player-mockup-3-${style}.png`}
            width={343}
            height={177}
          />
        </div>

        <div className="default-padding rounded-2xl shadow-centered-card relative overflow-hidden lg:py-10 lg:px-10">
          <p className="w-full text-center text-white absolute top-8 -right-[calc(50%-39px)] rotate-45 bg-green-check">
            SAVE 30%
          </p>

          <p className="font-ssp lg:text-2xl">
            <strong>Your All-Access Pass includes:</strong>
          </p>

          <div className="flex items-center pl-10 mb-4 lg:mb-6">
            <p className="text-danger text-2xl font-bold font-ssp mb-0 lg:text-h2">
              <s>$97</s>
            </p>

            <p className="text-primary text-h1 font-bold font-ssp mx-2 mb-0 lg:text-6xl">$67</p>

            <p className="text-primary mb-0">/ per month</p>
          </div>

          <List
            classNameIcon="text-primary mb-6"
            icon={faCircleCheck}
            listItems={[
              pdsNextStepsConfig.courseAccess,
              'Weekly personalized mentorship sessions with Thais Gibson.',
              'A private, supportive community for safe emotional growth.',
            ]}
          />

          <ButtonCheckout href={checkoutUrl} label={pdsNextStepsConfig.ctaLabel} />
        </div>
      </Section>

      <Faq className="lg:max-w-screen-xl" classNameHeading="text-center" faq={baseConfig.faqs} />
    </>
  )
}
