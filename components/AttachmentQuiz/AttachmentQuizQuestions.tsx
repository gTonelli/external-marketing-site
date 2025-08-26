'use client'

// core
import { useCallback, useEffect, useState } from 'react'
// components
import { ProgressBar } from '../ProgressBar'
import { IDefaultProps } from '..'
import { Text } from '../Text/Text'
import { IResultProps, IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { AttachmentQuizForm } from './AttachmentQuizForm'
// config
import {
  QUIZ_DETAILED_QUESTIONS as detailedQuestions,
  EXTERNALQUIZQUESTIONS as questions,
  QUIZ_STATS as statsList,
} from './config'
// libraries
import cx from 'classnames'
import { orderBy } from 'lodash'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { isMobile } from 'react-device-detect'
import { gtag } from '../GoogleAdsTag'
// utils
import { TStyle } from '@/utils/types'

let modifiedQuestions = [...questions]

export interface IAttachmentQuizQuestionsProps extends IDefaultProps {
  newQuiz?: boolean
  quizName: string
  quiz_traffic_source: TQuizTrafficSources
  isQuizVariant?: boolean
  onQuizFinished?: () => void
}

export const AttachmentQuizQuestions = ({
  className,
  newQuiz,
  quizName,
  quiz_traffic_source,
  isQuizVariant,
}: IAttachmentQuizQuestionsProps) => {
  // ======================== State ====================
  const [currentIndex, setCurrentIndex] = useState(0)
  const [apPoints, setApPoints] = useState(0)
  const [daPoints, setDaPoints] = useState(0)
  const [faPoints, setFaPoints] = useState(0)
  const [saPoints, setSaPoints] = useState(0)
  const [showStat, setShowStat] = useState(false)
  const [stats, setStats] = useState<string[]>([])
  const [statsPosition, setStatsPostion] = useState<number[]>([])
  const [currentStatIndex, setCurrentStatIndex] = useState(0)
  const [style, setStyle] = useState('')
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    age: '',
    attachment: '',
    attachmentFamiliarity: '',
    gender: '',
    relationship: '',
    relationshipIntend: '',
    relationshipSatisfaction: '',
    relationshipStatus: '',
    intent: '',
  })

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
    if (showStat) {
      const timer = setTimeout(() => {
        setCurrentStatIndex(currentStatIndex + 1)
        setShowStat(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [showStat])

  useEffect(() => {
    if (isQuizVariant) {
      // select 4 random items from stats list
      setStats(
        statsList
          .slice()
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)
      )
      const genRandom = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min
      const positions = [genRandom(7, 10), genRandom(17, 20), genRandom(27, 30)]
      setStatsPostion(positions)
    }
  }, [isQuizVariant])

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

  const onQuestionAnswer = useCallback(
    (answer: string) => () => {
      let _ap = apPoints
      let _fa = faPoints
      let _da = daPoints
      let _sa = saPoints

      const currentQuestion = modifiedQuestions[currentIndex]

      const updateUserInfo = (field: keyof IUserInfo, value: string) => {
        setUserInfo((prev) => ({ ...prev, [field]: value }))
      }

      const handleInitialQuestion = () => {
        if (currentQuestion.association === 'relationshipStatus') {
          updateUserInfo('relationshipStatus', answer)
        }

        if (answer === 'Yes') {
          modifiedQuestions.splice(1, 0, detailedQuestions[4])
          modifiedQuestions.splice(2, 0, detailedQuestions[2])
        } else {
          modifiedQuestions.splice(1, 0, detailedQuestions[5])
        }
      }

      const handleScoreTracking = () => {
        switch (currentQuestion.association) {
          case 'fa':
            _fa += 1
            setFaPoints(_fa)
            break
          case 'ap':
            _ap += 1
            setApPoints(_ap)
            break
          case 'da':
            _da += 1
            setDaPoints(_da)
            break
          case 'sec':
            _sa += 1
            setSaPoints(_sa)
            break
          case 'attachment':
            updateUserInfo(currentQuestion.association as keyof IUserInfo, answer)
        }
      }

      const handleOptionAnswer = () => {
        if (currentQuestion.associationType === 'userInfo') {
          updateUserInfo(currentQuestion.association as keyof IUserInfo, answer)
        }
      }

      const handleQuizEnd = () => {
        Mixpanel.track.QuizFinished({
          quiz_name: quizName,
          quiz_traffic_source,
          progress: '100%',
        })

        gtag({
          event: 'quiz_tracking',
          eventCategory: 'Quiz',
          eventAction: 'Finished',
        })

        setStyle(calculateResult({ fa: _fa, ap: _ap, da: _da, sa: _sa }))
      }

      if (currentIndex == 0) {
        handleInitialQuestion()
      } else {
        if (answer === 'True') {
          handleScoreTracking()
        } else {
          handleOptionAnswer()
        }
      }

      if (currentIndex === modifiedQuestions.length - 1) {
        handleQuizEnd()
      }

      if (
        currentIndex + 1 === statsPosition[currentStatIndex] ||
        currentIndex + 1 === modifiedQuestions.length
      )
        setShowStat(true)
      setCurrentIndex(currentIndex + 1)
    },
    [
      apPoints,
      daPoints,
      faPoints,
      saPoints,
      currentIndex,
      quizName,
      isQuizVariant,
      quiz_traffic_source,
      modifiedQuestions,
    ]
  )

  let options = null
  if (currentIndex <= modifiedQuestions.length - 1) {
    options = modifiedQuestions[currentIndex].hasOwnProperty('options')
      ? modifiedQuestions[currentIndex]['options']
      : ['True', 'False']
  }

  const calculateResult = ({ fa, ap, da, sa }: Omit<IResultProps, 'quizName'>) => {
    const attachmentStyleScores = [
      { style: 'fa', score: fa },
      { style: 'ap', score: ap },
      { style: 'da', score: da },
      { style: 'sa', score: sa },
    ]
    const _style = orderBy(attachmentStyleScores, ['score'], ['desc'])[0].style

    return _style
  }

  return (
    <section className={cx('w-full default-padding mx-auto lg:max-w-3xl', className)}>
      {/* QUIZ SECTION */}
      {currentIndex !== modifiedQuestions.length ? (
        <div className="text-center">
          {/* PROGRESS BAR */}
          <ProgressBar
            showPercentage
            className="p-1 mb-8 mx-auto lg:mb-10 w-3/4 lg:w-2/3"
            color="primary"
            percentage={Number(((100 / modifiedQuestions.length || 1) * currentIndex).toFixed(0))}
          />

          {newQuiz ? (
            <div>
              <Text
                className="font-sspb text-3xl text-center mb-4 lg:text-3xl"
                content={`Question ${currentIndex + 1}`}
              />

              <Text
                className="text-lg text-center lg:w-3/4 lg:mx-auto"
                content={modifiedQuestions[currentIndex].question}
              />
            </div>
          ) : (
            <>
              {isQuizVariant && statsPosition[currentStatIndex] === currentIndex ? (
                <p>
                  We're personalizing the next question based on your answers. Just a moment longer!
                </p>
              ) : (
                <Text
                  className="font-bold text-lg lg:text-lg"
                  content={`${currentIndex + 1}) ${modifiedQuestions[currentIndex].question}`}
                />
              )}
            </>
          )}

          <div className={`flex flex-col flex-center space-y-4 mt-6 mx-auto lg:w-3/4`}>
            {isQuizVariant && currentIndex === statsPosition[currentStatIndex] ? (
              <div className="text-center bg-white-secondary p-6">
                <strong>{stats[currentStatIndex]}</strong>
              </div>
            ) : (
              options!.map((obj, index) =>
                newQuiz ? (
                  <button
                    key={`option_${index}`}
                    className="w-full rounded-full bg-gradient-to-r from-primary-old to-primary-light border-2 border-primary !min-w-min uppercase text-black tracking-10 py-4 sm:!w-full 
                    lg:hover:bg-opacity-50 lg:hover:text-white lg:hover:shadow-md"
                    onClick={onQuestionAnswer(obj)}>
                    {obj}
                  </button>
                ) : (
                  <button
                    key={`option_${index}`}
                    className="w-3/4 rounded bg-primary-old border-2 border-primary text-white py-3 lg:w-full lg:py-4 lg:hover:bg-opacity-50 lg:hover:shadow-md"
                    onClick={onQuestionAnswer(obj)}>
                    {obj}
                  </button>
                )
              )
            )}
          </div>
        </div>
      ) : (
        <>
          {isQuizVariant && showStat && currentIndex === modifiedQuestions.length ? (
            <div className="text-center">
              <p className="mb-4">
                We’re crafting your personalized results based on your answers. Just a moment
                longer!
              </p>

              <div className="bg-white-secondary p-6">
                <strong>{stats[currentStatIndex]}</strong>
              </div>
            </div>
          ) : (
            <AttachmentQuizForm
              quiz_traffic_source={quiz_traffic_source}
              userInfo={userInfo}
              userStyle={style as TStyle}
              quizData={{ ...userInfo, fa: faPoints, ap: apPoints, da: daPoints, sa: saPoints }}
            />
          )}
        </>
      )}
    </section>
  )
}
