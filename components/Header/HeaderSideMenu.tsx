'use client'

// core
import Image from 'next/image'
import Link from 'next/link'
// utils
import { externalRoutes, routes } from '@/utils/constants'

export const HeaderSideMenu = ({ includeMembersQuiz }: { includeMembersQuiz: boolean }) => {
  if (includeMembersQuiz) {
    SideMenuLinks[0].link = routes.membersQuiz
  }

  const setSideMenuIsClosed = () => {
    const sideMenu = document.querySelector('#header__side-menu')
    const sideMenuOverlay = document.querySelector('#header__side-menu-overlay')
    if (sideMenu && sideMenuOverlay) {
      sideMenu.classList.remove('translate-x-0')
      sideMenu.classList.add('translate-x-full')
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
        className="bg-white absolute w-full h-full top-0 left-0 z-40 transition-transform duration-500 ease-in-out translate-x-full lg:hidden">
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
            onClick={() => setSideMenuIsClosed()}
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
    link: routes.attachmentQuiz,
    imgSrc: '/icons/sidemenu-quiz.svg',
    text: 'Attachment Quiz',
  },
  {
    imgAlt: 'PDS Courses Icon, a vector image of a person on a computer',
    link: externalRoutes.pdsCourses,
    imgSrc: '/icons/sidemenu-courses.svg',
    text: 'View Courses',
  },
  {
    imgAlt: 'Memberships Icon: a vector image of 3 pamphlet leafs',
    link: externalRoutes.collections,
    imgSrc: '/icons/sidemenu-membership.svg',
    text: 'Memberships',
  },
  {
    imgAlt: 'Certifications Icon: a vector image of a sheet with a badge',
    link: routes.iatSalesPage,
    imgSrc: '/icons/sidemenu-certification.svg',
    text: 'Certification',
  },
  {
    imgAlt: 'Book Icon: a vector image of a Book',
    link: routes.learningLovePage,
    imgSrc: '/icons/sidemenu-book.svg',
    text: 'Book',
  },
  {
    imgAlt: 'About Icon: An information icon over a vector image of a person',
    link: externalRoutes.about,
    imgSrc: '/icons/sidemenu-about.svg',
    text: 'About',
  },
  {
    imgAlt: 'Blog Icon: a plain folder',
    link: externalRoutes.blog,
    imgSrc: '/icons/sidemenu-blog.svg',
    text: 'Blog',
  },
  {
    imgAlt: 'Help Icon: a question mark in a circle',
    link: externalRoutes.supportPage,
    imgSrc: '/icons/sidemenu-faq.svg',
    text: 'Help',
  },
  {
    imgAlt: 'Sign In Icon: an arrow pointing to an overlaid door.',
    link: externalRoutes.signIn,
    imgSrc: '/icons/sidemenu-sign-in.svg',
    text: 'Sign In',
  },
]
