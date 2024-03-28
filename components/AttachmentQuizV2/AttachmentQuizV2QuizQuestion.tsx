// components
import { Animation } from '../Animations'
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
}: Required<IQuizComponentDefaultArgs<'AttachmentStyleQuestion'>>) => {
  return (
    <>
      <AttachmentQuizV2Heading question={question} />

      <Animation
        key={`question_${question.heading}`}
        className="w-full max-w-md mx-auto gap-x-4 items-stretch mt-4 lg:max-w-screen-xl grid grid-cols-5 border border-primary rounded-lg p-4 lg:px-18"
        direction="fromBottom"
        delay={0.15}>
        {defaultQuizQuestionOptions.map((option, i) => {
          return (
            <div
              key={`option_${i}`}
              className="items-center text-center rounded-lg cursor-pointer transition-all lg:my-0 lg:py-10 lg:text-center lg:hover:text-primary"
              onClick={() => answerQuestion(option.value)}>
              <Icon
                className="text-3xl text-center text-primary lg:mr-0 lg:mb-6 lg:text-5xl"
                name={option.iconName}
                type="light"
              />
            </div>
          )
        })}

        <div className="col-span-5 flex justify-between">
          {defaultQuizQuestionOptions.map((option, i) => {
            return (
              <p
                key={`option_text_${i}`}
                className={cx('text-sm leading-7 mb-2 lg:text-xl', option.heading ? 'w-20' : '')}>
                {option.heading}
              </p>
            )
          })}
        </div>
      </Animation>
    </>
  )
}
