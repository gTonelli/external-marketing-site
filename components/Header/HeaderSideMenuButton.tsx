'use client'

// core
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// components
import { Button } from '../Button/Button'
import { HeaderSideMenuAccordion } from './HeaderSideMenuAccordion'
// config
import { LoggedInSideMenuLinks } from './config'
// libraries
import { faChevronDown, faSignOut } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
// styles
import './style.css'
// utils
import { externalRoutes } from '@/utils/constants'
import { TUserData } from '@/utils/types'

export const HeaderSideMenuButton = ({
  userData,
}: {
  userData?: Pick<TUserData, 'firstName' | 'lastName' | 'avatar_url' | 'createdAt' | 'roles'>
}) => {
  const setSideMenuIsOpen = () => {
    const sideMenu = document.querySelector('#header__side-menu')
    const sideMenuOverlay = document.querySelector('#header__side-menu-overlay')
    if (sideMenu && sideMenuOverlay) {
      sideMenu.classList.add('right-0')
      sideMenu.classList.remove('-right-full')
      sideMenuOverlay.classList.add('block')
      sideMenuOverlay.classList.remove('hidden')
    }
  }

  return (
    <div className="min-w-[108px] ml-auto text-right">
      {userData && userData.firstName && (
        <div className="relative header-side-menu-button text-left">
          <div className="cursor-pointer gap-2.5 hidden lg:flex items-center justify-center border-2 border-primary rounded-4xl bg-white py-2 px-4 my-2 text-decoration-none">
            <Image
              alt="avatar"
              src={parseAvatarUrl(userData.avatar_url)}
              className="rounded-full mx-[5px]"
              width={32}
              height={32}
            />

            <span className="font-bold">{userData.firstName}</span>

            <FontAwesomeIcon
              icon={faChevronDown}
              className="header-side-menu-button__chevron-down text-primary"
              size="xl"
            />
          </div>

          <div className="floating-menu absolute top-full -left-28 bg-white shadow-centered-card p-5 w-[340px] rounded-2xl z-50">
            <div>
              <h3 className="mb-0">Welcome, {userData.firstName}!</h3>

              <p className="mb-4">Member since {dayjs(userData.createdAt).format('MMM D, YYYY')}</p>
            </div>

            <ul>
              <HeaderSideMenuAccordion
                userData={userData}
                linkData={LoggedInSideMenuLinks.accountSettings}
              />

              <li className="mb-2">
                <Link
                  className="flex items-center !no-underline"
                  href={`${process.env.NEXT_PUBLIC_THINKIFIC_URL}/users/sign_out`}>
                  Sign Out <FontAwesomeIcon icon={faSignOut} className="ml-2" />
                </Link>
              </li>

              <div id="membership-change-upgrade">
                <Button
                  onClick={() => {
                    window.location.href = `${externalRoutes.collections}`
                  }}
                  label="Upgrade my membership"
                />
              </div>
            </ul>
          </div>
        </div>
      )}

      <Image
        alt="sidemenu"
        className="ml-auto cursor-pointer lg:hidden"
        src="/icons/hamburger-menu.svg"
        width={24}
        height={28}
        onClick={() => setSideMenuIsOpen()}
      />
    </div>
  )
}

function parseAvatarUrl(
  avatar_url?: string
): string | import('next/dist/shared/lib/get-img-props').StaticImport {
  if (
    !avatar_url ||
    (!avatar_url.includes('https://university.personaldevelopmentschool.com') &&
      !avatar_url.includes('https://files.cdn.thinkific.com/'))
  ) {
    return 'https://university.personaldevelopmentschool.com/assets/tenant/defaults/avatar.png'
  }

  return avatar_url
}
