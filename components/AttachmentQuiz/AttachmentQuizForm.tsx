'use client'

//core
import { useRouter } from 'next/navigation'
// components
import { IResultProps, IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm, TOnAfterSubmitArgs } from '../Forms/RegistrationForm'
import { useAttachmentQuiz } from '../AttachmentQuizV2/useAttachmentQuiz'
// utils
import { TStyle } from '@/utils/types'
import { getAttachmentStyleText, getSplitTest } from '@/utils/functions'
import { gtag } from '../GoogleAdsTag'

interface IAttachmentQuizFormProps {
  userStyle: TStyle
  userInfo?: IUserInfo
  quiz_traffic_source: TQuizTrafficSources
  isYoung?: boolean
  isVariant?: boolean
  quizData: IQuizData
}

interface IQuizData extends IUserInfo, Pick<IResultProps, 'fa' | 'ap' | 'da' | 'sa'> {}

export const AttachmentQuizForm = ({
  quiz_traffic_source,
  userInfo,
  userStyle,
  quizData,
}: IAttachmentQuizFormProps) => {
  const router = useRouter()
  const { getPercentageResults } = useAttachmentQuiz()

  // ==================== Events ====================
  const determineRoute = () => {
    switch (quiz_traffic_source) {
      case 'organic':
        return `/results/${userStyle}`

      case 'paidGoogle':
        if (userStyle === 'ap' && userInfo?.intent === 'Improve my current relationship') {
          const isVariant = getSplitTest({
            key: 'GM-1895-AP',
            experimentName: 'GM-1895-Segmented-Results-Test-AP',
            variantRatio: 0.2,
            useCookies: false,
          })

          if (isVariant) return '/quiz/style/ap'
        } else if (userStyle === 'fa') {
          if (
            userInfo?.intent ===
            'Learn more about myself and heal (self-esteem, anxiety, depression, etc.)'
          ) {
            const isVariant = getSplitTest({
              key: 'GM-1895-FA',
              experimentName: 'GM-1895-Segmented-Results-Test-FA',
              variantRatio: 0.5,
              useCookies: false,
            })

            if (isVariant) return '/quiz/style/fa'
          }
          return '/quiz/results/fearful-avoidant'
        }

        return `/quiz/${userStyle}`

      case 'paidMeta':
        if (userStyle === 'da') {
          return '/quiz/da'
        } else {
          return `/quiz/b/results/${userStyle}`
        }

      case 'paidYouTube':
        return `/yt-quiz/${userStyle}`

      default:
        return `/quiz/${userStyle}`
    }
  }

  const onAfterSubmit = ({ firstName, lastName, email }: TOnAfterSubmitArgs) => {
    gtag({
      event: 'form_tracking',
      eventCategory: 'Attachment Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    gtag('event', 'conversion', {
      send_to: 'AW-696431615/_Wk5CMPg-8YCEP_niswC',
      attachment_style: getAttachmentStyleText(userStyle),
    })

    const {
      fa,
      ap,
      da,
      sa,
      attachmentFamiliarity,
      relationship,
      relationshipSatisfaction,
      gender,
      intent,
    } = quizData

    const { faPercentage, apPercentage, daPercentage, saPercentage } = getPercentageResults({
      fa,
      da,
      ap,
      sa,
    })

    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/attachment-quiz-result`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        'attachment-familiarity': attachmentFamiliarity,
        gender,
        intent,
        'relationship-status': relationship,
        'relationship-satisfaction': relationshipSatisfaction,
        faPercentage,
        apPercentage,
        daPercentage,
        saPercentage,
      }),
    }).catch((error) => {
      console.error('Error saving quiz result:', error)
    })

    const route = determineRoute()
    router.push(route)
  }

  const baseTag = `attachment-quiz-${userStyle}`

  let additionalTag = ''

  if (userInfo?.relationshipStatus === 'No' && userStyle !== 'sa') {
    additionalTag = `single-${userStyle}`
  } else if (userInfo?.relationshipStatus === 'Yes') {
    additionalTag = `relationship-${userStyle}`
  }

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
