'use client'

// core
import { useState } from 'react'
// components
import { ButtonSubmit } from '../Button/variants/ButtonSubmit'
import { Input } from '../Input/Input'
// libraries
import { faXmarkCircle } from '@awesome.me/kit-545b942488/icons/classic/light'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormikHelpers, Formik, Form } from 'formik'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import * as Yup from 'yup'
// modules
import Mixpanel from '@/modules/Mixpanel'

const RegistrationFormValidationSchema = Yup.object()
  .shape({
    firstName: Yup.string().defined().ensure().required('First name required'),
    email: Yup.string().defined().ensure().required('Email required'),
    website: Yup.string().optional(),
  })
  .defined()

export interface IRegistrationFormSchema extends Yup.InferType<
  typeof RegistrationFormValidationSchema
> {}

const registrationFormInitialValues: IRegistrationFormSchema =
  RegistrationFormValidationSchema.cast({})

export const IATRegistrationForm = () => {
  const [formSubmissionSuccess, setFormSubmissionSuccess] = useState(false)
  const [formSubmissionError, setFormSubmissionError] = useState('')
  const { executeRecaptcha } = useGoogleReCaptcha()

  const onSubmit = async (values: IRegistrationFormSchema, formikHelpers: FormikHelpers<any>) => {
    if (!executeRecaptcha) return
    const captchaToken = await executeRecaptcha('iat_ebook_register')

    setFormSubmissionError('')
    await fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/register', {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        firstName: values.firstName,
        tags: ['iat-tips-ebook'],
        listIds: [54],
        website: values.website,
        'g-recaptcha-response': captchaToken,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          throw typeof data.message === 'string' ? data.message : 'An unexpected error occured!'
        }
        formikHelpers.setSubmitting(false)
        setFormSubmissionSuccess(true)

        Mixpanel.setUser(values.email)
        Mixpanel.track.SignUp({ distinct_id: values.email })
      })
      .catch((err: any) => {
        formikHelpers.setSubmitting(false)
        setFormSubmissionError(typeof err === 'string' ? err : 'An unexpected error occured!')
      })
  }

  if (formSubmissionSuccess)
    return (
      <div className="p-4 bg-success text-white mt-4 rounded-lg">
        <h4 className="mb-2">Welcome to our email community!</h4>

        <p>
          Your free ebook is en route to your inbox! Stay tuned for more exciting updates, exclusive
          offers, and valuable content. And most of all enjoy!
        </p>
      </div>
    )

  return (
    <Formik
      initialValues={registrationFormInitialValues}
      validateOnBlur={false}
      validationSchema={RegistrationFormValidationSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className="w-full max-w-xl mx-auto overflow-hidden">
          <div className="flex">
            <Input.Field
              autocomplete="given-name"
              className="mx-0 mr-4 flex-1"
              label="Your First name"
              name="firstName"
            />

            <Input.Field
              autocomplete="email"
              className="mx-0 flex-1"
              label="Email Address"
              name="email"
            />
          </div>

          <div aria-hidden="true" className="absolute left-[-9999px] h-0">
            <Input.Field
              autocomplete="off"
              className="!mt-0 !mx-0 mb-2 xxs:!mb-0 w-full"
              label="Website"
              name="website"
              tabIndex={-1}
            />
          </div>

          {formSubmissionError && (
            <div className="flex items-center p-4 bg-danger text-white mt-4 rounded-lg">
              <FontAwesomeIcon className="mr-4" icon={faXmarkCircle} />
              <p>{formSubmissionError}</p>{' '}
            </div>
          )}

          <ButtonSubmit
            className="block w-full font-bold text-base self-start text-center rounded-full tracking-widest mt-4"
            disabled={isSubmitting}
            label={'SUBMIT'}
          />
        </Form>
      )}
    </Formik>
  )
}
