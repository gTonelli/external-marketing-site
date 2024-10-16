// components
import { Field, useFormikContext } from 'formik'
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import { TQuizQuestion } from './useAttachmentQuiz'
// libraries
import cx from 'classnames'
import { get } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IAttachmentQuizV2OptionSelectProps {
  question: TQuizQuestion<'OptionSelect'>
}

export const AttachmentQuizV2OptionSelect = ({ question }: IAttachmentQuizV2OptionSelectProps) => {
  const { errors, submitCount } = useFormikContext()
  const error = submitCount > 0 && get(errors, question['data-key'])

  return (
    <>
      <AttachmentQuizV2Heading question={question} />

      <Field
        name={question['data-key']}
        component="div"
        type="select"
        className={cx(
          `relative w-full flex flex-col max-w-md mx-auto items-stretch gap-4 pb-4 lg:max-w-screen-xl lg:grid lg:items-stretch lg:gap-6`,
          question.options.length === 3 ? 'lg:grid-cols-3' : `lg:grid-cols-5`
        )}>
        {question.options.map((option, i) => (
          <div key={`option_${i}`} className="flex">
            <input
              type="radio"
              className="!hidden"
              name={question['data-key']}
              value={option.value}
              id={`${question['data-key']}_option_${i}`}
            />

            <label
              htmlFor={`${question['data-key']}_option_${i}`}
              className={cx(
                `block relative w-full py-2 px-4 items-center text-left rounded-lg cursor-pointer transition-all border border-primary
               xxs:py-3 lg:my-0 lg:hover:text-primary lg:hover:bg-primary-light/50 lg:hover:shadow-md lg:flex lg:flex-col lg:flex-1 lg:items-start`
              )}>
              <FontAwesomeIcon
                className={cx('text-center rounded-full text-primary lg:text-3xl')}
                icon={option.icon}
                type="solid"
              />

              <div className="lg:mt-auto">
                <p className="leading-7 mb-0">{option.heading}</p>

                {option.subheading && <p className="mb-0">{option.subheading}</p>}
              </div>
            </label>
          </div>
        ))}

        {error && <p className="w-full absolute -bottom-6 text-danger text-left">{error}</p>}
      </Field>
    </>
  )
}
