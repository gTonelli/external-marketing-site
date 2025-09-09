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
    { offer: 'with-offer', slug: 'hard-relationships' },
    { offer: 'with-offer', slug: 'patterns' },
    { offer: 'with-offer', slug: 'past-wounds' },
    { offer: 'with-offer', slug: 'craving-relationships' },
    { offer: 'with-offer', slug: 'nervous-system' },
    { offer: 'with-offer', slug: 'setting-boundaries' },
    { offer: 'with-offer', slug: 'self-sabotaging' },
    { offer: 'without-offer', slug: 'hard-relationships' },
    { offer: 'without-offer', slug: 'patterns' },
    { offer: 'without-offer', slug: 'past-wounds' },
    { offer: 'without-offer', slug: 'craving-relationships' },
    { offer: 'without-offer', slug: 'nervous-system' },
    { offer: 'without-offer', slug: 'setting-boundaries' },
    { offer: 'without-offer', slug: 'self-sabotaging' },
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
