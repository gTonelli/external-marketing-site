import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://attachment.personaldevelopmentschool.com',
      lastModified: '2023-10-31',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://attachment.personaldevelopmentschool.com/learning-love',
      lastModified: '2023-10-25',
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
