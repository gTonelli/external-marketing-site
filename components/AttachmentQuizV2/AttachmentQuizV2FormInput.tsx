// components
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import { TQuizQuestion } from './useAttachmentQuiz'
// libraries
import { Field, useFormikContext } from 'formik'
import { get } from 'lodash'

interface IAttachmentQuizV2FormInputProps {
  question: TQuizQuestion<'FormInput'>
}

export const AttachmentQuizV2FormInput = ({ question }: IAttachmentQuizV2FormInputProps) => {
  const { errors, submitCount } = useFormikContext()
  const error = submitCount > 0 && get(errors, question.formInputData.autocomplete)

  return (
    <>
      <AttachmentQuizV2Heading question={question} />

      <div className="relative pb-2">
        <Field
          name={question.formInputData.autocomplete}
          className="w-full border border-grey rounded-lg overflow-hidden py-[9px] px-4 md:hover:bg-transparent"
          type={question.formInputData.type}
          placeholder={question.formInputData.placeholder}
          autoComplete={question.formInputData.autocomplete}
        />

        {error && <p className="w-full absolute -bottom-4 text-danger text-left">{error}</p>}
      </div>
    </>
  )
}
