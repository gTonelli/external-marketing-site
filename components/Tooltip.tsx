// core
import React from 'react'
// components
import { IDefaultWrapperProps } from '.'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface ITooltipProps extends IDefaultWrapperProps {
  /**
   * Sets the background color of the tooltip and contrasting text color
   *
   * @example
   * 'white' // white bg with gray text
   * 'danger' // red bg with white text - used for displaying errors for inputs
   * 'success' // green bg with white text
   * 'warning' // yellow bg with white text
   *
   * @default 'white'
   */
  color?: 'white' | 'danger' | 'success' | 'warning'
  /**
   * Icon to display left of the `title`
   */
  icon?: IconProp
  /**
   * Text to display in the body of the tooltip
   */
  message: React.ReactNode
  /**
   * to which side will be tooltip displayed
   * @default left
   */
  side?: 'right' | 'left'
  /**
   * Text to display as a header of the tooltip
   */
  title?: React.ReactNode
}

export const Tooltip = ({
  children,
  className,
  color = 'white',
  icon,
  message,
  side = 'left',
  title,
}: ITooltipProps) => {
  /**
   * Color of the `message` text prop
   * @returns Contrasting text color based on the background color
   */
  const colorText = () => {
    // @import bg-danger bg-success bg-warning
    switch (color) {
      case 'danger':
      case 'success':
      case 'warning':
        return 'text-white'

      case 'white':
      default:
        return 'text-txt-light-2'
    }
  }

  const twCSS = (): string => {
    const defaultClasses = `absolute top-0 transform transition origin-top-right scale-0 group-hover:scale-100 w-56 rounded-md shadow-lg bg-${color} ring-1 ring-black ring-opacity-5 focus:outline-none z-10`
    const sideClass = side === 'left' ? 'right-1' : 'left-1'

    return cx(defaultClasses, sideClass)
  }

  return (
    <div
      className={cx(
        'group cursor-default focus:outline-none',
        className,
        !className?.includes('absolute') && 'relative'
      )}>
      {children}

      <div className={twCSS()}>
        <div className={`space-y-2 block px-5 py-4 text-left text-xs ${colorText()}`}>
          {/* TITLE */}
          {title && (
            <div className="text-txt-light">
              {/* TITLE ICON */}
              {icon && <FontAwesomeIcon className="mr-3" icon={icon} size="lg" type="regular" />}

              {/* TITLE TEXT */}
              {title}
            </div>
          )}

          {/* BODY MESSAGE */}
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}
