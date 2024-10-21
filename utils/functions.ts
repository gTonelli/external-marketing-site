import Mixpanel from '@/modules/Mixpanel'
import { Storage, TStorageKeys } from '@/modules/Storage'
import { Maybe } from 'yup'

/**
 * Check if property is function
 * @param func Property to check
 */
export const isFunction = (func: any) => {
  return typeof func === 'function'
}

/**
 * Run callback if it is callable
 * @param  callback Function to run if it is a function
 * @param  args Argument which we pass to callback function
 */
export const runCallback = (callback: any, ...args: any[]) => {
  return isFunction(callback) ? callback.apply(this, args) : undefined
}

export const formatPrice = (price: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  })

  return formatter.format(price)
}

export const getOfferEndDate = (releaseDate: Date, diff: number): Date => {
  const currentDate = new Date()
  while (currentDate.getTime() >= releaseDate.getTime()) {
    releaseDate.setDate(releaseDate.getDate() + diff)
  }

  return releaseDate
}

export type TSplitTestKey = `${string}-${number}-${string}` | `${string}-${number}`

export interface IGetSplitTest {
  key: TSplitTestKey
  variantRatio?: 0.2 | 0.5
  experimentName?: string
}

export const getSplitTest = ({ key, experimentName, variantRatio = 0.5 }: IGetSplitTest) => {
  if (!key) return undefined
  let isVariant: Boolean = Storage.get(key)
  if (isVariant === null) {
    isVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < variantRatio
    localStorage.setItem(key, isVariant.toString())
    Mixpanel.track.ExperimentStarted({
      'Experiment name': experimentName || key,
      'Variant name': isVariant ? 'Variant 1' : 'Control',
    })
  }
  return isVariant
}

/**
 * Stops the `propagation` and prevents `default` behaviour of a provided event
 * Executes a callback method afterwards, if provided
 * @param e any type of HTML event
 * @param callback an optional method called after the event has stopped
 * @example
 *  <div onClick={stopEvent(this.updateEntry)} />
 */
export const stopEvent = (e: React.MouseEvent | MouseEvent) => {
  e.preventDefault()
  e.stopPropagation()
}

export const getInitials = (str: string) =>
  str
    .split('')
    .filter((a) => a.match(/[A-Z]/))
    .join('')
    .toUpperCase()
