'use client'

// core
import { useEffect } from 'react'

export const GoogleAdsTag = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []

    gtag('config', 'AW-696431615')
  })

  return null
}

export function gtag(..._: any) {
  if (!window) return console.warn('function gtag() is only for use in the browser.')
  if (!window.dataLayer) return console.warn('dataLayer was not initialized properly')
  window.dataLayer.push(arguments)
}
