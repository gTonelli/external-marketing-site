// components
import { AttachmentQuizV2FormInput } from './AttachmentQuizV2FormInput'
import { IQuizComponentDefaultArgs, TQuizQuestion, TQuizQuestionType } from './useAttachmentQuiz'
import { Button } from '../Button/Button'
import { AttachmentQuizV2OptionSelect } from './AttachmentQuizV2OptionSelect'
import { AttachmentQuizV2PillSelect } from './AttachmentQuizV2PillSelect'
import { Icon } from '../Icon'
// libraries
import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
// utils
import { Regexes } from '@/utils/constants'

interface IAttachmentQuizV2UserDataGroupProps extends Required<IQuizComponentDefaultArgs> {
  onSubmitted: () => void
  getQuestionType: (question: TQuizQuestion) => TQuizQuestionType
}

export const AttachmentQuizV2UserDataGroup = ({
  answerQuestion,
  questionGroup,
  onGoBack,
  onSubmitted,
  getQuestionType,
  step,
}: IAttachmentQuizV2UserDataGroupProps) => {
  const onSubmit = (
    values: IUserDataFormSchema,
    formikHelpers: FormikHelpers<IUserDataFormSchema>
  ) => {
    Object.keys(values).map((key, i) => {
      const q = questionGroup.questions.find(
        (i) =>
          (i as TQuizQuestion<'OptionSelect' | 'PillSelect'>)?.['data-key'] === key ||
          (i as TQuizQuestion<'FormInput'>)?.formInputData?.autocomplete === key
      )

      if (!q) return
      answerQuestion(q, values[key as keyof IUserDataFormSchema])
    })

    onSubmitted()
  }
  return (
    <Formik
      initialValues={quizQuestionFormInitialValues}
      onSubmit={onSubmit}
      validationSchema={UserDataFormValidationSchema}>
      {({ setFieldValue, isSubmitting }) => (
        <Form className="text-left">
          {questionGroup.questions.map((question, i) => {
            const questionType = getQuestionType(question)
            return (
              <div key={`user_data_${i}`} className="my-4">
                <p className="text-grey text-sm">
                  Question {i + 1} of {questionGroup.questions.length}
                </p>

                {questionType === 'FormInput' ? (
                  <AttachmentQuizV2FormInput question={question as TQuizQuestion<'FormInput'>} />
                ) : questionType === 'OptionSelect' ? (
                  <AttachmentQuizV2OptionSelect
                    question={question as TQuizQuestion<'OptionSelect'>}
                  />
                ) : (
                  <AttachmentQuizV2PillSelect
                    question={question as TQuizQuestion<'PillSelect'>}
                    setFieldValue={setFieldValue}
                  />
                )}
              </div>
            )
          })}

          <div className="flex">
            <div
              className="flex items-center text-grey cursor-pointer rounded-full transition-colors lg:bg-transparent lg:px-4 lg:py-2 lg:w-max lg:hover:text-primary lg:hover:bg-grey/20"
              onClick={() => onGoBack()}>
              <Icon className="mr-2" name="chevron-left" />

              <strong>BACK</strong>
            </div>

            <Button disabled={isSubmitting} label="SUBMIT" />
          </div>
        </Form>
      )}
    </Formik>
  )
}

const UserDataFormValidationSchema = Yup.object()
  .shape({
    'attachment-knowledge': Yup.string().ensure().required('*Please select one.'),
    email: Yup.string()
      .ensure()
      .matches(Regexes.email, '*Must be a valid email.')
      .required('*All inputs must be filled in.'),
    gender: Yup.string().ensure().required('*Please select one.'),
    'learning-style': Yup.string().ensure().required('*Please select one.'),
    name: Yup.string().ensure().required('*Please fill in your name.'),
    'focus-areas': Yup.string().ensure().required('*Please select at least one.'),
    'quiz-discovery-method': Yup.string().ensure().required('*Please select one.'),
    'relationship-satisfaction': Yup.string().ensure().required('*Please select one.'),
    'relationship-status': Yup.string().ensure().required('*Please select one.'),
  })
  .defined()

export interface IUserDataFormSchema extends Yup.InferType<typeof UserDataFormValidationSchema> {}

const quizQuestionFormInitialValues: IUserDataFormSchema = UserDataFormValidationSchema.cast({})
