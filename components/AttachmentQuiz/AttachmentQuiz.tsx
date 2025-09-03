'use client'

// core
import { useState, useCallback } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Button } from '../Button/Button'
import { AttachmentQuizQuestions } from './AttachmentQuizQuestions'
// config
import { REGULAR_COPY } from '@/app/(custom-layouts)/(no-nav)/config'
// libraries
import cx from 'classnames'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { getSplitTest } from '@/utils/functions'

export interface IUserInfo {
  relationshipStatus?: string
  relationship?: string
  attachment?: string
  attachmentFamiliarity?: string
  age?: string
  gender?: string
  relationshipIntend?: string
  relationshipSatisfaction?: string
  intent?: string
}

export interface IResultProps extends IDefaultProps {
  ap: number
  da: number
  fa: number
  sa: number
}

interface IAttachmentQuizProps extends IDefaultProps {
  newQuiz?: boolean
  quiz_traffic_source: TQuizTrafficSources
  quizName?:
    | 'Attachment Style Quiz'
    | 'Main Funnel Quiz'
    | 'Main Funnel Quiz Variant'
    | 'Youtube Funnel Quiz'
  showStartButton?: boolean
}

export const AttachmentQuiz = ({
  className,
  newQuiz,
  quiz_traffic_source,
  quizName = 'Main Funnel Quiz',
  showStartButton = true,
}: IAttachmentQuizProps) => {
  const [viewQuiz, setViewQuiz] = useState(!showStartButton)
  // const [quizVariant, setQuizVariant] = useState(false)

  const onStartQuiz = useCallback(() => {
    // if (quiz_traffic_source === 'paidGoogle') {
    //   setQuizVariant(
    //     getSplitTest({
    //       key: 'gm-1355-quiz-stats-test',
    //       experimentName: 'GM-1355-Quiz-Stats-Test',
    //       variantRatio: 0.2,
    //       useCookies: false,
    //     })
    //   )
    // }

    Mixpanel.track.QuizStarted({
      quiz_name: quizName,
      quiz_traffic_source,
    })

    setViewQuiz(true)
  }, [quizName])

  if (viewQuiz) {
    return (
      <AttachmentQuizQuestions
        // isQuizVariant={quizVariant}
        className={className}
        quiz_traffic_source={quiz_traffic_source}
        quizName={quizName}
        newQuiz={newQuiz}
      />
    )
  } else {
    return (
      <div className={cx('text-center', className)}>
        <p className="max-w-3xl mt-4 mx-10 lg:mx-0">{REGULAR_COPY.copy}</p>

        <Button
          className="mt-7 px-20 py-4 lg:mt-8"
          label={REGULAR_COPY.button_label}
          onClick={onStartQuiz}
        />
      </div>
    )
  }
}

export type TQuizTrafficSources = 'organic' | 'paidGoogle' | 'paidMeta' | 'paidYouTube'
