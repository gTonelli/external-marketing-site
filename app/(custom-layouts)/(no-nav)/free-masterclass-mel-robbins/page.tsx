// components
import { Page } from '@/components/Page'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { Metadata } from 'next'
import Image from 'next/image'
import { List } from '@/components/List'
import { CheckoutButton } from '@/components/CheckoutButton'
// libraries
import { faCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'
// utils
import { EExternalRoutes } from '@/utils/constants'

export const metadata: Metadata = {
  title: 'Can You Miss Out On This Free Life-Changing Masterclass?',
  description:
    'Don’t miss out on this free masterclass of Thais Gibson and Mel Robbins discussing the fundamental unknowns impacting your relationships.',
}

export default function freeMasterclassMelRobbinsPage() {
  return (
    <Page page_name={'Free Masterclass Mel Robbins'}>
      <div className="flex flex-col h-full items-start px-4 lg:flex-row lg:px-8 lg:space-x-16 lg:my-16 ">
        <section className="flex flex-col items-center my-6 mx-auto lg:w-1/2 lg:mt-0">
          <div className="max-w-lg">
            <h1 className="text-center !text-2xl font-sans font-bold mb-4 lg:text-left">
              Here's Why You NEED to Watch This Free Masterclass To{' '}
              <span className="text-purple-dark">
                Uncover The ONE Secret to Finally Building Lasting & Loving Relationships
              </span>
            </h1>

            <div className="my-6">
              <VideoThumbnail
                className="max-w-lg mx-auto"
                srcUrl="https://storage.googleapis.com/pds_videos/Mel%20Robbins%20Masterclass.mp4"
                thumbnailUrl="RoyalRumblePage/mel-robbins.jpg"
                thumbnailAlt={`Video Mel Robbins thumbnail`}
                type="GCP"
              />
            </div>

            <div className="flex justify-center mb-4 lg:hidden">
              <CheckoutButton
                href={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}
                label="GET STARTED"
              />
            </div>

            <p className="text-center mb-2 lg:mb-4 lg:text-left">
              If you’ve tried traditional methods and modalities for years and years…but are still
              stuck with the same patterns and struggles in your relationship —{' '}
              <strong>you can’t afford to miss this video.</strong>
            </p>

            <List
              icon={faCircle}
              classNameIcon="!text-black !pt-2"
              classNameListItems="mb-2"
              iconSize="xs"
              listItems={[
                'You’ll learn about our unique, groundbreaking, proprietary process – **Integrated Attachment Theory™** – and how it’s unlike anything you’ve ever seen before.',
                'It works FAST, is simple to USE, and is disrupting the relationship industry because it quickly HELPS anyone, anywhere, regardless of age, sex, or education!',
                'Unlock the secret to rewiring your subconscious patterns (responsible for 95% of what keeps you stuck) so you can experience real-life TRANSFORMATIONS in yourself and your relationships!',
                'And uncover the Where-What-Why-and-How of your attachment style, how it impacts your relationships, and why you FINALLY have the power to change it!',
              ]}
            />
          </div>
        </section>

        <section className="mx-auto mb-6 lg:w-1/2 ">
          <div className="max-w-lg rounded-2xl overflow-hidden shadow-lg ">
            <Image
              className="w-full object-cover object-top sm:max-h-60"
              src="/images/attachment-style-email-series.jpg"
              alt="needs-mockup"
              width={200}
              height={200}
            />

            <div className="px-6 py-4 bg-purple-dark lg:py-8">
              <p className="text-center text-md font-bold text-white p-4 mb-2">
                The time is now to transform your love life, build deep connections, and feel secure
                in yourself and your relationships. Claim this special, limited-time offer for the
                All-Access Pass.
              </p>
              <p className="text-center text-md font-bold text-white p-4 mb-2">
                Our All-Access Pass membership gives you complete and unlimited access to everything
                we offer at our transformative and life-changing online school so you can rewrite
                your love life, unlock your relationships, and become the best version of yourself
                ever.
              </p>

              <div className="flex justify-center mt-4">
                <CheckoutButton
                  href={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}
                  label="GET STARTED"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}
