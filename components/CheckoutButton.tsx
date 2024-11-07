'use client'
// components
import { Button } from './Button/Button'
import { IButtonDefaultProps } from './Button/variants/ButtonDefault'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'
// utils
import { EExternalRoutes } from '@/utils/constants'
import Mixpanel from '@/modules/Mixpanel'
import { useCallback, useContext } from 'react'
import { PageContext } from '@/utils/contexts'
import Link from 'next/link'

interface ICheckoutButtonProps extends IButtonDefaultProps {
  children?: React.ReactNode
  href?: string
  theme?: 'primary' | 'secondary'
  /** onClick listener function */
  onClick?: () => void
}

export const CheckoutButton = ({
  children,
  className,
  href = EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION,
  label = 'SIGN UP NOW',
  theme = 'primary',
  onClick,
}: ICheckoutButtonProps) => {
  const { page_name } = useContext(PageContext)

  const _onClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      Mixpanel.track.ButtonClicked({
        button_label: e.currentTarget.innerText,
        page_name,
      })

      onClick?.()
    },
    [page_name]
  )

  return (
    // There is an issue with next/link and the Thinkific Checkout. If the user is logged in the browser enters an infinite loop.
    <Link href={href}>
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
          onClick={_onClick}
        />
      )}
    </Link>
  )
}
