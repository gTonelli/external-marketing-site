'use client'

import { Button } from '@/components/Button/Button'
import { Section } from '@/components/Section'
import { Video } from '@/components/Video/Video'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import * as Yup from 'yup'

export default function ThankYouPage() {
  // ============ State ==============
  const searchParams = useSearchParams()
  const newUser = searchParams.get('new_user') === 'true'
  const email = decodeURIComponent(searchParams.get('email') || '')

  return (
    <Section>
      <h3>Welcome to The Personal Development School</h3>

      {newUser && email ? (
        <>
          <p className="my-4">
            Thank you for creating an account at The Personal Development School! Please set your
            password below to join our wonderful community and start your personal development
            journey.
          </p>

          <Link
            href={
              (process.env.NEXT_PUBLIC_THINKIFIC_URL ||
                'https://university.personaldevelopmentschool.com') +
              `/users/express_signin?email=${encodeURIComponent(email)}`
            }>
            <Button label="Activate Account" />
          </Link>
        </>
      ) : (
        <>
          <p className="my-4">
            We found an existing account with the email you provided during checkout. You'll have to
            sign in using the password you've previously set. You can also reach out to us at{' '}
            <Link href="mailt:info@personaldevelopmentschool.com">
              info@personaldevelopmentschool.com
            </Link>
            with any questions.
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

      <p className="my-4 mt-8">
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
