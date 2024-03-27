import { AttachmentQuiz, TQuizQuestion, TQuizQuestionType } from './AttachmentQuizV2'
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
import { useRouter } from 'next/navigation'

export const AttachmentQuizV2Questions = ({
  setViewQuiz,
}: {
  setViewQuiz: Dispatch<SetStateAction<boolean>>
}) => {
  // =========== State ============
  const [index, setIndex] = useState(0)
  const [shouldTransitionAutomatically, setShouldTransitionAutomatically] = useState(true)
  const attachmentQuiz: AttachmentQuiz = useMemo(() => new AttachmentQuiz(setIndex), [])
  const [questionType, setQuestionType] = useState<TQuizQuestionType>(
    attachmentQuiz.getQuestionType(index)
  )
  const router = useRouter()

  useEffect(() => {
    if (index > attachmentQuiz.questions.length - 1) {
      const url = attachmentQuiz.endQuiz()
      console.log('Url', url)
      // router.push(url)
    } else setQuestionType(attachmentQuiz.getQuestionType(index))
    console.log(index)
  }, [attachmentQuiz, index])

  useEffect(() => {
    console.log(questionType)
  }, [questionType])

  const onGoBack = () => {
    if (index === 0) setViewQuiz(false)
    else {
      setShouldTransitionAutomatically(false)
      setIndex((prev) => prev - 1)
    }
  }

  const onGoToNextQuestion = () => {
    setShouldTransitionAutomatically(true)
    setIndex((prev) => prev + 1)
  }

  return (
    <>
      <AttachmentQuizV2Navigation onGoBack={onGoBack} />

      <Section
        key={`section_1`}
        className="flex flex-col flex-1 bg-gradient-to-r from-green-light to-primary-light/50 relative z-10 !pb-0"
        classNameInner="flex flex-col flex-1 pt-8 lg:pt-24 !max-w-[792px]">
        {questionType === 'Screen' ? (
          <AttachmentQuizV2Screen question={attachmentQuiz.questions[index]} />
        ) : questionType === 'AttachmentStyleQuestion' ? (
          <AttachmentQuizV2QuizQuestion
            attachmentQuiz={attachmentQuiz}
            question={attachmentQuiz.questions[index] as TQuizQuestion<'AttachmentStyleQuestion'>}
          />
        ) : questionType === 'OptionSelect' ? (
          <AttachmentQuizV2OptionSelect
            attachmentQuiz={attachmentQuiz}
            question={attachmentQuiz.questions[index] as TQuizQuestion<'OptionSelect'>}
          />
        ) : questionType === 'FormInput' ? (
          <AttachmentQuizV2FormInput
            attachmentQuiz={attachmentQuiz}
            question={attachmentQuiz.questions[index] as TQuizQuestion<'FormInput'>}
          />
        ) : questionType === 'PillSelect' ? (
          <AttachmentQuizV2PillSelect
            attachmentQuiz={attachmentQuiz}
            question={attachmentQuiz.questions[index] as TQuizQuestion<'PillSelect'>}
          />
        ) : (
          <></>
        )}

        {(questionType === 'Screen' || attachmentQuiz.questions[index].userResponse) && (
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
                viewBox="0 0 120 120"
                initial="hidden"
                animate="visible">
                <motion.circle
                  cx="60"
                  cy="60"
                  r="50"
                  stroke="#8a50a0"
                  strokeWidth={'8px'}
                  fillOpacity={0}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    pathLength: {
                      duration:
                        (attachmentQuiz.questions[index] as TQuizQuestion<'Screen'>)?.duration || 4,
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
        percentage={((index + 1) / attachmentQuiz.questions.length) * 100}
      />
    </>
  )
}
