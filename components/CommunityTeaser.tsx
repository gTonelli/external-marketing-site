// core
import Image from 'next/image'
// components
import { PaymentOptions, TPaymentOptionsConfigKey } from './PaymentOptions'
import { faCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(custom-layouts)/(no-nav)/dream-life/config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialProofStatistics } from './SocialProof/SocialProofStatistics'

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
        <SocialProofStatistics />

        <div className="mt-12 lg:mt-[70px]">
          <h2 className="text-center mb-8">{teaserHeading}</h2>

          <div className="grid grid-cols-1 gap-8 text-left lg:grid-cols-2">
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
              theme="dark"
            />
          </div>
        )}
      </div>
    </section>
  )
}
