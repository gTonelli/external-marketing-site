// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { SinglesPage } from '@/components/SinglesPage'
// config
import { FA_SINGLE_CONFIG as CONFIG } from './config'
// styles
import './style.css'

export const dynamicParams = false

interface IFASinglePageParams {
  params: Promise<{
    slug: 'behaviors' | 'dating-tips' | 'heal-triggers' | 'situationship' | 'dating-apps' | 'needs'
  }>
}

export function generateStaticParams() {
  return [
    { slug: 'behaviors' },
    { slug: 'dating-tips' },
    { slug: 'heal-triggers' },
    { slug: 'situationship' },
    { slug: 'dating-apps' },
    { slug: 'needs' },
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

export default async function FASinglePage({ params }: IFASinglePageParams) {
  const { slug } = await params

  return (
    <Page page_name={`FA Single - ${slug}`}>
      <SinglesPage config={CONFIG} slug={slug} />
    </Page>
  )
}
