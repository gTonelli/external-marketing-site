// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { SpecialPromotionBody } from '@/components/SpecialPromotion'
import { DreamLifeBanner } from '@/components/DreamLifeBanner'

export const metadata: Metadata = {
  title: 'Cyber Monday | 14-Day Free All-Access Pass Trial',
  description: `Get everything you need for FREE for TWO weeks with our Cyber Monday deal. That's a 14-day free trial of our All-Access Pass. Exclusive offer that expires soon!`,
  robots: 'noindex',
}

export default function CyberMondayVariant() {
  return (
    <Page className="w-full overflow-hidden" page_name="Cyber Monday Variant Page">
      <DreamLifeBanner fourteenDayFT pageName="CYBER MONDAY" />

      <SpecialPromotionBody hideFirstSection />
    </Page>
  )
}
