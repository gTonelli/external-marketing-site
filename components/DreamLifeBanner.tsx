// core
import Image from 'next/image'
// components
import { PaymentOptions } from './PaymentOptions'
import { CheckoutButton } from './CheckoutButton'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(custom-layouts)/(no-nav)/dream-life/config'
// utils
import { EExternalRoutes } from '@/utils/constants'

interface IDreamLifeBanner {
  fourteenDayFT?: boolean
  pageName?: string
}

export const DreamLifeBanner = ({ fourteenDayFT = false, pageName }: IDreamLifeBanner) => {
  const checkoutUrl = fourteenDayFT
    ? EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL
    : EExternalRoutes.THINKIFIC_CHECKOUT_7_DAY_TRIAL

  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full text-center bg-grey-7 pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <Image
          className="w-full mx-auto sm:w-3/4 md:w-1/2 lg:hidden"
          src="/images/TrialHeadspace/hero-left-mockup.png"
          alt="hero-mockup-left"
          width={729}
          height={796}
        />

        <h1 className="max-w-xl leading-[50px] mx-auto mb-4">
          {fourteenDayFT ? 'Step Into Your Dream Life & Relationships' : TH.HERO.heading}
        </h1>

        {fourteenDayFT && (
          <p className="max-w-xl tracking-33 font-bold text-xl mx-auto">
            YOUR ALL-IN-ONE PLATFORM FOR LOVE AND PERSONAL GROWTH
          </p>
        )}

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions
            className="lg:flex-col"
            checkoutUrl={checkoutUrl}
            fourteenDayFT={fourteenDayFT}
            pageName={pageName}
          />
        </div>
      </section>

      <Image
        className="hidden absolute w-1/2 top-20 lg:-left-56 lg:block xl:w-1/3 xl:-left-32 2xl:-left-44"
        src="/images/TrialHeadspace/hero-left-mockup.png"
        alt="hero-mockup-left"
        width={729}
        height={796}
      />

      <Image
        className="hidden absolute w-1/2 lg:-right-56 top-20 lg:block xl:w-1/3 xl:-right-32"
        src="/images/TrialHeadspace/hero-right-mockup.png"
        alt="hero-mockup-right"
        width={656}
        height={708}
      />

      <Image
        className="w-full"
        src="/images/TrialHeadspace/hero-bg.png"
        alt="hero-mockup"
        width={1120}
        height={88}
      />

      {/** DREAMLIFE SECTION  */}
      <section className="pt-4 lg:pt-0">
        <div className="max-w-5xl mx-4 lg:mx-auto">
          {TH.DREAM_LIFE.benefits.map((benefit, index) => (
            <div
              key={`benefits_${index}`}
              className="flex row items-center space-x-4 mb-1 mx-auto md:justify-center lg:justify-start lg:space-x-14 lg:mb-12">
              <Image
                className="w-[150px] h-[150px]"
                src={`/images/TrialHeadspace/${benefit.image}`}
                alt="attachment-style-benefits"
                width={438}
                height={453}
              />

              <div className="flex flex-col space-y-1 lg:flex-row lg:space-x-20">
                <h3 className="lg:w-56">{benefit.title}</h3>

                <p className="text-sm md:w-64 lg:w-72 lg:text-base">{benefit.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="max-w-5xl mx-4 lg:mx-auto">
          <div className="flex flex-col items-center space-y-14 mx-4 mt-20 md:text-center lg:flex-row lg:space-x-20 lg:space-y-0 lg:text-left">
            <div>
              <h2>{TH.DREAM_LIFE.heading}</h2>

              <p className="mt-6 lg:mt-11">{TH.DREAM_LIFE.copy}</p>

              <CheckoutButton
                className="mt-8 px-6 lg:mt-11"
                label="TRY FOR FREE"
                href={checkoutUrl}
              />
            </div>

            <Image
              className="md:w-1/2"
              src="/images/TrialHeadspace/dreamlife-mockup.jpg"
              alt="dreamlife-mockup"
              width={1512}
              height={1173}
            />
          </div>
        </div>
      </section>
    </>
  )
}
