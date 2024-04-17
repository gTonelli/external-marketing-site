// components
import { IQuizComponentDefaultArgs, TQuizQuestions } from './useAttachmentQuiz'
import { AttachmentQuizV2RadioInput } from './AttachmentQuizV2RadioInput'
import { Button } from '../Button/Button'
// libraries
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { orderBy } from 'lodash'

interface IAttachmentQuizV2QuizQuestionProps extends Required<IQuizComponentDefaultArgs> {
  onSubmitted: () => void
}

export const AttachmentQuizV2QuizQuestionGroup = ({
  questionGroup,
  answerQuestion,
  onSubmitted,
}: IAttachmentQuizV2QuizQuestionProps) => {
  const onSubmit = (values: IQuizQuestionFormSchema) => {
    orderBy(Object.keys(values)).forEach((key, i) => {
      answerQuestion(questionGroup.questions[i], values[key as keyof IQuizQuestionFormSchema])
    })
    console.log('Submitting')
    onSubmitted()
  }

  return (
    <Formik
      initialValues={quizQuestionFormInitialValues}
      validationSchema={QuizQuestionFormValidationSchema}
      onSubmit={onSubmit}>
      <Form className="text-left">
        <div className="flex flex-col mb-4">
          {questionGroup.questions.map((q, i) => (
            <div
              key={typeof q.heading === 'string' ? q.heading : `quiz_question_${i}`}
              className="mb-4 lg:mb-8">
              <p className="mb-0 text-grey">
                Question {i + 1} of {questionGroup.questions.length}
              </p>

              <p>{q.heading}</p>

              <AttachmentQuizV2RadioInput number={i + 1} />
            </div>
          ))}
        </div>

        <Button label="SUBMIT" />
      </Form>
    </Formik>
  )
}

const QuizQuestionFormValidationSchema = Yup.object()
  .shape({
    question_1: Yup.string().ensure().required('*Please select one.'),
    question_2: Yup.string().ensure().required('*Please select one.'),
    question_3: Yup.string().ensure().required('*Please select one.'),
    question_4: Yup.string().ensure().required('*Please select one.'),
    question_5: Yup.string().ensure().required('*Please select one.'),
    question_6: Yup.string().ensure().required('*Please select one.'),
    question_7: Yup.string().ensure().required('*Please select one.'),
  })
  .defined()

export interface IQuizQuestionFormSchema
  extends Yup.InferType<typeof QuizQuestionFormValidationSchema> {}

const quizQuestionFormInitialValues: IQuizQuestionFormSchema =
  QuizQuestionFormValidationSchema.cast({})
