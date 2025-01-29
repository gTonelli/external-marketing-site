import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/corporate-quiz/',
        '/dream-life/',
        '/dream-life-results/',
        '/iat/quiz/',
        '/learn/',
        '/limited-offer/',
        '/membership-discount/',
        '/quiz/',
        '/wellness/',
        '/needs/',
        '/beliefs/',
      ],
    },
    sitemap: 'https://attachment.personaldevelopmentschool.com/sitemap.xml',
  }
}
