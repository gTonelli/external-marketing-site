// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { MasterclassPage } from '../live/MasterclassPage'
// config
import { MasterclassTitleSlugs, SEO_CONFIG, TMasterclassTitle } from '../../config'

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
    ...SEO_CONFIG[title].replayPage,
    metadataBase: new URL(
      `https://attachment.personaldevelopmentschool.com/masterclass/${title}/replay`
    ),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/',
      },
    },
  }
}

export default async function MasterclassReplayPage({ params }: IMasterclassPageParams) {
  const { title } = await params

  return (
    <Page page_name={`Masterclass Replay Page - ${title}`}>
      <MasterclassPage isLive={false} title={title} />
    </Page>
  )
}
