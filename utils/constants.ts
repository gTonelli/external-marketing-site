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
  // url: /^mailto:([^\\?]+)|^(tel:([^\\?]+))|^((https?):\/\/)?(www.)?[a-zA-Z0-9-.]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9-_@#&=?]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  url: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
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

export const ELinks = {
  // INTERNAL LINKS
  INTENT_PAGE: '/diagnostic-tool/fa',

  // EXTERNAL LINKS
  ABOUT_PAGE: 'https://university.personaldevelopmentschool.com/pages/about',
  ATTACHMENT_QUIZ: 'https://attachment.personaldevelopmentschool.com/quiz',
  BLOG: '/',
  // CHECKOUT_7_DAY_TRIAL_67_MONTH:
  //   'https://university.personaldevelopmentschool.com/enroll/559833?price_id=590989',
  CONTACT_US: 'mailto:info@personaldevelopmentschool.com',
  // CORPORATE_SITE:
  //   'https://www.corporate.personaldevelopmentschool.com/pages/employee-wellness-program',
  FACEBOOK_CHANNEL: 'https://www.facebook.com/ThePersonalDevelopmentSchool/',
  FAQ: 'https://university.personaldevelopmentschool.com/pages/faq',
  IAT_PAGE: 'https://attachment.personaldevelopmentschool.com/iat',
  GIFT_CARDS: 'https://university.personaldevelopmentschool.com/pages/gift-cards',
  INSTAGRAM_CHANNEL: 'https://www.instagram.com/thepersonaldevelopmentschool/',
  MEMBERSHIPS_PAGE: 'https://university.personaldevelopmentschool.com/collections',
  PODCAST_CHANNEL: 'https://podcasts.apple.com/us/podcast/personal-development-school/id1478580185',
  PRIVACY_POLICY: 'https://university.personaldevelopmentschool.com/pages/privacy',
  VIEW_COURSES_PAGE: 'https://university.personaldevelopmentschool.com/pages/view-courses',
  SIGN_IN: 'https://university.personaldevelopmentschool.com/users/sign_in',
  TERMS_CONDITIONS: 'https://university.personaldevelopmentschool.com/pages/terms',
  TIKTOK_CHANNEL: 'https://www.tiktok.com/@thaisgibson',
  YOUTUBE_CHANNEL: 'https://www.youtube.com/@ThePersonalDevelopmentSchool',
}
