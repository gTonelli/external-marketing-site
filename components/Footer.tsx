import { EExternalRoutes, ERoutes } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'

const todaysDate = new Date()
const year = todaysDate.getFullYear()

interface IFooterProps {
  includeLinks?: boolean
}

export const Footer = ({ includeLinks }: IFooterProps) => (
  <footer className="bg-[#252334] relative z-15 pb-0 lg:pt-14 lg:px-4 p-[19px]">
    <div className="relative flex flex-col text-white z-20 px-5 lg:px-0 lg:flex-row lg:pb-[75px] lg:max-w-[1120px] lg:mx-auto">
      <div className="flex flex-col lg:flex-1">
        <div className="flex flex-col items-center mb-5 lg:items-start">
          <Image
            alt="PDS Logo - Tree of Life"
            className="mb-5 lg:ml-[30px] lg:w-[219px]"
            src="/images/pds-logo-stacked-right.svg"
            height={48}
            width={131}
          />

          <div className="flex px-4">
            <Link className="mx-[15px] mb-5" href={EExternalRoutes.YOUTUBE}>
              <Image
                alt="Youtube's play icon"
                src="/icons/footer-youtube.svg"
                width={24}
                height={24}
              />
            </Link>

            <Link className="mx-[15px] mb-5" href={EExternalRoutes.TIKTOK}>
              <Image
                alt="Tiktoks's musical note icon"
                src="/icons/footer-tiktok.svg"
                width={22}
                height={24}
              />
            </Link>

            <Link className="mx-[15px] mb-5" href={EExternalRoutes.FACEBOOK}>
              <Image alt="Facebook icon" src="/icons/footer-facebook.svg" width={24} height={24} />
            </Link>

            <Link className="mx-[15px] mb-5" href={EExternalRoutes.INSTAGRAM}>
              <Image
                alt="Instagram's icon"
                src="/icons/footer-instagram.svg"
                width={24}
                height={24}
              />
            </Link>

            <Link className="mx-[15px] mb-5" href={EExternalRoutes.PODCASTS}>
              <Image
                alt="Web podcast icon"
                src="/icons/footer-podcast.svg"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap lg:flex-[1.5] lg:justify-between">
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
                href={EExternalRoutes.ABOUT}>
                About Us
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={ERoutes.LEARNING_LOVE_PAGE}>
                Book
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.BLOG}>
                Blog
              </Link>

              <Link
                className="hover:no-underline text-xs !leading-4 lg:text-base mb-4"
                href={EExternalRoutes.FAQ}>
                FAQ
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
                href={EExternalRoutes.GIFT_CARDS}>
                Gift Cards
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
      <p>© Copyright {year} Personal Development School All rights Reserved</p>
    </div>
  </footer>
)
