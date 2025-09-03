import { IPodcast } from '@/app/(custom-layouts)/(no-nav)/podcast/page'
import { TDict, TStyle } from './types'
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
import { PhoneNumberUtil } from 'google-libphonenumber'
import Cookies from 'universal-cookie'
import dayjs from 'dayjs'

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
  experimentName: string
  variantRatio?: 0.2 | 0.25 | 0.5
  useCookies?: boolean
  props?: TDict
}

export function getSplitTest({
  key,
  experimentName,
  props,
  useCookies = true,
  variantRatio = 0.5,
}: IGetSplitTest) {
  if (!key || !experimentName) return false
  let isVariant = false
  const cookies = new Cookies()
  const storageVar = useCookies ? cookies.get(key) : Storage.get(key)

  if (typeof storageVar === 'string' || typeof storageVar === 'boolean') {
    try {
      isVariant = typeof storageVar === 'string' ? JSON.parse(storageVar) : storageVar
      return isVariant
    } catch {
      return isVariant
    }
  }

  const randomFloat = crypto.getRandomValues(new Uint8Array(1))[0] / 255
  // exclude users from the test if true
  if (randomFloat > variantRatio * 2) {
    isVariant = false
  } else {
    isVariant = randomFloat < variantRatio
    Mixpanel.track.ExperimentStarted({
      'Experiment name': experimentName,
      'Variant name': isVariant ? 'Variant 1' : 'Control',
      ...props,
    })
  }
  useCookies
    ? cookies.set(key, isVariant, {
        domain: '.personaldevelopmentschool.com',
        maxAge: 7776000,
      })
    : Storage.set(key, isVariant)

  return isVariant
}

interface ISetSplitTest {
  key: TSplitTestKey
  useCookies?: boolean
  value: boolean
}

export function setSplitTest({ key, value, useCookies = true }: ISetSplitTest) {
  if (useCookies) {
    const cookies = new Cookies()
    cookies.set(key, value, { domain: '.personaldevelopmentschool.com' })
  } else {
    Storage.set(key, value)
  }
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

export const fetchAllPodcasts = async (
  podcasts: IPodcast[] = [],
  page = 1
): Promise<IPodcast[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?fields[0]=publishedAt&fields[1]=updatedAt&fields[2]=urlSlug&pagination[pageSize]=100&pagination[page]=${page}`,
    { next: { tags: ['podcasts'], revalidate: 86400 } }
  )
  const res = await response.json()
  if (res.meta.pagination.pageSize * res.meta.pagination.page < res.meta.pagination.total) {
    return fetchAllPodcasts(podcasts.concat(res.data), res.meta.pagination.page + 1)
  }
  return podcasts.concat(res.data)
}

const phoneUtil = PhoneNumberUtil.getInstance()

export const isPhoneValid = (phone: string) => {
  try {
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone))
  } catch (error) {
    return false
  }
}

export const getUserCountry = async () => {
  const data = Storage.get('userCountry')
  if (data && dayjs(data?.expires).isAfter(dayjs()) && data?.countryCode) {
    return Promise.resolve(data.countryCode as string)
  }

  const res = await fetch('/api/geo').then((res) => res.json())
  Storage.set(
    'userCountry',
    JSON.stringify({
      countryCode: res.countryCode,
      expires: dayjs().add(7, 'days').toISOString(),
    })
  )
  return res.countryCode as string
}

export const getAttachmentStyleText = (style: TStyle) => {
  switch (style) {
    case 'fa':
      return 'Fearful Avoidant'
    case 'ap':
      return 'Anxious Preoccupied'
    case 'da':
      return 'Dismissive Avoidant'
    case 'sa':
      return 'Securely Attached'
  }
}
