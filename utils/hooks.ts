'use client'

import { useState, useEffect, MutableRefObject, useRef } from 'react'
import { TBreakpoints } from './types'
import { EWindowWidth } from './constants'
import { IViewport } from './interfaces'
import { throttle } from 'lodash'
import Mixpanel, { Pages } from '@/modules/Mixpanel'

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
  }, [scrollPercentage])

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
