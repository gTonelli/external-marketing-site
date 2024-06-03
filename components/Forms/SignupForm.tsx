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
import { Regexes } from '@/utils/constants'

interface ISignupFormProps extends IDefaultProps {
  classNameFields?: string
  /** String or function that retuirns a string for generating client tags */
  userTags?: string[]
  /** Form ID */
  id?: string
  /** ActiveCampaign listIds to register the user for */
  listIds?: string | string[] | number | number[]
  /** Button text */
  submitButtonLabel?: string
  /** Success message */
  successMessage?: string
  /** onSuccess callback function */
  onSuccess?: () => void
}

export const SignupForm = ({
  className,
  classNameFields,
  id,
  userTags,
  submitButtonLabel,
  listIds,
  successMessage = 'Thank you for your submission!',
  onSuccess,
}: ISignupFormProps) => {
  // =========== State =========
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  // =========== Hooks =========
  const FBQ = useFacebookPixel()

  const onSubmit = (values: ISignupFormSchema, formikHelpers: FormikHelpers<ISignupFormSchema>) => {
    const { email, firstName } = values
    Mixpanel.setUser(email)
    FBQ?.trackLead({
      email: email,
    })

    const requestBody = {
      tags: userTags,
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
        else {
          Mixpanel.track.SignUp({ distinct_id: email })
          onSuccess?.()
          setSubmitted(true)
        }
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
        <Form className={cx('w-full flex-col', className)} id={id}>
          <div className={cx('flex flex-col xxs:flex-row gap-x-4 mb-4 max-w-2xl', classNameFields)}>
            <Input.Field
              autocomplete="given-name"
              className="!mt-0 !mx-0 mb-2 xxs:!mb-0 w-full"
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
      .matches(Regexes.email, 'Email must be valid'),
  })
  .defined()

export interface ISignupFormSchema extends yup.InferType<typeof SignupFormValidationSchema> {}

const signupFormInitialValues: ISignupFormSchema = SignupFormValidationSchema.cast({})
