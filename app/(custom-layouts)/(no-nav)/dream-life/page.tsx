'use client'
//components
import { Button } from '@/components/Button/Button'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { TestimonialSection } from '@/components/TestimonialSection'
import { Page } from '@/components/Page'
import { Video } from '@/components/Video/Video'
import { Articles } from '@/components/Articles'
import { CommunityTeaser } from '@/components/CommunityTeaser'
import { PaymentOptions } from '@/components/PaymentOptions'
// config
import { TRIAL_HEADSPACE as TH } from './config'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
import { EExternalRoutes } from '@/utils/constants'

export default function DreamLifePage() {
  const page_name = '7 Day Free Trial Headspace'

  const onGoToCheckout = (event: React.MouseEvent<Element, MouseEvent>) => {
    window.location.assign(EExternalRoutes.THINKIFIC_CHECKOUT_7_DAY_TRIAL)
  }

  return (
    <Page className="relative w-full overflow-hidden" page_name="7 Day Free Trial Headspace">
      {/**HERO SECTION */}
      <section className="w-full text-center bg-grey-7 pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <Image
          className="w-full mx-auto sm:w-3/4 md:w-1/2 lg:hidden"
          src="TrialHeadspace/hero-left-mockup.png"
          alt="hero-mockup-left"
        />

        <Text.Heading
          className="max-w-[304px] !text-h1 leading-[50px] mx-auto"
          content={TH.HERO.heading}
        />

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions className="lg:flex-col" placement="top" />
        </div>
      </section>

      <Image
        className="hidden absolute w-1/2 top-20 lg:-left-56 lg:block xl:w-1/3 xl:-left-32 2xl:-left-44"
        src="TrialHeadspace/hero-left-mockup.png"
        alt="hero-mockup-left"
      />

      <Image
        className="hidden absolute w-1/2 lg:-right-56 top-20 lg:block xl:w-1/3 xl:-right-32"
        src="TrialHeadspace/hero-right-mockup.png"
        alt="hero-mockup-right"
      />

      <Image className="w-full" src="TrialHeadspace/hero-bg.png" alt="hero-mockup" />

      {/** DREAMLIFE SECTION  */}
      <section className="pt-4 lg:pt-0">
        <div className="max-w-5xl mx-4 lg:mx-auto">
          {TH.DREAM_LIFE.benefits.map((benefit, index) => (
            <div
              key={`benefits_${index}`}
              className="flex row items-center space-x-4 mb-1 mx-auto md:justify-center lg:justify-start lg:space-x-14 lg:mb-12">
              <Image
                className="w-[150px] h-[150px]"
                src={`TrialHeadspace/${benefit.image}`}
                alt="attachment-style-benefits"
              />

              <div className="flex flex-col space-y-1 lg:flex-row lg:space-x-20">
                <Text.Heading className="lg:w-56" content={benefit.title} size={3} />

                <Text.Paragraph
                  className="text-sm md:w-64 lg:w-72 lg:text-base"
                  content={benefit.copy}
                />
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center space-y-14 mx-4 mt-20 md:text-center lg:flex-row lg:space-x-20 lg:space-y-0 lg:text-left">
            <div>
              <Text.Heading content={TH.DREAM_LIFE.heading} />

              <Text.Paragraph className="mt-6 lg:mt-11" content={TH.DREAM_LIFE.copy} />

              <Button
                className="mt-8 px-6 lg:mt-11"
                label="TRY FOR FREE"
                onClick={onGoToCheckout}
              />
            </div>

            <Image
              className="md:w-1/2"
              src="TrialHeadspace/dreamlife-mockup.jpg"
              alt="dreamlife-mockup"
            />
          </div>
        </div>
      </section>

      {/**TESTIMONIAL*/}
      <section className="max-w-4xl mx-auto px-4 pt-9 lg:pt-[102px]">
        <TestimonialSection />

        <div className="text-center">
          <Text.Heading className="mt-14 lg:mt-22" content="Take a Moment For Yourself" size={1} />

          <Text.Paragraph
            className="mt-4"
            content="Explore some snippets of our most popular courses from each of the categories below!"
          />

          <Button
            className="text-black bg-blue mt-8"
            label="TRY FOR FREE"
            onClick={onGoToCheckout}
          />
        </div>
      </section>

      <Video.Teaser />

      <Articles />

      <CommunityTeaser />
    </Page>
  )
}
