'use client'

import { TUserData } from '@/utils/types'
import { faChevronDown } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// core
import Image from 'next/image'

export const HeaderSideMenuButton = ({
  userData,
}: {
  userData?: Pick<TUserData, 'firstName' | 'lastName' | 'avatar_url' | 'createdAt'>
}) => {
  const setSideMenuIsOpen = () => {
    const sideMenu = document.querySelector('#header__side-menu')
    const sideMenuOverlay = document.querySelector('#header__side-menu-overlay')
    if (sideMenu && sideMenuOverlay) {
      sideMenu.classList.add('translate-x-0')
      sideMenu.classList.remove('translate-x-full')
      sideMenuOverlay.classList.add('block')
      sideMenuOverlay.classList.remove('hidden')
    }
  }

  return (
    <div className="min-w-[108px] ml-auto text-right">
      {userData && userData.firstName ? (
        <div className="gap-2.5 hidden lg:flex items-center justify-center border-2 border-primary rounded-4xl cursor-pointer bg-white py-2 px-4 my-2 text-decoration-none">
          <Image
            alt="avatar"
            src={parseAvatarUrl(userData.avatar_url)}
            className="mx-[5px]"
            width={32}
            height={32}
          />

          <span className="font-bold">{userData.firstName}</span>

          <FontAwesomeIcon icon={faChevronDown} className="text-primary" size="xl" />
        </div>
      ) : (
        <Image
          alt="sidemenu"
          className="ml-auto cursor-pointer lg:hidden"
          src="/icons/hamburger-menu.svg"
          width={24}
          height={28}
          onClick={() => setSideMenuIsOpen()}
        />
      )}
    </div>
  )
}

function parseAvatarUrl(
  avatar_url?: string
): string | import('next/dist/shared/lib/get-img-props').StaticImport {
  if (!avatar_url || !avatar_url.includes('https://university.personaldevelopmentschool.com')) {
    return 'https://university.personaldevelopmentschool.com/assets/tenant/defaults/avatar.png'
  }

  return avatar_url
}
