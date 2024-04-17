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
      <AttachmentQuizV2Navigation onGoBack={onGoBack} />

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

      <Section
        key={`section_1`}
        className="flex flex-col flex-1 relative z-10"
        classNameInner="flex flex-col flex-1 !max-w-[700px]">
        {currentQuestionGroup.type === 'AttachmentStyleQuestions' ? (
          <AttachmentQuizV2QuizQuestionGroup
            key={`question_group_${index}`}
            questionGroup={currentQuestionGroup}
            answerQuestion={answerQuestion}
            onSubmitted={onGoToNextQuestion}
          />
        ) : (
          <AttachmentQuizV2UserDataGroup
            key={`question_group_${index}`}
            questionGroup={currentQuestionGroup}
            answerQuestion={answerQuestion}
            onSubmitted={endQuiz}
            getQuestionType={getQuestionType}
          />
        )}
      </Section>
    </>
  )
}
