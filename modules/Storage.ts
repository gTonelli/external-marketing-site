'use client'

/* Collection of all keys used to store data in localStorage */
export type TStorageKeys =
  | 'token'
  | 'user'
  | 'lastUserEmail'
  | 'ftTest'
  | 'userFirstName'
  | 'gm-716-pricing-test'
  | 'gm-772-copy-changes'
  | 'gm-755-headspace-split'
  | 'gm-791-page-test'
  | 'prod-2320-checkout-test'
  | 'gm-822-fa-split-test'
  | 'gm-845-checkout-test'

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
