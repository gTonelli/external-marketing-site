import { NextFetchEvent, NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest, context: NextFetchEvent) {
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
    const {
      cookieKey,
      experimentName,
      pageName,
      variantUrl,
      variantRatio,
      forceControlOnNewUser,
      controlUrl,
    } = pageData

    let showVariant = false
    let setCookie = false
    let searchParams = new URLSearchParams(request.nextUrl.searchParams)
    const variantCookie = request.cookies.get(cookieKey)?.value
    const mixpanelCookie = request.cookies.get(
      `mp_${process.env.NEXT_PUBLIC_MIXPANEL_PROJECT_TOKEN}_mixpanel`
    )

    if (!mixpanelCookie) {
      if (forceControlOnNewUser) {
        const response = generateResponse({
          showVariant: false,
          variantUrl,
          searchParams,
          request,
          controlUrl,
        })
        response.cookies.set(cookieKey, 'false')
        return response
      } else {
        showVariant = crypto.getRandomValues(new Uint8Array(1))[0] / 255 < variantRatio
        const response = generateResponse({
          showVariant,
          variantUrl,
          searchParams,
          request,
          controlUrl,
        })
        return response
      }
    }

    const mixpanelID = JSON.parse(mixpanelCookie.value)?.distinct_id

    if (typeof variantCookie === 'string') {
      showVariant = JSON.parse(variantCookie)
    } else {
      setCookie = true
      const randomFloat = crypto.getRandomValues(new Uint8Array(1))[0] / 255
      if (randomFloat > variantRatio * 2) {
        showVariant = false
      } else {
        showVariant = randomFloat < variantRatio
        const insert_id = btoa(`${Date.now()}${mixpanelID.slice(0, 6)}${experimentName}`)
        context.waitUntil(
          sendEventUnsafe(mixpanelID, insert_id, '$experiment_started', {
            'Experiment name': experimentName,
            'Variant name': showVariant ? 'Variant 1' : 'Control',
            page_name: pageName,
          })
        )
      }
    }

    const response = generateResponse({
      showVariant,
      variantUrl,
      searchParams,
      request,
      controlUrl,
    })

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
  matcher: [
    '/quiz',
    '/attachment-report/fa',
    '/attachment-report/ap',
    '/attachment-report/da',
    '/attachment-report/sa',
  ],
}

interface IConfigWithRegex {
  regex: RegExp
  config: TSplitTestConfig
}

const getPageData = (request: NextRequest): TSplitTestConfig | undefined => {
  const path = request.nextUrl.pathname
  const searchParams = new URLSearchParams(request.nextUrl.searchParams)

  // Get UTM parameters, handle cases where they may not exist
  const utmMedium = searchParams.get('utm_medium') || ''
  const utmSource = searchParams.get('utm_source') || ''

  const configs: Array<{ regex: RegExp, check: () => boolean, config: TSplitTestConfig }> = [
    { 
      regex: /^\/attachment-report\/fa/, 
      check: () => true, 
      config: splitTestConfigs.pdfTestFa 
    },
    { 
      regex: /^\/attachment-report\/ap/, 
      check: () => true, 
      config: splitTestConfigs.pdfTestAp 
    },
    { 
      regex: /^\/attachment-report\/da/, 
      check: () => true, 
      config: splitTestConfigs.pdfTestDa 
    },
    { 
      regex: /^\/attachment-report\/sa/, 
      check: () => true, 
      config: splitTestConfigs.pdfTestSa 
    },
    { 
      regex: /^\/quiz/, 
      // Check if UTM contains 'cpc' in medium and 'google' in source
      check: () => utmMedium.includes('cpc') && utmSource.includes('google'), 
      config: splitTestConfigs.trafficSegmentationGoogle 
    },
    { 
      regex: /^\/quiz/, 
      // Check if UTM medium is 'organic'
      check: () => utmMedium.includes('organic'), 
      config: splitTestConfigs.trafficSegmentationYoutube 
    }
  ];

  const matchedConfig = configs.find(
    (config) => config.regex.test(path) && config.check()
  )?.config;

  return matchedConfig;
}

interface IGenerateResponse extends Pick<TSplitTestConfig, 'variantUrl' | 'controlUrl'> {
  showVariant: boolean
  searchParams: URLSearchParams
  request: NextRequest
}

/** Generates a response based on the provided values */
function generateResponse({
  showVariant,
  variantUrl,
  searchParams,
  request,
  controlUrl,
}: IGenerateResponse): NextResponse {
  if (showVariant) {
    let path = variantUrl.path
    if (Boolean(searchParams.toString())) path += `?${searchParams.toString()}`
    return NextResponse.redirect(new URL(path, variantUrl.base || request.nextUrl.origin))
  } else if (controlUrl) {
    let controlHref = (controlUrl?.base || request.nextUrl.origin) + controlUrl.path
    controlUrl?.urlParams?.forEach((param) => {
      controlHref += `/${request.nextUrl.searchParams.get(param)}`
      searchParams.delete(param)
    })
    if (Boolean(searchParams.toString())) controlHref += `?${searchParams.toString()}`
    return NextResponse.redirect(new URL(controlHref))
  } else {
    return NextResponse.next()
  }
}

/**
 * A custom implementation for sending Mixpanel data. This function is for use with the Edge runtime and should never be used in the browser.
 * @param mixpanelID the distinct ID of the user
 * @param insert_id required for [de-duplication.](https://developer.mixpanel.com/reference/track-event) **The request will not be retried if it fails.**
 * @param event string name of the event
 * @param props key value pairs to be sent as event properties
 */
const sendEventUnsafe = (mixpanelID: string, insert_id: string, event: string, props: any) => {
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
    .then((res) => {
      if (res !== '1') throw `An unepxected error occured. Response was ${res}`
    })
    .catch((error) => {
      console.error('Error sending mixpanel event', error)
    })
}

export const splitTestConfigs: TSplitTestConfigs = {
  pdfTestFa: {
    cookieKey: 'gm-1182-pdf-headline-test-fa',
    pageName: 'Attachment Style Report Old - fa',
    experimentName: 'Attachment Report Test v2',
    variantUrl: {
      path: '/pdf-report/fa',
    },
    variantRatio: 0.5,
    forceControlOnNewUser: true,
  },
  pdfTestAp: {
    cookieKey: 'gm-1182-pdf-headline-test-ap',
    pageName: 'Attachment Style Report Old - ap',
    experimentName: 'Attachment Report Test v2',
    variantUrl: {
      path: '/pdf-report/ap',
    },
    variantRatio: 0.5,
    forceControlOnNewUser: true,
  },
  pdfTestDa: {
    cookieKey: 'gm-1182-pdf-headline-test-da',
    pageName: 'Attachment Style Report Old - da',
    experimentName: 'Attachment Report Test v2',
    variantUrl: {
      path: '/pdf-report/da',
    },
    variantRatio: 0.5,
    forceControlOnNewUser: true,
  },
  pdfTestSa: {
    cookieKey: 'gm-1182-pdf-headline-test-sa',
    pageName: 'Attachment Style Report Old - sa',
    experimentName: 'Attachment Report Test v2',
    variantUrl: {
      path: '/pdf-report/sa',
    },
    variantRatio: 0.5,
    forceControlOnNewUser: true,
  },
  trafficSegmentationGoogle: {
    cookieKey: 'gm-1166-segmentation-google',
    pageName: 'Main Funnel Quiz',
    experimentName: 'GM-1166-Traffic-Segmentation-Google',
    variantUrl: {
      path: '/',
    },
    variantRatio: 0.2,
    forceControlOnNewUser: true,
  },
  trafficSegmentationYoutube: {
    cookieKey: 'gm-1166-segmentation-youtube',
    pageName: 'Main Funnel Quiz',
    experimentName: 'GM-1166-Traffic-Segmentation-Youtube',
    variantUrl: {
      path: '/',
    },
    variantRatio: 0.3, // exposed to 60% of traffic due to low volume
    forceControlOnNewUser: true,
  }
}

type TSplitTestConfigs = {
  [key: string]: TSplitTestConfig
}

type TSplitTestConfig = {
  cookieKey: string
  pageName: string
  experimentName: string
  /** Conditionally required as otherwise request url is used */
  controlUrl?: {
    path: string
    /** Conditionally required as otherwise request origin is used */
    base?: string
    /** These parameters will be pulled from searchParams and converted to urlParams in the order that they appear in the config */
    urlParams?: string[]
  }
  variantUrl: {
    path: string
    /** Conditionally required as otherwise request origin is used */
    base?: string
  }
  variantRatio: 0.2 | 0.3 | 0.5
  /** Should only be false if there are fallback browser events to send mixpanel data. Useful for top-of-funnel tests */
  forceControlOnNewUser: boolean
}
