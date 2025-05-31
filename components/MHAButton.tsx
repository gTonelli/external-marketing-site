'use client'

// components
import { IButtonDefaultProps } from '@/components/Button/variants/ButtonDefault'
import { ButtonCheckout } from './Button/variants/ButtonCheckout'
// utils
import { externalRoutes } from '@/utils/constants'

export const MHAButton = ({ label }: IButtonDefaultProps) => {
  return (
    <ButtonCheckout
      className="px-4 xs:px-8"
      label={label ?? `START YOUR 14-DAY TRIAL`}
      href={externalRoutes.checkout14DayTrial}
    />
  )
}
