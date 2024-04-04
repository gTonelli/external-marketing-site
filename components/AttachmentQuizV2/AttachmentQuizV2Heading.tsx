// components
import { Animation } from '../Animation'
import { IQuizComponentDefaultArgs } from './useAttachmentQuiz'
// libraries
import cx from 'classnames'

interface IAttachmentQuizV2HeadingProps extends IQuizComponentDefaultArgs<'Screen'> {
  classNameHeading?: string
}

export const AttachmentQuizV2Heading = ({
  classNameHeading,
  question,
  questions,
}: IAttachmentQuizV2HeadingProps) => {
  return (
    <>
      <Animation key={typeof question.heading === 'string' ? question.heading : 'screen_element'}>
        <h4 className={cx('mb-4 lg:!text-h3', classNameHeading)}>
          {question.headingConstructor?.(questions) || question.heading}
        </h4>
      </Animation>

      {question.subheading && (
        <Animation key={`subheading_${question.heading}`} direction="fromRight" delay={0.15}>
          <p className="mb-10">{question.subheading}</p>
        </Animation>
      )}
    </>
  )
}
