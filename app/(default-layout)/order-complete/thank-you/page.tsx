'use client'

import { Button } from '@/components/Button/Button'
import { Input } from '@/components/Input/Input'
import { Loader } from '@/components/Loader'
import { Section } from '@/components/Section'
import { Video } from '@/components/Video/Video'
import { Storage } from '@/modules/Storage'
import { Form, Formik, FormikValues } from 'formik'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import * as Yup from 'yup'

export default function ThankYouPage() {
  // ============ State ==============
  const [token, setToken] = useState<null | undefined>(null)
  const newUser = useSearchParams().get('new_user') === 'true'

  useEffect(() => {
    setToken(Storage.get('token'))
  }, [])

  return (
    <Section>
      <h3>Welcome to the Personal Development School</h3>

      <p className="my-4">
        Welcome to our wonderful community, and to your personal development journey. To learn more
        about how to get started and find the most success along your way, check out the video
        below!
      </p>

      {newUser && token && <SetPasswordContent token={token} />}

      <Link href={'https://staging.university.personaldevelopmentschool.com/enrollments'}>
        <Button label="START LEARNING" />
      </Link>

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

const SetPasswordContent = ({ token }: { token: string }) => {
  // =========== State =============
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState(false)

  const onSubmitPassword = (values: FormikValues) => {
    setIsSubmitting(true)

    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/thinkific-checkout-set-password', {
      method: 'POST',
      body: JSON.stringify({ token, password: values.password }),
      cache: 'no-cache',
    }).then(async (res) => {
      const response = await res.json()

      if (response.success) {
        Storage.remove('token')
        window.location.assign(response.destination)
      } else {
        setSubmissionError(true)
        setIsSubmitting(false)
      }
    })
  }

  if (submissionError) {
    return (
      <p className="text-danger">
        Oops! It looks like something went wrong, please reach out top us at{' '}
        <Link className="text-primary font-bold" href={'mailto:info@personaldevelopmentschool.com'}>
          info@personaldevelopmentschool.com
        </Link>{' '}
        and let us know!
      </p>
    )
  }

  if (isSubmitting) return <Loader className="!py-4 mb-4" />

  return (
    <>
      <p>Additionally, don't forget to set your password below!</p>

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
