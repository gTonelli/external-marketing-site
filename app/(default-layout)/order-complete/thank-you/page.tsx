'use client'

import { Button } from '@/components/Button/Button'
import ErrorMessage from '@/components/ErrorMessage'
import { Input } from '@/components/Input/Input'
import { Loader } from '@/components/Loader'
import { Section } from '@/components/Section'
import { Video } from '@/components/Video/Video'
import { Form, Formik, FormikValues } from 'formik'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import * as Yup from 'yup'

export default function ThankYouPage() {
  // ============ State ==============
  const newUser = useSearchParams().get('new_user') === 'true'

  return (
    <Section>
      <h3>Welcome to The Personal Development School</h3>

      {newUser ? (
        <>
          <p className="my-4">
            Thank you for creating an account at The Personal Development School! Please set your
            password below to join our wonderful community and start your personal development
            journey.
          </p>

          <SetPasswordContent />
        </>
      ) : (
        <>
          <p className="my-4">
            We found an existing account with the email you provided during checkout. You'll have to
            sign in using the password you've previously set.
          </p>

          <Link
            href={
              (process.env.NEXT_PUBLIC_THINKIFIC_URL ||
                'https://university.personaldevelopmentschool.com') + '/users/sign_in'
            }>
            <Button label="Sign In" />
          </Link>
        </>
      )}

      <p className="my-4">
        Check out the video below to learn how to start your journey to find happiness and love.
      </p>

      <Video.Large
        srcUrl="https://storage.googleapis.com/pds_videos/welcome-to-pds.mp4"
        thumbnailUrl="/checkout-thankyou.jpg"
      />
    </Section>
  )
}

const passwordFormValidationSchema = Yup.object({
  password: Yup.string()
    .ensure()
    .required('Enter a password')
    .min(8, 'Password must be at least 8 characters')
    .default(''),
})

const SetPasswordContent = () => {
  // =========== State =============
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmitPassword = (values: FormikValues) => {
    setIsSubmitting(true)

    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/thinkific-checkout-set-password', {
      method: 'POST',
      body: JSON.stringify({ password: values.password }),
      cache: 'no-cache',
      credentials: 'include',
    }).then(async (res) => {
      const response = await res.json()

      if (response.success) {
        window.location.assign(response.destination)
      } else {
        setSubmissionError(true)
        setErrorMessage(response.message)
        setIsSubmitting(false)
      }
    })
  }

  if (submissionError) {
    return <ErrorMessage message={errorMessage} />
  }

  if (isSubmitting) return <Loader className="!py-4 mb-4" />

  return (
    <>
      <p>Additionally, don't forget to set your password below!</p>

      <Formik
        initialValues={{}}
        onSubmit={onSubmitPassword}
        validationSchema={passwordFormValidationSchema}>
        <Form className="max-w-106 mx-auto mb-4 text-left">
          <Input.Field className="mx-0" name="password" type="password" label="Set Password" />

          <Button.Submit label="Activate Account" />
        </Form>
      </Formik>
    </>
  )
}
