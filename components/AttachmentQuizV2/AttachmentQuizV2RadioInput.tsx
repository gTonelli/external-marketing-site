// components
import { Input } from '../Input/Input'
// libraries
import { Field, useFormikContext } from 'formik'
import { get } from 'lodash'
import cx from 'classnames'

interface IAttachmentQuizV2RadioInputPRops {
  number: number
}

export const AttachmentQuizV2RadioInput = ({ number }: IAttachmentQuizV2RadioInputPRops) => {
  const { errors, submitCount } = useFormikContext()
  const error = submitCount > 0 && get(errors, `question_${number}`)
  const defaultInputClasses = 'block !text-primary !border-2 !border-primary lg:cursor-pointer'

  return (
    <div className="relative border-b border-grey">
      <Field
        className="grid grid-cols-5 gap-4 items-stretch text-center max-w-xs mx-auto mt-4 mb-7 lg:max-w-none lg:grid-cols-7 lg:items-center"
        component="div"
        name={`question_${number}`}>
        <Input
          classNameInput={cx(`!w-10 !h-10`, defaultInputClasses)}
          id={`question_${number}_input_0`}
          name={`question_${number}`}
          type="radio"
          value={0}
        />

        <Input
          classNameInput={cx(`!w-8 !h-8 my-1`, defaultInputClasses)}
          id={`question_${number}_input_1`}
          name={`question_${number}`}
          type="radio"
          value={0}
        />

        <Input
          classNameInput={cx(`!w-7 !h-7 my-[6px]`, defaultInputClasses)}
          id={`question_${number}_input_2`}
          name={`question_${number}`}
          type="radio"
          value={0}
        />

        <Input
          classNameInput={cx(`!w-8 !h-8 my-1`, defaultInputClasses)}
          id={`question_${number}_input_3`}
          name={`question_${number}`}
          type="radio"
          value={0.5}
        />

        <Input
          classNameInput={cx(`!w-10 !h-10`, defaultInputClasses)}
          id={`question_${number}_input_4`}
          name={`question_${number}`}
          type="radio"
          value={1}
        />

        <label
          className="text-sm text-primary lg:cursor-pointer lg:col-start-1 lg:row-start-1 lg:text-left"
          htmlFor={`question_${number}_input_0`}>
          Disagree
        </label>

        <label
          className="text-sm text-primary col-start-5 lg:cursor-pointer lg:col-start-7 lg:row-start-1 lg:text-right"
          htmlFor={`question_${number}_input_4`}>
          Agree
        </label>
      </Field>

      {error && <p className="w-full absolute -bottom-5 text-danger text-center mt-1">{error}</p>}
    </div>
  )
}
