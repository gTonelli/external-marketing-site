/**
 * Collection of supported currencies
 */
export enum ECurrencies {
  DOLLAR = '$',
  EURO = '€',
}

/**
 * Collection of keyboard key codes
 */
export enum EKeyCodes {
  /**
   * @usage closing `inlineAdd` and `inlineEdit` in `Table`
   */
  ESC = 'Escape',
  /**
   * @usage toggling `TranslationDialog` (this is a part of a shortcut, the whole thing is: `Control + T`)
   */
  T = 't',
  /**
   * @usage toggling `SideMenu` (left, with modules)
   */
  SQUARE_BRACKET_LEFT = '[',
  /**
   * @usage toggling `UserMenu` (right, with user profile)
   */
  SQUARE_BRACKET_RIGHT = ']',
}

/**
 * Date format
 */
export enum EDateFormats {
  MONTH_YEAR = 'MMMM YYYY',
  DEFAULT = 'DD.MM.YYYY',
  DEFAULT_DATETIME = 'DD.MM.YYYY HH:mm',
  TIME_AM_PM = 'h:mm a',
  WEBINARS = 'dddd, MMMM Do, YYYY',
}

/** README !
 *
 * Global collection of all regexes used throughout the project
 *
 * @Rules keep them in alphabetical order
 *
 */

export const Regexes: { [key: string]: RegExp } = {
  hex: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
  //   hex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  name: /[^a-zA-Z\d.,:'-\s]/g,
  email: /(?:\w+@\w+(\.+\w{2,})+){1}$/,
  phone:
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  // phone: /[^()\d-]/g,
  url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
}

/**
 * Values identical with TailwindCSS breakpoints
 */
export enum EWindowWidth {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
  '2xl' = 1536,
}

export const routes = {
  // Defaults
  home: '/',
  // ========== Internal ==========
  attachmentQuiz: '/quiz',
  membersQuiz: '/members-quiz',
  blackFriday: '/black-friday',
  corporateLandingPage: '/corporate-quiz',
  corporateQuizQuestions: '/corporate-quiz/questions',
  corporateQuizResults: '/corporate-quiz/results',
  dreamLifePage: '/dream-life',
  dreamLifeResultsPage: '/dream-life-results',
  exploreCoursesPage: '/explore-courses',
  flashSalePage: '/membership-discount',
  iatCoachingPage: '/coaching',
  iatQuiz: '/iat/quiz',
  iatSalesPage: '/iat',
  learningLovePage: '/learning-love',
  learnPage: '/learn',
  lifetimePage: '/lifetime',
  quizB: '/quiz/b',
  mentalHealthAwarenessPage: '/mha-month',
  podcast: '/podcast',
  siteLinks: '/site-links',
  trialPage7Day: '/7-day-trial',
  wellnessPage: '/wellness',
}

type TCheckoutRoutes = {
  [env in 'production' | 'staging' | 'development']: {
    [key: string]: string
  }
}

export const checkoutRoutes: TCheckoutRoutes = {
  production: {
    singleStepCheckout39FirstMonth:
      'https://university.personaldevelopmentschool.com/pages/checkout?product_id=559833&price_id=1285773&coupon=28off1mo',
    singleStepCheckoutRegularSubscription:
      process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/checkout?price_id=1285773',
    // Subscriptions
    checkoutRegularSubscription:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=1285773',
    checkout7DayTrial: process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=590989',
    checkout14DayTrial: process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=2357208',
    checkoutJan2025PromoTrial:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=590989&bci=530903',
    checkoutMarch2025PromoTrial:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=590989&bci=1585312',
    checkoutJune2025PromoTrial:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=590989&bci=570395',
    checkoutQuarterlyPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/559833?price_id=616936&coupon=withyouquarterly',
    checkoutQuarterly149:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=616936&coupon=148off',
    checkoutAnnualPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/559833?price_id=1084476&coupon=withyouannually',
    checkoutAttachmentBootcamp:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/2996140?price_id=3853225&coupon=148off',
    checkoutSimplifiedFa:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=1285773&bci=2178659',
    checkout1MonthFree:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=1285773&coupon=1monthoff',
    // IAT Recorded
    checkoutIatRecordedUpfront:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/2463967?price_id=3258840&coupon=iatbundleupfrontrecorded',
    checkoutIatRecorded3MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/2463967?price_id=3258844&coupon=iatbundle3morecorded',
    checkoutIatRecorded6MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/2463967?price_id=3258846&coupon=iatbundle6morecorded',
    checkoutIatRecorded12MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/2463967?price_id=3258849&coupon=iatbundle12morecorded',
    // IAT Summer 2025
    checkoutIatSummer2025Upfront:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/3311061?price_id=4211453&coupon=iatbundleupfrontlivesummer25',
    checkoutIatSummer20253MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/3311061?price_id=4211464&coupon=iatbundle3molivesummer25',
    checkoutIatSummer20256MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/3311061?price_id=4211465&coupon=iatbundle6molivesummer25',
    checkoutIatSummer202512MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/3311061?price_id=4211466&coupon=iatbundle12molivesummer25',
    // IAT Recorded Webinar Summer 2025
    checkoutIatRecordedWebinarUpfront:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/2463967?price_id=3951355&coupon=iatwebinarsummer25ondemand',
    checkoutIatRecordedWebinar3MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/2463967?price_id=3951356&coupon=iatwebinarsummer253mnthondemand',
    checkoutIatRecordedWebinar6MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/2463967?price_id=3951358&coupon=iatwebinarsummer256mnthondemand',
    checkoutIatRecordedWebinar12MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/2463967?price_id=3951360&coupon=iatwebinarsummer2512mnthondemand',
    // IAT Webinar Summer 2025
    checkoutIatWebinarUpfront:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/3311061?price_id=4211457&coupon=iatwebinarsummer25live',
    checkoutIatWebinar3MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/3311061?price_id=4211458&coupon=iatwebinarsummer253mnthlive',
    checkoutIatWebinar6MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/3311061?price_id=4211461&coupon=iatwebinarsummer256mnthlive',
    checkoutIatWebinar12MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/3311061?price_id=4211462&coupon=iatwebinarsummer2512mnthlive',
    //Lifetime payment
    checkoutLifetimeUpfront:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/559833?price_id=1053866&coupon=lifetimesale',
    checkoutLifetime6MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/559833?price_id=1053856&coupon=lifetimesale6mo',
    checkoutLifetime12MonthPlan:
      process.env.NEXT_PUBLIC_CHECKOUT_URL +
      '/enroll/559833?price_id=1285785&coupon=lifetimesale12mo',
    // Age Product
    checkoutAgeProductFa:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/3030005?price_id=3892146&coupon=265off',
    checkoutAgeProductAp:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/3032412?price_id=3894812&coupon=265off',
    checkoutAgeProductDa:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/3032417?price_id=3894817&coupon=265off',
    checkoutAgeProductSa:
      process.env.NEXT_PUBLIC_CHECKOUT_URL + '/enroll/3032419?price_id=3894819&coupon=265off',
  },

  staging: {},

  development: {},
}

checkoutRoutes.development = checkoutRoutes.staging

type TCheckoutEnv = 'production' | 'staging' | 'development'

const env = (process.env.NEXT_PUBLIC_CHECKOUT_ENV || 'production') as TCheckoutEnv

export const externalRoutes = {
  // External
  about: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/about',
  attachmentBootcamp: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/attachment-bootcamp',
  blog: 'https://blog.personaldevelopmentschool.com/',
  collections: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/collections',
  faq: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/faq',
  faVariant: 'https://results.personaldevelopmentschool.com/fa-b',
  giftCards: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/gift-cards',
  pdsCourses: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/view-courses',
  signIn: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/users/sign_in',

  singleStepCheckout39FirstMonth: checkoutRoutes[env].singleStepCheckout39FirstMonth,
  singleStepCheckoutRegularSubscription: checkoutRoutes[env].singleStepCheckoutRegularSubscription,
  // Subscriptions
  checkoutRegularSubscription: checkoutRoutes[env].checkoutRegularSubscription,

  checkout7DayTrial: checkoutRoutes[env].checkout7DayTrial,
  checkout14DayTrial: checkoutRoutes[env].checkout14DayTrial,
  checkoutJan2025PromoTrial: checkoutRoutes[env].checkoutJan2025PromoTrial,

  checkoutMarch2025PromoTrial: checkoutRoutes[env].checkoutMarch2025PromoTrial,
  checkoutJune2025PromoTrial: checkoutRoutes[env].checkoutJune2025PromoTrial,
  checkoutQuarterlyPlan: checkoutRoutes[env].checkoutQuarterlyPlan,
  checkoutQuarterly149: checkoutRoutes[env].checkoutQuarterly149,
  checkoutAnnualPlan: checkoutRoutes[env].checkoutAnnualPlan,
  checkoutAttachmentBootcamp: checkoutRoutes[env].checkoutAttachmentBootcamp,
  checkoutSimplifiedFa: checkoutRoutes[env].checkoutSimplifiedFa,
  checkout1MonthFree: checkoutRoutes[env].checkout1MonthFree,

  // IAT Recorded
  checkoutIatRecordedUpfront: checkoutRoutes[env].checkoutIatRecordedUpfront,
  checkoutIatRecorded3MonthPlan: checkoutRoutes[env].checkoutIatRecorded3MonthPlan,
  checkoutIatRecorded6MonthPlan: checkoutRoutes[env].checkoutIatRecorded6MonthPlan,
  checkoutIatRecorded12MonthPlan: checkoutRoutes[env].checkoutIatRecorded12MonthPlan,
  // IAT Summer 2025
  checkoutIatSummer2025Upfront: checkoutRoutes[env].checkoutIatSummer2025Upfront,
  checkoutIatSummer20253MonthPlan: checkoutRoutes[env].checkoutIatSummer20253MonthPlan,
  checkoutIatSummer20256MonthPlan: checkoutRoutes[env].checkoutIatSummer20256MonthPlan,
  checkoutIatSummer202512MonthPlan: checkoutRoutes[env].checkoutIatSummer202512MonthPlan,
  // IAT Recorded Webinar Summer 2025
  checkoutIatRecordedWebinarUpfront: checkoutRoutes[env].checkoutIatRecordedWebinarUpfront,
  checkoutIatRecordedWebinar3MonthPlan: checkoutRoutes[env].checkoutIatRecordedWebinar3MonthPlan,
  checkoutIatRecordedWebinar6MonthPlan: checkoutRoutes[env].checkoutIatRecordedWebinar6MonthPlan,
  checkoutIatRecordedWebinar12MonthPlan: checkoutRoutes[env].checkoutIatRecordedWebinar12MonthPlan,
  // IAT Webinar Summer 2025
  checkoutIatWebinarUpfront: checkoutRoutes[env].checkoutIatWebinarUpfront,
  checkoutIatWebinar3MonthPlan: checkoutRoutes[env].checkoutIatWebinar3MonthPlan,
  checkoutIatWebinar6MonthPlan: checkoutRoutes[env].checkoutIatWebinar6MonthPlan,
  checkoutIatWebinar12MonthPlan: checkoutRoutes[env].checkoutIatWebinar12MonthPlan,

  //Lifetime payment
  checkoutLifetimeUpfront: checkoutRoutes[env].checkoutLifetimeUpfront,
  checkoutLifetime6MonthPlan: checkoutRoutes[env].checkoutLifetime6MonthPlan,
  checkoutLifetime12MonthPlan: checkoutRoutes[env].checkoutLifetime12MonthPlan,
  // Age Product
  checkoutAgeProductFa: checkoutRoutes[env].checkoutAgeProductFa,
  checkoutAgeProductAp: checkoutRoutes[env].checkoutAgeProductAp,
  checkoutAgeProductDa: checkoutRoutes[env].checkoutAgeProductDa,
  checkoutAgeProductSa: checkoutRoutes[env].checkoutAgeProductSa,

  // Other
  AMAZON_LEARNING_LOVE_BOOK_PURCHASE:
    'https://www.amazon.com/Learning-Love-Relationship-Integrated-Attachment/dp/B0CFGFV5CH/ref=mp_s_a_1_1?crid=241WSK4NOH946&keywords=thais+gibson+learning+love&qid=1697043535&sprefix=thais+gibson+learning+love%2Caps%2C74&sr=8-1',
  ANDROID_APP:
    'https://play.google.com/store/apps/details?id=com.personaldevelopment2.app&pcampaignid=web_share',
  CALENDLY_MELANIE: 'https://calendly.com/info-pds/call-with-melanie-pds',
  CONTACT_US: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/contact-us',
  CORPORATE: 'https://www.corporate.personaldevelopmentschool.com/',
  DISCORD: 'https://discord.com/invite/EasJ2CvUkv',
  FACEBOOK: 'https://www.facebook.com/groups/461389461257253/?ref=bookmarks',
  INSTAGRAM: 'https://www.instagram.com/thepersonaldevelopmentschool',
  IOS_APP: 'https://apps.apple.com/us/app/personal-development-school/id6459618663',
  PODCASTS: 'https://attachment.personaldevelopmentschool.com/podcast',
  PRESS_AND_MEDIA: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/press-and-media',
  PRIVACY: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/privacy',
  SUPPORT: 'info@personaldevelopmentschool.com',
  SUPPORT_PAGE: 'https://support.personaldevelopmentschool.com/en/',
  TERMS: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/terms',
  TIKTOK: 'https://www.tiktok.com/@thaisgibson',
  YOUTUBE: 'https://www.youtube.com/@ThePersonalDevelopmentSchool',
}
