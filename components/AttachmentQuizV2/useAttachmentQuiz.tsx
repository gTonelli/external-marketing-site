'use client'

// core
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// components
import { TStyle } from '@/utils/types'
// config
import { defaultQuestionGroups, quizPillSelectOptions } from './config'
// libraries
import { IconName } from '@fortawesome/fontawesome-common-types'
import { isMobile } from 'react-device-detect'
import { Maybe } from 'yup'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { useGamAnalytics } from '@/modules/GAM'
import { useFacebookPixel } from '@/modules/FacebookPixel'
import { indexOf } from 'lodash'
import { Storage } from '@/modules/Storage'
// utils

export interface IQuizComponentDefaultArgs {
  readonly questionGroup?: IAttachmentStyleQuestionGroup | IUserDataGroup
  answerQuestion?: (question: TQuizQuestion, val: any) => void
}

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
  | 'FormInput'
  | 'OptionSelect'
  | 'AttachmentStyleQuestion'
  | 'PillSelect'

export type TQuizQuestion<T = TQuizQuestionType> = T extends 'FormInput'
  ? IQuizQuestionFormInput
  : T extends 'OptionSelect'
  ? IQuizQuestionOptionSelect
  : T extends 'AttachmentStyleQuestion'
  ? IQuizQuestionAttachmentStyle
  : IQuizQuestionPillSelect

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

export interface IAttachmentStyleQuestionGroup {
  readonly type: 'AttachmentStyleQuestions'
  questions: [
    TQuizQuestion<'AttachmentStyleQuestion'>,
    TQuizQuestion<'AttachmentStyleQuestion'>,
    TQuizQuestion<'AttachmentStyleQuestion'>,
    TQuizQuestion<'AttachmentStyleQuestion'>,
    TQuizQuestion<'AttachmentStyleQuestion'>,
    TQuizQuestion<'AttachmentStyleQuestion'>,
    TQuizQuestion<'AttachmentStyleQuestion'>
  ]
}

interface IUserDataGroup {
  readonly type: 'UserDataQuestions'
  questions: [
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'PillSelect'>,
    TQuizQuestion<'FormInput'>,
    TQuizQuestion<'FormInput'>
  ]
}

export type TQuizQuestions = [
  IAttachmentStyleQuestionGroup,
  IAttachmentStyleQuestionGroup,
  IAttachmentStyleQuestionGroup,
  IAttachmentStyleQuestionGroup,
  IUserDataGroup
]

export const useAttachmentQuiz = (questionGroups = defaultQuestionGroups) => {
  // =========== State ===========
  const [i, setIndex] = useState(0)
  const [currentQuestionGroup, setcurrentQuestionGroup] = useState<
    IAttachmentStyleQuestionGroup | IUserDataGroup
  >(questionGroups[0])
  // =========== Hooks ===========
  const router = useRouter()
  const { setUserData } = useGamAnalytics()
  const FBQ = useFacebookPixel()

  useEffect(() => {
    setcurrentQuestionGroup(questionGroups[i])
  }, [questionGroups, i])

  const length = questionGroups.length

  const getQuestionType = (question: TQuizQuestion): TQuizQuestionType => {
    if ((question as TQuizQuestion<'AttachmentStyleQuestion'>)?.association)
      return 'AttachmentStyleQuestion'
    if ((question as TQuizQuestion<'OptionSelect' | 'PillSelect'>)?.options)
      return (question as IQuizQuestionOptionSelect | IQuizQuestionPillSelect)?.type
    return 'FormInput'
  }

  const onGoBack = () => {
    if (i > 0) setIndex((prev) => prev - 1)
    else router.back()
  }

  const onGoToNextQuestion = () => {
    if (i < questionGroups.length - 1) {
      setIndex((prev) => prev + 1)
      scrollTo(0, 0)
    }
  }

  const parseQuizResultAdditionalData = () => {
    const data: TQuizResultData = {}
    questionGroups.forEach((group) => {
      group.questions.forEach((question) => {
        const questionType = getQuestionType(question)
        if (questionType !== 'OptionSelect' && questionType !== 'PillSelect') return
        const q = question as TQuizQuestion<'OptionSelect' | 'PillSelect'>
        data[q['data-key']] = q.userResponse
      })
    })

    return data
  }

  const saveAttachmentResult = (userData: Maybe<TUserData>) => {
    if (!userData?.email) return
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
    const userDataGroup = questionGroups.find((i) => i.type === 'UserDataQuestions')
    const email = userDataGroup?.questions.find(
      (i) => (i as TQuizQuestion<'FormInput'>)?.formInputData?.autocomplete === 'email'
    )?.userResponse as string | undefined
    const name = userDataGroup?.questions.find(
      (i) => (i as TQuizQuestion<'FormInput'>)?.formInputData?.autocomplete === 'name'
    )?.userResponse as string | undefined
    if (typeof email !== 'string' || typeof name !== 'string') return
    const [firstName, lastName] = name?.split(' ')
    Storage.set('userFullName', name)
    FBQ?.trackLead({
      email: email,
    })
    setUserData({ email, firstName, userStyle: dominantStyle })
    Mixpanel.track.SignUp({ distinct_id: email })

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
      })
      .catch((error) => {
        console.error(error)
      })

    return { firstName, lastName, email }
  }

  const endQuiz = useCallback(() => {
    Mixpanel.track.QuizFinished({ quiz_name: 'Main Funnel Quiz' })

    const result = { fa: 0, ap: 0, da: 0, sa: 0 }

    questionGroups.forEach((group) => {
      group.questions.forEach((question) => {
        if (getQuestionType(question) === 'AttachmentStyleQuestion') {
          result[(question as TQuizQuestion<'AttachmentStyleQuestion'>).association] +=
            typeof question?.userResponse === 'string' ? parseFloat(question.userResponse) : 0
        }
      })
    })

    const { fa, ap, da, sa } = result
    const total = fa + ap + da + sa
    const percentages = [
      Math.floor((fa / total) * 100),
      Math.floor((ap / total) * 100),
      Math.floor((da / total) * 100),
      Math.floor((sa / total) * 100),
    ]
    const totalPercentage = percentages.reduce((prev, curr) => prev + curr)
    const { highest, dominantStyle } = getDominantStyle(percentages)
    const difference = 100 - totalPercentage
    percentages[indexOf(percentages, highest)] += difference

    const [faPercentage, apPercentage, daPercentage, saPercentage] = percentages

    const url =
      dominantStyle === 'fa'
        ? `/quiz/v2/result/${dominantStyle}/${faPercentage}/${apPercentage}/${daPercentage}/${saPercentage}`
        : `/quiz/${dominantStyle}`

    const userData = registerUser(dominantStyle)
    saveAttachmentResult({ ...userData, faPercentage, apPercentage, daPercentage, saPercentage })
    router.push(url)
  }, [questionGroups, router])

  const answerQuestion = (question: TQuizQuestion, val: any) => {
    question.userResponse = val
  }

  const trackProgressMobile = useCallback(() => {
    const progress = (i / questionGroups.length) * 100
    if (document.visibilityState === 'hidden' && progress < 100) {
      Mixpanel.track.QuizProgress({
        quiz_name: 'Main Funnel Quiz',
        progress: `${Math.round(progress)}%`,
        question: i,
        total_questions: questionGroups.length,
      })
    }
  }, [i, questionGroups.length])

  const trackProgressDesktop = useCallback(() => {
    const progress = (i / questionGroups.length) * 100
    if (progress < 100) {
      Mixpanel.track.QuizProgress({
        quiz_name: 'Main Funnel Quiz',
        progress: `${Math.round(progress)}%`,
        question: i,
        total_questions: questionGroups.length,
      })
    }
  }, [i, questionGroups.length])

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
    onGoBack,
    onGoToNextQuestion,
    endQuiz,
    getQuestionType,
    currentQuestionGroup,
    index: i,
    length,
  }
}

const getDominantStyle = (percentages: number[]): { highest: number; dominantStyle: TStyle } => {
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
