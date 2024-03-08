'use client'

//core
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
// components
import { TUserStyle, IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm } from '../RegistrationForm'
// modules
import { useGoogleTagManager } from '@/modules/GTM'
import Mixpanel from '@/modules/Mixpanel'
import { Storage, TStorageKeys } from '@/modules/Storage'

interface IAttachmentQuizFormProps {
  userStyle: TUserStyle
  userInfo?: IUserInfo
  quiz_traffic_source: TQuizTrafficSources
}

export const AttachmentQuizForm = ({
  quiz_traffic_source,
  userInfo,
  userStyle,
}: IAttachmentQuizFormProps) => {
  // =================== Hooks ======================
  const tagManager = useGoogleTagManager()
  const router = useRouter()

  // =================== States ======================
  const [isVariant, setIsVariant] = useState<boolean>()
  useEffect(() => {
    if (quiz_traffic_source === 'paid') {
      let storageVar = 'gm-907-form-copy' as TStorageKeys
      let showVariant: string | null | boolean = Storage.get(storageVar)
      if (showVariant === null) {
        showVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.2
        Storage.set(storageVar, showVariant)
        Mixpanel.track.ExperimentStarted({
          'Experiment name': 'GM-907-Form-Copy',
          'Variant name': showVariant ? 'Variant 1' : 'Control',
        })
      }
      setIsVariant(showVariant === 'true' || showVariant === true)
    }
  }, [quiz_traffic_source])

  // ==================== Events ====================
  const onAfterSubmit = () => {
    tagManager?.track({
      event: 'form_tracking',
      eventCategory: 'Attachment Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    if (quiz_traffic_source === 'organic') {
      router.push('/results/' + userStyle)
    } else if (quiz_traffic_source === 'paid' && userStyle === 'fa') {
      router.push('/quiz/results/fa')
    } else {
      router.push('/quiz/' + userStyle)
    }
  }

  return (
    <section className="flex justify-center">
      <div className="max-w-5xl w-full rounded-2xl py-12 mt-6 mx-2 xxs:shadow-centered md:mx-4">
        <h2 className="font-bold font-sspb mx-4 text-center">
          Fill Out the Form Below to View Your Free Results!
        </h2>

        {/* QUIZ COMPLETION FORM */}
        <RegistrationForm
          clientTag={`attachment-quiz-${userStyle}`}
          submitButtonLabel={isVariant ? 'SEE MY RESULTS' : 'SUBMIT NOW'}
          userInfo={userInfo}
          userStyle={userStyle}
          onAfterSubmit={onAfterSubmit}
        />

        {isVariant && <h5 className="font-effra mt-4">AND also get a free emailed report.</h5>}
      </div>
    </section>
  )
}
