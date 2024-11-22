// core
import Image from 'next/image'
// components
import { PaymentOptions } from './PaymentOptions'
import { faCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(custom-layouts)/(no-nav)/dream-life/config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EExternalRoutes } from '@/utils/constants'

interface ICommunityTeaserProps {
  includePaymentOptions?: boolean
  teaserHeading?: string
  checkoutUrl?: EExternalRoutes
}

export const CommunityTeaser = ({
  includePaymentOptions = true,
  teaserHeading = TH.COMMUNITY.bullets.heading,
  checkoutUrl = EExternalRoutes.THINKIFIC_CHECKOUT_7_DAY_TRIAL,
}: ICommunityTeaserProps) => {
  return (
    <>
      <Image
        alt="A dark wave"
        className="w-full mt-10 -mb-1 lg:mt-0"
        src="/images/TrialHeadspace/community-bg.png"
        tabIndex={-1}
        width={1920}
        height={121}
      />

      <section className="w-full bg-black px-4 py-20">
        <div className="max-w-5xl text-center text-white mx-auto">
          <h2 className="max-w-xl mx-auto">{TH.COMMUNITY.heading}</h2>

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

                <p className="text-[#7B7B7B] mt-6">{card.copy}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-[70px]">
            <h2 className="text-center lg:text-left">{teaserHeading}</h2>

            <div className="flex flex-col space-y-11 text-left mt-10 md:space-x-10 md:space-y-0 md:flex-row md:mt-20">
              <div>
                <div className="flex row items-center space-x-6 lg:space-x-10">
                  <FontAwesomeIcon icon={faCheck} size="2x" />

                  <p className="text-lg">{TH.COMMUNITY.bullets.bullet1}</p>
                </div>

                <div className="flex row items-center space-x-6 mt-11 lg:space-x-10 lg:mt-14">
                  <FontAwesomeIcon icon={faCheck} size="2x" />

                  <p className="text-lg">{TH.COMMUNITY.bullets.bullet2} </p>
                </div>
              </div>

              <div>
                <div className="flex row items-center space-x-6 lg:space-x-10">
                  <FontAwesomeIcon icon={faCheck} size="2x" />

                  <p className="text-lg">{TH.COMMUNITY.bullets.bullet3} </p>
                </div>

                <div className="flex row items-center space-x-6 mt-11 lg:space-x-10 lg:mt-14">
                  <FontAwesomeIcon icon={faCheck} size="2x" />

                  <p className="text-lg">{TH.COMMUNITY.bullets.bullet4}</p>
                </div>
              </div>
            </div>
          </div>

          {includePaymentOptions && (
            <div className="mt-24">
              <PaymentOptions placement="bottom" checkoutUrl={checkoutUrl} />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
