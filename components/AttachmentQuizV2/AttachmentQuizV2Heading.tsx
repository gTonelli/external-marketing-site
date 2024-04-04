// components
import { Animation } from '../Animation'
import { IQuizComponentDefaultArgs } from './useAttachmentQuiz'

export const AttachmentQuizV2Heading = ({ question }: IQuizComponentDefaultArgs<'Screen'>) => {
  return (
    <>
      <Animation key={typeof question.heading === 'string' ? question.heading : 'screen_element'}>
        <h4 className="mb-4 lg:!text-h3">{question.headingConstructor?.() || question.heading}</h4>
      </Animation>

      {question.subheading && (
        <Animation key={`subheading_${question.heading}`} direction="fromRight" delay={0.15}>
          <p className="mb-10">{question.subheading}</p>
        </Animation>
      )}
    </>
  )
}
