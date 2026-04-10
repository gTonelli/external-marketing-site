'use client'

// core
import { useCallback, useState } from 'react'
// components
import { Button } from '../Button/Button'
import { Captcha } from '../Captcha'
import { IUserInfo } from '../AttachmentQuiz/AttachmentQuiz'
import { TDatingStage } from '../DatingQuiz/useDatingQuiz'
import { IDefaultProps } from '..'
import { gtag } from '../GoogleAdsTag'
// libraries
import { MD5 } from 'crypto-js'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import cx from 'classnames'
import { PhoneInput } from 'react-international-phone'
import { TLoveLanguagesAssociation } from '../LoveLanguagesQuiz/config'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
import { useGamAnalytics } from '@/modules/GAM'
import Mixpanel from '@/modules/Mixpanel'
// utils
import { TStyle } from '@/utils/types'
import { Regexes } from '@/utils/constants'
import { isPhoneValid } from '@/utils/functions'
// styles
import 'react-international-phone/style.css'

interface IRegistrationFormProps extends IDefaultProps {
  /** Function to run after form submission */
  onAfterSubmit?({ firstName, lastName, email }: TOnAfterSubmitArgs): void
  /** String or function that retuirns a string for generating client tags */
  clientTag?: string
  /** Additional user info used by attachment quiz */
  userInfo?: IUserInfo
  /** Optional user style information to append to users profile */
  userStyle?: TStyle
  /** Split test on button text */
  submitButtonLabel?: string
  /** whether or not to show the phone number field */
  showPhoneField?: boolean
  /** Dating stage to append to the user's profile*/
  datingStage?: TDatingStage
  /** Love language to append to the user's profile*/
  loveLanguage?: TLoveLanguagesAssociation
  /** Disclaimer text to display below the form */
  disclaimer?: string
}

type TFieldConfig = {
  key: 'firstName' | 'lastName' | 'email'
  label: string
  autoComplete?: string
}

export type TOnAfterSubmitArgs = {
  firstName?: string
  lastName?: string
  email?: string
}

const fields: TFieldConfig[] = [
  {
    key: 'firstName',
    label: 'First Name',
    autoComplete: 'given-name',
  },
  {
    key: 'lastName',
    label: 'Last Name',
    autoComplete: 'family-name',
  },
  { key: 'email', label: 'Email', autoComplete: 'email' },
]

export const RegistrationForm = ({
  onAfterSubmit,
  className,
  clientTag,
  userInfo,
  userStyle,
  datingStage,
  loveLanguage,
  submitButtonLabel,
  showPhoneField = false,
  disclaimer = "By clicking Submit, I agree to receive my attachment style report and other email communication. If you haven't received your report, please be sure to check your Spam/Junk folder, and also mark it as safe so you don't miss anything.",
}: IRegistrationFormProps) => {
  // =========== Hooks =========
  const FBQ = useFacebookPixel()
  const { setUserData } = useGamAnalytics()
  const [captchaToken, setCaptchaToken] = useState<string>('')

  // =========== Captcha =========
  const onCaptchaSuccess = useCallback((token: string) => {
    setCaptchaToken(token)
  }, [])

  const onCaptchaClear = useCallback(() => {
    setCaptchaToken('')
  }, [])

  const onSubmit = (values: IQuizRegistrationFormSchema) => {
    const { firstName, lastName, phone, website } = values
    const email = values.email.trim()
    setUserData({ email, firstName, lastName, phone, userStyle })

    if (loveLanguage) Mixpanel.setUserWithBeacon(values.email)
    else Mixpanel.setUser(values.email)

    Mixpanel.setPeople({ $email: email, $first_name: firstName, $last_Name: lastName })
    if (userInfo) Mixpanel.setPeopleOnce({ ...userInfo })
    if (userStyle) Mixpanel.setPeople({ 'Attachment Style': userStyle })
    if (datingStage) Mixpanel.setPeople({ 'Dating Stage': datingStage })
    if (loveLanguage) Mixpanel.setPeople({ 'Love Language': loveLanguage })
    const eventId = crypto.randomUUID()
    if (loveLanguage) {
      Mixpanel.track.SignUpWithBeacon({
        distinct_id: values.email,
        $insert_id: eventId,
      })
    } else {
      Mixpanel.track.SignUp({
        distinct_id: values.email,
        $insert_id: eventId,
      })
    }

    FBQ?.trackLead({ email, eventId })

    gtag('set', 'user_data', { email })

    const requestBody = {
      tags: clientTag ? clientTag.split(',').map((tag) => tag.trim()) : [],
      firstName,
      lastName,
      email,
      phone,
      listIds: [2],
      insertId: eventId,
      userInfo,
      website,
      'g-recaptcha-response': captchaToken,
    }

    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/register`, {
      method: 'POST',
      credentials: 'include',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }).catch((error) => {
      console.error(error)
    })

    onAfterSubmit?.({ firstName, lastName, email })
  }

  return (
    <Formik
      initialValues={registrationFormInitialValues}
      validateOnBlur={false}
      validationSchema={RegistrationFormValidationSchema}
      onSubmit={onSubmit}>
      {({ values, setFieldValue, isSubmitting, errors }) => (
        <Form className={cx('w-full mx-auto text-left  overflow-hidden', className)}>
          {fields.map((field) => (
            <div key={`field_${field.key}`}>
              <label className="font-bold" htmlFor={field.key}>
                {field.label}
              </label>

              <Field
                autoComplete={field.autoComplete || field.key}
                className={`w-full outline-none focus:ring-transparent py-2 px-4 rounded-md ${
                  errors[field.key] ? 'mb-0 border-danger' : 'mb-2 border-black'
                }`}
                placeholder={field.label + '...'}
                name={field.key}
              />

              {errors[field.key] && (
                <p className="text-danger">
                  <em>*{errors[field.key]}</em>
                </p>
              )}
            </div>
          ))}

          <div aria-hidden="true" className="absolute left-[-9999px] h-0">
            <label htmlFor="website">Website</label>

            <Field
              autoComplete="off"
              className={`w-full outline-none focus:ring-transparent py-2 px-4 rounded-md ${
                errors['website'] ? 'mb-0 border-danger' : 'mb-2 border-black'
              }`}
              name="website"
              placeholder="Website"
              tabIndex={-1}
            />

            {errors['website'] && (
              <p className="text-danger">
                <em>*{errors['website']}</em>
              </p>
            )}
          </div>

          {showPhoneField && (
            <div>
              <label className="font-bold" htmlFor="phone">
                Phone Number
              </label>

              <PhoneInput
                disableDialCodePrefill
                value={values.phone}
                className={`!rounded-xl bg-white !border items-center ${
                  errors['phone'] ? 'border-danger' : 'border-[#6b7280]'
                }`}
                inputClassName="w-[80%] !text-base !border-none !ml-2"
                countrySelectorStyleProps={{ buttonClassName: '!border-none !ml-4' }}
                name="phone"
                placeholder="Phone Number (Optional)"
                onChange={(val) => {
                  setFieldValue('phone', val)
                }}
              />

              {errors['phone'] && (
                <p className="text-danger">
                  <em>*{errors['phone']}</em>
                </p>
              )}
            </div>
          )}

          {disclaimer && <p className="text-left mt-4">{disclaimer}</p>}

          <div className="flex justify-center mt-4">
            <Captcha
              onSuccess={onCaptchaSuccess}
              onError={onCaptchaClear}
              onExpired={onCaptchaClear}
            />
          </div>

          <div className="flex justify-center">
            <Button.Submit
              className="font-bold text-base self-start text-center rounded-full bg-primary-old tracking-widest mt-4 py-4 px-12 lg:text-xl"
              disabled={isSubmitting || !captchaToken}
              label={submitButtonLabel || 'SUBMIT'}
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export const RegistrationFormValidationSchema = yup
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
    phone: yup
      .string()
      .transform((value) => (value === '' ? null : value))
      .test('isPhoneValid', 'Please enter a valid phone number', (value) =>
        value ? isPhoneValid(value) : true
      ),
    website: yup.string().optional(),
  })
  .defined()

export interface IQuizRegistrationFormSchema extends yup.InferType<
  typeof RegistrationFormValidationSchema
> {}

export const registrationFormInitialValues: IQuizRegistrationFormSchema =
  RegistrationFormValidationSchema.cast({})

export interface IUtmData {
  [key: string]: string
}
