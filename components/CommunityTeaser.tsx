'use client'

import Mixpanel from '@/modules/Mixpanel'
import { EExternalRoutes } from '@/utils/constants'
import { IDefaultProps } from '.'
import { Button } from './Button/Button'
import { Icon } from './Icon'
import { Image } from './Image'
import { Text } from './Text/Text'
import { TRIAL_HEADSPACE as TH } from '@/app/(default-layout)/dream-life/config'
import cx from 'classnames'

interface ICommunityTeaserProps {
  includePaymentOptions?: boolean
}

export const CommunityTeaser = ({ includePaymentOptions = true }: ICommunityTeaserProps) => {
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

          {includePaymentOptions && (
            <div className="mt-24">
              <PaymentOptions placement="bottom" />
            </div>
          )}
        </div>
      </section>
    </>
  )
}

interface IPaymentOptionsProps extends IDefaultProps {
  placement?: string
}

export const PaymentOptions = ({ className, placement = 'top' }: IPaymentOptionsProps) => {
  const onSubmit = () => {
    Mixpanel.track.ButtonClicked({
      button_label: 'TRY FOR FREE',
      page_name: '7 Day Free Trial Headspace',
    })

    window.location.assign(EExternalRoutes.THINKIFIC_CHECKOUT_7_DAY_TRIAL)
  }

  return (
    <div className={cx(`flex flex-col space-y-4 lg:justify-between items-center`, className)}>
      <div
        className="relative max-w-[474px] flex flex-row items-center space-x-5 text-white bg-primary rounded-[30px] p-6 cursor-pointer lg:px-7 lg:pt-7 lg:pb-5"
        onClick={onSubmit}>
        <Text.Paragraph
          className="absolute -top-5 font-bold text-black bg-blue rounded-10 py-2 px-4"
          content="BEST VALUE"
        />

        <div className="text-left">
          <Text.Paragraph
            className="font-bold"
            content={TH.HERO.offer.type}
            spacing="tracking-0.325"
          />

          <Text.Heading className="mt-3" content={TH.HERO.offer.title} />

          <Text.Paragraph
            className={`max-w-[336px] !text-sm mt-4 lg:block ${
              placement === 'bottom' && 'hidden lg:block'
            }`}
            content={TH.HERO.offer.copy}
          />
        </div>
      </div>

      <Button
        className="w-44 !font-bold border-none mt-4 lg:mt-10"
        label="TRY FOR FREE"
        onClick={onSubmit}
      />
    </div>
  )
}
