// core
import { Metadata } from 'next'
// components
import { SplitTestTracker } from '@/components/SplitTestTracker'
import { Page } from '@/components/Page'
import { IATInfo } from '../info/IATInfo'
// middleware
import { splitTestConfigs } from '@/middleware'

export const metadata: Metadata = {
  title: 'Get the #1 FREE resource on IAT™ Relationship Coaching',
  description:
    'Download your free guide to the IAT™ Relationship Coaching Program – and join 1000’s of top coaches, therapists, and psychologists worldwide in this program! ',
  robots: 'noindex',
}

export default function IATInfoVariantPage() {
  return (
    <Page page_name="IAT Info Variant Page">
      <SplitTestTracker variant="Variant 1" {...splitTestConfigs.iatEbookTest} />

      <IATInfo isVariant />
    </Page>
  )
}
