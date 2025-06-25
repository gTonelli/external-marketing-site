// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { CountdownTimer } from '@/components/CountDownTimer'
import { PaymentOptions } from '@/components/PaymentOptions'
import { UPSELL_PAGE_CONFIG as CONFIG } from './config'
import { List } from '@/components/List'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { externalRoutes } from '@/utils/constants'
import VideoTeaser from '@/components/Video/variants/VideoTeaser'
import { Articles } from '@/components/Articles'
import { CommunityTeaser } from '@/components/CommunityTeaser'
import { TestimonialSection } from '@/components/TestimonialSection'

export const metadata: Metadata = {
  title: 'Start the Next Step in Your Healing Journey | 7-Day Free Trial',
  description:
    'The next step in your healing journey: a 7‑Day Free Trial to The Personal Development School. Heal your attachment style and create lasting love risk‑free.',
  robots: 'noindex',
}

export default function DreamLifeUpsellPage() {
  const checkoutUrl = externalRoutes.checkout7DayTrial

  return (
    <Page page_name="Dreamlife Upsell Page" className="relative">
      <section className="text-center bg-purple-dark px-2">
        <h2 className="text-white pt-4 max-w-screen-lg mx-auto">{CONFIG.countdownBanner.header}</h2>

        <div className="pb-4">
          <CountdownTimer date={new Date(`2025-05-17T23:59:59-04:00`)} theme="dark" />
        </div>
      </section>

      <Section className="w-full text-center bg-pink-auxiliary pt-6 pb-10 px-4 lg:pt-22">
        <h1 className="max-w-xl leading-[50px] mx-auto mb-4">{CONFIG.hero.header}</h1>

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions className="!max-w-xl mx-auto lg:flex-col" configKey="dreamLifeUpsell" />
        </div>

        <Image
          className="w-full mx-auto sm:w-3/4 md:w-1/2 lg:hidden"
          src="/images/TrialHeadspace/hero-left-mockup.png"
          alt="hero-mockup-left"
          width={729}
          height={796}
          quality={100}
          sizes="100vw"
        />
      </Section>

      <Image
        className="hidden absolute w-1/2 top-60 lg:-left-56 lg:block xl:w-1/3 xl:-left-32 2xl:-left-44"
        src="/images/TrialHeadspace/hero-left-mockup.png"
        alt="hero-mockup-left"
        width={729}
        height={796}
        quality={100}
        sizes="100vw"
      />

      <Image
        className="hidden absolute w-1/2 top-60 lg:-right-56 lg:block xl:w-1/3 xl:-right-32"
        src="/images/TrialHeadspace/hero-right-mockup.png"
        alt="hero-mockup-right"
        width={656}
        height={708}
        quality={100}
        sizes="100vw"
      />

      <Section classNameInner="!max-w-5xl mx-auto">
        <div className="grid grid-cols-12 gap-4">
          {CONFIG.benefits.map((benefit, index) => (
            <>
              <div className="col-span-12 sm:col-span-3 mx-auto">
                <Image
                  className="w-[150px] h-[150px]"
                  src={`/images/TrialHeadspace/${benefit.image}`}
                  alt="attachment-style-benefits"
                  width={438}
                  height={453}
                />
              </div>

              <div className="flex col-span-12 flex-col justify-center sm:text-left sm:col-span-9 md:gap-4 md:flex-row md:items-center">
                <h3 className="md:flex-1">{benefit.header}</h3>

                <p className="md:flex-1">{benefit.copy}</p>
              </div>
            </>
          ))}
        </div>
      </Section>

      <Section classNameInner="grid gap-8 md:grid-cols-2">
        <div className="text-left">
          <h2>{CONFIG.features.header}</h2>

          <List
            className="my-8"
            classNameIcon="!text-primary"
            classNameListItems="mb-4"
            icon={faCircleCheck}
            listItems={CONFIG.features.listItems}
          />

          <p className="mb-8">{CONFIG.features.copy}</p>

          <ButtonCheckout href={checkoutUrl} label={CONFIG.features.ctaLabel} />
        </div>

        <div>
          <Image
            src="/images/TrialHeadspace/dreamlife-mockup.jpg"
            alt="dreamlife-mockup"
            width={1512}
            height={1173}
          />
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto !pb-0" classNameInner="!text-left !pb-0">
        <TestimonialSection />

        <div className="text-center">
          <h2 className="mt-8 mb-4">{CONFIG.snippets.header}</h2>

          <p className="mb-8">{CONFIG.snippets.copy}</p>

          <ButtonCheckout label={CONFIG.snippets.ctaLabel} href={checkoutUrl} />
        </div>
      </Section>

      <VideoTeaser />

      <Articles />

      <CommunityTeaser paymentOptionsConfigKey="dreamLifeUpsell" />
    </Page>
  )
}
