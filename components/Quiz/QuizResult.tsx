import { result } from 'lodash'
import { IQuizOutputs, getResult } from './Quiz'
import { Text } from '../Text/Text'

interface IQuizResultProps {
  result: number
  outputs: IQuizOutputs[]
}

export const QuizResult = ({ result, outputs }: IQuizResultProps) => (
  <div className="max-w-screen-lg mx-auto">
    <Text.Heading content="Your Result:" />

    {getResult(result, outputs).report.map((text, i) => (
      <Text.Paragraph key={`report_text_${i}`} className="text-left my-4 !text-lg" content={text} />
    ))}
  </div>
)
