/* eslint-disable @typescript-eslint/no-use-before-define */
// core
import React, { useState } from 'react'
// components
import { Button } from './Button/Button'
import { Input } from './Input/Input'
import { Text } from './Text/Text'
import { RegistrationForm } from './RegistrationForm'
import { Section } from './Section'
// libraries
import { Field, Form, Formik, FormikHelpers, useFormikContext } from 'formik'
import * as Yup from 'yup'
import { get } from 'lodash'
import Mixpanel from '@/modules/Mixpanel'

const quizValidationScehma = Yup.object()
const quizInitialValues = quizValidationScehma.cast({})

export const Quiz = ({
  questions,
  outputs,
  theme = 'primary',
  validationSchema = quizValidationScehma,
  quizName,
}: IQuizProps) => {
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
          // @import !bg-blue-lightest !bg-orange-secondary !border-orange-secondary !border-blue-lightest !text-blue-lightest !text-orange-secondary
          className={`!bg-${theme} !border-${theme} ${theme === 'blue-lightest' && 'text-black'}`}
          label="START QUIZ"
          onClick={onStartQuiz}
        />
      ) : quizState === 'quiz' ? (
        <Formik
          initialValues={quizInitialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmitQuiz}>
          <Form>
            {questions.map((question, i) => (
              <QuizRadioGroup
                key={`question_group_${i + 1}`}
                number={i + 1}
                question={question}
                // theme={theme}
              />
            ))}

            <Button.Submit label="Submit" />
          </Form>
        </Formik>
      ) : quizState === 'quizForm' ? (
        <div className="w-full rounded-20 shadow-center-light bg-white max-w-lg mx-auto py-4">
          <Text.Heading content="Fill Out the Form Below to View Your Results" size={3} />

          <RegistrationForm
            clientTag={getResult(result, outputs).clientTag}
            onAfterSubmit={onAfterSubmit}
          />
        </div>
      ) : (
        <div className="max-w-screen-lg mx-auto">
          <Text.Heading content="Your Result:" />

          {getResult(result, outputs).report.map((text, i) => (
            <Text.Paragraph
              key={`report_text_${i}`}
              className="text-left my-4 !text-lg"
              content={text}
            />
          ))}
        </div>
      )}
    </Section>
  )
}

const QuizRadioGroup = ({ number, question, theme = 'primary' }: IQuizRadioGroup) => {
  const { errors, submitCount } = useFormikContext()
  const error = submitCount > 0 && get(errors, `question_${number}`)

  return (
    <div className="relative">
      <Text.Paragraph
        className="text-left xxs:text-lg md:text-center lg:font-medium"
        content={number + '. ' + question}
      />

      <Field
        className="grid grid-cols-4 gap-4 items-stretch text-center max-w-xs mx-auto mt-4 mb-7"
        component="div"
        name={`question_${number}`}>
        <div className="flex flex-col">
          <Input
            classNameInput={`block !w-10 !h-10 !text-${theme} lg:cursor-pointer`}
            id={`question_${number}_input_0`}
            name={`question_${number}`}
            type="radio"
            value={0}
          />

          <label className="text-sm lg:cursor-pointer" htmlFor={`question_${number}_input_0`}>
            Strongly Disagree
          </label>
        </div>

        <div className="flex flex-col">
          <Input
            classNameInput={`block !w-10 !h-10 !text-${theme} lg:cursor-pointer`}
            id={`question_${number}_input_1`}
            name={`question_${number}`}
            type="radio"
            value={0.33}
          />

          <label
            className="text-sm flex-grow lg:cursor-pointer"
            htmlFor={`question_${number}_input_1`}>
            Disagree
          </label>
        </div>

        <div className="flex flex-col">
          <Input
            classNameInput={`block !w-10 !h-10 !text-${theme} lg:cursor-pointer`}
            id={`question_${number}_input_2`}
            name={`question_${number}`}
            type="radio"
            value={0.67}
          />

          <label
            className="text-sm flex-grow lg:cursor-pointer"
            htmlFor={`question_${number}_input_2`}>
            Agree
          </label>
        </div>

        <div className="flex flex-col">
          <Input
            classNameInput={`block !w-10 !h-10 !text-${theme} lg:cursor-pointer`}
            id={`question_${number}_input_3`}
            name={`question_${number}`}
            type="radio"
            value={1}
          />

          <label className="text-sm lg:cursor-pointer" htmlFor={`question_${number}_input_3`}>
            Strongly Agree
          </label>
        </div>
      </Field>

      {error && (
        <Text className="w-full absolute -bottom-5 text-danger text-center" content={error} />
      )}
    </div>
  )
}

// TYPES

type TQuizStates = 'preQuiz' | 'quiz' | 'quizForm' | 'quizResults'

export type TQuizTheme = 'primary' | 'orange-secondary' | 'blue-lightest'

interface IQuizProps {
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

interface IQuizRadioGroup {
  question: string
  number: number | string
  theme?: TQuizTheme
}

const getResult = (result: number, outputs: IQuizOutputs[]) => {
  const output = outputs.find((i) => (result >= i.min && result < i.max) || result === i.max)

  return (
    output || {
      clientTag: outputs[outputs.length - 1].clientTag,
      report: outputs[outputs.length - 1].report,
      reportUrl: outputs[outputs.length - 1].reportUrl,
    }
  )
}
