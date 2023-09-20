'use client'

// core
import React from 'react'
// components
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'

interface IProgressBarProps extends IDefaultProps {
  /** Classnames for the filled portion of the bar */
  classNameFill?: string
  /** Color of the filled portion of the bar */
  color: 'primary' | 'pink' | 'teal' | 'orange' | 'blue' | 'white'
  /**
   * Whether to render a visible border
   * @default false
   */
  noBorder?: boolean
  /**
   * Fill value/percentage of the bar
   * @default 0
   */
  percentage: number
  /**
   * Whether to show the percentage value or not at the end of the bar
   * @default false
   */
  showPercentage?: boolean
}

/** Renders a progressbar with specified color, percentage value and round edges */
export const ProgressBar = ({
  className,
  classNameFill,
  color,
  noBorder,
  percentage = 0,
  showPercentage = false,
}: IProgressBarProps) => {
  const fillColor = `bg-${color}`

  return (
    //   w-full
    <div
      className={cx('relative rounded-3xl', !noBorder && 'border border-black-light', className)}>
      {/* PROGRESS BAR FILL */}
      <div
        className={cx('max-w-full h-2 rounded-3xl', fillColor, classNameFill)}
        style={{ width: `${percentage}%` }}
      />

      {/* PERCENTAGE VALUE */}
      {showPercentage && (
        <span className="absolute top-0 right-2 bottom-0 font-effra text-xs text-right">
          {percentage}%
        </span>
      )}
    </div>
  )
}
