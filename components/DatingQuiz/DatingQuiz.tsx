'use client'

// core
import { useState, useCallback } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Button } from '../Button/Button'
import { DatingQuizQuestions } from './DatingQuizQuestions'
// config
import { REGULAR_COPY } from '@/app/(custom-layouts)/(no-nav)/config'
// libraries
import cx from 'classnames'
// modules
import Mixpanel from '@/modules/Mixpanel'

interface IDatingQuizProps extends IDefaultProps {
  quizName?: string
  showStartButton?: boolean
}

export const DatingQuiz = ({
  className,
  quizName = 'Dating Quiz',
  showStartButton = true,
}: IDatingQuizProps) => {
  const [viewQuiz, setViewQuiz] = useState(!showStartButton)

  const onStartQuiz = useCallback(() => {
    Mixpanel.track.QuizStarted({ quiz_name: quizName })

    setViewQuiz(true)
  }, [quizName, showStartButton])

  if (viewQuiz) {
    return <DatingQuizQuestions className={className} quizName={quizName} />
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
