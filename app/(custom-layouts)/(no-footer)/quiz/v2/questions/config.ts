import { TStyle } from '@/utils/types'
import { IconName } from '@fortawesome/fontawesome-common-types'
import { HTMLInputTypeAttribute } from 'react'

type AttachmentStyleQuestion = {
  association: TStyle
  score: 0 | 0.5 | 1
}

type TQuizState = {
  name?: string
  email?: string
  attachment_knowledge?: 'Informed' | 'Curious' | 'Skeptical'
  age?: number
  gender?: 'Male' | 'Female' | 'Prefer not to say'
  relationship_status?: 'Single' | 'In a relationship' | 'Married'
  questions?: AttachmentStyleQuestion[]
}

export class AttachmentQuiz {
  quiz: TQuizState

  constructor() {
    this.quiz = {}
  }
}

type TQuizFormInput = {
  header: string
  subheader: string | JSX.Element
  inputType: HTMLInputTypeAttribute
  inputName: HTMLInputTypeAttribute | 'name'
}

type TQuizOptionSelect = {
  header: string
  subheader: string
  options: [TQuizOption, TQuizOption, TQuizOption]
}

type TQuizOption = {
  icon: IconName
  text: string
  association: keyof TQuizState
  value: TQuizState[keyof TQuizState]
}

const option: TQuizOption = {
  icon: 'male',
  text: "I'm in a relationship",
  association: 'gender',
  value: 'Male',
}
