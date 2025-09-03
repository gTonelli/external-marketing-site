// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { SimplifiedResultsPage } from '../fearful-avoidant/SimplifiedResultsPage'
// config
import { FA_CLARITY_CONFIG } from '../fearful-avoidant/config'

export const metadata: Metadata = {
  title: 'Your Attachment Style Results | Fearful Avoidant',
}

export default function RoyalRumbleResultsPage() {
  const page_name = `VSL Royal Rumble Results - fa Clarity`

  return (
    <Page className="w-full text-center" page_name={page_name}>
      <SimplifiedResultsPage configKey="faClarity" config={FA_CLARITY_CONFIG} />
    </Page>
  )
}
