'use client'

// core
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
// components
import { IDefaultProps, Button, ProgressBar, QuizRegistrationForm } from '@/components'
// config
import {
  QUIZ_DETAILED_QUESTIONS as detailedQuestions,
  EXTERNALQUIZQUESTIONS as questions,
} from './config'
// libraries
import _ from 'lodash'
// modules
import Mixpanel from '@/modules/Mixpanel'
import Storage from '@/modules/Storage'
import { ELinks } from '@/utils'

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

interface IQuizSection {
  quiz_traffic_source: TQuizTrafficSources
}

export const AttachmentQuiz = ({ quiz_traffic_source }: IQuizSection) => {
  // ======================== State ====================
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const onQuestionAnswer = useCallback(
    (answer: string) => () => {
      const threshold = [25, 50, 75]
      let _ap = apPoints
      let _fa = faPoints
      let _da = daPoints
      let _sa = saPoints

      if (currentIndex === 0) {
        if (answer === 'yes') {
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
      if (answer === 'true') {
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
      : ['true', 'false']
  }
  return (
    <section className="w-full mx-auto lg:mt-16 lg:max-w-3xl">
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

          <p className="font-bold text-2xl lg:text-2xl">{`${currentIndex + 1}) ${
            modifiedQuestions[currentIndex].question
          }`}</p>

          <div className={`flex flex-col flex-center space-y-4 mt-6 mx-auto lg:w-3/4 `}>
            {options!.map((obj, index) => (
              <Button
                key={`option_${index}`}
                className="w-3/4 rounded bg-primary-old lg:w-full lg:py-4"
                label={obj}
                onClick={onQuestionAnswer(obj)}
              />
            ))}
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

  const router = useRouter()

  // Reset questions
  modifiedQuestions = [...questions]

  // Storage var for a/b test on RR page
  const emailSeriesTest = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.5

  // ==================== Events ====================
  const onAfterSubmit = () => {
    if (quiz_traffic_source !== 'organic' && userStyle == 'fa') {
      Mixpanel.track.ExperimentStarted({
        'Experiment name': 'Intent Project',
        'Variant name': quiz_traffic_source === 'intent_segment' ? 'Variant 1' : 'Control',
      })
    }

    if (quiz_traffic_source !== 'organic') {
      Storage.set('gm-716-pricing-test', emailSeriesTest)
      Mixpanel.track.ExperimentStarted({
        'Experiment name': 'GM-716-pricing-test',
        'Variant name': emailSeriesTest ? 'Variant 1' : 'Control',
      })
    }

    if (quiz_traffic_source === 'organic') {
      setShowResults(!showResults)
    } else if (quiz_traffic_source === 'intent_segment' && userStyle === 'fa') {
      router.push(ELinks.INTENT_PAGE)
    } else if (userStyle === 'fa') {
      router.push('/quiz/results/fa')
    } else {
      router.push('quiz/' + userStyle)
    }
  }

  return (
    <section className="flex justify-center">
      {showResults ? (
        <div className="max-w-5xl w-full rounded-2xl py-12 mt-6 mx-2 xxs:shadow-centered md:mx-4">
          <h3 className="font-bold font-sspb mx-4">
            Fill Out the Form Below to View Your Free Results!
          </h3>

          {/* QUIZ COMPLETION FORM */}
          <QuizRegistrationForm
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

    router.push(ELinks.MEMBERSHIPS_PAGE)
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
        <div className="mt-6">
          <div className="w-3/4 font-bold text-left mx-auto lg:w-1/2">
            {style[0]} {style[1]}%
          </div>

          {/* PROGRESSBAR */}
          <div className="w-3/4 mx-auto lg:w-1/2">
            <div className="progressbar">
              <div
                className="progressbar-fill anim-progress-fil bg-primary-old"
                style={{ maxWidth: `${style[1]}%` }}
              />
            </div>
          </div>
        </div>
      ))}
      <Button
        className="rounded bg-primary-old mt-6"
        label="Start My Journey Today"
        onClick={goToMembershipsPage}
      />
    </>
  )
}

type TQuizTrafficSources = 'organic' | 'paid' | 'intent_segment'

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
        if (quiz_traffic_source === 'intent_segment') clientTag += `,attachment-quiz-intent-fa`
        else if (splitTests.emailSeriesTest) clientTag = `attachment-quiz-fa-5.1`
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
