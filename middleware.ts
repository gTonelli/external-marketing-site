import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { sendEventUnsafe } from './utils/functions'

export function middleware(request: NextRequest) {
  try {
    const pageData = getPageData(request)
    if (
      !pageData?.cookieKey ||
      !pageData.experimentName ||
      !pageData.pageName ||
      !pageData.variantUrl ||
      !pageData.variantRatio
    ) {
      return NextResponse.next()
    }
    const { cookieKey, experimentName, pageName, variantUrl, variantRatio, forceControlOnNewUser } =
      pageData

    let showVariant = false
    let setCookie = false
    const variantCookie = request.cookies.get(cookieKey)?.value
    const mixpanelCookie = request.cookies.get(
      `mp_${process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN}_mixpanel`
    )

    if (!mixpanelCookie) {
      if (forceControlOnNewUser) {
        const response = NextResponse.next()
        response.cookies.set(cookieKey, 'false')
        return response
      } else {
        showVariant = crypto.getRandomValues(new Uint8Array(1))[0] / 255 < variantRatio
        const response = showVariant
          ? NextResponse.redirect(new URL(variantUrl, request.nextUrl.origin))
          : NextResponse.next()
        return response
      }
    }

    const mixpanelID = JSON.parse(mixpanelCookie.value)?.distinct_id

    if (typeof variantCookie === 'string') {
      showVariant = JSON.parse(variantCookie)
    } else {
      showVariant = crypto.getRandomValues(new Uint8Array(1))[0] / 255 < variantRatio
      setCookie = true
      const insert_id = btoa(`${Date.now()}${mixpanelID.slice(0, 6)}${experimentName}`)
      sendEventUnsafe(mixpanelID, insert_id, '$experiment_started', {
        'Experiment name': experimentName,
        'Variant name': showVariant ? 'Variant 1' : 'Control',
        page_name: pageName,
      })
    }

    const response = showVariant
      ? NextResponse.redirect(new URL(variantUrl, request.nextUrl.origin))
      : NextResponse.next()

    if (setCookie) {
      response.cookies.set({
        name: cookieKey,
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
  matcher: ['/iat'],
}

const getPageData = (request: NextRequest): TSplitTestConfig | undefined => {
  if (request.nextUrl.pathname.includes('/iat')) {
    return splitTestConfigs.iatTest
  }
}

export const splitTestConfigs: TSplitTestConfigs = {
  iatTest: {
    cookieKey: 'prod-2556-iat-nav',
    pageName: 'External IAT Page',
    experimentName: 'PROD-2556-IAT-Nav',
    variantUrl: '/coaching',
    variantRatio: 0.5,
    forceControlOnNewUser: true,
  },

  quizTest: {
    cookieKey: 'prod-2577-quiz',
    pageName: 'Main Funnel Quiz',
    experimentName: 'PROD-2577-Quiz',
    variantUrl: '/quiz/v2',
    variantRatio: 0.2,
    forceControlOnNewUser: false,
  },
}

type TSplitTestConfigs = {
  [key: string]: TSplitTestConfig | undefined
}

type TSplitTestConfig = {
  cookieKey: string
  pageName: string
  experimentName: string
  variantUrl: string
  variantRatio: number
  forceControlOnNewUser: boolean
}
