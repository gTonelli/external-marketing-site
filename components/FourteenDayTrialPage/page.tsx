// core
import Image from 'next/image'
// components
import { Page } from '../Page'
import { Section } from '../Section'
import { CountdownTimer } from '../CountDownTimer'
import { ButtonCheckout } from '../Button/variants/ButtonCheckout'
import { VideoYoutube } from '../Video/variants/VideoYoutube'
import { List } from '../List'
import { SocialProofBar } from '../SocialProof/SocialProofBar'
import { CarouselTestimonialThinkific } from '../Carousel/variants/CarouselTestimonialThinkific'
import { CarouselPromotionCourses } from '../Carousel/variants/CarouselPromotionCourses'
import { PDS14dftBreakthrough, PDS14dftTestimonialVideo, ValentinesFAQs } from '../SpecialPromotion'
import { Faq } from '../Faq/Faq'
import { faStar } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// modules
import { Pages } from '@/modules/Mixpanel'
// config
import { FOURTEEN_DAY_TRIAL_CONFIG as CONFIG } from './config'
// utils
import { externalRoutes } from '@/utils/constants'
// styles
import '@/styles/default-styles.css'

interface FourteenDayTrialPageProps {
  page_name: Pages
  configKey: 'black-friday'
}

export const FourteenDayTrialPage = ({ page_name, configKey }: FourteenDayTrialPageProps) => {
  const checkoutUrl = externalRoutes.checkout14DayTrial

  return (
    <Page page_name={page_name}>
      <section className="text-center bg-purple-dark px-2">
        <h2 className="text-white pt-4 max-w-screen-lg mx-auto">{CONFIG[configKey].timer.title}</h2>

        <div className="pb-4">
          <CountdownTimer date={new Date(`2025-05-17T23:59:59-04:00`)} theme="dark" />
        </div>
      </section>

      <Section
        className="bg-gradient-to-b from-blue-lightest to-white"
        classNameInner="!max-w-4xl mx-auto">
        <h1 className="text-primary">{CONFIG[configKey].banner.title}</h1>

        <p className="text-xl">{CONFIG[configKey].banner.subheader}</p>

        {CONFIG[configKey].banner.copy.map((item, index) => (
          <p key={`banner_copy_${index}`}>{item}</p>
        ))}

        <ButtonCheckout href={checkoutUrl} label={CONFIG[configKey].banner.ctaLabel} />

        <p>{CONFIG[configKey].banner.disclaimer}</p>
      </Section>

      <Section>
        <div className="mb-6 lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="w-full bg-white rounded-2xl shadow-xl p-4 mx-auto">
            <VideoYoutube
              playInline
              classNameThumbnail="w-full"
              videoId={'Y9i01V8P8_c'}
              thumbnail="/images/AttachmentQuizResults/thais-writing.jpg"
              thumbnailAlt={`Thais Gibson sitting at a desk smiling and filling in a workbook.`}
            />
          </div>

          <div className="text-left ">
            {CONFIG.problems.copy.map((item, index) => (
              <p key={`problems_copy_${index}`} className="mt-4">
                {item}
              </p>
            ))}
          </div>
        </div>

        <ButtonCheckout href={checkoutUrl} label={CONFIG[configKey].banner.ctaLabel} />

        <p>{CONFIG[configKey].banner.disclaimer}</p>
      </Section>

      <Section className="text-white bg-black-secondary">
        <h2>{CONFIG.breakthrough.title}</h2>

        <p className="max-w-4xl tracking-33 mx-auto">{CONFIG.breakthrough.subtitle}</p>

        <div className="text-left mt-8 lg:grid lg:grid-cols-2 lg:gap-4">
          <div>
            {CONFIG.breakthrough.copy1.map((item, index) => (
              <p key={`breakthrough_copy1_${index}`} className="mb-8">
                {item}
              </p>
            ))}
          </div>

          <div>
            <List
              classNameIcon="!text-2xl text-yellow"
              classNameListItems="font-bold lg:!pl-7"
              classNameText="lg:pl-3"
              icon={faStar}
              listItems={CONFIG.breakthrough.list}
            />
          </div>
        </div>

        <SocialProofBar />

        <h2>{CONFIG.breakthrough.title2}</h2>

        <div className="text-left lg:grid lg:grid-cols-3 lg:gap-4 lg:items-stretch">
          <div className="lg:col-span-2">
            {CONFIG.breakthrough.copy2.map((item, index) => (
              <p key={`breakthrough_copy2_${index}`}>{item}</p>
            ))}

            <List
              classNameIcon="!text-white"
              classNameListItems="font-bold"
              icon={faCheckCircle}
              listItems={CONFIG.breakthrough.list2}
            />
          </div>

          <div className="flex lg:justify-end">
            <Image
              alt="a woman hugging herself"
              className="rounded-20 w-full h-full object-contain lg:w-auto lg:h-auto"
              width={656}
              height={714}
              src="/images/BlackFridayPage/mha-woman-hugging-herself.jpg"
            />
          </div>
        </div>

        <div className="bg-white text-black rounded-2xl my-4 p-4">
          <p className="mb-0">{CONFIG.breakthrough.copy3}</p>
        </div>

        <ButtonCheckout href={checkoutUrl} label="JOIN & TRANSFORM" />
      </Section>

      <Section className="!w-full !max-w-full !p-0 my-8" classNameInner="!max-w-full">
        <h2>{CONFIG.testimonials.title}</h2>

        <CarouselTestimonialThinkific
          initialSlide={1}
          classNameCard="!from-white-secondary !to-white-secondary"
        />
      </Section>

      <Section className="bg-blue-lightest">
        <h2>{CONFIG.featureOffers.title}</h2>

        {CONFIG.featureOffers.features.map((item, index) => (
          <div
            key={`feature_offers_${index}`}
            className="bg-white text-left rounded-2xl shadow-xl p-4 mb-6 lg:grid lg:grid-cols-2 lg:gap-4 lg:p-6">
            <div className="flex flex-col">
              <p className="tracking-33 text-primary">
                <strong>{item.title}</strong>
              </p>

              <Image
                className="justify-self-end"
                alt={item.imageAlt}
                src={item.image}
                width={450}
                height={324}
                quality={100}
                sizes="100vw"
              />
            </div>

            <div>
              {item.copy1 &&
                item.copy1.map((item, index) => (
                  <p key={`feature_offers_copy1_${index}`}>{item}</p>
                ))}

              {item.list && (
                <List
                  classNameIcon="!text-primary mt-1"
                  icon={faCheckCircle}
                  listItems={item.list}
                />
              )}

              {item.copy2 &&
                item.copy2.map((item, index) => (
                  <p key={`feature_offers_copy2_${index}`}>{item}</p>
                ))}
            </div>
          </div>
        ))}

        <ButtonCheckout href={checkoutUrl} label="START YOUR 14-DAY TRIAL NOW!" />

        <p>{CONFIG[configKey].banner.disclaimer}</p>
      </Section>

      <CarouselPromotionCourses
        className="!-mt-8"
        title="Get Instant Access to On-Demand Courses at The Personal Development School"
        copy="Try our best-selling and most powerful courses that have helped thousands of students break their destructive habits, build their self-esteem, become securely attached, and transform their lives from the inside out."
      />

      <Section classNameInner="max-w-4xl mx-auto lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <Image
            src="/images/BlackFridayPage/thais-portrait.webp"
            alt="Thais Gibson portrait"
            className="w-full h-auto"
            width={450}
            height={324}
            quality={100}
            sizes="100vw"
          />
        </div>

        <div className="text-left">
          <h2>{CONFIG.thaisIntro.title}</h2>

          {CONFIG.thaisIntro.copy.map((item, index) => (
            <p key={`thais_intro_copy_${index}`}>{item}</p>
          ))}
        </div>
      </Section>

      <Section className="bg-primary-light-50">
        <h2>{CONFIG.mentalHealth.title}</h2>

        <p>{CONFIG.mentalHealth.subtitle}</p>

        <div className="mb-6 lg:grid lg:grid-cols-4 lg:gap-4">
          {CONFIG.mentalHealth.questions.map((item, index) => (
            <div key={`mental_health_question_${index}`}>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto mb-4">
                <FontAwesomeIcon className="text-purple-dark text-4xl" icon={item.icon} />
              </div>

              <p>{item.question}</p>
            </div>
          ))}
        </div>

        {CONFIG.mentalHealth.copy.map((item, index) => (
          <p key={`mental_health_copy_${index}`}>{item}</p>
        ))}

        <ButtonCheckout href={checkoutUrl} label="SIGN UP & PUT YOURSELF FIRST!" />

        <p>{CONFIG[configKey].banner.disclaimer}</p>
      </Section>

      <PDS14dftBreakthrough isNewVersion />

      <PDS14dftTestimonialVideo isNewVersion className="!max-w-4xl mx-auto" />

      <Faq className="!max-w-4xl mx-auto" faq={ValentinesFAQs} />
    </Page>
  )
}
