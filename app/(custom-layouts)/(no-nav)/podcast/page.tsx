// core
import Image from 'next/image'
// components
import { Button } from '@/components/Button/Button'
import { Page } from '@/components/Page'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { Section } from '@/components/Section'
import { Icon } from '@/components/Icon'
import { IconName } from '@fortawesome/fontawesome-common-types'
import { LinkWrapper } from '@/components/Link'
import { PodcastForm } from '@/components/PodcastForm'
import { PodcastList } from './PodcastList'
import { FeaturedPodcast } from './FeaturedPodcast'
// libraries
import cx from 'classnames'
import qs from 'qs'
// style
import './style.css'

export interface IStrapiThumbnail {
  id: number
  attributes: {
    name: string
    alternativeText: string
    url: string
    width: number
    height: number
  }
}

export interface IStrapiFetchProps<T> {
  data: T
  meta: {
    pagination: {
      start: number
      limit: number
      total: number
    }
  }
}
export interface IStrapiResponse<T> {
  id: string
  attributes: T
}

export interface IPodcast {
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
  guestName?: string
}
export interface IPodcastCategory {
  name: string
}

export interface IPodcastType {
  name: string
}

interface IPodcastPlatform {
  name: string
  icon: IconName
  link: string
  iconColor: string
  iconType?: 'brands' | 'solid'
}

export const PODCAST_PLATFORMS: IPodcastPlatform[] = [
  {
    name: 'YOUTUBE',
    link: 'https://www.youtube.com/@ThePersonalDevelopmentSchool',
    icon: 'youtube',
    iconColor: 'text-[#FF0000]',
  },
  {
    name: 'APPLE',
    link: 'https://podcasts.apple.com/us/podcast/personal-development-school/id1478580185?uo=4',
    icon: 'podcast',
    iconColor: 'text-[#AA1DD3]',
    iconType: 'solid',
  },
  {
    name: 'SPOTIFY',
    link: 'https://open.spotify.com/show/2pf5IbQB9F4OLW9FWyjzaz',
    icon: 'spotify',
    iconColor: 'text-[#1ED760]',
  },
]

const FETCH_PODCASTS_QUERY = qs.stringify({
  fields: ['title', 'youtubeId', 'spotifyId', 'releaseDate', 'guestName'],
  populate: ['thumbnail'],
  sort: ['releaseDate:desc'],
  pagination: {
    page: 1,
    pageSize: 5,
  },
})

const FETCH_FEATURED_PODCAST_QUERY = qs.stringify({
  fields: ['youtubeId'],
  populate: ['thumbnail'],
  filters: {
    isFeatured: true,
  },
  pagination: {
    limit: 1,
  },
})

async function fetchPodcasts(): Promise<IStrapiFetchProps<IStrapiResponse<IPodcast>[]>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?${FETCH_PODCASTS_QUERY}`,
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

export default async function PodcastPage() {
  const podcastsData = await fetchPodcasts()
  const featuredPodcast = await fetchFeaturedPodcast()
  const podcastCategories = await fetchPodcastCategories()
  const podcastTypes = await fetchPodcastTypes()

  return (
    <Page page_name="Podcast Page" className="relative">
      <Section className="bg-hero-mobile z-15 lg:hidden">
        <div className="text-black text-left relative z-20 lg:col-span-7">
          <p className="font-bold tracking-33 mb-4">THE THAIS GIBSON PODCAST</p>

          <h1 className="mb-4">Inner Strength with Thais Gibson</h1>

          <p className="mb-8">
            Discover new paths to personal growth through attachment exploration, enriched by the
            perspectives of our Thai guests.
          </p>
        </div>
      </Section>

      <Section
        className={`w-full min-h-52 z-10 bg-hero lg:py-24 xl:py-28 2xl:py-32 3xl:py-40`}
        classNameInner="relative z-10 lg:grid lg:grid-cols-12">
        <div className="text-black text-left hidden lg:col-span-7 lg:block">
          <p className="font-bold tracking-33 mb-4">THE THAIS GIBSON PODCAST</p>

          <h1 className="mb-4">Inner Strength with Thais Gibson</h1>

          <p className="mb-8">
            Discover new paths to personal growth through attachment exploration, enriched by the
            perspectives of our Thai guests.
          </p>
        </div>
      </Section>

      <FeaturedPodcast featuredPodcast={featuredPodcast} />

      <Section className="max-w-5xl mx-auto">
        <p className="font-bold tracking-33 mb-4">LISTEN OR WATCH NEW EPISODES EVERY WEEK ON</p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {PODCAST_PLATFORMS.map((item, idx) => (
            <LinkWrapper
              url={item.link}
              className="flex justify-center items-center border border-solid border-black rounded-10 cursor-pointer px-8 py-4 group hover:bg-primary hover:border-primary hover:text-white hover:no-underline"
              key={idx}>
              <Icon
                name={item.icon}
                type={item.iconType ?? 'brands'}
                className={cx('mr-4 group-hover:text-white', item.iconColor)}
              />

              <p className="font-bold tracking-33">{item.name}</p>
            </LinkWrapper>
          ))}
        </div>
      </Section>

      <Section className="max-w-6xl mx-auto" classNameInner="!w-full !max-w-full !m-0">
        <PodcastList
          podcasts={podcastsData}
          podcastCategories={podcastCategories}
          podcastTypes={podcastTypes}
        />
      </Section>

      <Section className="w-full bg-gray-light" classNameInner="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-full lg:w-60">
            <Image
              src="/images/Podcast/men-announcing.svg"
              alt="Man announcing vector"
              width={280}
              height={144}
            />
          </div>

          <div className="w-full text-left">
            <h2 className="mb-4">Be the First to Hear Our Freebie Episode!</h2>

            <p className="mb-4">
              Stay updated with the latest episodes! Enter your email below and hit subscribe -
              Don't miss out on our latest episodes, exclusive content, and special offers. Sign up
              now to stay in the loop and be part of our growing community.
            </p>

            <PodcastForm />
          </div>
        </div>
      </Section>

      <CarouselTestimonialThinkific className="mt-16" />

      {/* TODO: form submission */}
      <Section className="max-w-3xl mx-auto">
        <h2 className="mb-8">Suggest A Topic</h2>

        <p className="mb-8">
          Have a topic in mind? Let us know! Submit your suggestions here - We value your input and
          want to hear what topics you're interested in exploring. Share your ideas with us, and
          we'll consider them for future episodes.
        </p>

        <div className="w-full flex flex-col items-center gap-4">
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2">
            <input type="text" name="name" className="rounded-lg" placeholder="Your Name" />

            <input type="email" name="email" className="rounded-lg" placeholder="Your Email" />
          </div>

          <select className="w-full rounded-lg px-4 py-2 border border-[#6b7280]">
            <option defaultValue="" disabled value="">
              Have an idea for our next episode? Select an option below:
            </option>

            <option value="recommend-a-guest">Recommend a Guest</option>

            <option value="suggest-a-topic">Suggest a Topic</option>
          </select>

          <textarea
            className="w-full rounded-lg px-4 py-2 border border-[#6b7280]"
            rows={4}
            placeholder="Enter your suggestion here..."
          />

          <Button label="SUBMIT REQUEST" />
        </div>
        {/* TODO: redirect to reddit */}
      </Section>
    </Page>
  )
}
