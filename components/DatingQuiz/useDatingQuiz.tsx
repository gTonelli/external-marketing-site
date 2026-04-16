'use client'

// components
import { TAnswerHistory } from './DatingQuizQuestions'
// libraries
import { indexOf, orderBy } from 'lodash'
// utils
import { TDatingStageLong } from '@/utils/types'

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
  eventId: string
  firstName: string
  lastName: string
  userDatingStage: TDatingStage
  email: string
  relationshipStatus?: string
  dominantStage: TDatingStageLong
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
    userDatingStage,
    eventId,
    relationshipStatus,
    dominantStage,
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
        userDatingStage,
        eventId,
        datingStage: dominantStage,
        relationshipStatus,
        datingPercentage,
        powerStrugglePercentage,
        rhythmPercentage,
        devotionPercentage,
        answers: getAnswersDump(answerHistory),
      }),
    }).catch((error) => {
      console.error('Error saving dating quiz result:', error)
    })
  }

  const getAnswersDump = (answerHistory: TAnswerHistory[]) => {
    return answerHistory.map((answer) => ({
      question: answer.question,
      answer: answer.answer,
      answerIndex: answer.answerIndex,
      association: answer.association,
    }))
  }

  const calculateResult = ({
    dating,
    powerStruggle,
    rhythm,
    devotion,
  }: {
    dating: number
    powerStruggle: number
    rhythm: number
    devotion: number
  }): TDatingStage => {
    const stages = [
      { stage: 'dating', score: dating, priority: 4 },
      { stage: 'powerStruggle', score: powerStruggle, priority: 1 },
      { stage: 'rhythm', score: rhythm, priority: 2 },
      { stage: 'devotion', score: devotion, priority: 3 },
    ]

    return orderBy(stages, ['score', 'priority'], ['desc', 'asc'])[0].stage as TDatingStage
  }

  return { getPercentageResults, saveResult, calculateResult }
}
