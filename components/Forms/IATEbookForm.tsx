'use client'

// core
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// components
import { SignupForm } from './SignupForm'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'

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
    let randomFloat = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 
    let showVariant = Storage.get('ip-1219-ebook-v2') === 'yes'

    if (randomFloat < 0.5 && Storage.get('ip-1219-ebook-v2') === null) {
      showVariant = randomFloat < 0.25

      Storage.set('ip-1219-ebook-v2', showVariant ? 'yes' : 'no')
      Mixpanel.track.ExperimentStarted({
        'Experiment name': 'IP-1219-ebook-v2',
        'Variant name': showVariant ? 'Variant 1' : 'Control'
      })
    }

    setIsVariant(showVariant)
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
