'use client'

// core
import { useState, useEffect } from 'react'
// components
import { AttachmentQuizHeading } from './AttachmentQuiz/AttachmentQuizHeading'
import { RESULTS } from '@/app/(custom-layouts)/(no-nav)/quiz/results/fa/config'
import { VideoThumbnail } from './Video/variants/VideoThumbnail'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { Storage, TStorageKeys } from '@/modules/Storage'

export const ResultsPageHeader = () => {
  // ==================== State ====================
  const [isVariant, setIsVariant] = useState(false)
  const style = 'fa'

    useEffect(() => {
      let showVariant: string | null | boolean = Storage.get('gm-1055-video-header' as TStorageKeys)
      if (showVariant === null) {
        showVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.5
        Storage.set('gm-1055-video-header' as TStorageKeys, showVariant)
        Mixpanel.track.ExperimentStarted({
          'Experiment name': 'GM-1055-Video-Header',
          'Variant name': showVariant ? 'Variant 1' : 'Control',
          page_name: 'VSL Royal Rumble Results - fa',
        })
      }
      setIsVariant(showVariant === 'true' || showVariant === true)
    }, [])

  return (
    <>
      {isVariant ? (
        <div className="flex flex-col justify-center items-center max-w-5xl pt-10 md:pt-20 px-4 md:mx-auto">
          <AttachmentQuizHeading
            copy={RESULTS[style].HERO_SECTION_VARIANT.headline}
            className="!font-ssp !text-3xl capitalize"
          />

          <p className="max-w-3xl uppercase font-bold my-4">
            {RESULTS[style].HERO_SECTION_VARIANT.subheadline}
          </p>

          {/* BANNER BACKGROUND */}
          <div className="max-w-5xl w-full md:my-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-x-6 md:px-8">
              <div>
                <VideoThumbnail
                  srcUrl={RESULTS[style].HERO_SECTION.videoURL}
                  thumbnailAlt={`Fearful Avoidant video ${style} thumbnail`}
                  thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
                  type="default"
                />
              </div>

              <div className="m-4 md:text-left md:w-1/2">
                <h2 className="text-purple-dark !text-3xl hidden md:block">{RESULTS[style].HERO_SECTION.title}</h2>

                <p className="mt-4 hidden md:block">{RESULTS[style].HERO_SECTION_VARIANT.copy}</p>

                <h2 className="text-purple-dark !text-3xl mt-6 md:hidden">{RESULTS[style].HERO_SECTION.title}</h2>

                <p className="mt-4 md:hidden">{RESULTS[style].HERO_SECTION_VARIANT.copy}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center max-w-5xl pt-10 md:pt-20 px-4 md:mx-auto">
          <AttachmentQuizHeading />

          <p className="max-w-3xl uppercase font-bold !tracking-0.325 mt-8 mb-8 md:mb-10">
            {RESULTS[style].HERO_SECTION.subheadline}
          </p>

          {/* BANNER BACKGROUND */}
          <div className="max-w-5xl w-full my-8">
            <div className="flex flex-col md:flex-row-reverse md:px-8">
              <div>
                <VideoThumbnail
                  srcUrl={RESULTS[style].HERO_SECTION.videoURL}
                  thumbnailAlt={`Fearful Avoidant video ${style} thumbnail`}
                  thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
                  type="default"
                />
              </div>

              <div className="m-4 p-2 md:text-left md:w-1/2">
                <h2 className="text-purple-dark text-2xl">{RESULTS[style].HERO_SECTION.title}</h2>

                <p className="font-bold mt-4">
                  Congratulations on taking the Attachment Style Quiz!
                </p>

                <p className="mt-4">{RESULTS[style].HERO_SECTION.copy}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
