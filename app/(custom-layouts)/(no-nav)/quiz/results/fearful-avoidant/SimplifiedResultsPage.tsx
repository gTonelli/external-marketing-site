// core
import Image from 'next/image'
import { cookies } from 'next/headers'
// components
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { List } from '@/components/List'
// config
import { SIMPLIFIED_RESULTS_CONFIG as CONFIG } from './config'
// libraries
import { faCheckCircle, faCircleSmall } from '@awesome.me/kit-545b942488/icons/classic/solid'

interface ISimplifiedResultsPageProps {
  configKey: 'fa' | 'faVariant' | 'ap'
}

export const SimplifiedResultsPage = ({ configKey }: ISimplifiedResultsPageProps) => {
  const config = CONFIG[configKey]
  const userFirstName = cookies().get('firstName')?.value
  const checkoutUrl = config.ctaURL

  return (
    <>
      <Section classNameInner="max-w-4xl mx-auto">
        <h1 className="text-primary mb-4">
          {userFirstName && configKey !== 'fa' ? `${userFirstName}!` : ''}
          {config.hero.header}
        </h1>

        <p className="mb-4">{config.hero.copy}</p>

        {config.hero.segway && <p className="max-w-3xl mx-auto mb-8">{config.hero.segway}</p>}

        <h2>
          {userFirstName ? `Congratulations ${userFirstName}!` : 'Congratulations!'}{' '}
          {config.hero.subheader}
        </h2>
      </Section>

      <Section className="!py-0">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>
              <VideoThumbnail
                srcUrl={config.heroVideo.videoSrc}
                thumbnailAlt={config.heroVideo.videoThumbnailAlt}
                thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
                type="default"
              />
            </div>

            <div className="!mx-0 mb-4 md:text-left md:!m-4 md:w-1/2">
              <p className="mb-2">
                <strong>{config.heroVideo.label}</strong>
              </p>

              <h2 className="mb-2 text-3xl">{config.heroVideo.heading}</h2>

              <p className="mb-2">{config.heroVideo.subheader}</p>

              {config.heroVideo.segway && <p className="mb-4">{config.heroVideo.segway}</p>}

              <p className="mb-4">
                <strong>{config.heroVideo.copy}</strong>
              </p>

              <ButtonCheckout href={checkoutUrl} label={config.heroVideo.ctaLabel} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="max-w-6xl mx-auto">
        {config.outcomes.segway1 && (
          <p className="max-w-3xl mx-auto mb-8">{config.outcomes.segway1}</p>
        )}

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="text-left">
            <h2 className="mb-4">{config.outcomes.header}</h2>

            {config.outcomes.copy.map((item, idx) => (
              <p key={`outcomes_${idx}`} className="mb-4">
                {item}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-center">
            <Image
              alt="Upset couple"
              width={1000}
              height={668}
              src="/images/DreamLifeResultsPage/hero.jpg"
            />
          </div>
        </div>

        {config.outcomes.segway2 && (
          <div className="max-w-3xl mx-auto mt-8">
            {config.outcomes.segway2.map((item, idx) => (
              <p key={`outcome_segway_2_${idx}`} className="mb-4">
                {item}
              </p>
            ))}
          </div>
        )}
      </Section>

      <Section>
        <h2 className="max-w-2xl mx-auto mb-8">{config.course.header}</h2>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              alt="Program image in a laptop with the lessons outlined"
              width={586}
              height={426}
              src={config.course.courseImageSrc}
            />
          </div>

          <div className="text-left">
            <List
              icon={faCheckCircle}
              iconSize="2x"
              className="mb-8"
              classNameIcon="!text-green-check"
              classNameListItems="mb-4"
              listItems={config.course.listItems}
            />

            <ButtonCheckout href={checkoutUrl} label={config.course.ctaLabel} />
          </div>
        </div>

        {config.course.segway && <p className="max-w-3xl mx-auto mt-8">{config.course.segway}</p>}
      </Section>

      <Section className="bg-blue-lightest py-8">
        <h2 className="text-left mb-8">{config.results.header}</h2>

        <div className="grid lg:grid-cols-2">
          <div className="text-left">
            <List
              icon={faCheckCircle}
              iconSize="2x"
              className="mb-8"
              classNameIcon="!text-green-check mr-4"
              classNameText="mt-2"
              classNameListItems="mb-4 last:mb-0"
              listItems={config.results.listItemsLeft}
            />
          </div>

          <div className="text-left !-mt-4 md:!mt-0">
            <List
              icon={faCheckCircle}
              iconSize="2x"
              className="mb-8"
              classNameIcon="!text-green-check mr-4"
              classNameText="mt-2"
              classNameListItems="mb-4"
              listItems={config.results.listItemsRight}
            />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-left mb-4">{config.bonus.header}</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="text-left">
            {config.bonus.programCopy.map((item, idx) => (
              <p key={`program_copy_${idx}`} className="mb-4">
                {item}
              </p>
            ))}

            <List
              icon={faCircleSmall}
              iconSize="xs"
              className="mb-4"
              classNameIcon="!text-black !mt-1 !mr-4"
              classNameListItems="mb-2"
              listItems={config.bonus.listItems}
            />

            {config.bonus.offerCopy.map((item, idx) => (
              <p key={`offer_copy_${idx}`} className="mb-4">
                {item}
              </p>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <Image
              alt="Special Bonus Mockup"
              width={581}
              height={307}
              src="/images/SimplifiedFAPage/special-bonus-mockup.jpg"
            />
          </div>
        </div>
      </Section>

      <Section className="max-w-3xl mx-auto">
        <h2>{config.testimonial.header}</h2>
      </Section>

      <CarouselTestimonialThinkific className="mt-8 mb-16" initialSlide={1} />

      <Section
        className="!max-w-full bg-[url('/images/pds-bg-vector.svg')] bg-right-bottom bg-no-repeat !bg-cover mx-auto !p-0"
        classNameInner="px-4 py-24 lg:py-36">
        <h2 className="mb-4">{config.footer.header}</h2>

        <h2 className="text-primary mb-4">{config.footer.pricing}</h2>

        <p className="max-w-xl text-xl mx-auto mb-8">
          <strong>{config.footer.disclaimer}</strong>
        </p>

        <ButtonCheckout href={checkoutUrl} label={config.footer.ctaLabel} />
      </Section>
    </>
  )
}
