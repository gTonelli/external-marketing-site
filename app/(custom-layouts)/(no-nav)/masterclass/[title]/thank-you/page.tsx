import { Metadata } from 'next'
import { MasterclassTitleSlugs, SEO_CONFIG, TMasterclassTitle } from '../../config'
import { Page } from '@/components/Page'
import { CONFIG } from './config'
import { Section } from '@/components/Section'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { Button } from '@/components/Button/Button'
import Link from 'next/link'

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
          <VideoStream videoId={config.hero.videoId} thumbnailSrc={config.hero.thumbnailSrc} />
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
        <h2 className="!text-4xl mb-8">{config.access.title}</h2>

        {config.access.steps.map((step, idx) => (
          <div key={`access_step_${idx}`} className="flex flex-col shadow-md mb-8 lg:flex-row">
            <div className="w-full min-h-72 bg-slate-400 lg:max-w-96">Image</div>

            <div className="w-full text-left flex-1 flex flex-col gap-2 items-center my-auto lg:py-6 lg:px-10">
              <h3 className="w-full text-3xl">{step.title}</h3>

              <p className="w-full text-lg">{step.text}</p>
            </div>
          </div>
        ))}
      </Section>

      <Section classNameInner="gap-6 lg:grid lg:grid-cols-3">
        <div className="text-left lg:col-span-1">
          <h2 className="!text-4xl">{config.membership.title}</h2>

          <p className="text-lg">{config.membership.text}</p>

          {/* <Link> */}
          <Button className="mt-4" label={config.membership.ctaLabel} />
          {/* </Link> */}
        </div>

        <div className="min-h-96 bg-slate-400 lg:col-span-2">Image</div>
      </Section>
    </Page>
  )
}
