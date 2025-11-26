'use client'

// core
import { useState, useCallback } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Button } from '../Button/Button'
import { DatingQuizQuestions } from './DatingQuizQuestions'
// libraries
import cx from 'classnames'

interface IDatingQuizProps extends IDefaultProps {
  quizName?: string
  buttonLabel?: string
  showStartButton?: boolean
}

export const DatingQuiz = ({
  className,
  quizName = 'Dating Quiz',
  buttonLabel = 'START QUIZ',
  showStartButton = true,
}: IDatingQuizProps) => {
  const [viewQuiz, setViewQuiz] = useState(!showStartButton)

  const onStartQuiz = useCallback(() => {
    setViewQuiz(true)
  }, [quizName, showStartButton])

  if (viewQuiz) {
    return <DatingQuizQuestions className={className} quizName={quizName} />
  } else {
    return (
      <div className={cx('text-center', className)}>
        <Button className="mt-7 px-20 py-4 lg:mt-8" label={buttonLabel} onClick={onStartQuiz} />
      </div>
    )
  }
}
