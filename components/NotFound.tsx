// components
import Image from 'next/image'
import { Button } from './Button/Button'
// modules
import { SocialMediaLinks } from '@/components/SocialMediaLinks'
import { ERoutes } from '@/utils/constants'
import Link from 'next/link'
import { Page } from './Page'

export const NotFound = () => {
  return (
    <Page className="w-full flex flex-auto justify-center items-center" page_name="Not Found Page">
      <div className="flex-grow-1 my-8 lg:my-24 2xl:my-28">
        <div className="flex flex-col md:flex-row">
          <div className="p-6 md:p-2">
            <Image
              alt="Vector image of a sad face"
              src="/images/sad-pc-404-page.svg"
              width={350}
              height={250}
            />
          </div>

          <div className="max-w-[440px] flex flex-col items-center p-6 md:items-start md:ml-6 md:p-2">
            <h2 className="text-primary">Oops!</h2>

            <p className="mt-4 text-center md:text-left">
              We couldn't find the page you were looking for. Reach out to{' '}
              <Link
                className="text-primary font-medium"
                href="mailto:info@personaldevelopmentschool.com">
                Customer Service
              </Link>{' '}
              for further assistance.
            </p>

            <Link href={ERoutes.HOME}>
              <Button className="w-fit mt-8" label="BACK TO HOMEPAGE" />
            </Link>

            <div className="w-full flex flex-col justify-between items-center mt-4 md:flex-row md:items-end md:mt-[auto]">
              <p className="mb-2 md:mb-0">Follow us on social media</p>

              <div className="w-full flex justify-evenly md:w-fit md:space-x-8 md:justify-start">
                <SocialMediaLinks className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
