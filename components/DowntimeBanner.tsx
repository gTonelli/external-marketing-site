'use client'
import { faRoadBarrier } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const DowntimeBanner = () => {
  const [downtime, setDowntime] = useState('-- to --')

  useEffect(() => {
    setDowntime(
      `${dayjs('2025-04-22Z02:00:00-04:00').format('h:mm A')} to ${dayjs(
        '2025-04-22Z04:00:00-04:00'
      ).format('h:mm A')}`
    )
  }, [])

  return (
    <div className="w-full flex items-center justify-center bg-primary text-white  px-2 py-4">
      <FontAwesomeIcon className="!hidden mx-2 lg:!inline-block" icon={faRoadBarrier} />

      <p className="!mb-0">
        Scheduled Maintenance: April 22, {downtime}. Some features will be temporarily unavailable.{' '}
        <Link
          className="underline hover:text-white"
          href="https://support.personaldevelopmentschool.com/en/articles/11095885-scheduled-downtime-april-7-2025-what-you-need-to-know?_gl=1*sqy61f*_gcl_au*MTI5ODYwOTcxNC4xNzQ0OTA1MzQ4"
          target="_blank">
          Learn more
        </Link>
      </p>

      <FontAwesomeIcon className="!hidden mx-2 lg:!inline-block" icon={faRoadBarrier} />
    </div>
  )
}
