'use client'

import { useEffect, useState } from 'react'

/** Collection of Funnelytics event names used in tracking custom events */
type TFNLEvent = 'Form Tracking' | 'Iat Form Tracking' | 'Quiz Tracking'

interface IFNL {
  track(event: TFNLEvent, props?: Record<string, any>): void
}

export const useFunnelytics = () => {
  const [funnelytics, setFunnelytics] = useState<undefined | IFNL>()

  useEffect(() => {
    class FNL implements IFNL {
      track(event: TFNLEvent, props?: Record<string, any>) {
        try {
          window.funnelytics.events.trigger(event, props || {})
        } catch (err) {
          console.error('Error when trying to use funnelytics:', err, 'Was Funnelytics initialized?')
        }
      }
    }

    setFunnelytics(new FNL())
  }, [])

  return funnelytics
}
