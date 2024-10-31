// components
import { Page } from '@/components/Page'

import { QuizResultsPage } from '../../../../[style]/QuizResultsPage'
import { TParams  } from '../../../../[style]/page'
import { FAResultsPage } from '../../../../results/fa/FAResultsPage'

export default function MetaResultsPage({ params }: TParams) {
  return (
    <Page className="w-full text-center z-10" page_name={`vsl-meta-${params.style}`}>
      {params.style === 'fa' ? <FAResultsPage /> : <QuizResultsPage style={params.style} />}
    </Page>
  )
}
