import Image from 'next/image'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { CONFIG } from './config'
import '@/styles/default-styles.css'
import { List } from '@/components/List'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { externalRoutes } from '@/utils/constants'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { Faq } from '@/components/Faq/Faq'

type TStyle = 'fa' | 'ap' | 'da'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }]
}

type TParams = { params: { style: TStyle } }

export default async function VariantBResultsPage({ params }: TParams) {
  const { style } = await params
  const config = CONFIG[style]
  const common = CONFIG.common
  const checkoutUrl = externalRoutes.checkoutRegularSubscription.concat(
    `&promo_label=vsl-funnel-variant`
  )

  return (
    <Page page_name={`Attachment Style Results - Variant B - ${style}`}>
      <Section classNameInner="!max-w-4xl mx-auto">
        <div className="my-8 lg:my-16 lg:grid lg:grid-cols-12">
          <div className="col-span-7 text-left">
            <h1>
              <span className="block !text-2xl">{config.hero.label}</span>

              <span className="uppercase font-bold">{config.style}</span>
            </h1>
          </div>
        </div>
      </Section>

      <Section classNameInner="!max-w-4xl mx-auto">
        <h2>{config.nothingWrongSection.title}</h2>

        <p>
          <strong>{config.nothingWrongSection.subtitle}</strong>
        </p>

        {config.nothingWrongSection.copy.map((copy, i) => (
          <p key={`nothing_wrong_copy_${i}`}>{copy}</p>
        ))}
      </Section>

      <Section className="bg-blue-lightest" classNameInner="gap-8 lg:grid lg:grid-cols-12">
        <div className="text-left lg:col-span-7">
          <h2>{config.resultSection.title}</h2>

          {config.resultSection.copy1.map((copy, i) => (
            <p key={`result_copy1_${i}`}>{copy}</p>
          ))}

          {config.resultSection.listItems && <List listItems={config.resultSection.listItems} />}

          {config.resultSection.copy2.map((copy, i) => (
            <p key={`result_copy2_${i}`}>{copy}</p>
          ))}
        </div>

        <div className="flex justify-center items-center lg:col-span-5">
          <Image
            src={`/images/${config.resultSection.image}`}
            alt={config.resultSection.imageAlt}
            width={500}
            height={500}
          />
        </div>
      </Section>

      <Section className="bg-[#252344] text-white">
        <h2>{config.soundsLikeYouSection.title}</h2>

        <div className="gap-4 mb-8 lg:grid lg:grid-cols-2">
          <div className="text-left">
            <List
              icon={faCircleCheck}
              classNameIcon="!text-green-check"
              listItems={config.soundsLikeYouSection.listItemsLeft}
            />
          </div>

          <div className="text-left">
            <List
              icon={faCircleCheck}
              classNameIcon="!text-green-check"
              listItems={config.soundsLikeYouSection.listItemsRight}
            />
          </div>
        </div>

        <p className="max-w-3xl mx-auto">{config.soundsLikeYouSection.copy}</p>
      </Section>

      <Section classNameInner="grid gap-8 lg:grid-cols-12 lg:items-stretch">
        <div className="text-left order-2 lg:order-1 lg:col-span-7">
          <h2>{common.aboutSection.title}</h2>

          {common.aboutSection.copy.map((copy, i) => (
            <p key={`about_copy_${i}`}>{copy}</p>
          ))}
        </div>

        <div className="relative h-80 order-1 lg:order-2 lg:col-span-5 lg:h-auto">
          <Image
            fill
            className="object-cover rounded-20"
            src="/images/DreamLifeResultsPage/instructor-mockup.jpg"
            alt="Mockup of a course offering on a laptop"
          />
        </div>
      </Section>

      <Section className="bg-pink-tertiary">
        <div className="grid gap-8 mb-16 lg:grid-cols-12">
          <div className="relative h-80 lg:col-span-5 lg:h-auto">
            <Image
              fill
              className="object-cover rounded-20"
              src="/images/AttachmentQuizResults/upset-couple.webp"
              alt="A woman looking seemingly upset with her husband"
            />
          </div>

          <div className="text-left lg:col-span-7">
            <h2>{config.whoIsThisForSection.title}</h2>

            {config.whoIsThisForSection.copy1.map((copy, i) => (
              <p key={`who_is_this_for_copy1_${i}`}>{copy}</p>
            ))}

            <List
              icon={faCircle}
              iconSize="2xs"
              classNameIcon="!text-black mt-1"
              classNameListItems="font-bold"
              listItems={config.whoIsThisForSection.listItems}
            />

            {config.whoIsThisForSection.copy2.map((copy, i) => (
              <p key={`who_is_this_for_copy2_${i}`}>{copy}</p>
            ))}
          </div>
        </div>

        <div className="max-w-4xl text-left mb-16">
          <h2>{config.attachmentCanChangeSection.title}</h2>

          {config.attachmentCanChangeSection.copy1.map((copy, i) => (
            <p key={`attachment_can_change_copy1_${i}`}>{copy}</p>
          ))}

          <List
            icon={faCircle}
            iconSize="2xs"
            classNameIcon="!text-black mt-1"
            listItems={config.attachmentCanChangeSection.listItems}
          />

          {config.attachmentCanChangeSection.copy2.map((copy, i) => (
            <p key={`attachment_can_change_copy2_${i}`}>{copy}</p>
          ))}
        </div>

        <div className="max-w-4xl text-left">
          <h2>{config.shiftSection.title}</h2>

          {config.shiftSection.copy1.map((copy, i) => (
            <p key={`shift_copy1_${i}`}>{copy}</p>
          ))}

          <List
            icon={faCircle}
            iconSize="2xs"
            classNameIcon="!text-black mt-1"
            listItems={config.shiftSection.listItems}
          />

          {config.shiftSection.copy2.map((copy, i) => (
            <p key={`shift_copy2_${i}`}>{copy}</p>
          ))}
        </div>
      </Section>

      <Section className="bg-primary text-white">
        <h2>{config.momentSection.title}</h2>

        {config.momentSection.copy.map((copy, i) => (
          <p key={`moment_copy_${i}`}>{copy}</p>
        ))}
      </Section>

      <Section classNameInner="gap-8 lg:grid lg:grid-cols-12">
        <div className="text-left lg:col-span-7">
          <h2>{config.supportSection.title}</h2>

          <p>{config.supportSection.copy1}</p>

          <List
            icon={faCircle}
            iconSize="2xs"
            className="mb-4"
            classNameIcon="!text-black mt-1"
            listItems={config.supportSection.listItems}
          />

          <p>{config.supportSection.copy2}</p>
        </div>

        <div className="lg:col-span-5">
          <Image
            src={config.supportSection.image}
            alt={config.supportSection.imageAlt}
            width={500}
            height={500}
          />
        </div>
      </Section>

      <Section classNameInner="gap-8 lg:grid lg:grid-cols-12">
        <div className="flex justify-center items-center lg:col-span-5">
          <Image
            src="/images/AttachmentQuizResults/platform-mockup-1.png"
            alt="A laptop mockup of the platform access on different devices"
            width={563}
            height={401}
          />
        </div>

        <div className="text-left lg:col-span-7">
          <h2>{common.whatYouGetSection.title}</h2>

          {common.whatYouGetSection.copy1.map((copy, i) => (
            <p key={`what_you_get_copy1_${i}`}>{copy}</p>
          ))}

          <List
            icon={faCircle}
            iconSize="2xs"
            classNameIcon="!text-black mt-1"
            listItems={common.whatYouGetSection.listItems}
          />

          {common.whatYouGetSection.copy2.map((copy, i) => (
            <p key={`what_you_get_copy2_${i}`}>{copy}</p>
          ))}
        </div>
      </Section>

      <Section classNameInner="gap-8 lg:grid lg:grid-cols-12">
        <div className="text-left lg:col-span-7">
          <h2>{common.gettingStartedSection.title}</h2>

          {common.gettingStartedSection.copy.map((copy, i) => (
            <p key={`getting_started_copy1_${i}`}>{copy}</p>
          ))}

          <List
            icon={faCircle}
            iconSize="2xs"
            classNameIcon="!text-black mt-1"
            classNameListItems="font-bold"
            listItems={common.gettingStartedSection.listItems}
          />
        </div>

        <div className="flex justify-center items-center lg:col-span-5">
          <Image
            src="/images/AttachmentQuizResults/rocket-cloud-vector.png"
            alt="A vector image of a rocket launching into the cloud"
            width={500}
            height={500}
          />
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-white to-pink-tertiary">
        <div className="gap-8 lg:grid lg:grid-cols-12">
          <div className="flex justify-center items-center lg:col-span-5">
            <Image
              src="/images/AttachmentQuizResults/platform-mockup-2.png"
              alt="A laptop mockup of the platform access on different devices"
              width={636}
              height={498}
            />
          </div>

          <div className="text-left lg:col-span-7">
            <h2>{common.noRiskSection.title}</h2>

            {common.noRiskSection.copy1.map((copy, i) => (
              <p key={`no_risk_copy1_${i}`}>{copy}</p>
            ))}

            <List
              icon={faCircle}
              iconSize="2xs"
              classNameIcon="!text-black mt-1"
              listItems={common.noRiskSection.listItems}
            />

            {common.noRiskSection.copy2.map((copy, i) => (
              <p key={`no_risk_copy2_${i}`}>{copy}</p>
            ))}
          </div>
        </div>

        <ButtonCheckout
          className="text-2xl bg-[#E87D1B] text-white font-bold !rounded-10 !border-none px-8 py-4 mt-8 mx-auto hover:bg-[#E87D1B]/80"
          href={checkoutUrl}
          label={common.noRiskSection.ctaLabel}
        />
      </Section>

      <Section className="!px-4 lg:!px-0" classNameInner="!max-w-full">
        <h2>What Others With Similar Attachment Styles Have Said</h2>

        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>

      <Section classNameInner="!max-w-4xl mx-auto">
        <h2>{common.continueWithGuidedSupportSection.title}</h2>

        {common.continueWithGuidedSupportSection.copy.map((copy, i) => (
          <p key={`continue_with_guided_support_copy_${i}`}>{copy}</p>
        ))}

        <ButtonCheckout
          className="text-2xl bg-[#E87D1B] text-white font-bold !rounded-10 !border-none px-8 py-4 mt-8 mx-auto hover:bg-[#E87D1B]/80"
          href={checkoutUrl}
          label={common.continueWithGuidedSupportSection.ctaLabel}
        />
      </Section>

      <Section className="bg-blue-lightest" classNameInner="gap-4 lg:grid lg:grid-cols-12">
        <div className="text-left lg:col-span-7">
          <h2>{common.afterJoiningSection.title}</h2>

          {common.afterJoiningSection.copy1.map((copy, i) => (
            <p key={`after_joining_copy1_${i}`}>{copy}</p>
          ))}

          <List
            icon={faCircle}
            iconSize="2xs"
            classNameIcon="!text-black mt-1"
            listItems={common.afterJoiningSection.listItems1}
          />

          {common.afterJoiningSection.copy2.map((copy, i) => (
            <p key={`after_joining_copy2_${i}`}>{copy}</p>
          ))}

          <List
            icon={faCircle}
            iconSize="2xs"
            classNameIcon="!text-black mt-1"
            listItems={common.afterJoiningSection.listItems2}
          />

          <ButtonCheckout
            className="text-2xl bg-[#E87D1B] text-white font-bold !rounded-10 !border-none px-8 py-4 mt-8 mx-auto hover:bg-[#E87D1B]/80"
            href={checkoutUrl}
            label={common.afterJoiningSection.ctaLabel}
          />
        </div>

        <div className="flex justify-center items-center lg:col-span-5">
          <Image
            width={927}
            height={497}
            src="/images/AttachmentQuizResults/attachment-quiz-mockup.png"
            alt="A laptop mockup of the attachment quiz"
          />
        </div>
      </Section>

      <Section>
        <div className="gap-8 mb-8 lg:grid lg:grid-cols-12">
          <div className="relative h-80 lg:col-span-5 lg:h-auto">
            <Image
              fill
              className="object-cover rounded-20"
              src="/images/AttachmentQuizResults/thais-gibson.png"
              alt="Thais sitting on a couch smiling with her head slightly tilted to the side."
            />
          </div>

          <div className="text-left lg:col-span-7">
            <h2>{common.aboutThaisSection.title}</h2>

            {common.aboutThaisSection.copy.map((copy, i) => (
              <p key={`about_thais_copy_${i}`}>{copy}</p>
            ))}
          </div>
        </div>

        <div className="bg-pink-auxiliary text-xl rounded-20 px-4 py-6">
          <p className="flex justify-between items-center gap-2 mb-0">
            <span className="hidden lg:flex">
              <Image width={48} height={48} src="/images/logo.svg" alt="PDS Logo" />
            </span>

            <strong>{common.aboutThaisSection.banner}</strong>

            <span className="hidden lg:flex">
              <Image width={48} height={48} src="/images/logo.svg" alt="PDS Logo" />
            </span>
          </p>
        </div>
      </Section>

      <Section className="bg-black">
        <div className="flex justify-center gap-8 mb-16">
          {common.featuresSection.communityCards.map((card, i) => (
            <div
              key={`feature_card_${i}`}
              className="min-w-48 max-w-48 flex flex-col items-center justify-center border-4 border-primary bg-white rounded-20 p-6">
              <p className="text-primary text-2xl">
                <strong>{card.metric}</strong>
              </p>

              <p className="mb-0">{card.label}</p>
            </div>
          ))}
        </div>

        <div className="gap-8 lg:grid lg:grid-cols-12">
          <div className="text-left text-white lg:col-span-7">
            <h2>{common.featuresSection.title}</h2>

            <List
              icon={faCircleCheck}
              classNameIcon="!text-green-check"
              listItems={common.featuresSection.listItems}
            />

            <ButtonCheckout
              className="text-2xl bg-[#E87D1B] text-white font-bold !rounded-10 !border-none px-8 py-4 mt-8 mx-auto hover:bg-[#E87D1B]/80"
              href={checkoutUrl}
              label={common.featuresSection.ctaLabel}
            />
          </div>

          <div className="flex justify-center items-center lg:col-span-5">
            <Image
              width={240}
              height={497}
              src="/images/AttachmentQuizResults/support-groups-mockup.png"
              alt="A phone mockup of the support groups feature"
            />
          </div>
        </div>
      </Section>

      <Section classNameInner="gap-8 lg:grid lg:grid-cols-12">
        <div className="text-left lg:col-span-7">
          <h2>{config.continuingBenefitsSection.title}</h2>

          {config.continuingBenefitsSection.copy1.map((copy, i) => (
            <p key={`continuing_benefits_copy1_${i}`}>{copy}</p>
          ))}

          <List
            icon={faCircle}
            iconSize="2xs"
            classNameIcon="!text-black mt-1"
            listItems={config.continuingBenefitsSection.listItems}
          />

          {config.continuingBenefitsSection.copy2.map((copy, i) => (
            <p key={`continuing_benefits_copy2_${i}`}>{copy}</p>
          ))}
        </div>

        <div className="relative h-80 lg:col-span-5 lg:h-auto">
          <Image
            fill
            className="object-cover rounded-20"
            src="/images/AttachmentQuizResults/friends-happy-discussion.png"
            alt="Two friends engaged in a discussion looking visibly happy and smiling"
          />
        </div>
      </Section>

      <Section className="bg-blue-lightest">
        <Faq />
      </Section>
    </Page>
  )
}
