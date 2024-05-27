// core
import Image from 'next/image'
// components
import { Button } from '@/components/Button/Button'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { IconName } from '@fortawesome/fontawesome-common-types'
// libraries
import cx from 'classnames'
// style
import './style.css'
import { Icon } from '@/components/Icon'
import { CSSProperties } from 'react'
import { PodcastList } from './PodcastList'
import { PodcastForm } from '@/components/PodcastForm'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { LinkWrapper } from '@/components/Link'

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
    link: '',
    icon: 'youtube',
    iconColor: 'text-[#FF0000]',
  },
  {
    name: 'APPLE',
    link: '',
    icon: 'podcast',
    iconColor: 'text-[#AA1DD3]',
    iconType: 'solid',
  },
  {
    name: 'SPOTIFY',
    link: '',
    icon: 'spotify',
    iconColor: 'text-[#1ED760]',
  },
  {
    name: 'AUDIBLE',
    link: '',
    icon: 'audible',
    iconColor: 'text-[#FF9800]',
  },
]

export default function PodcastPage() {
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

          <Button label="START WATCHING" />
        </div>
      </Section>

      <Section
        className={`bg-hero w-full hidden min-h-80 z-10 lg:block lg:py-32 xl:py-28 2xl:py-36 3xl:py-72`}
        classNameInner="relative z-10 lg:grid lg:grid-cols-12">
        <div className="text-black text-left lg:col-span-7">
          <p className="font-bold tracking-33 mb-4">THE THAIS GIBSON PODCAST</p>

          <h1 className="mb-4">Inner Strength with Thais Gibson</h1>

          <p className="mb-8">
            Discover new paths to personal growth through attachment exploration, enriched by the
            perspectives of our Thai guests.
          </p>

          <Button label="START WATCHING" />
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto mt-16 lg:mt-0" classNameInner="relative">
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
              src="/images/RoyalRumbleResultsPage/intro_video_thais_thumbnail.png"
              alt="Featured Podcast Thumbnail"
              width={600}
              height={400}
            />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center lg:hidden">
              <Icon name="play-circle" className="!text-white shadow-md" size="3x" />
            </div>

            <div className="absolute hidden top-0 left-0 w-full h-full flex-col items-center justify-end bg-gradient-to-b from-transparent to-black-transparent rounded-4xl z-1 lg:flex">
              <h2 className="text-white mb-8">
                Why Do I Love the Way That I Love: The 4 Attachment Styles Explained With Mel
                Robbins
              </h2>

              <Button label="START WATCHING" className="mb-16" />
            </div>
          </div>
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto">
        <p className="font-bold tracking-33 mb-4">LISTEN OR WATCH NEW EPISODES EVERY WEEK ON</p>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
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
        <PodcastList />
      </Section>

      <Section className="w-full bg-gray-light" classNameInner="max-w-5xl mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-full lg:w-60">Image</div>

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
      </Section>
    </Page>
  )
}
