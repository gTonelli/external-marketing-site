'use client'
// core
import Link from 'next/link'
// components
import { Button } from '../Button'
import { IButtonDefaultProps } from './ButtonDefault'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'
// utils
import { externalRoutes } from '@/utils/constants'

export interface IButtonCheckoutProps extends IButtonDefaultProps {
  children?: React.ReactNode
  href?: string
  theme?: 'primary' | 'secondary'
  /** onClick listener function */
  onClick?: () => void
}

export const ButtonCheckout = ({
  children,
  className,
  href = externalRoutes.checkoutRegularSubscription,
  label = 'SIGN UP NOW',
  theme = 'primary',
  onClick,
  mpProps,
}: IButtonCheckoutProps) => {
  return (
    // There is an issue with next/link and the Thinkific Checkout. If the user is logged in the browser enters an infinite loop.
    <Link className={children ? className : undefined} href={href} prefetch={false}>
      {children || (
        <Button
          className={two(
            cx(
              theme === 'secondary'
                ? 'bg-gradient-to-b from-purple-medium to-purple-dark border-none hover:!text-white'
                : '',
              className
            )
          )}
          mpProps={mpProps}
          label={label}
          onClick={onClick}
        />
      )}
    </Link>
  )
}
