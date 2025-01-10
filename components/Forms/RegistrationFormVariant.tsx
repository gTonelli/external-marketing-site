'use client'

// components
import { Button } from '../Button/Button'
import { IUserInfo } from '../AttachmentQuiz/AttachmentQuiz'
import { IDefaultProps } from '..'
import {
  IQuizRegistrationFormSchema,
  IUtmData,
  registrationFormInitialValues,
  RegistrationFormValidationSchema,
} from './RegistrationFormControl'
// libraries
import { MD5 } from 'crypto-js'
import { Field, Form, Formik } from 'formik'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
import { useGamAnalytics } from '@/modules/GAM'
import Mixpanel from '@/modules/Mixpanel'
// utils
import { TStyle } from '@/utils/types'

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

export const RegistrationFormVariant = ({
  onAfterSubmit,
  clientTag,
  userInfo,
  userStyle,
}: IRegistrationFormProps) => {
  // =========== Hooks =========
  const FBQ = useFacebookPixel()
  const { setUserData } = useGamAnalytics()

  const onSubmit = (values: IQuizRegistrationFormSchema) => {
    const { email, firstName, lastName } = values
    setUserData({ email, firstName, lastName, userStyle })

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
      {({ isSubmitting, errors }) => (
        <Form className="w-full mx-auto text-left">
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
                  <i>*{errors[field.key]}</i>
                </p>
              )}
            </div>
          ))}

          <p className="text-left md:text-center">
            By clicking Submit, I agree to receive my attachment style report and other email
            communication. If you haven&apos;t received your report, please be sure to check your
            Spam/Junk folder.
          </p>

          <div className="flex justify-center">
            <Button.Submit
              className="font-bold text-base self-start text-center rounded-full bg-primary-old tracking-widest mt-4 py-4 px-12 lg:text-xl"
              disabled={isSubmitting}
              label="SUBMIT"
            />
          </div>
        </Form>
      )}
    </Formik>
  )
}
