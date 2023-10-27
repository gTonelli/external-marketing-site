'use client'

// core
import React from 'react'
import { useSearchParams } from 'next/navigation'
// components
import { Button } from './Button/Button'
import { Captcha } from './Captcha'
import { IUserInfo } from './AttachmentQuiz/AttachmentQuiz'
import { Input } from './Input/Input'
// libraries
import { MD5 } from 'crypto-js'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
import { useGamAnalytics } from '@/modules/GAM'
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
// utils
import { TStyle } from '@/utils/types'
import { Text } from './Text/Text'

interface IRegistrationFormProps {
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
  clientTag,
  newQuiz = false,
  userInfo,
  userStyle,
  submitButtonLabel,
}: IRegistrationFormProps) => {
  // =========== Hooks =========
  const searchParams = useSearchParams()
  const FBQ = useFacebookPixel()
  const gamUserTracking = useGamAnalytics()

  const onSubmit = (values: IQuizRegistrationFormSchema) => {
    const { email, firstName, lastName, captcha } = values

    // Creating an identity of user in mixpanel
    Mixpanel.setUser(email)
    Storage.set('userFirstName', firstName)

    // Setting up the first touch of the user
    const gamFirstTouchData = {
      utm_campaign_first: gamUserTracking?.utm_campaign_first,
      utm_medium_first: gamUserTracking?.utm_medium_first,
      utm_source_first: gamUserTracking?.utm_source_first,
      utm_content_first: gamUserTracking?.utm_content_first,
      utm_term_first: gamUserTracking?.utm_term_first,
      wicked_source_first: gamUserTracking?.wickedsource_first,
      wicked_id_first: gamUserTracking?.wickedid_first,
    }

    // Setting up the last touch of the user
    const gamLastTouchData = {
      utm_campaign_last: gamUserTracking?.utm_campaign_last,
      utm_medium_last: gamUserTracking?.utm_medium_last,
      utm_source_last: gamUserTracking?.utm_source_last,
      utm_content_last: gamUserTracking?.utm_content_last,
      utm_term_last: gamUserTracking?.utm_term_last,
      wicked_source_last: gamUserTracking?.wickedsource_last,
      wicked_id_last: gamUserTracking?.wickedid_last,
    }

    Mixpanel.setPeople(gamLastTouchData)
    Mixpanel.setPeopleOnce(gamFirstTouchData)
    if (userStyle) Mixpanel.setPeople({ 'Attachment Style': userStyle })

    const utmDataRaw: IUtmData = {}
    searchParams.forEach((value, key) => {
      utmDataRaw[key] = value
    })

    // De-duplicate the signup event. 36 byte limit
    const signup_insert_id = MD5(Date.now() + JSON.stringify(values)).toString()
    Mixpanel.track.SignUp({
      distinct_id: values.email,
      $insert_id: signup_insert_id,
    })

    FBQ?.trackLead({
      email: email,
    })

    const requestBody = {
      client_tag: clientTag,
      first_name: firstName,
      last_name: lastName,
      email: email,
      'g-recaptcha-response': captcha,
      userinfo: userInfo,
      userStyle,
      gamFirstTouchData,
      gamLastTouchData,
      utmDataRaw,
      signup_insert_id,
    }

    console.log('Submitting')

    fetch(
      process.env.NEXT_PUBLIC_AC_LEAD_URL ||
        'https://pds-marketing-api.herokuapp.com/api/post/contact',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    ).catch((error) => {
      console.error(error)
    })

    onAfterSubmit?.()
  }

  return (
    <Formik
      initialValues={quizRegistrationFormInitialValues}
      validateOnBlur={false}
      validationSchema={QuizRegistrationFormValidationSchema}
      onSubmit={onSubmit}>
      {({ setFieldValue, isSubmitting }) => (
        <Form className="w-full max-w-xl flex-col justify-center px-2 mx-auto xxs:!px-3 xs:!px-4 md:pt-8">
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
          <div className="flex justify-center py-2">
            <Captcha
              className="w-min"
              onError={() => setFieldValue('captcha', false)}
              onSuccess={(val) => {
                setFieldValue('captcha', val)
              }}
            />
          </div>

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

const QuizRegistrationFormValidationSchema = yup
  .object()
  .shape({
    firstName: yup.string().defined().ensure().required(' First name required'),
    lastName: yup.string().defined().ensure().required('Last name required'),
    email: yup
      .string()
      .defined()
      .ensure()
      .required('Email required')
      .email('Valid email required.'),
    captcha: yup.string().defined().ensure().required(),
  })
  .defined()

export interface IQuizRegistrationFormSchema
  extends yup.InferType<typeof QuizRegistrationFormValidationSchema> {}

const quizRegistrationFormInitialValues: IQuizRegistrationFormSchema =
  QuizRegistrationFormValidationSchema.cast({})

interface IUtmData {
  [key: string]: string
}
