// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
// config
import {
  MINI_COURSE_PAGES_SEO as CONFIG,
  TMiniCoursePageSlugs,
  TMiniCoursePageOffer,
} from './config'
import { MiniCoursePage } from './MiniCoursePage'

export const dynamicParams = false

interface IMiniCoursePageParams {
  params: Promise<{
    offer: TMiniCoursePageOffer
    slug: TMiniCoursePageSlugs
  }>
}

export function generateStaticParams(): {
  offer: TMiniCoursePageOffer
  slug: TMiniCoursePageSlugs
}[] {
  return [
    { offer: 'offer', slug: 'hard-relationships' },
    { offer: 'offer', slug: 'patterns' },
    { offer: 'offer', slug: 'past-wounds' },
    { offer: 'offer', slug: 'craving-relationships' },
    { offer: 'offer', slug: 'nervous-system' },
    { offer: 'offer', slug: 'setting-boundaries' },
    { offer: 'offer', slug: 'self-sabotaging' },
    { offer: 'intro', slug: 'hard-relationships' },
    { offer: 'intro', slug: 'patterns' },
    { offer: 'intro', slug: 'past-wounds' },
    { offer: 'intro', slug: 'craving-relationships' },
    { offer: 'intro', slug: 'nervous-system' },
    { offer: 'intro', slug: 'setting-boundaries' },
    { offer: 'intro', slug: 'self-sabotaging' },
  ]
}

export async function generateMetadata({ params }: IMiniCoursePageParams): Promise<Metadata> {
  const { slug } = await params

  return {
    title: CONFIG[slug].seoTitle,
    description: CONFIG[slug].seoDescription,
    robots: 'noindex',
  }
}

export default async function APSinglePage({ params }: IMiniCoursePageParams) {
  const { offer, slug } = await params

  return (
    <Page page_name={`Mini Course Page - ${slug}`}>
      <MiniCoursePage offer={offer} slug={slug} />
    </Page>
  )
}
