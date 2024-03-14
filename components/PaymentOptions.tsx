'use client'

// components
import { IDefaultProps } from '.'
import { Button } from './Button/Button'
import { Text } from './Text/Text'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(no-nav)/dream-life/config'
// libraries
import cx from 'classnames'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
import { EExternalRoutes } from '@/utils/constants'

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
