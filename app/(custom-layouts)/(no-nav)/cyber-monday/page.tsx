// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import PromotionPage from '@/components/PromotionPage'

export const metadata: Metadata = {
  title: 'Cyber Monday | 14-Day Free All-Access Pass Trial',
  description: `Get everything you need for FREE for TWO weeks with our Cyber Monday deal. That's a 14-day free trial of our All-Access Pass. Exclusive offer that expires soon!`,
  robots: 'noindex',
}

export default function CyberMonday() {
  return (
    <Page className="w-full overflow-hidden" page_name="Cyber Monday">
      <PromotionPage page="Cyber Monday" />
    </Page>
  )
}
