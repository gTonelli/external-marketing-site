import Image from 'next/image'
import { Metadata } from 'next'
import { ButtonBack } from '@/components/Button/variants/ButtonBack'
import { Icon } from '@/components/Icon'
import { LinkWrapper } from '@/components/Link'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { ShareIcons } from '@/components/ShareIcons'
import { IATEbookForm } from '@/components/IATEbookForm'
import { IPodcastAttributes, IStrapiFetchProps, IStrapiResponse, PODCAST_PLATFORMS } from '../page'
import { PluggableList } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import cx from 'classnames'
import qs from 'qs'
import ReactMarkdown from 'react-markdown'

const FETCH_PODCAST_EPISODE_QUERY = qs.stringify({
  fields: [
    'title',
    'seoTitle',
    'seoDescription',
    'youtubeId',
    'spotifyId',
    'applePodcastUrl',
    'description',
    'guestName',
    'releaseDate',
  ],
  populate: ['thumbnail'],
})

export async function generateStaticParams() {
  const podcasts: IStrapiFetchProps<IStrapiResponse<IPodcastAttributes>[]> = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?fields[0]=id`
  ).then((res) => res.json())

  console.log(podcasts)

  return podcasts.data.map((podcast) => ({
    id: podcast.id.toString(),
  }))
}

export async function generateMetadata({ params }: { params: { id: number } }) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts/${params.id}?${FETCH_PODCAST_EPISODE_QUERY}`,
      {
        next: { tags: [`podcast-${params.id}`], revalidate: 1 },
      }
    )
    const res = await response.json()
    const podcast = res.data
    const metadata: Metadata = {
      metadataBase: new URL('https://attachment.personaldevelopmentschool.com/podcast'),
      title: podcast.attributes.seoTitle || podcast.attributes.title,
      description: podcast.attributes.seoDescription,
      alternates: {
        canonical: `/${podcast.id}`,
      },
      robots: 'all',
      openGraph: {
        type: 'website',
        title: podcast.attributes.seoTitle,
        description: podcast.attributes.seoDescription,
        siteName: 'Personal Development School',
        url: `https://attachment.personaldevelopmentschool.com/podcast/${podcast.id}`,
      },
    }
    return metadata
  } catch (error) {
    throw error
  }
}

async function fetchPodcastEpisode(
  id: number
): Promise<IStrapiFetchProps<IStrapiResponse<IPodcastAttributes>>> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts/${id}?${FETCH_PODCAST_EPISODE_QUERY}`,
      {
        next: { tags: [`podcast-${id}`], revalidate: 1 },
      }
    )
    const res = await response.json()
    return res
  } catch (error) {
    throw error
  }
}

async function fetchPodcastPrevNext(id: number, releaseDate: string) {
  try {
    const prevRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?fields[0]=id&filters[releaseDate][$lt]=${releaseDate}&sort=releaseDate:desc&pagination[limit]=1`,
      {
        next: { tags: [`podcast-${id}`], revalidate: 1 },
      }
    )
    const prev = await prevRes.json()
    const nextRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?fields[0]=id&filters[releaseDate][$gt]=${releaseDate}&pagination[limit]=1`,
      {
        next: { tags: [`podcast-${id}`], revalidate: 1 },
      }
    )
    const next = await nextRes.json()
    return { prev, next }
  } catch (error) {
    throw error
  }
}

export default async function PodcastEpisodePage({ params }: { params: { id: number } }) {
  const id = params.id
  const {
    data: {
      attributes: {
        title,
        description,
        guestName,
        youtubeId,
        spotifyId,
        applePodcastUrl,
        thumbnail,
        releaseDate,
      },
    },
  } = await fetchPodcastEpisode(id)

  const { prev, next } = await fetchPodcastPrevNext(id, releaseDate)

  const getLinkUrl = (id: number): string => {
    if (id === 0) return `https://www.youtube.com/watch?v=${youtubeId!}`
    else if (id === 1) return applePodcastUrl!
    else return `https://open.spotify.com/episode/${spotifyId!}`
  }

  return (
    <Page page_name={`Podcast Episode Page - ${id}`}>
      <Section className="max-w-5xl mx-auto">
        <ButtonBack />

        <div className="w-full my-8">
          <VideoYoutube
            playInline
            classNameThumbnail="w-full"
            videoId="15k9AahVAhE"
            thumbnail={thumbnail!.data[0].attributes.url}
            thumbnailAlt={thumbnail?.data[0].attributes.alternativeText || 'Video thumbnail'}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-1">
            {prev.data[0]?.id && (
              <LinkWrapper
                className="w-max flex items-center border border-solid border-gray-light rounded-10 px-4 py-2 hover:text-white hover:no-underline hover:bg-primary"
                url={`/podcast/${+prev.data[0].id}`}>
                <Icon name="chevron-left" className="mr-2" />

                <span className="font-bold tracking-33">PREV</span>
              </LinkWrapper>
            )}
          </div>

          {guestName && (
            <div className="hidden flex-1 lg:block">
              <p>Thais Gibson Podcast With {guestName}</p>
            </div>
          )}

          <div className="flex flex-1 justify-end">
            {next.data[0]?.id && (
              <LinkWrapper
                className="w-max flex items-center border border-solid border-gray-light rounded-10 px-4 py-2 hover:text-white hover:no-underline hover:bg-primary"
                url={`/podcast/${+next.data[0].id}`}>
                <span className="font-bold tracking-33 mr-2">NEXT</span>

                <Icon name="chevron-right" />
              </LinkWrapper>
            )}
          </div>
        </div>

        {guestName && (
          <div className="lg:hidden">
            <p>Thais Gibson Podcast With {guestName}</p>
          </div>
        )}

        <h1 className="my-8">{title}</h1>

        <div className="w-full rounded-20 border border-solid border-gray-200 p-4">
          <h3 className="mb-4">Listen to Episode #{id} on</h3>

          <div className="flex flex-col justify-center gap-4 mb-4 lg:flex-row">
            {PODCAST_PLATFORMS.map((item, idx) => (
              <LinkWrapper
                url={getLinkUrl(idx)}
                className="w-full flex justify-center items-center border border-solid border-black rounded-10 cursor-pointer px-8 py-4 group hover:bg-primary hover:border-primary hover:text-white hover:no-underline lg:w-max"
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

          <p className="font-bold mb-4">
            Listen to the Thais Gibson Podcast twice per week - every Monday and Thursday.
          </p>

          <div className="flex flex-col justify-center items-center gap-4 lg:flex-row">
            <p className="font-bold tracking-33">SHARE THIS EPISODE</p>

            <div>
              <ShareIcons />
            </div>
          </div>
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-12 gap-0 lg:gap-8">
        <div className="col-span-12 text-left pb-4 lg:col-span-8">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw] as PluggableList}
            remarkRehypeOptions={{ allowDangerousHtml: true }}>
            {description!}
          </ReactMarkdown>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="w-full h-full bg-blue-lightest rounded-20 overflow-hidden px-6 pt-8">
            <h3 className="mb-4">Get a FREE E-Book on Coaching Business</h3>

            <p className="mb-4">
              Sign up to our email list to receive exclusive offers, valuable tips, and most
              importantly the <strong>Coaching Business Ebook</strong> from Thais.
            </p>

            <IATEbookForm classNameFields="xxs:!flex-col gap-y-4" />

            <Image
              src="/images/Podcast/iat-ebook.png"
              alt="IAT Ebook mockup"
              className="mt-4"
              width={607}
              height={695}
            />
          </div>
        </div>
      </Section>

      <Section
        className="max-w-5xl mx-auto"
        classNameInner="w-full bg-gray-light rounded-20 px-6 py-8">
        <h2 className="mb-4">Listen, Watch, and Subscribe</h2>

        <p className="mb-4">
          Stay connected with us on social media and be the first to know about our latest episodes,
          upcoming events, and exclusive content. Follow us today and join the conversation!
        </p>

        <div className="flex flex-col justify-center gap-4 mb-4 lg:flex-row">
          {PODCAST_PLATFORMS.map((item, idx) => (
            <LinkWrapper
              url={item.link}
              className="w-full flex justify-center items-center border border-solid border-black rounded-10 cursor-pointer px-8 py-4 group hover:bg-primary hover:border-primary hover:text-white hover:no-underline lg:w-max"
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
    </Page>
  )
}
