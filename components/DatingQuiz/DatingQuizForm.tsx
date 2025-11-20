'use client'

// core
import { useRouter } from 'next/navigation'
// components
import { IDefaultProps } from '..'
import { useDatingQuiz } from './useDatingQuiz'
import { RegistrationForm, TOnAfterSubmitArgs } from '../Forms/RegistrationForm'
import { gtag } from '../GoogleAdsTag'
import { TDatingStage, TAnswerHistory } from './DatingQuizQuestions'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
// utils
import { getDatingStageText, getDatingStageSlug } from '@/utils/functions'

interface IUserInfo {
  relationshipStatus: string
}

type TDatingQuizData = {
  dating: number
  powerStruggle: number
  rhythm: number
  devotion: number
}

interface IDatingQuizFormProps extends IDefaultProps {
  userInfo: IUserInfo
  datingStage: TDatingStage
  quizData: TDatingQuizData
  answerHistory: TAnswerHistory[]
}

export const DatingQuizForm = ({
  userInfo,
  datingStage,
  quizData,
  answerHistory,
}: IDatingQuizFormProps) => {
  const router = useRouter()
  const { getPercentageResults, saveResult } = useDatingQuiz()
  const FBQ = useFacebookPixel()

  const onAfterSubmit = ({ firstName, lastName, email }: TOnAfterSubmitArgs) => {
    gtag({
      event: 'form_tracking',
      eventCategory: 'Dating Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    gtag('event', 'conversion', {
      send_to: 'AW-696431615/_Wk5CMPg-8YCEP_niswC',
      dating_stage: getDatingStageText(datingStage),
    })

    const { datingPercentage, powerStrugglePercentage, rhythmPercentage, devotionPercentage } =
      getPercentageResults(quizData)

    if (firstName && lastName && email) {
      const eventId = crypto.randomUUID()

      FBQ?.trackDatingQuizResult({
        datingStage: getDatingStageText(datingStage),
        eventId,
      })

      saveResult({
        firstName,
        lastName,
        email,
        eventId,
        relationshipStatus: userInfo.relationshipStatus,
        dominantStage: getDatingStageText(datingStage),
        datingPercentage,
        powerStrugglePercentage,
        rhythmPercentage,
        devotionPercentage,
        answerHistory,
      })
    }

    router.push(
      `/six-dating-stages/results/${userInfo.relationshipStatus}/${getDatingStageSlug(datingStage)}`
    )
  }

  return (
    <div className="max-w-5xl w-full text-center rounded-2xl mt-6 mx-2 p-2 xxs:p-3 xs:p-4 xxs:shadow-centered md:mx-4 md:p-8 lg:px-12 xl:px-16">
      <h3 className="font-bold font-sspb mx-4 text-center">
        Fill Out the Form Below to View Your Free Results!
      </h3>

      <RegistrationForm
        clientTag={`dating-quiz-${userInfo.relationshipStatus}-${datingStage}`}
        submitButtonLabel="SUBMIT"
        userInfo={userInfo}
        datingStage={datingStage}
        onAfterSubmit={onAfterSubmit}
        disclaimer="By clicking Submit, I agree to receive email communication from the Personal Development School. Please be sure to check your Spam/Junk folder, and also mark it as safe so you don't miss anything."
      />
    </div>
  )
}

export default DatingQuizForm
