// components
import { Animation } from '../Animation'
import { Icon } from '../Icon'
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import { IQuizComponentDefaultArgs, TPossibleQuizQuestionValues } from './useAttachmentQuiz'
// libraries
import cx from 'classnames'

export const AttachmentQuizV2OptionSelect = ({
  question,
  answerQuestion,
}: Required<Omit<IQuizComponentDefaultArgs<'OptionSelect'>, 'questions'>>) => {
  const onSelectOption = (val: string | TPossibleQuizQuestionValues) => {
    answerQuestion(val)
  }

  return (
    <>
      <AttachmentQuizV2Heading question={question} />

      {/* @import grid-cols-5 */}
      <Animation
        key={`options_${question.heading}`}
        delay={question.subheading ? 0.3 : 0.15}
        direction="fromBottom"
        className={cx(
          `w-full flex flex-col max-w-md mx-auto items-stretch  lg:max-w-screen-xl lg:grid`,
          question.options.length === 3
            ? 'lg:grid-cols-3 lg:gap-6'
            : `lg:border lg:border-primary lg:rounded-lg lg:grid-cols-5`
        )}>
        {question.options.map((option, i) => (
          <div
            key={`option_${i}`}
            className={cx(
              `w-full flex flex-1 my-1 py-2 px-4 items-center text-left rounded-lg cursor-pointer transition-all border border-primary
               xxs:py-3 lg:py-8 lg:my-0 lg:flex-col lg:text-center lg:hover:text-primary lg:hover:bg-primary-light/25 lg:hover:shadow-md`,
              question.options.length === 3 ? '' : 'lg:border-none'
            )}
            onClick={() => onSelectOption(option.value)}>
            <Icon
              className={cx('text-center rounded-full lg:mb-6 text-5xl mr-6 lg:mr-0')}
              name={option.iconName}
              type="light"
            />

            <div>
              <p className="leading-7 mb-0">{option.heading}</p>

              {option.subheading && <p className="mb-0">{option.subheading}</p>}
            </div>
          </div>
        ))}
      </Animation>
    </>
  )
}
