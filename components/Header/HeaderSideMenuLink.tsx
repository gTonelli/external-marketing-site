'use client'

import Link from 'next/link'
import { TLoggedInSideMenuLink } from './config'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGear } from '@awesome.me/kit-545b942488/icons/classic/solid'
import cx from 'classnames'
import { TUserData } from '@/utils/types'
import { getUserRoles } from '@/utils/functions'

interface IHeaderSideMenuLinkProps {
  userData: Pick<TUserData, 'firstName' | 'lastName' | 'avatar_url' | 'createdAt' | 'roles'>
  linkData: Pick<TLoggedInSideMenuLink, 'link' | 'icon'>
}

export const HeaderSideMenuLink = ({ userData, linkData }: IHeaderSideMenuLinkProps) => {
  if (!linkData.link) return null

  const roles = getUserRoles(userData.roles)

  const link = linkData.link(roles)

  return (
    <Link className="flex max-w-max !no-underline mb-3 items-center" href={link.link}>
      {link.text}

      {linkData.icon && <FontAwesomeIcon icon={linkData.icon} className="ml-2" />}
    </Link>
  )
}
