'use client'

// components
import { useAttachmentQuiz } from './useAttachmentQuiz'
import { AttachmentQuizV2Navigation } from './AttachmentQuizV2Navigation'
import { Section } from '../Section'
import { ProgressBar } from '../ProgressBar'
import { AttachmentQuizV2QuizQuestionGroup } from './AttachmentQuizV2QuizQuestionGroup'
import { AttachmentQuizV2UserDataGroup } from './AttachmentQuizV2UserDataGroup'

export const AttachmentQuizV2 = () => {
  // =========== Hooks ============
  const {
    answerQuestion,
    currentQuestionGroup,
    index,
    length,
    getQuestionType,
    onGoBack,
    onGoToNextQuestion,
    endQuiz,
  } = useAttachmentQuiz()

  return (
    <>
      <AttachmentQuizV2Navigation />

      <ProgressBar
        key={`progress_bar`}
        noBorder
        color="primary"
        className="w-full bg-transparent rounded-none h-6"
        classNameFill="rounded-none h-6"
        classNamePercentage="!text-base"
        percentage={(index / length) * 100}
        showPercentage
      />

      <Section className="border-b border-grey !p-0" classNameInner="!text-left !max-w-[700px]">
        <p className="text-grey mt-4">
          {index + 1} of {length} steps
        </p>

        <h3>
          {currentQuestionGroup.type === 'AttachmentStyleQuestions'
            ? 'Attachment Deepdive'
            : "Let's Get To Know You"}
        </h3>
      </Section>

      <Section
        key={`section_1`}
        className="flex flex-col flex-1 relative z-10"
        classNameInner="flex flex-col flex-1 !max-w-[700px]">
        {currentQuestionGroup.type === 'AttachmentStyleQuestions' ? (
          <AttachmentQuizV2QuizQuestionGroup
            key={`question_group_${index}`}
            questionGroup={currentQuestionGroup}
            answerQuestion={answerQuestion}
            onGoBack={onGoBack}
            onSubmitted={onGoToNextQuestion}
            step={index + 1}
          />
        ) : (
          <AttachmentQuizV2UserDataGroup
            key={`question_group_${index}`}
            questionGroup={currentQuestionGroup}
            answerQuestion={answerQuestion}
            onSubmitted={endQuiz}
            onGoBack={onGoBack}
            getQuestionType={getQuestionType}
            step={index + 1}
          />
        )}
      </Section>
    </>
  )
}
