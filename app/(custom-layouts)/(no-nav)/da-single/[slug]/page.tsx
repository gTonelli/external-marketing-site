// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { SinglesPage } from '@/components/SinglesPage'
// config
import { DA_SINGLE_SEO as CONFIG } from './config'

export const dynamicParams = false

type TParams =
  | 'hard-truths'
  | 'dating-triggers'
  | 'sabotaging-intimacy'
  | 'fighting-stages'
  | 'perfect-fit'
  | 'healing'

interface IFASinglePageParams {
  params: Promise<{
    slug: TParams
  }>
}

export function generateStaticParams() {
  return [
    { slug: 'hard-truths' },
    { slug: 'dating-triggers' },
    { slug: 'sabotaging-intimacy' },
    { slug: 'fighting-stages' },
    { slug: 'perfect-fit' },
    { slug: 'healing' },
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

export default async function DASinglePage({ params }: IFASinglePageParams) {
  const { slug } = await params

  return (
    <Page page_name={`DA Single - ${slug}`}>
      <SinglesPage style="da" slug={slug} />
    </Page>
  )
}
