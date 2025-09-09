export const MINI_COURSE_CONFIG = {
  common: {
    features: {
      image: '',
      imageAlt: '',
      copy: 'Inside, you’ll find the community and resources to help you continue this journey:',
      list: [
        <>
          <strong>70+ science-backed courses</strong>, where you’ll get the exact help you need to
          gain emotional mastery, set healthy boundaries, grow your self-worth, build secure
          relationships, develop clear communication skills, and more.
        </>,
        <>
          <strong>On-demand video content</strong>: Learn at your own pace, anytime, anywhere.
        </>,
        <>
          <strong>Weekly live webinars and Q&As</strong>. Get direct insights and answers to help
          with your healing journey from me, Thais Gibson, the founder of The Personal Development
          School.
        </>,
        <>
          <strong>Private support groups and community forums</strong>. Connect with people on the
          same path as you.
        </>,
      ],
    },
    disclaimer:
      '*When you join now, you’ll enter a 7‑day Free Trial of our All‑Access Pass. After the trial, you’ll automatically continue on the $67/month plan. You can cancel any time before your trial ends, and you won’t be charged.',
  },
  versions: {
    'hard-relationships': {
      banner: {
        h1: '',
        copy1: [],
        videoThumbnail: '',
        videoThumbnailAlt: '',
        videoSrc: '',
        videoVariantThumbnail: '',
        videoVariantThumbnailAlt: '',
        videoVariantSrc: '',
        copy2: [],
      },
      offer: {
        h2: '',
        copy: [],
        hook: '',
        ctaLabel: '',
      },
    },
    patterns: {
      banner: {
        h1: '',
        copy1: [],
        videoThumbnail: '',
        videoThumbnailAlt: '',
        videoSrc: '',
        videoVariantThumbnail: '',
        videoVariantThumbnailAlt: '',
        videoVariantSrc: '',
        copy2: [],
      },
      offer: {
        h2: '',
        copy: [],
        hook: '',
        ctaLabel: '',
      },
    },
    'past-wounds': {
      banner: {
        h1: '',
        copy1: [],
        videoThumbnail: '',
        videoThumbnailAlt: '',
        videoSrc: '',
        videoVariantThumbnail: '',
        videoVariantThumbnailAlt: '',
        videoVariantSrc: '',
        copy2: [],
      },
      offer: {
        h2: '',
        copy: [],
        hook: '',
        ctaLabel: '',
      },
    },
    'craving-relationships': {
      banner: {
        h1: '',
        copy1: [],
        videoThumbnail: '',
        videoThumbnailAlt: '',
        videoSrc: '',
        videoVariantThumbnail: '',
        videoVariantThumbnailAlt: '',
        videoVariantSrc: '',
        copy2: [],
      },
      offer: {
        h2: '',
        copy: [],
        hook: '',
        ctaLabel: '',
      },
    },
    'nervous-system': {
      banner: {
        h1: '',
        copy1: [],
        videoThumbnail: '',
        videoThumbnailAlt: '',
        videoSrc: '',
        videoVariantThumbnail: '',
        videoVariantThumbnailAlt: '',
        videoVariantSrc: '',
        copy2: [],
      },
      offer: {
        h2: '',
        copy: [],
        hook: '',
        ctaLabel: '',
      },
    },
    'setting-boundaries': {
      banner: {
        h1: '',
        copy1: [],
        videoThumbnail: '',
        videoThumbnailAlt: '',
        videoSrc: '',
        videoVariantThumbnail: '',
        videoVariantThumbnailAlt: '',
        videoVariantSrc: '',
        copy2: [],
      },
      offer: {
        h2: '',
        copy: [],
        hook: '',
        ctaLabel: '',
      },
    },
    'self-sabotaging': {
      banner: {
        h1: '',
        copy1: [],
        videoThumbnail: '',
        videoThumbnailAlt: '',
        videoSrc: '',
        videoVariantThumbnail: '',
        videoVariantThumbnailAlt: '',
        videoVariantSrc: '',
        copy2: [],
      },
      offer: {
        h2: '',
        copy: [],
        hook: '',
        ctaLabel: '',
      },
    },
  },
}

export const MINI_COURSE_PAGES_SEO = {
  'hard-relationships': {
    seoTitle: '',
    seoDescription: '',
  },
  patterns: {
    seoTitle: '',
    seoDescription: '',
  },
  'past-wounds': {
    seoTitle: '',
    seoDescription: '',
  },
  'craving-relationships': {
    seoTitle: '',
    seoDescription: '',
  },
  'nervous-system': {
    seoTitle: '',
    seoDescription: '',
  },
  'setting-boundaries': {
    seoTitle: '',
    seoDescription: '',
  },
  'self-sabotaging': {
    seoTitle: '',
    seoDescription: '',
  },
}

export type TMiniCoursePageOffer = 'with-offer' | 'without-offer'
export type TMiniCoursePageSlugs = keyof (typeof MINI_COURSE_CONFIG)['versions']
