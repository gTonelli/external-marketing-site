import { Animation } from '../Animations'
import { TQuizQuestion } from './AttachmentQuizV2'

export const AttachmentQuizV2Heading = ({ question }: { question: TQuizQuestion<'Screen'> }) => {
  return (
    <>
      <Animation key={question.heading}>
        <h3 className="mb-4">{question.heading}</h3>
      </Animation>

      {question.subheading && (
        <Animation key={`subheading_${question.heading}`} direction="fromRight" delay={0.15}>
          <p className="mb-10">{question.subheading}</p>
        </Animation>
      )}
    </>
  )
}
