const titleSlugs = ['needs'] as const

export type TMasterclassTitle = (typeof titleSlugs)[number]

export const MasterclassTitleSlugs = titleSlugs.map((title) => ({ title })) as {
  title: TMasterclassTitle
}[]

type TSEODetails = {
  title: string
  description: string
  robots: string
}

type TSEOConfig = {
  [K in TMasterclassTitle]: {
    registrationPage: TSEODetails
    thankYouPage: TSEODetails
  }
}

export const SEO_CONFIG: TSEOConfig = {
  needs: {
    registrationPage: {
      title: '',
      description: '',
      robots: 'index, follow, max-snippet:-1',
    },
    thankYouPage: {
      title: '',
      description: '',
      robots: 'noindex',
    },
  },
}
