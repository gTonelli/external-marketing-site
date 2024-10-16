// core
import { useCallback } from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
import { IButtonDefaultProps, TButtonColor } from './ButtonDefault'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'
// utils
import { stopEvent } from '@/utils/functions'
import { IObject } from '@/utils/interfaces'

/**
 * Uses the same props as `ButtonDefault` with the addition of `children`
 */
interface IButtonWrapperProps extends IDefaultWrapperProps, Omit<IButtonDefaultProps, 'children'> {
  /**
   * Whether the wrapper should be style-less
   */
  noStyles?: boolean
  /**
   * Background color of the button
   * @usage Each color is used for a specific case:
   *  `primary` - action, `secondary` - ??? TBD ???, `danger` - delete, `success` - save, `warning` - edit, `grey` - close,
   * @default 'primary'
   */
  color?: TButtonColor
  /**
   * Whether the button is currently in active state
   */
  isActive?: boolean
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
}

const buttonColorClassMap: { [key in TButtonColor]: IObject<string> } = {
  primary: {
    default: 'border bg-primary text-white',
    hover: 'lg:hover:border-primary lg:hover:bg-white lg:hover:text-primary',
  },
  secondary: {
    default: 'bg-white text-black border-2 border-primary',
    hover: 'lg:hover:bg-primary lg:hover:text-white',
  },
  blue: {
    default: 'border bg-blue text-white',
    hover: 'lg:hover:border-blue lg:hover:bg-white lg:hover:text-blue',
  },
  teal: {
    default: 'border bg-teal text-white',
    hover: 'lg:hover:border-teal lg:hover:bg-white lg:hover:text-teal',
  },
  pink: {
    default: 'border bg-pink text-white',
    hover: 'lg:hover:border-pink lg:hover:bg-white lg:hover:text-pink',
  },
  orange: {
    default: 'border bg-orange text-white',
    hover: 'lg:hover:border-orange lg:hover:bg-white lg:hover:text-orange',
  },
  black: {
    default: 'border bg-black text-white',
    hover: 'lg:hover:border-black lg:hover:bg-white lg:hover:text-black',
  },
  white: {
    default: 'border border-primary bg-white text-black',
    hover: 'lg:hover:bg-primary lg:hover:text-white',
    active: 'bg-primary text-white',
  },

  // OLD
  //   secondary: { default: 'bg-secondary', hover: 'hover:bg-secondary-hover' },
  danger: { default: 'bg-danger', hover: 'lg:hover:bg-danger-hover' },
  grey: { default: 'bg-grey', hover: 'lg:hover:bg-grey-hover' },
  success: { default: 'bg-success', hover: 'lg:hover:bg-success-hover' },
  warning: { default: 'bg-warning', hover: 'lg:hover:bg-warning-hover' },
}

/**
 * Wrapper component that wraps its children in `<button>` element.
 * Uses same props as `ButtonDefault`
 */
export const ButtonWrapper = ({
  allowEventPropagation = false,
  className,
  children,
  color = 'primary',
  isActive = false,
  isDisabled = false,
  isLoading = false,
  noStyles,
  type = 'button',
  onClick,
}: IButtonWrapperProps) => {
  /**
   * Local `onClick` handler
   */
  const _onClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled || isLoading) return

      if (!allowEventPropagation) stopEvent(event)
      onClick?.(event)
    },
    [allowEventPropagation, isDisabled, isLoading, onClick]
  )

  /**
   * Concats all Tailwind classes
   * @returns string
   */
  const twCSS = (): string => {
    const defaultClasses = 'inline-flex items-center rounded-20 transition font-medium'
    const bgColor = buttonColorClassMap[color].default
    const _isClickable =
      !isLoading && !isDisabled && `clickable ${buttonColorClassMap[color].hover}`
    const _isDisabled = (isDisabled || isLoading) && 'cursor-not-allowed opacity-50'
    const _isLoading = isLoading && 'cursor-wait'
    const _isActive = (isActive && buttonColorClassMap[color].active) || ''

    return two(
      cx(
        'focus:outline-none',
        !noStyles && [
          defaultClasses,
          bgColor,
          // sizeSmall,
          // sizeMedium,
          // sizeLarge,
          _isClickable,
          _isActive,
          _isDisabled,
          _isLoading,
        ],
        className
      )
    )
  }
  return (
    <button className={twCSS()} disabled={isDisabled || isLoading} type={type} onClick={_onClick}>
      {children}
    </button>
  )
}
