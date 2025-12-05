'use client'

// core
import Image from 'next/image'
import Link from 'next/link'
// utils
import { routes } from '@/utils/constants'
import { TUserData } from '@/utils/types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { SideMenuLinks } from './config'
import { HeaderSideMenuLinks } from './HeaderSideMenuLinks'

export const HeaderSideMenu = ({
  includeMembersQuiz,
  userData,
}: {
  includeMembersQuiz: boolean
  userData?: Pick<TUserData, 'firstName' | 'lastName' | 'avatar_url' | 'createdAt' | 'roles'>
}) => {
  if (includeMembersQuiz) {
    SideMenuLinks[0].link = routes.membersQuiz
  }

  const setSideMenuIsClosed = () => {
    const sideMenu = document.querySelector('#header__side-menu')
    const sideMenuOverlay = document.querySelector('#header__side-menu-overlay')
    if (sideMenu && sideMenuOverlay) {
      sideMenu.classList.remove('right-0')
      sideMenu.classList.add('-right-full')
      sideMenuOverlay.classList.remove('block')
      sideMenuOverlay.classList.add('hidden')
    }
  }

  return (
    <>
      <div
        id="header__side-menu-overlay"
        className="hidden bg-black bg-opacity-40 absolute w-full h-full top-0 left-0 z-30"
      />

      <div
        id="header__side-menu"
        className="bg-white fixed w-full h-full top-0 -right-full z-40 transition-all duration-500 ease-out max-w-[550px] overflow-scroll lg:hidden">
        <div className="p-5 flex">
          <Image
            alt="PDS Logo, the Tree of Life"
            className="w-[40px] h-[40px] ml-0 mr-auto cursor-pointer"
            src="/images/pds-icon.png"
            height={40}
            width={40}
          />

          <FontAwesomeIcon
            icon={faXmark}
            className="p-2 cursor-pointer"
            onClick={() => setSideMenuIsClosed()}
            size="xl"
          />
        </div>

        <div className="flex flex-col justify-center items-start pt-[5px] px-[15px] pb-[15px] xxs:pt-[10px] xxs:px-[50px] xxs:pb-[50px]">
          <HeaderSideMenuLinks userData={userData} />
        </div>
      </div>
    </>
  )
}
