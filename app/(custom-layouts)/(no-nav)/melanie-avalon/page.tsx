// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { IndividualPodcastGuestPage } from '../greg-voisen/IndividualPodcastGuestPage'
import { MELANIE_GUEST_PRICING } from './config'

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
        checkoutUrl="https://university.personaldevelopmentschool.com/pages/checkout?product_id=559833&price_id=1285773&coupon=ifpodcast"
      />
    </Page>
  )
}
