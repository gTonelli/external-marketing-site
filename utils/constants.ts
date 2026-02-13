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
  checkoutRegularSubscription39FirstMonth: string
  checkoutRegularSubscription59Dollar: string
  checkout7DayTrial: string
  checkout14DayTrial: string
  checkoutJan2025PromoTrial: string
  checkoutMarch2025PromoTrial: string
  checkoutJune2025PromoTrial: string
  checkoutJuly2025PromoTrial: string
  checkoutSep2025PromoTrial: string
  checkoutOct2025PromoTrial: string
  checkoutNov2025PromoTrial: string
  checkoutFamilyDynamicsFlashsale: string
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
    singleStepCheckoutRegularSubscription59Dollar: `${thinkificUrl}/pages/checkout?product_id=559833&price_id=1285773&coupon=8off1mo`,
    // All-Access Pass Subscription
    checkoutRegularSubscription: `${checkoutUrl}/enroll/559833?price_id=1285773`,
    checkoutRegularSubscription39FirstMonth: `${checkoutUrl}/enroll/559833?price_id=1285773&coupon=28off1mo`,
    checkoutRegularSubscription59Dollar: `${checkoutUrl}/enroll/559833?price_id=1285773&coupon=8off1mo`,
    checkout7DayTrial: `${checkoutUrl}/enroll/559833?price_id=590989&promo_label=15d-7dft`,
    checkout14DayTrial: `${checkoutUrl}/enroll/559833?price_id=2357208&promo_label=15d-14dft`,
    checkoutJan2025PromoTrial: `${checkoutUrl}/enroll/559833?price_id=590989&bci=530903&promo_label=15d-needs`,
    checkoutMarch2025PromoTrial: `${checkoutUrl}/enroll/559833?price_id=590989&bci=1585312&promo_label=15d-intimacy`,
    checkoutJune2025PromoTrial: `${checkoutUrl}/enroll/559833?price_id=590989&bci=570395&promo_label=15d-relationships`,
    checkoutJuly2025PromoTrial: `${checkoutUrl}/enroll/1703605?price_id=2241811&coupon=dreamlifediscount`,
    checkoutSep2025PromoTrial: `${checkoutUrl}/enroll/559833?price_id=590989&bci=713808&promo_label=15d-breakup`,
    checkoutOct2025PromoTrial: `${checkoutUrl}/enroll/559833?price_id=590989&bci=584963&promo_label=15d-codependency`,
    checkoutNov2025PromoTrial: `${checkoutUrl}/enroll/559833?price_id=590989&bci=1625876&promo_label=ftfc-somatic`,
    checkoutFamilyDynamicsFlashsale: `${checkoutUrl}/enroll/559833?price_id=590989&bci=1456024&promo_label=ftfc-family`,
    checkoutQuarterlyPlan: `${checkoutUrl}/enroll/559833?price_id=616936&coupon=withyouquarterly`,
    checkoutQuarterlyPlanGregVoisen: `${checkoutUrl}/enroll/559833?price_id=616936&coupon=ipg50`,
    checkoutQuarterly149: `${checkoutUrl}/enroll/559833?price_id=616936&coupon=148off`,
    checkoutAnnualPlan: `${checkoutUrl}/enroll/559833?price_id=1084476&coupon=withyouannually`,
    checkoutAttachmentBootcamp: `${checkoutUrl}/enroll/2996140?price_id=3853225&coupon=148off`,
    checkoutSimplifiedFa: `${checkoutUrl}/enroll/559833?price_id=1285773&bci=2178659`,
    checkout1MonthFree: `${checkoutUrl}/enroll/559833?price_id=1285773&coupon=1monthoff`,
    // IAT Recorded
    checkoutIATRecordedUpfront: `${checkoutUrl}/enroll/2463967?price_id=3258840&coupon=iatbundleupfrontrecorded&promo_label=iat-recorded`,
    checkoutIATRecorded3MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3258844&coupon=iatbundle3morecorded&promo_label=iat-recorded`,
    checkoutIATRecorded6MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3258846&coupon=iatbundle6morecorded&promo_label=iat-recorded`,
    checkoutIATRecorded12MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3258849&coupon=iatbundle12morecorded&promo_label=iat-recorded`,
    // IAT March 2026
    checkoutIATLiveUpfront: `${checkoutUrl}/enroll/3600203?price_id=4536634&coupon=upfrontLive&promo_label=iat-live`,
    checkoutIATLive3MonthPlan: `${checkoutUrl}/enroll/3600203?price_id=4536638&coupon=3monthLive&promo_label=iat-live`,
    checkoutIATLive6MonthPlan: `${checkoutUrl}/enroll/3600203?price_id=4536639&coupon=6monthLive&promo_label=iat-live`,
    checkoutIATLive12MonthPlan: `${checkoutUrl}/enroll/3600203?price_id=4536640&coupon=12monthLive&promo_label=iat-live`,
    // IAT Recorded With Webinar Discount
    checkoutIATRecordedWebinarUpfront: `${checkoutUrl}/enroll/2463967?price_id=3951355&coupon=iatwebinarondemandMC&promo_label=iat-webinar-recorded`,
    checkoutIATRecordedWebinar3MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3951356&coupon=iatwebinar3mnthondemandMC&promo_label=iat-webinar-recorded`,
    checkoutIATRecordedWebinar6MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3951358&coupon=iatwebinar6mnthondemandMC&promo_label=iat-webinar-recorded`,
    checkoutIATRecordedWebinar12MonthPlan: `${checkoutUrl}/enroll/2463967?price_id=3951360&coupon=iatwebinar12mnthondemandMC&promo_label=iat-webinar-recorded`,
    // IAT March 2026 With Webinar Discount
    checkoutIATWebinarUpfront: `${checkoutUrl}/enroll/3600203?price_id=4536642&coupon=upfrontWebinarLive&promo_label=iat-webinar-live`,
    checkoutIATWebinar3MonthPlan: `${checkoutUrl}/enroll/3600203?price_id=4536644&coupon=3monthWebinarLive&promo_label=iat-webinar-live`,
    checkoutIATWebinar6MonthPlan: `${checkoutUrl}/enroll/3600203?price_id=4536645&coupon=6monthWebinarLive&promo_label=iat-webinar-live`,
    checkoutIATWebinar12MonthPlan: `${checkoutUrl}/enroll/3600203?price_id=4536646&coupon=12monthWebinarLive&promo_label=iat-webinar-live`,
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
    singleStepCheckoutRegularSubscription59Dollar: `${thinkificUrl}/pages/checkout?product_id=1934512&price_id=2638738&coupon=8off1mo`,
    // All-Access Pass Subscription
    checkoutRegularSubscription: `${checkoutUrl}/enroll/1934512?price_id=2638738`,
    checkoutRegularSubscription39FirstMonth: `${checkoutUrl}/enroll/1934512?price_id=2638738&coupon=28off1mo`,
    checkoutRegularSubscription59Dollar: `${checkoutUrl}/enroll/1934512?price_id=2638738&coupon=8off1mo`,
    checkout7DayTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&promo_label=15d-7dft`,
    checkout14DayTrial: `${checkoutUrl}/enroll/1934512?price_id=4247022&promo_label=15d-14dft`,
    checkoutJan2025PromoTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=1337082&promo_label=15d-needs`,
    checkoutMarch2025PromoTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=3028888&promo_label=15d-intimacy`,
    checkoutJune2025PromoTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=3101991&promo_label=15d-relationships`,
    checkoutJuly2025PromoTrial: `${checkoutUrl}/enroll/3433260?price_id=4348253&coupon=for19`,
    checkoutSep2025PromoTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=3197987&promo_label=15d-breakup`,
    checkoutOct2025PromoTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=1924765&promo_label=15d-codependency`,
    checkoutNov2025PromoTrial: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=3137617&promo_label=ftfc-somatic`,
    checkoutFamilyDynamicsFlashsale: `${checkoutUrl}/enroll/1934512?price_id=2638713&bci=2455599&promo_label=ftfc-family`,
    checkoutQuarterlyPlan: `${checkoutUrl}/enroll/1934512?price_id=2661437&coupon=withyouquarterly`,
    checkoutQuarterlyPlanGregVoisen: `${checkoutUrl}/enroll/1934512?price_id=2661437&coupon=ipg50`,
    checkoutQuarterly149: `${checkoutUrl}/enroll/1934512?price_id=2661437&coupon=148off`,
    checkoutAnnualPlan: `${checkoutUrl}/enroll/1934512?price_id=2963437&coupon=withyouannually`,
    checkoutAttachmentBootcamp: `${checkoutUrl}/enroll/3014795?price_id=3874590&coupon=148off`,
    checkoutSimplifiedFa: `${checkoutUrl}/enroll/1934512?price_id=2638738&bci=2178659`,
    checkout1MonthFree: `${checkoutUrl}/enroll/1934512?price_id=2638738&coupon=1monthoff`,
    // IAT Recorded
    checkoutIATRecordedUpfront: `${checkoutUrl}/enroll/2751990?price_id=3577378&coupon=iatbundleupfrontrecorded&promo_label=iat-recorded`,
    checkoutIATRecorded3MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=3919119&coupon=iatbundle3morecorded&promo_label=iat-recorded`,
    checkoutIATRecorded6MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=3919118&coupon=iatbundle6morecorded&promo_label=iat-recorded`,
    checkoutIATRecorded12MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=3919117&coupon=iatbundle12morecorded&promo_label=iat-recorded`,
    // IAT March 2026
    checkoutIATLiveUpfront: `${checkoutUrl}/enroll/3600203?price_id=4536634&coupon=upfrontLive&promo_label=iat-live`,
    checkoutIATLive3MonthPlan: `${checkoutUrl}/enroll/3600203?price_id=4536638&coupon=3monthLive&promo_label=iat-live`,
    checkoutIATLive6MonthPlan: `${checkoutUrl}/enroll/3600203?price_id=4536639&coupon=6monthLive&promo_label=iat-live`,
    checkoutIATLive12MonthPlan: `${checkoutUrl}/enroll/3600203?price_id=4536640&coupon=12monthLive&promo_label=iat-live`,
    // IAT Recorded With Webinar Discount
    checkoutIATRecordedWebinarUpfront: `${checkoutUrl}/enroll/2751990?price_id=4344753&coupon=iatwebinarsummer225ondemand`,
    checkoutIATRecordedWebinar3MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=4344755&coupon=iatwebinarsummer2253mnthondemand`,
    checkoutIATRecordedWebinar6MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=4344758&coupon=iatwebinarsummer2256mnthondemand`,
    checkoutIATRecordedWebinar12MonthPlan: `${checkoutUrl}/enroll/2751990?price_id=4344759&coupon=iatwebinarsummer22512mnthondemand`,
    // IAT January 2026 With Webinar Discount
    checkoutIATWebinarUpfront: `${checkoutUrl}/enroll/3593730?price_id=4529902&coupon=upfrontWebinarLive`,
    checkoutIATWebinar3MonthPlan: `${checkoutUrl}/enroll/3593730?price_id=4529903&coupon=3monthWebinarLive`,
    checkoutIATWebinar6MonthPlan: `${checkoutUrl}/enroll/3593730?price_id=4529904&coupon=6monthWebinarLive`,
    checkoutIATWebinar12MonthPlan: `${checkoutUrl}/enroll/3593730?price_id=4529907&coupon=12monthWebinarLive`,
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
if (thinkificUrl === 'https://staging.university.personaldevelopmentschool.com') {
  env = 'staging'
}

export const externalRoutes = {
  // External
  about: `${thinkificUrl}/pages/about`,
  account: `${thinkificUrl}/account`,
  accountPassword: `${thinkificUrl}/account/password`,
  accountCertificates: `${thinkificUrl}/account/certificates`,
  accountNotifications: `${thinkificUrl}/account/notifications`,
  accountBilling: `${thinkificUrl}/account/billing`,
  accountMembership: `${thinkificUrl}/pages/my-account-membership`,
  accountOrders: `${thinkificUrl}/account/orders`,
  attachmentBootcamp: `${thinkificUrl}/pages/attachment-bootcamp`,
  attachmentBootcampFearfulAvoidant: `${thinkificUrl}/pages/fearful-avoidant-attachment-bootcamp`,
  attachmentBootcampAnxiousPreoccupied: `${thinkificUrl}/pages/anxious-preoccupied-attachment-bootcamp`,
  attachmentBootcampDismissiveAvoidant: `${thinkificUrl}/pages/dismissive-avoidant-attachmet-bootcamp`,
  attachmentCoaches: `${thinkificUrl}/pages/attachment-coaching`,
  blog: 'https://blog.personaldevelopmentschool.com/',
  collections: `${thinkificUrl}/collections`,
  communityAskQuestion: `${thinkificUrl}/communities/Q29tbXVuaXR5LTU0NjU3/spaces/Q29tbXVuaXR5U3BhY2UtMTM4ODMy/`,
  communityLatestPosts: `${thinkificUrl}/communities/Q29tbXVuaXR5LTU0NjU3/spaces/Q29tbXVuaXR5U3BhY2UtMTM4ODI5/`,
  communityHub: `${thinkificUrl}/pages/community-hub`,
  dashboard: `${thinkificUrl}/enrollments`,
  dashboardCourses: `${thinkificUrl}/enrollments?category=all-courses`,
  dashboardIat: `${thinkificUrl}/enrollments?category=IAT&program=Integrated%20Attachment%20Theory%20Certification%20Program`,
  faq: `${thinkificUrl}/pages/faq`,
  forYou: `${thinkificUrl}/pages/onboarding-quiz`,
  faVariant: 'https://results.personaldevelopmentschool.com/fa-b',
  giftCards: `${thinkificUrl}/pages/gift-cards`,
  iatFaq:
    'https://support.personaldevelopmentschool.com/en/collections/9402112-pds-integrated-attachment-theory-certification-program',
  iatHub: `${thinkificUrl}/pages/iat`,
  pdsCourses: `${thinkificUrl}/pages/view-courses`,
  programs: `${thinkificUrl}/enrollments?category=all-programs`,
  signIn: `${thinkificUrl}/users/sign_in`,
  signOut: `${thinkificUrl}/users/sign_out`,
  testimonials: `${thinkificUrl}/pages/testimonials`,
  webinarsEvents: `${thinkificUrl}/pages/webinar-links`,
  webinarsEventsCalendar: `${thinkificUrl}/pages/webinar-links#calendar`,
  webinarLibrary: `${thinkificUrl}/pages/webinar-library`,
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
  membersLounge: `${thinkificUrl}/pages/members-lounge`,
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
