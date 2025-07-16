// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { SinglesPage } from '@/components/SinglesPage'
// config
import { DA_SINGLE_SEO as CONFIG, TDASinglePageSlugs } from './config'

export const dynamicParams = false

interface IDASinglePageParams {
  params: Promise<{
    slug: TDASinglePageSlugs
  }>
}

export function generateStaticParams(): { slug: TDASinglePageSlugs }[] {
  return [
    { slug: 'hard-truths' },
    { slug: 'dating-triggers' },
    { slug: 'sabotaging-intimacy' },
    { slug: 'fighting-stages' },
    { slug: 'perfect-fit' },
    { slug: 'healing' },
  ]
}

export async function generateMetadata({ params }: IDASinglePageParams): Promise<Metadata> {
  const { slug } = await params

  return {
    title: CONFIG[slug].seoTitle,
    description: CONFIG[slug].seoDescription,
    robots: 'noindex',
  }
}

export default async function DASinglePage({ params }: IDASinglePageParams) {
  const { slug } = await params

  return (
    <Page page_name={`DA Single - ${slug}`}>
      <SinglesPage style="da" slug={slug} />
    </Page>
  )
}
