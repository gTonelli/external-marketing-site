'use client'

// components
import { Button } from '@/components/Button/Button'
// modules
import { useGamAnalytics } from '@/modules/GAM'
// utils
import { externalRoutes } from '@/utils/constants'

export const IATCalendlyBookingButton = ({ label = 'BOOK NOW' }) => {
  const { getUserData } = useGamAnalytics()

  const onBookNow = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const url = new URL(externalRoutes.calendlyMelanie)

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
  }

  return <Button className="mb-8" label={label} onClick={onBookNow} />
}
