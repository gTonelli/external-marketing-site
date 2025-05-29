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
import { externalRoutes, routes } from '@/utils/constants'

const todaysDate = new Date()
const year = todaysDate.getFullYear()

interface IFooterProps {
  includeLinks?: boolean
  includeSocialLinks?: boolean
  centered?: boolean
  showDisclaimer?: boolean
}

export const Footer = ({
  includeLinks,
  includeSocialLinks = true,
  centered,
  showDisclaimer = false,
}: IFooterProps) => (
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

          {includeSocialLinks && (
            <div className="flex px-4">
              <Link className="mx-4 mb-5" href={externalRoutes.youTube}>
                <FontAwesomeIcon
                  className="text-2xl text-primary-light transition-colors hover:text-primary"
                  icon={faYoutube}
                />
              </Link>

              <Link className="mx-4 mb-5" href={externalRoutes.tikTok}>
                <FontAwesomeIcon
                  className="text-2xl text-primary-light transition-colors hover:text-primary"
                  icon={faTiktok}
                />
              </Link>

              <Link className="mx-4 mb-5" href={externalRoutes.facebook}>
                <FontAwesomeIcon
                  className="text-2xl text-primary-light transition-colors hover:text-primary"
                  icon={faFacebook}
                />
              </Link>

              <Link className="mx-4 mb-5" href={externalRoutes.instagram}>
                <FontAwesomeIcon
                  className="text-2xl text-primary-light transition-colors hover:text-primary"
                  icon={faInstagram}
                />
              </Link>

              <Link className="mx-4 mb-5" href={externalRoutes.podcasts}>
                <FontAwesomeIcon
                  className="text-2xl text-primary-light transition-colors hover:text-primary"
                  icon={faPodcast}
                />
              </Link>
            </div>
          )}
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
                href={externalRoutes.pdsCourses}>
                Courses
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.collections}>
                Memberships
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.attachmentBootcamp}>
                Bootcamp
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4 lg:max-w-[200px]"
                href={routes.iatSalesPage}>
                Integrated Attachment Theory<sup>TM</sup> Certification
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={routes.attachmentQuiz}>
                Attachment Quiz
              </Link>
            </div>

            <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start lg:max-w-[161px]">
              <p className="text-xs leading-5 mb-[18px] font-bold lg:text-base">About</p>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.supportPage}>
                Support
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.about}>
                About Us
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.podcasts}>
                Podcast
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.pressAndMedia}>
                Press & Media
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.blog}>
                Blog
              </Link>
            </div>

            <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start">
              <p className="text-xs leading-5 mb-[18px] font-bold lg:text-base">Company</p>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.contactUs}>
                Contact Us
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.privacy}>
                Privacy Policy
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.terms}>
                Terms & Conditions
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={externalRoutes.giftCards}>
                Gift Cards
              </Link>
            </div>

            <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start">
              <p className="text-xs leading-5 mb-[18px] font-bold lg:text-base">Get Our App</p>

              <Link className="mb-4" href={externalRoutes.iosApp}>
                <Image
                  alt="Download the app on iOS"
                  src="/images/app-store-apple-icon.svg"
                  height={32}
                  width={96}
                />
              </Link>

              {/* <Link className="mb-4" href={externalRoutes.androidApp}>
                <Image
                  alt="Download the app on Google Play"
                  src="/images/app-store-google-icon.svg"
                  height={32}
                  width={108}
                />
                
              </Link> */}
            </div>
          </>
        )}
      </div>
    </div>

    <div className="text-white py-4 border-t border-gray-500 lg:text-right lg:max-w-[calc(100%-340px)] lg:mx-auto">
      <p className={centered ? 'text-center' : ''}>
        © Copyright {year} <strong>PDS: The Personal Development School,</strong> All rights
        Reserved.{' '}
        {showDisclaimer && (
          <Link
            className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
            href={externalRoutes.privacy}>
            Privacy Policy
          </Link>
        )}
      </p>

      {showDisclaimer && <p>This Quiz is not endorsed by Facebook or Google</p>}
    </div>
  </footer>
)
