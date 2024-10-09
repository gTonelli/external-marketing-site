'use client'

/* Collection of all keys used to store data in localStorage */
export type TStorageKeys =
  | 'lastUserEmail'
  | 'userFirstName'
  | 'userFullName'
  | 'canViewResults'
  | 'userTag'
  | 'prod-2320-checkout-test'
  | 'gm-845-checkout-test'
  | 'gm-1079-age-funnel-split'
  | `gm-976-platform-split-${string}`
  | 'gm-1152-fa-video-control-vs-control'
  | 'gm-1172-iat-cta-split'
  | `gm-1164-pdf-headline-split-${string}`
  | 'gm-1215-mel-robbins-video'
  | 'gam_user_tracking'

export const Storage = {
  get: (key: TStorageKeys): any => {
    if (typeof window === 'undefined') return null
    const value = window.localStorage.getItem(key)

    try {
      return JSON.parse(value || 'null')
    } catch {
      return value
    }
  },

  set: (key: TStorageKeys, value: any) => {
    if (typeof window === 'undefined') return null
    window.localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
  },

  remove: (key: TStorageKeys) => {
    if (typeof window === 'undefined') return null
    return window.localStorage.removeItem(key)
  },

  clear: () => {
    if (typeof window === 'undefined') return null
    return window.localStorage.clear()
  },
}
