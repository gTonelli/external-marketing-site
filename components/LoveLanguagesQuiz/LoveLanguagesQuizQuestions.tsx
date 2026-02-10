'use client'

// core
import { useCallback, useEffect, useRef, useState } from 'react'
// components
import { IDefaultProps } from '..'
import LoveLanguagesQuizForm from './LoveLanguagesQuizForm'
import { useLoveLanguagesQuiz } from './useLoveLanguagesQuiz'
import {
  faSquareA,
  faSquareB,
  faSquareC,
  faSquareD,
  faArrowLeft,
  faSquareE,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
import { gtag } from '../GoogleAdsTag'
// config
import { LOVE_LANGUAGES_QUIZ_QUESTIONS, TLoveLanguagesAssociation } from './config'
// libraries
import cx from 'classnames'
import { isMobile } from 'react-device-detect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// modules
import Mixpanel from '@/modules/Mixpanel'

export interface ILoveLanguagesQuizQuestionsProps extends IDefaultProps {
  quizName: string
  onQuizFinished?: () => void
}

export type TAnswerHistory = {
  index: number
  answerIndex: number
  answer: string
  question: string
  association: TLoveLanguagesAssociation
}

let modifiedQuestions = [...LOVE_LANGUAGES_QUIZ_QUESTIONS]

export const LoveLanguagesQuizQuestions = ({
  className,
  quizName,
}: ILoveLanguagesQuizQuestionsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [wordsOfAffirmationPoints, setWordsOfAffirmationPoints] = useState(0)
  const [qualityTimePoints, setQualityTimePoints] = useState(0)
  const [actsOfServicePoints, setActsOfServicePoints] = useState(0)
  const [physicalTouchPoints, setPhysicalTouchPoints] = useState(0)
  const [receivingGiftsPoints, setReceivingGiftsPoints] = useState(0)
  const [result, setResult] = useState<TLoveLanguagesAssociation | null>(null)
  const [answerHistory, setAnswerHistory] = useState<TAnswerHistory[]>([])
  const quizStartedTracked = useRef(false)
  const { calculateResult } = useLoveLanguagesQuiz()

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
        case 'wordsOfAffirmation':
          setWordsOfAffirmationPoints((prev) => Math.max(0, prev - 1))
          break
        case 'qualityTime':
          setQualityTimePoints((prev) => Math.max(0, prev - 1))
          break
        case 'actsOfService':
          setActsOfServicePoints((prev) => Math.max(0, prev - 1))
          break
        case 'physicalTouch':
          setPhysicalTouchPoints((prev) => Math.max(0, prev - 1))
          break
        case 'receivingGifts':
          setReceivingGiftsPoints((prev) => Math.max(0, prev - 1))
          break
      }
    }

    setAnswerHistory((prev) => prev.slice(0, -1))
    setCurrentIndex(previousIndex)
  }, [currentIndex, answerHistory])

  const onQuestionAnswer = useCallback(
    (optionIndex: number) => () => {
      let _wordsOfAffirmation = wordsOfAffirmationPoints
      let _qualityTime = qualityTimePoints
      let _actsOfService = actsOfServicePoints
      let _physicalTouch = physicalTouchPoints
      let _receivingGifts = receivingGiftsPoints

      const currentQuestion = modifiedQuestions[currentIndex]

      const handleQuizStart = () => {
        if (quizStartedTracked.current) return
        quizStartedTracked.current = true
        Mixpanel.track.QuizStarted({ quiz_name: quizName })
      }

      const handleScoreTracking = () => {
        const association = currentQuestion.options[optionIndex]
          .association as TLoveLanguagesAssociation
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
          case 'wordsOfAffirmation':
            _wordsOfAffirmation += 1
            setWordsOfAffirmationPoints(_wordsOfAffirmation)
            break
          case 'qualityTime':
            _qualityTime += 1
            setQualityTimePoints(_qualityTime)
            break
          case 'actsOfService':
            _actsOfService += 1
            setActsOfServicePoints(_actsOfService)
            break
          case 'physicalTouch':
            _physicalTouch += 1
            setPhysicalTouchPoints(_physicalTouch)
            break
          case 'receivingGifts':
            _receivingGifts += 1
            setReceivingGiftsPoints(_receivingGifts)
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

        setResult(
          calculateResult({
            wordsOfAffirmation: _wordsOfAffirmation,
            qualityTime: _qualityTime,
            actsOfService: _actsOfService,
            physicalTouch: _physicalTouch,
            receivingGifts: _receivingGifts,
          })
        )
      }

      if (currentIndex === 0) {
        handleQuizStart()
      }

      handleScoreTracking()

      if (currentIndex === modifiedQuestions.length - 1) {
        handleQuizEnd()
      }

      setCurrentIndex(currentIndex + 1)
    },
    [
      wordsOfAffirmationPoints,
      qualityTimePoints,
      actsOfServicePoints,
      physicalTouchPoints,
      receivingGiftsPoints,
      currentIndex,
      quizName,
      modifiedQuestions,
    ]
  )

  let options = null
  const optionIcons = [faSquareA, faSquareB, faSquareC, faSquareD, faSquareE]
  if (currentIndex <= modifiedQuestions.length - 1) {
    options = modifiedQuestions[currentIndex].hasOwnProperty('options')
      ? modifiedQuestions[currentIndex]['options'].map((option) => option.label)
      : []
  }

  return (
    <section className={cx('w-full default-padding mx-auto lg:max-w-3xl', className)}>
      {currentIndex !== modifiedQuestions.length ? (
        <div className="text-center">
          <div className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-4">
              {currentIndex > 0 && (
                <div className="mb-6 flex justify-start">
                  <button
                    onClick={onGoBack}
                    className="flex items-center text-sm text-gray-600 hover:text-gray-800 transition-colors">
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Back
                  </button>
                </div>
              )}
            </div>

            <div className="col-span-4">
              <p className="font-bold lg:text-lg">
                {`${currentIndex + 1}`}/{modifiedQuestions.length}
              </p>
            </div>
          </div>

          <p className="!font-ssp font-bold text-xl lg:text-2xl">{`${currentIndex + 1 + ')'} ${
            modifiedQuestions[currentIndex].question
          }`}</p>

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
          <LoveLanguagesQuizForm
            result={result as TLoveLanguagesAssociation}
            answerHistory={answerHistory}
            quizData={{
              wordsOfAffirmation: wordsOfAffirmationPoints,
              qualityTime: qualityTimePoints,
              actsOfService: actsOfServicePoints,
              physicalTouch: physicalTouchPoints,
              receivingGifts: receivingGiftsPoints,
            }}
          />
        </>
      )}
    </section>
  )
}
