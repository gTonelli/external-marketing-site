import { TStyle } from '@/utils/types'
import { IconName } from '@fortawesome/fontawesome-common-types'
import { defaultQuestions, quizPillSelectOptions } from './config'
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { indexOf } from 'lodash'

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
  readonly options: TOptions
}

interface IQuizQuestionAttachmentStyle extends IQuestionRequiredProps {
  readonly association: TStyle
}

interface IQuizQuestionPillSelect extends IQuestionRequiredProps {
  readonly type: 'PillSelect'
  readonly options: typeof quizPillSelectOptions
}

type TAnswerQuestionArgs = string[] | string | Date | TPossibleQuizQuestionValues

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
  TQuizQuestion<'Screen'>,
  TQuizQuestion<'PillSelect'>,
  TQuizQuestion<'OptionSelect'>,
  TQuizQuestion<'Screen'>,
  ...TQuizQuestion<'AttachmentStyleQuestion'>[],
  TQuizQuestion<'OptionSelect'>,
  TQuizQuestion<'Screen'>,
  TQuizQuestion<'LoadingScreen'>
]

export const useAttachmentQuiz = (questions: TQuizQuestions = defaultQuestions) => {
  // =========== State ===========
  const [i, setIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState<TQuizQuestion>(questions[0])
  const [currentQuestionType, setCurrentQuestionType] = useState<TQuizQuestionType>('Screen')
  // =========== Hooks ===========
  const router = useRouter()

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

    const [i, j, k, l] = percentages
    const url = `/quiz/v2/result/${dominantStyle}/${i}/${j}/${k}/${l}`
    router.prefetch(url)
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

const getHighest = (percentages: number[]) => {
  let highest = percentages[0]
  const styles = ['fa', 'ap', 'da', 'sa']
  let dominantStyle = 'fa'
  for (const n of percentages) {
    if (n > highest) {
      highest = n
      dominantStyle = styles[n]
    }
  }
  return { highest, dominantStyle }
}
