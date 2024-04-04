import { TStyle } from '@/utils/types'
import { IconName } from '@fortawesome/fontawesome-common-types'
import { defaultQuestions, quizPillSelectOptions } from './config'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { indexOf } from 'lodash'
import Mixpanel from '@/modules/Mixpanel'
import { useGamAnalytics } from '@/modules/GAM'
import { useFacebookPixel } from '@/modules/FacebookPixel'
import { isMobile } from 'react-device-detect'
import { Maybe } from 'yup'

export type TPossibleQuizQuestionValues = 0 | 0.5 | 1

interface IQuestionRequiredProps {
  heading: string | JSX.Element
  readonly subheading?: string | JSX.Element
  readonly onAnswerQuestion?: () => void
  userResponse?: TAnswerQuestionArgs
}

type TFormInputData = {
  readonly type: 'text' | 'email' | 'number'
  readonly autocomplete: 'name' | 'email' | 'age'
  readonly placeholder: string
}

type TOptionSelectData = {
  readonly heading?: string
  readonly iconName: IconName
  readonly value: string | TPossibleQuizQuestionValues
  readonly subheading?: string
}

type TLoadingScreen = {
  readonly heading: string | JSX.Element
  readonly duration: number
}

type TQuizResultDataKeys =
  | 'quiz-discovery-method'
  | 'relationship-satisfaction'
  | 'focus-areas'
  | 'relationship-status'
  | 'gender'
  | 'attachment-knowledge'
  | 'learning-style'

type TQuizResultData = {
  [key in TQuizResultDataKeys]?: TAnswerQuestionArgs
}

export type TOptions =
  | [TOptionSelectData, TOptionSelectData, TOptionSelectData]
  | [TOptionSelectData, TOptionSelectData, TOptionSelectData, TOptionSelectData, TOptionSelectData]

export type TQuizQuestionType =
  | 'Screen'
  | 'FormInput'
  | 'OptionSelect'
  | 'AttachmentStyleQuestion'
  | 'PillSelect'
  | 'LoadingScreen'

export type TQuizQuestion<T = TQuizQuestionType> = T extends 'Screen'
  ? IQuizQuestionScreen
  : T extends 'FormInput'
  ? IQuizQuestionFormInput
  : T extends 'OptionSelect'
  ? IQuizQuestionOptionSelect
  : T extends 'AttachmentStyleQuestion'
  ? IQuizQuestionAttachmentStyle
  : T extends 'LoadingScreen'
  ? IQuizQuestionLoadingScreen
  : IQuizQuestionPillSelect

interface IQuizQuestionScreen extends IQuestionRequiredProps {
  readonly imgSrc?: string
  readonly duration?: number
  readonly headingConstructor?: () => string | void
}

interface IQuizQuestionLoadingScreen extends IQuestionRequiredProps {
  readonly screens: TLoadingScreen[]
  readonly duration: number
}

interface IQuizQuestionFormInput extends IQuestionRequiredProps {
  readonly formInputData: TFormInputData
}

interface IQuizQuestionOptionSelect extends IQuestionRequiredProps {
  readonly type: 'OptionSelect'
  readonly 'data-key': TQuizResultDataKeys
  readonly options: TOptions
}

interface IQuizQuestionAttachmentStyle extends IQuestionRequiredProps {
  readonly association: TStyle
}

interface IQuizQuestionPillSelect extends IQuestionRequiredProps {
  readonly type: 'PillSelect'
  readonly 'data-key': TQuizResultDataKeys
  readonly options: typeof quizPillSelectOptions
}

type TAnswerQuestionArgs = string | string[] | number | TPossibleQuizQuestionValues

type TUserData = {
  firstName?: string
  lastName?: string
  email?: string
  faPercentage: number
  apPercentage: number
  daPercentage: number
  saPercentage: number
}

export interface IQuizComponentDefaultArgs<T = TQuizQuestionType> {
  readonly question: TQuizQuestion<T>
  answerQuestion?: (val: TAnswerQuestionArgs) => void
}

export type TQuizQuestions = [
  TQuizQuestion<'Screen'>,
  TQuizQuestion<'FormInput'>,
  TQuizQuestion<'Screen'>,
  TQuizQuestion<'FormInput'>,
  TQuizQuestion<'OptionSelect'>,
  TQuizQuestion<'Screen'>,
  TQuizQuestion<'Screen'>,
  TQuizQuestion<'FormInput'>,
  TQuizQuestion<'OptionSelect'>,
  TQuizQuestion<'OptionSelect'>,
  TQuizQuestion<'OptionSelect'>,
  TQuizQuestion<'Screen'>,
  TQuizQuestion<'PillSelect'>,
  TQuizQuestion<'OptionSelect'>,
  TQuizQuestion<'Screen'>,
  ...TQuizQuestion<'AttachmentStyleQuestion'>[],
  TQuizQuestion<'OptionSelect'>,
  TQuizQuestion<'LoadingScreen'>
]

export const useAttachmentQuiz = (questions: TQuizQuestions = defaultQuestions) => {
  // =========== State ===========
  const [i, setIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<TQuizQuestion>(questions[0])
  const [currentQuestionType, setCurrentQuestionType] = useState<TQuizQuestionType>('Screen')
  // =========== Hooks ===========
  const router = useRouter()
  const { setUserData } = useGamAnalytics()
  const FBQ = useFacebookPixel()

  const length = questions.length

  const getQuestionType = useCallback(
    (index = i): TQuizQuestionType => {
      const question = questions[index]
      if ((question as TQuizQuestion<'AttachmentStyleQuestion'>)?.association)
        return 'AttachmentStyleQuestion'
      if ((question as TQuizQuestion<'FormInput'>)?.formInputData) return 'FormInput'
      if ((question as TQuizQuestion<'LoadingScreen'>)?.screens) return 'LoadingScreen'
      if ((question as TQuizQuestion<'OptionSelect' | 'PillSelect'>)?.options)
        return (question as IQuizQuestionOptionSelect | IQuizQuestionPillSelect)?.type
      return 'Screen'
    },
    [i, questions]
  )

  const onGoBack = () => {
    if (i > 0) setIndex((prev) => prev - 1)
  }

  const onGoToNextQuestion = () => {
    if (i + 1 > questions.length - 1) return
    else setIndex((prev) => prev + 1)
  }

  const parseQuizResultAdditionalData = () => {
    const data: TQuizResultData = {}
    questions.forEach((question, k) => {
      const questionType = getQuestionType(k)
      if (questionType !== 'OptionSelect' && questionType !== 'PillSelect') return
      const q = question as TQuizQuestion<'OptionSelect' | 'PillSelect'>
      data[q['data-key']] = q.userResponse
    })

    return data
  }

  const saveAttachmentResult = (userData: Maybe<TUserData>) => {
    if (!userData?.email) return
    // Strapi DB record creation
    const data = parseQuizResultAdditionalData()

    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/save-attachment-quiz-result', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, ...userData }),
    })
  }

  const registerUser = (dominantStyle: TStyle) => {
    const email = questions.find(
      (i) => (i as TQuizQuestion<'FormInput'>)?.formInputData?.autocomplete === 'email'
    )?.userResponse as string | undefined
    const name = questions.find(
      (i) => (i as TQuizQuestion<'FormInput'>)?.formInputData?.autocomplete === 'name'
    )?.userResponse as string | undefined
    if (typeof email !== 'string' || typeof name !== 'string') return
    const [firstName, lastName] = name?.split(' ')
    FBQ?.trackLead({
      email: email,
    })
    setUserData({ email, firstName, userStyle: dominantStyle })

    const requestBody = {
      tags: [`attachment-quiz-${dominantStyle}`],
      firstName,
      lastName,
      email,
      listIds: [2],
    }

    fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) throw res?.message || 'An unexpected error occured'
        else {
          Mixpanel.track.SignUp({ distinct_id: email })
        }
      })
      .catch((error) => {
        console.error(error)
      })

    return { firstName, lastName, email }
  }

  const endQuiz = useCallback(() => {
    const { fa, ap, da, sa } = questions.reduce(
      (prev, curr, index) => {
        if (getQuestionType(index) === 'AttachmentStyleQuestion') {
          const question = curr as TQuizQuestion<'AttachmentStyleQuestion'>
          prev[question.association] +=
            typeof curr.userResponse === 'number' ? curr.userResponse : 0
        }
        return prev
      },
      { fa: 0, ap: 0, da: 0, sa: 0 }
    )

    const total = fa + ap + da + sa
    const percentages = [
      Math.floor((fa / total) * 100),
      Math.floor((ap / total) * 100),
      Math.floor((da / total) * 100),
      Math.floor((sa / total) * 100),
    ]
    const totalPercentage = percentages.reduce((prev, curr) => prev + curr)
    const { highest, dominantStyle } = getHighest(percentages)
    const difference = 100 - totalPercentage
    percentages[indexOf(percentages, highest)] += difference

    const [faPercentage, apPercentage, daPercentage, saPercentage] = percentages
    const url =
      dominantStyle === 'fa'
        ? `/quiz/v2/result/${dominantStyle}/${faPercentage}/${apPercentage}/${daPercentage}/${saPercentage}`
        : `/quiz/${dominantStyle}`
    router.prefetch(url)
    const userData = registerUser(dominantStyle)

    saveAttachmentResult({ ...userData, faPercentage, apPercentage, daPercentage, saPercentage })

    return url
  }, [getQuestionType, questions, router])

  useEffect(() => {
    setCurrentQuestion(questions[i])
    setCurrentQuestionType(getQuestionType())
  }, [getQuestionType, i, questions])

  const answerQuestion = (val: TAnswerQuestionArgs) => {
    questions[i].userResponse = val
    onGoToNextQuestion()
  }

  const trackProgressMobile = useCallback(() => {
    const progress = (i / questions.length) * 100
    if (document.visibilityState === 'hidden' && progress < 100) {
      Mixpanel.track.QuizProgress({
        quiz_name: 'Main Funnel Quiz',
        progress: `${Math.round(progress)}%`,
        question: i,
        total_questions: questions.length,
      })
    }
  }, [i, questions.length])

  const trackProgressDesktop = useCallback(() => {
    const progress = (i / questions.length) * 100
    if (progress < 100) {
      Mixpanel.track.QuizProgress({
        quiz_name: 'Main Funnel Quiz',
        progress: `${Math.round(progress)}%`,
        question: i,
        total_questions: questions.length,
      })
    }
  }, [i, questions.length])

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('visibilitychange', trackProgressMobile)
    } else {
      window.addEventListener('pagehide', trackProgressDesktop)
    }

    return () => {
      window.removeEventListener('visibilitychange', trackProgressMobile)
      window.removeEventListener('pagehide', trackProgressDesktop)
    }
  }, [i, trackProgressMobile, trackProgressDesktop])

  return {
    answerQuestion,
    currentQuestion,
    index: i,
    length,
    currentQuestionType,
    onGoBack,
    onGoToNextQuestion,
    endQuiz,
  }
}

const getHighest = (percentages: number[]): { highest: number; dominantStyle: TStyle } => {
  let highest = percentages[0]
  const styles = ['fa', 'ap', 'da', 'sa'] as const
  let dominantStyle: TStyle = 'fa'
  for (const n of percentages) {
    if (n > highest) {
      highest = n
      dominantStyle = styles[percentages.indexOf(n)]
    }
  }
  return { highest, dominantStyle }
}
