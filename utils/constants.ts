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

export enum ERoutes {
  // Defaults
  HOME = '/',
  // ========== Internal ==========
  ATTACHMENT_QUIZ = '/quiz',
  BLACK_FRIDAY = '/black-friday',
  CORPORATE_LANDING_PAGE = '/corporate-quiz',
  CORPORATE_QUIZ_QUESTIONS = '/corporate-quiz/questions',
  CORPORATE_QUIZ_RESULTS = '/corporate-quiz/results',
  DREAM_LIFE_PAGE = '/dream-life',
  DREAM_LIFE_RESULTS_PAGE = '/dream-life-results',
  EXPLORE_COURSES_PAGE = '/explore-courses',
  FLASH_SALE_PAGE = '/membership-discount',
  IAT_QUIZ = '/iat/quiz',
  IAT_SALES_PAGE = '/iat',
  LEARNING_LOVE_PAGE = '/learning-love',
  LEARN_PAGE = '/learn',
  LIFE_TIME_PAGE = '/lifetime',
  MARKETING_QUIZ_B = '/quiz/b',
  MENTAL_HEALTH_AWARENESS_PAGE = '/mha-month',
  SITE_LINKS = '/site-links',
  TRIAL_PAGE_7_DAY = '/7-day-trial',
  WELLNESS_PAGE = '/wellness',
}

export enum EExternalRoutes {
  // External
  ABOUT = 'https://university.personaldevelopmentschool.com/pages/about',
  BLOG = 'https://blog.personaldevelopmentschool.com/',
  COLLECTIONS = 'https://university.personaldevelopmentschool.com/collections',
  FAQ = 'https://university.personaldevelopmentschool.com/pages/faq',
  FA_VARIANT = 'https://results.personaldevelopmentschool.com/fa-b',
  GIFT_CARDS = 'https://university.personaldevelopmentschool.com/pages/gift-cards',
  PDS_COURSES = 'https://university.personaldevelopmentschool.com/pages/view-courses',
  SIGN_IN = 'https://university.personaldevelopmentschool.com/users/sign_in',


  // Checkout
  // Subscriptions
  THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=1285773',
  THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION_19_DOLLAR = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=1285773&coupon=special19promo',
  THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION_59_DOLLAR = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=3175705&coupon=40off',
  THINKIFIC_CHECKOUT_7_DAY_TRIAL = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=590989',
  THINKIFIC_CHECKOUT_7_DAY_TRIAL_50_OFF = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=3175705&coupon=50off1mo',
  THINKIFIC_CHECKOUT_14_DAY_TRIAL = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=2357208',
  THINKIFIC_CHECKOUT_14_DAY_TRIAL_QUARTERLY = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=3369055&coupon=withyouquarterly',
  THINKIFIC_CHECKOUT_QUARTERLY_PLAN = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=616936&coupon=withyouquarterly',
  THINKIFIC_CHECKOUT_ANNUAL_PLAN = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=1084476&coupon=withyouannually',
  // IAT Recorded
  THINKIFIC_CHECKOUT_IAT_RECORDED_UPFRONT = 'https://university.personaldevelopmentschool.com/enroll/2463967?price_id=3258840&coupon=iatbundleupfrontrecorded',
  THINKIFIC_CHECKOUT_IAT_RECORDED_3_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/2463967?price_id=3258844&coupon=iatbundle3morecorded',
  THINKIFIC_CHECKOUT_IAT_RECORDED_6_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/2463967?price_id=3258846&coupon=iatbundle6morecorded',
  THINKIFIC_CHECKOUT_IAT_RECORDED_12_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/2463967?price_id=3258849&coupon=iatbundle12morecorded',
  // IAT Winter 2024
  THINKIFIC_CHECKOUT_IAT_WINTER_2024_UPFRONT = 'https://university.personaldevelopmentschool.com/enroll/2717800?price_id=3538015&coupon=iatbundleupfrontlive',
  THINKIFIC_CHECKOUT_IAT_WINTER_2024_3_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/2717800?price_id=3538021&coupon=iatbundle3molive',
  THINKIFIC_CHECKOUT_IAT_WINTER_2024_6_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/2717800?price_id=3538023&coupon=iatbundle6molive',
  THINKIFIC_CHECKOUT_IAT_WINTER_2024_12_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/2717800?price_id=3538024&coupon=iatbundle12molive',
  //Lifetime payment
  THINKIFIC_CHECKOUT_LIFETIME_UPFRONT = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=1053866&coupon=lifetimesale',
  THINKIFIC_CHECKOUT_LIFETIME_6_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=1053856&coupon=lifetimesale6mo',
  THINKIFIC_CHECKOUT_LIFETIME_12_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/559833?price_id=1285785&coupon=lifetimesale12mo',

  // Other
  AMAZON_LEARNING_LOVE_BOOK_PURCHASE = 'https://www.amazon.com/Learning-Love-Relationship-Integrated-Attachment/dp/B0CFGFV5CH/ref=mp_s_a_1_1?crid=241WSK4NOH946&keywords=thais+gibson+learning+love&qid=1697043535&sprefix=thais+gibson+learning+love%2Caps%2C74&sr=8-1',
  CALENDLY_MELANIE = 'https://calendly.com/info-pds/call-with-melanie-pds',
  CONTACT_US = 'mailto:info@personaldevelopmentschool.com',
  SUPPORT = 'info@personaldevelopmentschool.com',
  CORPORATE = 'https://www.corporate.personaldevelopmentschool.com/',
  DISCORD = 'https://discord.com/invite/EasJ2CvUkv',
  FACEBOOK = 'https://www.facebook.com/groups/461389461257253/?ref=bookmarks',
  INSTAGRAM = 'https://www.instagram.com/thepersonaldevelopmentschool',
  PODCASTS = 'https://podcasts.apple.com/us/podcast/personal-development-school/id1478580185',
  PRIVACY = 'https://university.personaldevelopmentschool.com/pages/privacy',
  TERMS = 'https://university.personaldevelopmentschool.com/pages/terms',
  TIKTOK = 'https://www.tiktok.com/@thaisgibson',
  YOUTUBE = 'https://www.youtube.com/@ThePersonalDevelopmentSchool',
}

export const StripeCheckoutPriceIDs =
  process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'production'
    ? { STRIPE_CHECKOUT_REGULAR_SUBSCRIPTION: 'price_1OC8wQEQ6ij1zforxLCqR6U0' }
    : { STRIPE_CHECKOUT_REGULAR_SUBSCRIPTION: 'price_1NGm52EQ6ij1zford3VGv4oh' }

export const StripeCheckoutLinks =
  process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'production'
    ? { STRIPE_CHECKOUT_REGULAR_SUBSCRIPTION: 'https://buy.stripe.com/8wM00OdwCgs5g7uaEF' }
    : { STRIPE_CHECKOUT_REGULAR_SUBSCRIPTION: 'https://buy.stripe.com/test_28o02X9hu4xh3g49AA' }
