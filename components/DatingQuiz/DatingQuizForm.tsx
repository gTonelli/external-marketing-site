'use client'

// core
import { useRouter } from 'next/navigation'
// components
import { IDefaultProps } from '..'
// libraries
import { RegistrationForm, TOnAfterSubmitArgs } from '../Forms/RegistrationForm'
import { gtag } from '../GoogleAdsTag'
import { useDatingQuiz } from './useDatingQuiz'
import { getDatingStageText, getDatingStageSlug } from '@/utils/functions'
import { TDatingStage, TAnswerHistory } from './DatingQuizQuestions'

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

    if (firstName && lastName && email)
      saveResult({
        firstName,
        lastName,
        email,
        relationshipStatus: userInfo.relationshipStatus,
        datingPercentage,
        powerStrugglePercentage,
        rhythmPercentage,
        devotionPercentage,
        answerHistory,
      })

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
      />
    </div>
  )
}

export default DatingQuizForm
