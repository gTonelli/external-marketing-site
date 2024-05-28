import Image from 'next/image'
import { ButtonBack } from '@/components/Button/variants/ButtonBack'
import { Icon } from '@/components/Icon'
import { LinkWrapper } from '@/components/Link'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { IPodcast } from '../PodcastList'
import { PODCAST_PLATFORMS } from '../page'
import cx from 'classnames'
import { ShareIcons } from '@/components/ShareIcons'
import { IATEbookForm } from '@/components/IATEbookForm'

export default function PodcastEpisodePage({ params }: { params: { id: number } }) {
  const id = params.id

  const currentEpisode: IPodcast = {
    episodeNo: id,
    title:
      'How Attachment Theory & Reprogramming Your Subconscious Beliefs Will Change Your Life With Thais Gibson',
    releaseDate: '2024-04-03',
    thumbnailUrl: '/images/RoyalRumbleResultsPage/intro_video_thais_thumbnail.png',
    thumbnailAlt: 'Video Thumbanail',
    host: 'Superhuman Academy',
    guestName: 'Mel Robbins',
    youtubePodcastId: '15k9AahVAhE',
    spotifyPodcastId: '3zGBKXkqx7v2VuGhU4t0su',
  }
  return (
    <Page page_name={`Podcast Episode Page - ${id}`}>
      <Section className="max-w-5xl mx-auto">
        <ButtonBack />

        <div className="w-full my-8">
          <VideoYoutube
            videoId="15k9AahVAhE"
            classNameThumbnail="w-full"
            thumbnail={currentEpisode.thumbnailUrl}
            thumbnailAlt={currentEpisode.thumbnailAlt}
          />
        </div>

        <div className="flex justify-between items-center">
          <div>
            {id != 1 && (
              <LinkWrapper
                className="flex items-center border border-solid border-gray-light rounded-10 px-4 py-2 hover:text-white hover:no-underline hover:bg-primary"
                url={`/podcast/${+id - 1}`}>
                <Icon name="chevron-left" className="mr-2" />

                <span className="font-bold tracking-33">PREV</span>
              </LinkWrapper>
            )}
          </div>

          {currentEpisode.guestName && (
            <div className="hidden lg:block">
              <p>Thais Gibson Podcast With {currentEpisode.guestName}</p>
            </div>
          )}

          <div>
            {/* refactor to max length - 1 */}
            {id != 50 && (
              <LinkWrapper
                className="flex items-center border border-solid border-gray-light rounded-10 px-4 py-2 hover:text-white hover:no-underline hover:bg-primary"
                url={`/podcast/${+id + 1}`}>
                <span className="font-bold tracking-33 mr-2">NEXT</span>

                <Icon name="chevron-right" />
              </LinkWrapper>
            )}
          </div>
        </div>

        {currentEpisode.guestName && (
          <div className="w-full block lg:hidden">
            <p>Thais Gibson Podcast With {currentEpisode.guestName}</p>
          </div>
        )}

        <h1 className="my-8">{currentEpisode.title}</h1>

        <div className="w-full rounded-20 border border-solid border-gray-200 p-4">
          <h3 className="mb-4">Listen to Episode #{id} on</h3>

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
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
