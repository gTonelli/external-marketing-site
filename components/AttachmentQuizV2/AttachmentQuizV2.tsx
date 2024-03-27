import { AttachmentQuizV2Navigation } from './AttachmentQuizV2Navigation'
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '../Section'
import { AttachmentQuizV2Heading as AttachmentQuizV2Screen } from './AttachmentQuizV2Heading'
import { ProgressBar } from '../ProgressBar'
import { AttachmentQuizV2FormInput } from './AttachmentQuizV2FormInput'
import { AttachmentQuizV2OptionSelect } from './AttachmentQuizV2OptionSelect'
import { AttachmentQuizV2PillSelect } from './AttachmentQuizV2PillSelect'
import { AttachmentQuizV2QuizQuestion } from './AttachmentQuizV2QuizQuestion'
import { TQuizQuestion, useAttachmentQuiz } from './useAttachmentQuiz'

export const AttachmentQuizV2 = ({
  setViewQuiz,
}: {
  setViewQuiz: Dispatch<SetStateAction<boolean>>
}) => {
  // =========== State ============
  const [shouldTransitionAutomatically, setShouldTransitionAutomatically] = useState(true)
  // =========== Hooks ============
  const {
    answerQuestion,
    currentQuestion,
    currentQuestionType,
    index,
    onGoBack: _onGoBack,
    onGoToNextQuestion,
  } = useAttachmentQuiz()

  const onGoBack = () => {
    console.log('OngoBack')
    if (index === 0) setViewQuiz(false)
    else _onGoBack?.()
  }

  return (
    <>
      <AttachmentQuizV2Navigation onGoBack={onGoBack} />

      <Section
        key={`section_1`}
        className="flex flex-col flex-1 bg-gradient-to-r from-green-light to-primary-light/50 relative z-10 !pb-0"
        classNameInner="flex flex-col flex-1 pt-8 lg:pt-24 !max-w-[792px]">
        {currentQuestionType === 'Screen' ? (
          <AttachmentQuizV2Screen question={currentQuestion} />
        ) : currentQuestionType === 'AttachmentStyleQuestion' ? (
          <AttachmentQuizV2QuizQuestion
            answerQuestion={answerQuestion}
            question={currentQuestion as TQuizQuestion<'AttachmentStyleQuestion'>}
          />
        ) : currentQuestionType === 'OptionSelect' ? (
          <AttachmentQuizV2OptionSelect
            answerQuestion={answerQuestion}
            question={currentQuestion as TQuizQuestion<'OptionSelect'>}
          />
        ) : currentQuestionType === 'FormInput' ? (
          <AttachmentQuizV2FormInput
            answerQuestion={answerQuestion}
            question={currentQuestion as TQuizQuestion<'FormInput'>}
          />
        ) : (
          <AttachmentQuizV2PillSelect
            answerQuestion={answerQuestion}
            question={currentQuestion as TQuizQuestion<'PillSelect'>}
          />
        )}

        {(currentQuestionType === 'Screen' || currentQuestion.userResponse) && (
          <div className="relative flex items-center justify-center mt-auto mb-8 h-11 lg:mb-12">
            <span className="underline cursor-pointer" onClick={onGoToNextQuestion}>
              Next Question
            </span>

            {shouldTransitionAutomatically && (
              <motion.svg
                key={`screen_svg_${index}`}
                className="absolute top-0 right-0"
                width="42"
                height="42"
                viewBox="0 0 120 120">
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#8a50a0"
                  strokeWidth="8px"
                  fillOpacity={0}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    pathLength: {
                      duration: (currentQuestion as TQuizQuestion<'Screen'>)?.duration || 4,
                    },
                  }}
                  onAnimationComplete={onGoToNextQuestion}
                />
              </motion.svg>
            )}
          </div>
        )}
      </Section>

      <ProgressBar
        key={`progress_bar`}
        noBorder
        color="primary"
        className="w-full bg-transparent rounded-none h-4"
        classNameFill="rounded-none h-4"
        percentage={((index + 1) / length) * 100}
      />
    </>
  )
}
