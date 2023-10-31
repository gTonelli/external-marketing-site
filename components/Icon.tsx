// core
import React, { forwardRef } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Button } from './Button/Button'
// libraries
import { IconName } from '@fortawesome/fontawesome-common-types'
import cx from 'classnames'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-pro/css/all.min.css'

export type TIconName = IconName

/**
 * The style of the FontAwesome icon
 *
 * @reference https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
 */
export type TIcon = 'solid' | 'regular' | 'light' | 'duotone' | 'brands'

export type TIconSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | '2x' | '3x' | '5x' | '7x' | '10x'

export interface IIconProps extends IDefaultProps {
  /**
   * Name of the icon
   *
   * @reference https://fontawesome.com/icons?d=gallery&p=2
   */
  name: TIconName
  /**
   * Size of the icon
   *
   * @default 'md'
   * @reference https://fontawesome.com/v5.15/how-to-use/on-the-web/styling/sizing-icons
   */
  size?: TIconSize
  /**
   * The style of the FontAwesome icon
   *
   * @default 'solid'
   * @reference https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use
   */
  type?: TIcon
  /**
   * Event called when the icon is clicked
   *
   * If provided, component is wrapped with `ButtonWrapper`
   *
   * @default undefined
   */
  onClick?(e: React.MouseEvent): void
}

/**
 * Component for rendering FontAwesome icons
 */
export const Icon = forwardRef(
  (
    { className, name, size = 'md', style, type = 'solid', onClick }: IIconProps,
    ref: React.Ref<HTMLElement>
  ) => {
    const defaultClasses = `fa${type[0]} fa-${name} fa-${size}`

    return onClick ? (
      <button className={cx('clickable', className)} onClick={onClick}>
        <i ref={ref} className={defaultClasses} style={style} />
      </button>
    ) : (
      <i ref={ref} className={cx(defaultClasses, className)} style={style} />
    )
  }
)
