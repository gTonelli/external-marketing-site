// components
import { Button } from './Button/Button'
import { IButtonDefaultProps } from './Button/variants/ButtonDefault'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { TStyle } from '@/utils/types'

interface ICheckoutButtonProps extends IButtonDefaultProps {
  children?: React.ReactNode
  href?: string
  theme?: 'primary' | 'secondary'
}

export const CheckoutButton = ({
  children,
  className,
  href = EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION,
  label = 'SIGN UP NOW',
  theme = 'primary',
}: ICheckoutButtonProps) => {
  return (
    // There is an issue with next/link and the Thinkific Checkout. If the user is logged in the browser enters an infinite loop.
    <a href={href}>
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
          label={label}
        />
      )}
    </a>
  )
}
