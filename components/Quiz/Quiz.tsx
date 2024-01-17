'use client'

// core
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
// components
import { Button } from '../Button/Button'
import { Section } from '../Section'
import { Loader } from '../Loader'
// libraries
import { FormikHelpers } from 'formik'
import * as Yup from 'yup'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { useGoogleTagManager } from '@/modules/GTM'

const quizValidationScehma = Yup.object()

const QuizQuestions = dynamic(() => import('./QuizQuestions').then((mod) => mod.QuizQuestions), {
  loading: () => <Loader />,
})

const QuizForm = dynamic(() => import('./QuizForm').then((mod) => mod.QuizForm), {
  loading: () => <Loader />,
})

const QuizResult = dynamic(() => import('./QuizResult').then((mod) => mod.QuizResult), {
  loading: () => <Loader />,
})

export const Quiz = ({
  questions,
  outputs,
  theme = 'primary',
  validationSchema = quizValidationScehma,
  quizName,
}: IQuizProps) => {
  // ============ Hooks ===============
  const tagManager = useGoogleTagManager()

  // ============= State ==============
  const [quizState, setQuizState] = useState<TQuizStates>('preQuiz')
  const [result, setResult] = useState(0)

  const onStartQuiz = () => {
    Mixpanel.track.QuizStarted({ quiz_name: quizName })
    setQuizState('quiz')
  }

  const onSubmitQuiz = (values: any, formikHelpers: FormikHelpers<any>) => {
    let result = 0
    Object.keys(values).map((key) => {
      result += parseFloat(values[key])
    })

    setResult(result)
    setQuizState('quizForm')

    Mixpanel.track.QuizFinished({ quiz_name: quizName })

    formikHelpers.setSubmitting(false)
  }

  const onAfterSubmit = () => {
    tagManager?.track({
      event: 'form_tracking',
      eventCategory: 'Codependency Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    const url = getResult(result, outputs).reportUrl
    if (url) {
      window.location.assign(url)
    } else {
      setQuizState('quizResults')
    }
  }

  return (
    <Section>
      {quizState === 'preQuiz' ? (
        <Button
          // @import !border-primary !bg-orange-secondary !border-orange-secondary !text-orange-secondary
          className={`!bg-${theme} !border-${theme}`}
          label="START QUIZ"
          onClick={onStartQuiz}
        />
      ) : quizState === 'quiz' ? (
        <QuizQuestions
          questions={questions}
          validationSchema={validationSchema}
          onSubmitQuiz={onSubmitQuiz}
        />
      ) : quizState === 'quizForm' ? (
        <QuizForm outputs={outputs} onAfterSubmit={onAfterSubmit} result={result} />
      ) : (
        <QuizResult outputs={outputs} result={result} />
      )}
    </Section>
  )
}

// TYPES

type TQuizStates = 'preQuiz' | 'quiz' | 'quizForm' | 'quizResults'

export type TQuizTheme = 'primary' | 'orange-secondary'

export interface IQuizProps {
  questions: string[]
  quizName: string
  outputs: IQuizOutputs[]
  theme?: TQuizTheme
  validationSchema?: any | (() => any)
}

export interface IQuizOutputs {
  min: number
  max: number
  clientTag?: string
  report: string[]
  reportUrl?: string
}

export const getResult = (result: number, outputs: IQuizOutputs[]) => {
  const output = outputs.find((i) => (result >= i.min && result < i.max) || result === i.max)

  return (
    output || {
      clientTag: outputs[outputs.length - 1].clientTag,
      report: outputs[outputs.length - 1].report,
      reportUrl: outputs[outputs.length - 1].reportUrl,
    }
  )
}
