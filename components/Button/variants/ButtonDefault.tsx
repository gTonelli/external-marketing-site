'use client'

// core
import Mixpanel from '@/modules/Mixpanel'
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'

export type TButtonColor =
  | 'primary'
  | 'secondary'
  | 'blue'
  | 'teal'
  | 'orange'
  | 'pink'
  | 'danger'
  | 'success'
  | 'warning'
  | 'grey'
  | 'black'
  | 'white'

export interface IButtonDefaultProps extends IDefaultProps {
  /**
   * Whether to allow click event and its propagation
   *
   * @default false
   */
  allowEventPropagation?: boolean
  /**
   * Whether the button is clickable
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether the button should display a spinner and be disabled while process is being executed
   *
   * @default false
   */
  isLoading?: boolean
  disabled?: boolean
  label?: string
  link?: string
  onClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void

  /**
   * Theme representing various TW classes
   * @import bg-primary bg-black bg-orange bg-pink bg-teal border-primary border-black border-orange border-pink border-teal
   */
  theme?: 'primary' | 'secondary' | 'black' | 'orange' | 'pink' | 'teal'
  type?: 'button' | 'reset' | 'submit'
}

export const ButtonDefault = ({
  className,
  isLoading = false,
  isDisabled = false,
  disabled,
  label,
  link,
  onClick,
  theme = 'primary',
  type,
}: IButtonDefaultProps) => {
  const _onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isDisabled || isLoading) return
    onClick?.(event)
  }

  const button = (
    <button
      className={two(
        cx(
          `border-2 rounded-full tracking-10 px-4 py-2 transition-colors 
        active:shadow-md active:text-white
        lg:hover:text-white lg:hover:shadow-md`,
          theme === 'secondary'
            ? 'text-primary bg-white border-primary active:!bg-primary lg:hover:!bg-primary'
            : `bg-${theme} border-${theme} text-white active:bg-opacity-50 lg:hover:bg-opacity-50`,
          disabled
            ? 'bg-opacity-25 border-opacity-25 lg:hover:!bg-opacity-25 lg:hover:!shadow-none cursor-not-allowed'
            : 'cursor-pointer',
          className
        )
      )}
      disabled={disabled}
      type={type}
      onClick={_onClick}>
      {label}
    </button>
  )

  if (link) return <a href={link}>{button}</a>
  else return button
}
