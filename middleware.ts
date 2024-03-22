import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { sendEventUnsafe } from './utils/functions'

export function middleware(request: NextRequest) {
  try {
    if (!request.nextUrl.pathname.includes('/iat')) return NextResponse.next()

    let showVariant = false
    let setCookie = false
    const variantCookie = request.cookies.get('prod-2614-iat-page')?.value
    const mixpanelCookie = request.cookies.get(
      `mp_${process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN}_mixpanel`
    )

    if (!mixpanelCookie) {
      const response = NextResponse.next()
      response.cookies.set('prod-2614-iat-page', 'false')
      return response
    }

    const mixpanelID = JSON.parse(mixpanelCookie.value)?.distinct_id

    if (typeof variantCookie === 'string') {
      showVariant = JSON.parse(variantCookie)
    } else {
      showVariant = crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.2
      setCookie = true
      const experimentName = 'PROD-2614-IAT-Page'
      const insert_id = btoa(`${Date.now()}${mixpanelID.slice(0, 6)}${experimentName}`)
      sendEventUnsafe(mixpanelID, insert_id, '$experiment_started', {
        'Experiment name': experimentName,
        'Variant name': showVariant ? 'Variant 1' : 'Control',
        page_name: showVariant ? 'IAT Page' : 'External IAT Page',
      })
    }

    const response = showVariant
      ? NextResponse.redirect(
          new URL(
            'https://university.personaldevelopmentschool.com/pages/iat',
            request.nextUrl.origin
          )
        )
      : NextResponse.next()

    if (setCookie) {
      response.cookies.set({
        name: 'prod-2614-iat-page',
        value: showVariant.toString(),
        httpOnly: false,
        maxAge: 7776000, // 3 Months
      })
    }

    return response
  } catch (error) {
    return NextResponse.next()
  }
}
export const config = {
  matcher: '/iat',
}
