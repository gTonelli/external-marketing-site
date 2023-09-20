'use client'

// libraries
import sha3 from 'crypto-js/sha256'
import ReactPixel from 'react-facebook-pixel'
// import Cookies from 'universal-cookie'
import Cookies from 'universal-cookie'

interface IFBQLead {
  email: string
  phone?: string
}

class FacebookPixel {
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

  async trackLead(args: IFBQLead) {
    const eventId = String(sha3(args.email))
    const cookies = new Cookies()

    this.event('Lead', { eventId: eventId })
    await fetch(
      process.env.NEXT_PUBLIC_CAPI_URL || 'https://pds-marketing-api.herokuapp.com/fb-capi/lead',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: args.email,
          phone: args.phone,
          fbp: cookies.get('_fbp'),
          fbc: cookies.get('_fbc'),
          event_id: eventId,
        }),
      }
    ).catch((err) => {
      console.error(err)
    })
  }
}

export default new FacebookPixel()
