'use client'

//core
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
// components
import { IResultProps, IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm, TOnAfterSubmitArgs } from '../Forms/RegistrationForm'
import { useAttachmentQuiz } from '../AttachmentQuizV2/useAttachmentQuiz'
import { gtag } from '../GoogleAdsTag'
import { RecaptchaNotice } from '../RecaptchaNotice'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
// utils
import { TStyle } from '@/utils/types'
import { getAttachmentStyleText, getSplitTest } from '@/utils/functions'
import { googleAdsConversion } from '@/utils/constants'

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
  const { getPercentageResults, saveResult } = useAttachmentQuiz()
  const FBQ = useFacebookPixel()
  const [is21DayVariant, setIs21DayVariant] = useState(false)

  useEffect(() => {
    if (quiz_traffic_source === 'paidGoogle' && userStyle === 'fa') {
      setIs21DayVariant(
        getSplitTest({
          useCookies: true,
          key: 'gm-2535-21-day-reset-test',
          experimentName: 'GM-2535-21-Day-Reset-Test',
          variantRatio: 0.2,
        })
      )
    }
  }, [])

  // ==================== Events ====================
  const determineRoute = () => {
    switch (quiz_traffic_source) {
      case 'organic':
        return `/results/${userStyle}`

      case 'paidGoogle':
        if (userStyle === 'fa' || userStyle === 'da') {
          return `/quiz/results/b/${userStyle}`
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
      send_to: googleAdsConversion.lead,
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
        userStyle,
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

    if (is21DayVariant && userStyle === 'fa') {
      setTimeout(
        () =>
          (window.location.href = 'https://offer.personaldevelopmentschool.com/fa-21-day-reset'),
        2000
      )
    } else {
      const route = determineRoute()
      router.push(route)
    }
  }

  const tags = [`attachment-quiz-${userStyle}`]
  if (quiz_traffic_source === 'paidGoogle' && (userStyle === 'fa' || userStyle === 'da')) {
    tags.push(`attachment-quiz-${userStyle}-google`)
  }

  if (is21DayVariant) tags.push(`fa-21-reset`)

  return (
    <section className="flex justify-center">
      <div className="max-w-5xl w-full text-center rounded-2xl mt-6 mx-2 p-2 xxs:p-3 xs:p-4 xxs:shadow-centered md:mx-4 md:p-8 lg:px-12 xl:px-16">
        <h2 className="font-bold font-sspb mx-4 text-center">
          Fill Out the Form Below to View Your Free Results!
        </h2>

        {/* QUIZ COMPLETION FORM */}
        <RegistrationForm
          showRecaptchaNotice={false}
          clientTag={tags.join(',')}
          submitButtonLabel="SEE MY RESULTS"
          userInfo={userInfo}
          userStyle={userStyle}
          onAfterSubmit={onAfterSubmit}
        />

        <p className="font-effra mt-4">AND also get a free emailed report.</p>

        <RecaptchaNotice className="text-center" />
      </div>
    </section>
  )
}
