'use client'

import { useEffect, useState } from 'react'

/** Collection of Google Analytic event names used in tracking custom events */
type TGTMEvent = 'form_tracking' | 'iat_form_tracking' | 'iat_webinar_signup' | 'quiz_tracking'

/** Collection of Google Analytic categories used in tracking custom events */
type TGTMCategory = 'Attachment Quiz' | 'Codependency Quiz' | 'IAT Ebook Form' | 'IAT Webinar Signup' | 'Quiz'

/** Collection of Google Analytic actions used in tracking custom events */
type TGTMAction = 'Form' | 'Finished'

/** Collection of Google Analytic labels used in tracking custom events */
type TGTMLabel = 'Submit'

interface IGTMEvent {
  /** Typically the object that was interacted with (e.g. 'Video') */
  eventCategory: TGTMCategory
  /** Name of the event (eg. form_tracking) */
  event?: TGTMEvent
  /** The type of interaction (e.g. 'play') */
  eventAction: TGTMAction
  /** Useful for categorizing events (e.g. 'Fall Campaign') */
  eventLabel?: TGTMLabel
}

interface IGTM {
  track(event: IGTMEvent): void
}

export const useGoogleTagManager = () => {
  const [tagManager, setTagManager] = useState<undefined | IGTM>()

  useEffect(() => {
    class GTM implements IGTM {
      track(event: IGTMEvent) {
        try {
          window.dataLayer?.push(event)
        } catch (err) {
          console.error('Error when trying to use dataLayer:', err, 'Was GTM initialized?')
        }
      }
    }

    setTagManager(new GTM())
  }, [])

  return tagManager
}
