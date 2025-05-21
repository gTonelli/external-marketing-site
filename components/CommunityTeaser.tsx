// core
import Image from 'next/image'
// components
import { PaymentOptions, TPaymentOptionsConfigKey } from './PaymentOptions'
import { faCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(custom-layouts)/(no-nav)/dream-life/config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface ICommunityTeaserProps {
  classNamePaymentOptions?: string
  includeBgImage?: boolean
  includePaymentOptions?: boolean
  sectionHeading?: string
  teaserHeading?: string
  paymentOptionsConfigKey: TPaymentOptionsConfigKey
  communityBullets?: string[]
}

export const CommunityTeaser = ({
  classNamePaymentOptions,
  includeBgImage = false,
  includePaymentOptions = true,
  sectionHeading = TH.COMMUNITY.heading,
  teaserHeading = TH.COMMUNITY.subheading,
  paymentOptionsConfigKey,
  communityBullets,
}: ICommunityTeaserProps) => {
  const communityBulletsCopy = communityBullets || TH.COMMUNITY.bullets

  return (
    <section className="relative w-full bg-black px-4 py-20">
      {includeBgImage && (
        <Image
          className="absolute w-full h-full top-0 left-0 z-0 opacity-30"
          src="/images/TrialHeadspace/snowflakes-bg.webp"
          alt="hero-mockup"
          width={3000}
          height={2000}
        />
      )}

      <div className="relative max-w-5xl text-center text-white mx-auto">
        <h2 className="max-w-3xl mx-auto">{sectionHeading}</h2>

        <div className="flex row justify-between space-x-4 mt-12 overflow-x-auto scrollbar-hide lg:mt-15">
          {TH.COMMUNITY.cards.map((card, index) => (
            <div
              key={`card_${index}`}
              className="min-w-52 bg-white rounded-[30px] px-8 py-4 lg:w-60 lg:py-10 lg:px-9">
              <div className="min-w-28 min-h-20 mx-auto">
                <Image
                  alt={card.alt}
                  className="w-16 h-16 mx-auto"
                  src={`/images/TrialHeadspace/${card.img}`}
                  width={64}
                  height={64}
                />
              </div>

              <h2 className="text-black mt-3">{card.stat}</h2>

              <p className="text-black mt-6">{card.copy}</p>
            </div>
          ))}
        </div>

        <div className="text-left mt-12 lg:mt-[70px]">
          <h2 className="mb-8">{teaserHeading}</h2>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {communityBulletsCopy.map((bullet, idx) => (
              <div key={`community_perk_${idx}`} className="flex items-center space-x-6">
                <FontAwesomeIcon icon={faCheck} size="2x" />

                <p className="text-lg">
                  {paymentOptionsConfigKey === 'dreamLifeFreeCourse' && idx === 3
                    ? 'Use the Needs Course anytime you want to rediscover your needs during any life stage.'
                    : bullet}
                </p>
              </div>
            ))}
          </div>
        </div>

        {includePaymentOptions && (
          <div className="mt-24">
            <PaymentOptions
              className={classNamePaymentOptions}
              configKey={paymentOptionsConfigKey}
              placement="bottom"
            />
          </div>
        )}
      </div>
    </section>
  )
}
