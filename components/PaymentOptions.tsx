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
  checkoutUrl?: EExternalRoutes
  placement?: 'top' | 'bottom'
}

export const PaymentOptions = ({
  className,
  checkoutUrl,
  placement = 'top',
}: IPaymentOptionsProps) => {
  return (
    <div className={cx(`flex flex-col space-y-4 lg:justify-between items-center`, className)}>
      <div className="relative max-w-[474px] flex flex-row items-center space-x-5 text-white bg-primary rounded-[30px] p-6 cursor-pointer lg:px-7 lg:pt-7 lg:pb-5">
        <p className="absolute -top-5 font-bold text-black bg-blue rounded-10 py-2 px-4">
          BEST VALUE
        </p>

        <div className="text-left">
          <p className="tracking-33 font-bold">{TH.HERO.offer.type}</p>

          <h2 className="mt-3">{TH.HERO.offer.title}</h2>

          <p
            className={`max-w-[336px] !text-sm mt-4 lg:block ${
              placement === 'bottom' && 'hidden lg:block'
            }`}>
            {TH.HERO.offer.copy}
          </p>
        </div>
      </div>

      <CheckoutButton
        className="w-44 !font-bold border-none mt-4 lg:mt-10"
        label="TRY FOR FREE"
        href={checkoutUrl}
      />
    </div>
  )
}
