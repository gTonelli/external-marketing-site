'use client'

import { Button } from '@/components/Button/Button'
import { Section } from '@/components/Section'
import { Video } from '@/components/Video/Video'
import Mixpanel from '@/modules/Mixpanel'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ThankYouPage() {
  // ============ State ==============
  const searchParams = useSearchParams()
  const newUser = searchParams.get('new_user') === 'true'
  const email = decodeURIComponent(searchParams.get('email') || '')

  useEffect(() => {
    if (email) {
      Mixpanel.setUser(email)
    }
  }, [email])

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

      <Video.Large
        className="shadow-center-light"
        srcUrl="https://storage.googleapis.com/pds_videos/welcome-to-pds.mp4"
        thumbnailUrl="/checkout-thankyou.jpg"
      />
    </Section>
  )
}
