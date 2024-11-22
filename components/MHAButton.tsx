'use client'

// components
import { IButtonDefaultProps } from '@/components/Button/variants/ButtonDefault'
import { CheckoutButton } from './CheckoutButton'
// utils
import { EExternalRoutes } from '@/utils/constants'

export const MHAButton = ({ label }: IButtonDefaultProps) => {
  return (
    <CheckoutButton
      className="px-4 xs:px-8"
      label={label ?? `START YOUR 14-DAY TRIAL`}
      href={EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL}
    />
  )
}
