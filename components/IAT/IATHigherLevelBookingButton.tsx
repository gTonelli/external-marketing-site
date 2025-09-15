'use client'

// components
import { Button } from '@/components/Button/Button'
import { IDefaultProps } from '..'
// libraries
import cx from 'classnames'
// modules
import { useGamAnalytics } from '@/modules/GAM'
// utils
import { externalRoutes } from '@/utils/constants'

interface IATHigherLevelBookingButtonProps extends IDefaultProps {
  label?: string
}

export const IATHigherLevelBookingButton = ({
  label = 'BOOK NOW',
  className,
}: IATHigherLevelBookingButtonProps) => {
  const { getUserData } = useGamAnalytics()

  const onBookNow = (_: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const url = new URL(externalRoutes.higherLevelMelanie)

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

  return <Button className={cx('mb-8', className)} label={label} onClick={onBookNow} />
}
