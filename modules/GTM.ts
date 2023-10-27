// libraries
import TagManager, { DataLayerArgs } from 'react-gtm-module'

/** Collection of Google Analytic event names used in tracking custom events */
type TGTMEvent = 'form_tracking' | 'quiz_tracking'

/** Collection of Google Analytic categories used in tracking custom events */
type TGTMCategory = 'Attachment Quiz' | 'Quiz'

/** Collection of Google Analytic actions used in tracking custom events */
type TGTMAction = 'Form' | 'Finished'

/** Collection of Google Analytic labels used in tracking custom events */
type TGTMLabel = 'Submit'

interface IGTMEvent extends DataLayerArgs {
  /** Typically the object that was interacted with (e.g. 'Video') */
  eventCategory: TGTMCategory
  /** Name of the event (eg. form_tracking) */
  event?: TGTMEvent
  /** The type of interaction (e.g. 'play') */
  eventAction: TGTMAction
  /** Useful for categorizing events (e.g. 'Fall Campaign') */
  eventLabel?: TGTMLabel
}

export const GTM = {
  /** Retrieves the API key from the .env file */
  getKey: (): string | undefined | null => process.env.REACT_APP_GTM_ID,

  /** Initializes a new instance of the Google Tag Manager object */
  init: () => {
    const GTM_API_KEY = GTM.getKey()
    if (GTM_API_KEY) {
      TagManager.initialize({
        gtmId: GTM_API_KEY,
        events: {
          form_tracking: 'Form Tracking',
          quiz_tracking: 'Quiz Tracking',
        },
      })
    }
  },
  /**
   * Tracks a specific event with given category, action and props
   *
   * @param args Event config
   */
  event: (args: IGTMEvent) => {
    TagManager.dataLayer({ dataLayer: args })
  },
}
