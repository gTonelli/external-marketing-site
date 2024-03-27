import { Animation } from '../Animations'
import { Icon } from '../Icon'
import { AttachmentQuiz, TQuizQuestion } from './AttachmentQuizV2'
import { AttachmentQuizV2Heading } from './AttachmentQuizV2Heading'

export const AttachmentQuizV2QuizQuestion = ({
  attachmentQuiz,
  question,
}: {
  attachmentQuiz: AttachmentQuiz
  question: TQuizQuestion<'AttachmentStyleQuestion'>
}) => {
  return (
    <>
      <AttachmentQuizV2Heading question={question} />

      <Animation
        key={`question_${question.heading}`}
        className="max-w-md mx-auto gap-6 items-stretch mt-4 lg:max-w-screen-xl grid grid-cols-5 border border-primary rounded-lg lg:px-18"
        direction="fromBottom"
        delay={0.15}>
        {attachmentQuiz.defaultQuizQuestionOptions.map((option, i) => {
          return (
            <div
              key={`option_${i}`}
              className="flex flex-1 flex-col my-2 p-4 items-center text-left rounded-lg cursor-pointer transition-all lg:my-0 lg:py-10 lg:text-center lg:hover:text-primary"
              onClick={() => attachmentQuiz.answerQuestion(question, option.value)}>
              <Icon
                className="text-5xl text-primary mr-6 lg:mr-0 lg:mb-6"
                name={option.iconName}
                type="light"
              />

              <p className="text-xl leading-7 mb-2">{option.heading}</p>
            </div>
          )
        })}
      </Animation>
    </>
  )
}
