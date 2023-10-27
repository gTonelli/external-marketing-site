'use client'

import { ERoutes } from '@/utils/constants'
import Image from 'next/image'
import { IDefaultProps } from '.'
import cx from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

export const Header = () => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <div className="py-3 px-5 flex items-center bg-[#f5f5f5] xl:px-24 2xl:px-48 3xl:px-72">
        <div className="min-w-[108px] text-center">
          <a href="https://university.personaldevelopmentschool.com/collections">
            <Image
              alt="PDS Logo, the Tree of Life"
              className="w-[40px] h-[40px] ml-0 lg:w-[70px] lg:h-[70px] lg:mx-auto"
              src="/images/pds-logo.png"
              height={70}
              width={70}
            />
          </a>
        </div>

        <nav className="hidden lg:flex flex-wrap px-4 items-center justify-center mx-auto lg:flex-1 xl:px-8">
          <NavLink link={ERoutes.ATTACHMENT_QUIZ} text="Attachment Quiz" />

          <NavLink link={ERoutes.PDS_COURSES} text="View Courses" />

          <NavLink link={ERoutes.COLLECTIONS} text="Memberships" />

          <NavLink link={ERoutes.ABOUT} text="About" />

          <NavLink className="!pr-0" link={ERoutes.BLOG} text="Blog" />
        </nav>

        <div className="min-w-[108px] ml-auto text-right">
          <Image
            alt="sidemenu"
            className="ml-auto cursor-pointer lg:hidden"
            src="/icons/hamburger-menu.svg"
            width={24}
            height={28}
            onClick={() => setSideMenuIsOpen(true)}
          />
        </div>
      </div>

      {/* SIDEMENU */}
      <div
        className={cx(
          'hidden bg-black bg-opacity-40 absolute w-full h-full top-0 left-0 z-30',
          sideMenuIsOpen && '!block'
        )}
      />

      <div
        className={cx(
          'bg-white absolute w-full h-full top-0 left-0 z-40 transition-transform duration-500 ease-in-out lg:hidden',
          sideMenuIsOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
        <div className="p-5 flex">
          <Image
            alt="PDS Logo, the Tree of Life"
            className="w-[40px] h-[40px] ml-0 mr-auto cursor-pointer"
            src="/images/pds-logo.png"
            height={40}
            width={40}
          />

          <Image
            alt="Close"
            src="/icons/times.svg"
            height={30}
            width={30}
            onClick={() => setSideMenuIsOpen(false)}
          />
        </div>

        <div className="flex flex-col justify-center items-start pt-[10px] px-[50px] pb-[50px]">
          {SideMenuLinks.map((item, i) => (
            <SideMenuLink
              key={`sidenu_linl_${i}`}
              imgAlt={item.imgAlt}
              imgSrc={item.imgSrc}
              link={item.link}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </>
  )
}

interface INavLinkProps extends IDefaultProps {
  link: string
  text: string
}

const NavLink = ({ className, link, text }: INavLinkProps) => (
  <Link className={cx('my-[5px] pr-8', className)} href={link}>
    {text}
  </Link>
)

interface ISideMenuLinkProps {
  link: string
  imgAlt: string
  imgSrc: string
  text: string
}

const SideMenuLink = ({ imgAlt, link, imgSrc, text }: ISideMenuLinkProps) => (
  <Link className="flex items-center justify-center mb-5" href={link}>
    <div className="w-10 flex justify-start mr-[10px]">
      <Image
        alt={imgAlt}
        className="w-[30px] h-[30px] mr-[15px]"
        src={imgSrc}
        height={30}
        width={30}
        tabIndex={-1}
      />
    </div>

    <p className="mb-0">{text}</p>
  </Link>
)

const SideMenuLinks = [
  {
    imgAlt: 'Quiz',
    link: ERoutes.ATTACHMENT_QUIZ,
    imgSrc: '/icons/sidemenu-quiz.svg',
    text: 'Attachment Quiz',
  },
  {
    imgAlt: 'Courses',
    link: ERoutes.PDS_COURSES,
    imgSrc: '/icons/sidemenu-courses.svg',
    text: 'View Courses',
  },
  {
    imgAlt: 'Memberships',
    link: ERoutes.COLLECTIONS,
    imgSrc: '/icons/sidemenu-membership.svg',
    text: 'Memberships',
  },
  {
    imgAlt: 'About',
    link: ERoutes.ABOUT,
    imgSrc: '/icons/sidemenu-about.svg',
    text: 'About',
  },
  {
    imgAlt: 'Blog',
    link: '/',
    imgSrc: '/icons/sidemenu-blog.svg',
    text: 'Blog',
  },
  {
    imgAlt: 'Help',
    link: ERoutes.FAQ,
    imgSrc: '/icons/sidemenu-faq.svg',
    text: 'Help',
  },
  {
    imgAlt: 'Sign In',
    link: ERoutes.SIGN_IN,
    imgSrc: '/icons/sidemenu-sign-in.svg',
    text: 'Sign In',
  },
]
