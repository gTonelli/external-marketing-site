// components
import { Page } from '@/components/Page'
import { IndividualPodcastGuestPage } from '../greg/IndividualPodcastGuestPage'
import { MELANIE_GUEST_PRICING } from './config'

export default function GregVoisenPodcastPage() {
  return (
    <Page page_name="Greg Voisen Podcast Guest Page">
      <IndividualPodcastGuestPage config={MELANIE_GUEST_PRICING} />
    </Page>
  )
}
