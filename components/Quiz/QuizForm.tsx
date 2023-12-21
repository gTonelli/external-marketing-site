'use client'

// components
import { RegistrationForm } from '../RegistrationForm'
import { IQuizOutputs, getResult } from './Quiz'
import { Text } from '../Text/Text'

interface IQuizFormProps {
  onAfterSubmit?: () => void
  outputs: IQuizOutputs[]
  result: number
}

export const QuizForm = ({ onAfterSubmit, outputs, result }: IQuizFormProps) => (
  <div className="w-full rounded-20 shadow-center-light bg-white max-w-lg mx-auto py-4">
    <Text.Heading content="Fill Out the Form Below to View Your Results" size={3} />

    <RegistrationForm
      clientTag={getResult(result, outputs).clientTag}
      onAfterSubmit={onAfterSubmit}
    />
  </div>
)
