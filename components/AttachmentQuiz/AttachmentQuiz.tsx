'use client'

// core
import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
// components
import { IDefaultProps } from '@/components'
import { Button } from '../Button/Button'
import { Text } from '../Text/Text'
import { Loader } from '../Loader'
// config
import { REGULAR_COPY } from '@/app/(no-nav)/config'
// libraries
import _ from 'lodash'
import cx from 'classnames'
// modules
import Mixpanel from '@/modules/Mixpanel'

const AttachmentQuizQuestions = dynamic(
  () => import('./AttachmentQuizQuestions').then((mod) => mod.AttachmentQuizQuestions),
  {
    loading: () => <Loader />,
  }
)

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

interface IAttachmentQuizProps extends IDefaultProps {
  newQuiz?: boolean
  quiz_traffic_source: TQuizTrafficSources
  quizName?: 'Attachment Style Quiz' | 'Main Funnel Quiz' | 'Main Funnel Quiz Variant'
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

  const onStartQuiz = useCallback(() => {
    Mixpanel.track.QuizStarted({
      quiz_name: quizName,
    })
    setViewQuiz(true)
  }, [quizName])

  if (!viewQuiz) {
    return (
      <div className={cx('text-center', className)}>
        <Text.Paragraph
          useMD
          className="max-w-3xl mt-4 mx-10 lg:mx-0"
          content={REGULAR_COPY.copy}
        />

        <Button
          className="mt-7 px-20 py-4 lg:mt-8"
          label={REGULAR_COPY.button_label}
          onClick={onStartQuiz}
        />
      </div>
    )
  } else {
    return (
      <AttachmentQuizQuestions
        className={className}
        quiz_traffic_source={quiz_traffic_source}
        quizName={quizName}
        newQuiz={newQuiz}
      />
    )
  }
}

export type TQuizTrafficSources = 'organic' | 'paid'
