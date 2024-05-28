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
      !pageData.variantPath ||
      !pageData.variantRatio
    ) {
      return NextResponse.next()
    }
    const {
      cookieKey,
      experimentName,
      pageName,
      variantPath,
      variantRatio,
      forceControlOnNewUser,
      controlUrl,
      variantBase,
    } = pageData

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
          ? NextResponse.redirect(new URL(variantPath, request.nextUrl.origin))
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

    let response: NextResponse
    if (showVariant) {
      response = NextResponse.redirect(new URL(variantPath, request.nextUrl.origin))
    } else if (controlUrl) {
      let controlHref = controlUrl.base + controlUrl.path
      let searchParams = new URLSearchParams(request.nextUrl.searchParams)

      controlUrl?.params?.forEach((param) => {
        controlHref += request.nextUrl.searchParams.get(param)
        searchParams.delete(param)
      })

      if (searchParams.size) controlHref += `?${searchParams.toString()}`
      response = NextResponse.redirect(new URL(controlHref))
    } else {
      response = NextResponse.next()
    }

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
  matcher: ['/quiz/ap', '/quiz/da', '/quiz/sa', '/quiz/results/fa', '/checkout/v2'],
}

const getPageData = (request: NextRequest): TSplitTestConfig | undefined => {
  const path = request.nextUrl.pathname
  const configs = [
    { regex: /^\/quiz\/ap(\/|$)/, config: splitTestConfigs.apTest },
    { regex: /^\/quiz\/da(\/|$)/, config: splitTestConfigs.daTest },
    { regex: /^\/quiz\/sa(\/|$)/, config: splitTestConfigs.saTest },
    { regex: /^\/quiz\/results\/fa(\/|$)/, config: splitTestConfigs.faTest },
    { regex: /^\/checkout\/v2/, config: splitTestConfigs.checkoutTest },
  ]

  return configs.find(({ regex }) => regex.test(path))?.config
}

export const splitTestConfigs: TSplitTestConfigs = {
  apTest: {
    cookieKey: 'gm-1065-ap-video-header',
    pageName: 'vsl-ap',
    experimentName: 'GM-1055-AP-Video-Header',
    variantPath: '/quiz/versions/ap',
    variantRatio: 0.5,
    forceControlOnNewUser: false,
  },
  daTest: {
    cookieKey: 'gm-1065-da-video-header',
    pageName: 'vsl-da',
    experimentName: 'GM-1055-DA-Video-Header',
    variantPath: '/quiz/versions/da',
    variantRatio: 0.5,
    forceControlOnNewUser: false,
  },
  faTest: {
    cookieKey: 'gm-1055-video-header',
    pageName: 'VSL Royal Rumble Results - fa',
    experimentName: 'GM-1055-Video-Header',
    variantPath: '/quiz/results/fa/v2',
    variantRatio: 0.5,
    forceControlOnNewUser: false,
  },
  saTest: {
    cookieKey: 'gm-1065-sa-video-header',
    pageName: 'vsl-sa',
    experimentName: 'GM-1055-SA-Video-Header',
    variantPath: '/quiz/versions/sa',
    variantRatio: 0.5,
    forceControlOnNewUser: false,
  },
  checkoutTest: {
    cookieKey: 'GM-1058-bootcamp-checkout',
    pageName: 'Checkout V2',
    experimentName: 'GM-1058-Bootcamp-Checkout',
    controlUrl: {
      path: '/enroll/2996140?price_id=3853225',
      base: 'https://university.personaldevelopmentschool.com',
      params: ['productId'],
    },
    variantPath: '/pages/checkout',
    variantBase: 'https://university.personaldevelopmentschool.com',
    variantRatio: 1,
    forceControlOnNewUser: false,
  },
}

type TSplitTestConfigs = {
  [key: string]: TSplitTestConfig
}

type TSplitTestConfig = {
  cookieKey: string
  pageName: string
  experimentName: string
  controlUrl?: {
    path: string
    base?: string
    /** These parameters will be pulled from searchParams and converted to urlParams */
    params?: string[]
  }
  variantPath: string
  variantBase?: string
  variantRatio: number
  forceControlOnNewUser: boolean
}
