// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { faCircleXmark } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { DATING_QUIZ_CONFIG as CONFIG } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// style
import './style.css'

export const metadata: Metadata = {
  title: '',
  description: '',
  robots: 'noindex',
}

export default function DatingQuizPage() {
  return (
    <Page page_name="Dating Quiz" className="relative">
      <section className="w-full text-center bg-pink-auxiliary pt-6 pb-10 px-4 lg:pt-22">
        <h1 className="max-w-3xl text-primary leading-[50px] mx-auto mb-4">{CONFIG.hero.title}</h1>

        <p className="max-w-4xl tracking-33 font-bold mx-auto px-4 mb-8">{CONFIG.hero.subtitle}</p>

        <div className="max-w-4xl bg-[#E9CDED] rounded-20 p-4 mb-4 mx-auto lg:p-6">
          <h2 className="mb-4">{CONFIG.hero.subheader}</h2>

          <p>{CONFIG.hero.description}</p>
        </div>

        <ButtonCheckout label={CONFIG.hero.buttonLabel} className="mb-4" />

        <p>
          <em>{CONFIG.hero.disclaimer}</em>
        </p>
      </section>

      <Image
        className="hidden absolute top-4 max-w-80 lg:block lg:-left-60 lg:w-1/4 xl:-left-44 2xl:-left-12"
        src="/images/DatingQuiz/left-mockup.png"
        alt="hero-mockup-left"
        width={100}
        height={100}
        sizes="100vw"
        quality={100}
      />

      <Image
        className="hidden absolute top-4 max-w-80 lg:block lg:-right-60 lg:w-1/4 xl:-right-44 2xl:-right-12"
        src="/images/DatingQuiz/right-mockup.png"
        alt="hero-mockup-right"
        width={100}
        height={100}
        sizes="100vw"
        quality={100}
      />

      <Section classNameInner="grid gap-4 items-stretch lg:gap-8 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image
            src={CONFIG.relationshipsFail.image}
            alt="An Inukshuk balanced by a heart in the center."
            className="w-full h-full object-contain"
            width={400}
            height={400}
            sizes="100vw"
            quality={100}
          />
        </div>

        <div className="text-left">
          <h2 className="mb-4">{CONFIG.relationshipsFail.title}</h2>

          <div className="mb-4">
            {CONFIG.relationshipsFail.copy1.map((text, index) => (
              <p key={`relationshipsFail_copy1_${index}`} className="mb-4">
                {text}
              </p>
            ))}
          </div>

          <List
            icon={faCircleXmark}
            classNameListItems="mb-2"
            classNameIcon="!text-danger"
            className="mb-4"
            listItems={CONFIG.relationshipsFail.list}
          />

          <div>
            {CONFIG.relationshipsFail.copy2.map((text, index) => (
              <p key={`relationshipsFail_copy2_${index}`}>{text}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <h2>{CONFIG.relationshipStages.title}</h2>

        <p>{CONFIG.relationshipStages.description}</p>

        <div className="text-left rounded-20 overflow-hidden my-8">
          <div className="grid grid-cols-2 xxs:grid-cols-3 lg:grid-cols-4">
            <div className="border-white border-2 bg-primary px-2 py-4 lg:p-4 font-bold text-white">
              Stage
            </div>

            <div className="border-white border-2 bg-primary px-2 py-4 lg:p-4 font-bold text-white xxs:col-span-2 lg:col-span-3">
              Description
            </div>
          </div>

          {CONFIG.relationshipStages.stages.map(({ title, paragraph }, index) => (
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

      <Section className="!w-full bg-green-7" classNameInner="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl bg-[#E2EFF2] p-6">
          <h3 className="mb-4">{CONFIG.relationshipOutcomes.single.title}</h3>

          <p>{CONFIG.relationshipOutcomes.single.description}</p>
        </div>

        <div className="p-6">
          <h3 className="mb-4">{CONFIG.relationshipOutcomes.inRelationship.title}</h3>

          <p>{CONFIG.relationshipOutcomes.inRelationship.description}</p>
        </div>
      </Section>

      <Section>
        <div className="grid items-stretch gap-4 mb-8 lg:grid-cols-3">
          <div className="text-left lg:col-span-2">
            <h2 className="mb-4">{CONFIG.coreProblem.title}</h2>

            <div className="mb-4">
              {CONFIG.coreProblem.copy.map((text, index) => (
                <p key={`coreProblem_copy_${index}`} className="mb-4">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div>
            <Image
              src="/images/DatingQuiz/woman-thinking.png"
              className="w-full h-full object-contain"
              alt="A woman engaged in thought"
              width={384}
              height={286}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>

        <div className="grid gap-4 mb-8 lg:grid-cols-3">
          <div className="text-left lg:order-last lg:col-span-2">
            <h2 className="mb-4">{CONFIG.coreSolution.title}</h2>

            <div className="mb-4">
              <p>{CONFIG.coreSolution.copy}</p>
            </div>

            <List
              icon={faCircleCheck}
              classNameListItems="mb-2"
              classNameIcon="!text-green-check mr-4"
              className="mb-4"
              listItems={CONFIG.coreSolution.list}
            />
          </div>

          <div className="lg:order-first">
            <Image
              src="/images/DatingQuiz/thais-with-laptop.png"
              className="w-full h-full object-contain"
              alt="Thais Gibson with a laptop"
              width={400}
              height={400}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>
      </Section>

      {/* <BootcampOfferingsSection />

      <RoadmapSection />

      <TestimonialsSection />

      <SocialProofSection />

      <PricingSection />

      <TrustbarSection />

      <GuaranteeSection />

      <WhoThisIsForSection /> */}

      <PdsHealingStepsSection />

      {/* <LearnHowToSection />

      <EndResultSection />

      <FooterCtaSection /> */}
    </Page>
  )
}

export function PdsHealingStepsSection() {
  return (
    <Section className="bg-white-secondary">
      <h2>{CONFIG.pdsHealingStepsConfig.title}</h2>

      <Image
        src="/images/AttachmentQuizResults/steps-paper-airplane.svg"
        alt="The number 1 through 5 in a line followed by a paper airplane."
        className="w-full mb-6 max-w-[942px] mx-auto"
        width={311}
        height={75}
      />

      <div className="text-left mb-4 lg:grid lg:grid-cols-5 lg:gap-4">
        {CONFIG.pdsHealingStepsConfig.steps.map((step, index) => (
          <div
            key={`healing_step_${index}`}
            className="bg-white rounded-lg default-padding mb-4 lg:mb-0 lg:py-4">
            <div className="flex mb-4">
              <FontAwesomeIcon
                className="text-white bg-primary py-1 px-2 rounded"
                icon={step.icon}
              />

              <p className="text-primary ml-2 mb-0 font-bold">Step {index + 1}</p>
            </div>

            <p className="mb-0">{step.text}</p>
          </div>
        ))}
      </div>

      <ButtonCheckout label="START YOUR JOURNEY TODAY" />
    </Section>
  )
}
