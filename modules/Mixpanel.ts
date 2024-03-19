// libraries
import mixpanel, { Dict } from 'mixpanel-browser'

/* Collection of all Mixpanel event names tracked throughout the app */
type Events =
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

/* Collection of all page names tracked throughout the app */
export type Pages =
  | `7 Day Free Trial Page`
  | `7 Day Free Trial Headspace`
  | `7 Day Free Trial Masterclass`
  | `7 Day Trial + 50% off first month`
  | `7 Days Trial Page Funnel - FA`
  | `7-Day Trial Page (Variant)`
  | `Attachment Style Needs Beliefs Page`
  | `Attachment Style Quiz`
  | `Attachment Style Results - ${string}`
  | `Attachment Styles Email Page - ${string} ${string}`
  | `Black Friday`
  | `Codependency Quiz`
  | `Corporate Quiz Landing Page`
  | `Corporate Quiz Questions Page`
  | `Corporate Quiz Form Page`
  | `Corporate Quiz Results Page`
  | `Dreamlife Results Page FA`
  | `External IAT Page`
  | `Explore Courses Page`
  | `Find My Courses`
  | `IAT Attachment Quiz`
  | `Intent Project - FA`
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
  | `Members Quiz`
  | `Members Quiz Questions`
  | `Members Quiz Form`
  | `Members Quiz Results`
  | `Masterclass Quiz`
  | `Order Complete`
  | `mha-month`
  | `Speaker Gift`
  | `Secondary Sales - ${string}`
  | `Straight to Offer ${string}`
  | `Valentine's Day`
  | `vsl-${string}`
  | `VSL Royal Rumble Results - ${string}`
  | `Wellness Page`

export type ExperimentVariant = 'Control' | 'Variant 1' | 'Variant 2'

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

    QuizFinished: (props: { quiz_name: string; quiz_type?: 'romantic' | 'friends' | 'family' }) => {
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

    QuizStarted: (props: { quiz_name: string; quiz_type?: 'romantic' | 'friends' | 'family' }) => {
      this.event('Quiz Started', props)
    },

    SignUp: (props: { distinct_id: string; $insert_id: string }) => {
      this.event('$signup', props)
    },

    VideoStarted: (props: { video_type: string; page_name?: Pages }) => {
      this.event('Video Started', {
        ...props,
        page_name: props.page_name || window.location.pathname,
      })
    },
  }
}

/**
 * A custom implementation for sending Mixpanel data. This function is for use with the Edge runtime and should never be used in the browser.
 * @param mixpanelID the distinct ID of the user
 * @param insert_id required for [de-duplication.](https://developer.mixpanel.com/reference/track-event) **The request will not be retried if it fails.**
 * @param event string name of the event
 * @param props key value pairs to be sent as event properties
 */
export const sendEventUnsafe = (
  mixpanelID: string,
  insert_id: string,
  event: Events,
  props: Dict
) => {
  return fetch('https://api.mixpanel.com/track', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        event,
        properties: {
          token:
            process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN || '449fc24bc868d03e5a530ce37f0cac9d',
          time: Date.now(),
          distinct_id: mixpanelID,
          $insert_id: insert_id.slice(0, 36),
          ...props,
        },
      },
    ]),
  })
    .then((res) => res.text())
    .catch((error) => {
      console.error('Error sending mixpanel event', error)
    })
}

export default new Mixpanel()
