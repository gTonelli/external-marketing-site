// components
import { Animation } from '../Animation'
import { Icon } from '../Icon'
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'
import { IQuizComponentDefaultArgs } from './useAttachmentQuiz'
// config
import { defaultQuizQuestionOptions } from './config'
// libraries
import cx from 'classnames'

export const AttachmentQuizV2QuizQuestion = ({
  question,
  answerQuestion,
}: Required<Omit<IQuizComponentDefaultArgs<'AttachmentStyleQuestion'>, 'questions'>>) => {
  return (
    <>
      <AttachmentQuizV2Heading classNameHeading="min-h-36" question={question} />

      <Animation
        key={`question_${question.heading}`}
        className="w-full max-w-md mx-auto gap-x-4 items-stretch mt-4 lg:max-w-screen-xl grid grid-cols-5 border border-primary rounded-lg p-4 lg:p-0"
        direction="fromBottom"
        delay={0.15}>
        {defaultQuizQuestionOptions.map((option, i) => {
          return (
            <div
              key={`option_${i}`}
              className="items-center text-center rounded-lg cursor-pointer transition-all lg:my-0 lg:py-8 lg:px-4 lg:text-center lg:hover:text-primary lg:hover:bg-primary-light/25"
              onClick={() => answerQuestion(option.value)}>
              <Icon
                className="text-3xl text-center rounded-full lg:mr-0 lg:mb-6 lg:text-5xl"
                name={option.iconName}
                type="light"
              />

              <p key={`option_text_${i}`} className={cx('text-sm leading-7 mb-0 lg:text-xl')}>
                {option.heading}
              </p>
            </div>
          )
        })}
      </Animation>
    </>
  )
}
