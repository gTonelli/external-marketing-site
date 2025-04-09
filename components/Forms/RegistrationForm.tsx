'use client'

// components
import { Button } from '../Button/Button'
import { IUserInfo } from '../AttachmentQuiz/AttachmentQuiz'
import { IDefaultProps } from '..'
// libraries
import { MD5 } from 'crypto-js'
import { Field, Form, Formik } from 'formik'
import * as yup from 'yup'
import cx from 'classnames'
import { PhoneInput } from 'react-international-phone'
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
  onAfterSubmit?(): void
  /** String or function that retuirns a string for generating client tags */
  clientTag?: string[]
  /** Additional user info used by attachment quiz */
  userInfo?: IUserInfo
  /** Optional user style information to append to users profile */
  userStyle?: TStyle
  /** Split test on button text */
  submitButtonLabel?: string
  /** whether or not to show the phone number field */
  showPhoneField?: boolean
}

type TFieldConfig = {
  key: 'firstName' | 'lastName' | 'email'
  label: string
  autoComplete?: string
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
  { key: 'email', label: 'Email' },
]

export const RegistrationForm = ({
  onAfterSubmit,
  className,
  clientTag,
  userInfo,
  userStyle,
  submitButtonLabel,
  showPhoneField = false,
}: IRegistrationFormProps) => {
  // =========== Hooks =========
  const FBQ = useFacebookPixel()
  const { setUserData } = useGamAnalytics()

  const onSubmit = (values: IQuizRegistrationFormSchema) => {
    const { email, firstName, lastName, phone } = values
    setUserData({ email, firstName, lastName, phone, userStyle })

    Mixpanel.setUser(values.email)
    Mixpanel.setPeople({ $email: email, $first_name: firstName, $last_Name: lastName })
    if (userInfo) Mixpanel.setPeopleOnce({ ...userInfo })
    if (userStyle) Mixpanel.setPeople({ 'Attachment Style': userStyle })

    const insertId = MD5(Date.now() + JSON.stringify(values)).toString()
    Mixpanel.track.SignUp({
      distinct_id: values.email,
      $insert_id: insertId,
    })

    FBQ?.trackLead({
      email,
    })

    const requestBody = {
      tags: clientTag,
      firstName,
      lastName,
      email,
      phone,
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
      {({ values, setFieldValue, isSubmitting, errors }) => (
        <Form className={cx('w-full mx-auto text-left', className)}>
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

          <p className="text-left md:text-cente mt-4">
            By clicking Submit, I agree to receive my attachment style report and other email
            communication. If you haven&apos;t received your report, please be sure to check your
            Spam/Junk folder.
          </p>

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
  })
  .defined()

export interface IQuizRegistrationFormSchema
  extends yup.InferType<typeof RegistrationFormValidationSchema> {}

export const registrationFormInitialValues: IQuizRegistrationFormSchema =
  RegistrationFormValidationSchema.cast({})

export interface IUtmData {
  [key: string]: string
}
