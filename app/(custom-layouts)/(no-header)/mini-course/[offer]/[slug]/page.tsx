// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
// config
import {
  MINI_COURSE_PAGES_SEO as CONFIG,
  MINI_COURSE_IAT_PAGES_SEO as IAT_CONFIG,
  TMiniCoursePageSlugs,
  TMiniCoursePageOffer,
  TMiniCourseIATSlugs,
} from './config'
import { MiniCoursePage } from './MiniCoursePage'

export const dynamicParams = false

interface IMiniCoursePageParams {
  params: Promise<{
    offer: TMiniCoursePageOffer
    slug: TMiniCoursePageSlugs | TMiniCourseIATSlugs
  }>
}

export function generateStaticParams(): {
  offer: TMiniCoursePageOffer
  slug: TMiniCoursePageSlugs | TMiniCourseIATSlugs
}[] {
  return [
    // Original pages with both offer and intro variants
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
    { offer: 'iat', slug: 'hard-relationships' },
    { offer: 'iat', slug: 'patterns' },
    { offer: 'iat', slug: 'past-wounds' },
    { offer: 'iat', slug: 'craving-relationships' },
    { offer: 'iat', slug: 'nervous-system' },
    { offer: 'iat', slug: 'setting-boundaries' },
    { offer: 'iat', slug: 'self-sabotaging' },
  ]
}

export async function generateMetadata({ params }: IMiniCoursePageParams): Promise<Metadata> {
  const { offer, slug } = await params

  const isIATPage = offer === 'iat'

  if (isIATPage) {
    return {
      title: IAT_CONFIG[slug as keyof typeof IAT_CONFIG].seoTitle,
      description: IAT_CONFIG[slug as keyof typeof IAT_CONFIG].seoDescription,
      robots: 'noindex',
    }
  } else {
    return {
      title: CONFIG[slug as keyof typeof CONFIG].seoTitle,
      description: CONFIG[slug as keyof typeof CONFIG].seoDescription,
      robots: 'noindex',
    }
  }
}

export default async function EmailMiniCoursePages({ params }: IMiniCoursePageParams) {
  const { offer, slug } = await params

  const isIATOnly = offer === 'iat'

  return (
    <Page page_name={`Mini Course Page - ${slug}`}>
      <MiniCoursePage offer={offer} slug={slug} isIATOnly={isIATOnly} />
    </Page>
  )
}
