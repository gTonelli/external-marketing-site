// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { IndividualPodcastGuestPage } from '../greg-voisen/IndividualPodcastGuestPage'
// config
import { MELANIE_GUEST_PRICING } from './config'
// utils
import { EExternalRoutes } from '@/utils/constants'

export const metadata: Metadata = {
  title: 'Get 50% Off Your Monthly All-Access Pass For Life!',
  description:
    'Unlock the ultimate platform to improve your relationships and level up your love life! Claim this exclusive 50% monthly discount offer for LIFE!',
  robots: 'noindex',
}

export default function MelanieAvalonPodcastPage() {
  return (
    <Page page_name="Melanie Avalon Podcast Guest Page">
      <IndividualPodcastGuestPage
        config={MELANIE_GUEST_PRICING}
        checkoutUrl={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION_49_DOLLAR}
      />
    </Page>
  )
}
