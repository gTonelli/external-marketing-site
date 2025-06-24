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
  checkoutJuly2025PromoTrial: string
  checkoutQuarterlyPlan: string
  checkoutQuarterlyPlanGregVoisen: string
  checkoutQuarterly149: string
  checkoutAnnualPlan: string
  checkoutAttachmentBootcamp: string
  checkoutSimplifiedFa: string
  checkout1MonthFree: string
  checkoutIATRecordedUpfront: string
  checkoutIATRecorded3MonthPlan: string
  checkoutIATRecorded6MonthPlan: string
  checkoutIATRecorded12MonthPlan: string
  checkoutIATSummer2025Upfront: string
  checkoutIATSummer20253MonthPlan: string
  checkoutIATSummer20256MonthPlan: string
  checkoutIATSummer202512MonthPlan: string
  checkoutIATRecordedWebinarUpfront: string
  checkoutIATRecordedWebinar3MonthPlan: string
  checkoutIATRecordedWebinar6MonthPlan: string
  checkoutIATRecordedWebinar12MonthPlan: string
  checkoutIATWebinarUpfront: string
  checkoutIATWebinar3MonthPlan: string
  checkoutIATWebinar6MonthPlan: string
  checkoutIATWebinar12MonthPlan: string
  checkoutLifetimeUpfront: string
  checkoutLifetime6MonthPlan: string
  checkoutLifetime12MonthPlan: string
  checkoutAgeProductFa: string
  checkoutAgeProductAp: string
  checkoutAgeProductDa: string
  checkoutAgeProductSa: string
}

const thinkificUrl =
  process.env.NEXT_PUBLIC_THINKIFIC_URL || 'https://university.personaldevelopmentschool.com'
const checkoutUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || 'https://checkout.personaldevelopmentschool.com'

const checkoutRoutes: Record<TCheckoutEnv, TCheckoutRoutes> = {
  production: {
    // Single-Step Checkout
    singleStepCheckout39FirstMonth: `${thinkificUrl}/pages/checkout?product_id=559833&price_id=1285773&coupon=28off1mo`,
    singleStepCheckoutRegularSubscription: `${thinkificUrl}/pages/checkout?price_id=1285773`,
    singleStepCheckoutRegularSubscription49Dollar: `${thinkificUrl}/pages/checkout?product_id=559833&price_id=1285773&coupon=ifpodcast`,
    singleStepCheckoutRegularSubscription59Dollar: `${thinkificUrl}/pages/checkout?product_id=559833&price_id=1285773&coupon=Jwdjxr23`,
    // All-Access Pass Subscription
    checkoutRegularSubscription: `${checkoutUrl}/enroll/559833?price_id=1285773`,
    checkout7DayTrial: `${checkoutUrl}/enroll/559833?price_id=590989`,
    checkout14DayTrial: `${checkoutUrl}/enroll/559833?price_id=2357208`,
    checkoutJan2025PromoTrial: `${checkoutUrl}/enroll/559833?price_id=590989&bci=530903`,
    checkoutMarch2025PromoTrial: `${checkoutUrl}/enroll/559833?price_id=590989&bci=1585312`,
    checkoutJune2025PromoTrial: `${checkoutUrl}/enroll/559833?price_id=590989&bci=570395`,
    checkoutJuly2025PromoTrial: `${checkoutUrl}/enroll/1703605`,
    checkoutQuarterlyPlan: `${checkoutUrl}/enroll/559833?price_id=616936&coupon=withyouquarterly`,
    checkoutQuarterlyPlanGregVoisen: `${checkoutUrl}/enroll/559833?price_id=616936&coupon=ipg50`,
    checkoutQuarterly149: `${checkoutUrl}/enroll/559833?price_id=616936&coupon=148off`,
    checkoutAnnualPlan: `${checkoutUrl}/enroll/559833?price_id=1084476&coupon=withyouannually`,
    checkoutAttachmentBootcamp: `${checkoutUrl}/enroll/2996140?price_id=3853225&coupon=148off`,
    checkoutSimplifiedFa: `${checkoutUrl}/enroll/559833?price_id=1285773&bci=2178659`,
    checkout1MonthFree: `${checkoutUrl}/enroll/559833?price_id=1285773&coupon=1monthoff`,
    // IAT Recorded
    checkoutIATRecordedUpfront: `${checkoutUrl}/enroll/2463967?price_id=3258840&coupon=iatbundleupfrontrecorded`,
    checkoutIATRecorded3MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3258844&coupon=iatbundle3morecorded`,
    checkoutIATRecorded6MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3258846&coupon=iatbundle6morecorded`,
    checkoutIATRecorded12MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3258849&coupon=iatbundle12morecorded`,
    // IAT Summer 2025
    checkoutIATSummer2025Upfront: `${checkoutUrl}/enroll/3382132?price_id=4291426&coupon=iatbundleupfrontlivesummer225`,
    checkoutIATSummer20253MonthPlan: `${checkoutUrl}/enroll/3382132?price_id=4291466&coupon=iatbundle3molivesummer225`,
    checkoutIATSummer20256MonthPlan: `${checkoutUrl}/enroll/3382132?price_id=4291467&coupon=iatbundle6molivesummer225`,
    checkoutIATSummer202512MonthPlan: `${checkoutUrl}/enroll/3382132?price_id=4291468&coupon=iatbundle12molivesummer225`,
    // IAT Recorded With Webinar Discount
    checkoutIATRecordedWebinarUpfront: `${checkoutUrl}/enroll/2463967?price_id=3951355&coupon=iatwebinarsummer25ondemand`,
    checkoutIATRecordedWebinar3MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3951356&coupon=iatwebinarsummer253mnthondemand`,
    checkoutIATRecordedWebinar6MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3951358&coupon=iatwebinarsummer256mnthondemand`,
    checkoutIATRecordedWebinar12MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3951360&coupon=iatwebinarsummer2512mnthondemand`,
    // IAT Summer 2025 With Webinar Discount
    checkoutIATWebinarUpfront: `${checkoutUrl}/enroll/3311061?price_id=4211457&coupon=iatwebinarsummer25live`,
    checkoutIATWebinar3MonthPlan: `${checkoutUrl}/enroll/3311061?price_id=4211458&coupon=iatwebinarsummer253mnthlive`,
    checkoutIATWebinar6MonthPlan: `${checkoutUrl}/enroll/3311061?price_id=4211461&coupon=iatwebinarsummer256mnthlive`,
    checkoutIATWebinar12MonthPlan: `${checkoutUrl}/enroll/3311061?price_id=4211462&coupon=iatwebinarsummer2512mnthlive`,
    // Lifetime All-Access Pass
    checkoutLifetimeUpfront: `${checkoutUrl}/enroll/559833?price_id=1053866&coupon=lifetimesale`,
    checkoutLifetime6MonthPlan: `${checkoutUrl}/enroll/559833?price_id=1053856&coupon=lifetimesale6mo`,
    checkoutLifetime12MonthPlan: `${checkoutUrl}/enroll/559833?price_id=1285785&coupon=lifetimesale12mo`,
    // Age Product
    checkoutAgeProductFa: `${checkoutUrl}/enroll/3030005?price_id=3892146&coupon=265off`,
    checkoutAgeProductAp: `${checkoutUrl}/enroll/3032412?price_id=3894812&coupon=265off`,
    checkoutAgeProductDa: `${checkoutUrl}/enroll/3032417?price_id=3894817&coupon=265off`,
    checkoutAgeProductSa: `${checkoutUrl}/enroll/3032419?price_id=3894819&coupon=265off`,
  },

  staging: {
    // Single-Step Checkout
    singleStepCheckout39FirstMonth: `${thinkificUrl}/pages/checkout?product_id=1934512&price_id=2638738&coupon=28off1mo`,
    singleStepCheckoutRegularSubscription: `${thinkificUrl}/pages/checkout?price_id=2638738`,
    singleStepCheckoutRegularSubscription49Dollar: `${thinkificUrl}/pages/checkout?product_id=1934512&price_id=2638738&coupon=ifpodcast`,
    singleStepCheckoutRegularSubscription59Dollar: `${thinkificUrl}/pages/checkout?product_id=1934512&price_id=2638738&coupon=Jwdjxr23`,
    // All-Access Pass Subscription
    checkoutRegularSubscription: `${checkoutUrl}/enroll/1934512?price_id=2638738`,
    checkout7DayTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713`,
    checkout14DayTrial: `${checkoutUrl}/enroll/1934512?price_id=2663013`,
    checkoutJan2025PromoTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=1337082`,
    checkoutMarch2025PromoTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=3028888`,
    checkoutJune2025PromoTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=3101991`,
    checkoutJuly2025PromoTrial: `${checkoutUrl}/enroll/3433260?coupon=for19`,
    checkoutQuarterlyPlan: `${checkoutUrl}/enroll/1934512?price_id=2661437&coupon=withyouquarterly`,
    checkoutQuarterlyPlanGregVoisen: `${checkoutUrl}/enroll/1934512?price_id=2661437&coupon=ipg50`,
    checkoutQuarterly149: `${checkoutUrl}/enroll/1934512?price_id=2661437&coupon=148off`,
    checkoutAnnualPlan: `${checkoutUrl}/enroll/1934512?price_id=2963437&coupon=withyouannually`,
    checkoutAttachmentBootcamp: `${checkoutUrl}/enroll/3014795?price_id=3874590&coupon=148off`,
    checkoutSimplifiedFa: `${checkoutUrl}/enroll/1934512?price_id=2638738&bci=2178659`,
    checkout1MonthFree: `${checkoutUrl}/enroll/1934512?price_id=2638738&coupon=1monthoff`,
    // IAT Recorded
    checkoutIATRecordedUpfront: `${checkoutUrl}/enroll/2751990?price_id=3577378&coupon=iatbundleupfrontrecorded`,
    checkoutIATRecorded3MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=3919119&coupon=iatbundle3morecorded`,
    checkoutIATRecorded6MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=3919118&coupon=iatbundle6morecorded`,
    checkoutIATRecorded12MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=3919117&coupon=iatbundle12morecorded`,
    // IAT Summer 2025
    checkoutIATSummer2025Upfront: `${checkoutUrl}/enroll/3400721?price_id=4312068&coupon=iatbundleupfrontlivesummer25`,
    checkoutIATSummer20253MonthPlan: `${checkoutUrl}/enroll/3400721?price_id=4312069&coupon=iatbundle3molivesummer25`,
    checkoutIATSummer20256MonthPlan: `${checkoutUrl}/enroll/3400721?price_id=4312073&coupon=iatbundle6molivesummer25`,
    checkoutIATSummer202512MonthPlan: `${checkoutUrl}/enroll/3400721?price_id=4312074&coupon=iatbundle12molivesummer25`,
    // IAT Recorded With Webinar Discount
    checkoutIATRecordedWebinarUpfront: `${checkoutUrl}/enroll/2751990?price_id=3577378&coupon=iatwebinarsummer25ondemand`,
    checkoutIATRecordedWebinar3MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=3919119&coupon=iatwebinarsummer253mnthondemand`,
    checkoutIATRecordedWebinar6MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=3919118&coupon=iatwebinarsummer256mnthondemand`,
    checkoutIATRecordedWebinar12MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=3919117&coupon=iatwebinarsummer2512mnthondemand`,
    // IAT Summer 2025 With Webinar Discount
    checkoutIATWebinarUpfront: `${checkoutUrl}/enroll/3311061?price_id=4312068&coupon=iatwebinarsummer25live`,
    checkoutIATWebinar3MonthPlan: `${checkoutUrl}/enroll/3311061?price_id=4312069&coupon=iatwebinarsummer253mnthlive`,
    checkoutIATWebinar6MonthPlan: `${checkoutUrl}/enroll/3311061?price_id=4312073&coupon=iatwebinarsummer256mnthlive`,
    checkoutIATWebinar12MonthPlan: `${checkoutUrl}/enroll/3311061?price_id=4312074&coupon=iatwebinarsummer2512mnthlive`,
    // Lifetime All-Access Pass
    checkoutLifetimeUpfront: `${checkoutUrl}/enroll/1934512?price_id=2663440&coupon=lifetimesale`,
    checkoutLifetime6MonthPlan: `${checkoutUrl}/enroll/1934512?price_id=2963435&coupon=lifetimesale6mo`,
    checkoutLifetime12MonthPlan: `${checkoutUrl}/enroll/1934512?price_id=4103315&coupon=lifetimesale12mo`,
    // Age Product
    checkoutAgeProductFa: `${checkoutUrl}/enroll/3045798?price_id=3910019&coupon=265off`,
    checkoutAgeProductAp: `${checkoutUrl}/enroll/3045793?price_id=3910014&coupon=265off`,
    checkoutAgeProductDa: `${checkoutUrl}/enroll/3045789?price_id=3910010&coupon=265off`,
    checkoutAgeProductSa: `${checkoutUrl}/enroll/3045787?price_id=3910008&coupon=265off`,
  },
}

let env: TCheckoutEnv = 'production'
if (
  checkoutUrl === 'https://staging.strapi.personaldevelopmentschool.com/api' ||
  checkoutUrl === 'https://ngrok.personaldevelopmentschool.com/api' ||
  checkoutUrl.includes('http://localhost:')
) {
  env = 'staging'
}

export const externalRoutes = {
  // External
  about: `${thinkificUrl}/pages/about`,
  attachmentBootcamp: `${thinkificUrl}/pages/attachment-bootcamp`,
  blog: 'https://blog.personaldevelopmentschool.com/',
  collections: `${thinkificUrl}/collections`,
  faq: `${thinkificUrl}/pages/faq`,
  faVariant: 'https://results.personaldevelopmentschool.com/fa-b',
  giftCards: `${thinkificUrl}/pages/gift-cards`,
  pdsCourses: `${thinkificUrl}/pages/view-courses`,
  signIn: `${thinkificUrl}/users/sign_in`,
  // Other
  amazonLearningLoveBookPurchase:
    'https://www.amazon.com/Learning-Love-Relationship-Integrated-Attachment/dp/B0CFGFV5CH/ref=mp_s_a_1_1?crid=241WSK4NOH946&keywords=thais+gibson+learning+love&qid=1697043535&sprefix=thais+gibson+learning+love%2Caps%2C74&sr=8-1',
  androidApp:
    'https://play.google.com/store/apps/details?id=com.personaldevelopment2.app&pcampaignid=web_share',
  calendlyMelanie: 'https://calendly.com/info-pds/call-with-melanie-pds',
  contactUs: `${thinkificUrl}/pages/contact-us`,
  corporate: 'https://www.corporate.personaldevelopmentschool.com/',
  discord: 'https://discord.com/invite/EasJ2CvUkv',
  facebook: 'https://www.facebook.com/groups/461389461257253/?ref=bookmarks',
  instagram: 'https://www.instagram.com/thepersonaldevelopmentschool',
  iosApp: 'https://apps.apple.com/us/app/personal-development-school/id6459618663',
  podcasts: 'https://attachment.personaldevelopmentschool.com/podcast',
  pressAndMedia: `${thinkificUrl}/pages/press-and-media`,
  privacy: `${thinkificUrl}/pages/privacy`,
  support: 'info@personaldevelopmentschool.com',
  supportPage: 'https://support.personaldevelopmentschool.com/en/',
  terms: `${thinkificUrl}/pages/terms`,
  tikTok: 'https://www.tiktok.com/@thaisgibson',
  youTube: 'https://www.youtube.com/@ThePersonalDevelopmentSchool',
  // Checkout
  ...checkoutRoutes[env],
}
