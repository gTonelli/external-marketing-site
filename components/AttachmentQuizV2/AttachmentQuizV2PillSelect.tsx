// core
import { useRef, useState } from 'react'
// components
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import { TQuizQuestion } from './useAttachmentQuiz'
import { IUserDataFormSchema } from './AttachmentQuizV2UserDataGroup'
//libraries
import cx from 'classnames'
import { Field, FormikErrors, useFormikContext } from 'formik'
import { get } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@awesome.me/kit-545b942488/icons/classic/solid'

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
              'py-2 px-3 flex items-center rounded-full cursor-pointer border transition-all',
              selectedPills.includes(option)
                ? 'border-primary bg-primary text-white'
                : 'border-primary-light bg-white hover:border-primary hover:bg-primary-light/30'
            )}
            onClick={() => onSelectOption(option)}>
            <FontAwesomeIcon
              className={cx('mr-2', selectedPills.includes(option) ? 'text-white' : 'text-primary')}
              icon={selectedPills.includes(option) ? faMinus : faPlus}
            />

            <p className="mb-0">{option}</p>
          </div>
        ))}

        <div
          className={cx(
            'py-2 px-3 flex items-center rounded-full cursor-pointer border transition-all',
            selectedPills.includes('Other')
              ? 'border-primary bg-primary text-white'
              : 'border-primary-light bg-white hover:border-primary hover:bg-primary-light/30'
          )}
          onClick={() => onSelectOption('Other')}>
          <FontAwesomeIcon
            className={cx('mr-2', selectedPills.includes('Other') ? 'text-white' : 'text-primary')}
            icon={selectedPills.includes('Other') ? faMinus : faPlus}
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
