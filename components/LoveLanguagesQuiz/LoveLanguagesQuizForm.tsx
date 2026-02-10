'use client'

// components
import { IDefaultProps } from '..'
import { useLoveLanguagesQuiz } from './useLoveLanguagesQuiz'
import { RegistrationForm, TOnAfterSubmitArgs } from '../Forms/RegistrationForm'
import { gtag } from '../GoogleAdsTag'
import { TAnswerHistory } from './LoveLanguagesQuizQuestions'
import { TLoveLanguagesAssociation } from './config'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
// utils
import { getLoveLanguageSlug, getLoveLanguageText } from '@/utils/functions'

type TLoveLanguagesQuizData = {
  wordsOfAffirmation: number
  qualityTime: number
  actsOfService: number
  physicalTouch: number
  receivingGifts: number
}

interface ILoveLanguagesQuizFormProps extends IDefaultProps {
  result: TLoveLanguagesAssociation
  quizData: TLoveLanguagesQuizData
  answerHistory: TAnswerHistory[]
}

export const LoveLanguagesQuizForm = ({
  result,
  quizData,
  answerHistory,
}: ILoveLanguagesQuizFormProps) => {
  const { getPercentageResults, saveResult } = useLoveLanguagesQuiz()
  const FBQ = useFacebookPixel()

  const onAfterSubmit = ({ firstName, lastName, email }: TOnAfterSubmitArgs) => {
    gtag({
      event: 'form_tracking',
      eventCategory: 'Love Languages Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    gtag('event', 'conversion', {
      send_to: 'AW-696431615/_Wk5CMPg-8YCEP_niswC',
      love_language: getLoveLanguageText(result),
    })

    const {
      wordsOfAffirmationPercentage,
      qualityTimePercentage,
      actsOfServicePercentage,
      physicalTouchPercentage,
      receivingGiftsPercentage,
    } = getPercentageResults(quizData)

    if (firstName && lastName && email) {
      const eventId = crypto.randomUUID()

      FBQ?.trackLoveLanguagesQuizResult({
        loveLanguage: getLoveLanguageText(result),
        eventId,
      })

      saveResult({
        firstName,
        lastName,
        email,
        eventId,
        loveLanguage: getLoveLanguageText(result),
        wordsOfAffirmationPercentage,
        qualityTimePercentage,
        actsOfServicePercentage,
        physicalTouchPercentage,
        receivingGiftsPercentage,
        answerHistory,
      })
    }

    const loveLanguageSlug = getLoveLanguageSlug(result)
    window.location.href = `https://offer.personaldevelopmentschool.com/${loveLanguageSlug}`
  }

  return (
    <div className="max-w-5xl w-full text-center rounded-2xl mt-6 mx-2 p-2 xxs:p-3 xs:p-4 xxs:shadow-centered md:mx-4 md:p-8 lg:px-12 xl:px-16">
      <h3 className="font-bold font-sspb mx-4 text-center">
        Fill Out the Form Below to View Your Free Results!
      </h3>

      <RegistrationForm
        clientTag={`love-language-${result}`}
        submitButtonLabel="SUBMIT"
        userInfo={undefined}
        loveLanguage={result}
        onAfterSubmit={onAfterSubmit}
        disclaimer="By clicking Submit, I agree to receive email communication from the Personal Development School. Please be sure to check your Spam/Junk folder, and also mark it as safe so you don't miss anything."
      />

      <p className="font-effra mt-4">AND also get a free emailed report.</p>
    </div>
  )
}

export default LoveLanguagesQuizForm
