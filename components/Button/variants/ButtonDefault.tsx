'use client'

// core
import Mixpanel from '@/modules/Mixpanel'
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'

export interface IButtonDefaultProps extends IDefaultProps {
  disabled?: boolean
  label: string
  link?: string
  onClick?: () => void

  /**
   * Theme representing various TW classes
   * @import bg-primary bg-black border-primary border-black
   */
  theme?: 'primary' | 'secondary' | 'black'
  type?: 'button' | 'reset' | 'submit'
}

export const ButtonDefault = ({
  className,
  disabled,
  label,
  link,
  onClick,
  theme = 'primary',
  type,
}: IButtonDefaultProps) => {
  const _onClick = () => {
    onClick?.()
    Mixpanel.track.ButtonClicked({ button_label: label })
  }

  return (
    <a href={link}>
      <button
        className={cx(
          'border-2 rounded-full tracking-10 px-4 py-2 hover:text-white hover:shadow-md transition-colors',
          theme === 'secondary'
            ? 'text-primary bg-white border-primary hover:!bg-primary'
            : `bg-${theme} border-${theme} text-white hover:bg-opacity-50`,
          disabled && 'bg-opacity-25 border-opacity-25',
          className
        )}
        disabled={disabled}
        type={type}
        onClick={_onClick}>
        {label}
      </button>
    </a>
  )
}
