'use client'

// core
import { useState, useEffect } from 'react'
// components
import { IDefaultProps } from '..'
import { useLoveLanguagesQuiz } from './useLoveLanguagesQuiz'
import { RegistrationForm, TOnAfterSubmitArgs } from '../Forms/RegistrationForm'
import { gtag } from '../GoogleAdsTag'
import { TAnswerHistory } from './LoveLanguagesQuizQuestions'
import { TLoveLanguagesAssociation } from './config'
import { RecaptchaNotice } from '../RecaptchaNotice'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
// utils
import {
  getLoveLanguageSlug,
  getLoveLanguageText,
  getLoveLanguageVideoSlug,
  getLoveLanguageVideoVariantSlug,
  getLoveLanuageVariantSlug,
  getSplitTest,
} from '@/utils/functions'

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
  videoVariant?: boolean
}

export const LoveLanguagesQuizForm = ({
  result,
  quizData,
  videoVariant,
  answerHistory,
}: ILoveLanguagesQuizFormProps) => {
  const [isVariant, setIsVariant] = useState(false)
  const [isVideoVariant, setIsVideoVariant] = useState(false)
  const { getPercentageResults, saveResult } = useLoveLanguagesQuiz()
  const FBQ = useFacebookPixel()

  useEffect(() => {
    if (videoVariant) {
      setIsVideoVariant(
        getSplitTest({
          key: 'gm-2485-llqv-checkout-test',
          experimentName: 'GM-2485-LLQV-Checkout-Test',
          props: { loveLanguage: result },
        })
      )
    } else {
      setIsVariant(
        getSplitTest({
          key: 'gm-2425-llq-checkout-test',
          experimentName: 'GM-2425-LLQ-Checkout-Test',
          props: { loveLanguage: result },
        })
      )
    }
  }, [])

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

    const loveLanguageSlug = videoVariant
      ? isVideoVariant
        ? getLoveLanguageVideoVariantSlug(result)
        : getLoveLanguageVideoSlug(result)
      : isVariant
        ? getLoveLanuageVariantSlug(result)
        : getLoveLanguageSlug(result)
    window.location.href = `https://offer.personaldevelopmentschool.com/${loveLanguageSlug}`
  }

  const tags = [`love-language-${result}`]

  if (videoVariant && isVideoVariant) {
    tags.push(`llq-v-${result}-179`)
  } else if (videoVariant) {
    tags.push(`llq-v-${result}`)
  } else if (isVariant) {
    tags.push(`llq-${result}-179`)
  }

  return (
    <div className="max-w-5xl w-full text-center rounded-2xl mt-6 mx-2 p-2 xxs:p-3 xs:p-4 xxs:shadow-centered md:mx-4 md:p-8 lg:px-12 xl:px-16">
      <h3 className="font-bold font-sspb mx-4 text-center">
        Fill Out the Form Below to View Your Free Results!
      </h3>

      <RegistrationForm
        showRecaptchaNotice={false}
        clientTag={tags.join(',')}
        submitButtonLabel="SUBMIT"
        userInfo={undefined}
        loveLanguage={result}
        onAfterSubmit={onAfterSubmit}
        disclaimer="By clicking Submit, I agree to receive email communication from the Personal Development School. Please be sure to check your Spam/Junk folder, and also mark it as safe so you don't miss anything."
      />

      <p className="font-effra mt-4">AND also get a free emailed report.</p>

      <RecaptchaNotice className="text-center" />
    </div>
  )
}

export default LoveLanguagesQuizForm
