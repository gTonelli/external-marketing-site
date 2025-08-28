'use client'
// core
import Link from 'next/link'
import { useEffect, useState } from 'react'
// components
import { Button } from '../Button'
import { IButtonDefaultProps } from './ButtonDefault'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'
// modules
import { Storage } from '@/modules/Storage'
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
  const [link, setLink] = useState<string>(href)

  useEffect(() => {
    const url = new URL(href)
    const firstName = Storage.get('userFirstName')
    const lastName = Storage.get('userLastName')
    const email = Storage.get('lastUserEmail')
    if (firstName) url.searchParams.set('first_name', firstName)
    if (lastName) url.searchParams.set('last_name', lastName)
    if (email) url.searchParams.set('email', email)

    setLink(url.toString())
  }, [href])

  return (
    // There is an issue with next/link and the Thinkific Checkout. If the user is logged in the browser enters an infinite loop.
    <Link className={children ? className : undefined} href={link} prefetch={false}>
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
