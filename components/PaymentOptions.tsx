// components
import { IDefaultProps } from '.'
import { CheckoutButton } from './CheckoutButton'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(custom-layouts)/(no-nav)/dream-life/config'
// libraries
import cx from 'classnames'
// utils
import { EExternalRoutes } from '@/utils/constants'

interface IPaymentOptionsProps extends IDefaultProps {
  fourteenDayFT?: boolean
  checkoutUrl?: EExternalRoutes
  placement?: 'top' | 'bottom'
  pageName?: string
}

export const PaymentOptions = ({
  className,
  checkoutUrl,
  fourteenDayFT = false,
  placement = 'top',
  pageName,
}: IPaymentOptionsProps) => {
  return (
    <div className={cx(`flex flex-col space-y-4 lg:justify-between items-center`, className)}>
      <div className="relative max-w-[474px] flex flex-row items-center space-x-5 text-white bg-primary rounded-[30px] p-6 lg:px-7 lg:pt-7 lg:pb-5">
        <p className="absolute -top-5 font-bold text-black bg-blue rounded-10 py-2 px-4">
          {fourteenDayFT ? pageName + ' OFFER' : 'BEST VALUE'}
        </p>

        <div className="text-left">
          <p className="tracking-33 font-bold">
            {fourteenDayFT ? 'GET UNLIMITED ACCESS' : TH.HERO.offer.type}
          </p>

          <h2 className="mt-3">{fourteenDayFT ? '14-Day Free Trial' : TH.HERO.offer.title}</h2>

          <p
            className={`max-w-[336px] mt-4 lg:block ${
              placement === 'bottom' && 'hidden lg:block'
            }`}>
            {fourteenDayFT
              ? 'Unlock 60+ Courses, Personalized Tools, and Expert Guidance to Experience Breakthroughs, Overcome Relationship Challenges, and Achieve Personal Goals'
              : TH.HERO.offer.copy}
          </p>
        </div>
      </div>

      <CheckoutButton
        className="w-fit !font-bold border-none p-4 mt-4 mb-4 lg:mt-10"
        label={fourteenDayFT ? 'START YOUR 14-DAY FREE TRIAL' : 'TRY FOR FREE'}
        href={checkoutUrl}
      />

      {fourteenDayFT && (
        <p className="max-w-xl text-gray-500 mx-auto">
          *$67.00/month after your free trial. Cancel any time before your trial ends to avoid being
          charged. This offer ends soon!*
        </p>
      )}
    </div>
  )
}
