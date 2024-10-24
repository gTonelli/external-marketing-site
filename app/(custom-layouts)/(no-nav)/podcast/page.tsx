// core
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { Section } from '@/components/Section'
import { LinkWrapper } from '@/components/Link'
import { PodcastList } from '@/components/Podcast/PodcastList'
import { FeaturedPodcast } from '@/components/Podcast/FeaturedPodcast'
import { PodcastSuggestionForm } from '@/components/Podcast/PodcastSuggestionForm'
import { PodcastFreebieForm } from '@/components/Forms/PodcastFreebieForm'
// libraries
import cx from 'classnames'
import qs from 'qs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faYoutube } from '@awesome.me/kit-545b942488/icons/classic/brands'
import { faPodcast } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
// style
import './style.css'
// utils
import { IStrapiThumbnail, IStrapiFetchProps, IStrapiResponse } from '@/utils/types'

type Props = {
  searchParams: {
    page: number
  }
}

export interface IPodcast {
  epNo: string
  title: string
  releaseDate: string
  youtubeId: string
  spotifyId: string
  applePodcastUrl: string
  thumbnail: { data: IStrapiThumbnail }
  isFeatured: boolean
  description: string
  seoTitle: string
  seoDescription: string
  urlSlug: string
  guestName?: string
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
}
export interface IPodcastCategory {
  name: string
}

export interface IPodcastType {
  name: string
}

interface IPodcastPlatform {
  name: string
  icon: IconProp
  link: string
  iconColor: string
}

export const PODCAST_PLATFORMS: IPodcastPlatform[] = [
  {
    name: 'YOUTUBE',
    link: 'https://www.youtube.com/@ThePersonalDevelopmentSchool',
    icon: faYoutube,
    iconColor: 'text-[#FF0000]',
  },
  {
    name: 'APPLE',
    link: 'https://podcasts.apple.com/us/podcast/personal-development-school/id1478580185?uo=4',
    icon: faPodcast,
    iconColor: 'text-[#AA1DD3]',
  },
  {
    name: 'SPOTIFY',
    link: 'https://open.spotify.com/show/2pf5IbQB9F4OLW9FWyjzaz',
    icon: faSpotify,
    iconColor: 'text-[#1ED760]',
  },
]

const FETCH_FEATURED_PODCAST_QUERY = qs.stringify({
  fields: ['youtubeId'],
  populate: ['thumbnail'],
  sort: 'releaseDate:desc',
  filters: {
    isFeatured: true,
  },
  pagination: {
    limit: 1,
  },
})

async function fetchFeaturedPodcast(): Promise<IStrapiResponse<IPodcast>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?${FETCH_FEATURED_PODCAST_QUERY}`,
      {
        next: { tags: ['podcasts'], revalidate: 86400 },
      }
    )
    const res = await response.json()
    return res.data.pop()
  } catch (error) {
    throw error
  }
}

async function fetchPodcastCategories(): Promise<IStrapiResponse<IPodcastCategory>[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcast-categories`, {
      next: { tags: ['podcast-categories'], revalidate: 86400 },
    })
    const res = await response.json()
    return res.data
  } catch (error) {
    throw error
  }
}

async function fetchPodcastTypes(): Promise<IStrapiResponse<IPodcastType>[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcast-types`, {
      next: { tags: ['podcast-types'], revalidate: 86400 },
    })
    const res = await response.json()
    return res.data
  } catch (error) {
    throw error
  }
}

export async function generateMetadata({ searchParams: { page } }: Props): Promise<Metadata> {
  const baseUrl = 'https://attachment.personaldevelopmentschool.com/podcast'

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?fields[0]=id&pagination[pageSize]=1`,
    {
      next: { tags: ['podcasts'], revalidate: 86400 },
    }
  )
  const res: IStrapiFetchProps<IStrapiResponse<IPodcast>[]> = await response.json()
  const lastPage = Math.ceil(res.meta.pagination.total / 5)
  let otherMetaData: { rel: 'prev' | 'next'; url: string }[] = []
  if (page) {
    if (+page === 2) otherMetaData.push({ rel: 'prev', url: `${baseUrl}` })
    else otherMetaData.push({ rel: 'prev', url: `${baseUrl}?page=${+page - 1}` })
    if (+page !== lastPage) otherMetaData.push({ rel: 'next', url: `${baseUrl}?page=${+page + 1}` })
  } else otherMetaData.push({ rel: 'next', url: `${baseUrl}?page=2` })

  const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: 'Listen to The Thais Gibson Podcast',
    description:
      'Experience personal growth with The Thais Gibson Podcast. Episodes are available on all popular podcast platforms three times a week.',
    robots: 'all',
    alternates: {
      canonical: '/',
    },
    icons: {
      other: otherMetaData,
    },
  }
  return metadata
}

export default async function PodcastPage({ searchParams: { page } }: Props) {
  const featuredPodcast = await fetchFeaturedPodcast()
  const podcastCategories = await fetchPodcastCategories()
  const podcastTypes = await fetchPodcastTypes()

  return (
    <Page withIntercom page_name="Podcast Page" className="relative">
      <Section
        className="bg-hero w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-hero-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-7">
          <p className="font-bold tracking-33 mb-4">INNER STRENGTH WITH THAIS GIBSON</p>

          <h1 className="mb-4">The Thais Gibson Podcast</h1>

          <p className="mb-8">
            Discover new paths, concepts, and approaches to personal and relationship growth through
            Q&As, inspiring stories, exclusive strategies, and special interviews with prominent
            guests, on The Thais Gibson Podcast.
          </p>
        </div>
      </Section>

      {featuredPodcast && <FeaturedPodcast featuredPodcast={featuredPodcast} />}

      <Section className="max-w-5xl mx-auto">
        <p className="font-bold tracking-33 mb-4">
          LISTEN OR WATCH NEW EPISODES THREE TIMES A WEEK ON:
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {PODCAST_PLATFORMS.map((item, idx) => (
            <LinkWrapper
              url={item.link}
              className="flex justify-center items-center border border-solid border-black rounded-10 cursor-pointer px-8 py-4 group hover:bg-primary hover:border-primary hover:text-white hover:no-underline"
              key={idx}
              target="_blank">
              <FontAwesomeIcon
                icon={item.icon}
                className={cx('mr-4 group-hover:text-white', item.iconColor)}
              />

              <p className="font-bold tracking-33">{item.name}</p>
            </LinkWrapper>
          ))}
        </div>
      </Section>

      <Section className="max-w-6xl mx-auto" classNameInner="!w-full !max-w-full !m-0">
        <PodcastList
          page={page}
          podcastCategories={podcastCategories}
          podcastTypes={podcastTypes}
        />
      </Section>

      <Section className="w-full bg-gray-light" classNameInner="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-full lg:w-60">
            <Image
              src="/images/PodcastFreebie/rebuilding-trust-freebie.png"
              alt="Rebuilding Trust Workbook Mockup"
              width={278}
              height={309}
            />
          </div>

          <div className="w-full text-left">
            <h2 className="mb-4">Be the First to Hear Our Freebie Episode!</h2>

            <p className="mb-4">
              Enter your email below and hit submit so you don't miss out on the latest episodes,
              exclusive content, and special offers. Sign up now to stay in the loop and be part of
              our growing community.
            </p>

            <PodcastFreebieForm />
          </div>
        </div>
      </Section>

      <CarouselTestimonialThinkific className="mt-16" initialSlide={1} />

      <Section className="max-w-3xl mx-auto">
        <h2 className="mb-8">
          Suggest a Captivating Topic, an Engaging Guest, or Appear on the Podcast
        </h2>

        <p className="mb-8">
          Have a topic or a guest in mind? Or do you want to come on the podcast? Let us know! We
          want to hear what topics you're interested in exploring, so submit your suggestions, and
          we'll consider them for future episodes.
        </p>

        <PodcastSuggestionForm submitButtonLabel="SUBMIT REQUEST" />
      </Section>

      <Section
        className="max-w-5xl mx-auto"
        classNameInner="w-full flex flex-col items-center gap-8 rounded-3xl bg-blue-lightest lg:flex-row p-8">
        <div className="flex-1 ">
          <Image
            src="/images/Podcast/reddit.jpg"
            alt="Reddit Thread"
            width={768}
            height={500}
            className="w-full h-auto rounded-3xl object-cover"
          />
        </div>

        <div className="flex-1 text-left">
          <h2 className="mb-4">r/CanThisBeFixed</h2>

          <p className="mb-4">
            Whether you can never stick to your fitness routine, end up sabotaging your
            relationships, or need advice on transforming your life, submit your questions via our
            Reddit Subthread, and they might be featured on The Thais Gibson Podcast. Personal
            development leader Thais Gibson herself will give you valuable feedback on your
            situation with science-backed solutions.
          </p>

          <Link
            target="_blank"
            href="https://www.reddit.com/r/CanThisBeFixed/"
            className="border-2 border-black bg-black text-white rounded-full tracking-10 !no-underline cursor-pointer px-4 py-2 hover:text-white hover:bg-black-transparent">
            DIRECT TO REDDIT
          </Link>
        </div>
      </Section>
    </Page>
  )
}
