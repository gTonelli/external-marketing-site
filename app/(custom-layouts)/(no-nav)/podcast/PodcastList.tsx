'use client'

// core
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// components
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon'

export interface IPodcast {
  episodeNo: number
  title: string
  releaseDate: string
  thumbnailUrl: string
  thumbnailAlt: string
  host?: string
  guestName?: string
  youtubePodcastId?: string
  spotifyPodcastId?: string
}

const podcastCategories = [
  'All Categories',
  'Featured Episodes',
  'Growth',
  'Relationships',
  'Spirituality',
  'Meditation',
  'Health',
]

const podcastFilters = ['Thais Only', 'With Guests']

const podcastSort = ['Newest to Oldest', 'Oldest to Newest']

const podcasts: IPodcast[] = [
  {
    episodeNo: 1,
    title:
      'How Attachment Theory & Reprogramming Your Subconscious Beliefs Will Change Your Life With Thais Gibson',
    releaseDate: '2024-04-03',
    host: 'Superhuman Academy',
    thumbnailUrl: '/images/RoyalRumbleResultsPage/intro_video_thais_thumbnail.png',
    thumbnailAlt: 'Video Thumbanail',
    youtubePodcastId: '15k9AahVAhE',
    spotifyPodcastId: '3zGBKXkqx7v2VuGhU4t0su',
  },
  {
    episodeNo: 2,
    title:
      'How Attachment Theory & Reprogramming Your Subconscious Beliefs Will Change Your Life With Thais Gibson',
    releaseDate: '2024-04-03',
    host: 'Superhuman Academy',
    thumbnailUrl: '/images/RoyalRumbleResultsPage/intro_video_thais_thumbnail.png',
    thumbnailAlt: 'Video Thumbanail',
    youtubePodcastId: '15k9AahVAhE',
    spotifyPodcastId: '3zGBKXkqx7v2VuGhU4t0su',
  },
]
/* 
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/episode/3zGBKXkqx7v2VuGhU4t0su?utm_source=generator&t=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
*/
export const PodcastList = () => {
  const [currentVideoId, setCurrentVideoId] = useState(-1)
  const [currentAudioId, setCurrentAudioId] = useState('')

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-8">
        <div className="w-full flex flex-col items-center gap-4 lg:w-max lg:flex-row lg:gap-8">
          <select className="w-full flex-1 bg-gray-200 rounded-10 p-3 lg:w-max">
            {podcastCategories.map((item, idx) => (
              <option key={idx} value={item.toLowerCase().replace(' ', '-')}>
                {item}
              </option>
            ))}
          </select>

          <select className="w-full bg-gray-200 rounded-10 p-3 lg:w-max">
            {podcastFilters.map((item, idx) => (
              <option key={idx} value={item.toLowerCase().replace(' ', '-')}>
                {item}
              </option>
            ))}
          </select>

          <select className="w-full bg-gray-200 rounded-10 p-3 lg:w-max">
            {podcastSort.map((item, idx) => (
              <option key={idx} value={item.toLowerCase().replace(' ', '-')}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full flex items-center rounded-full border border-solid border-black px-4 lg:w-72">
          <Icon name="magnifying-glass" />

          <input type="text" className="w-full border-none outline-none" placeholder="Search" />
        </div>
      </div>

      <div className="flex flex-col gap-8 my-8">
        {podcasts.map((item, idx) => (
          <div
            key={idx}
            className="w-full flex flex-col gap-4 border border-gray-light rounded-2xl p-4 lg:flex-row">
            <div className="w-full flex lg:w-64">
              {currentVideoId === item.episodeNo ? (
                <iframe
                  allowFullScreen
                  width="100%"
                  height={136}
                  src={`https://www.youtube.com/embed/${item.youtubePodcastId!}?autoplay=1`}
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <Image
                  src={item.thumbnailUrl}
                  alt={item.thumbnailAlt}
                  width={240}
                  height={140}
                  className="w-full h-auto rounded-xl lg:pr-4"
                />
              )}

              <div className="w-4 h-full border-r-2 border-gray-light" />
            </div>

            <div className="w-full flex flex-col flex-1 gap-4 text-left">
              <p>
                EP {item.episodeNo} - {item.releaseDate} <span className="mx-4">—</span>{' '}
                <strong>{item.host}</strong>
              </p>

              <h3 className="!text-lg">
                <strong>{item.title}</strong>
              </h3>

              <p className="text-primary">
                <span className="mr-2">
                  <Icon name="external-link" />
                </span>

                <Link className="underline font-bold" href={`/podcast/${item.episodeNo}`}>
                  Read More
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center flex-col gap-4 lg:w-60">
              <Button
                label="WATCH NOW"
                className="w-full"
                onClick={() => setCurrentVideoId(item.episodeNo)}
              />

              <Button
                label="LISTEN NOW"
                theme="black"
                className="w-full"
                onClick={() => setCurrentAudioId(item.spotifyPodcastId!)}
              />
            </div>
          </div>
        ))}
      </div>

      {currentAudioId && (
        <div className="fixed w-full h-max bg-white left-0 bottom-0 right-0 rounded-xl p-4 mx-auto z-20 lg:w-1/2">
          <div className="relative w-full h-full">
            <Icon
              className="absolute -top-4 -right-3 hover:cursor-pointer"
              name="close"
              onClick={() => setCurrentAudioId('')}
            />
            <iframe
              width="100%"
              height="152"
              src={`https://open.spotify.com/embed/episode/${currentAudioId}?&t=0`}
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  )
}
