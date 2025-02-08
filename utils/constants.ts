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

export enum ERoutes {
  // Defaults
  HOME = '/',
  // ========== Internal ==========
  ATTACHMENT_QUIZ = '/quiz',
  MEMBERS_QUIZ = '/members-quiz',
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
  PODCAST = '/podcast',
  SITE_LINKS = '/site-links',
  TRIAL_PAGE_7_DAY = '/7-day-trial',
  WELLNESS_PAGE = '/wellness',
}

export enum EExternalRoutes {
  // External
  ABOUT = 'https://university.personaldevelopmentschool.com/pages/about',
  ATTACHMENT_BOOTCAMP = 'https://university.personaldevelopmentschool.com/pages/attachment-bootcamp',
  BLOG = 'https://blog.personaldevelopmentschool.com/',
  COLLECTIONS = 'https://university.personaldevelopmentschool.com/collections',
  FAQ = 'https://university.personaldevelopmentschool.com/pages/faq',
  FA_VARIANT = 'https://results.personaldevelopmentschool.com/fa-b',
  GIFT_CARDS = 'https://university.personaldevelopmentschool.com/pages/gift-cards',
  PDS_COURSES = 'https://university.personaldevelopmentschool.com/pages/view-courses',
  SIGN_IN = 'https://university.personaldevelopmentschool.com/users/sign_in',

  // Checkout
  STRIPE_CHECKOUT_39_FIRST_MONTH = 'https://university.personaldevelopmentschool.com/pages/checkout?product_id=559833&price_id=1285773&coupon=28off1mo',
  // Subscriptions
  THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=1285773',
  THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION_49_DOLLAR = 'https://university.personaldevelopmentschool.com/pages/checkout?product_id=559833&price_id=1285773&coupon=ifpodcast',
  THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION_59_DOLLAR = 'https://university.personaldevelopmentschool.com/pages/checkout?price_id=1285773&coupon=Jwdjxr23',
  THINKIFIC_CHECKOUT_7_DAY_TRIAL = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=590989',
  THINKIFIC_CHECKOUT_14_DAY_TRIAL = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=2357208',
  THINKIFIC_CHECKOUT_JAN_2025_PROMO_TRIAL = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=590989&bci=530903',
  THINKIFIC_CHECKOUT_QUARTERLY_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=616936&coupon=withyouquarterly',
  THINKIFIC_CHECKOUT_QUARTERLY_PLAN_GREG_VOISEN = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=616936&coupon=ipg50',
  THINKIFIC_CHECKOUT_ANNUAL_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=1084476&coupon=withyouannually',
  THINKIFIC_CHECKOUT_ATTACHMENT_BOOTCAMP = 'https://checkout.personaldevelopmentschool.com/enroll/2996140?price_id=3853225&coupon=148off',
  THINKIFIC_CHECKOUT_SIMPLIFIED_FA = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=1285773&bci=2178659',
  // IAT Recorded
  // THINKIFIC_CHECKOUT_IAT_RECORDED_UPFRONT = 'https://checkout.personaldevelopmentschool.com/enroll/2463967?price_id=3258840&coupon=iatbundleupfrontrecorded',
  THINKIFIC_CHECKOUT_IAT_RECORDED_UPFRONT = 'https://staging.strapi.personaldevelopmentschool.com/api/enroll/2751990?price_id=3577378&coupon=iatbundleupfrontrecorded', // TODO: Update to production links
  THINKIFIC_CHECKOUT_IAT_RECORDED_3_MONTH_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/2463967?price_id=3258844&coupon=iatbundle3morecorded',
  THINKIFIC_CHECKOUT_IAT_RECORDED_6_MONTH_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/2463967?price_id=3258846&coupon=iatbundle6morecorded',
  THINKIFIC_CHECKOUT_IAT_RECORDED_12_MONTH_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/2463967?price_id=3258849&coupon=iatbundle12morecorded',
  // IAT Spring 2025
  THINKIFIC_CHECKOUT_IAT_SPRING_2025_UPFRONT = 'https://university.personaldevelopmentschool.com/enroll/3210080?price_id=4098384&coupon=iatbundleupfrontlivespring25',
  THINKIFIC_CHECKOUT_IAT_SPRING_2025_3_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/3210080?price_id=4098408&coupon=iatbundle3molivespring25',
  THINKIFIC_CHECKOUT_IAT_SPRING_2025_6_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/3210080?price_id=4098409&coupon=iatbundle6molivespring25',
  THINKIFIC_CHECKOUT_IAT_SPRING_2025_12_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/3210080?price_id=4098410&coupon=iatbundle12molivespring25',
  // IAT Recorded Webinar Spring 2025
  THINKIFIC_CHECKOUT_IAT_RECORDED_WEBINAR_UPFRONT = 'https://checkout.personaldevelopmentschool.com/enroll/2463967?price_id=3951355&coupon=iatwebinarwinter25ondemand',
  THINKIFIC_CHECKOUT_IAT_RECORDED_WEBINAR_3_MONTH_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/2463967?price_id=3951356&coupon=iatwebinarwinter253mnthondemand',
  THINKIFIC_CHECKOUT_IAT_RECORDED_WEBINAR_6_MONTH_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/2463967?price_id=3951358&coupon=iatwebinarwinter256mnthondemand',
  THINKIFIC_CHECKOUT_IAT_RECORDED_WEBINAR_12_MONTH_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/2463967?price_id=3951360&coupon=iatwebinarwinter2512mnthondemand',
  // IAT Webinar Spring 2025
  THINKIFIC_CHECKOUT_IAT_WEBINAR_UPFRONT = 'https://university.personaldevelopmentschool.com/enroll/3210080?price_id=4098404&coupon=iatwebinarspring25live',
  THINKIFIC_CHECKOUT_IAT_WEBINAR_3_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/3210080?price_id=4098405&coupon=iatwebinarspring253mnthlive',
  THINKIFIC_CHECKOUT_IAT_WEBINAR_6_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/3210080?price_id=4098406&coupon=iatwebinarspring256mnthlive',
  THINKIFIC_CHECKOUT_IAT_WEBINAR_12_MONTH_PLAN = 'https://university.personaldevelopmentschool.com/enroll/3210080?price_id=4098407&coupon=iatwebinarspring2512mnthlive',
  //Lifetime payment
  THINKIFIC_CHECKOUT_LIFETIME_UPFRONT = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=1053866&coupon=lifetimesale',
  THINKIFIC_CHECKOUT_LIFETIME_6_MONTH_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=1053856&coupon=lifetimesale6mo',
  THINKIFIC_CHECKOUT_LIFETIME_12_MONTH_PLAN = 'https://checkout.personaldevelopmentschool.com/enroll/559833?price_id=1285785&coupon=lifetimesale12mo',
  // Age Product
  THINKIFIC_CHECKOUT_AGE_PRODUCT_FA = 'https://checkout.personaldevelopmentschool.com/enroll/3030005?price_id=3892146&coupon=265off',
  THINKIFIC_CHECKOUT_AGE_PRODUCT_AP = 'https://checkout.personaldevelopmentschool.com/enroll/3032412?price_id=3894812&coupon=265off',
  THINKIFIC_CHECKOUT_AGE_PRODUCT_DA = 'https://checkout.personaldevelopmentschool.com/enroll/3032417?price_id=3894817&coupon=265off',
  THINKIFIC_CHECKOUT_AGE_PRODUCT_SA = 'https://checkout.personaldevelopmentschool.com/enroll/3032419?price_id=3894819&coupon=265off',

  // Other
  AMAZON_LEARNING_LOVE_BOOK_PURCHASE = 'https://www.amazon.com/Learning-Love-Relationship-Integrated-Attachment/dp/B0CFGFV5CH/ref=mp_s_a_1_1?crid=241WSK4NOH946&keywords=thais+gibson+learning+love&qid=1697043535&sprefix=thais+gibson+learning+love%2Caps%2C74&sr=8-1',
  ANDROID_APP = 'https://play.google.com/store/apps/details?id=com.personaldevelopment2.app&pcampaignid=web_share',
  CALENDLY_MELANIE = 'https://calendly.com/info-pds/call-with-melanie-pds',
  CONTACT_US = 'https://university.personaldevelopmentschool.com/pages/contact-us',
  CORPORATE = 'https://www.corporate.personaldevelopmentschool.com/',
  DISCORD = 'https://discord.com/invite/EasJ2CvUkv',
  FACEBOOK = 'https://www.facebook.com/groups/461389461257253/?ref=bookmarks',
  INSTAGRAM = 'https://www.instagram.com/thepersonaldevelopmentschool',
  IOS_APP = 'https://apps.apple.com/us/app/personal-development-school/id6459618663',
  PODCASTS = 'https://attachment.personaldevelopmentschool.com/podcast',
  PRESS_AND_MEDIA = 'https://university.personaldevelopmentschool.com/pages/press-and-media',
  PRIVACY = 'https://university.personaldevelopmentschool.com/pages/privacy',
  SUPPORT = 'info@personaldevelopmentschool.com',
  SUPPORT_PAGE = 'https://support.personaldevelopmentschool.com/en/',
  TERMS = 'https://university.personaldevelopmentschool.com/pages/terms',
  TIKTOK = 'https://www.tiktok.com/@thaisgibson',
  YOUTUBE = 'https://www.youtube.com/@ThePersonalDevelopmentSchool',
}
