// components
import { TQuizQuestion } from './useAttachmentQuiz'
// libraries
import cx from 'classnames'

interface IAttachmentQuizV2HeadingProps {
  classNameHeading?: string
  question: TQuizQuestion
}

export const AttachmentQuizV2Heading = ({
  classNameHeading,
  question,
}: IAttachmentQuizV2HeadingProps) => {
  return (
    <>
      <p className={cx('mb-2 text-xl', classNameHeading)}>{question.heading}</p>

      {question.subheading && <p className="mb-6">{question.subheading}</p>}
    </>
  )
}
