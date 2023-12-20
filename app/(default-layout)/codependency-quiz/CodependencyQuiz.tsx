'use client'

import { Quiz } from '@/components/Quiz/Quiz'
import {
  CODEPENDENCY_QUIZ_RESULTS,
  CODEPENDENCY_QUIZ_QUESTIONS,
  codependencyQuizValidationSchema,
} from './config'

export const CodependencyQuiz = () => (
  <Quiz
    outputs={CODEPENDENCY_QUIZ_RESULTS}
    questions={CODEPENDENCY_QUIZ_QUESTIONS}
    theme="blue-lightest"
    validationSchema={codependencyQuizValidationSchema}
    quizName="Codependency Quiz"
  />
)
