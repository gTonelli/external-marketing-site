// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { CountdownTimer } from '@/components/CountDownTimer'
import { PaymentOptions } from '@/components/PaymentOptions'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { List } from '@/components/List'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { faLightbulbGear } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// config
import { JULY_PROMO_SOMATIC_CONFIG as CONFIG } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// utils
import { externalRoutes } from '@/utils/constants'
// styles
import './style.css'

export const metadata: Metadata = {
  title: 'Self-Soothe Your Attachment Style with This Course!',
  description:
    'Sign up for our Release Emotions with Somatic Processing course to start self-soothing your attachment style and find peace and calm.',
  robots: 'noindex',
}

export default function JulyPromoSomaticCoursePage() {
  const checkoutUrl = externalRoutes.checkoutJuly2025PromoTrial

  return (
    <Page page_name="July Promo Somatic" className="relative">
      <section className="text-center bg-purple-dark px-2">
        <h2 className="text-white pt-4 max-w-screen-lg mx-auto">{CONFIG.hero.timerHeader}</h2>

        <div className="pb-4">
          <CountdownTimer date={new Date(`2025-05-17T23:59:59-04:00`)} theme="dark" />
        </div>
      </section>

      <section className="w-full text-center bg-pink-auxiliary pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <h1 className="max-w-xl leading-[50px] mx-auto mb-4">{CONFIG.hero.header}</h1>

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions
            showDisclaimer={false}
            className="!max-w-xl mx-auto lg:flex-col"
            configKey="dreamLifeSomatic"
          />
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
      </section>

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

      <Section>
        <p className="tracking-33">
          <strong>{CONFIG.course.label}</strong>
        </p>

        <h2>{CONFIG.course.header}</h2>

        <div className="grid gap-4 text-left mb-8 md:grid-cols-2">
          <div className="flex -mt-2 md:justify-end">
            <Image
              alt="Release Emotions with Somatic Processing course thumbnail"
              src={'/images/course-somatic-processing.jpg'}
              width={502}
              height={324}
            />
          </div>

          <div>
            {CONFIG.course.copy.map((item, idx) => (
              <p key={`course_copy_${idx}`}>{item}</p>
            ))}
          </div>
        </div>

        <ButtonCheckout href={checkoutUrl} label={CONFIG.course.ctaLabel} />

        <div className="max-w-3xl bg-pink-auxiliary text-left rounded-lg mx-auto mt-4 p-4">
          <p className="mb-0">
            <span>
              <FontAwesomeIcon className="text-primary mr-2" icon={faLightbulbGear} />
            </span>{' '}
            {CONFIG.course.highlight}
          </p>
        </div>
      </Section>

      <Section className="bg-white-secondary" classNameInner="!text-left md:px-24">
        <h2>{CONFIG.howTo.header}</h2>

        {CONFIG.howTo.copy1.map((item, idx) => (
          <p key={`howto_copy1_${idx}`}>{item}</p>
        ))}

        <List classNameIcon="mr-2" icon={faCheckCircle} listItems={CONFIG.howTo.listItems} />

        {CONFIG.howTo.copy2.map((item, idx) => (
          <p key={`howto_copy2_${idx}`}>{item}</p>
        ))}

        <ButtonCheckout href={checkoutUrl} label={CONFIG.howTo.ctaLabel} />

        <div className="bg-white text-left rounded-lg mt-4 p-4">
          <p className="mb-0">
            <span>
              <FontAwesomeIcon className="text-primary mr-2" icon={faLightbulbGear} />
            </span>{' '}
            {CONFIG.howTo.highlight}
          </p>
        </div>
      </Section>

      <Section classNameInner="!max-w-5xl mx-auto">
        <h2>{CONFIG.features.header}</h2>

        <p>{CONFIG.features.subheader}</p>

        <div className="grid gap-8 text-left md:grid-cols-2">
          <div>
            <List classNameIcon="mr-2" icon={faCheckCircle} listItems={CONFIG.features.listLeft} />
          </div>

          <div>
            <List classNameIcon="mr-2" icon={faCheckCircle} listItems={CONFIG.features.listRight} />
          </div>
        </div>

        <ButtonCheckout href={checkoutUrl} label={CONFIG.features.ctaLabel} />

        <div className="bg-pink-auxiliary text-left rounded-lg mt-4 p-4">
          <p className="mb-0">
            <span>
              <FontAwesomeIcon className="text-primary mr-2" icon={faLightbulbGear} />
            </span>{' '}
            {CONFIG.features.highlight}
          </p>
        </div>
      </Section>

      <Section className="bg-blue-lightest" classNameInner="!max-w-6xl mx-auto">
        <h2>{CONFIG.discover.header}</h2>

        <div className="grid gap-8 text-left md:grid-cols-2">
          <div>
            <List classNameIcon="mr-2" icon={faCheckCircle} listItems={CONFIG.discover.listLeft} />
          </div>

          <div>
            <List classNameIcon="mr-2" icon={faCheckCircle} listItems={CONFIG.discover.listRight} />
          </div>
        </div>
      </Section>

      <Section classNameInner="grid gap-8 md:grid-cols-2">
        <div className="text-left">
          <h2>{CONFIG.offer.header}</h2>

          <Image
            alt="Release Emotions with Somatic Processing course playing in a tablet"
            src={'/images/FlashSalePage/somatic-processing-tablet-mockup.png'}
            width={400}
            height={300}
          />
        </div>

        <div className="text-left">
          {CONFIG.offer.copy1.map((item, idx) => (
            <p key={`offer_copy1_${idx}`}>{item}</p>
          ))}

          <List classNameIcon="mr-2" icon={faCheckCircle} listItems={CONFIG.offer.listItems} />

          {CONFIG.offer.copy2.map((item, idx) => (
            <p key={`offer_copy2_${idx}`}>{item}</p>
          ))}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl bg-pink-auxiliary mx-auto p-6">
          <div className="flex justify-center mb-8">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <Image
                key={`headshot_${idx}`}
                className="!w-20 !h-20 bg-gray-500 border border-white rounded-full -m-2"
                alt="Headshot of a student"
                src={`/images/FlashSalePage/testimonial-headshot-${item}.jpg`}
                width={64}
                height={64}
              />
            ))}
          </div>

          <h2>
            <span className="text-primary">Over 40,000</span> student enrollments from more than 120
            countries worldwide
          </h2>
        </div>
      </Section>

      <Section classNameInner="!max-w-full !w-full">
        <h2>{CONFIG.testimonial.header}</h2>

        <p>{CONFIG.testimonial.subheader}</p>

        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>

      <Section
        className="!max-w-full bg-[url('/images/pds-bg-vector.svg')] bg-right-bottom bg-no-repeat !bg-cover mx-auto !p-0"
        classNameInner="px-4 py-24 lg:py-36">
        <h2>{CONFIG.footer.header}</h2>

        <h2 className="text-primary">{CONFIG.footer.subheader}</h2>

        <p>{CONFIG.footer.label}</p>

        <ButtonCheckout href={checkoutUrl} label={CONFIG.footer.ctaLabel} />
      </Section>
    </Page>
  )
}
