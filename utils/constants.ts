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

type TCheckoutEnv = 'production' | 'staging'

type TCheckoutRoutes = {
  singleStepCheckout39FirstMonth: string
  singleStepCheckoutRegularSubscription: string
  singleStepCheckoutRegularSubscription49Dollar: string
  singleStepCheckoutRegularSubscription59Dollar: string
  checkoutRegularSubscription: string
  checkout7DayTrial: string
  checkout14DayTrial: string
  checkoutJan2025PromoTrial: string
  checkoutMarch2025PromoTrial: string
  checkoutJune2025PromoTrial: string
  checkoutQuarterlyPlan: string
  checkoutQuarterlyPlanGregVoisen: string
  checkoutQuarterly149: string
  checkoutAnnualPlan: string
  checkoutAttachmentBootcamp: string
  checkoutSimplifiedFa: string
  checkout1MonthFree: string
  checkoutIatRecordedUpfront: string
  checkoutIatRecorded3MonthPlan: string
  checkoutIatRecorded6MonthPlan: string
  checkoutIatRecorded12MonthPlan: string
  checkoutIatSummer2025Upfront: string
  checkoutIatSummer20253MonthPlan: string
  checkoutIatSummer20256MonthPlan: string
  checkoutIatSummer202512MonthPlan: string
  checkoutIatRecordedWebinarUpfront: string
  checkoutIatRecordedWebinar3MonthPlan: string
  checkoutIatRecordedWebinar6MonthPlan: string
  checkoutIatRecordedWebinar12MonthPlan: string
  checkoutIatWebinarUpfront: string
  checkoutIatWebinar3MonthPlan: string
  checkoutIatWebinar6MonthPlan: string
  checkoutIatWebinar12MonthPlan: string
  checkoutLifetimeUpfront: string
  checkoutLifetime6MonthPlan: string
  checkoutLifetime12MonthPlan: string
  checkoutAgeProductFa: string
  checkoutAgeProductAp: string
  checkoutAgeProductDa: string
  checkoutAgeProductSa: string
}

export const checkoutRoutes: Record<TCheckoutEnv, TCheckoutRoutes> = {
  production: {
    // Single-Step Checkout
    singleStepCheckout39FirstMonth:
      'https://university.personaldevelopmentschool.com/pages/checkout?product_id=559833&price_id=1285773&coupon=28off1mo',
    singleStepCheckoutRegularSubscription: `${process.env.NEXT_PUBLIC_THINKIFIC_URL}/pages/checkout?price_id=1285773`,
    singleStepCheckoutRegularSubscription49Dollar: `${process.env.NEXT_PUBLIC_THINKIFIC_URL}/pages/checkout?product_id=559833&price_id=1285773&coupon=ifpodcast`,
    singleStepCheckoutRegularSubscription59Dollar: `${process.env.NEXT_PUBLIC_THINKIFIC_URL}/pages/checkout?product_id=559833&price_id=1285773&coupon=Jwdjxr23`,
    // All-Access Pass Subscription
    checkoutRegularSubscription: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=1285773`,
    checkout7DayTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=590989`,
    checkout14DayTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=2357208`,
    checkoutJan2025PromoTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=590989&bci=530903`,
    checkoutMarch2025PromoTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=590989&bci=1585312`,
    checkoutJune2025PromoTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=590989&bci=570395`,
    checkoutQuarterlyPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=616936&coupon=withyouquarterly`,
    checkoutQuarterlyPlanGregVoisen: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=616936&coupon=ipg50`,
    checkoutQuarterly149: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=616936&coupon=148off`,
    checkoutAnnualPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=1084476&coupon=withyouannually`,
    checkoutAttachmentBootcamp: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2996140?price_id=3853225&coupon=148off`,
    checkoutSimplifiedFa: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=1285773&bci=2178659`,
    checkout1MonthFree: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=1285773&coupon=1monthoff`,
    // IAT Recorded
    checkoutIatRecordedUpfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2463967?price_id=3258840&coupon=iatbundleupfrontrecorded`,
    checkoutIatRecorded3MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2463967?price_id=3258844&coupon=iatbundle3morecorded`,
    checkoutIatRecorded6MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2463967?price_id=3258846&coupon=iatbundle6morecorded`,
    checkoutIatRecorded12MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2463967?price_id=3258849&coupon=iatbundle12morecorded`,
    // IAT Summer 2025
    checkoutIatSummer2025Upfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4211453&coupon=iatbundleupfrontlivesummer25`,
    checkoutIatSummer20253MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4211464&coupon=iatbundle3molivesummer25`,
    checkoutIatSummer20256MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4211465&coupon=iatbundle6molivesummer25`,
    checkoutIatSummer202512MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4211466&coupon=iatbundle12molivesummer25`,
    // IAT Recorded With Webinar Discount
    checkoutIatRecordedWebinarUpfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2463967?price_id=3951355&coupon=iatwebinarsummer25ondemand`,
    checkoutIatRecordedWebinar3MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2463967?price_id=3951356&coupon=iatwebinarsummer253mnthondemand`,
    checkoutIatRecordedWebinar6MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2463967?price_id=3951358&coupon=iatwebinarsummer256mnthondemand`,
    checkoutIatRecordedWebinar12MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2463967?price_id=3951360&coupon=iatwebinarsummer2512mnthondemand`,
    // IAT Summer 2025 With Webinar Discount
    checkoutIatWebinarUpfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4211457&coupon=iatwebinarsummer25live`,
    checkoutIatWebinar3MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4211458&coupon=iatwebinarsummer253mnthlive`,
    checkoutIatWebinar6MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4211461&coupon=iatwebinarsummer256mnthlive`,
    checkoutIatWebinar12MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4211462&coupon=iatwebinarsummer2512mnthlive`,
    // Lifetime All-Access Pass
    checkoutLifetimeUpfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=1053866&coupon=lifetimesale`,
    checkoutLifetime6MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=1053856&coupon=lifetimesale6mo`,
    checkoutLifetime12MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/559833?price_id=1285785&coupon=lifetimesale12mo`,
    // Age Product
    checkoutAgeProductFa: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3030005?price_id=3892146&coupon=265off`,
    checkoutAgeProductAp: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3032412?price_id=3894812&coupon=265off`,
    checkoutAgeProductDa: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3032417?price_id=3894817&coupon=265off`,
    checkoutAgeProductSa: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3032419?price_id=3894819&coupon=265off`,
  },

  staging: {
    // Single-Step Checkout
    singleStepCheckout39FirstMonth:
      'https://university.personaldevelopmentschool.com/pages/checkout?product_id=1934512&price_id=2638738&coupon=28off1mo',
    singleStepCheckoutRegularSubscription: `${process.env.NEXT_PUBLIC_THINKIFIC_URL}/pages/checkout?price_id=2638738`,
    singleStepCheckoutRegularSubscription49Dollar: `${process.env.NEXT_PUBLIC_THINKIFIC_URL}/pages/checkout?product_id=1934512&price_id=2638738&coupon=ifpodcast`,
    singleStepCheckoutRegularSubscription59Dollar: `${process.env.NEXT_PUBLIC_THINKIFIC_URL}/pages/checkout?product_id=1934512&price_id=2638738&coupon=Jwdjxr23`,
    // All-Access Pass Subscription
    checkoutRegularSubscription: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2638738`,
    checkout7DayTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2638713`,
    checkout14DayTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2663013`,
    checkoutJan2025PromoTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2638713&bci=1337082`,
    checkoutMarch2025PromoTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2638713&bci=3028888`,
    checkoutJune2025PromoTrial: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2638713&bci=3101991`,
    checkoutQuarterlyPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2661437&coupon=withyouquarterly`,
    checkoutQuarterlyPlanGregVoisen: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2661437&coupon=ipg50`,
    checkoutQuarterly149: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2661437&coupon=148off`,
    checkoutAnnualPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2963437&coupon=withyouannually`,
    checkoutAttachmentBootcamp: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3014795?price_id=3874590&coupon=148off`,
    checkoutSimplifiedFa: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2638738&bci=2178659`,
    checkout1MonthFree: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2638738&coupon=1monthoff`,
    // IAT Recorded
    checkoutIatRecordedUpfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2751990?price_id=3577378&coupon=iatbundleupfrontrecorded`,
    checkoutIatRecorded3MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2751990?price_id=3919119&coupon=iatbundle3morecorded`,
    checkoutIatRecorded6MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2751990?price_id=3919118&coupon=iatbundle6morecorded`,
    checkoutIatRecorded12MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2751990?price_id=3919117&coupon=iatbundle12morecorded`,
    // IAT Summer 2025
    checkoutIatSummer2025Upfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3400721?price_id=4312068&coupon=iatbundleupfrontlivesummer25`,
    checkoutIatSummer20253MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3400721?price_id=4312069&coupon=iatbundle3molivesummer25`,
    checkoutIatSummer20256MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3400721?price_id=4312073&coupon=iatbundle6molivesummer25`,
    checkoutIatSummer202512MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3400721?price_id=4312074&coupon=iatbundle12molivesummer25`,
    // IAT Recorded With Webinar Discount
    checkoutIatRecordedWebinarUpfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2751990?price_id=3577378&coupon=iatwebinarsummer25ondemand`,
    checkoutIatRecordedWebinar3MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2751990?price_id=3919119&coupon=iatwebinarsummer253mnthondemand`,
    checkoutIatRecordedWebinar6MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2751990?price_id=3919118&coupon=iatwebinarsummer256mnthondemand`,
    checkoutIatRecordedWebinar12MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/2751990?price_id=3919117&coupon=iatwebinarsummer2512mnthondemand`,
    // IAT Summer 2025 With Webinar Discount
    checkoutIatWebinarUpfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4312068&coupon=iatwebinarsummer25live`,
    checkoutIatWebinar3MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4312069&coupon=iatwebinarsummer253mnthlive`,
    checkoutIatWebinar6MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4312073&coupon=iatwebinarsummer256mnthlive`,
    checkoutIatWebinar12MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3311061?price_id=4312074&coupon=iatwebinarsummer2512mnthlive`,
    // Lifetime All-Access Pass
    checkoutLifetimeUpfront: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2663440&coupon=lifetimesale`,
    checkoutLifetime6MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=2963435&coupon=lifetimesale6mo`,
    checkoutLifetime12MonthPlan: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/1934512?price_id=4103315&coupon=lifetimesale12mo`,
    // Age Product
    checkoutAgeProductFa: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3045798?price_id=3910019&coupon=265off`,
    checkoutAgeProductAp: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3045793?price_id=3910014&coupon=265off`,
    checkoutAgeProductDa: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3045789?price_id=3910010&coupon=265off`,
    checkoutAgeProductSa: `${process.env.NEXT_PUBLIC_CHECKOUT_URL}/enroll/3045787?price_id=3910008&coupon=265off`,
  },
}

let env: TCheckoutEnv = 'production'
if (
  process.env.NEXT_PUBLIC_CHECKOUT_ENV &&
  ['production', 'staging'].includes(process.env.NEXT_PUBLIC_CHECKOUT_ENV)
) {
  env = process.env.NEXT_PUBLIC_CHECKOUT_ENV as TCheckoutEnv
}

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
  // Other
  amazonLearningLoveBookPurchase:
    'https://www.amazon.com/Learning-Love-Relationship-Integrated-Attachment/dp/B0CFGFV5CH/ref=mp_s_a_1_1?crid=241WSK4NOH946&keywords=thais+gibson+learning+love&qid=1697043535&sprefix=thais+gibson+learning+love%2Caps%2C74&sr=8-1',
  androidApp:
    'https://play.google.com/store/apps/details?id=com.personaldevelopment2.app&pcampaignid=web_share',
  calendlyMelanie: 'https://calendly.com/info-pds/call-with-melanie-pds',
  contactUs: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/contact-us',
  corporate: 'https://www.corporate.personaldevelopmentschool.com/',
  discord: 'https://discord.com/invite/EasJ2CvUkv',
  facebook: 'https://www.facebook.com/groups/461389461257253/?ref=bookmarks',
  instagram: 'https://www.instagram.com/thepersonaldevelopmentschool',
  iosApp: 'https://apps.apple.com/us/app/personal-development-school/id6459618663',
  podcasts: 'https://attachment.personaldevelopmentschool.com/podcast',
  pressAndMedia: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/press-and-media',
  privacy: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/privacy',
  support: 'info@personaldevelopmentschool.com',
  supportPage: 'https://support.personaldevelopmentschool.com/en/',
  terms: process.env.NEXT_PUBLIC_THINKIFIC_URL + '/pages/terms',
  tikTok: 'https://www.tiktok.com/@thaisgibson',
  youTube: 'https://www.youtube.com/@ThePersonalDevelopmentSchool',
  // Checkout
  ...checkoutRoutes[env],
}
