// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { IndividualPodcastGuestPage } from './IndividualPodcastGuestPage'
// config
import { GREG_VOISEN_PRICING } from './config'
// utils
import { externalRoutes } from '@/utils/constants'

export const metadata: Metadata = {
  title: 'Enjoy 50% Off Your Quarterly All-Access Pass Membership',
  description:
    'Here’s your exclusive opportunity to use the ultimate platform to change your life and relationships – and get a 50% off it too for LIFE!',
  robots: 'noindex',
}

export default function GregVoisenPodcastPage() {
  return (
    <Page page_name="Greg Voisen Podcast Guest Page">
      <IndividualPodcastGuestPage
        config={GREG_VOISEN_PRICING}
        checkoutUrl={externalRoutes.checkoutQuarterlyPlanGregVoisen}
      />
    </Page>
  )
}
