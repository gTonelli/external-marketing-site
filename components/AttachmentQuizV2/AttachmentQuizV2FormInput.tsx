import { Field, Form, Formik } from 'formik'
import { Icon } from '../Icon'
import * as Yup from 'yup'
import { Button } from '../Button/Button'
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import { Animation } from '../Animations'
import { IQuizComponentDefaultArgs } from './useAttachmentQuiz'

export const AttachmentQuizV2FormInput = ({
  answerQuestion,
  question,
}: Required<IQuizComponentDefaultArgs<'FormInput'>>) => {
  const onSubmit = (values: TFormValues) => {
    if (values?.name) {
      answerQuestion(values.name)
    }
    if (values?.email) answerQuestion(values.email)
    if (values?.age) answerQuestion(values.age)
  }

  if (!question.formInputData) return

  return (
    <>
      <AttachmentQuizV2Heading question={question} />

      <Animation
        key={`form_input_${question.formInputData.autocomplete}`}
        className="relative mx-auto w-full max-w-96"
        direction={question.subheading ? 'fromLeft' : 'fromRight'}
        delay={question.subheading ? 0.3 : 0.15}>
        <Formik initialValues={{}} onSubmit={onSubmit}>
          {({ errors }) => {
            return (
              <Form>
                <Field
                  name={question.formInputData.autocomplete}
                  className="w-full border border-grey rounded-lg overflow-hidden text-xl leading-7 py-[9px] px-4"
                  type={question.formInputData.type}
                  placeholder={question.formInputData.placeholder}
                  autoComplete={question.formInputData.autocomplete}
                />
                {(errors.age || errors.email || errors.name) && (
                  <p className="text-danger mt-2 font-bold text-lg text-left">
                    *{errors.age || errors.email || errors.name}
                  </p>
                )}

                <div className="absolute cursor-pointer flex items-center justify-center right-2 top-2 text-white bg-primary rounded-full w-8 h-8 text-xl">
                  <Button.Submit className="bg-transparent text-transparent border-transparent absolute w-full h-full" />

                  <Icon name="chevron-right" />
                </div>
              </Form>
            )
          }}
        </Formik>
      </Animation>
    </>
  )
}

type TFormValues = {
  name?: string
  email?: string
  age?: Date | string
}

const formInputNameSchema = Yup.object({
  name: Yup.string().defined().ensure().required('Name is required'),
})
const formInputEmailSchema = Yup.object({
  email: Yup.string()
    .defined()
    .ensure()
    .email('Email must be valid')
    .required('E-mail is required'),
})
const formInputAgeSchema = Yup.object({
  age: Yup.number().defined().required('Please enter your age').max(125, 'Impossible!'),
})
