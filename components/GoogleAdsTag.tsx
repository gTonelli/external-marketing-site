'use client'

import { useEffect } from 'react'

export const GoogleAdsTag = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []

    gtag('config', 'AW-696431615')
  })

  return null
}

export function gtag(..._: any) {
  window.dataLayer?.push(arguments)
}
