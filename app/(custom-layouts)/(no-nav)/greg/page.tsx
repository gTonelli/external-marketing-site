// components
import { Page } from '@/components/Page'
import { IndividualPodcastGuestPage } from './IndividualPodcastGuestPage'
import { GREG_VOISEN_PRICING } from './config'

export default function GregVoisenPodcastPage() {
  return (
    <Page page_name="Greg Voisen Podcast Guest Page">
      <IndividualPodcastGuestPage config={GREG_VOISEN_PRICING} />
    </Page>
  )
}
