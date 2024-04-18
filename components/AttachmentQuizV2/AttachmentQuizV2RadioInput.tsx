// components
import { Input } from '../Input/Input'
// libraries
import { Field, useFormikContext } from 'formik'
import { get } from 'lodash'
import cx from 'classnames'

interface IAttachmentQuizV2RadioInputProps {
  number: number
}

export const AttachmentQuizV2RadioInput = ({ number }: IAttachmentQuizV2RadioInputProps) => {
  const { errors, submitCount } = useFormikContext()
  const error = submitCount > 0 && get(errors, `question_${number}`)
  const defaultInputClasses =
    'block !border-2 !border-primary cursor-pointer bg-white rounded-full hover:bg-primary-light/50 transition-colors mx-auto cursor-pointer'

  return (
    <div className="relative border-b border-grey">
      <Field
        className="grid grid-cols-5 gap-4 items-stretch text-center max-w-xs mx-auto mt-4 mb-7 lg:max-w-none lg:grid-cols-7 lg:items-center"
        component="div"
        name={`question_${number}`}>
        <div>
          <input
            className="!hidden"
            id={`question_${number}_input_0`}
            name={`question_${number}`}
            type="radio"
            value={0}
          />

          <label
            className={cx('w-10 h-10', defaultInputClasses)}
            htmlFor={`question_${number}_input_0`}
          />
        </div>

        <div>
          <input
            className="!hidden"
            id={`question_${number}_input_1`}
            name={`question_${number}`}
            type="radio"
            value={0}
          />

          <label
            className={cx('w-8 h-8', defaultInputClasses)}
            htmlFor={`question_${number}_input_1`}
          />
        </div>

        <div>
          <input
            className="!hidden"
            id={`question_${number}_input_2`}
            name={`question_${number}`}
            type="radio"
            value={0}
          />

          <label
            className={cx('w-7 h-7', defaultInputClasses)}
            htmlFor={`question_${number}_input_2`}
          />
        </div>

        <div>
          <input
            className="!hidden"
            id={`question_${number}_input_3`}
            name={`question_${number}`}
            type="radio"
            value={0}
          />

          <label
            className={cx('w-8 h-8', defaultInputClasses)}
            htmlFor={`question_${number}_input_3`}
          />
        </div>

        <div>
          <input
            className="!hidden"
            id={`question_${number}_input_4`}
            name={`question_${number}`}
            type="radio"
            value={0}
          />

          <label
            className={cx('w-10 h-10', defaultInputClasses)}
            htmlFor={`question_${number}_input_4`}
          />
        </div>

        <p className="text-sm text-primary mb-0 lg:col-start-1 lg:row-start-1 lg:text-left">
          Disagree
        </p>

        <p className="text-sm text-primary col-start-5 mb-0 lg:col-start-7 lg:row-start-1 lg:text-right">
          Agree
        </p>
      </Field>

      {error && <p className="w-full absolute -bottom-4 text-danger text-left mt-1">{error}</p>}
    </div>
  )
}
