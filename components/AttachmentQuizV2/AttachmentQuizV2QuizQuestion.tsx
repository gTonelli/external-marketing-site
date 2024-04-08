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
        className="w-full max-w-md mx-auto gap-y-4 items-stretch mt-4 rounded-lg p-4 lg:gap-4 lg:p-0 lg:max-w-screen-xl lg:border lg:border-primary lg:grid lg:grid-cols-5"
        direction="fromBottom"
        delay={0.15}>
        {defaultQuizQuestionOptions.map((option, i) => {
          return (
            <div
              key={`option_${i}`}
              className="flex border border-primary items-center text-left mb-4 px-4 py-2 rounded-lg cursor-pointer transition-all 
                lg:border-none lg:flex-col lg:my-0 lg:py-8 lg:px-4 lg:text-center lg:hover:text-primary lg:hover:bg-primary-light/25"
              onClick={() => answerQuestion(option.value)}>
              <Icon
                className="text-5xl text-center rounded-full mr-6 lg:mr-0 lg:mb-6"
                name={option.iconName}
                type="light"
              />

              <p key={`option_text_${i}`} className={cx('leading-7 mb-0 lg:text-xl')}>
                {option.heading}
              </p>
            </div>
          )
        })}
      </Animation>
    </>
  )
}
