'use client'

// core
import { useRouter } from 'next/navigation'
// components
import { SignupForm } from './SignupForm'

interface IIATEbookFormProps {
  id?: string
  classNameFields?: string
  submitButtonLabel?: string
}

export const IATEbookForm = ({ id, classNameFields, submitButtonLabel }: IIATEbookFormProps) => {
  const router = useRouter()

  return (
    <SignupForm
      id={id}
      formSource="IAT Ebook"
      classNameFields={classNameFields}
      userTags={['iat-tips-ebook']}
      listIds={[54]}
      successMessage="Your e-book is on the way!"
      submitButtonLabel={submitButtonLabel}
      onSuccess={() => router.push('/iat/ebook?signup=success')}
    />
  )
}
