'use client'

import { useState, useEffect, MutableRefObject, useRef, use } from 'react'
import { TBreakpoints, TStyle } from './types'
import {
  EExternalRoutes,
  EWindowWidth,
  StripeCheckoutPrices,
  TCheckoutPriceURLs,
} from './constants'
import { IViewport } from './interfaces'
import { result, throttle } from 'lodash'
import Mixpanel, { Pages } from '@/modules/Mixpanel'
import { Storage, TStorageKeys } from '@/modules/Storage'
import { Maybe } from 'yup'

// ==============================
//          R E S I Z E
// ==============================
/**
 * A custom hook for getting width of window intime on resize
 * @returns windowWidth as number
 * @usage hook can be used by comparing returned windowWidth with breakpoints from 'EWindowWidth'
 */
export function useWindowWidth(): IViewport {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    function onResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', onResize)

    // initial window update
    onResize()

    return () => window.removeEventListener('resize', onResize)
  }, [])

  const breakpointNames = Object.keys(EWindowWidth).filter((key) =>
    isNaN(key as any)
  ) as TBreakpoints[]

  return {
    windowWidth,
    isLargerThan: breakpointNames.reduce(
      (arr, val) => ({
        ...arr,
        [val]: windowWidth > EWindowWidth[val],
      }),
      {}
    ) as IViewport['isLargerThan'],
    isSmallerThan: breakpointNames.reduce(
      (arr, val) => ({
        ...arr,
        [val]: windowWidth < EWindowWidth[val],
      }),
      {}
    ) as IViewport['isSmallerThan'],
  }
}

// ==============================
//    S C R O L L D E P T H
// ==============================
/**
 * A custom hook for getting scroll depth of window
 * @returns scrollPercentage and element reference as number and mutablerefobject respectively
 * @usage hook can be used for monitoring the scroll depth and sending page scroll events for analysis
 */
export function useScrollPercentage(): [MutableRefObject<any>, number] {
  const scrollRef = useRef<any>(null)
  const [scrollPercentage, setScrollPercentage] = useState(NaN)

  const reportScroll = (e: { target: any }) => {
    const currPos = getScrollPercentage(e.target) // help to stop unnecessary rerenders
    setScrollPercentage(currPos)
  }

  useEffect(() => {
    const node = scrollRef.current
    const throttleScroll = throttle(reportScroll, 1000) //prevent memory leak
    if (node !== null) {
      node.addEventListener('scroll', throttleScroll, { passive: true })
      if (Number.isNaN(scrollPercentage)) {
        const currPos = getScrollPercentage(node) // help to stop unnecessary rerenders
        setScrollPercentage(currPos)
      }
    }
    return () => {
      if (node != null) {
        node.removeEventListener('scroll', throttleScroll)
      }
    }
  })

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage]
}

// =================================================
//    P A G E S C R O L L E D
// =================================================
/**
 * A custom hook for scroll depth event
 * @usage hook can be used to monitor scroll depth and send it to mixpanel.
 */
export function usePageScrolledEvent(scrollPercentage: number, pageName: Pages) {
  // ==================== state ====================
  const [firedThresholds, setFiredThresholds] = useState<number[]>([])

  useEffect(() => {
    const threshold = [25, 50, 75, 100]
    const nextThreshold = threshold.find(
      (value) => scrollPercentage >= value && !firedThresholds.includes(value)
    )
    if (nextThreshold) {
      Mixpanel.track.PageScrolled({
        page_name: pageName,
        scroll_depth: nextThreshold,
      })

      setFiredThresholds((prev) => [...prev, nextThreshold])
    }
  }, [scrollPercentage, pageName, firedThresholds])
}

function getScrollPercentage(
  element: { scrollHeight: number; clientHeight: number; scrollTop: number } | null
) {
  if (element === null) {
    return NaN
  }
  const height = element.scrollHeight - element.clientHeight
  return Math.round((element.scrollTop / height) * 100)
}

interface IUseCheckoutSplitTestProps {
  /**
   * The users attachment style, for AS specific split tests
   * @default undefined if left undefind then split test is set normally
   */
  userStyle?: TStyle
  /**
   * The URL of the control price
   * @default EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION
   */
  controlPriceUrl?:
    | EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION
    | EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION_59_DOLLAR
  /**
   * The URL of the variant price
   * @default StripeCheckoutPrices.MONTHLY_67
   */
  variantPriceUrl?: TCheckoutPriceURLs
  /**
   * Key for both localStorage and Mixpanel event's Variant Name
   * @default 'prod-2320-checkout-test'
   */
  storageKey?: TStorageKeys
  /**
   * Amount of traffic to run to variant. Should be a range from 0 - 1
   * @default 0.5
   */
  trafficRatio?: number
}

export function useCheckoutSplitTest({
  userStyle,
  controlPriceUrl = EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION,
  variantPriceUrl = StripeCheckoutPrices.MONTHLY_67,
  storageKey = 'prod-2320-checkout-test',
  trafficRatio = 0.5,
}: IUseCheckoutSplitTestProps) {
  // ============= State ===========
  const [checkoutLink, setCheckoutLink] = useState<Maybe<string>>()
  const [usingVariant, setUsingVariant] = useState<Maybe<boolean>>()

  const variantTrafficRatio =
    process.env.NEXT_PUBLIC_ENVIRONMENT_TYPE === 'production' ? trafficRatio : 0.5

  useEffect(() => {
    if (userStyle && userStyle !== 'ap') {
      setUsingVariant(false)
      return setCheckoutLink(EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION)
    }
    const checkoutVariantLock = Storage.get(storageKey)
    let useCheckoutVariant: boolean

    if (!checkoutVariantLock) {
      useCheckoutVariant =
        window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < variantTrafficRatio
      Storage.set(storageKey, useCheckoutVariant.toString())

      Mixpanel.track.ExperimentStarted({
        'Experiment name': storageKey,
        'Variant name': useCheckoutVariant ? 'Variant 1' : 'Control',
      })
    } else {
      useCheckoutVariant = checkoutVariantLock
    }

    let destination: string
    if (useCheckoutVariant) {
      destination = variantPriceUrl
    } else {
      destination = controlPriceUrl
    }
    setCheckoutLink(destination)
    setUsingVariant(useCheckoutVariant)
  }, [])

  return { checkoutLink, usingVariant }
}
