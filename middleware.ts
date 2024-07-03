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
      showVariant = crypto.getRandomValues(new Uint8Array(1))[0] / 255 < variantRatio
      setCookie = true
      const insert_id = btoa(`${Date.now()}${mixpanelID.slice(0, 6)}${experimentName}`)
      context.waitUntil(
        sendEventUnsafe(mixpanelID, insert_id, '$experiment_started', {
          'Experiment name': experimentName,
          'Variant name': showVariant ? 'Variant 1' : 'Control',
          page_name: pageName,
        })
      )
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
  matcher: [],
}

interface IConfigWithRegex {
  regex: RegExp
  config: TSplitTestConfig
}

const getPageData = (request: NextRequest): TSplitTestConfig | undefined => {
  const path = request.nextUrl.pathname
  const configs: Array<Partial<IConfigWithRegex>> = [
    // { regex: /^\/checkout\/v2/, config: splitTestConfigs.checkoutTest }, Sample regex for future ref
    // Add configurations here when needed
  ]

  // Type guard to check if an object has a regex property
  const isConfigWithRegex = (config: Partial<IConfigWithRegex>): config is IConfigWithRegex => {
    return 'regex' in config && config.regex instanceof RegExp
  }

  return configs.find(isConfigWithRegex)?.regex.test(path) ? configs.find(isConfigWithRegex)?.config : undefined
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
    if (searchParams.size) path += `?${searchParams.toString()}`
    return NextResponse.redirect(new URL(path, variantUrl.base || request.nextUrl.origin))
  } else if (controlUrl) {
    let controlHref = (controlUrl?.base || request.nextUrl.origin) + controlUrl.path
    controlUrl?.urlParams?.forEach((param) => {
      controlHref += `/${request.nextUrl.searchParams.get(param)}`
      searchParams.delete(param)
    })
    if (searchParams.size) controlHref += `?${searchParams.toString()}`
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
      console.log('sendEventUnsafe Response:', res)
      if (res !== '1') throw `An unepxected error occured. Response was ${res}`
    })
    .catch((error) => {
      console.error('Error sending mixpanel event', error)
    })
}

export const splitTestConfigs: TSplitTestConfigs = {
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
    /** These parameters will be pulled from searchParams and converted to urlParams in the order that they appear in the config */
    urlParams?: string[]
  }
  variantUrl: {
    path: string
    base?: string
  }
  variantRatio: number
  forceControlOnNewUser: boolean
}
