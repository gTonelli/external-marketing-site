'use client'

// core
import React from 'react'
import { useSearchParams } from 'next/navigation'
// components
import { Button } from '../Button/Button'
import { IUserInfo } from '../AttachmentQuiz/AttachmentQuiz'
import { Input } from '../Input/Input'
import { Text } from '../Text/Text'
import { IDefaultProps } from '..'
// libraries
import { MD5 } from 'crypto-js'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import cx from 'classnames'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
import { useGamAnalytics } from '@/modules/GAM'
import Mixpanel from '@/modules/Mixpanel'
// utils
import { TStyle } from '@/utils/types'
import { Regexes } from '@/utils/constants'

interface IRegistrationFormProps extends IDefaultProps {
  /** Function to run after form submission */
  onAfterSubmit?(): void
  /** String or function that retuirns a string for generating client tags */
  clientTag?: string
  /** New Quiz Variant? */
  newQuiz?: boolean
  /** Additional user info used by attachment quiz */
  userInfo?: IUserInfo
  /** Optional user style information to append to users profile */
  userStyle?: TStyle
  /** Split test on button text */
  submitButtonLabel?: string
}

export const RegistrationForm = ({
  onAfterSubmit,
  className,
  clientTag,
  newQuiz = false,
  userInfo,
  userStyle,
  submitButtonLabel,
}: IRegistrationFormProps) => {
  // =========== Hooks =========
  const searchParams = useSearchParams()
  const FBQ = useFacebookPixel()
  const { setUserData } = useGamAnalytics()

  const onSubmit = (values: IQuizRegistrationFormSchema) => {
    const { email, firstName, lastName } = values
    setUserData({ email, firstName, userStyle })

    const utmDataRaw: IUtmData = {}
    searchParams.forEach((value, key) => {
      utmDataRaw[key] = value
    })

    Mixpanel.setUser(values.email)
    Mixpanel.setPeopleOnce({ ...userInfo })
    Mixpanel.setPeople({ 'Attachment Style': userStyle })

    const insertId = MD5(Date.now() + JSON.stringify(values)).toString()
    Mixpanel.track.SignUp({
      distinct_id: values.email,
      $insert_id: insertId,
    })

    FBQ?.trackLead({
      email,
    })

    const requestBody = {
      tags: [clientTag],
      firstName,
      lastName,
      email,
      listIds: [2],
      insertId,
    }

    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }).catch((error) => {
      console.error(error)
    })

    onAfterSubmit?.()
  }

  return (
    <Formik
      initialValues={registrationFormInitialValues}
      validateOnBlur={false}
      validationSchema={RegistrationFormValidationSchema}
      onSubmit={onSubmit}>
      {({ setFieldValue, isSubmitting, errors, submitCount }) => (
        <Form
          className={cx(
            'w-full max-w-xl flex-col justify-center mx-auto xxs:!px-3 xs:!px-4 md:pt-8',
            className
          )}>
          <div className="md:px-4">
            {newQuiz ? (
              <div>
                <Text className="mb-2" content="First Name:" />

                <Input.Field
                  className="w-full rounded-lg mb-4"
                  name="firstName"
                  placeholder="Your First Name Here..."
                  type="text"
                />

                <Text className="mb-2" content="Last Name:" />

                <Input.Field
                  className="w-full rounded-lg mb-4"
                  name="lastName"
                  placeholder="Your Last Name Here..."
                  type="text"
                />

                <Text className="mb-2" content="Email Address:" />

                <Input.Field
                  className="w-full rounded-lg mb-4"
                  name="email"
                  placeholder="Your Email Address Here..."
                  type="email"
                />
              </div>
            ) : (
              <div>
                <Input.Field label="First name" name="firstName" />

                <Input.Field label="Last name" name="lastName" />

                <Input.Field label="Email Address" name="email" />
              </div>
            )}
          </div>

          {newQuiz ? (
            <div className="flex items-start px-4">
              <Text.Paragraph content="By Clicking Submit, I Agree To Receive My Attachment Style Report And Other Email Communication. If You Haven't Received Your Report, Please Be Sure To Check Your Spam/Junk Folder." />
            </div>
          ) : (
            <Text.Paragraph
              className="text-left py-2 px-4 md:text-center"
              content="By clicking Submit, I agree to receive my attachment style report and other email communication. If you haven't received your report, please be sure to check your Spam/Junk folder."
            />
          )}

          <div className="flex justify-center">
            <Button.Submit
              className="font-bold text-base self-start text-center rounded-full bg-primary-old tracking-widest mt-4 py-4 px-12 lg:text-xl"
              disabled={isSubmitting}
              label={submitButtonLabel || 'SUBMIT'}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

const RegistrationFormValidationSchema = yup
  .object()
  .shape({
    firstName: yup.string().defined().ensure().required('First name required'),
    lastName: yup.string().defined().ensure().required('Last name required'),
    email: yup
      .string()
      .defined()
      .ensure()
      .matches(Regexes.email, 'Please enter a valid email')
      .required('Email required'),
  })
  .defined()

export interface IQuizRegistrationFormSchema
  extends yup.InferType<typeof RegistrationFormValidationSchema> {}

const registrationFormInitialValues: IQuizRegistrationFormSchema =
  RegistrationFormValidationSchema.cast({})

interface IUtmData {
  [key: string]: string
}
