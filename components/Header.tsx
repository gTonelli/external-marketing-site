'use client'

import { EExternalRoutes, ERoutes } from '@/utils/constants'
import Image from 'next/image'
import { IDefaultProps } from '.'
import cx from 'classnames'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { DowntimeBanner } from './DowntimeBanner'

interface IHeaderProps {
  /**
   * Is the header link clickable?
   * @default true
   */
  clickableLogo?: boolean
  /**
   * Back button className
   */
  classNameBackButton?: string
  /**
   * Logo Image element
   * @default <PDSLogo />
   */
  logoElement?: JSX.Element
  /**
   * On click back button callback.
   * @default router.back()
   */
  onClickBack?: () => void
  /**
   * Include a button to go back to the previous page?
   * @default false
   */
  includeGoBackButton?: boolean
  /**
   * Include the sidemenu on mobile?
   * @default true
   */
  includeSideMenu?: boolean
  /** Go back button text. Only renders if @includeGoBackButton is set to true */
  goBackButtonText?: string
  /**
   * Use the members quiz link
   * @default false
   */
  useMembersQuiz?: boolean
  /** Nav Links */
  navLinks?: INavLinkProps[]
}

export const Header = ({
  classNameBackButton,
  clickableLogo = true,
  logoElement,
  navLinks = NavLinks,
  includeGoBackButton = false,
  includeSideMenu = false,
  onClickBack,
  useMembersQuiz = false,
  goBackButtonText = 'Back',
}: IHeaderProps) => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)
  if (useMembersQuiz && navLinks == PDSDefaultNavLinks) {
    navLinks[0].link = ERoutes.MEMBERS_QUIZ
    if (includeSideMenu) SideMenuLinks[0].link = ERoutes.MEMBERS_QUIZ
  }

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <header className="py-3 px-5 flex items-center bg-[#f5f5f5] xl:px-24 2xl:px-48 3xl:px-72">
        <div className="min-w-[108px] text-center">
          {clickableLogo ? (
            <a href="https://university.personaldevelopmentschool.com/collections">
              {logoElement || <PDSLogo />}
            </a>
          ) : (
            logoElement || <PDSLogo />
          )}
        </div>

        <nav className="hidden lg:flex flex-wrap px-4 items-center justify-center mx-auto lg:flex-1 xl:px-8">
          {navLinks.map((navLink, i) => (
            <NavLink key={`nav_link_${i}`} {...navLink} />
          ))}
        </nav>

        {includeGoBackButton && (
          <GoBackButton
            className={classNameBackButton}
            label={goBackButtonText}
            onClick={onClickBack}
          />
        )}

        {includeSideMenu && (
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
        )}
      </header>

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
            src="/images/pds-icon.png"
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
    src="/images/pds-icon.png"
    height={70}
    width={70}
  />
)

export const PDSLogoStacked = () => (
  <Image
    alt="PDS Logo - Tree of Life"
    className="w-auto h-10 ml-0 lg:h-[70px] lg:mx-auto"
    src="/images/pds-logo-stacked-right-primary.png"
    height={70}
    width={193}
  />
)

interface IGoBackButtonProps extends IDefaultProps {
  onClick?: () => void
  label: string
}

const GoBackButton = ({ className, label, onClick }: IGoBackButtonProps) => {
  const [showButton, setShowButton] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!document.referrer) setShowButton(false)
  }, [])

  return (
    showButton && (
      <p
        className={cx(
          'ml-auto text-primary font-bold cursor-pointer px-4 py-2 rounded-full bg-transparent transition-all hover:bg-white',
          className
        )}
        onClick={() => onClick?.() ?? router.back()}>
        {label}
      </p>
    )
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

const NavLinks: INavLinkProps[] = []

export const PDSDefaultNavLinks = [
  {
    link: ERoutes.ATTACHMENT_QUIZ,
    text: 'Attachment Quiz',
  },
  {
    link: EExternalRoutes.PDS_COURSES,
    text: 'View Courses',
  },
  {
    link: EExternalRoutes.ATTACHMENT_BOOTCAMP,
    text: 'Bootcamp',
  },
  {
    link: ERoutes.IAT_COACHING_PAGE,
    text: 'Certification',
  },
  {
    link: EExternalRoutes.COLLECTIONS,
    text: 'Memberships',
  },
  {
    link: ERoutes.LEARNING_LOVE_PAGE,
    text: 'Book',
  },
  {
    link: ERoutes.PODCAST,
    text: 'Podcast',
  },

  {
    link: EExternalRoutes.ABOUT,
    text: 'About',
  },
  {
    link: EExternalRoutes.BLOG,
    text: 'Blog',
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
    imgAlt: 'Book Icon: a vector image of a Book',
    link: ERoutes.LEARNING_LOVE_PAGE,
    imgSrc: '/icons/sidemenu-book.svg',
    text: 'Book',
  },
  {
    imgAlt: 'About Icon: An information icon over a vector image of a person',
    link: EExternalRoutes.ABOUT,
    imgSrc: '/icons/sidemenu-about.svg',
    text: 'About',
  },
  {
    imgAlt: 'Blog Icon: a plain folder',
    link: EExternalRoutes.BLOG,
    imgSrc: '/icons/sidemenu-blog.svg',
    text: 'Blog',
  },
  {
    imgAlt: 'Help Icon: a question mark in a circle',
    link: EExternalRoutes.SUPPORT_PAGE,
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
