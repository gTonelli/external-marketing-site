import { Animation } from '../Animations'
import { Icon } from '../Icon'
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import cx from 'classnames'
import { IQuizComponentDefaultArgs, TPossibleQuizQuestionValues } from './useAttachmentQuiz'

export const AttachmentQuizV2OptionSelect = ({
  question,
  answerQuestion,
}: Required<IQuizComponentDefaultArgs<'OptionSelect'>>) => {
  const onSelectOption = (val: string | TPossibleQuizQuestionValues) => {
    answerQuestion(val)
  }

  if (!question.options) return

  return (
    <>
      <AttachmentQuizV2Heading question={question} />

      {/* @import grid-cols-5 */}
      <Animation
        key={`options_${question.heading}`}
        delay={question.subheading ? 0.3 : 0.15}
        direction="fromBottom"
        className={cx(
          `w-full max-w-md mx-auto gap-6 items-stretch lg:max-w-screen-xl`,
          question.options.length === 3
            ? 'flex flex-col lg:grid lg:grid-cols-3'
            : `grid grid-cols-${question.options.length} border border-primary rounded-lg lg:px-18`
        )}>
        {question.options.map((option, i) => (
          <div
            key={`option_${i}`}
            className={cx(
              'w-full flex flex-1 my-2 p-4 items-center text-left rounded-lg cursor-pointer transition-all lg:my-0 lg:py-10 lg:flex-col lg:text-center',
              question.options.length === 3
                ? 'border border-primary lg:hover:shadow-md'
                : 'lg:hover:text-primary'
            )}
            onClick={() => onSelectOption(option.value)}>
            <Icon
              className="text-5xl text-primary mr-6 lg:mr-0 lg:mb-6"
              name={option.iconName}
              type="light"
            />
            <div>
              <p className="text-xl leading-7 mb-2">{option.heading}</p>

              {option.subheading && <p>{option.subheading}</p>}
            </div>
          </div>
        ))}
      </Animation>
    </>
  )
}
