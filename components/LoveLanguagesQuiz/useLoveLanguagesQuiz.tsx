'use client'

// components
import { TAnswerHistory } from './LoveLanguagesQuizQuestions'
// libraries
import { indexOf, orderBy } from 'lodash'
// utils
import { TLoveLanguagesAssociation } from './config'

export interface ILoveLanguagesPercentages {
  wordsOfAffirmationPercentage: number
  qualityTimePercentage: number
  actsOfServicePercentage: number
  physicalTouchPercentage: number
  receivingGiftsPercentage: number
}

export interface IGetLoveLanguagesPercentagesArgs {
  wordsOfAffirmation: number
  qualityTime: number
  actsOfService: number
  physicalTouch: number
  receivingGifts: number
}

export interface ISaveLoveLanguagesResultArgs extends ILoveLanguagesPercentages {
  eventId: string
  firstName: string
  lastName: string
  email: string
  userLoveLanguage: TLoveLanguagesAssociation
  relationshipStatus?: string
  loveLanguage: string
  answerHistory: TAnswerHistory[]
}

export const useLoveLanguagesQuiz = () => {
  const getPercentageResults = ({
    wordsOfAffirmation,
    qualityTime,
    actsOfService,
    physicalTouch,
    receivingGifts,
  }: IGetLoveLanguagesPercentagesArgs): ILoveLanguagesPercentages => {
    const total = wordsOfAffirmation + qualityTime + actsOfService + physicalTouch + receivingGifts
    const safeTotal = total > 0 ? total : 1
    const percentages = [
      Math.floor((wordsOfAffirmation / safeTotal) * 100),
      Math.floor((qualityTime / safeTotal) * 100),
      Math.floor((actsOfService / safeTotal) * 100),
      Math.floor((physicalTouch / safeTotal) * 100),
      Math.floor((receivingGifts / safeTotal) * 100),
    ]
    const totalPercentage = percentages.reduce((prev, curr) => prev + curr)
    const highest = Math.max(...percentages)
    const difference = 100 - totalPercentage
    percentages[indexOf(percentages, highest)] += difference

    const [
      wordsOfAffirmationPercentage,
      qualityTimePercentage,
      actsOfServicePercentage,
      physicalTouchPercentage,
      receivingGiftsPercentage,
    ] = percentages

    return {
      wordsOfAffirmationPercentage,
      qualityTimePercentage,
      actsOfServicePercentage,
      physicalTouchPercentage,
      receivingGiftsPercentage,
    }
  }

  const saveResult = ({
    firstName,
    lastName,
    email,
    eventId,
    userLoveLanguage,
    loveLanguage,
    wordsOfAffirmationPercentage,
    qualityTimePercentage,
    actsOfServicePercentage,
    physicalTouchPercentage,
    receivingGiftsPercentage,
    answerHistory,
  }: ISaveLoveLanguagesResultArgs) => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/love-language-quiz-result`, {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        eventId,
        userLoveLanguage,
        loveLanguage,
        wordsOfAffirmationPercentage,
        qualityTimePercentage,
        actsOfServicePercentage,
        physicalTouchPercentage,
        receivingGiftsPercentage,
        answers: getAnswersDump(answerHistory),
      }),
    }).catch((error) => {
      console.error('Error saving love languages quiz result:', error)
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
    wordsOfAffirmation,
    qualityTime,
    actsOfService,
    physicalTouch,
    receivingGifts,
  }: {
    wordsOfAffirmation: number
    qualityTime: number
    actsOfService: number
    physicalTouch: number
    receivingGifts: number
  }): TLoveLanguagesAssociation => {
    const languages = [
      { language: 'wordsOfAffirmation', score: wordsOfAffirmation, priority: 1 },
      { language: 'qualityTime', score: qualityTime, priority: 2 },
      { language: 'actsOfService', score: actsOfService, priority: 3 },
      { language: 'physicalTouch', score: physicalTouch, priority: 4 },
      { language: 'receivingGifts', score: receivingGifts, priority: 5 },
    ]
    return orderBy(languages, ['score', 'priority'], ['desc', 'asc'])[0]
      .language as TLoveLanguagesAssociation
  }

  return { getPercentageResults, saveResult, calculateResult }
}
