'use client'

// components
import Link from 'next/link'
import { Button } from './Button/Button'
import { IButtonDefaultProps } from './Button/variants/ButtonDefault'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { useCheckoutSplitTest } from '@/utils/hooks'

export const CheckoutButton = ({ className, label = 'SIGN UP NOW' }: IButtonDefaultProps) => {
  const { checkoutLink } = useCheckoutSplitTest({ userStyle: 'fa', trafficRatio: 0.2 })

  return (
    <a href={checkoutLink || EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}>
      <Button
        className={two(
          cx(
            'bg-gradient-to-b from-purple-medium to-purple-dark border-none hover:!text-white',
            className
          )
        )}
        label={label}
      />
    </a>
  )
}
