import { NextFetchEvent, NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest, context: NextFetchEvent) {
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
      domain,
    } = pageData

    let showVariant = false
    let setSplitTestCookie = false
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
          domain,
          request,
          controlUrl,
        })
        response.cookies.set(cookieKey, 'false', {
          domain: domain || request.nextUrl.hostname,
          httpOnly: false,
          maxAge: 7776000, // 3 Months,
        })
        return response
      } else {
        showVariant = crypto.getRandomValues(new Uint8Array(1))[0] / 255 < variantRatio
        const response = generateResponse({
          showVariant,
          variantUrl,
          searchParams,
          domain,
          request,
          controlUrl,
        })
        return response
      }
    }

    const mixpanelID = JSON.parse(mixpanelCookie.value)?.distinct_id

    if (typeof variantCookie === 'string') {
      try {
        showVariant = JSON.parse(variantCookie)
      } catch (_) {
        showVariant = false
      }
    } else {
      setSplitTestCookie = true
      const randomFloat = crypto.getRandomValues(new Uint8Array(1))[0] / 255
      if (randomFloat > variantRatio * 2) {
        showVariant = false
      } else {
        showVariant = randomFloat < variantRatio
        const insert_id = btoa(`${Date.now()}${mixpanelID.slice(0, 6)}${experimentName}`)
        try {
          await sendEventUnsafe(mixpanelID, insert_id, '$experiment_started', {
            'Experiment name': experimentName,
            'Variant name': showVariant ? 'Variant 1' : 'Control',
            page_name: pageName,
          })
        } catch (error) {
          console.error('Error sending Mixpanel event:', error)
        }
      }
    }

    const response = generateResponse({
      showVariant,
      variantUrl,
      searchParams,
      domain,
      request,
      controlUrl,
    })

    if (setSplitTestCookie) {
      response.cookies.set({
        name: cookieKey,
        value: showVariant.toString(),
        httpOnly: false,
        maxAge: 7776000, // 3 Months,
        domain: domain || request.nextUrl.hostname,
      })
    }

    return response
  } catch (error) {
    console.error(error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/valentines-day', '/attachment-report/fa', '/quiz'],
}

interface IConfigWithRegex {
  /** This regex will be used to match the request path and return a split test config */
  regex: RegExp
  /** The config to be returned on a successful match */
  config: TSplitTestConfig
}

const getPageData = (request: NextRequest): TSplitTestConfig | undefined => {
  const path = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  const utmSource = searchParams.get('utm_source')

  const configs: Array<IConfigWithRegex> = [
    {
      regex: /^\/valentines-day/,
      config: splitTestConfigs.valentinesDayTest,
    },
    {
      regex: /^\/attachment-report\/fa/,
      config: splitTestConfigs.vslReportFaVideoTest,
    },
  ]

  if (path.startsWith('/quiz') && utmSource === 'paid-youtube') {
    configs.push({
        regex: /^\/quiz/,
        config: splitTestConfigs.ytQuizFunnelTest,
    })
  }

  return configs.find((config) => config.regex.test(path))?.config
}

interface IGenerateResponse extends Pick<TSplitTestConfig, 'variantUrl' | 'controlUrl'> {
  showVariant: boolean
  searchParams: URLSearchParams
  request: NextRequest
  domain?: string
}

/** Generates a response based on the provided values */
function generateResponse({
  showVariant,
  variantUrl,
  searchParams,
  domain,
  request,
  controlUrl,
}: IGenerateResponse) {
  if (showVariant) {
    let path = variantUrl?.path || request.nextUrl.pathname

    if (Boolean(searchParams.toString())) path += `?${searchParams.toString()}`
    const response = NextResponse.redirect(
      new URL(path, variantUrl?.base || request.nextUrl.origin)
    )

    return response
  } else if (controlUrl) {
    let controlHref =
      (controlUrl?.base || request.nextUrl.origin) + (controlUrl?.path || request.nextUrl.pathname)
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
const sendEventUnsafe = async (
  mixpanelID: string,
  insert_id: string,
  event: string,
  props: any
) => {
  try {
    const res = await fetch('https://api.mixpanel.com/track', {
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

    const responseText = await res.text()
    if (responseText !== '1') {
      throw new Error(`Unexpected response: ${responseText}`)
    }
  } catch (error) {
    console.error('Error sending mixpanel event', error)
  }
}

const splitTestConfigs: TSplitTestConfigs = {
  valentinesDayTest: {
    cookieKey: 'gm-1435-valentines-day-test',
    pageName: "Valentine's Day",
    experimentName: 'GM-1435-Valentines-Day-Test',
    variantUrl: {
      path: '/valentines-day-promo',
    },
    variantRatio: 0.3,
    forceControlOnNewUser: false,
  },
  vslReportFaVideoTest: {
    cookieKey: 'gm-1447-vsl-rep-fa',
    pageName: 'Attachment Style Report Old - fa',
    experimentName: 'GM-1447-VSL-FA-Report',
    variantUrl: {
      path: '/pdf-report/fa',
    },
    variantRatio: 0.5,
    forceControlOnNewUser: true,
  },
  ytQuizFunnelTest: {
    cookieKey: 'gm-1525-yt-quiz-funnel',
    pageName: 'Main Funnel Quiz',
    experimentName: 'GM-1525-Quiz-Funnel',
    variantUrl: {
      path: '/yt-quiz',
    },
    variantRatio: 0.5,
    forceControlOnNewUser: false,
  }
}

type TSplitTestConfigs = {
  [key: string]: TSplitTestConfig
}

type TSplitTestConfig = {
  /** Key for the split test cookie */
  cookieKey: string
  /** To be sent to Mixpanel as an event prop */
  pageName: string
  /** Name of the experiment on Mixpanel */
  experimentName: string
  /** Domain for the cookie to be set on */
  domain?: string
  /** Conditionally required as otherwise request url is used */
  controlUrl?: {
    /** Conditionally required as otherwise the request path is used */
    path?: string
    /** Conditionally required as otherwise the request origin is used */
    base?: string
  }
  variantUrl?: {
    /** Conditionally required as otherwise the request path is used */
    path?: string
    /** Conditionally required as otherwise the request origin is used */
    base?: string
  }
  /** Ratio of users who will see the variant, with 1 being 100% */
  variantRatio: 0.2 | 0.3 | 0.5 | 0.25
  /** Should only be false if there are fallback browser events to send mixpanel data. Useful for top-of-funnel tests */
  forceControlOnNewUser: boolean
}
