'use client'

// core
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
// components
import {
  IPodcast,
  IPodcastCategory,
  IPodcastType,
} from '../../app/(custom-layouts)/(no-nav)/podcast/page'
// libraries
import _ from 'lodash'
import qs from 'qs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClose,
  faExternalLink,
  faMagnifyingGlass,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
// utils
import { IStrapiFetchProps, IStrapiResponse } from '@/utils/types'
import { PodcastListCTA } from './PodcastListCTA'
import { PodcastPagination } from './PodcastPagination'

interface IPodcastListProps {
  page: number
  podcastCategories: IStrapiResponse<IPodcastCategory>[]
  podcastTypes: IStrapiResponse<IPodcastType>[]
}

const FETCH_PODCASTS_QUERY = (page: number) =>
  qs.stringify({
    fields: ['epNo', 'title', 'youtubeId', 'spotifyId', 'releaseDate', 'guestName', 'urlSlug'],
    populate: ['thumbnail'],
    sort: 'releaseDate:desc',
    pagination: {
      page,
      pageSize: 5,
    },
  })

export const PodcastList = ({ page, podcastCategories, podcastTypes }: IPodcastListProps) => {
  const [currentVideoId, setCurrentVideoId] = useState(-1)
  const [currentAudioId, setCurrentAudioId] = useState('')
  const [podcastsList, setPodcastsList] = useState<IStrapiFetchProps<IStrapiResponse<IPodcast>[]>>()
  const categoryRef = useRef<HTMLSelectElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)
  const sortRef = useRef<HTMLSelectElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    async function fetchPodcasts(
      page: number = 1
    ): Promise<IStrapiFetchProps<IStrapiResponse<IPodcast>[]>> {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?${FETCH_PODCASTS_QUERY(page)}`,
          {
            next: { tags: ['podcasts'], revalidate: 86400 },
          }
        )
        const res = await response.json()
        return res
      } catch (error) {
        throw error
      }
    }
    fetchPodcasts(page).then((response) => setPodcastsList(response))
  }, [page])

  const constructQuery = useCallback(
    (page: number = 1) => {
      let query = []
      if (categoryRef.current?.value !== 'all')
        query.push(`filters[podcastCategory][name]=${categoryRef.current?.value}`)

      if (typeRef.current?.value !== 'all')
        query.push(`filters[podcastType][name]=${typeRef.current?.value}`)

      query.push(`sort=releaseDate:${sortRef.current?.value}`)

      if (searchRef.current?.value)
        query.push(`filters[title][$contains]=${searchRef.current.value}`)

      return query
        .join('&')
        .concat(`&populate=thumbnail&pagination[page]=${page}&pagination[pageSize]=5`)
    },
    [categoryRef.current, typeRef.current, sortRef.current, searchRef.current]
  )

  const handleChange = useCallback(async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?${constructQuery()}`,
      { next: { tags: ['podcasts'], revalidate: 86400 } }
    )
    const res = await response.json()
    setPodcastsList(res)
    setCurrentVideoId(-1)
  }, [categoryRef.current, typeRef.current, sortRef.current, searchRef.current])

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-8">
        <div className="w-full flex flex-col items-center gap-4 lg:w-max lg:flex-row lg:gap-8">
          <div className="w-full rounded-lg border border-grey-border lg:w-max">
            <select
              ref={categoryRef}
              name="podcastCategory"
              className="w-full rounded-lg border-transparent border-r-8 px-4 py-2"
              onChange={handleChange}>
              <option value="all">All Categories</option>

              {podcastCategories.map((item, idx) => (
                <option key={idx} value={item.attributes.name}>
                  {item.attributes.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full rounded-lg border border-grey-border lg:w-max">
            <select
              ref={typeRef}
              name="podcastType"
              className="w-full rounded-lg border-transparent border-r-8 px-4 py-2"
              onChange={handleChange}>
              <option value="all">All Types</option>

              {podcastTypes.map((item, idx) => (
                <option key={idx} value={item.attributes.name}>
                  {item.attributes.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full rounded-lg border border-grey-border lg:w-max">
            <select
              ref={sortRef}
              name="podcastSort"
              className="w-full rounded-lg border-transparent border-r-8 px-4 py-2"
              onChange={handleChange}>
              <option value="desc">Newest to Oldest</option>

              <option value="asc">Oldest to Newest</option>
            </select>
          </div>
        </div>

        <div className="w-full flex items-center rounded-full border border-solid border-grey-border px-4 lg:w-72">
          <FontAwesomeIcon icon={faMagnifyingGlass} />

          <input
            name="podcastSearch"
            ref={searchRef}
            type="text"
            className="w-full border-none outline-none"
            placeholder="Search"
            onChange={_.debounce(() => handleChange(), 1000)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-8 my-8">
        {!podcastsList ||
          (!podcastsList.data.length && (
            <p className="text-left">Your search does not match any results.</p>
          ))}

        {podcastsList &&
          podcastsList.data.map((item, idx) => (
            <div
              key={idx}
              className="w-full flex flex-col gap-4 border border-gray-light rounded-2xl p-4 lg:flex-row">
              <div className="w-full flex lg:w-64">
                {currentVideoId === +item.attributes.epNo ? (
                  <iframe
                    allowFullScreen
                    className="w-full min-w-64 h-auto aspect-video rounded-xl lg:mr-4"
                    width="100%"
                    src={`https://www.youtube.com/embed/${item.attributes.youtubeId}?autoplay=1`}
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={item.attributes.thumbnail.data.attributes.url}
                    alt={
                      item.attributes.thumbnail.data.attributes.alternativeText || 'Video Thumbnail'
                    }
                    width={240}
                    height={140}
                    className="min-w-64 w-full h-auto rounded-xl lg:mr-4"
                  />
                )}
                <div className="w-4 h-full border-r-2 border-gray-light hidden lg:block" />
              </div>

              <div className="w-full flex flex-col flex-1 gap-4 text-left lg:pl-4">
                <p>
                  EP {item.attributes.epNo} - {item.attributes.releaseDate.replaceAll('-', '.')}{' '}
                  {item.attributes.guestName && (
                    <>
                      <span className="mx-2">—</span>
                      <span>with </span>
                      <strong>{item.attributes.guestName}</strong>{' '}
                    </>
                  )}
                </p>

                <h2 className="!text-lg">
                  <Link href={`/podcast/${item.attributes.urlSlug}`}>
                    <strong>{item.attributes.title}</strong>
                  </Link>
                </h2>

                <p className="text-primary">
                  <span className="mr-2">
                    <FontAwesomeIcon icon={faExternalLink} />
                  </span>

                  <Link
                    className="underline font-bold"
                    href={`/podcast/${item.attributes.urlSlug}`}>
                    Read More
                  </Link>
                </p>
              </div>

              <PodcastListCTA
                id={+item.attributes.epNo}
                setCurrentVideoId={setCurrentVideoId}
                setCurrentAudioId={setCurrentAudioId}
                spotifyId={item.attributes.spotifyId}
              />
            </div>
          ))}
      </div>

      <div>
        {podcastsList && (
          <PodcastPagination
            pageSize={5}
            currPage={page ?? 1}
            pageCount={Math.ceil(podcastsList.meta.pagination.total / 5)}
          />
        )}
      </div>

      {/* TODO: Pagination */}

      {currentAudioId && (
        <div className="fixed w-full h-max bg-white left-0 bottom-0 right-0 rounded-xl p-4 mx-auto z-20 lg:w-1/2">
          <div className="relative w-full h-full">
            <FontAwesomeIcon
              className="absolute -top-4 -right-3 hover:cursor-pointer"
              icon={faClose}
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
