// core
import React, { MouseEvent, useCallback } from 'react'
// components
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
// utils
import { TZIndexValues } from '@/utils/types'
import { runCallback } from '@/utils/functions'

export interface IBackdropProps extends IDefaultProps {
  /**
   * Whether backdrop should be visible. There is css animation for showing/hiding backdrop.
   */
  visible: boolean
  /**
   * Tailwind's z-index value
   *
   * @default 'z-50'
   */
  zIndex?: TZIndexValues
  /**
   * Method called whenever the Backdrops area is clicked
   */
  onClick?: () => void
}

export const Backdrop = ({ visible, zIndex = 'z-50', onClick, className }: IBackdropProps) => {
  const twCSS = (): string => {
    return cx(visible && zIndex !== 'z-0' ? 'opacity-100' : 'opacity-0 hidden', zIndex)
  }

  // ==================== Events ====================
  const _onClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      event.preventDefault()
      event.stopPropagation()

      runCallback(onClick)
    },
    [onClick]
  )

  return (
    <div
      className={cx(
        twCSS(),
        'fixed inset-0 backdrop-bg transform transition-opacity duration-500',
        className
      )}
      onClick={visible ? _onClick : undefined}
    />
  )
}
