'use client'

//core
import { useRouter } from 'next/navigation'
// components
import { IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm } from '../Forms/RegistrationForm'
import { RegistrationFormVariant } from '../Forms/RegistrationFormVariant'
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
  isVariant: boolean
}

export const AttachmentQuizForm = ({
  quiz_traffic_source,
  userInfo,
  userStyle,
  isVariant,
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

    funnelytics?.track('Form Tracking', {
      pageName: `Attachment-Quiz-${quiz_traffic_source}`,
    })

    const route = determineRoute()
    router.push(route)
  }

  return (
    <section className="flex justify-center">
      <div className="max-w-5xl w-full text-center rounded-2xl mt-6 mx-2 p-2 xxs:p-3 xs:p-4 xxs:shadow-centered md:mx-4 md:p-8 lg:px-12 xl:px-16">
        {isVariant ? (
          <>
            <h2 className="font-bold font-sspb text-center mb-4">
              You're <strong className="text-primary">One Step Away</strong> From Changing Your
              Relationships Forever
            </h2>

            <p className="mb-4">
              Enter your information below to receive a{' '}
              <strong>free, in-depth personalized email report</strong> to help you{' '}
              <strong className="text-primary">
                build the relationships of your life starting today
              </strong>
              . We do not ever sell your information.
            </p>

            <RegistrationFormVariant
              clientTag={`attachment-quiz-${userStyle}`}
              submitButtonLabel="SEE MY RESULTS"
              userInfo={userInfo}
              userStyle={userStyle}
              onAfterSubmit={onAfterSubmit}
            />
          </>
        ) : (
          <>
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
          </>
        )}

        <h5 className="font-effra mt-4">AND also get a free emailed report.</h5>
      </div>
    </section>
  )
}
