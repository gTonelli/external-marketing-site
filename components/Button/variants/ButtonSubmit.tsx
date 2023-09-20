'use client'

// core
import React from 'react'
// components
import { ButtonDefault, IButtonDefaultProps } from './ButtonDefault'
// libraries
import { useFormikContext } from 'formik'

interface IButtonSubmitProps extends IButtonDefaultProps {}

/**
 * Submit variant of `ButtonDefault`
 *
 * @warning
 * THE BUTTON HAS TO BE PLACED WITHIN `<Formik>`
 *
 * It uses custom `useFormikContext()` hook which looks for parent Formik
 * and throws an error if it doesn't find one
 */
export const ButtonSubmit = ({ label, ...otherProps }: IButtonSubmitProps) => {
  const { errors, isSubmitting, isValid, submitForm, submitCount } = useFormikContext()
  return (
    <ButtonDefault
      // color="primary"
      // isDisabled={submitCount > 0 && !isValid}
      // isLoading={isSubmitting || isLoading}
      //   icon="save"
      label={label}
      type="submit"
      onClick={submitForm}
      {...otherProps}
    />
  )
}
