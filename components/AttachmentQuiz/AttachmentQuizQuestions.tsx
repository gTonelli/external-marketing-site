'use client'

// core
import { useCallback, useState } from 'react'
import dynamic from 'next/dynamic'
// components
import { Button } from '../Button/Button'
import { ProgressBar } from '../ProgressBar'
import { IDefaultProps } from '..'
import { Text } from '../Text/Text'
import { IResultProps, IUserInfo, TQuizTrafficSources, TUserStyle } from './AttachmentQuiz'
// config
import {
  QUIZ_DETAILED_QUESTIONS as detailedQuestions,
  EXTERNALQUIZQUESTIONS as questions,
} from './config'
// libraries
import cx from 'classnames'
import _ from 'lodash'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { useGoogleTagManager } from '@/modules/GTM'

const AttachmentQuizForm = dynamic(() =>
  import('./AttachmentQuizForm').then((mod) => mod.AttachmentQuizForm)
)

let modifiedQuestions = [...questions]

export interface IAttachmentQuizQuestionsProps extends IDefaultProps {
  newQuiz?: boolean
  quiz_traffic_source: TQuizTrafficSources
}

export const AttachmentQuizQuestions = ({
  className,
  newQuiz,
  quiz_traffic_source,
}: IAttachmentQuizQuestionsProps) => {
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

  // ======================== Hooks ====================
  const tagManager = useGoogleTagManager()

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
      // Reset questions
      modifiedQuestions = [...questions]
    },
    [currentIndex, faPoints, apPoints, saPoints, daPoints, index]
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
    const _style = _.orderBy(attachmentStyleScores, ['score'], ['desc'])[0].style

    return _style
  }

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
        <AttachmentQuizForm
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
