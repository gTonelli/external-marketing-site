'use client'

// core
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
// components
import { IDefaultProps } from '@/components'
import { ProgressBar } from '../ProgressBar'
import { Button } from '../Button/Button'
import { RegistrationForm } from '../RegistrationForm'
// config
import {
  QUIZ_DETAILED_QUESTIONS as detailedQuestions,
  EXTERNALQUIZQUESTIONS as questions,
} from './config'
import { REGULAR_COPY } from '@/app/config'
// libraries
import _ from 'lodash'
import cx from 'classnames'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
import { useGoogleTagManager } from '@/modules/GTM'
// utils
import { ERoutes } from '@/utils/constants'
import { Text } from '../Text/Text'

let modifiedQuestions = [...questions]

export interface IUserInfo {
  relationshipStatus?: string
  relationship?: string
  attachment?: string
  age?: string
  gender?: string
  relationshipIntend?: string
  relationshipSatisfaction?: string
}

export interface IResultProps extends IDefaultProps {
  ap: number
  da: number
  fa: number
  sa: number
}

type TUserStyle = 'fa' | 'da' | 'sa' | 'ap'

interface IQuizFormProps extends IResultProps {
  userStyle: TUserStyle
  userInfo?: IUserInfo
  quiz_traffic_source: TQuizTrafficSources
}

interface IQuizSection extends IDefaultProps {
  newQuiz?: boolean
  quiz_traffic_source: TQuizTrafficSources
  quizName?: 'Attachment Style Quiz' | 'Main Funnel Quiz'
  showStartButton?: boolean
}

export const AttachmentQuiz = ({
  className,
  newQuiz,
  quiz_traffic_source,
  quizName = 'Main Funnel Quiz',
  showStartButton = true,
}: IQuizSection) => {
  // ======================== State ====================
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewQuiz, setViewQuiz] = useState(!showStartButton)
  const [apPoints, setApPoints] = useState(0)
  const [daPoints, setDaPoints] = useState(0)
  const [faPoints, setFaPoints] = useState(0)
  const [saPoints, setSaPoints] = useState(0)
  const [style, setStyle] = useState('')
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    relationship: '',
    attachment: '',
    age: '',
    gender: '',
    relationshipIntend: '',
    relationshipSatisfaction: '',
  })
  const [index, setIndex] = useState(0)
  // ======================== Hooks ====================
  const tagManager = useGoogleTagManager()

  const calculateResult = ({ fa, ap, da, sa }: Omit<IResultProps, 'quizName'>) => {
    const attachmentStyleScores = [
      { style: 'fa', score: fa },
      { style: 'ap', score: ap },
      { style: 'da', score: da },
      { style: 'sa', score: sa },
    ]
    const _style = _.orderBy(attachmentStyleScores, ['score'], ['desc'])[0].style

    return _style
  }

  const onStartQuiz = useCallback(() => {
    Mixpanel.track.QuizStarted({
      quiz_name: quizName,
    })
    setViewQuiz(true)
  }, [viewQuiz, quizName])

  const onQuestionAnswer = useCallback(
    (answer: string) => () => {
      const threshold = [25, 50, 75]
      let _ap = apPoints
      let _fa = faPoints
      let _da = daPoints
      let _sa = saPoints

      if (currentIndex === 0) {
        if (answer === 'Yes') {
          Mixpanel.track.SegmentUser({
            segment_type: 'in a relationship',
          })
          modifiedQuestions.splice(1, 0, detailedQuestions[4])
          modifiedQuestions.splice(2, 0, detailedQuestions[2])
        } else {
          Mixpanel.track.SegmentUser({
            segment_type: 'not in a relationship',
          })
          modifiedQuestions.splice(1, 0, detailedQuestions[5])
        }
      }

      const progress = (currentIndex / modifiedQuestions.length) * 100
      if (progress >= threshold[index]) {
        Mixpanel.track.QuizProgress({
          quiz_name: 'Attachment Style Quiz',
          progress: `${threshold[index]}%`,
        })

        setIndex((prev) => prev + 1)
      }
      if (answer === 'True') {
        // Save the score based on association and move to the next one
        if (currentIndex >= 0) {
          const question = modifiedQuestions[currentIndex]

          if (question.association === 'fa') {
            _fa += 1
            setFaPoints(_fa)
          } else if (question.association === 'ap') {
            _ap += 1
            setApPoints(_ap)
          } else if (question.association === 'sec') {
            _sa += 1
            setSaPoints(_sa)
          } else if (question.association === 'da') {
            _da += 1
            setDaPoints(_da)
          } else if (question.association === 'relationship') {
            setUserInfo({ ...userInfo, relationship: answer })
          } else if (question.association === 'attachment') {
            setUserInfo({ ...userInfo, attachment: answer })
          }
        }
      } else {
        const question = modifiedQuestions[currentIndex]
        if (question.hasOwnProperty('options')) {
          setUserInfo({ ...userInfo, [question.association]: answer })
        }
      }
      // Check if the question was last - go to the ResultsPage
      if (currentIndex === modifiedQuestions.length - 1) {
        Mixpanel.track.QuizFinished({
          quiz_name: 'Attachment Style Quiz',
        })

        tagManager?.track({
          event: 'quiz_tracking',
          eventCategory: 'Quiz',
          eventAction: 'Finished',
        })

        setStyle(calculateResult({ fa: _fa, ap: _ap, da: _da, sa: _sa }))
      }
      setCurrentIndex(currentIndex + 1)
    },
    [currentIndex, faPoints, apPoints, saPoints, daPoints, index]
  )

  let options = null
  if (currentIndex <= modifiedQuestions.length - 1) {
    options = modifiedQuestions[currentIndex].hasOwnProperty('options')
      ? modifiedQuestions[currentIndex]['options']
      : ['True', 'False']
  }

  if (!viewQuiz) {
    return (
      <div className={cx('text-center', className)}>
        <Text.Paragraph
          useMD
          className="max-w-3xl mt-4 mx-10 lg:mx-0"
          content={REGULAR_COPY.copy}
        />
        <Button
          className="mt-7 bg-primary-old px-20 py-4 lg:mt-8"
          label={REGULAR_COPY.button_label}
          onClick={onStartQuiz}
        />
      </div>
    )
  } else {
    return (
      <section className={cx('w-full default-padding mx-auto lg:mt-16 lg:max-w-3xl', className)}>
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
              <Text
                className="font-bold text-lg lg:text-lg"
                content={`${currentIndex + 1}) ${modifiedQuestions[currentIndex].question}`}
              />
            )}

            <div className={`flex flex-col flex-center space-y-4 mt-6 mx-auto lg:w-3/4`}>
              {options!.map((obj, index) =>
                newQuiz ? (
                  <Button
                    key={`option_${index}`}
                    className="w-full rounded-full bg-gradient-to-r from-primary-old to-primary-light !min-w-min text-black uppercase lg:py-4 sm:!w-full"
                    label={obj}
                    onClick={onQuestionAnswer(obj)}
                  />
                ) : (
                  <Button
                    key={`option_${index}`}
                    className="w-3/4 rounded bg-primary-old lg:w-full lg:py-4"
                    label={obj}
                    onClick={onQuestionAnswer(obj)}
                  />
                )
              )}
            </div>
          </div>
        ) : (
          <FormSection
            ap={apPoints}
            da={daPoints}
            fa={faPoints}
            sa={saPoints}
            quiz_traffic_source={quiz_traffic_source}
            userInfo={userInfo}
            userStyle={style as TUserStyle}
          />
        )}
      </section>
    )
  }
}

///////////////////////////////////////////
//              FORM SECTION
///////////////////////////////////////////

const FormSection = ({
  ap,
  da,
  fa,
  sa,
  quiz_traffic_source,
  userInfo,
  userStyle,
}: IQuizFormProps) => {
  // =================== State ======================
  const [showResults, setShowResults] = useState(true)
  // =================== Hooks ======================
  const tagManager = useGoogleTagManager()

  const router = useRouter()

  // Reset questions
  modifiedQuestions = [...questions]

  // Storage var for a/b test on RR page
  const emailSeriesTest = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.5

  // ==================== Events ====================
  const onAfterSubmit = () => {
    tagManager?.track({
      event: 'form_tracking',
      eventCategory: 'Attachment Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    if (quiz_traffic_source !== 'organic') {
      Storage.set('gm-716-pricing-test', emailSeriesTest)
      Mixpanel.track.ExperimentStarted({
        'Experiment name': 'GM-716-pricing-test',
        'Variant name': emailSeriesTest ? 'Variant 1' : 'Control',
      })
    }

    if (quiz_traffic_source === 'organic') {
      setShowResults(!showResults)
    } else if (userStyle === 'fa') {
      router.push('/quiz/results/fa')
    } else {
      router.push('/quiz/' + userStyle)
    }
  }

  return (
    <section className="flex justify-center">
      {showResults ? (
        <div className="max-w-5xl w-full rounded-2xl py-12 mt-6 mx-2 xxs:shadow-centered md:mx-4">
          <h2 className="font-bold font-sspb mx-4">
            Fill Out the Form Below to View Your Free Results!
          </h2>

          {/* QUIZ COMPLETION FORM */}
          <RegistrationForm
            clientTag={getClientTag({
              quiz_traffic_source,
              userStyle,
              splitTests: { emailSeriesTest },
            })}
            submitButtonLabel="SUBMIT NOW"
            userInfo={userInfo}
            userStyle={userStyle}
            onAfterSubmit={onAfterSubmit}
          />
        </div>
      ) : (
        <div className="w-full">
          <ResultSection ap={ap} da={da} fa={fa} sa={sa} />
        </div>
      )}
    </section>
  )
}

///////////////////////////////////////////
//        RESULTS SECTION (ORGANIC)
///////////////////////////////////////////

const ResultSection = ({ ap, da, fa, sa }: IResultProps) => {
  // ==================== Hooks ====================
  const router = useRouter()

  const goToMembershipsPage = () => {
    Mixpanel.track.ButtonClicked({
      page_name: 'Attachment Style Quiz',
      redirection: 'Memberships page',
    })

    router.push(ERoutes.COLLECTIONS)
  }

  const calcPercentage = () => {
    const totalTrueAnswers = ap + da + fa + sa
    const apPercentage = totalTrueAnswers === 0 ? 0 : ((ap / totalTrueAnswers) * 100).toFixed(0)

    const daPercentage = totalTrueAnswers === 0 ? 0 : ((da / totalTrueAnswers) * 100).toFixed(0)

    const faPercentage = totalTrueAnswers === 0 ? 0 : ((fa / totalTrueAnswers) * 100).toFixed(0)

    const saPercentage = totalTrueAnswers === 0 ? 0 : ((sa / totalTrueAnswers) * 100).toFixed(0)

    return {
      'Anxious Preoccupied': apPercentage,
      'Dismissive Avoidant': daPercentage,
      'Fearful Avoidant': faPercentage,
      'Securely Attached': saPercentage,
    }
  }

  return (
    <>
      {Object.entries(calcPercentage()).map((style, index) => (
        <div key={`result_${index}`} className="mt-6">
          <div className="w-3/4 font-bold text-left mx-auto lg:w-1/2">
            {style[0]} {style[1]}%
          </div>

          {/* PROGRESSBAR */}
          <div className="w-3/4 mx-auto lg:w-1/2">
            <div className="progressbar">
              <div
                className="progressbar-fill anim-progress-fil bg-primary"
                style={{ maxWidth: `${style[1]}%` }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="text-center">
        <Button
          className="rounded bg-primary-old mt-6"
          label="Start My Journey Today"
          onClick={goToMembershipsPage}
        />
      </div>
    </>
  )
}

type TQuizTrafficSources = 'organic' | 'paid'

interface IPossibleSplitTests {
  emailSeriesTest: boolean
}

interface IGetClientTagProps {
  userStyle: TUserStyle
  quiz_traffic_source: TQuizTrafficSources
  splitTests: IPossibleSplitTests
}

const getClientTag = ({ quiz_traffic_source, userStyle, splitTests }: IGetClientTagProps) => {
  let clientTag = `attachment-quiz-${userStyle}`

  if (quiz_traffic_source !== 'organic') {
    switch (userStyle) {
      case 'ap':
        if (splitTests.emailSeriesTest) clientTag = `attachment-quiz-ap-5.1`
        break
      case 'da':
        if (splitTests.emailSeriesTest) clientTag = `attachment-quiz-da-5.1`
        break
      case 'fa':
        if (splitTests.emailSeriesTest) clientTag = `attachment-quiz-fa-5.1`
        break
      case 'sa':
        if (splitTests.emailSeriesTest) clientTag = `attachment-quiz-sa-5.1`
        break
      default:
        break
    }
  }

  return clientTag
}
