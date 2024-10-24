import { Page } from '@/components/Page'
import { TParams } from '../../../[style]/page'
import { QuizResultsPage } from '../../../[style]/QuizResultsPage'

export default function quizBResultsPage({ params }: TParams) {
  return (
    <Page page_name={`Attachment Style Results - Mel Robbins Variant - ${params.style}`}>
      <QuizResultsPage {...params} melRobbinsVariant />
    </Page>
  )
}
