'use client'

import { useRouter } from 'next/navigation'
import { SignupForm } from './Forms/SignupForm'

export const IATEbookForm = ({ id }: { id?: string }) => {
  const router = useRouter()

  return (
    <SignupForm
      id={id}
      userTags={['iat-tips-ebook']}
      listIds={[54]}
      successMessage="Your e-book is on the way!"
      onSuccess={() => router.push('/iat/ebook?signup=success')}
    />
  )
}
