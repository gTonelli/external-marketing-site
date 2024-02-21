'use client'

// core
import { useEffect, useState } from 'react'
// components
import { AttachmentQuizHeading } from '@/components/AttachmentQuiz/AttachmentQuizHeading'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { CheckoutButton } from '@/components/CheckoutButton'
// libraries
import cx from 'classnames'
// modules
import { Storage, TStorageKeys } from '@/modules/Storage'
import Mixpanel from '@/modules/Mixpanel'
// utils
import { TStyle } from '@/utils/types'
import { ROYAL_RUMBLE } from './config'
import { List } from '@/components/List'

type Props = {
  style: Extract<TStyle, 'da' | 'sa'>
}

export const RoyalRumbleHeadline = ({ style }: Props) => {
  const [isVariant, setIsVariant] = useState<boolean>()

  useEffect(() => {
    let storageVar = `gm-866-headline-test-${style}` as TStorageKeys
    let showVariant: string | null | boolean = Storage.get(storageVar)
    if (showVariant === null) {
      showVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.2
      Storage.set(storageVar, showVariant)
      Mixpanel.track.ExperimentStarted({
        'Experiment name': 'GM-866-DA-SA-Headline-Test',
        'Variant name': showVariant ? 'Variant 1' : 'Control',
      })
    }
    setIsVariant(showVariant === 'true' || showVariant === true)
  }, [])

  return (
    <section className={cx('w-full', isVariant === undefined ? 'opacity-0' : 'opacity-100')}>
      <div className="relative max-w-[1008px] mt-10 md:mt-20 mx-4 md:w-calc(100%-2rem) lg:mx-auto px-9 md:px-22 py-10">
        {/* INTRO BACKGROUND */}
        <div className="bg-grey opacity-10 inset-0 rounded-20 absolute w-full" />
        {/* TITLE + VIDEO */}
        <div className="text-left flex flex-center flex-col md:grid md:grid-cols-2 md:gap-8">
          <div className="my-auto">
            <AttachmentQuizHeading
              className="!text-h2 !text-black !capitalize !font-ssp"
              copy={`You Have A`}
            />

            <h2 className="inline capitalize text-primary lg:block">
              {ROYAL_RUMBLE[style].TITLE + ' '}
            </h2>

            <h2 className="inline capitalize !text-black lg:block">Attachment Style</h2>
          </div>

          <div className="mt-10 md:mt-0">
            <VideoThumbnail
              playButtonSize="medium"
              srcUrl={ROYAL_RUMBLE[style].YOUTUBE_URL}
              style={{ maxWidth: '415px', borderRadius: '20px' }}
              thumbnailAlt="A picture of Thais teaching"
              thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
            />
          </div>
        </div>
      </div>

      {isVariant ? (
        <div className="max-w-[1008px] text-left mx-4 mt-8 md:w-calc(100%-2rem) md:mx-auto">
          <h3>{ROYAL_RUMBLE[style].BANNER_SEGMENT.variantSubheader}</h3>

          <h4 className="my-8">Does this sound like you?</h4>

          <List
            className="my-8"
            classNameListItems="items-center mb-2"
            classNameText="md:text-lg"
            iconName="chevron-double-right"
            iconSize="sm"
            listItems={ROYAL_RUMBLE[style].BANNER_SEGMENT.variantCopy1}
          />

          {ROYAL_RUMBLE[style].BANNER_SEGMENT.variantCopy2.map((copy, index) => (
            <p key={`banner_segment_copy_v_${index}`} className="mb-4 md:text-lg">
              {copy}
            </p>
          ))}

          <h3 className="my-8">Our Personalized Courses Can Guide You to Achieve These Goals</h3>

          {ROYAL_RUMBLE[style].BANNER_SEGMENT.variantCopy3.map((copy, index) => (
            <p key={`banner_segment_copy_v_${index}`} className="mb-4 md:text-lg">
              {copy}
            </p>
          ))}

          <div className="flex justify-center">
            <CheckoutButton className="mt-8 xxs:px-16 md:mt-10" label="UNLOCK MY DISCOUNT" />
          </div>
        </div>
      ) : (
        <div className="max-w-[1024px] mt-8 md:mt-10 mx-4 md:mx-auto md:px-4">
          <div className="text-left">
            <p className="font-effra font-bold uppercase tracking-0.325 md:text-lg">
              {ROYAL_RUMBLE[style].BANNER_SEGMENT.headline}
            </p>

            {ROYAL_RUMBLE[style].BANNER_SEGMENT.copy.map((copy, index) => (
              <p
                key={`banner_segment_copy_${index}`}
                className="font-effra mt-4 md:mt-6 md:text-lg">
                {copy}
              </p>
            ))}

            <p className="font-effra mt-8 md:mt-10 md:text-lg">
              At The Personal Development School, we have a tailored program and suite of tools to
              assist you in changing these patterns in as little as 30 days. This will allow you to
              improve existing relationships, create lasting love and build new relationships with
              emotionally available people. Click the button below to enroll in exclusive access.
              <strong> This is 30% off for a limited time.</strong>
            </p>
          </div>

          <CheckoutButton className="mt-8 xxs:px-16 md:mt-10" label="UNLOCK MY DISCOUNT" />
        </div>
      )}
    </section>
  )
}
