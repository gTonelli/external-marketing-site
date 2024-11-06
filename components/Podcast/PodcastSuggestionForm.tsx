'use client'
// core
import Link from 'next/link'
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

interface IPodcastSuggestionFormProps extends IDefaultProps {
  classNameFields?: string
  /** Form ID */
  id?: string
  /** Button text */
  submitButtonLabel?: string
  /** Success message */
  successMessage?: string
  /** onSuccess callback function */
  onSuccess?: () => void
}

export const PodcastSuggestionForm = ({
  className,
  classNameFields,
  id,
  submitButtonLabel,
  successMessage = 'Thank you for your submission!',
  onSuccess,
}: IPodcastSuggestionFormProps) => {
  // =========== State =========
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  // =========== Hooks =========
  const FBQ = useFacebookPixel()

  const onSubmitSuggestionForm = (
    values: IPodcastSuggestionFormSchema,
    formikHelpers: FormikHelpers<IPodcastSuggestionFormSchema>
  ) => {
    const { podcastFirstName, podcastEmail, podcastRecommendation, podcastSuggestion } = values
    formikHelpers.setSubmitting(true)
    Mixpanel.setUser(podcastEmail)
    FBQ?.trackLead({
      email: podcastEmail,
    })

    const requestBody = {
      firstName: podcastFirstName,
      email: podcastEmail,
      lastName: '',
      reason: podcastRecommendation,
      message: `Message: ${podcastSuggestion}`,
      to: 'info@personaldevelopmentschool.com',
      templateReferenceId: '5',
      subject: 'Podcast Page Form - Suggestion Submission',
    }

    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-us`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) throw res?.message || 'An unexpected error occured'
        else {
          Mixpanel.track.SignUp({ distinct_id: podcastEmail })
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
      initialValues={podcastSuggestionFormInitialValues}
      validateOnBlur={false}
      validationSchema={PodcastSuggestionFormValidationSchema}
      onSubmit={onSubmitSuggestionForm}>
      {({ values, errors, touched, handleChange, setFieldValue, isSubmitting }) => (
        <Form className={cx('w-full flex-col', className)} id={id}>
          <div className={cx('flex flex-col xxs:flex-row gap-x-4 mb-4', classNameFields)}>
            <Input.Field
              value={values.podcastFirstName}
              autocomplete="given-name"
              className="!mt-0 !mx-0 mb-2 xxs:!mb-0 w-full"
              label="Your Name"
              name="podcastFirstName"
            />

            <Input.Field
              value={values.podcastEmail}
              autocomplete="email"
              className="!m-0 w-full"
              label="Your Email"
              name="podcastEmail"
            />
          </div>

          <div className="mb-4">
            <select
              required
              value={values.podcastRecommendation}
              name="podcastRecommendation"
              className={`w-full rounded-lg px-4 py-2 border border-grey-border ${
                touched.podcastRecommendation && errors.podcastRecommendation && 'border-danger'
              }`}
              onChange={(e) => setFieldValue('podcastRecommendation', e.target.value.toString())}>
              <option disabled value="">
                Have an idea for our next episode? Select an option below:
              </option>
              <option value="Recommend a Podcast Guest">Recommend a Podcast Guest</option>

              <option value="Suggest a Podcast Topic">Suggest a Podcast Topic</option>

              <option value="Come on the Podcast">Come on the Podcast</option>
            </select>

            {touched.podcastRecommendation && errors.podcastRecommendation && (
              <div className="text-left text-sm text-danger">{errors.podcastRecommendation}</div>
            )}
          </div>

          <div className="mb-4">
            <textarea
              name="podcastSuggestion"
              value={values.podcastSuggestion}
              className="w-full rounded-lg px-4 py-2 border border-grey-border"
              rows={4}
              placeholder="Enter your suggestion here..."
              onChange={handleChange}
            />

            <div className="w-full grid grid-cols-2">
              <div className="col-span-1 text-left">
                {touched.podcastSuggestion && errors.podcastSuggestion && (
                  <span className="text-sm text-danger">{errors.podcastSuggestion}</span>
                )}
              </div>

              <div className="col-span-1 text-right">
                <Link className="underline" href="/podcast-guest-form">
                  Want to be a Guest?
                </Link>
              </div>
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting} label={submitButtonLabel || 'SUBMIT'} />

          {errorMessage && <p className="mt-2 font-bold text-danger">{errorMessage}</p>}
        </Form>
      )}
    </Formik>
  )
}

const PodcastSuggestionFormValidationSchema = yup
  .object()
  .shape({
    podcastFirstName: yup.string().defined().ensure().required('First name required'),
    podcastEmail: yup
      .string()
      .defined()
      .ensure()
      .matches(Regexes.email, 'Please enter a valid email')
      .required('Email required'),
    podcastRecommendation: yup.string().defined().ensure().required('Please select a value'),
    podcastSuggestion: yup.string().defined().ensure().required('Please write a message'),
  })
  .defined()

export interface IPodcastSuggestionFormSchema
  extends yup.InferType<typeof PodcastSuggestionFormValidationSchema> {}

const podcastSuggestionFormInitialValues: IPodcastSuggestionFormSchema =
  PodcastSuggestionFormValidationSchema.cast({})
