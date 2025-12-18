'use client'

// libraries
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
// utils
import { TStyleLong, TDatingStageLong } from '@/utils/types'

interface IFBQLead {
  email: string
  eventId: string
  phone?: string
  sendServerSideEvent?: boolean
}

interface IFBQAttachmentQuizResult {
  attachmentStyle: TStyleLong
  eventId: string
}

interface IFBQDatingQuizResult {
  datingStage: TDatingStageLong
  eventId: string
}

interface IFacebookPixel {
  event(title: string, args?: any): void
  trackLead(args: IFBQLead): void
  trackAttachmentQuizResult(args: IFBQAttachmentQuizResult): void
  trackDatingQuizResult(args: IFBQDatingQuizResult): void
}

export function useFacebookPixel() {
  const [facebookPixel, setFacebookPixel] = useState<IFacebookPixel>()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        class FacebookPixel implements IFacebookPixel {
          constructor() {
            ReactPixel.init(process.env.NEXT_PUBLIC_FB_PIXEL_ID || '1256706227835831')
          }

          /**
           * Tracks a specific event with given category, action and props
           *
           * @param args Event config
           */
          event(title: string, args?: any) {
            ReactPixel.track(title, args)
          }

          async trackAttachmentQuizResult({ attachmentStyle, eventId }: IFBQAttachmentQuizResult) {
            ReactPixel.trackCustom('Attachment Quiz Result', {
              attachmentStyle,
              eventID: eventId,
              currency: 'usd',
              value: 2.0,
            })
          }

          async trackDatingQuizResult({ datingStage, eventId }: IFBQDatingQuizResult) {
            ReactPixel.trackCustom('Dating Quiz Result', {
              datingStage,
              eventID: eventId,
              currency: 'usd',
              value: 2.0,
            })
          }

          async trackLead({ email, phone, sendServerSideEvent = false, eventId }: IFBQLead) {
            const cookies = new Cookies()

            this.event('Lead', { eventId: eventId, currency: 'usd', value: 2.0 })
            if (sendServerSideEvent) {
              await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/facebook-capi/lead`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email,
                  phone,
                  fbp: cookies.get('_fbp'),
                  fbc: cookies.get('_fbc'),
                  event_id: eventId,
                  currency: 'usd',
                  value: 2.0,
                }),
              }).catch((err) => {
                console.error(err)
              })
            }
          }
        }

        setFacebookPixel(new FacebookPixel())
      })
  }, [])

  return facebookPixel
}
