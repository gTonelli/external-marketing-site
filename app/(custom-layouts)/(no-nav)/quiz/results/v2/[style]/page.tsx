import { Page } from '@/components/Page'
import { TStyle } from '@/utils/types'
import { FAResultsPage } from '../../fa/FAResultsPage'
import { QuizResultsPage } from '../../../[style]/QuizResultsPage'

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export default function AgeFunnelResultsPage({ params }: { params: { style: TStyle } }) {
  return (
    <Page page_name={`Age Funnel - ${params.style}`}>
      {params.style === 'fa' ? (
        <div className="w-full text-center">
          <FAResultsPage ageVariant />
        </div>
      ) : (
        <div className="w-full text-center z-10">
          <QuizResultsPage isVariant style={params.style} />
        </div>
      )}
    </Page>
  )
}
