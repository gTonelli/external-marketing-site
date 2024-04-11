// components
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import { IQuizComponentDefaultArgs, TQuizQuestions } from './useAttachmentQuiz'
import { AttachmentQuizV2RadioInput } from './AttachmentQuizV2RadioInput'
import { Button } from '../Button/Button'
// libraries
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'

interface IAttachmentQuizV2QuizQuestionProps
  extends Required<Omit<IQuizComponentDefaultArgs<'AttachmentStyleQuestion'>, 'question'>> {
  index: number
}

export const AttachmentQuizV2QuizQuestionGroup = ({
  questions,
  index,
  answerQuestion,
}: IAttachmentQuizV2QuizQuestionProps) => {
  const onSubmit = (
    values: IQuizQuestionFormSchema,
    formikHelpers: FormikHelpers<IQuizQuestionFormSchema>
  ) => {
    console.log('Submitted', values)
  }

  return (
    <Formik
      initialValues={quizQuestionFormInitialValues}
      validationSchema={QuizQuestionFormValidationSchema}
      onSubmit={onSubmit}>
      <Form className="pb-12 lg:pb-24">
        <div className="flex flex-col mb-4">
          {getQuestionsToAsk({ index, questions }).map((q, i) => (
            <div
              key={typeof q.heading === 'string' ? q.heading : `quiz_question_${index}_${i}`}
              className="mb-4 lg:mb-8">
              <p className="font-bold font-ssp text-lg">{q.heading}</p>

              <AttachmentQuizV2RadioInput number={i + 1} />
            </div>
          ))}
        </div>

        <Button.Submit label="SUBMIT" />
      </Form>
    </Formik>
  )
}

const QuizQuestionFormValidationSchema = Yup.object()
  .shape({
    question_1: Yup.string().ensure().required('*All inputs must be filled in.'),
    question_2: Yup.string().ensure().required('*All inputs must be filled in.'),
    question_3: Yup.string().ensure().required('*All inputs must be filled in.'),
    question_4: Yup.string().ensure().required('*All inputs must be filled in.'),
    question_5: Yup.string().ensure().required('*All inputs must be filled in.'),
    question_6: Yup.string().ensure().required('*All inputs must be filled in.'),
    question_7: Yup.string().ensure().required('*All inputs must be filled in.'),
  })
  .defined()

export interface IQuizQuestionFormSchema
  extends Yup.InferType<typeof QuizQuestionFormValidationSchema> {}

// const quizQuestionFormInitialValues: IQuizQuestionFormSchema =
//   QuizQuestionFormValidationSchema.cast({
//     question_1: 0,
//     question_2: 0,
//     question_3: 0,
//     question_4: 0,
//     question_5: 0,
//     question_6: 0,
//     question_7: 0,
//   })

const quizQuestionFormInitialValues: IQuizQuestionFormSchema =
  QuizQuestionFormValidationSchema.cast({})

const getQuestionsToAsk = ({ index, questions }: { index: number; questions: TQuizQuestions }) => {
  console.log('Questions to ask')
  let questionsToAsk = []
  for (let i = index; i < index + 7; i++) {
    questionsToAsk.push(questions[i])
  }
  return questionsToAsk
}
