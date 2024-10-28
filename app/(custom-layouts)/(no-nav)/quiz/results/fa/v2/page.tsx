//
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { SimplifiedFAHeader } from './SimplifiedFAHeader'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { Button } from '@/components/Button/Button'

export default function SimplifiedFAResultsPage() {
  return (
    <Page page_name="VSL Royal Rumble Results - fa">
      <SimplifiedFAHeader />

      <Section classNameInner="!max-w-6xl">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>
              <VideoThumbnail
                srcUrl="https://storage.googleapis.com/pds_videos/FA_VSL_Funnel.mp4"
                thumbnailAlt={`Fearful Avoidant video fa thumbnail`}
                thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
                type="default"
              />
            </div>

            <div className="!mx-0 mb-4 md:text-left md:!m-4 md:w-1/2">
              <p className="mb-4">
                <strong>Special One-Time Invitation</strong>
              </p>

              <h2 className="mb-4">
                Claim Your Upgrade And Get The{' '}
                <span className="text-primary">7-Days to Transform Relationships</span> Course
              </h2>

              <p className="mb-4">
                <strong>
                  The NEW WAY to understand and overcome your relationship fears, uncover your
                  needs, and create a powerful connection with someone special without compromising
                  your freedom, independence, and boundaries.
                </strong>
              </p>

              <Button track label="YES! I WANT A HEALTHY RELATIONSHIP" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="max-w-6xl mx-auto" classNameInner="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">
            Are you ready to start having the best relationships of your life?
          </h2>

          <p className="mb-4">
            Being a Fearful Avoidant can make relationships feel chaotic and challenging – despite
            your desire to connect with others. This fear leads you to swing from hot to cold when
            things become serious, struggle with unexpected emotions, and fear abandonment and
            trusting others.
          </p>

          <p className="mb-4">But it doesn't have to be this way.</p>

          <p className="mb-4">
            It is absolutely possible to create the deep connection you want in relationships
            without being exposed emotionally and losing your independence.
          </p>

          <p className="mb-4">
            Our 7-Days to Transform Relationships Course offers simple yet powerful tools to
            overcome your painful relationship patterns and negative emotions while building and
            fostering a loving, trusted, and exciting relationship with transparency and openness.
          </p>

          <p>
            Take it as part of our All-Access Pass Membership features to experience the profound
            and transformational change you desire in yourself and your relationships.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Image
            alt="Upset couple"
            width={1000}
            height={668}
            src="/images/DreamLifeResultsPage/hero.jpg"
          />
        </div>
      </Section>
    </Page>
  )
}
