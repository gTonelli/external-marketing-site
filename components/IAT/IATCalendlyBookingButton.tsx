'use client'

// core
import { useContext } from 'react'
// components
import { Button } from '@/components/Button/Button'
// modules
import { useGamAnalytics } from '@/modules/GAM'
import Mixpanel from '@/modules/Mixpanel'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { PageContext } from '@/utils/contexts'

export const IATCalendlyBookingButton = ({ label = 'BOOK NOW' }) => {
  const { getUserData } = useGamAnalytics()
  const { page_name } = useContext(PageContext)

  const onBookNow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const url = new URL(EExternalRoutes.CALENDLY_MELANIE)

    const { gamLastTouchData } = getUserData()

    const utmParams = {
      utm_campaign: gamLastTouchData?.utm_campaign_last,
      utm_medium: gamLastTouchData?.utm_medium_last,
      utm_source: gamLastTouchData?.utm_source_last,
      utm_content: gamLastTouchData?.utm_content_last,
      utm_term: gamLastTouchData?.utm_term_last,
      wicked_source: gamLastTouchData?.wicked_source_last,
      wicked_id: gamLastTouchData?.wicked_id_last,
    }

    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) {
        url.searchParams.append(key, value)
      }
    })

    window.location.assign(url.toString())

    Mixpanel.track.ButtonClicked({
      button_label: event.currentTarget.innerText,
      page_name: page_name,
    })
  }

  return <Button className="trial-btn mb-16" label={label} onClick={onBookNow} />
}
