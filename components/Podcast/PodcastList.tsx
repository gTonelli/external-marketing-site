'use client'

// core
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
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
  selectedCategoryFilter?: string
  selectedTypeFilter?: string
  selectedSortFilter?: string
  currentSearchFilter?: string
}

const FETCH_PODCASTS_QUERY = (
  page: number,
  selectedCategoryFilter?: string,
  selectedTypeFilter?: string,
  selectedSortFilter?: string,
  currentSearchFilter?: string
) =>
  qs.stringify({
    fields: ['epNo', 'title', 'youtubeId', 'spotifyId', 'releaseDate', 'guestName', 'urlSlug'],
    filters: {
      podcastCategory: {
        name: {
          $eq: selectedCategoryFilter,
        },
      },
      podcastType: {
        name: {
          $eq: selectedTypeFilter,
        },
      },
      title: {
        $contains: currentSearchFilter,
      },
    },
    populate: ['thumbnail'],
    sort: `releaseDate:${selectedSortFilter}`,
    pagination: {
      page,
      pageSize: 5,
    },
  })

export const PodcastList = ({
  page,
  selectedCategoryFilter,
  selectedTypeFilter,
  selectedSortFilter = 'desc',
  currentSearchFilter,
  podcastCategories,
  podcastTypes,
}: IPodcastListProps) => {
  const [loading, setLoading] = useState(true)
  const [currentVideoId, setCurrentVideoId] = useState(-1)
  const [currentAudioId, setCurrentAudioId] = useState('')
  const [podcastsList, setPodcastsList] = useState<IStrapiFetchProps<IStrapiResponse<IPodcast>[]>>()
  const categoryRef = useRef<HTMLSelectElement>(null)
  const typeRef = useRef<HTMLSelectElement>(null)
  const sortRef = useRef<HTMLSelectElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchPodcasts(
      page: number = 1
    ): Promise<IStrapiFetchProps<IStrapiResponse<IPodcast>[]>> {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?${FETCH_PODCASTS_QUERY(
            page,
            selectedCategoryFilter,
            selectedTypeFilter,
            selectedSortFilter || 'desc',
            currentSearchFilter
          )}`,
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
    setLoading(false)
  }, [page, selectedCategoryFilter, selectedTypeFilter, selectedSortFilter, currentSearchFilter])

  const handleChange = async (e?: ChangeEvent, currPage?: number) => {
    let qst = qs.stringify(
      {
        page: currPage || 1,
        category: categoryRef.current?.value,
        type: typeRef.current?.value,
        sort: sortRef.current?.value,
        q: searchRef.current?.value,
      },
      {
        /* omit default values: filters that have no value or if the value is 'all' or 'desc' */
        filter: (_, val) => (!val || val === 'all' || val === 'desc' ? undefined : val),
      }
    )
    router.push(`/podcast?${qst}`)
  }

  if (loading) {
    return <p>Loading....</p>
  }

  return (
    <>
      <div
        className="flex flex-col items-center justify-between gap-4 lg:flex-row lg:gap-8"
        id="podcast-list">
        <div className="w-full flex flex-col items-center gap-4 lg:w-max lg:flex-row lg:gap-8">
          <div className="w-full rounded-lg border border-primary hover:border-grey-border lg:w-max">
            <select
              ref={categoryRef}
              name="podcastCategory"
              className="w-full cursor-pointer rounded-lg border-transparent border-r-8 px-4 py-2"
              onChange={handleChange}
              value={selectedCategoryFilter || 'all'}>
              <option value="all">All Categories</option>

              {podcastCategories.map((item, idx) => (
                <option key={idx} value={item.attributes.name}>
                  {item.attributes.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full rounded-lg border border-primary hover:border-grey-border lg:w-max">
            <select
              ref={typeRef}
              name="podcastType"
              className="w-full cursor-pointer rounded-lg border-transparent border-r-8 px-4 py-2"
              onChange={handleChange}
              value={selectedTypeFilter || 'all'}>
              <option value="all">All Types</option>

              {podcastTypes.map((item, idx) => (
                <option key={idx} value={item.attributes.name}>
                  {item.attributes.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full rounded-lg border border-primary hover:border-grey-border lg:w-max">
            <select
              ref={sortRef}
              name="podcastSort"
              className="w-full cursor-pointer rounded-lg border-transparent border-r-8 px-4 py-2"
              onChange={handleChange}
              value={selectedSortFilter}>
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
            value={currentSearchFilter}
            onChange={_.debounce((e) => handleChange(e), 1000)}
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
        {podcastsList && podcastsList.meta.pagination.total > 5 && (
          <PodcastPagination
            pageSize={5}
            currPage={page}
            pageCount={podcastsList.meta.pagination.pageCount}
            handleChange={handleChange}
          />
        )}
      </div>

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
