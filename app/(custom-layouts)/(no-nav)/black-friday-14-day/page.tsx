// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { SpecialPromotionBody } from '@/components/SpecialPromotion'
import { DreamLifeBanner } from '@/components/DreamLifeBanner'

export const metadata: Metadata = {
  title: 'Black Friday | 14-Day Free Trial of Our All-Access Pass',
  description: `Get 14 days free of our All-Access Pass with our Black Friday offer. Don't miss your chance to transform your life and relationships with this exclusive offer!`,
  robots: 'noindex',
}

export default function BlackFridayVariant() {
  return (
    <Page className="w-full overflow-hidden" page_name="Black Friday Variant Page">
      <DreamLifeBanner fourteenDayFT pageName="BLACK FRIDAY" />

      <SpecialPromotionBody showFirstSection={false} />
    </Page>
  )
}
