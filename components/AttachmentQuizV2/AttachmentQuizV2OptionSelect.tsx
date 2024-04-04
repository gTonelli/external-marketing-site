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
          `w-full max-w-md mx-auto items-stretch lg:gap-6 lg:max-w-screen-xl`,
          question.options.length === 3
            ? 'flex flex-col lg:grid lg:grid-cols-3'
            : `grid grid-cols-${question.options.length} border border-primary rounded-lg lg:px-18 lg:pt-4`
        )}>
        {question.options.map((option, i) => (
          <div
            key={`option_${i}`}
            className={cx(
              `w-full flex flex-1 my-1 py-2 px-4 items-center text-left rounded-lg cursor-pointer transition-all 
                lg:my-0 lg:py-8 lg:flex-col lg:text-center lg:hover:text-primary lg:hover:bg-primary-light/25`,
              question.options.length === 3
                ? 'border border-primary lg:hover:shadow-md'
                : 'flex-col'
            )}
            onClick={() => onSelectOption(option.value)}>
            <Icon
              className={cx(
                'text-center rounded-full lg:mb-6',
                question.options.length === 3 ? 'text-5xl mr-6 lg:mr-0' : 'text-3xl lg:text-5xl'
              )}
              name={option.iconName}
              type="light"
            />
            {question.options.length === 3 && (
              <div>
                <p className="text-xl leading-7 mb-0">{option.heading}</p>

                {option.subheading && <p>{option.subheading}</p>}
              </div>
            )}
          </div>
        ))}

        {question.options.length !== 3 && (
          <div
            className={`col-span-${question.options.length} flex justify-between px-4 lg:text-xl`}>
            {question.options.map((option, i) => (
              <p className={option.heading ? 'w-14 lg:w-20' : ''} key={option.heading}>
                {option.heading}
              </p>
            ))}
          </div>
        )}
      </Animation>
    </>
  )
}
