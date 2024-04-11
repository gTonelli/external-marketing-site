// components
import { Input } from '../Input/Input'
// libraries
import { Field, useFormikContext } from 'formik'
import { get } from 'lodash'

interface IAttachmentQuizV2RadioInputPRops {
  number: number
}

export const AttachmentQuizV2RadioInput = ({ number }: IAttachmentQuizV2RadioInputPRops) => {
  const { errors, submitCount } = useFormikContext()
  const error = submitCount > 0 && get(errors, `question_${number}`)

  return (
    <div className="relative">
      <Field
        className="grid grid-cols-5 gap-4 items-stretch text-center max-w-xs mx-auto mt-4 mb-7"
        component="div"
        name={`question_${number}`}>
        <div className="flex flex-col">
          <Input
            classNameInput={`block !w-10 !h-10 !text-primary lg:cursor-pointer`}
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
            classNameInput={`block !w-8 !h-8 my-1 !text-primary lg:cursor-pointer`}
            id={`question_${number}_input_1`}
            name={`question_${number}`}
            type="radio"
            value={0}
          />

          <label
            className="text-sm flex-grow lg:cursor-pointer"
            htmlFor={`question_${number}_input_1`}>
            Disagree
          </label>
        </div>

        <div className="flex flex-col">
          <Input
            classNameInput={`block !w-7 !h-7 my-[6px] !text-primary lg:cursor-pointer`}
            id={`question_${number}_input_2`}
            name={`question_${number}`}
            type="radio"
            value={0}
          />

          <label
            className="text-sm flex-grow lg:cursor-pointer"
            htmlFor={`question_${number}_input_2`}>
            Neutral
          </label>
        </div>

        <div className="flex flex-col">
          <Input
            classNameInput={`block !w-8 !h-8 my-1 !text-primary lg:cursor-pointer`}
            id={`question_${number}_input_3`}
            name={`question_${number}`}
            type="radio"
            value={0.5}
          />

          <label
            className="text-sm flex-grow lg:cursor-pointer"
            htmlFor={`question_${number}_input_3`}>
            Agree
          </label>
        </div>

        <div className="flex flex-col">
          <Input
            classNameInput={`block !w-10 !h-10 !text-primary lg:cursor-pointer`}
            id={`question_${number}_input_4`}
            name={`question_${number}`}
            type="radio"
            value={1}
          />

          <label className="text-sm lg:cursor-pointer" htmlFor={`question_${number}_input_4`}>
            Strongly Agree
          </label>
        </div>
      </Field>

      {error && <p className="w-full absolute -bottom-5 text-danger text-center">{error}</p>}
    </div>
  )
}
