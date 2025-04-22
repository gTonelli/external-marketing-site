'use client'
// core
import { useEffect, useState } from 'react'
import Link from 'next/link'
// components
import { faRoadBarrier } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// libraries
import dayjs from 'dayjs'

export const DowntimeBanner = () => {
  const [downtime, setDowntime] = useState('-- to --')

  useEffect(() => {
    const tz = new Date().toLocaleString('en', { timeZoneName: 'short' }).split(' ').pop()
    setDowntime(
      `${dayjs('2025-04-24Z02:00:00-04:00').format('h:mm A')} ${tz} to ${dayjs(
        '2025-04-24Z04:00:00-04:00'
      ).format('h:mm A')} ${tz}`
    )
  }, [])

  return (
    <div className="w-full flex items-center justify-center bg-primary text-white  px-2 py-4">
      <FontAwesomeIcon className="!hidden mx-2 lg:!inline-block" icon={faRoadBarrier} />

      <p className="!mb-0">
        Scheduled Maintenance: April 24, {downtime}. Some features will be temporarily unavailable.{' '}
        <Link
          className="underline hover:text-white"
          href="https://support.personaldevelopmentschool.com/en/articles/11095885-scheduled-downtime-april-24-2025-what-you-need-to-know"
          target="_blank">
          <strong>Learn more</strong>
        </Link>
      </p>

      <FontAwesomeIcon className="!hidden mx-2 lg:!inline-block" icon={faRoadBarrier} />
    </div>
  )
}
