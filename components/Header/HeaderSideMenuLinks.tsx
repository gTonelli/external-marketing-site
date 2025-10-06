// core
import Link from 'next/link'
import Image from 'next/image'
// config
import { LoggedInSideMenuLinks, SideMenuLinks } from './config'
// utils
import { TUserData } from '@/utils/types'
import { getUserRoles } from '@/utils/functions'
import dayjs from 'dayjs'
import { HeaderSideMenuAccordion } from './HeaderSideMenuAccordion'
import { HeaderSideMenuLink } from './HeaderSideMenuLink'
import Script from 'next/script'
import { Button } from '../Button/Button'
import { externalRoutes } from '@/utils/constants'

export const HeaderSideMenuLinks = ({
  userData,
}: {
  userData?: Pick<TUserData, 'firstName' | 'lastName' | 'avatar_url' | 'createdAt' | 'roles'>
}) => {
  if (!userData || !userData.firstName || !userData.roles) {
    return (
      <>
        {SideMenuLinks.map((item, i) => (
          <SideMenuLink
            key={`sidenu_linl_${i}`}
            imgAlt={item.imgAlt}
            imgSrc={item.imgSrc}
            link={item.link}
            text={item.text}
          />
        ))}
      </>
    )
  }

  const isMember = userData?.roles?.includes('member')
  const isIatMember = userData?.roles?.includes('iat_member')
  const isBootcampMember = userData?.roles?.includes('bootcamp_member')

  if (isIatMember || isMember || isBootcampMember) {
    return (
      <>
        <h3>Welcome, {userData.firstName}!</h3>

        <p className="mb-4">Member since {dayjs(userData.createdAt).format('MMM D, YYYY')}</p>

        <ul>
          <HeaderSideMenuAccordion userData={userData} linkData={LoggedInSideMenuLinks.courses} />

          {isIatMember && !isMember && !isBootcampMember && (
            <>
              <HeaderSideMenuAccordion
                userData={userData}
                linkData={LoggedInSideMenuLinks.students}
              />

              <HeaderSideMenuAccordion
                userData={userData}
                linkData={LoggedInSideMenuLinks.membership}
              />

              <HeaderSideMenuAccordion
                userData={userData}
                linkData={LoggedInSideMenuLinks.results}
              />
            </>
          )}

          {(isMember || isBootcampMember) && (
            <>
              <HeaderSideMenuAccordion
                userData={userData}
                linkData={LoggedInSideMenuLinks.webinarsEvents}
              />

              <HeaderSideMenuAccordion
                userData={userData}
                linkData={LoggedInSideMenuLinks.community}
              />
            </>
          )}

          <HeaderSideMenuAccordion userData={userData} linkData={LoggedInSideMenuLinks.coaches} />

          {isBootcampMember && (
            <HeaderSideMenuAccordion
              userData={userData}
              linkData={LoggedInSideMenuLinks.bootcamp}
            />
          )}

          <HeaderSideMenuAccordion userData={userData} linkData={LoggedInSideMenuLinks.support} />

          <HeaderSideMenuLink userData={userData} linkData={LoggedInSideMenuLinks.attachmentQuiz} />

          <HeaderSideMenuAccordion
            userData={userData}
            linkData={LoggedInSideMenuLinks.accountSettings}
          />

          <HeaderSideMenuLink userData={userData} linkData={LoggedInSideMenuLinks.signOut} />

          {!isMember ? (
            <a href="#" data-x-label="Change my membership">
              <div data-tf-live="01HR88XFRBG0EVGMH2ETATC26V"></div>

              <Script src="//embed.typeform.com/next/embed.js"></Script>
            </a>
          ) : (
            <Link href={externalRoutes.collections}>
              <Button className="tracking-normal" label="Upgrade my membership" />
            </Link>
          )}
        </ul>
      </>
    )
  }

  return (
    <ul>
      <HeaderSideMenuAccordion userData={userData} linkData={LoggedInSideMenuLinks.courses} />

      <HeaderSideMenuAccordion userData={userData} linkData={LoggedInSideMenuLinks.membership} />

      <HeaderSideMenuAccordion userData={userData} linkData={LoggedInSideMenuLinks.students} />

      <HeaderSideMenuAccordion userData={userData} linkData={LoggedInSideMenuLinks.coaches} />

      <HeaderSideMenuAccordion userData={userData} linkData={LoggedInSideMenuLinks.pdsResources} />

      <HeaderSideMenuAccordion userData={userData} linkData={LoggedInSideMenuLinks.results} />

      <HeaderSideMenuAccordion
        userData={userData}
        linkData={LoggedInSideMenuLinks.attachmentQuiz}
      />

      <HeaderSideMenuAccordion
        userData={userData}
        linkData={LoggedInSideMenuLinks.accountSettings}
      />
    </ul>
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
