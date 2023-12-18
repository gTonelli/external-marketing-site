'use client'

// core
// eslint-disable-next-line simple-import-sort/imports
import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// components
import { Text } from '@/components/Text/Text'
import { Button } from '@/components/Button/Button'
import { Image } from '@/components/Image'
// libraries
import cx from 'classnames'
import _ from 'lodash'
// modules
import { Pages } from '@/modules/Mixpanel'
// utils
import { QUESTIONS, RESULTS } from '../config'
import { ERoutes } from '@/utils/constants'
import { Page } from '@/components/Page'

export default function CorporateQuizQuestionsPage() {
  const page_name = 'Corporate Quiz Questions Page' as Pages
  //=========== Hooks =============
  const router = useRouter()

  const [pressedBtn, setPressedBtn] = useState<'true' | 'false' | 'back' | undefined>(undefined)

  // Remove the 'canViewResults' from LS
  useEffect(() => {
    localStorage.removeItem('canViewResults')

    document.title = 'The Attachment Style Quiz'
  }, [])

  const [currentQuestion, setCurrentQuestion] = useState<number>(0)

  const [apPoints, setApPoints] = useState<number>(0)
  const [daPoints, setDaPoints] = useState<number>(0)
  const [faPoints, setFaPoints] = useState<number>(0)
  const [saPoints, setSaPoints] = useState<number>(0)

  const calculateResult = (): keyof typeof RESULTS => {
    const pagePrefix = 'corp-'
    let userTag = ''
    const attachmentStyleScores = [
      { style: 'FA', score: faPoints },
      { style: 'AP', score: apPoints },
      { style: 'DA', score: daPoints },
      { style: 'SA', score: saPoints },
    ]
    const _style: keyof typeof RESULTS = _.orderBy(attachmentStyleScores, ['score'], ['desc'])[0]
      .style as any
    localStorage.setItem('userTag', `corp-attachment-quiz-${_style}`.toLowerCase())
    return _style
  }

  const onQuestionAnswer = useCallback(
    (answer: boolean) => () => {
      // Last question - go to the ResultsPage
      if (currentQuestion === QUESTIONS.length - 1) {
        // Point count increases only when the answer was true (check the if statement below)
        const totalTrueAnswers = apPoints + daPoints + faPoints + saPoints

        //  Formula for each style:
        //      number of questions answered true for that style (the ammount of points) divided by number of all questions answered true
        const apPercentage = String(
          totalTrueAnswers === 0 ? 0 : ((apPoints / totalTrueAnswers) * 100).toFixed(0)
        )
        const daPercentage = String(
          totalTrueAnswers === 0 ? 0 : ((daPoints / totalTrueAnswers) * 100).toFixed(0)
        )
        const faPercentage = String(
          totalTrueAnswers === 0 ? 0 : ((faPoints / totalTrueAnswers) * 100).toFixed(0)
        )
        const saPercentage = String(
          totalTrueAnswers === 0 ? 0 : ((saPoints / totalTrueAnswers) * 100).toFixed(0)
        )

        const result = calculateResult()

        router.push(
          `${ERoutes.CORPORATE_QUIZ_RESULTS}/${result}/${apPercentage}/${daPercentage}/${faPercentage}/${saPercentage}`
        )
      }
      // Any other question - save the score based on association and move to the next one
      else {
        // Answered `true`
        if (answer) {
          if (currentQuestion > 0) {
            if (QUESTIONS[currentQuestion].association === 'fa') {
              setFaPoints(faPoints + 1)
            } else if (QUESTIONS[currentQuestion].association === 'ap') {
              setApPoints(apPoints + 1)
            } else if (QUESTIONS[currentQuestion].association === 'sec') {
              setSaPoints(saPoints + 1)
            } else {
              setDaPoints(daPoints + 1)
            }
          }
        } else {
          // Answered `false` - do nothing
        }

        // Animations
        setPressedBtn(answer ? 'true' : 'false')

        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1)

          setTimeout(() => {
            setPressedBtn(undefined)
          }, 250)
        }, 250)
      }
    },
    [apPoints, daPoints, faPoints, saPoints, currentQuestion]
  )

  const onGoToPreviousQuestion = useCallback(() => {
    if (currentQuestion === 0) {
      router.back()
    } else {
      // Animations
      setPressedBtn('back')

      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1)

        setTimeout(() => {
          setPressedBtn(undefined)
        }, 250)
      }, 250)
    }
  }, [currentQuestion])

  return (
    <Page className="question-page w-full" page_name="Corporate Quiz Results Page">
      {/* QUESTION  */}
      <div className="question-page-content relative z-10">
        <div className="question">
          <Text.Heading
            className="text-left mb-5"
            content={`Question ${currentQuestion + 1}`}
            size={1}
          />

          <Text.Paragraph
            className={cx(
              'mb-14 lg:h-20 lg:mb-6',
              (pressedBtn === 'true' || pressedBtn === 'false') && 'anim-question',
              pressedBtn === 'back' && 'anim-question anim-question-reverse'
            )}
            content={QUESTIONS[currentQuestion]?.question || ''}
          />

          {/* ANSWER BUTTONS */}
          <div className="button-answer-row">
            <Button
              className={cx('button-answer', pressedBtn === 'true' && 'button-answer-active')}
              label="TRUE"
              onClick={onQuestionAnswer(true)}
            />
            <Button
              className={cx('button-answer', pressedBtn === 'false' && 'button-answer-active')}
              label="FALSE"
              onClick={onQuestionAnswer(false)}
            />
          </div>

          {/* BACK BUTTON */}
          <div className="w-full flex justify-center">
            <button className="button-back tooltip" onClick={onGoToPreviousQuestion}>
              <Image className="mx-auto" src="CorporatePage/corporate_question_arrow_back.svg" />

              <span className="tooltiptext">
                {currentQuestion === 0 ? 'Go back' : 'Go to the previous question'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* BACKGROUND IMAGE DESKTOP */}
      <Image
        className="w-full bg-desktop bg-bottom"
        src="CorporatePage/corporate_bg_question.png"
      />
    </Page>
  )
}
