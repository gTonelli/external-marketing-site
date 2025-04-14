'use client'

//core
import { useRouter } from 'next/navigation'
// components
import { IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm } from '../Forms/RegistrationForm'
// modules
import { useFunnelytics } from '@/modules/Funnelytics'
import { useGoogleTagManager } from '@/modules/GTM'
// utils
import { TStyle } from '@/utils/types'

interface IAttachmentQuizFormProps {
  userStyle: TStyle
  userInfo?: IUserInfo
  quiz_traffic_source: TQuizTrafficSources
  isYoung?: boolean
  isVariant?: boolean
}

export const AttachmentQuizForm = ({
  quiz_traffic_source,
  userInfo,
  userStyle,
}: IAttachmentQuizFormProps) => {
  const funnelytics = useFunnelytics()
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
        return userStyle === 'fa' ? '/quiz/results/fearful-avoidant' : `/quiz/${userStyle}`

      case 'paidMeta':
        /*  Paid Meta traffic: Handle split test logic for quiz B
            If split test active, use variant URL with user style
            If no split test, go to default quiz B results page with user style */
        return `/quiz/b/results/${userStyle}`

      case 'paidYouTube':
        /*  Paid YouTube traffic: If user style is 'fa', redirect to specific page*/
        return `/yt-quiz/${userStyle}`

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

    funnelytics?.track('Form Tracking', {
      pageName: `Attachment-Quiz-${quiz_traffic_source}`,
    })

    const route = determineRoute()
    router.push(route)
  }

  const baseTag = `attachment-quiz-${userStyle}`

  const additionalTag =
    userInfo?.relationshipStatus === 'No' && userStyle === 'fa' ? 'single-fa' : ''
  const tagArray = additionalTag ? `${baseTag}, ${additionalTag}` : baseTag

  return (
    <section className="flex justify-center">
      <div className="max-w-5xl w-full text-center rounded-2xl mt-6 mx-2 p-2 xxs:p-3 xs:p-4 xxs:shadow-centered md:mx-4 md:p-8 lg:px-12 xl:px-16">
        <h2 className="font-bold font-sspb mx-4 text-center">
          Fill Out the Form Below to View Your Free Results!
        </h2>

        {/* QUIZ COMPLETION FORM */}
        <RegistrationForm
          clientTag={tagArray}
          submitButtonLabel="SEE MY RESULTS"
          userInfo={userInfo}
          userStyle={userStyle}
          onAfterSubmit={onAfterSubmit}
        />

        <p className="font-effra mt-4">AND also get a free emailed report.</p>
      </div>
    </section>
  )
}
