// core
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { Button } from '@/components/Button/Button'
import { AddToCalendar } from '@/components/Masterclass/AddToCalendar'
// config
import { CONFIG } from './config'
import {
  MasterclassTitleSlugs,
  SEO_CONFIG,
  TMasterclassTitle,
  COMMON_CONFIG as commonConfig,
} from '../../config'
// styles
import '@/styles/default-styles.css'
import '../../style.css'

export const dynamicParams = false

interface IMasterclassPageParams {
  params: Promise<{
    title: TMasterclassTitle
  }>
}

export function generateStaticParams(): { title: TMasterclassTitle }[] {
  return MasterclassTitleSlugs
}

export async function generateMetadata({ params }: IMasterclassPageParams): Promise<Metadata> {
  const { title } = await params

  return {
    ...SEO_CONFIG[title].thankYouPage,
    metadataBase: new URL(
      `https://attachment.personaldevelopmentschool.com/masterclass/${title}/thank-you`
    ),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/',
      },
    },
  }
}

export default async function MasterclassThankYouPage({ params }: IMasterclassPageParams) {
  const { title } = await params
  const config = CONFIG[title]

  return (
    <Page page_name={`Masterclass Thank You Page - ${title}`}>
      <Section classNameInner="!max-w-3xl">
        <h1 className="!text-4xl lg:!text-6xl mb-8">{config.hero.title}</h1>

        <p className="text-2xl">{config.hero.subtitle}</p>

        <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
          <VideoStream
            type={`${title} masterclass thank you hero`}
            videoId={config.hero.videoId}
            thumbnailSrc={config.hero.thumbnailSrc}
          />
        </div>

        <p className="text-sm text-gray-500 mb-8">{config.hero.videoLabel}</p>

        {config.hero.emailInstructions.map((item, idx) => (
          <div key={`email_instruction_${idx}`} className="mb-8">
            <p className="text-xl">
              <strong>{item.title}</strong>
            </p>

            <p>{item.text}</p>
          </div>
        ))}
      </Section>

      <Section>
        <h2 className="!text-4xl mb-8">{commonConfig.preWatchSteps.title}</h2>

        <p className="text-lg">{commonConfig.preWatchSteps.copy}</p>

        {commonConfig.preWatchSteps.steps.map((step, idx) => (
          <div key={`access_step_${idx}`} className="flex flex-col shadow-md mb-8 lg:flex-row">
            <div className="w-full lg:max-w-96">
              <Image
                src={step.image}
                alt={step.imageAlt}
                className="w-full h-auto"
                width={600}
                height={300}
                quality={100}
                sizes="100vw"
              />
            </div>

            <div className="w-full text-left flex-1 flex flex-col justify-start my-auto p-4 lg:py-6 lg:px-10">
              <h3 className="w-full text-3xl">{step.title}</h3>

              <p className="w-full text-lg">{step.text}</p>

              {idx === 0 && <AddToCalendar masterclassTitle={title} />}
            </div>
          </div>
        ))}
      </Section>

      <Section classNameInner="gap-6 grid lg:grid-cols-2">
        <div className="text-left">
          <h2 className="!text-4xl">{config.membership.title}</h2>

          <div className="text-lg">
            {config.membership.copy.map((item, idx) => (
              <p key={`membership_copy_${idx}`}>{item}</p>
            ))}
          </div>

          <Link href={config.membership.ctaLink}>
            <Button className="masterclass-purple-cta mt-4" label={config.membership.ctaLabel} />
          </Link>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src={config.membership.imageSrc}
            alt={config.membership.imageAlt}
            width={600}
            height={300}
            quality={100}
          />
        </div>
      </Section>

      <Section classNameInner="!max-w-2xl mx-auto">
        <h2>{commonConfig.connect.support.title}</h2>

        <div className="mb-8">
          <Link href={commonConfig.connect.support.linkHref} className="text-primary">
            <strong>{commonConfig.connect.support.linkText}</strong>
          </Link>
        </div>

        <h2>{commonConfig.connect.social.title}</h2>

        <div className="w-fit flex flex-col gap-4 mx-auto">
          {commonConfig.connect.social.links.map((link, idx) => (
            <div key={`social_link_${idx}`} className="flex gap-4">
              <Image
                src={link.image}
                alt={link.imageAlt}
                className="w-16 h-16"
                width={48}
                height={48}
              />

              <div className="flex flex-col text-left mb-8">
                <p className="text-lg mb-0">{link.copy}</p>

                <Link href={link.linkHref} className="text-primary">
                  <strong>{link.linkText}</strong>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  )
}
