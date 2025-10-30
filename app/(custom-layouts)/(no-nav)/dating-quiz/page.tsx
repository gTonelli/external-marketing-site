// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { Trustbar } from '@/components/Trustbar/Trustbar'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import {
  faCircleXmark,
  faCircleCheck as faCircleCheckRegular,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faCircle, faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'
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

      <BootcampOfferingsSection />

      <RoadmapSection />

      <TestimonialsSection />

      <SocialProofSection />

      <PricingSection />

      <TrustbarSection />

      <GuaranteeSection />

      <WhoThisIsForSection />

      <PdsHealingStepsSection />

      <LearnHowToSection />

      <EndResultSection />

      <FooterCtaSection />
    </Page>
  )
}

// Exported section components for reuse

export function BootcampOfferingsSection() {
  return (
    <Section
      className="!w-full bg-white-secondary"
      classNameInner="grid items-stretch gap-4 lg:grid-cols-3">
      <div className="text-left lg:col-span-2">
        <h2 className="mb-4">{CONFIG.bootcampOfferings.title}</h2>

        {/* ::after element is used to show the dashed line between the items; hide it for the last item */}
        <ol className="[&>li:last-child>span]:after:hidden">
          {CONFIG.bootcampOfferings.items.map((item, index) => (
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

export function RoadmapSection() {
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
        <h2 className="mb-4">{CONFIG.roadmap.title}</h2>

        <List
          icon={faCircleCheck}
          classNameIcon="!text-green-check mt-1"
          classNameListItems="mb-4"
          listItems={CONFIG.roadmap.list}
        />

        <div className="mb-8">
          {CONFIG.roadmap.copy.map((copy, index) => (
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

export function TestimonialsSection() {
  return (
    <Section className="!px-4 lg:!px-0" classNameInner="!max-w-full">
      <h2 className="mb-4">{CONFIG.testimonials.title}</h2>

      <CarouselTestimonialThinkific
        className="mb-4"
        classNameCard="!from-white-secondary !to-white-secondary"
        initialSlide={1}
      />
    </Section>
  )
}

export function SocialProofSection() {
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

        <p className="max-w-xl mx-auto">{CONFIG.socialProof.text}</p>
      </div>
    </Section>
  )
}

export function PricingSection() {
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
          {CONFIG.pricing.badge}
        </p>

        <p className="font-ssp lg:text-2xl">
          <strong>{CONFIG.pricing.title}</strong>
        </p>

        <p>
          <strong>{CONFIG.pricing.subtitle}</strong>
        </p>

        <div className="flex items-center pl-10 my-4 lg:mb-6">
          <p>
            <strong>{CONFIG.pricing.priceLabel}</strong>
          </p>

          <p className="text-primary text-h1 font-bold font-ssp mx-2 mb-0 lg:text-6xl">
            {CONFIG.pricing.price}
          </p>

          <p className="text-primary mb-0">{CONFIG.pricing.priceUnit}</p>
        </div>

        <p className="mb-4">{CONFIG.pricing.description}</p>

        <ButtonCheckout label={CONFIG.pricing.buttonLabel} />
      </div>
    </Section>
  )
}

export function TrustbarSection() {
  return (
    <Section className="!p-4" classNameInner="!w-full !p-0">
      <p className="tracking-33 mb-4">
        <strong>OUR PRODUCTS HAVE BEEN FEATURED ON</strong>
      </p>

      <Trustbar />
    </Section>
  )
}

export function GuaranteeSection() {
  return (
    <Section
      className="bg-watch w-full z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
      classNameInner="relative !max-w-full p-6 lg:!p-0 !m-0 lg:grid lg:grid-cols-12 lg:gap-4">
      <div className="text-left bg-white rounded-20 shadow-lg p-7 lg:col-span-5 lg:col-start-7">
        <h2 className="mb-4">{CONFIG.guarantee.title}</h2>

        {CONFIG.guarantee.copy.map((text, index) => (
          <p key={`guarantee_copy_${index}`} className="mb-4">
            {text}
          </p>
        ))}

        <ButtonCheckout label={CONFIG.guarantee.buttonLabel} />

        <p className="text-center">
          <small>
            <em>{CONFIG.guarantee.disclaimer}</em>
          </small>
        </p>
      </div>
    </Section>
  )
}

export function WhoThisIsForSection() {
  return (
    <Section classNameInner="lg:grid lg:grid-cols-2 lg:gap-4">
      <div className="text-left">
        <h2 className="mb-4">{CONFIG.whoThisIsFor.title}</h2>

        <List
          icon={faCircleCheckRegular}
          className="mb-4"
          classNameIcon="!text-green-check mt-1"
          classNameListItems="mb-2"
          listItems={CONFIG.whoThisIsFor.list}
        />

        {CONFIG.whoThisIsFor.copy.map((text, index) => (
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

export function LearnHowToSection() {
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
        <h2 className="mb-4">{CONFIG.learnHowTo.title}</h2>

        <List
          icon={faCircleCheckRegular}
          className="mb-4"
          classNameIcon="!text-green-check mt-1"
          classNameListItems="mb-2"
          listItems={CONFIG.learnHowTo.list}
        />
      </div>
    </Section>
  )
}

export function EndResultSection() {
  return (
    <Section className="relative text-left !pb-64 lg:!py-28 lg:!px-56 xl:!py-32 2xl:!py-40">
      <div className="relative max-w-xl text-white text-left z-10">
        <h2 className="mb-4">{CONFIG.endResult.title}</h2>

        {CONFIG.endResult.copy1.map((text, index) => (
          <p key={`endResult_copy1_${index}`} className="mb-2">
            {text}
          </p>
        ))}

        <p className="mt-4">{CONFIG.endResult.copy2}</p>
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

export function FooterCtaSection() {
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
        <h2 className="mb-4">{CONFIG.footer.header}</h2>

        <p className="mb-4">{CONFIG.footer.description}</p>

        <ButtonCheckout label={CONFIG.footer.ctaLabel} />

        <p>
          <small>
            <em>{CONFIG.footer.disclaimer}</em>
          </small>
        </p>
      </div>
    </Section>
  )
}
