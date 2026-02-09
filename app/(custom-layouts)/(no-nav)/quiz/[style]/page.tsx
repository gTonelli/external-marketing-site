// components
import { Page } from '@/components/Page'
import { QuizResultsPage } from './QuizResultsPage'
// utils
import { TStyle } from '@/utils/types'
import { externalRoutes } from '@/utils/constants'

export type TParams = { params: { style: TStyle } }

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export async function generateMetadata({ params }: TParams) {
  let title = 'Your Attachment Style Results'

  switch (params.style) {
    case 'fa':
      title = 'Fearful Avoidant | ' + title
      break

    case 'da':
      title = 'Dismissive Avoidant | ' + title
      break

    case 'ap':
      title = 'Anxious Preoccupied | ' + title
      break

    case 'sa':
      title = 'Securely Attached | ' + title
      break
  }

  return {
    title,
  }
}

export default function RoyalRumble({ params }: TParams) {
  return (
    <Page className="w-full text-center z-10" page_name={`vsl-${params.style}`}>
      <QuizResultsPage
        style={params.style}
        checkoutUrl={
          params.style !== 'sa'
            ? externalRoutes.checkoutRegularSubscription.concat('&promo_label=vsl-funnel')
            : undefined
        }
      />
    </Page>
  )
}
