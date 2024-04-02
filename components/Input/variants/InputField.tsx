'use client'

// core
import React from 'react'
import { Icon } from '@/components/Icon'
import { Tooltip } from '@/components/Tooltip'
// components
import { IInputDefaultProps } from './InputDefault'
import cx from 'classnames'
// libraries
import { Field, FieldProps, useFormikContext } from 'formik'
import { get } from 'lodash'

interface IInputFieldMUIProps extends IInputDefaultProps {
  className?: string
  name: string
  autocomplete?: TAutocompleteValues
}

/**
 * Field variant of `InputFieldMUI` used withing `Formik`'s forms
 *
 * @warning
 * THIS INPUT HAS TO BE PLACED WITHIN `<Formik>`
 *
 * It uses custom `useFormikContext()` hook which looks for parent Formik
 * and throws an error if it doesn't find one
 */
export const InputField = ({
  autocomplete,
  className,
  label,
  name,
  tooltip,
  tooltipSide,
  type = 'text',
}: IInputFieldMUIProps) => {
  const { errors, submitCount } = useFormikContext()
  const error = submitCount > 0 && get(errors, name)

  return (
    <Field className="rounded-xl" name={name}>
      {(fieldProps: FieldProps) => (
        <div className={cx('relative m-4 rounded-xl group text-left', className)}>
          <input
            {...fieldProps.field}
            autoComplete={autocomplete}
            className="w-full outline-none border-none focus:ring-transparent peer py-2 px-4 rounded-xl"
            placeholder=" "
            type={type}
          />

          <label
            className={`absolute left-[17px] top-px text-sm text-primary transition-all duration-300 px-1 transform -translate-y-1/2 pointer-events-none 
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-grey-secondary peer-placeholder-shown:text-lg 
                        group-focus-within:!top-px group-focus-within:!text-sm group-focus-within:!text-primary 
                        ${error && '!text-danger group-focus-within:!text-danger'}`}>
            {label}
          </label>

          {/* This fieldset+legend is used for the the border and notch transition */}
          <fieldset
            className={`inset-0 absolute border border-primary rounded-xl pointer-events-none mt-[-9px] invisible 
                        peer-placeholder-shown:visible peer-placeholder-shown:border-grey-secondary
                      group-focus-within:!border-primary group-hover:border-primary 
                      ${error && '!border-danger group-focus-within:!border-danger'}`}>
            <legend className=" ml-4 px-0 text-sm transition-all duration-300 invisible max-w-[0.001px] group-focus-within:max-w-full group-focus-within:px-1 whitespace-nowrap">
              {label}
            </legend>
          </fieldset>

          {/* This fieldset+legend always has a notch and is shown when the input is filled, instead of the other, so the notch doesnt vanish when you unfocus the field */}
          <fieldset
            className={`inset-0 absolute border border-primary rounded-xl pointer-events-none mt-[-9px] visible 
                        peer-placeholder-shown:invisible peer-placeholder-shown:border-grey-secondary
                       group-focus-within:!border-primary group-hover:border-primary 
                       ${error && '!border-danger group-focus-within:!border-danger'}`}>
            <legend className=" ml-4 text-sm invisible px-1 max-w-full whitespace-nowrap">
              {label}
            </legend>
          </fieldset>

          {/* ERROR INDICATOR */}
          {error && (
            <div
              className={cx(
                'p-1 absolute inset-y-0 flex items-center',
                tooltip ? 'right-12' : 'right-5'
              )}>
              <Tooltip
                className="flex"
                color="danger"
                message={get(errors, name)}
                side={tooltipSide}>
                <Icon className="text-danger" name="exclamation-circle" size="lg" />
              </Tooltip>
            </div>
          )}
        </div>
      )}
    </Field>
  )
}

type TAutocompleteValues =
  | 'on'
  | 'off'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level1'
  | 'address-level2'
  | 'address-level3'
  | 'address-level4'
  | 'street-address'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'name'
  | 'additional-name'
  | 'family-name'
  | 'given-name'
  | 'honoric-prefix'
  | 'honoric-suffix'
  | 'nickname'
  | 'organization-title'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'one-time-code'
  | 'organization'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'url'
  | 'email'
  | 'photo'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-extension'
  | 'impp'
