// core
import Link from 'next/link'
import Image from 'next/image'
// components
import { HeaderSideMenuButton } from './HeaderSideMenuButton'
import { HeaderSideMenu } from './HeaderSideMenu'
import { IDefaultProps } from '..'
// libraries
import cx from 'classnames'
// utils
import { externalRoutes, routes } from '@/utils/constants'
import { getUserData } from '@/utils/server-functions'

interface IHeaderProps {
  /**
   * Is the header link clickable?
   * @default true
   */
  clickableLogo?: boolean
  /**
   * Logo Image element
   * @default <PDSLogo />
   */
  logoElement?: JSX.Element
  /**
   * Include the sidemenu on mobile?
   * @default true
   */
  includeSideMenu?: boolean
  /**
   * Use the members quiz link
   * @default false
   */
  useMembersQuiz?: boolean
  /** Nav Links */
  navLinks?: INavLinkProps[]
}

export const Header = async ({
  clickableLogo = true,
  logoElement,
  navLinks = NavLinks,
  includeSideMenu = false,
  useMembersQuiz = false,
}: IHeaderProps) => {
  if (useMembersQuiz && navLinks == PDSDefaultNavLinks) {
    navLinks[0].link = routes.membersQuiz
  }

  const userData = await getUserData()

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <header className="py-3 px-5 flex items-center bg-[#f5f5f5] lg:px-12 lg:py-4 2xl:px-24 3xl:px-48 4xl:px-72">
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

        {(includeSideMenu || userData) && <HeaderSideMenuButton userData={userData} />}
      </header>

      {(includeSideMenu || userData) && (
        <HeaderSideMenu
          includeMembersQuiz={useMembersQuiz && navLinks == PDSDefaultNavLinks}
          userData={userData}
        />
      )}
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
    link: routes.attachmentQuiz,
    text: 'Attachment Quiz',
  },
  {
    link: externalRoutes.pdsCourses,
    text: 'View Courses',
  },
  {
    link: externalRoutes.attachmentBootcamp,
    text: 'Bootcamp',
  },
  {
    link: routes.iatCoachingPage,
    text: 'Certification',
  },
  {
    link: externalRoutes.collections,
    text: 'Memberships',
  },
  {
    link: routes.learningLovePage,
    text: 'Book',
  },
  {
    link: routes.podcast,
    text: 'Podcast',
  },
  {
    link: externalRoutes.about,
    text: 'About',
  },
  {
    link: externalRoutes.blog,
    text: 'Blog',
  },
]
