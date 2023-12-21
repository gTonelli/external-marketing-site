'use client'

// components
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Text } from '../Text/Text'
import { TQuizTheme } from './Quiz'
// libraries
import { Formik, Form, FormikHelpers, Field, useFormikContext } from 'formik'
import * as Yup from 'yup'
import { get } from 'lodash'

const quizValidationScehma = Yup.object()
const quizInitialValues = quizValidationScehma.cast({})

interface IQuizQuestionsProps {
  validationSchema?: any | (() => any)
  questions: string[]
  onSubmitQuiz: (values: any, formikHelpers: FormikHelpers<any>) => void
}

export const QuizQuestions = ({
  validationSchema = quizValidationScehma,
  onSubmitQuiz,
  questions,
}: IQuizQuestionsProps) => (
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
)

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

interface IQuizRadioGroup {
  question: string
  number: number | string
  theme?: TQuizTheme
}
