'use client'

// core
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// components
import { SignupForm } from './SignupForm'
// modules
import { getSplitTest } from '@/utils/functions'

interface IIATEbookFormProps {
  id?: string
  classNameFields?: string
  submitButtonLabel?: string
}

export const IATEbookForm = ({ id, classNameFields, submitButtonLabel }: IIATEbookFormProps) => {
  const router = useRouter()

  // ==================== State ====================
  const [isVariant, setIsVariant] = useState(false)

  useEffect(() => {
    setIsVariant(getSplitTest({
      key: 'ip-1219-ebook-v2',
      experimentName: 'IP-1219-ebook-v2',
      variantRatio: 0.25,
      useCookies: false
    }))
  }, [])


  return (
    <SignupForm
      id={id}
      formSource="IAT Ebook"
      classNameFields={classNameFields}
      userTags={[isVariant ? 'iat-tips-ebook-v2' : 'iat-tips-ebook']}
      listIds={[54]}
      successMessage="Your e-book is on the way!"
      submitButtonLabel={submitButtonLabel}
      onSuccess={() => router.push('/iat/ebook?signup=success')}
    />
  )
}
