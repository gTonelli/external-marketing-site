'use client'

import { PaymentOptions } from '@/app/(default-layout)/dream-life/page'
import { Icon } from './Icon'
import { Image } from './Image'
import { Text } from './Text/Text'
import { TRIAL_HEADSPACE as TH } from '@/app/(default-layout)/dream-life/config'

interface ICommunityTeaserProps {
  includePaymentOptions?: boolean
  onOptionSelected?: (option: string, checked: boolean) => void
}

export const CommunityTeaser = ({
  includePaymentOptions = true,
  onOptionSelected,
}: ICommunityTeaserProps) => {
  return (
    <>
      <Image className="w-full mt-10 -mb-1 lg:mt-0" src="TrialHeadspace/community-bg.png" />
      <section className="w-full bg-black px-4 py-20">
        <div className="max-w-5xl text-center text-white mx-auto">
          <Text.Heading className="max-w-xl mx-auto" content={TH.COMMUNITY.heading} size={1} />

          <div className="flex row justify-between space-x-4 mt-12 overflow-x-auto scrollbar-hide lg:mt-15">
            {TH.COMMUNITY.cards.map((card, index) => (
              <div
                key={`card_${index}`}
                className="min-w-52 bg-white rounded-[30px] px-8 py-4 lg:w-60 lg:py-10 lg:px-9">
                <div className="min-w-28 min-h-20 mx-auto">
                  <Image className="w-16 h-16 mx-auto" src={`TrialHeadspace/${card.img}`} />
                </div>

                <Text.Heading className="text-black mt-3" content={card.stat} />

                <Text.Paragraph className="text-[#7B7B7B] mt-6" content={card.copy} />
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-[70px]">
            <Text.Heading
              className="text-center lg:text-left"
              content={TH.COMMUNITY.bullets.heading}
              size={1}
            />

            <div className="flex flex-col space-y-11 text-left mt-10 md:space-x-10 md:space-y-0 md:flex-row md:mt-20">
              <div>
                <div className="flex row items-center space-x-6 lg:space-x-10">
                  <Icon name="check" size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet1} />
                </div>

                <div className="flex row items-center space-x-6 mt-11 lg:space-x-10 lg:mt-14">
                  <Icon name="check" size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet2} />
                </div>
              </div>

              <div>
                <div className="flex row items-center space-x-6 lg:space-x-10">
                  <Icon name="check" size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet3} />
                </div>

                <div className="flex row items-center space-x-6 mt-11 lg:space-x-10 lg:mt-14">
                  <Icon name="check" size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet4} />
                </div>
              </div>
            </div>
          </div>

          {includePaymentOptions && onOptionSelected && (
            <div className="mt-24">
              <PaymentOptions placement="bottom" onOptionSelected={onOptionSelected} />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
