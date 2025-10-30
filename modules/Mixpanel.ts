// libraries
import { TStyle } from '@/utils/types'
import mixpanel, { Dict } from 'mixpanel-browser'

/* Collection of all Mixpanel event names tracked throughout the app */
type Events =
  | 'Audio Started'
  | 'Button Clicked'
  | 'Checkout Step Started'
  | 'Course Filterd'
  | 'Course Banner Clicked'
  | 'Course Landing Page'
  | 'Course Searched'
  | 'Course Started'
  | 'Enrollment: Complete'
  | '$experiment_started'
  | 'Invoice Paid'
  | 'Lesson Finished'
  | 'Lesson Started'
  | 'Logs In'
  | 'Log Out'
  | 'Masterclass Quiz Submit'
  | 'Masterclass Results Quiz Submit'
  | 'Membership Ended'
  | 'Membership Started'
  | 'Page Scrolled'
  | 'Page Viewed'
  | 'Quiz Finished'
  | 'Quiz Started'
  | 'Quiz Progress'
  | '$signup'
  | 'Trial Ended'
  | 'Trial Started'
  | 'Video Started'
  | 'Video Progress'

/* Collection of all page names tracked throughout the app */
export type Pages =
  | `7 Day Free Trial Page`
  | `7 Day Free Trial Headspace`
  | `7 Day Free Trial Masterclass`
  | `7 Day Trial + 50% off first month`
  | `7 Days Trial Page Funnel - FA`
  | `7-Day Trial Page (Variant)`
  | `Abandoned Card Offer - ${string}`
  | `Age Funnel - ${string}`
  | `AP Single - ${string}`
  | `Attachment Bootcamp`
  | `Attachment Style Needs Beliefs Page`
  | `Attachment Style Quiz`
  | `Attachment Style Bundle Report - ${string}`
  | `Attachment Style Report Old - ${string}`
  | `Attachment Style Quiz Questions`
  | `Attachment Style Results`
  | `Attachment Style Report - FA`
  | `Attachment Style Results - ${string}`
  | `Attachment Styles Email Page - ${string} ${string}`
  | `Black Friday`
  | `Black Friday Variant Page`
  | `Codependency Quiz`
  | `Corporate Quiz Landing Page`
  | `Corporate Quiz Questions Page`
  | `Corporate Quiz Form Page`
  | `Corporate Quiz Results Page`
  | `Cyber Monday`
  | `Cyber Monday Variant Page`
  | `DA Single - ${string}`
  | `Dating Freebie Page`
  | `Dating Quiz`
  | `Dating Quiz Results - ${string}`
  | `Dreamlife Results Page FA`
  | `Dreamlife Breakup Course Page`
  | `Dreamlife Codependency Course Page`
  | `Dreamlife Free Course Page`
  | `Dreamlife Pillars Course Page`
  | `Dreamlife Sex Course Page`
  | `Dreamlife Holiday Free Trial Page`
  | `Dreamlife Upsell Page`
  | `External IAT Page`
  | `External IAT Page (Klarna)`
  | `External IAT Ebook Page`
  | `External IAT Coaching Page`
  | `Explore Courses Page`
  | `FA Single - ${string}`
  | `FA Relationship - ${string}`
  | `Find My Courses`
  | `Free Masterclass Mel Robbins`
  | `Greg Voisen Podcast Guest Page`
  | `IAT Attachment Quiz`
  | `IAT Info Page`
  | `IAT Info Variant Page`
  | `IAT Webinar Page`
  | `IAT Webinar Variant Page`
  | `IAT Webinar Squeeze Page`
  | `IAT Webinar Recording Page`
  | `IAT Post Registration Masterclass Page`
  | `ICP Results Page - ${string}`
  | `IAT ${string} Abandoned Cart Page`
  | `Intent Project - FA`
  | `July Promo Somatic`
  | `Learn - 30% OFF`
  | `Lifetime`
  | `Limited Offer - ${string}`
  | `Not Found Page`
  | `Main Funnel Quiz`
  | `Main Funnel Quiz Variant`
  | `Main Funnel Quiz Variant C`
  | `Main Funnel Quiz Variant D`
  | `Main Funnel Quiz Variant E`
  | `Main Funnel Quiz Variant F`
  | `Melanie Avalon Podcast Guest Page`
  | `Members Quiz`
  | `Members Quiz Questions`
  | `Members Quiz Form`
  | `Members Quiz Results`
  | `Masterclass Quiz`
  | `Mini Course Page - ${string}`
  | `Order Complete`
  | `mha-month`
  | `mha-month-b`
  | `mha-month-relationship`
  | `mha-month-singles`
  | `MHA - ${string} ${string}`
  | `Podcast Page`
  | `Podcast Episode Page - ${string}`
  | `Podcast Guest Form`
  | `Podcast Freebie`
  | `Site Links`
  | `Speaker Gift`
  | `Spin The Wheel - Email`
  | `Spin The Wheel - OSM`
  | `Secondary Sales - ${string}`
  | `Segmented Results Page - ${TStyle}`
  | `Straight to Offer ${string}`
  | `Valentine's Day`
  | `Valentine's Day - Short`
  | `vsl-${string}`
  | `VSL Royal Rumble Results - ${string}`
  | `Wellness Page`
  | `Youtube Funnel Quiz`
  | 'IAT Live Abandoned Cart Page'
  | 'IAT Ondemand Abandoned Cart Page'

export type ExperimentVariant = 'Control' | `Variant ${number}`

export type QuizTrafficSource = 'organic' | 'paidGoogle' | 'paidMeta' | 'paidYouTube'

class Mixpanel {
  constructor() {
    mixpanel.init(
      process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN || '449fc24bc868d03e5a530ce37f0cac9d',
      {
        // config override goes here
        api_host: 'https://api.personaldevelopmentschool.com',
        debug: process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'dev',
      }
    )
  }
  /**
   * Tracks a specific event with given name and props
   *
   * @param event Name of the event to track
   * @param props Additional props to track
   */
  private event(event: Events, props?: any) {
    mixpanel.track(event, props)
  }

  /**
   * Starts tracking time until the same event is called.
   *
   * Time tracking stops when `mixpanel.track(event)` is called with the same event
   *
   * Same thing as `console.time()` and `console.timeEnd()`
   */
  eventTime(event: Events) {
    mixpanel.time_event(event)
  }

  /**
   * Store user properties on a user's profile
   * Overrides data if it is already set
   */

  setPeople(props: Dict) {
    mixpanel.people.set(props)
  }

  /**
   * Store user properties on a user's profile
   * Does not override them if they are already set
   */
  setPeopleOnce(props: Dict) {
    mixpanel.people.set_once(props)
  }

  /**
   * Identify a user to track their activity across device
   * @param userId Unique ID of a currently logged in user
   */
  setUser(userId?: string | null) {
    if (!userId) return
    mixpanel.identify(String(userId))
  }

  track = {
    AudioStarted: (props: { audio_type: string; page_name?: Pages }) => {
      this.event('Audio Started', {
        ...props,
        page_name: props.page_name || window.location.pathname,
      })
    },

    ButtonClicked: (props: {
      button_label?: string
      page_name?: Pages
      redirection?: string
      plan_type?: string
      seq_no?: number
    }) => {
      this.event('Button Clicked', {
        ...props,
        page_name: props.page_name || window.location.pathname,
      })
    },

    CheckoutStepStarted: (props: {
      'Checkout Page': 'checkout_signin_signup_page' | 'checkout_page'
      'Product Price': string
      page_name?: Pages
    }) => {
      this.event('Checkout Step Started', {
        ...props,
        page_name: props.page_name || window.location.pathname,
      })
    },

    CourseBannerClicked: (props: { page_name?: Pages; course_name: string }) => {
      this.event('Course Banner Clicked', {
        ...props,
        page_name: props.page_name || window.location.pathname,
      })
    },

    ExperimentStarted: (props: {
      'Experiment name': string
      'Variant name': ExperimentVariant
      page_name?: Pages
    }) => {
      this.event('$experiment_started', props)
    },

    MasterclassQuizSubmit: (props: {
      page_name?: Pages
      option1?: boolean
      option2?: boolean
      option3?: boolean
      option4?: boolean
      option5?: boolean
    }) => {
      this.event('Masterclass Quiz Submit', {
        ...props,
        page_name: props.page_name || window.location.pathname,
      })
    },

    MasterclassResultsQuiz: (props: { selected_option?: string }) => {
      this.event('Masterclass Results Quiz Submit', props)
    },

    PageScrolled: (props: { page_name?: Pages; scroll_depth: number }) => {
      this.event('Page Scrolled', {
        ...props,
        page_name: props.page_name || window.location.pathname,
      })
    },

    PageViewed: (props: { page_name?: Pages }) => {
      this.event('Page Viewed', { page_name: props.page_name || window.location.pathname })
    },

    QuizFinished: (props: {
      quiz_name: string
      quiz_type?: 'romantic' | 'friends' | 'family'
      quiz_traffic_source?: QuizTrafficSource
      progress?: string
    }) => {
      this.event('Quiz Finished', props)
    },

    QuizProgress: (props: {
      quiz_name: string
      progress: string
      question: number
      total_questions: number
    }) => {
      this.event('Quiz Progress', props)
    },

    QuizStarted: (props: {
      quiz_name: string
      quiz_type?: 'romantic' | 'friends' | 'family'
      quiz_traffic_source?: QuizTrafficSource
    }) => {
      this.event('Quiz Started', props)
    },

    SignUp: (props: { distinct_id: string; $insert_id?: string }) => {
      this.event('$signup', props)
    },

    VideoStarted: (props: { video_type: string; page_name?: Pages }) => {
      this.event('Video Started', {
        ...props,
        page_name: props.page_name || window.location.pathname,
      })
    },

    VideoProgress: (props: { progress: number; page_name?: Pages; video_type: string }) => {
      this.event('Video Progress', {
        ...props,
        page_name: props.page_name || window.location.pathname,
      })
    },
  }
}

export default new Mixpanel()
