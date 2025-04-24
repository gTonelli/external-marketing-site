// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { ButtonBack } from '@/components/Button/variants/ButtonBack'
import { LinkWrapper } from '@/components/Link'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { ShareIcons } from '@/components/ShareIcons'
import { IATEbookForm } from '@/components/Forms/IATEbookForm'
import { IPodcast, PODCAST_PLATFORMS } from '../page'
// libraries
import cx from 'classnames'
import rehypeRaw from 'rehype-raw'
import { PluggableList } from 'react-markdown/lib/react-markdown'
import ReactMarkdown from 'react-markdown'
import { PodcastEpisode, WithContext } from 'schema-dts'
import { faChevronLeft, faChevronRight } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// style
import '../style.css'

async function fetchPodcasts(podcasts: IPodcast[] = [], page = 1): Promise<IPodcast[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?fields[0]=urlSlug&pagination[page]=${page}&pagination[pageSize]=100`,
    { next: { tags: ['podcasts'], revalidate: 86400 } }
  )
  const res = await response.json()
  if (res.meta.pagination.pageSize * res.meta.pagination.page < res.meta.pagination.total)
    return fetchPodcasts(podcasts.concat(res.data), res.meta.pagination.page + 1)
  return podcasts.concat(res.data)
}

export async function generateStaticParams() {
  const podcasts = await fetchPodcasts()

  return podcasts.map((podcast) => ({
    slug: podcast.urlSlug.toString(),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?filters[urlSlug]=${params.slug}&populate=thumbnail`,
      {
        next: { tags: [`podcast-${params.slug}`], revalidate: 86400 },
      }
    )
    const res = await response.json()
    const podcast: IPodcast = res.data.pop()
    const metadata: Metadata = {
      metadataBase: new URL('https://attachment.personaldevelopmentschool.com/podcast'),
      title: podcast.seoTitle,
      description: podcast.seoDescription,
      alternates: {
        canonical: `/${podcast.urlSlug}`,
      },
      robots: 'all',
      openGraph: {
        type: 'website',
        title: podcast.seoTitle,
        description: podcast.seoDescription,
        siteName: 'Personal Development School',
        url: `https://attachment.personaldevelopmentschool.com/podcast/${podcast.urlSlug}`,
        images: [
          {
            url: podcast.thumbnail.url,
            width: podcast.thumbnail.width,
            height: podcast.thumbnail.height,
          },
        ],
      },
    }
    return metadata
  } catch (error) {
    throw error
  }
}

async function fetchPodcastEpisode(slug: string): Promise<IPodcast> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?filters[urlSlug]=${slug}&populate=thumbnail`,
      {
        next: { tags: [`podcast-${slug}`], revalidate: 86400 },
      }
    )
    const res = await response.json()
    return res.data.pop()
  } catch (error) {
    throw error
  }
}

async function fetchPodcastPrevNext(releaseDate: string): Promise<IPodcast[]> {
  try {
    const prevRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?fields[0]=urlSlug&filters[releaseDate][$lt]=${releaseDate}&sort=releaseDate:desc&pagination[limit]=1`,
      {
        next: { tags: [`podcasts`], revalidate: 86400 },
      }
    )
    const prev = await prevRes.json()
    const nextRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?fields[0]=urlSlug&filters[releaseDate][$gt]=${releaseDate}&pagination[limit]=1`,
      {
        next: { tags: [`podcasts`], revalidate: 86400 },
      }
    )
    const next = await nextRes.json()
    return [prev.data.pop(), next.data.pop()]
  } catch (error) {
    throw error
  }
}

export default async function PodcastEpisodePage({ params }: { params: { slug: string } }) {
  const slug = params.slug

  const {
    epNo,
    title,
    description,
    guestName,
    youtubeId,
    spotifyId,
    applePodcastUrl,
    thumbnail,
    releaseDate,
  } = await fetchPodcastEpisode(slug)

  const [prev, next] = await fetchPodcastPrevNext(releaseDate)

  const jsonLd: WithContext<PodcastEpisode> = {
    '@context': 'https://schema.org',
    '@type': 'PodcastEpisode',
    name: title,
    description: description,
    datePublished: releaseDate,
    url: `https://attachment.personaldevelopmentschool.com/podcast/${slug}`,
    image: thumbnail.url,
    thumbnailUrl: thumbnail.url,
    author: {
      '@type': 'Person',
      name: 'Thais Gibson',
      description:
        'Thais Gibson is a best-selling author, counselor, speaker, and leader in the personal development field. She has a Ph.D. and is certified in over 13 modalities, including Cognitive Behavioral Therapy, NLP, Somatic Processing, and Trauma Work. Her scientific research, personal experience, and compassionate approach led to her founding the Gibson Integrated Attachment Theory™.',
      image: 'https://cdn-themes.thinkific.com/208694/380362/BnNTgjnfSomBQfuE3vcg_thais-seated.jpg',
    },
  }

  const getLinkUrl = (idx: number) =>
    [
      `https://www.youtube.com/watch?v=${youtubeId}`,
      applePodcastUrl,
      `https://open.spotify.com/episode/${spotifyId}`,
    ].at(idx)

  return (
    <Page page_name={`Podcast Episode Page - ${epNo}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section className="max-w-5xl mx-auto">
        <ButtonBack goBackUrl="/podcast" />

        <div className="w-full my-8">
          <VideoYoutube
            playInline
            classNameThumbnail="w-full"
            videoId={youtubeId}
            thumbnail={thumbnail.url}
            thumbnailAlt={thumbnail.alternativeText || 'Video thumbnail'}
            type="Podcast Episode Video"
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex-1">
            {prev && (
              <LinkWrapper
                className="w-max flex items-center border border-solid border-gray-light rounded-10 px-4 py-2 hover:text-white hover:no-underline hover:bg-primary"
                url={`/podcast/${prev.urlSlug}`}>
                <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />

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
            {next && (
              <LinkWrapper
                className="w-max flex items-center border border-solid border-gray-light rounded-10 px-4 py-2 hover:text-white hover:no-underline hover:bg-primary"
                url={`/podcast/${next.urlSlug}`}>
                <span className="font-bold tracking-33 mr-2">NEXT</span>

                <FontAwesomeIcon icon={faChevronRight} />
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
          <h3 className="mb-4">Listen to Episode #{epNo} on</h3>

          <div className="flex flex-col justify-center gap-4 mb-4 lg:flex-row">
            {PODCAST_PLATFORMS.map((item, idx) => (
              <LinkWrapper
                key={idx}
                url={getLinkUrl(idx)!}
                className="w-full flex justify-center items-center border border-solid border-black rounded-10 cursor-pointer px-8 py-4 group hover:bg-primary hover:border-primary hover:text-white hover:no-underline lg:w-max"
                target="_blank">
                <FontAwesomeIcon
                  icon={item.icon}
                  className={cx('mr-4 group-hover:text-white', item.iconColor)}
                />

                <p className="font-bold tracking-33">{item.name}</p>
              </LinkWrapper>
            ))}
          </div>

          <p className="font-bold mb-4">
            Listen to The Thais Gibson Podcast three times a week - every Monday, Thursday and
            Saturday.
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
            remarkRehypeOptions={{ allowDangerousHtml: true }}
            className="podcast-description">
            {description}
          </ReactMarkdown>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="w-full h-max bg-blue-lightest rounded-20 overflow-hidden px-6 pt-8">
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
          Subscribe and follow us on your favorite podcast platforms to keep track of the latest
          episodes, upcoming events, and exclusive content from The Thais Gibson Podcast.
        </p>

        <div className="flex flex-col justify-center gap-4 mb-4 lg:flex-row">
          {PODCAST_PLATFORMS.map((item, idx) => (
            <LinkWrapper
              url={item.link}
              className="w-full flex justify-center items-center border border-solid border-black rounded-10 cursor-pointer px-8 py-4 group hover:bg-primary hover:border-primary hover:text-white hover:no-underline lg:w-max"
              key={idx}>
              <FontAwesomeIcon
                icon={item.icon}
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
