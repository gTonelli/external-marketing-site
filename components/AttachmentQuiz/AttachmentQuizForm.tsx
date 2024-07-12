'use client'

//core
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// components
import { IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm } from '../Forms/RegistrationForm'
// libraries
import Cookies from 'universal-cookie'
// modules
import { useGoogleTagManager } from '@/modules/GTM'
import { TStyle } from '@/utils/types'
import Mixpanel from '@/modules/Mixpanel'

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

  useEffect(() => {
    if (isYoung && quiz_traffic_source === 'paid') {
      const cookies = new Cookies()
      let isAgeVariant = cookies.get('gm-1079-age-funnel-split') === 'yes'
      if (cookies.get('gm-1079-age-funnel-split') === null) {
        isAgeVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.2
        cookies.set('gm-1079-age-funnel-split', isAgeVariant ? 'yes' : 'no')
        Mixpanel.track.ExperimentStarted({
          'Experiment name': 'GM-1079-Age-Funnel-Split',
          'Variant name': isAgeVariant ? 'Variant 1' : 'Control',
          page_name: isAgeVariant
            ? `Age Funnel - ${userStyle}`
            : userStyle === 'fa'
            ? `VSL Royal Rumble Results - fa`
            : `vsl-${userStyle}`,
        })
      }
      setIsVariant(isAgeVariant)
    }
  }, [])

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
      if (isVariant) router.push('/results-bundle/fa')
      else router.push('/quiz/results/fa')
    } else {
      if (isVariant) router.push('/results-bundle/' + userStyle)
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
            isYoung && quiz_traffic_source === 'paid'
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
