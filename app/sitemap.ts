import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
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
  ]
}
