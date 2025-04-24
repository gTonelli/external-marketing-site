'use client'
/**
 * An alternative to <RegistrationForm />
 * Uses an updated endpoint, has automatic client tag creation.
 */

// core
import { useContext, useState } from 'react'
// components
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { IDefaultProps } from '..'
// libraries
import * as yup from 'yup'
import cx from 'classnames'
import { Form, Formik, FormikHelpers } from 'formik'
import { PhoneInput } from 'react-international-phone'
import { MD5 } from 'crypto-js'
// utils
import { isPhoneValid } from '@/utils/functions'
import { PageContext } from '@/utils/contexts'
// modules
import { useFunnelytics } from '@/modules/Funnelytics'
import Mixpanel from '@/modules/Mixpanel'
import { useFacebookPixel } from '@/modules/FacebookPixel'
import { useGoogleTagManager } from '@/modules/GTM'
import { useGamAnalytics } from '@/modules/GAM'
// styles
import 'react-international-phone/style.css'

interface ISignupFormProps extends IDefaultProps {
  classNameFields?: string
  /** Source page for the form */
  formSource?: string
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
  /** classname success message */
  classNameSuccessMessage?: string
  /** submit button additional mixpanel props */
  submitButtonMpProps?: { [key: string]: string }
  /** onSuccess callback function */
  onSuccess?: () => void
  /** show Phone field on the form */
  showPhoneField?: boolean
}

export const SignupForm = ({
  className,
  classNameFields,
  classNameSuccessMessage,
  formSource,
  id,
  userTags,
  submitButtonLabel,
  listIds,
  successMessage = 'Thank you for your submission!',
  showPhoneField,
  submitButtonMpProps,
  onSuccess,
}: ISignupFormProps) => {
  // =========== Context =========
  const { page_name } = useContext(PageContext)
  // =========== State =========
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  // =========== Hooks =========
  const FBQ = useFacebookPixel()
  const funnelytics = useFunnelytics()
  const tagManager = useGoogleTagManager()
  const { setUserData } = useGamAnalytics()

  const onSubmit = (values: ISignupFormSchema, formikHelpers: FormikHelpers<ISignupFormSchema>) => {
    const { email, firstName, phone } = values
    setUserData({ email, firstName })

    Mixpanel.setUser(email)
    FBQ?.trackLead({
      email: email,
    })

    if (formSource === 'IAT Ebook') {
      tagManager?.track({
        event: 'iat_form_tracking',
        eventCategory: 'IAT Ebook Form',
        eventAction: 'Form',
        eventLabel: 'Submit',
      })

      funnelytics?.track('Form Tracking', {
        pageName: 'IAT Ebook',
      })
    } else if (formSource === 'IAT Webinar') {
      funnelytics?.track('Form Tracking', {
        pageName: 'IAT Webinar',
      })
    } else {
      funnelytics?.track('Form Tracking', {
        pageName: page_name,
      })
    }

    const insertId = MD5(Date.now() + JSON.stringify(values)).toString()

    const requestBody = {
      tags: userTags,
      firstName,
      email,
      phone,
      listIds,
      insertId,
    }

    // TODO change back to production
    fetch('https://staging.strapi.personaldevelopmentschool.com/api/register', {
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
          Mixpanel.track.SignUp({ distinct_id: email, $insert_id: insertId })
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
    return (
      <p className={cx('font-bold text-success text-lg', classNameSuccessMessage)}>
        {successMessage}
      </p>
    )
  }

  return (
    <Formik
      initialValues={signupFormInitialValues}
      validateOnBlur={false}
      validationSchema={SignupFormValidationSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting, setFieldValue, values, touched, errors }) => (
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

          {showPhoneField && (
            <>
              <PhoneInput
                disableDialCodePrefill
                value={values.phone}
                className={`!rounded-xl bg-white !border items-center ${
                  touched.phone && errors.phone ? 'border-danger' : 'border-[#6b7280]'
                }`}
                inputClassName="w-[80%] !text-base !border-none !ml-2"
                countrySelectorStyleProps={{ buttonClassName: '!border-none !ml-4' }}
                name="phone"
                placeholder="Phone Number (Optional)"
                onChange={(val) => {
                  setFieldValue('phone', val)
                }}
              />

              {touched.phone && errors.phone && (
                <div className="text-danger mb-2">{errors.phone}</div>
              )}
            </>
          )}

          <Button.Submit
            className="mt-4"
            disabled={isSubmitting}
            label={submitButtonLabel || 'SUBMIT'}
            mpProps={submitButtonMpProps}
          />

          {errorMessage && <p className="font-bold text-danger">{errorMessage}</p>}
        </Form>
      )}
    </Formik>
  )
}

const SignupFormValidationSchema = yup.object().shape({
  firstName: yup.string().defined().ensure().required('First name required'),
  email: yup.string().defined().ensure().required('Email required'),
  phone: yup
    .string()
    .transform((value) => (value === '' ? null : value))
    .test('isPhoneValid', 'Please enter a valid phone number', (value) =>
      value ? isPhoneValid(value) : true
    ),
})

export interface ISignupFormSchema extends yup.InferType<typeof SignupFormValidationSchema> {}

const signupFormInitialValues: ISignupFormSchema = SignupFormValidationSchema.cast({})
