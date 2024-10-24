'use client'

// core
import Image from 'next/image'
import { useState } from 'react'
// components
import { Section } from '@/components/Section'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { IPodcast } from '@/app/(custom-layouts)/(no-nav)/podcast/page'
// libraries
import { faPlayCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// utils
import { IStrapiResponse } from '@/utils/types'

interface IFeaturedPodcastProps {
  featuredPodcast: IStrapiResponse<IPodcast>
}

export const FeaturedPodcast = ({ featuredPodcast }: IFeaturedPodcastProps) => {
  const [playVideo, setPlayVideo] = useState(false)

  if (playVideo)
    return (
      <Section className="max-w-5xl mx-auto mt-16 lg:mt-0">
        <VideoYoutube
          autoPlayInline
          videoId={featuredPodcast.attributes.youtubeId}
          type="Featured Podcast"
        />
      </Section>
    )

  return (
    <Section className="max-w-5xl mx-auto mt-16 lg:mt-8" classNameInner="relative">
      <div className="absolute hidden top-0 left-0 w-max bg-primary-light rounded-10 -rotate-45 p-3 z-20 lg:block">
        Check out the featured episode!
      </div>

      <div className="absolute hidden -top-12 left-1/4 z-20 lg:block">
        <Image src="/images/Podcast/arrow.svg" alt="arrow" width={120} height={45} />
      </div>

      <div className="absolute -top-6 flex -mb-6 z-20 xs:-top-12 lg:hidden">
        <div className="bg-primary-light rounded-10 -rotate-12 z-20 p-2">
          Check out the featured episode!
        </div>

        <div className="hidden xs:block">
          <Image src="/images/Podcast/arrow.svg" alt="arrow" width={120} height={45} />
        </div>
      </div>

      <div className="max-w-3xl bg-white shadow-lg rounded-3xl mx-auto p-2 lg:p-4">
        <div className="relative">
          <Image
            className="w-full h-auto rounded-3xl"
            src={featuredPodcast.attributes.thumbnail.data.attributes.url}
            alt={
              featuredPodcast.attributes.thumbnail.data.attributes.alternativeText ||
              'Featured Podcast Thumbnail'
            }
            width={600}
            height={400}
          />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center lg:hidden">
            <FontAwesomeIcon icon={faPlayCircle} className="!text-white shadow-md" size="3x" />
          </div>

          <div className="absolute hidden top-0 left-0 w-full h-full flex-col items-center justify-center bg-gradient-to-b from-transparent to-black-transparent rounded-4xl z-1 lg:flex">
            <FontAwesomeIcon
              icon={faPlayCircle}
              size="5x"
              className="text-white cursor-pointer"
              onClick={() => setPlayVideo(true)}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
