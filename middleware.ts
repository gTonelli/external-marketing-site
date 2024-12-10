import { NextFetchEvent, NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest, context: NextFetchEvent) {
  console.time('Middleware')
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
      const randomFloat = crypto.getRandomValues(new Uint8Array(1))[0] / 255
      setSplitTestCookie = true
      if (randomFloat > variantRatio * 2) {
        showVariant = false
      } else {
        showVariant = randomFloat < variantRatio
        const insertID = Buffer.from(
          `${Date.now()}${mixpanelID.slice(0, 6)}${experimentName}`
        ).toString('base64')

        fetch(`${request.nextUrl.origin}/api/mixpanel-event`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mixpanelID,
            insertID,
            event: '$experiment_started',
            props: {
              'Experiment name': experimentName,
              'Variant name': showVariant ? 'Variant 1' : 'Control',
              page_name: pageName,
            },
          }),
        })
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
    console.timeEnd('Middleware')
    return response
  } catch (error) {
    console.timeEnd('Middleware')
    console.error(error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/quiz/results/fa'],
}

interface IConfigWithRegex {
  /** This regex will be used to match the request path and return a split test config */
  regex: RegExp
  /** The config to be returned on a successful match */
  config: TSplitTestConfig
}

const getPageData = (request: NextRequest): TSplitTestConfig | undefined => {
  const path = request.nextUrl.pathname
  const splitTestConfigs = getSplitTestConfigs(request)

  const configs: Array<IConfigWithRegex> = [
    {
      regex: /^\/quiz\/results\/fa/,
      config: splitTestConfigs.simplifiedFaTest,
    },
  ]

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

export const getSplitTestConfigs = (request?: NextRequest): TSplitTestConfigs => ({
  simplifiedFaTest: {
    cookieKey: 'gm-1299-simplified-fa-test',
    pageName: 'VSL Royal Rumble Results - fa',
    experimentName: 'GM-1299-Simplified-FA-Test-Relaunch',
    variantUrl: {
      path: '/quiz/results/fearful-avoidant',
    },
    variantRatio: 0.5,
    forceControlOnNewUser: false,
  },
})

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
  variantRatio: 0.2 | 0.5 | 0.25
  /** Should only be false if there are fallback browser events to send mixpanel data. Useful for top-of-funnel tests */
  forceControlOnNewUser: boolean
}
