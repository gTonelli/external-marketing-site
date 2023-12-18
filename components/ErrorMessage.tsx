'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'

interface IErrorProps {
  message: string
}

export default function ErrorMessage({ message }: IErrorProps) {
  useEffect(() => {
    Sentry.captureMessage(message)
  }, [])

  return (
    <p className="mb-4">
      Oops! It looks like something went wrong, please reach out to us at{' '}
      <Link className="text-primary font-bold" href={'mailto:info@personaldevelopmentschool.com'}>
        info@personaldevelopmentschool.com
      </Link>{' '}
      and let us know!
    </p>
  )
}
