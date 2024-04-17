// core
import { useRef, useState } from 'react'
// components
import { Icon } from '../Icon'
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import { TQuizQuestion } from './useAttachmentQuiz'
import { IUserDataFormSchema } from './AttachmentQuizV2UserDataGroup'
//libraries
import cx from 'classnames'
import { Field, FormikErrors, useFormikContext } from 'formik'
import { get } from 'lodash'

interface IAttachmentQuizV2PillSelectProps {
  question: TQuizQuestion<'PillSelect'>
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<IUserDataFormSchema>>
}

export const AttachmentQuizV2PillSelect = ({
  question,
  setFieldValue,
}: IAttachmentQuizV2PillSelectProps) => {
  const { errors, submitCount } = useFormikContext()
  const error = submitCount > 0 && get(errors, question['data-key'])
  // ============= State ================
  const [selectedPills, setSelectedPills] = useState<string[]>([])
  const otherFocusArea = useRef('')

  const onSelectOption = (val: string) => {
    const _selectedPills = [...selectedPills]
    const i = _selectedPills.findIndex((j) => j === val)
    if (i === -1) _selectedPills.push(val)
    else _selectedPills.splice(i, 1)
    setSelectedPills(_selectedPills)
    setFieldValue(question['data-key'], _selectedPills.length ? JSON.stringify(_selectedPills) : '')
  }

  return (
    <>
      <AttachmentQuizV2Heading question={question} />

      <Field className="relative flex flex-wrap gap-4 pb-4" component="div" name="focus-areas">
        {question.options.map((option, i) => (
          <div
            key={`pill_${i}`}
            className={cx(
              'py-2 px-3 flex items-center bg-white rounded-full cursor-pointer border border-primary transition-all',
              selectedPills.includes(option)
                ? '!border-primary !bg-primary-light'
                : 'hover:border-primary hover:bg-primary-light'
            )}
            onClick={() => onSelectOption(option)}>
            <Icon
              className="text-primary mr-2"
              name={selectedPills.includes(option) ? 'minus' : 'plus'}
            />

            <p className="mb-0">{option}</p>
          </div>
        ))}

        <div
          className={cx(
            'py-2 px-3 flex items-center bg-white rounded-full cursor-pointer border border-primary transition-all',
            selectedPills.includes('Other')
              ? '!border-primary !bg-primary-light'
              : 'hover:border-primary hover:bg-primary-light'
          )}
          onClick={() => onSelectOption('Other')}>
          <Icon
            className="text-primary mr-2"
            name={selectedPills.includes('Other') ? 'minus' : 'plus'}
          />

          <p className="mb-0">Other</p>
        </div>

        {error && <p className="w-full absolute -bottom-6 text-danger text-left">{error}</p>}
      </Field>

      {selectedPills.includes('Other') && (
        <textarea
          className="border border-grey w-full mt-8 py-2 px-4 min-h-24 rounded-lg max-w-96 mx-auto"
          placeholder="Type your focus areas here – your well-being matters, and we're here to listen and help!"
          onChange={(e) => (otherFocusArea.current = e.currentTarget.value)}
        />
      )}
    </>
  )
}
