'use client'

/* Collection of all keys used to store data in localStorage */
export type TStorageKeys =
  | 'lastUserEmail'
  | 'userFirstName'
  | 'prod-2320-checkout-test'
  | 'gm-845-checkout-test'
  | 'seo-90-organic-quiz-test'
  | 'gm-896-fa-retest'
  | 'gm-866-headline-test-da'
  | 'gm-866-headline-test-sa'

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
