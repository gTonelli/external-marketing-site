'use client'

import { indexOf } from 'lodash'
import { TAnswerHistory } from './DatingQuizQuestions'

export type TDatingStage = 'dating' | 'powerStruggle' | 'rhythm' | 'devotion'

export interface IDatingPercentages {
  datingPercentage: number
  powerStrugglePercentage: number
  rhythmPercentage: number
  devotionPercentage: number
}

export interface IGetDatingPercentagesArgs {
  dating: number
  powerStruggle: number
  rhythm: number
  devotion: number
}

export interface ISaveDatingResultArgs extends IDatingPercentages {
  firstName: string
  lastName: string
  email: string
  relationshipStatus?: string
  answerHistory: TAnswerHistory[]
}

export const useDatingQuiz = () => {
  const getPercentageResults = ({
    dating,
    powerStruggle,
    rhythm,
    devotion,
  }: IGetDatingPercentagesArgs): IDatingPercentages => {
    const total = dating + powerStruggle + rhythm + devotion
    const safeTotal = total > 0 ? total : 1
    const percentages = [
      Math.floor((dating / safeTotal) * 100),
      Math.floor((powerStruggle / safeTotal) * 100),
      Math.floor((rhythm / safeTotal) * 100),
      Math.floor((devotion / safeTotal) * 100),
    ]
    const totalPercentage = percentages.reduce((prev, curr) => prev + curr)
    const highest = Math.max(...percentages)
    const difference = 100 - totalPercentage
    percentages[indexOf(percentages, highest)] += difference

    const [datingPercentage, powerStrugglePercentage, rhythmPercentage, devotionPercentage] =
      percentages

    return {
      datingPercentage,
      powerStrugglePercentage,
      rhythmPercentage,
      devotionPercentage,
    }
  }

  const saveResult = ({
    firstName,
    lastName,
    email,
    relationshipStatus,
    datingPercentage,
    powerStrugglePercentage,
    rhythmPercentage,
    devotionPercentage,
    answerHistory,
  }: ISaveDatingResultArgs) => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/dating-quiz-result`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        relationshipStatus,
        datingPercentage,
        powerStrugglePercentage,
        rhythmPercentage,
        devotionPercentage,
        answers: getAnswersJSON(answerHistory),
      }),
    }).catch((error) => {
      console.error('Error saving dating quiz result:', error)
    })
  }

  const getAnswersJSON = (answerHistory: TAnswerHistory[]) => {
    return answerHistory.map((answer) => ({
      question: answer.question,
      answer: answer.answer,
      answerIndex: answer.answerIndex,
      association: answer.association,
    }))
  }

  return { getPercentageResults, saveResult, getAnswersJSON }
}
