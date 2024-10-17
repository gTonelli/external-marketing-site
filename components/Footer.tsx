// core
import Image from 'next/image'
import Link from 'next/link'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from '@awesome.me/kit-545b942488/icons/classic/brands'
import { faPodcast } from '@awesome.me/kit-545b942488/icons/classic/solid'
// utils
import { EExternalRoutes, ERoutes } from '@/utils/constants'

const todaysDate = new Date()
const year = todaysDate.getFullYear()

interface IFooterProps {
  includeLinks?: boolean
  centered?: boolean
}

export const Footer = ({ includeLinks, centered }: IFooterProps) => (
  <footer className="bg-[#252334] relative z-15 pb-0 lg:pt-14 lg:px-4 p-[19px]">
    <div className="relative flex flex-col text-white z-20 px-5 lg:px-0 lg:flex-row lg:pb-[75px] lg:max-w-[1120px] lg:mx-auto">
      <div className="flex flex-col lg:flex-1">
        <div className={cx('flex flex-col items-center mb-5', !centered && 'lg:items-start')}>
          <Image
            alt="PDS Logo - Tree of Life"
            className="mb-5 lg:ml-[30px] lg:w-[320px]"
            src="/images/pds-logo-stacked-right-alt.png"
            height={43}
            width={221}
          />

          <div className="flex px-4">
            <Link className="mx-[15px] mb-5" href={EExternalRoutes.YOUTUBE}>
              <FontAwesomeIcon
                className="text-2xl text-primary-light transition-colors hover:text-primary"
                icon={faYoutube}
              />
            </Link>

            <Link className="mx-[15px] mb-5" href={EExternalRoutes.TIKTOK}>
              <FontAwesomeIcon
                className="text-2xl text-primary-light transition-colors hover:text-primary"
                icon={faTiktok}
              />
            </Link>

            <Link className="mx-[15px] mb-5" href={EExternalRoutes.FACEBOOK}>
              <FontAwesomeIcon
                className="text-2xl text-primary-light transition-colors hover:text-primary"
                icon={faFacebook}
              />
            </Link>

            <Link className="mx-[15px] mb-5" href={EExternalRoutes.INSTAGRAM}>
              <FontAwesomeIcon
                className="text-2xl text-primary-light transition-colors hover:text-primary"
                icon={faInstagram}
              />
            </Link>

            <Link className="mx-[15px] mb-5" href={EExternalRoutes.PODCASTS}>
              <FontAwesomeIcon
                className="text-2xl text-primary-light transition-colors hover:text-primary"
                icon={faPodcast}
              />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cx(
          'flex flex-wrap lg:flex-[1.5] lg:justify-between',
          centered && !includeLinks && 'hidden'
        )}>
        {includeLinks && (
          <>
            <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start">
              <p className="text-xs leading-5 mb-[18px] font-bold lg:text-base">What We Offer</p>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.PDS_COURSES}>
                Courses
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.COLLECTIONS}>
                Memberships
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.ATTACHMENT_BOOTCAMP}>
                Bootcamp
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4 lg:max-w-[200px]"
                href={ERoutes.IAT_SALES_PAGE}>
                Integrated Attachment Theory<sup>TM</sup> Certification
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={ERoutes.ATTACHMENT_QUIZ}>
                Attachment Quiz
              </Link>
            </div>

            <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start lg:max-w-[161px]">
              <p className="text-xs leading-5 mb-[18px] font-bold lg:text-base">About</p>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.SUPPORT_PAGE}>
                Support
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.ABOUT}>
                About Us
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.PODCASTS}>
                Podcast
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.PRESS_AND_MEDIA}>
                Press & Media
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.BLOG}>
                Blog
              </Link>
            </div>

            <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start">
              <p className="text-xs leading-5 mb-[18px] font-bold lg:text-base">Company</p>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.CONTACT_US}>
                Contact Us
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.PRIVACY}>
                Privacy Policy
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.TERMS}>
                Terms & Conditions
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.GIFT_CARDS}>
                Gift Cards
              </Link>
            </div>

            <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start">
              <p className="text-xs leading-5 mb-[18px] font-bold lg:text-base">Get Our App</p>

              <Link className="mb-4" href={EExternalRoutes.IOS_APP}>
                <Image
                  alt="Download the app on iOS"
                  src="/images/app-store-apple-icon.svg"
                  height={32}
                  width={96}
                />
              </Link>

              <Link className="mb-4" href={EExternalRoutes.ANDROID_APP}>
                <Image
                  alt="Download the app on Google Play"
                  src="/images/app-store-google-icon.svg"
                  height={32}
                  width={108}
                />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>

    <div className="text-white py-4 border-t border-gray-500 lg:text-right lg:max-w-[calc(100%-340px)] lg:mx-auto">
      <p className={centered ? 'text-center' : ''}>
        © Copyright {year} <strong>PDS: The Personal Development School,</strong> All rights
        Reserved
      </p>
    </div>
  </footer>
)
