'use client'

import { Button } from '@/components/Button/Button'
import ErrorMessage from '@/components/ErrorMessage'
import { Input } from '@/components/Input/Input'
import { Loader } from '@/components/Loader'
import { Section } from '@/components/Section'
import { Video } from '@/components/Video/Video'
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
import { FormikValues, Formik, Form } from 'formik'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'

export default function ThankYouPage() {
  // ============ State ==============
  const searchParams = useSearchParams()
  const newUser = searchParams.get('new_user') === 'true'

  return (
    <Section>
      {newUser ? (
        <>
          <SetPasswordContent />
        </>
      ) : (
        <>
          <h3>Your Purchase Was Successful!</h3>

          <p className="my-4">
            Thank you for joining the wonderful community at The Personal Development School! It
            looks like you already have an account with us, please sign in below start your personal
            development journey.
          </p>

          <Link
            href={
              (process.env.NEXT_PUBLIC_THINKIFIC_URL ||
                'https://university.personaldevelopmentschool.com') + '/users/sign_in'
            }>
            <Button label="Sign In" />
          </Link>

          <p className="my-4">
            Have questions about your account? Reach out to us at{' '}
            <Link
              className="font-bold text-primary hover:underline"
              href="mailt:info@personaldevelopmentschool.com">
              info@personaldevelopmentschool.com
            </Link>{' '}
            and a member of the team will be happy to help!
          </p>
        </>
      )}

      <p className="my-4 mt-8">
        Check out the video below to learn how to start your journey to find happiness and love.
      </p>

      <div className="p-2 bg-white shadow-center-light rounded-10 xxs:p-3 xs:p-4 lg:p-6 lg:rounded-20">
        <Video.Youtube
          videoId="CN5lNJLed7M"
          className="max-w-screen-2xl"
          thumbnail="/checkout-thankyou.jpg"
          maxHeight={768}
        />
      </div>
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
  const firstName = Storage.get('userFirstName')
  const lastUserEmail = Storage.get('lastUserEmail')
  // =========== State =============
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [dashboardLink, setDashboardLink] = useState(
    lastUserEmail
      ? (process.env.NEXT_PUBLIC_THINKIFIC_URL ||
          'https://university.personaldevelopmentschool.com') +
          `/users/express_signin?email=${lastUserEmail}`
      : (process.env.NEXT_PUBLIC_THINKIFIC_URL ||
          'https://university.personaldevelopmentschool.com') + '/enrollments'
  )
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
        setDashboardLink(response.destination)
        setIsSubmitting(false)
        setIsSubmitted(true)
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

  if (isSubmitted)
    return (
      <>
        <h3>Thank You{firstName && `, ${firstName}`}!</h3>

        <p className="my-4">Your account is setup, and we just sent you a welcome email!</p>

        <p className="my-4">You can now being your journey at The Personal Development School</p>

        <Link href={dashboardLink}>
          <Button label="Start Learning" />
        </Link>
      </>
    )

  return (
    <>
      <h3>Your Purchase Was Successful!</h3>

      <p className="my-4">
        Complete your account setup to access The Personal Development School by setting your
        password:
      </p>

      <Formik
        initialValues={{}}
        onSubmit={onSubmitPassword}
        validationSchema={passwordFormValidationSchema}>
        <Form className="max-w-106 mx-auto mb-4 flex items-center">
          <Input.Field className="w-full" name="password" type="password" label="Password" />

          <Button.Submit label="Submit" />
        </Form>
      </Formik>
    </>
  )
}
