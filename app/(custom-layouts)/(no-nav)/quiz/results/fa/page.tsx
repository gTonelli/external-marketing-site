// components
import { Page } from '@/components/Page'
import { FAResultsPage } from './FAResultsPage'
// modules
import { Pages } from '@/modules/Mixpanel'
// utils
import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Your Attachment Style Results | Fearful Avoidant',
}

export default function RoyalRumbleResultsPage() {
  const style = 'fa'
  const page_name = `VSL Royal Rumble Results - ${style}` as Pages

  return (
    <Page className="w-full text-center" page_name={page_name}>
      <FAResultsPage />
    </Page>
  )
}
