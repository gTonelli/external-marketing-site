import { EExternalRoutes, ERoutes } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'

const todaysDate = new Date()
const year = todaysDate.getFullYear()

export const Footer = () => (
  <footer className="bg-[#252334] relative z-15">
    <div className="relative p-[19px] flex flex-col text-white pb-0 z-20 lg:flex-row lg:pt-14 lg:px-[170px] lg:pb-[75px]">
      <div className="flex flex-col lg:flex-row lg:flex-1">
        <div className="flex flex-col items-center mb-5 lg:items-start">
          <Image
            alt="PDS Logo - Tree of Life"
            className="mb-5 lg:ml-[30px]"
            src="/images/pds-logo-dark.png"
            height={107}
            width={107}
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

      <div className="flex flex-wrap px-5 lg:flex-[1.5] lg:justify-between">
        <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start">
          <p className="text-xl leading-5 mb-[18px] font-bold">What we offer</p>

          <Link className="hover:no-underline mb-3" href={EExternalRoutes.PDS_COURSES}>
            Courses
          </Link>

          <Link className="hover:no-underline mb-3" href={EExternalRoutes.COLLECTIONS}>
            Memberships
          </Link>

          <Link className="hover:no-underline mb-3" href={ERoutes.ATTACHMENT_QUIZ}>
            Attachment Quiz
          </Link>

          <Link className="hover:no-underline mb-3" href={EExternalRoutes.GIFT_CARDS}>
            Gift Cards
          </Link>
        </div>

        <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start pl-1">
          <p className="text-xl leading-5 mb-[18px] font-bold">About</p>

          <Link className="hover:no-underline mb-3" href={EExternalRoutes.ABOUT}>
            About Us
          </Link>

          <Link className="hover:no-underline mb-3" href={EExternalRoutes.BLOG}>
            Blog
          </Link>

          <Link className="hover:no-underline mb-3" href={EExternalRoutes.FAQ}>
            FAQ
          </Link>

          <Link className="hover:no-underline mb-3 lg:max-w-[200px]" href={ERoutes.IAT_SALES_PAGE}>
            Integrated Attachment Theory<sup>TM</sup> Certification
          </Link>
        </div>

        <div className="flex flex-col mb-[30px] lg:mb-0 w-1/2 lg:w-auto items-start">
          <p className="text-xl leading-5 mb-[18px] font-bold">Company</p>

          <Link className="hover:no-underline mb-3" href={EExternalRoutes.CONTACT_US}>
            Contact Us
          </Link>

          <Link className="hover:no-underline mb-3" href={EExternalRoutes.PRIVACY}>
            Privacy Policy
          </Link>

          <Link className="hover:no-underline mb-3" href={EExternalRoutes.TERMS}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>

    <div className="text-white py-4 border-t border-gray-500 mx-4 lg:max-w-[calc(100%-340px)] lg:mx-auto">
      <p>© Copyright {year} Personal Development School All rights Reserved</p>
    </div>
  </footer>
)
