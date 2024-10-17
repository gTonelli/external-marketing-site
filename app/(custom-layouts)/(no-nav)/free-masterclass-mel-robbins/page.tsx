// components
import { Button } from '@/components/Button/Button'
import { Page } from '@/components/Page'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { Metadata } from 'next'
import Image from 'next/image'
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
              Watch This Free Masterclass To{' '}
              <span className="text-purple-dark">Transform Yourself & Your Love Life</span>
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

            <p className="text-center mb-2 lg:mb-4 lg:text-left">
              If you’ve tried traditional therapy and methods but are still stuck with the same
              patterns and struggling in your relationship — you can’t afford to miss this video.
            </p>

            <p className="text-center mb-2 lg:mb-4 lg:text-left">
              It will describe you and all your relationships to the T, how you became that way,
              what it means, and how you can transform your love life with Integrated Attachment
              Theory™.
            </p>

            <p className="text-center mb-2 lg:mb-4 lg:text-left">
              You’ll learn why this revolutionary and influential approach is creating waves in the
              relationship industry because it can quickly and easily help anyone, anywhere,
              regardless of age, sex, or education!
            </p>

            <p className="text-center mb-2 lg:mb-4 lg:text-left">
              Most importantly, I’ll explain the secret to unlocking and accessing the 95% of your
              brain that drives real-life transformations, enabling you to break and reform your
              unhealthy patterns into healthy ones…
            </p>

            <p className="text-center mb-2 lg:mb-4 lg:text-left">
              And get the real love, deep connection, and relationship you desire while being secure
              about yourself.
            </p>
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
                Our premier membership gives you complete and unlimited access to everything we
                offer at our transformative and life-changing online school so you can rewrite your
                love life, unlock your relationships, and become the best version of yourself ever.
              </p>

              <div className="flex justify-center mt-4">
                <Button
                  track
                  link={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}
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
