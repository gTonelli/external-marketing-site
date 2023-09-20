'use client'

// core
import React, { ReactNode } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Icon, TIconName } from '@/components/Icon'
import { Tooltip, ITooltipProps } from '@/components/Tooltip'
// import { getTranslation } from 'components/Translation/Translation'
// libraries
import cx from 'classnames'

type TInput =
  | 'checkbox'
  | 'color'
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'radio'
  | 'search'
  // | 'range'
  | 'tel'
  | 'text'

export interface IInputDefaultProps<T = string> extends IDefaultProps {
  /**
   * Color scheme of the input, change them based on the background the Input is on
   *
   * @example
   * 'gray'  // default input color
   * 'white' // white input bg
   * 'black' // black input bg, used in create/edit forms
   * 'table' // custom color of input used in table edit rows
   *
   * @default 'gray'
   */
  colorScheme?: 'gray' | 'white' | 'black'
  /**
   * CSS classes applied to error icon
   */
  classNameError?: string
  /** CSS classes for the icon */
  classNameIcon?: string
  /**
   * CSS classes applied directly to the `<input />`
   *
   * The original `className` is applied to the wrapper `<div>`
   */
  classNameInput?: string
  /** CSS classes applied directly to the `<label />` */
  classNameLabel?: string
  /**
   * CSS classes applied to tooltip icon
   */
  classNameTooltip?: string
  /**
   * the custom component, that goes between error indicator and tooltip
   * NOTE: needed for Input.Number component's arrows
   */
  endRender?: ReactNode
  /**
   * Validation error message
   *
   * If specified, the input's border and text will turn red
   * and an error icon with the error message will be shown
   *
   * If `Input.Field` is used, errors are automatically hooked to the `Formik`'s form via `useFormikContext`
   *
   * @default undefined
   */
  error?: string
  /**
   * Name of the icon for inside of the input
   */
  icon?: TIconName
  /**
   * ID of the input
   */
  id?: string
  /**
   * Default input properties and methods
   */
  inputAttributes?: React.InputHTMLAttributes<HTMLInputElement>
  /**
   * Wheather the input is disabled
   *
   * @default false
   */
  isDisabled?: boolean
  /**
   * Whether to autofocus the input
   */
  isFocused?: boolean
  /**
   * Whether to autoffocus the input and highlight it - plays an animation
   */
  isFocusedHighlight?: boolean
  /**
   * Label of the input, displays text above the input's value
   *
   * @default ''
   */
  label?: string
  /**
   * Input's name - if name is provided, it is expected that input is in `<Formik>`
   *
   * If `Input.Field` is used, this is the property from `formik.values` the input is linked to
   *
   * @default ''
   */
  name?: string
  /**
   *
   */
  noStyles?: boolean
  /**
   * Placeholder text displaying within input when it has no value
   *
   * @default ''
   */
  placeholder?: string
  /**
   * Whether is input only readable
   *
   * !!! USING OF THIS PROP IS FORBIDDEN !!!
   * Used only in one occasion - Input.Date
   *
   * @default 'false'
   */
  readOnly?: boolean
  /**
   * Props for `Tooltip` component (e.g.: `title`, `message` and `color`)
   *
   * @default undefined
   */
  tooltip?: Omit<ITooltipProps, 'children'>
  /**
   * For use with regular error tooltips. Which side the message should appear on.
   */
  tooltipSide?: 'left' | 'right'
  /**
   * Type of the input
   *
   * @default 'text'
   */
  type?: TInput
  /**
   * Whether the input is within `<Formik>` and should link up to it via hooks
   */
  usesFormik?: boolean
  /**
   * The current input's value
   *
   * @default undefined
   */
  value?: T
  /**
   * Event called when input looses focus
   * Can be used for custom functionality but it's mostly utilized by validation hooks in `Input.Field`
   */
  onBlur?(event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void
  /**
   * Event called whenever the value of the input changes
   * @param value current input's value
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
  /**
   * Callback to run after click on input
   */
  onFocus?: () => void
}

export const InputDefault = <T,>({
  className,
  classNameError,
  classNameIcon,
  classNameInput,
  classNameLabel,
  classNameTooltip,
  colorScheme = 'white',
  endRender,
  error,
  icon,
  id,
  isDisabled,
  isFocused,
  isFocusedHighlight,
  label,
  name,
  noStyles = false,
  placeholder, // = getTranslation('general.label.enter_value'),
  readOnly,
  tooltip,
  tooltipSide,
  type = 'text',
  value,
  onBlur,
  onChange,
  onFocus,
}: IInputDefaultProps<T>) => {
  const input = React.createRef<HTMLInputElement | HTMLTextAreaElement>()

  const defaultBgColor = cx(
    colorScheme === 'gray' && 'bg-light shadow-center-light',
    colorScheme === 'white' && 'bg-white',
    colorScheme === 'black' && 'bg-black shadow-white-shadow'
  )
  const defaultTextColor = cx(
    colorScheme === 'gray' && 'text-txt-dark',
    colorScheme === 'white' && 'text-txt-dark',
    colorScheme === 'black' && 'text-white'
  )
  const defaultPlaceholderTextColor = cx(
    colorScheme === 'gray' && 'placeholder-gray-500',
    colorScheme === 'white' && 'placeholder-gray-500',
    colorScheme === 'black' && 'placeholder-white'
  )

  /**
   * Uses only 1 color for texts (label + placeholder)
   * Error classes have top priority, applying both default and error ones
   * caused, in some cases the error ones be overwritte by the default ones since both of them have !important
   * This ensures there's always only 1 class for color of texts
   */
  const textColors = cx(
    cx(error ? 'text-danger placeholder-danger' : [defaultTextColor, defaultPlaceholderTextColor])
  )

  const labelCSS = () =>
    cx(error ? 'text-danger' : defaultTextColor, 'absolutee top-1.5 left-3 mb-1', classNameLabel)

  const inputCSS = () =>
    cx(
      !noStyles && [
        defaultBgColor,
        textColors,
        error
          ? // pr-20
            'ring-1 ring-danger ring-inner focus:ring-danger focus:ring-inner'
          : 'focus:ring-0',
        isDisabled && 'placeholder-txt-light cursor-not-allowed',
        // label ? 'pt-6' : 'pt-2',
        tooltip ? 'pr-12' : 'group',
        readOnly && 'cursor-pointer',
        icon && 'pl-10',
      ],
      //   colorScheme === 'table' ? 'h-full' : 'h-13',
      'w-full block',
      classNameInput
    )

  return (
    // h-full
    <div className={cx('relative', isFocusedHighlight && 'animate-highlight', className)}>
      {/* LABEL */}
      {label && <p className={labelCSS()}>{label}</p>}

      <div className="w-full flex-center relative">
        {icon && (
          <Icon
            className={cx('w-5 h-5 absolute inset-0 top-3 left-0', classNameIcon)}
            name={icon}
          />
        )}

        <input
          ref={input as React.Ref<HTMLInputElement>}
          autoFocus={isFocused || isFocusedHighlight}
          // @ts-ignore
          className={inputCSS()}
          disabled={isDisabled}
          id={id}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          // style={{ minWidth: '570px' }} // #DELETE
          type={type}
          // @ts-ignore
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
        />
      </div>

      {/* ERROR INDICATOR */}
      {error && (
        <div
          className={cx(
            'p-1 absolute inset-y-0 flex items-center',
            tooltip ? 'right-12' : 'right-5',
            classNameError
          )}>
          <Tooltip className="flex" color="danger" message={error} side={tooltipSide}>
            <Icon className="text-danger" name="exclamation-circle" size="lg" />
          </Tooltip>
        </div>
      )}

      {endRender}

      {/* TOOLTIP */}
      {tooltip && (
        <div className={cx('p-1 absolute inset-y-0 flex right-5 items-center', classNameTooltip)}>
          <Tooltip className="flex" icon="question-circle" {...tooltip}>
            <Icon className="text-blue-500" name="question-circle" size="lg" type="regular" />
          </Tooltip>
        </div>
      )}
    </div>
  )
}
