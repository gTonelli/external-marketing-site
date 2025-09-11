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
  checkoutSep2025PromoTrial: string
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
  checkoutIATLiveUpfront: string
  checkoutIATLive3MonthPlan: string
  checkoutIATLive6MonthPlan: string
  checkoutIATLive12MonthPlan: string
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
    checkoutRegularSubscription: `${thinkificUrl}/pages/checkout?price_id=1285773`,
    checkout7DayTrial: `${thinkificUrl}/pages/checkout?price_id=1&promo_label=15d-7dft`,
    checkout14DayTrial: `${thinkificUrl}/pages/checkout?price_id=2&promo_label=15d-14dft`,
    checkoutJan2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=1&bci=530903&promo_label=15d-needs`,
    checkoutMarch2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=1&bci=1585312&promo_label=15d-intimacy`,
    checkoutJune2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=1&bci=570395&promo_label=15d-relationships`,
    checkoutJuly2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=2241811&coupon=dreamlifediscount`,
    checkoutSep2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=4&bci=713808&promo_label=15d-breakup`,
    checkoutQuarterlyPlan: `${thinkificUrl}/pages/checkout?price_id=616936&coupon=withyouquarterly`,
    checkoutQuarterlyPlanGregVoisen: `${thinkificUrl}/pages/checkout?price_id=616936&coupon=ipg50`,
    checkoutQuarterly149: `${thinkificUrl}/pages/checkout?price_id=616936&coupon=148off`,
    checkoutAnnualPlan: `${thinkificUrl}/pages/checkout?price_id=1084476&coupon=withyouannually`,
    checkoutAttachmentBootcamp: `${thinkificUrl}/pages/checkout?price_id=3853225&coupon=148off`,
    checkoutSimplifiedFa: `${thinkificUrl}/pages/checkout?price_id=1285773&bci=2178659`,
    checkout1MonthFree: `${thinkificUrl}/pages/checkout?price_id=1285773&coupon=1monthoff`,
    // IAT Recorded
    checkoutIATRecordedUpfront: `${thinkificUrl}/pages/checkout?price_id=3258840&coupon=iatbundleupfrontrecorded`,
    checkoutIATRecorded3MonthPlan: `${thinkificUrl}/pages/checkout?price_id=3258844&coupon=iatbundle3morecorded`,
    checkoutIATRecorded6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=3258846&coupon=iatbundle6morecorded`,
    checkoutIATRecorded12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=3258849&coupon=iatbundle12morecorded`,
    // IAT Fall 2025
    checkoutIATLiveUpfront: `${thinkificUrl}/pages/checkout?price_id=4370303&coupon=iatbundleupfrontlivefall25`,
    checkoutIATLive3MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4370311&coupon=iatbundle3molivefall25`,
    checkoutIATLive6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4370313&coupon=iatbundle6molivefall25`,
    checkoutIATLive12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4370314&coupon=iatbundle12molivefall25`,
    // IAT Recorded With Webinar Discount
    checkoutIATRecordedWebinarUpfront: `${thinkificUrl}/pages/checkout?price_id=3951355&coupon=iatwebinarfall25ondemand`,
    checkoutIATRecordedWebinar3MonthPlan: `${thinkificUrl}/pages/checkout?price_id=3951356&coupon=iatwebinarfall253mnthondemand`,
    checkoutIATRecordedWebinar6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=3951358&coupon=iatwebinarfall256mnthondemand`,
    checkoutIATRecordedWebinar12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=3951360&coupon=iatwebinarfall2512mnthondemand`,
    // IAT Fall 2025 With Webinar Discount
    checkoutIATWebinarUpfront: `${thinkificUrl}/pages/checkout?price_id=4370315&coupon=iatwebinarfall25live`,
    checkoutIATWebinar3MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4370316&coupon=iatwebinarfall253mnthlive`,
    checkoutIATWebinar6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4370317&coupon=iatwebinarfall256mnthlive`,
    checkoutIATWebinar12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4370319&coupon=iatwebinarfall2512mnthlive`,
    // Lifetime All-Access Pass
    checkoutLifetimeUpfront: `${thinkificUrl}/pages/checkout?price_id=1053866&coupon=lifetimesale`,
    checkoutLifetime6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=1053856&coupon=lifetimesale6mo`,
    checkoutLifetime12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=1285785&coupon=lifetimesale12mo`,
    // Age Product
    checkoutAgeProductFa: `${thinkificUrl}/pages/checkout?price_id=3892146&coupon=265off`,
    checkoutAgeProductAp: `${thinkificUrl}/pages/checkout?price_id=3894812&coupon=265off`,
    checkoutAgeProductDa: `${thinkificUrl}/pages/checkout?price_id=3894817&coupon=265off`,
    checkoutAgeProductSa: `${thinkificUrl}/pages/checkout?price_id=3894819&coupon=265off`,
  },

  staging: {
    // Single-Step Checkout
    singleStepCheckout39FirstMonth: `${thinkificUrl}/pages/checkout?product_id=1934512&price_id=2638738&coupon=28off1mo`,
    singleStepCheckoutRegularSubscription: `${thinkificUrl}/pages/checkout?price_id=2638738`,
    singleStepCheckoutRegularSubscription49Dollar: `${thinkificUrl}/pages/checkout?product_id=1934512&price_id=2638738&coupon=ifpodcast`,
    singleStepCheckoutRegularSubscription59Dollar: `${thinkificUrl}/pages/checkout?product_id=1934512&price_id=2638738&coupon=Jwdjxr23`,
    // All-Access Pass Subscription
    checkoutRegularSubscription: `${thinkificUrl}/pages/checkout?price_id=2638738`,
    checkout7DayTrial: `${thinkificUrl}/pages/checkout?price_id=1&promo_label=15d-7dft`,
    checkout14DayTrial: `${thinkificUrl}/pages/checkout?price_id=2&promo_label=15d-14dft`,
    checkoutJan2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=1&bci=1337082&promo_label=15d-needs`,
    checkoutMarch2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=1&bci=3028888&promo_label=15d-intimacy`,
    checkoutJune2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=1&bci=3101991&promo_label=15d-relationships`,
    checkoutJuly2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=4348253&coupon=for19`,
    checkoutSep2025PromoTrial: `${thinkificUrl}/pages/checkout?price_id=4&bci=3197987&promo_label=15d-breakup`,
    checkoutQuarterlyPlan: `${thinkificUrl}/pages/checkout?price_id=2661437&coupon=withyouquarterly`,
    checkoutQuarterlyPlanGregVoisen: `${thinkificUrl}/pages/checkout?price_id=2661437&coupon=ipg50`,
    checkoutQuarterly149: `${thinkificUrl}/pages/checkout?price_id=2661437&coupon=148off`,
    checkoutAnnualPlan: `${thinkificUrl}/pages/checkout?price_id=2963437&coupon=withyouannually`,
    checkoutAttachmentBootcamp: `${thinkificUrl}/pages/checkout?price_id=3874590&coupon=148off`,
    checkoutSimplifiedFa: `${thinkificUrl}/pages/checkout?price_id=2638738&bci=2178659`,
    checkout1MonthFree: `${thinkificUrl}/pages/checkout?price_id=2638738&coupon=1monthoff`,
    // IAT Recorded
    checkoutIATRecordedUpfront: `${thinkificUrl}/pages/checkout?price_id=3577378&coupon=iatbundleupfrontrecorded`,
    checkoutIATRecorded3MonthPlan: `${thinkificUrl}/pages/checkout?price_id=3919119&coupon=iatbundle3morecorded`,
    checkoutIATRecorded6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=3919118&coupon=iatbundle6morecorded`,
    checkoutIATRecorded12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=3919117&coupon=iatbundle12morecorded`,
    // IAT Summer 2025
    checkoutIATLiveUpfront: `${thinkificUrl}/pages/checkout?price_id=4312068&coupon=iatbundleupfrontlivesummer25`,
    checkoutIATLive3MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4312069&coupon=iatbundle3molivesummer25`,
    checkoutIATLive6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4312073&coupon=iatbundle6molivesummer25`,
    checkoutIATLive12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4312074&coupon=iatbundle12molivesummer25`,
    // IAT Recorded With Webinar Discount
    checkoutIATRecordedWebinarUpfront: `${thinkificUrl}/pages/checkout?price_id=4344753&coupon=iatwebinarsummer225ondemand`,
    checkoutIATRecordedWebinar3MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4344755&coupon=iatwebinarsummer2253mnthondemand`,
    checkoutIATRecordedWebinar6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4344758&coupon=iatwebinarsummer2256mnthondemand`,
    checkoutIATRecordedWebinar12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4344759&coupon=iatwebinarsummer22512mnthondemand`,
    // IAT Summer 2 2025 With Webinar Discount
    checkoutIATWebinarUpfront: `${thinkificUrl}/pages/checkout?price_id=4344727&coupon=iatwebinarsummer225live`,
    checkoutIATWebinar3MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4344731&coupon=iatwebinarsummer2253mnthlive`,
    checkoutIATWebinar6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4344734&coupon=iatwebinarsummer2256mnthlive`,
    checkoutIATWebinar12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4344736&coupon=iatwebinarsummer22512mnthlive`,
    // Lifetime All-Access Pass
    checkoutLifetimeUpfront: `${thinkificUrl}/pages/checkout?price_id=2663440&coupon=lifetimesale`,
    checkoutLifetime6MonthPlan: `${thinkificUrl}/pages/checkout?price_id=2963435&coupon=lifetimesale6mo`,
    checkoutLifetime12MonthPlan: `${thinkificUrl}/pages/checkout?price_id=4103315&coupon=lifetimesale12mo`,
    // Age Product
    checkoutAgeProductFa: `${thinkificUrl}/pages/checkout?price_id=3910019&coupon=265off`,
    checkoutAgeProductAp: `${thinkificUrl}/pages/checkout?price_id=3910014&coupon=265off`,
    checkoutAgeProductDa: `${thinkificUrl}/pages/checkout?price_id=3910010&coupon=265off`,
    checkoutAgeProductSa: `${thinkificUrl}/pages/checkout?price_id=3910008&coupon=265off`,
  },
}

let env: TCheckoutEnv = 'production'
if (thinkificUrl === 'https://staging.university.personaldevelopmentschool.com') {
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
  higherLevelMelanie: 'https://link.higherlevel.app/widget/booking/UL9L2ws0nW53SkgvNXyf',
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
