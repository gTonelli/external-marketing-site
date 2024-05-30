'use client'

// core
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// components
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon'
import {
  IPodcastAttributes,
  IPodcastCategoryAttributes,
  IPodcastTypeAttributes,
  IStrapiFetchProps,
  IStrapiResponse,
} from './page'

const podcastSort = ['Newest to Oldest', 'Oldest to Newest']
interface IPodcastListProps {
  podcasts: IStrapiFetchProps<IStrapiResponse<IPodcastAttributes>[]>
  podcastCategories: IStrapiFetchProps<IStrapiResponse<IPodcastCategoryAttributes>[]>
  podcastTypes: IStrapiFetchProps<IStrapiResponse<IPodcastTypeAttributes>[]>
}

export const PodcastList = ({ podcasts, podcastCategories, podcastTypes }: IPodcastListProps) => {
  const [currentVideoId, setCurrentVideoId] = useState(-1)
  const [currentAudioId, setCurrentAudioId] = useState('')

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-8">
        <div className="w-full flex flex-col items-center gap-4 lg:w-max lg:flex-row lg:gap-8">
          <select className="w-full flex-1 bg-gray-200 rounded-10 p-3 lg:w-max">
            <option value="all">All Categories</option>

            {podcastCategories.data.map((item, idx) => (
              <option key={idx} value={item.attributes.name}>
                {item.attributes.name}
              </option>
            ))}
          </select>

          <select className="w-full bg-gray-200 rounded-10 p-3 lg:w-max">
            {podcastTypes.data.map((item, idx) => (
              <option key={idx} value={item.attributes.name}>
                {item.attributes.name}
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
        {podcasts.data.map((item, idx) => (
          <div
            key={idx}
            className="w-full flex flex-col gap-4 border border-gray-light rounded-2xl p-4 lg:flex-row">
            <div className="w-full flex lg:w-64">
              {currentVideoId === +item.id ? (
                <iframe
                  allowFullScreen
                  width="100%"
                  height={136}
                  src={`https://www.youtube.com/embed/${item.attributes.youtubeId!}?autoplay=1`}
                  allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <Image
                  src={item.attributes.thumbnail!.data[0].attributes.url}
                  alt={
                    item.attributes.thumbnail?.data[0].attributes.alternativeText ||
                    'Video Thumbnail'
                  }
                  width={240}
                  height={140}
                  className="w-full h-auto rounded-xl mr-4"
                />
              )}

              <div className="w-4 h-full border-r-2 border-gray-light" />
            </div>

            <div className="w-full flex flex-col flex-1 gap-4 text-left lg:pl-4">
              <p>
                EP {item.id} - {item.attributes.releaseDate}{' '}
                {item.attributes.guestName && (
                  <>
                    <span className="mx-4">— with </span>
                    <strong>{item.attributes.guestName}</strong>{' '}
                  </>
                )}
              </p>

              <h3 className="!text-lg">
                <Link href={`/podcast/${item.id}`}>
                  <strong>{item.attributes.title}</strong>
                </Link>
              </h3>

              <p className="text-primary">
                <span className="mr-2">
                  <Icon name="external-link" />
                </span>

                <Link className="underline font-bold" href={`/podcast/${item.id}`}>
                  Read More
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center flex-col gap-4 lg:w-60">
              <Button
                label="WATCH NOW"
                className="w-full"
                onClick={() => setCurrentVideoId(+item.id)}
              />

              <Button
                label="LISTEN NOW"
                theme="black"
                className="w-full"
                onClick={() => setCurrentAudioId(item.attributes.spotifyId!)}
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
              loading="lazy">
              <script>var b = 1;</script>
            </iframe>
          </div>
        </div>
      )}
    </>
  )
}
