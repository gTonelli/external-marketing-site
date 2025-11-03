'use client'

// core
import { useCallback, useEffect, useRef, useState } from 'react'
// components
import { IDefaultProps } from '..'
import DatingQuizForm from './DatingQuizForm'
import {
  faSquareA,
  faSquareB,
  faSquareC,
  faSquareD,
  faArrowLeft,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import {
  DATING_QUIZ_FIRST_QUESTION,
  DATING_QUIZ_SINGLE_QUESTIONS,
  DATING_QUIZ_RELATIONSHIP_QUESTIONS,
  TDatingAssociation,
} from './config'
// libraries
import cx from 'classnames'
import { orderBy } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { isMobile } from 'react-device-detect'
import { gtag } from '../GoogleAdsTag'

interface IUserInfo {
  relationshipStatus: string
}

export interface IDatingQuizQuestionsProps extends IDefaultProps {
  quizName: string
  onQuizFinished?: () => void
}

let modifiedQuestions = [DATING_QUIZ_FIRST_QUESTION]

export type TDatingStage = Exclude<TDatingAssociation, 'relationshipStatus'>

export type TAnswerHistory = {
  index: number
  answerIndex: number
  answer: string
  question: string
  association: TDatingAssociation
}

export const DatingQuizQuestions = ({ className, quizName }: IDatingQuizQuestionsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [datingPoints, setDatingPoints] = useState(0)
  const [powerStrugglePoints, setPowerStrugglePoints] = useState(0)
  const [rhythmPoints, setRhythmPoints] = useState(0)
  const [devotionPoints, setDevotionPoints] = useState(0)
  const [stage, setStage] = useState<TDatingStage | null>(null)
  const [userInfo, setUserInfo] = useState<IUserInfo>({ relationshipStatus: '' })
  const [answerHistory, setAnswerHistory] = useState<TAnswerHistory[]>([])
  const quizStartedTracked = useRef(false)

  const trackProgressMobile = useCallback(() => {
    const progress = (currentIndex / modifiedQuestions.length) * 100
    if (document.visibilityState === 'hidden' && progress < 100) {
      Mixpanel.track.QuizProgress({
        quiz_name: quizName,
        progress: `${Math.round(progress)}%`,
        question: currentIndex,
        total_questions: modifiedQuestions.length,
      })
    }
  }, [currentIndex, quizName])

  const trackProgressDesktop = useCallback(() => {
    const progress = (currentIndex / modifiedQuestions.length) * 100

    if (progress < 100) {
      Mixpanel.track.QuizProgress({
        quiz_name: quizName,
        progress: `${Math.round(progress)}%`,
        question: currentIndex,
        total_questions: modifiedQuestions.length,
      })
    }
  }, [currentIndex, quizName])

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('visibilitychange', trackProgressMobile)
    } else {
      window.addEventListener('pagehide', trackProgressDesktop)
    }

    return () => {
      window.removeEventListener('visibilitychange', trackProgressMobile)
      window.removeEventListener('pagehide', trackProgressDesktop)
    }
  }, [currentIndex, trackProgressMobile, trackProgressDesktop])

  const onGoBack = useCallback(() => {
    if (currentIndex === 0) return

    const previousIndex = currentIndex - 1
    const lastAnswer = answerHistory[answerHistory.length - 1]

    if (lastAnswer?.association) {
      switch (lastAnswer.association) {
        case 'dating':
          setDatingPoints((prev) => Math.max(0, prev - 1))
          break
        case 'powerStruggle':
          setPowerStrugglePoints((prev) => Math.max(0, prev - 1))
          break
        case 'rhythm':
          setRhythmPoints((prev) => Math.max(0, prev - 1))
          break
        case 'devotion':
          setDevotionPoints((prev) => Math.max(0, prev - 1))
          break
      }
    }

    if (previousIndex === 0) {
      modifiedQuestions = [DATING_QUIZ_FIRST_QUESTION]
      setUserInfo({ relationshipStatus: '' })
    }

    setAnswerHistory((prev) => prev.slice(0, -1))
    setCurrentIndex(previousIndex)
    setStage(null)
  }, [currentIndex, answerHistory])

  const onQuestionAnswer = useCallback(
    (optionIndex: number) => () => {
      let _dating = datingPoints
      let _power = powerStrugglePoints
      let _rhythm = rhythmPoints
      let _devotion = devotionPoints

      const currentQuestion = modifiedQuestions[currentIndex]

      const updateUserInfo = (field: keyof IUserInfo, value: string) => {
        setUserInfo((prev) => ({ ...prev, [field]: value }))
      }

      const handleQuizStart = () => {
        if (quizStartedTracked.current) return
        quizStartedTracked.current = true
        Mixpanel.track.QuizStarted({ quiz_name: quizName })
      }

      const handleInitialQuestion = () => {
        const selectedLabel = currentQuestion.options[optionIndex].label
        if (selectedLabel === 'Single') {
          updateUserInfo('relationshipStatus', 'single')
          modifiedQuestions = [DATING_QUIZ_FIRST_QUESTION, ...DATING_QUIZ_SINGLE_QUESTIONS]
          setAnswerHistory((prev) => [
            ...prev,
            {
              index: currentIndex,
              answerIndex: optionIndex,
              answer: selectedLabel,
              question: currentQuestion.question,
              association: currentQuestion.options[optionIndex].association as TDatingStage,
            },
          ])
        } else {
          updateUserInfo('relationshipStatus', 'relationship')
          modifiedQuestions = [DATING_QUIZ_FIRST_QUESTION, ...DATING_QUIZ_RELATIONSHIP_QUESTIONS]
          setAnswerHistory((prev) => [
            ...prev,
            {
              index: currentIndex,
              answerIndex: optionIndex,
              answer: selectedLabel,
              question: currentQuestion.question,
              association: currentQuestion.options[optionIndex].association,
            },
          ])
        }
        handleQuizStart()
      }

      const handleScoreTracking = () => {
        const association = currentQuestion.options[optionIndex].association as TDatingStage
        setAnswerHistory((prev) => [
          ...prev,
          {
            index: currentIndex,
            answerIndex: optionIndex,
            answer: currentQuestion.options[optionIndex].label,
            question: currentQuestion.question,
            association,
          },
        ])

        switch (association) {
          case 'dating':
            _dating += 1
            setDatingPoints(_dating)
            break
          case 'powerStruggle':
            _power += 1
            setPowerStrugglePoints(_power)
            break
          case 'rhythm':
            _rhythm += 1
            setRhythmPoints(_rhythm)
            break
          case 'devotion':
            _devotion += 1
            setDevotionPoints(_devotion)
            break
        }
      }

      const handleQuizEnd = () => {
        Mixpanel.track.QuizFinished({
          quiz_name: quizName,
          progress: '100%',
        })

        gtag({
          event: 'quiz_tracking',
          eventCategory: 'Quiz',
          eventAction: 'Finished',
        })

        setStage(
          calculateResult({
            dating: _dating,
            powerStruggle: _power,
            rhythm: _rhythm,
            devotion: _devotion,
          })
        )
      }

      if (currentIndex === 0) {
        handleInitialQuestion()
      } else {
        handleScoreTracking()
      }

      if (currentIndex === modifiedQuestions.length - 1) {
        handleQuizEnd()
      }

      setCurrentIndex(currentIndex + 1)
    },
    [
      datingPoints,
      powerStrugglePoints,
      rhythmPoints,
      devotionPoints,
      currentIndex,
      quizName,
      modifiedQuestions,
    ]
  )

  let options = null
  const optionIcons = [faSquareA, faSquareB, faSquareC, faSquareD]
  if (currentIndex <= modifiedQuestions.length - 1) {
    options = modifiedQuestions[currentIndex].hasOwnProperty('options')
      ? modifiedQuestions[currentIndex]['options'].map((option) => option.label)
      : []
  }

  const calculateResult = ({
    dating,
    powerStruggle,
    rhythm,
    devotion,
  }: {
    dating: number
    powerStruggle: number
    rhythm: number
    devotion: number
  }): TDatingStage => {
    const stages = [
      { stage: 'dating', score: dating },
      { stage: 'powerStruggle', score: powerStruggle },
      { stage: 'rhythm', score: rhythm },
      { stage: 'devotion', score: devotion },
    ]
    return orderBy(stages, ['score'], ['desc'])[0].stage as TDatingStage
  }

  return (
    <section className={cx('w-full default-padding mx-auto lg:max-w-3xl', className)}>
      {currentIndex !== modifiedQuestions.length ? (
        <div className="text-center">
          {currentIndex > 0 && (
            <div className="grid grid-cols-12 gap-4 mb-6">
              <div className="col-span-4">
                <div className="mb-6 flex justify-start">
                  <button
                    onClick={onGoBack}
                    className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Back
                  </button>
                </div>
              </div>

              <div className="col-span-4">
                <p className="font-bold lg:text-lg">
                  {`${currentIndex}`}/{modifiedQuestions.length - 1}
                </p>
              </div>
            </div>
          )}

          <p className="!font-ssp font-bold text-xl lg:text-2xl">{`${
            currentIndex > 0 ? currentIndex + ')' : ''
          } ${modifiedQuestions[currentIndex].question}`}</p>

          <div className={`flex flex-col flex-center space-y-4 mt-6 mx-auto lg:w-3/4`}>
            {options &&
              options.map((obj, index) => (
                <button
                  key={`option_${index}`}
                  className={
                    'w-full flex rounded bg-white-secondary text-left p-4 border-2 border-transparent lg:hover:bg-white lg:hover:shadow-lg lg:hover:border-primary'
                  }
                  onClick={onQuestionAnswer(index)}>
                  <span>
                    <FontAwesomeIcon size="1x" className="mr-2" icon={optionIcons[index]} />
                  </span>

                  <span>{obj}</span>
                </button>
              ))}
          </div>
        </div>
      ) : (
        <>
          <DatingQuizForm
            userInfo={userInfo as IUserInfo}
            datingStage={stage as TDatingStage}
            answerHistory={answerHistory}
            quizData={{
              dating: datingPoints,
              powerStruggle: powerStrugglePoints,
              rhythm: rhythmPoints,
              devotion: devotionPoints,
            }}
          />

          <p className="text-center mt-6">
            We're crafting your personalized results – just a moment longer!
          </p>
        </>
      )}
    </section>
  )
}
