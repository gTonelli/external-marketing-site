'use client'

import { useContext } from 'react'
// components
import { Button } from './Button/Button'
import { IButtonDefaultProps } from '@/components/Button/variants/ButtonDefault'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { useWindowWidth } from '@/utils/hooks'
import { PageContext } from '@/utils/contexts'

export const MHAButton = ({ label }: IButtonDefaultProps) => {
  // ==================== Hooks ====================
  const windowWidth = useWindowWidth().windowWidth
  const page_name = useContext(PageContext).page_name

  const onGoToCheckout = (event: React.MouseEvent<Element, MouseEvent>) => {
    Mixpanel.track.ButtonClicked({
      button_label: (event.target as HTMLButtonElement).innerText,
      page_name: page_name,
    })

    window.location.assign(EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL)
  }

  return (
    <Button
      className="px-4 xs:px-8 xs:text-xl"
      label={label ?? `START YOUR 14-DAY ${windowWidth < 375 ? 'TRIAL' : 'ALL-ACCESS PASS'}`}
      onClick={onGoToCheckout}
    />
  )
}
