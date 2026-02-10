'use client'

// core
import { useState, useCallback } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Button } from '../Button/Button'
import { LoveLanguagesQuizQuestions } from './LoveLanguagesQuizQuestions'
// libraries
import cx from 'classnames'

interface ILoveLanguagesQuizProps extends IDefaultProps {
  quizName?: string
  buttonLabel?: string
  showStartButton?: boolean
}

export const LoveLanguagesQuiz = ({
  className,
  quizName = 'Love Languages Quiz',
  buttonLabel = 'START QUIZ',
  showStartButton = true,
}: ILoveLanguagesQuizProps) => {
  const [viewQuiz, setViewQuiz] = useState(!showStartButton)

  const onStartQuiz = useCallback(() => {
    setViewQuiz(true)
  }, [quizName, showStartButton])

  if (viewQuiz) {
    return <LoveLanguagesQuizQuestions className={className} quizName={quizName} />
  } else {
    return (
      <div className={cx('text-center', className)}>
        <Button className="mt-7 px-20 py-4 lg:mt-8" label={buttonLabel} onClick={onStartQuiz} />
      </div>
    )
  }
}
