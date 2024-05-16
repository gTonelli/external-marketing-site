import { useRouter } from 'next/navigation'
import { Text } from './Text/Text'
import Image from 'next/image'
import { Button } from './Button/Button'
import cx from 'classnames'
import { TStyle } from '@/utils/types'
import { Card } from './Card/Card'

export const QuizCard = ({ color, title, description, image, isNew, type }: IQuizCardProps) => {
  const router = useRouter()

  const borderColor =
    color === 'pink' ? 'border-pink' : color === 'orange' ? 'border-orange' : 'border-teal'
  const btnBg = color === 'pink' ? 'bg-pink' : color === 'orange' ? 'bg-orange' : 'bg-teal'

  const onGoToQuiz = () => {
    router.push(`/members-quiz/${type}`)
  }

  return (
    <Card
      style={{ width: '290px', height: '365px' }}
      className={cx(
        `group justify-start relative rounded-lg border transform transition ease-in-out py-6 px-5 bg-white 
            hover:scale-105 hover:shadow-lg`,
        borderColor
      )}>
      {isNew && (
        <span
          className="text-xs absolute top-5 right-5 z-5 border border-primary rounded-full py-1 px-2
              group-hover:bg-primary group-hover:text-white">
          NEW
        </span>
      )}

      <Text.Heading className="w-64" content={title} size={3} />

      <Image
        alt="A vector image of a couple"
        className="w-1/2 mt-2 mb-4"
        src={image}
        width={285}
        height={237}
      />

      <Text.Paragraph content={description} size={14} />

      <Button
        // @ts-ignore
        color={color}
        className={cx(
          'font-effra font-bold tracking-widest absolute bottom-5 rounded-full px-4 py-3',
          borderColor,
          btnBg
          //   btnTxtColor
        )}
        label="START QUIZ"
        onClick={onGoToQuiz}
      />
    </Card>
  )
}

export interface IQuizCardProps {
  id: string
  type: 'romantic' | 'family' | 'friends'
  title: string
  description: string
  color: 'teal' | 'orange' | 'pink'
  colorSecondary: 'bg-teal-secondary' | 'bg-orange-secondary' | 'bg-pink-secondary'
  colorLight: 'bg-teal-light' | 'bg-orange-light' | 'bg-pink-light'
  colorDark: 'bg-teal-dark' | 'bg-orange-dark' | 'bg-pink-dark'
  image: string
  isNew: boolean
  introBgDesktop: string
  introBgMobile: string
  questions: IQuizQuestion[]
  results: IQuizResults
}

interface IQuizQuestion {
  question: string
  styleAssociation: TStyle
  styleAssociationValue: number // 1
}

export interface IQuizResults {
  AP: IQuizResult
  DA: IQuizResult
  FA: IQuizResult
  SA: IQuizResult
}

interface IQuizContent {
  title: string
  description?: string
  content?: string
  content2?: string
  assetUrl?: string
}

interface IQuizResult {
  description: IQuizContent
  strengths: string[]
  challanges: string[]
  howWasItFormed: IQuizContent
  whatDoesItMean: IQuizContent
  wordsOfEcouragement: IQuizContent
  secondaryStyle: IQuizContent
  nextSteps: IQuizContent
  otherQuizzes: IQuizContent
}
