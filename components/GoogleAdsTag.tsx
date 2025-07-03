'use client'

// core
import { useEffect, useRef } from 'react'

export const GoogleAdsTag = () => {
  let googleAdsConfigSet = useRef(false)

  useEffect(() => {
    if (!googleAdsConfigSet.current) {
      gtag('config', 'AW-696431615')
    }
    googleAdsConfigSet.current = true
  })

  return null
}

export function gtag(..._: any) {
  if (!window) return console.warn('function gtag() is only for use in the browser.')
  if (!window.dataLayer) return console.warn('dataLayer was not initialized properly')
  if (typeof arguments[0] === 'object' && arguments.length === 1) {
    window.dataLayer.push(arguments[0])
  } else {
    window.dataLayer.push(arguments)
  }
}

type TConversionPropsStyleKey = `attachment_style_${string}`

export type TConversionProps = {
  send_to: string
  [key: TConversionPropsStyleKey]: 'true'
}
