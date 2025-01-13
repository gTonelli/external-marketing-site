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
  isQuizVariant?: boolean
}

export const AttachmentQuiz = ({
  className,
  newQuiz,
  quiz_traffic_source,
  quizName = 'Main Funnel Quiz',
  showStartButton = true,
  isQuizVariant = false,
}: IAttachmentQuizProps) => {
  const [viewQuiz, setViewQuiz] = useState(!showStartButton || isQuizVariant)
  const [showVariantCopy, setShowVariantCopy] = useState(isQuizVariant)

  const onStartQuiz = useCallback(() => {
    Mixpanel.track.QuizStarted({
      quiz_name: quizName,
      quiz_traffic_source,
    })
    setViewQuiz(true)
  }, [quizName])

  const onQuizFinished = useCallback(() => {
    if (isQuizVariant) setShowVariantCopy(false)
  }, [isQuizVariant])

  if (viewQuiz) {
    return (
      <>
        <AttachmentQuizQuestions
          className={className}
          quiz_traffic_source={quiz_traffic_source}
          quizName={quizName}
          newQuiz={newQuiz}
          isQuizVariant={isQuizVariant}
          onQuizFinished={onQuizFinished}
        />

        {isQuizVariant && showVariantCopy && (
          <p className="max-w-3xl pt-8 px-4 mx-auto">
            <strong>
              Complete this quiz to determine your attachment style. Knowing your attachment style
              is the first step to creating more meaningful connections, feeling valued and
              developing more harmony in all of your relationships!
            </strong>
          </p>
        )}
      </>
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

export type TQuizTrafficSources = 'organic' | 'paidGoogle' | 'paidMeta'
