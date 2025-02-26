// components
import { Page } from '@/components/Page'
import { QuizResultsPage } from '@/app/(custom-layouts)/(no-nav)/quiz/[style]/QuizResultsPage'
import { FAResultsPage } from '@/app/(custom-layouts)/(no-nav)/quiz/results/fa/FAResultsPage'
// utils
import { TStyle } from '@/utils/types'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export default function YoutubeResultsPage({ params }: { params: { style: TStyle } }) {
  return (
    <Page className="w-full text-center z-10" page_name={`vsl-${params.style}`}>
      {params.style === 'fa' ? (
        <FAResultsPage youtubeVariant />
      ) : (
        <QuizResultsPage youtubeVariant style={params.style} />
      )}
    </Page>
  )
}
