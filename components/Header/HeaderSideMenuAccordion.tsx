'use client'

// core
import Link from 'next/link'
// config
import { TLoggedInSideMenuLink } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@awesome.me/kit-545b942488/icons/classic/solid'
import cx from 'classnames'
// utils
import { TUserData } from '@/utils/types'
import { getUserRoles } from '@/utils/functions'
// style
import './style.css'

interface IHeaderSideMenuAccordionProps {
  userData: Pick<TUserData, 'firstName' | 'lastName' | 'avatar_url' | 'createdAt' | 'roles'>
  linkData: Pick<TLoggedInSideMenuLink, 'heading' | 'links' | 'icon' | 'description'>
}

export const HeaderSideMenuAccordion = ({ userData, linkData }: IHeaderSideMenuAccordionProps) => {
  const roles = getUserRoles(userData.roles)

  const openAccordion = (e: React.MouseEvent<HTMLParagraphElement>) => {
    e.preventDefault()
    e.stopPropagation()

    for (const accordion of document.querySelectorAll('.accordion')) {
      if (e?.currentTarget.closest('.accordion') == accordion) {
        accordion.classList.toggle('open')
      } else {
        accordion.classList.remove('open')
      }
    }
  }

  if (linkData.links && linkData.icon) {
    const links = linkData.links(roles)

    return (
      <li className="accordion mb-3">
        <p className="flex items-center cursor-pointer hover:text-primary" onClick={openAccordion}>
          {linkData.heading}

          <FontAwesomeIcon
            icon={faChevronDown}
            className="accordion-icon ml-2 transition-transform"
          />
        </p>

        <div className="accordion-content flex-col items-start justify-start text-left bg-white shadow-centered-card p-3 mt-2 rounded-2xl">
          <div className="p-2 mb-2 bg-grey-8 rounded-lg">
            <h4 className="relative flex items-center">
              <div className="absolute -left-1 w-6 h-6 rounded-full bg-primary-light z-5" />
              <FontAwesomeIcon
                icon={linkData.icon}
                className="text-primary relative z-10 mr-[5px]"
              />

              {linkData.heading}
            </h4>

            <p>{linkData.description}</p>
          </div>

          {links.map((item, i) => (
            <Link
              className="mb-1 !no-underline hover:text-primary"
              href={item.link}
              key={`header_side_menu_button_link_${i}`}>
              {item.text}
            </Link>
          ))}
        </div>
      </li>
    )
  }
}
