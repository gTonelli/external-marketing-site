import { TStyle } from '@/utils/types'
import { IconName } from '@fortawesome/fontawesome-common-types'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export type TPossibleQuizQuestionValues = 0 | 0.5 | 1

interface IQuestionRequiredProps {
  heading: string
  readonly subheading?: string | JSX.Element
  readonly onAnswerQuestion?: () => void
  userResponse?: string | string[] | Date | TPossibleQuizQuestionValues
}

type TFormInputData = {
  readonly type: 'text' | 'email' | 'number'
  readonly autocomplete: 'name' | 'email' | 'age'
  readonly placeholder: string
}

type TOptionSelectData = {
  readonly heading?: string
  readonly iconName: IconName
  readonly value: string | TPossibleQuizQuestionValues
  readonly subheading?: string
}

const pills = [
  'Anxiety',
  'Stress',
  'Loneliness',
  'Avoidance',
  'Self-Esteem',
  'Relationship Challenge',
] as const

type TOptions =
  | [TOptionSelectData, TOptionSelectData, TOptionSelectData]
  | [TOptionSelectData, TOptionSelectData, TOptionSelectData, TOptionSelectData, TOptionSelectData]

export type TQuizQuestionType =
  | 'Screen'
  | 'FormInput'
  | 'OptionSelect'
  | 'AttachmentStyleQuestion'
  | 'PillSelect'

export type TQuizQuestion<T = TQuizQuestionType> = T extends 'Screen'
  ? IQuizQuestionScreen
  : T extends 'FormInput'
  ? IQuizQuestionFormInput
  : T extends 'OptionSelect'
  ? IQuizQuestionOptionSelect
  : T extends 'AttachmentStyleQuestion'
  ? IQuizQuestionAttachmentStyle
  : IQuizQuestionPillSelect

interface IQuizQuestionScreen extends IQuestionRequiredProps {
  readonly imgSrc?: string
  readonly duration?: number
}

interface IQuizQuestionFormInput extends IQuestionRequiredProps {
  readonly formInputData: TFormInputData
}

interface IQuizQuestionOptionSelect extends IQuestionRequiredProps {
  readonly type: 'OptionSelect'
  readonly options: TOptions
}

interface IQuizQuestionAttachmentStyle extends IQuestionRequiredProps {
  readonly association: TStyle
}

interface IQuizQuestionPillSelect extends IQuestionRequiredProps {
  readonly type: 'PillSelect'
  readonly options: typeof pills
}

export class AttachmentQuiz {
  readonly questions: [
    TQuizQuestion<'Screen'>,
    TQuizQuestion<'FormInput'>,
    TQuizQuestion<'Screen'>,
    TQuizQuestion<'FormInput'>,
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'Screen'>,
    TQuizQuestion<'Screen'>,
    TQuizQuestion<'FormInput'>,
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'Screen'>,
    TQuizQuestion<'PillSelect'>,
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'Screen'>,
    ...TQuizQuestion<'AttachmentStyleQuestion'>[],
    TQuizQuestion<'OptionSelect'>,
    TQuizQuestion<'Screen'>
  ]
  private setIndex: Dispatch<SetStateAction<number>>
  readonly defaultQuizQuestionOptions: TOptions = [
    {
      heading: 'Disagree',
      iconName: 'face-frown',
      value: 0,
    },
    {
      iconName: 'circle',
      value: 0,
    },
    {
      heading: 'Neutral',
      iconName: 'face-meh',
      value: 0,
    },
    {
      iconName: 'circle',
      value: 0.5,
    },
    {
      heading: 'Agree',
      iconName: 'face-smile',
      value: 1,
    },
  ]
  public answerQuestion(
    question: TQuizQuestion,
    val: string[] | string | Date | TPossibleQuizQuestionValues
  ) {
    question.userResponse = val
    this.setIndex((prev) => prev + 1)
  }

  public getQuestionType(index: number): TQuizQuestionType {
    const question = this.questions[index]
    if ((question as TQuizQuestion<'AttachmentStyleQuestion'>)?.association)
      return 'AttachmentStyleQuestion'
    if ((question as TQuizQuestion<'FormInput'>)?.formInputData) return 'FormInput'
    if ((question as TQuizQuestion<'OptionSelect' | 'PillSelect'>)?.options)
      return (question as IQuizQuestionOptionSelect | IQuizQuestionPillSelect)?.type
    return 'Screen'
  }

  public setGreetHeading(heading: string) {
    this.questions[2].heading = heading
  }

  public endQuiz() {
    const score = this.questions.reduce(
      (prev, curr, index) => {
        const questionType = this.getQuestionType(index)
        switch (questionType) {
          case 'AttachmentStyleQuestion':
            prev[(curr as TQuizQuestion<'AttachmentStyleQuestion'>).association]++
            return prev
          case 'FormInput':
            break
          case 'OptionSelect':
            break
          case 'PillSelect':
            break
          case 'Screen':
            break
        }

        return prev
      },
      { fa: 0, ap: 0, da: 0, sa: 0 }
    )

    console.log('Score', score)
    return `/quiz/v2/result/${score.fa}/${score.ap}/${score.da}/${score.sa}`
  }

  constructor(setIndex: Dispatch<SetStateAction<number>>) {
    this.setIndex = setIndex
    this.questions = [
      {
        heading: 'Introduce Yourself',
        subheading:
          'Share your name, email, and tell us about your attachment style knowledge, so we can create you a personalized experience.',
      },
      {
        heading: "What's your name?",
        subheading: "We'll use this to personalize your experience.",
        formInputData: {
          type: 'text',
          autocomplete: 'name',
          placeholder: 'Type your name here',
        },
      },
      {
        heading: 'Nice to meet you!',
        imgSrc: '/icons/wink-face.svg',
        duration: 2,
      },
      {
        heading: 'What is your email address?',
        subheading: (
          <i>
            Your email saves your personalized report so you can see it later. We store your
            information securely, in line with our{' '}
            <Link
              className="underline"
              href="https://university.personaldevelopmentschool.com/pages/privacy"
              target="_blank">
              privacy policy
            </Link>{' '}
            and{' '}
            <Link
              className="underline"
              href="https://university.personaldevelopmentschool.com/pages/terms"
              target="_blank">
              terms & conditions.
            </Link>
          </i>
        ),
        formInputData: {
          type: 'email',
          autocomplete: 'email',
          placeholder: 'Type your email here',
        },
      },
      {
        type: 'OptionSelect',
        heading: 'When it comes to attachment styles, you are:',
        subheading: 'Why we ask?',
        options: [
          {
            heading: 'Informed',
            subheading: 'You know more than the average person.',
            iconName: 'face-smile',
            value: 'informed',
          },
          {
            heading: 'Curious',
            subheading: 'You know a bit, but want to know more.',
            iconName: 'face-raised-eyebrow',
            value: 'curious',
          },
          {
            heading: 'Skeptical',
            subheading: 'You’re not convinced yet.',
            iconName: 'face-confused',
            value: 'skeptical',
          },
        ],
      },
      {
        heading: `We'll reward that curiosity. But first, let's get to know you!`,
      },
      {
        heading: 'Getting to Know You: Unveiling the Basics',
        subheading:
          'Unveil the essentials and shape your personalized journey by sharing your age, gender, and relationship status!',
      },
      {
        heading: 'How old are you?',
        subheading: 'Why we ask?',
        formInputData: {
          autocomplete: 'age',
          placeholder: 'Type your age here',
          type: 'number',
        },
      },
      {
        type: 'OptionSelect',
        heading: 'What is your gender?',
        subheading: 'Why we ask?',
        options: [
          { heading: 'Male', iconName: 'user-vneck-hair', value: 'male' },
          { heading: 'Female', iconName: 'user-vneck-hair-long', value: 'female' },
          { heading: 'Other', iconName: 'user-vneck', value: 'other' },
        ],
      },
      {
        type: 'OptionSelect',
        heading: 'What is your current situation?',
        subheading: 'Why we ask?',
        options: [
          { heading: "I'm Single", iconName: 'user', value: 'single' },
          { heading: "I'm in a relationship", iconName: 'heart', value: 'relationship' },
          { heading: "I'm married", iconName: 'rings-wedding', value: 'married' },
        ],
      },
      {
        heading: 'Goals',
        subheading:
          "Share your goals with us, and let's pinpoint the areas where you need assistance, ensuring tailored recommendations to support your journey.",
      },
      {
        type: 'PillSelect',
        heading: 'Choose the areas you want to focus',
        subheading: "Select all that matter to you, and we'll explore them together.",
        options: pills,
      },
      {
        type: 'OptionSelect',
        heading: 'How would you rate your current satisfaction in your relationship?',
        options: [
          {
            heading: 'Unsatisfied',
            iconName: 'face-frown',
            value: 'unsatisfied',
          },
          {
            iconName: 'circle',
            value: 'somewhat-unsatisfied',
          },
          {
            heading: 'Neutral',
            iconName: 'face-meh',
            value: 'neutral',
          },
          {
            iconName: 'circle',
            value: 'somewhat-satisfied',
          },
          {
            heading: 'Satisfied',
            iconName: 'face-smile',
            value: 'satisfied',
          },
        ],
      },
      {
        heading: 'The Attachment Quiz',
        subheading: 'Answer each question as best as you can to uncover your attachment style!',
        duration: 2,
      },
      {
        heading:
          'I can be very emotionally present with others (friends, family, partners, strangers), but it takes me a while to build trust and share vulnerable things about myself.',
        association: 'fa',
      },
      {
        heading:
          'I often put other people in my life on a big pedestal. (Partner, friends, family)',
        association: 'ap',
      },
      {
        heading:
          'I feel naturally comfortable and safe expressing my feelings and needs to loved ones.',
        association: 'sa',
      },
      {
        heading: 'I feel very upset when others infringe on my need for space or time alone. ',
        association: 'da',
      },
      /*{
        heading:
          "I am willing to work through challenges in a relationship before suddenly trying to leave the relationship itself. (If you're not in a relationship, think of how you would handle conflict in a partnership.)",
        association: 'sa',
      },
      {
        heading: 'I tend to be out of touch with my emotions quite frequently.',
        association: 'da',
      },
      {
        heading:
          "I am very attuned to others' needs and often put them before my own and resent it later.",
        association: 'fa',
      },
      {
        heading:
          'I constantly want to be emotionally closer to my partner. This can also apply to my close friendships or romantic interests.',
        association: 'ap',
      },
      {
        heading: 'I am effective at compromising and communicating.',
        association: 'sa',
      },
      {
        heading:
          'It is very difficult for me to set boundaries unless I am angry. I can sometimes set excessive boundaries and push people away too dramatically out of anger.',
        association: 'fa',
      },
      {
        heading:
          'If I notice my partner showing any signs of coldness, I panic and want to get closer as quickly as possible. This often happens to me in friendships as well.',
        association: 'ap',
      },
      {
        heading:
          'It is not uncommon for me to experience inward emotional turbulence throughout the duration of my romantic relationship. This applies to close family members as well.',
        association: 'fa',
      },
      {
        heading:
          'I often feel very hot or very cold towards my partner or family members. I tend to operate in extremes in how I relate to others.',
        association: 'fa',
      },
      {
        heading: 'I know that I am worthy of a healthy, happy relationship. ',
        association: 'sa',
      },
      {
        heading:
          'When I feel hurt by a loved one, I often have a strong fight or flight response. I find myself wanting to push this person as far away as possible. (Friends, family, romantic relationship).',
        association: 'fa',
      },
      {
        heading:
          'I do not feel as though I need anything from my romantic partner or loved ones. It can be difficult to conceptualize how others would meet a lot of my needs.',
        association: 'da',
      },
      {
        heading: 'I do not enjoy being out of romantic relationships. I often fear being alone.',
        association: 'ap',
      },
      {
        heading:
          "If a loved one's behavior hurts me, I will express my feelings and try to understand what caused them to act that way. ",
        association: 'sa',
      },
      {
        heading:
          'I hunger for closeness, but I fear the emotional difficulty of it at the same time (friends, family, romantic partners). ',
        association: 'fa',
      },
      {
        heading:
          'I do not like making social plans with others in advance. I often fear being trapped by commitments with other people. ',
        association: 'da',
      },
      {
        heading: 'I find that setting boundaries comes naturally to me. ',
        association: 'sa',
      },
      {
        heading: 'I focus much more on the relationships in my life than I do on myself.',
        association: 'ap',
      },
      {
        heading: 'I often feel protective over my space, privacy and belongings. ',
        association: 'da',
      },
      {
        heading:
          'I generally feel invaded when my partner or loved ones demand too much physical affection. ',
        association: 'da',
      },
      {
        heading:
          'I would prefer to spend most of my free time with my partner if I were to be in a romantic relationship. It would be hard for me to want to do things separately.',
        association: 'ap',
      },
      {
        heading: 'I feel that it is easy to be vulnerable with my romantic partner or loved ones.',
        association: 'sa',
      },
      {
        heading:
          'I find that my partner or loved ones usually emotionally recover from conflict before I do. ',
        association: 'da',
      },
      {
        heading: 'I deeply fear being abandoned by my partner or love interests. ',
        association: 'ap',
      },*/
      {
        type: 'OptionSelect',
        heading: 'How did you discover the quiz or learn about the Personal Development School?',
        subheading: 'Why we ask?',
        options: [
          {
            heading: 'Online Search',
            iconName: 'search-plus',
            value: 'online-search',
          },
          {
            heading: 'Friend/Family Referral',
            iconName: 'face-smile-plus',
            value: 'referral',
          },
          {
            heading: 'Other',
            iconName: 'plus-circle',
            value: 'other',
          },
        ],
      },
      {
        heading:
          "We're crafting <strong>your personalized results</strong> – just a moment longer! Your well-being is our priority.",
      },
    ]
  }
}
