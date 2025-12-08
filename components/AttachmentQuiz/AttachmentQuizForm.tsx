'use client'

//core
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
// components
import { IResultProps, IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm, TOnAfterSubmitArgs } from '../Forms/RegistrationForm'
import { useAttachmentQuiz } from '../AttachmentQuizV2/useAttachmentQuiz'
import { gtag } from '../GoogleAdsTag'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
// utils
import { TStyle } from '@/utils/types'
import { getAttachmentStyleText, getSplitTest } from '@/utils/functions'

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
  const [isVariant, setIsVariant] = useState(false)
  const { getPercentageResults, saveResult } = useAttachmentQuiz()
  const FBQ = useFacebookPixel()

  useEffect(() => {
    if (quiz_traffic_source === 'paidGoogle' && userStyle === 'fa') {
      setIsVariant(
        getSplitTest({
          key: 'gm-2270-fa-ip-test',
          experimentName: 'GM-2270-FA-Instapage-Test',
          variantRatio: 0.5,
          useCookies: true,
        })
      )
    }
  }, [quiz_traffic_source, userStyle])

  // ==================== Events ====================
  const determineRoute = () => {
    switch (quiz_traffic_source) {
      case 'organic':
        return `/results/${userStyle}`

      case 'paidGoogle':
        if (isVariant) {
          return 'https://offer.personaldevelopmentschool.com/fa-results'
        }

        if (userStyle === 'fa') {
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

    const { faPercentage, apPercentage, daPercentage, saPercentage, dominantStyle } =
      getPercentageResults({
        fa,
        da,
        ap,
        sa,
      })

    if (firstName && lastName && email) {
      const eventId = crypto.randomUUID()

      FBQ?.trackAttachmentQuizResult({
        attachmentStyle: getAttachmentStyleText(userStyle),
        eventId,
      })

      saveResult({
        firstName,
        lastName,
        email,
        eventId,
        attachmentFamiliarity,
        gender,
        intent,
        relationship,
        relationshipSatisfaction,
        dominantStyle: getAttachmentStyleText(dominantStyle),
        faPercentage,
        apPercentage,
        daPercentage,
        saPercentage,
      })
    }

    const route = determineRoute()
    if (isVariant) {
      window.location.href = route
    } else {
      router.push(route)
    }
  }

  let clientTags = [`attachment-quiz-${userStyle}`]
  if (isVariant) {
    clientTags.push('healing-fa')
  }

  return (
    <section className="flex justify-center">
      <div className="max-w-5xl w-full text-center rounded-2xl mt-6 mx-2 p-2 xxs:p-3 xs:p-4 xxs:shadow-centered md:mx-4 md:p-8 lg:px-12 xl:px-16">
        <h2 className="font-bold font-sspb mx-4 text-center">
          Fill Out the Form Below to View Your Free Results!
        </h2>

        {/* QUIZ COMPLETION FORM */}
        <RegistrationForm
          clientTag={clientTags.join(',')}
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
