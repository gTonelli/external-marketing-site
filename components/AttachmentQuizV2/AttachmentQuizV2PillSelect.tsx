// core
import { useRef, useState } from 'react'
// components
import { Animation } from '../Animation'
import { Button } from '../Button/Button'
import { Icon } from '../Icon'
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import { IQuizComponentDefaultArgs } from './useAttachmentQuiz'
//libraries
import cx from 'classnames'
import { AnimatePresence } from 'framer-motion'

export const AttachmentQuizV2PillSelect = ({
  question,
  answerQuestion,
}: Required<Omit<IQuizComponentDefaultArgs<'PillSelect'>, 'questions'>>) => {
  // ============= State ================
  const [selectedPills, setSelectedPills] = useState<string[]>([])
  const otherFocusArea = useRef('')

  const onSelectOption = (val: string) => {
    const _selectedPills = [...selectedPills]
    const i = _selectedPills.findIndex((j) => j === val)
    if (i === -1) _selectedPills.push(val)
    else _selectedPills.splice(i, 1)
    setSelectedPills(_selectedPills)
  }

  const onContinue = () => {
    const _selectedPills = [...selectedPills]
    if (otherFocusArea.current) _selectedPills.push(otherFocusArea.current)
    answerQuestion(_selectedPills)
  }

  return (
    <>
      <AttachmentQuizV2Heading question={question} />

      <Animation
        key={`quiz_pill_select_${question.heading}`}
        className="flex flex-wrap gap-4 justify-center"
        direction="fromRight"
        delay={0.4}>
        {question.options.map((option, i) => (
          <div
            key={`pill_${i}`}
            className={cx(
              'py-2 px-3 flex items-center bg-white rounded-full cursor-pointer border border-white transition-all',
              selectedPills.includes(option) ? '!border-primary' : 'hover:border-primary'
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
            'py-2 px-3 flex items-center bg-white rounded-full cursor-pointer border border-white transition-all',
            selectedPills.includes('Other') ? '!border-primary' : 'hover:border-primary'
          )}
          onClick={() => onSelectOption('Other')}>
          <Icon
            className="text-primary mr-2"
            name={selectedPills.includes('Other') ? 'minus' : 'plus'}
          />

          <p className="mb-0">Other</p>
        </div>
      </Animation>

      <AnimatePresence>
        {selectedPills.includes('Other') && (
          <Animation key={`option_Other`} direction="fromBottom">
            <textarea
              className="border border-grey w-full mt-8 py-2 px-4 min-h-24 rounded-lg max-w-96 mx-auto"
              placeholder="Type your focus areas here – your well-being matters, and we're here to listen and help!"
              onChange={(e) => (otherFocusArea.current = e.currentTarget.value)}
            />
          </Animation>
        )}
      </AnimatePresence>

      <Button
        className="w-max mx-auto mt-auto mb-8 lg:mb-12"
        label="CONTINUE"
        disabled={selectedPills.length < 1}
        onClick={onContinue}
      />
    </>
  )
}
