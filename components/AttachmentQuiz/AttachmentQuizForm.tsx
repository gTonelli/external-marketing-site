'use client'

//core
import { useRouter } from 'next/navigation'
// components
import { IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm } from '../Forms/RegistrationForm'
// modules
import { useGoogleTagManager } from '@/modules/GTM'
// utils
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
}: IAttachmentQuizFormProps) => {
  const tagManager = useGoogleTagManager()
  const router = useRouter()

  // ==================== Events ====================
  const determineRoute = () => {
    switch (quiz_traffic_source) {
      case 'organic':
        // Organic traffic: Redirect to results page with user style
        return `/results/${userStyle}`

      case 'paidGoogle':
        // Paid Google traffic: If user style is 'fa', redirect to specific page
        return userStyle === 'fa' ? '/quiz/results/fa' : `/quiz/${userStyle}`

      case 'paidMeta':
        /*  Paid Meta traffic: Handle split test logic for quiz B
            If split test active, use variant URL with user style
            If no split test, go to default quiz B results page with user style */
        return `/quiz/b/results/${userStyle}`

      default:
        // Default route: Go to quiz page with user style
        return `/quiz/${userStyle}`
    }
  }

  const onAfterSubmit = () => {
    tagManager?.track({
      event: 'form_tracking',
      eventCategory: 'Attachment Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    const route = determineRoute()
    router.push(route)
  }

  return (
    <section className="flex justify-center">
      <div className="max-w-5xl w-full text-center rounded-2xl py-12 mt-6 mx-2 xxs:shadow-centered md:mx-4">
        <h2 className="font-bold font-sspb mx-4 text-center">
          Fill Out the Form Below to View Your Free Results!
        </h2>

        {/* QUIZ COMPLETION FORM */}
        <RegistrationForm
          clientTag={`attachment-quiz-${userStyle}`}
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
