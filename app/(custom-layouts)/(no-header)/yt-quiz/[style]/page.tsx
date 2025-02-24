// components
import { Page } from '@/components/Page'
import { QuizResultsPage } from '@/app/(custom-layouts)/(no-nav)/quiz/[style]/QuizResultsPage'
import { FAResultsPage } from '@/app/(custom-layouts)/(no-nav)/quiz/results/fa/FAResultsPage'
// utils
import { TStyle } from '@/utils/types'

export type TParams = { params: { style: TStyle } }


export default function YoutubeResultsPage({ params }: TParams) {
  return (
    <Page className="w-full text-center z-10" page_name={`vsl-${params.style}`}>
      {params.style === 'fa' ? <FAResultsPage youtubeVariant /> : <QuizResultsPage youtubeVariant style={params.style} /> } 
    </Page>
  )
}
