import { IPodcast } from '@/app/(custom-layouts)/(no-nav)/podcast/page'
import { IStrapiFetchProps, IStrapiResponse } from './types'

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

export const fetchAllPodcasts = (
  podcasts: IStrapiResponse<IPodcast>[] = [],
  page = 1
): Promise<IStrapiResponse<IPodcast>[]> => {
  return fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/podcasts?fields[0]=publishedAt&fields[1]=updatedAt&fields[2]=urlSlug&pagination[pageSize]=100&pagination[page]=${page}`,
    { next: { tags: ['podcasts'], revalidate: 86400 } }
  )
    .then((response) => response.json())
    .then((res: IStrapiFetchProps<IStrapiResponse<IPodcast>[]>) => {
      if (res.meta.pagination.pageSize * res.meta.pagination.page < res.meta.pagination.total) {
        return fetchAllPodcasts(podcasts.concat(res.data), res.meta.pagination.page + 1)
      }
      return podcasts.concat(res.data)
    })
}
