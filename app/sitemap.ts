import { MetadataRoute } from 'next'
import { fetchAllPodcasts } from '@/utils/functions'
import { IPodcast } from './(custom-layouts)/(no-nav)/podcast/page'

interface SitemapXMLObject {
  url: string
  lastModified?: string | Date
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const podcasts = await fetchAllPodcasts()

  const data = podcasts.map(
    (podcast: IPodcast): SitemapXMLObject => ({
      url: `https://attachment.personaldevelopmentschool.com/podcast/${podcast.urlSlug.toString()}`,
      lastModified: podcast.updatedAt || podcast.publishedAt,
      changeFrequency: 'yearly',
      priority: 0.9,
    })
  )

  return [
    {
      url: 'https://attachment.personaldevelopmentschool.com',
      lastModified: '2023-12-20',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://attachment.personaldevelopmentschool.com/codependency-quiz',
      lastModified: '2023-12-20',
      changeFrequency: 'yearly',
      priority: 0.75,
    },
    {
      url: 'https://attachment.personaldevelopmentschool.com/learning-love',
      lastModified: '2023-10-25',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...data,
  ]
}
