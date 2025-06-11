// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { SinglesPage } from '@/components/SinglesPage'
// config
import { AP_SINGLE_SEO as CONFIG } from './config'

export const dynamicParams = false

type TParams =
  | 'heal-abandonment'
  | 'overcoming-loneliness'
  | 'texting'
  | 'regulate-emotions'
  | 'limerence'
  | 'becoming-secure'

interface IFASinglePageParams {
  params: Promise<{
    slug: TParams
  }>
}

export function generateStaticParams() {
  return [
    { slug: 'heal-abandonment' },
    { slug: 'overcoming-loneliness' },
    { slug: 'texting' },
    { slug: 'regulate-emotions' },
    { slug: 'limerence' },
    { slug: 'becoming-secure' },
  ]
}

export async function generateMetadata({ params }: IFASinglePageParams): Promise<Metadata> {
  const { slug } = await params

  return {
    title: CONFIG[slug].seoTitle,
    description: CONFIG[slug].seoDescription,
    robots: 'noindex',
  }
}

export default async function APSinglePage({ params }: IFASinglePageParams) {
  const { slug } = await params

  return (
    <Page page_name={`AP Single - ${slug}`}>
      <SinglesPage style="ap" slug={slug} />
    </Page>
  )
}
