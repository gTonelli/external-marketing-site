// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faSparkles } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { MHA_SERIES_CONFIG as CONFIG } from './config'
// utils
import { EExternalRoutes } from '@/utils/constants'
// styles
import './style.css'

export const dynamicParams = false

interface IMHASeriesPageParams {
  params: Promise<{
    category: 'anxiety' | 'self-esteem'
    status: 'singles' | 'relationships'
  }>
}

export function generateStaticParams() {
  return [
    { category: 'anxiety', status: 'singles' },
    { category: 'anxiety', status: 'relationships' },
    { category: 'self-esteem', status: 'singles' },
    { category: 'self-esteem', status: 'relationships' },
  ]
}

export async function generateMetadata({ params }: IMHASeriesPageParams): Promise<Metadata> {
  const { category, status } = await params

  return {
    title: CONFIG[category][status].seoTitle,
    description: CONFIG[category][status].seoDescription,
    robots: 'noindex',
  }
}

export default async function MHASeriesPage({ params }: IMHASeriesPageParams) {
  const { category, status } = await params
  const config = CONFIG[category]
  const ctaUrl = EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL

  return (
    <Page page_name={`MHA - ${category} ${status}`}>
      <Section
        className="bg-gradient-to-b from-pink-auxiliary to-white"
        classNameInner="!max-w-4xl mx-auto">
        <h1 className="mb-8">{config[status].header}</h1>

        <p className="mb-8">{config[status].subheader}</p>

        <div className="w-full bg-white rounded-2xl shadow-xl p-4 mx-auto">
          <VideoYoutube
            playInline
            classNameThumbnail="w-full"
            videoId={config.videoId}
            thumbnail="/images/pds-video-thumbnail.jpg"
            thumbnailAlt={`Video about FA - ${category}`}
          />
        </div>
      </Section>

      <Section classNameInner="!max-w-4xl !text-left mx-auto">
        <h2 className="mb-8">{config[status].offerHeader}</h2>

        <p className="tracking-33 mb-8">
          <strong>{config[status].offerSubheader}</strong>
        </p>

        <p className="mb-8">
          <strong>{config[status].offerFocus}</strong>
        </p>

        <List
          classNameIcon="text-primary mr-2"
          classNameListItems="mb-4"
          icon={faSparkles}
          listItems={config[status].offers}
        />

        <div className="flex justify-center mt-4">
          <ButtonCheckout href={ctaUrl} label="SIGN UP TODAY" />
        </div>
      </Section>

      <Section
        className={`bg-${
          status === 'singles' ? 'woman' : 'couple'
        }-using-laptop min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40`}
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div
          className={`bg-${
            status === 'singles' ? 'woman' : 'couple'
          }-using-laptop-mobile lg:hidden`}
        />

        <div className="relative text-left p-4 z-5 lg:col-span-7">
          <h2 className="mb-4">{config[status].benefits.header}</h2>

          <List
            classNameIcon="!text-primary mt-1"
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={config[status].benefits.bullets}
          />
        </div>
      </Section>

      <Section classNameInner="!max-w-4xl mx-auto">
        <h2 className="mb-8">{config.finalSection.header}</h2>

        <p className="mb-8">
          <strong>{config.finalSection.subheader}</strong>
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <Image
              alt="Access PDS content on different devices"
              src="/images/SimplifiedFAPage/special-bonus-mockup.jpg"
              width={581}
              height={307}
            />
          </div>

          <div className="text-left">
            <p className="mb-4">{config.finalSection.copy}</p>

            <List
              classNameIcon="!text-primary mt-1"
              classNameListItems="mb-4"
              icon={faCheckCircle}
              listItems={config.finalSection.bullets}
            />

            <ButtonCheckout className="mt-4" href={ctaUrl} label="CLAIM YOUR FREE TRIAL NOW!" />
          </div>
        </div>
      </Section>
    </Page>
  )
}
