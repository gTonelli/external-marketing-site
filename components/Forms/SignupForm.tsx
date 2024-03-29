'use client'
/**
 * An alternative to <RegistrationForm />
 * Uses an updated endpoint, has automatic client tag creation.
 */

// core
import React, { useState } from 'react'
// components
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { IDefaultProps } from '..'
// libraries
import { Form, Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
import cx from 'classnames'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
import Mixpanel from '@/modules/Mixpanel'
// utils

interface ISignupFormProps extends IDefaultProps {
  /** String or function that retuirns a string for generating client tags */
  userTags?: string[]
  /** ActiveCampaign listIds to register the user for */
  listIds?: string | string[] | number | number[]
  /** Button text */
  submitButtonLabel?: string
  /** Success message */
  successMessage?: string
}

export const SignupForm = ({
  className,
  userTags,
  submitButtonLabel,
  listIds,
  successMessage = 'Thank you for your submission!',
}: ISignupFormProps) => {
  // =========== State =========
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  // =========== Hooks =========
  const FBQ = useFacebookPixel()

  const onSubmit = (values: ISignupFormSchema, formikHelpers: FormikHelpers<ISignupFormSchema>) => {
    const { email, firstName } = values

    // Creating an identity of user in mixpanel
    Mixpanel.setUser(email)

    // FBQ?.trackLead({
    //   email: email,
    // })

    const requestBody = {
      userTags,
      firstName,
      email,
      listIds,
    }

    fetch(
      process.env.NEXT_PUBLIC_STRAPI_URL + '/api/register' ||
        'https://strapi.personaldevelopmentschool.com/api/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) throw res?.message || 'An unexpected error occured'
        else setSubmitted(true)
      })
      .catch((error) => {
        console.error(error)
        formikHelpers.setSubmitting(false)
        setErrorMessage(typeof error === 'string' ? error : 'An unexpected error occured')
      })
  }

  if (submitted) {
    return <p className="font-bold text-success text-lg">{successMessage}</p>
  }

  return (
    <Formik
      initialValues={signupFormInitialValues}
      validateOnBlur={false}
      validationSchema={SignupFormValidationSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className={cx('w-full flex-col', className)}>
          <div className="flex gap-x-4 mb-4 max-w-2xl">
            <Input.Field
              autocomplete="given-name"
              className="!m-0 w-full"
              label="Your First name"
              name="firstName"
            />

            <Input.Field
              autocomplete="email"
              className="!m-0 w-full"
              label="Your Email"
              name="email"
            />
          </div>

          <Button.Submit disabled={isSubmitting} label={submitButtonLabel || 'SUBMIT'} />

          {errorMessage && <p className="mt-2 font-bold text-danger">{errorMessage}</p>}
        </Form>
      )}
    </Formik>
  )
}

const SignupFormValidationSchema = yup
  .object()
  .shape({
    firstName: yup.string().defined().ensure().required(' First name required'),
    email: yup
      .string()
      .defined()
      .ensure()
      .required('Email required')
      .email('Valid email required.'),
  })
  .defined()

export interface ISignupFormSchema extends yup.InferType<typeof SignupFormValidationSchema> {}

const signupFormInitialValues: ISignupFormSchema = SignupFormValidationSchema.cast({})
