'use client'

// core
import { useCallback } from 'react'
// components
import { IInputDefaultProps } from './InputDefault'
// libraries
import cx from 'classnames'

interface IInputCheckboxProps extends Omit<IInputDefaultProps<boolean>, 'onChange'> {
  onChange?(value: boolean): void
}

export const InputCheckbox = ({
  className,
  classNameInput,
  classNameLabel,
  isDisabled,
  id,
  label,
  name,
  value,
  onChange,
}: IInputCheckboxProps) => {
  const _onChange = useCallback(() => {
    if (!isDisabled && onChange) {
      onChange(!value)
    }
  }, [isDisabled, onChange, value])

  return (
    <div className={cx('flex items-center flex-nowrap space-x-3', className)} onClick={_onChange}>
      <input
        checked={!!value}
        className={cx(
          'form-checkbox icon w-5 h-5 text-primary rounded border border-txt-light focus:outline-none',
          isDisabled && 'cursor-not-allowed',
          classNameInput
        )}
        disabled={isDisabled}
        id={id?.toString() || name}
        name={name}
        type="checkbox"
        onChange={() => {
          //
        }}
      />

      {/* LABEL */}
      <span className={cx('text-md font-medium whitespace-nowrap', classNameLabel)}>{label}</span>
    </div>
  )
}
