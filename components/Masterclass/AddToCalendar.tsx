'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Storage } from '@/modules/Storage'
import { TMasterclassTitle } from '@/app/(custom-layouts)/(no-nav)/masterclass/config'
import { Loader } from '../Loader'
import dayjs from 'dayjs'

export const AddToCalendar = ({ masterclassTitle }: { masterclassTitle: TMasterclassTitle }) => {
  const [loading, setLoading] = useState(true)
  const [bookedTime, setBookedTime] = useState<dayjs.Dayjs | null>(null)

  useEffect(() => {
    if (Storage.get(`${masterclassTitle}-mcst`) !== null) {
      setBookedTime(dayjs(Storage.get(`${masterclassTitle}-mcst`)))
    }
    setLoading(false)
  }, [])

  if (loading) return <Loader />

  if (!bookedTime) return null

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.addevent.com/libs/atc/themes/fff-theme-1/theme.css"
        type="text/css"
        media="all"
      />
      <Script type="text/javascript" src="https://cdn.addevent.com/libs/atc/1.6.1/atc.min.js" />

      <div title="Add to Calendar" className="addeventatc !w-fit" data-styling="none">
        Add to Calendar
        <span className="client">cid_2a25e75e8e2541af9d40b0b1ff0292cd</span>
        <span className="title">
          Uncover Your Needs & Find True Connection Masterclass by Thais Gibson
        </span>
        <span className="description">
          Watch the free masterclass and learn how to identify your emotional needs, improve
          communication, and create deeper, more fulfilling relationships with Thais Gibson.
        </span>
        <span className="start">{bookedTime.format('YYYY-MM-DD HH:mm:ss')}</span>
        <span className="end">{bookedTime.add(1, 'hour').format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
    </>
  )
}
