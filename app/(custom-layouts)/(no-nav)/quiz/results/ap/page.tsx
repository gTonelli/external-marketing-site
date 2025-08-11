// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { SimplifiedResultsPage } from '../fearful-avoidant/SimplifiedResultsPage'
// modules
import { Pages } from '@/modules/Mixpanel'
import { SIMPLIFIED_RESULTS_CONFIG } from '../fearful-avoidant/config'

export const metadata: Metadata = {
  title: 'Your Attachment Style Results | Anxious Preoccupied',
}

export default function RoyalRumbleResultsPage() {
  const style = 'ap'
  const page_name = `VSL Royal Rumble Results - ${style}` as Pages

  return (
    <Page className="w-full text-center" page_name={page_name}>
      <SimplifiedResultsPage configKey="ap" config={SIMPLIFIED_RESULTS_CONFIG.ap} />
    </Page>
  )
}
