'use client'

//core
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// components
import { IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm } from '../Forms/RegistrationForm'
// modules
import { useGoogleTagManager } from '@/modules/GTM'
import { TStyle } from '@/utils/types'

interface IAttachmentQuizFormProps {
  userStyle: TStyle
  userInfo?: IUserInfo
  quiz_traffic_source: TQuizTrafficSources
  isYoung?: boolean
}

export const AttachmentQuizForm = ({
  quiz_traffic_source,
  userInfo,
  userStyle,
  isYoung,
}: IAttachmentQuizFormProps) => {
  // =================== Hooks ======================
  const [isVariant, setIsVariant] = useState(false)

  const tagManager = useGoogleTagManager()
  const router = useRouter()

  // TODO: useEffect with split logic
  useEffect(() => {}, [])

  // ==================== Events ====================
  const onAfterSubmit = () => {
    tagManager?.track({
      event: 'form_tracking',
      eventCategory: 'Attachment Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    // TODO: split based on isVariant not isYoung
    if (quiz_traffic_source === 'organic') {
      router.push('/results/' + userStyle)
    } else if (quiz_traffic_source === 'paid' && userStyle === 'fa') {
      if (isYoung) router.push('/results-bundle/fa')
      else router.push('/quiz/results/fa')
    } else {
      if (isYoung) router.push('/results-bundle/' + userStyle)
      else router.push('/quiz/' + userStyle)
    }
  }

  return (
    <section className="flex justify-center">
      <div className="max-w-5xl w-full text-center rounded-2xl py-12 mt-6 mx-2 xxs:shadow-centered md:mx-4">
        <h2 className="font-bold font-sspb mx-4 text-center">
          Fill Out the Form Below to View Your Free Results!
        </h2>

        {/* QUIZ COMPLETION FORM */}
        <RegistrationForm
          clientTag={
            isYoung
              ? isVariant
                ? `isYoung-${userStyle}-variant,attachment-quiz-${userStyle}`
                : `isYoung-${userStyle}-control,attachment-quiz-${userStyle}`
              : `attachment-quiz-${userStyle}`
          }
          submitButtonLabel="SEE MY RESULTS"
          userInfo={userInfo}
          userStyle={userStyle}
          onAfterSubmit={onAfterSubmit}
        />

        <h5 className="font-effra mt-4">AND also get a free emailed report.</h5>
      </div>
    </section>
  )
}
