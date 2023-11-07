'use client'

import { EExternalRoutes, ERoutes } from '@/utils/constants'
import Image from 'next/image'
import { IDefaultProps } from '.'
import cx from 'classnames'
import Link from 'next/link'
import { useState } from 'react'

interface IHeaderProps {
  /**
   * Is the header link clickable?
   * @default true
   */
  clickableLogo?: boolean
  /** Nav Links */
  navLinks?: INavLinkProps[]
}

export const Header = ({ clickableLogo = true, navLinks = NavLinks }: IHeaderProps) => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <div className="py-3 px-5 flex items-center bg-[#f5f5f5] xl:px-24 2xl:px-48 3xl:px-72">
        <div className="min-w-[108px] text-center">
          {clickableLogo ? (
            <a href="https://university.personaldevelopmentschool.com/collections">
              <PDSLogo />
            </a>
          ) : (
            <PDSLogo />
          )}
        </div>

        <nav className="hidden lg:flex flex-wrap px-4 items-center justify-center mx-auto lg:flex-1 xl:px-8">
          {navLinks.map((navLink, i) => (
            <NavLink key={`nav_link_${i}`} {...navLink} />
          ))}
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

const PDSLogo = () => (
  <Image
    alt="PDS Logo, the Tree of Life"
    className="w-[40px] h-[40px] ml-0 lg:w-[70px] lg:h-[70px] lg:mx-auto"
    src="/images/pds-logo.png"
    height={70}
    width={70}
  />
)

interface INavLinkProps extends IDefaultProps {
  link: string
  text: string
}

const NavLink = ({ className, link, text }: INavLinkProps) => (
  <Link className={cx('my-[5px] pr-8', className)} href={link}>
    {text}
  </Link>
)

const NavLinks: INavLinkProps[] = [
  {
    link: ERoutes.ATTACHMENT_QUIZ,
    text: 'Attachment Quiz',
  },
  {
    link: EExternalRoutes.PDS_COURSES,
    text: 'View Courses',
  },
  {
    link: ERoutes.IAT_SALES_PAGE,
    text: 'Certification',
  },
  {
    link: EExternalRoutes.COLLECTIONS,
    text: 'Memberships',
  },
  {
    link: EExternalRoutes.ABOUT,
    text: 'About',
  },
  {
    link: EExternalRoutes.BLOG,
    text: 'Blog',
    className: '!pr-0',
  },
]

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
    imgAlt: 'The Attachment Quiz Icon, a hand prerssing a checkmark button',
    link: ERoutes.ATTACHMENT_QUIZ,
    imgSrc: '/icons/sidemenu-quiz.svg',
    text: 'Attachment Quiz',
  },
  {
    imgAlt: 'PDS Courses Icon, a vector image of a person on a computer',
    link: EExternalRoutes.PDS_COURSES,
    imgSrc: '/icons/sidemenu-courses.svg',
    text: 'View Courses',
  },
  {
    imgAlt: 'Memberships Icon: a vector image of 3 pamphlet leafs',
    link: EExternalRoutes.COLLECTIONS,
    imgSrc: '/icons/sidemenu-membership.svg',
    text: 'Memberships',
  },
  {
    imgAlt: 'Certifications Icon: a vector image of a sheet with a badge',
    link: ERoutes.IAT_SALES_PAGE,
    imgSrc: '/icons/sidemenu-certification.svg',
    text: 'Certification',
  },
  {
    imgAlt: 'About Icon: An information icon over a vector image of a person',
    link: EExternalRoutes.ABOUT,
    imgSrc: '/icons/sidemenu-about.svg',
    text: 'About',
  },
  {
    imgAlt: 'Blog Icon: a plain folder',
    link: '/',
    imgSrc: '/icons/sidemenu-blog.svg',
    text: 'Blog',
  },
  {
    imgAlt: 'Help Icon: a question makr in a circle',
    link: EExternalRoutes.FAQ,
    imgSrc: '/icons/sidemenu-faq.svg',
    text: 'Help',
  },
  {
    imgAlt: 'Sign In Icon: an arrow pointing to an overlaid door.',
    link: EExternalRoutes.SIGN_IN,
    imgSrc: '/icons/sidemenu-sign-in.svg',
    text: 'Sign In',
  },
]
