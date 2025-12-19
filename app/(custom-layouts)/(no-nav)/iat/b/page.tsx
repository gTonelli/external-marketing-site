// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { IATContent } from '../IATContent'
import { metadata as controlMetadata } from '../page'
import { SplitTestTracker } from '@/components/SplitTestTracker'
import { splitTestConfigs } from '@/middleware'
// styles
import '../style.css'

export const metadata: Metadata = {
  ...controlMetadata,
  metadataBase: new URL('https://attachment.personaldevelopmentschool.com/iat/b'),
}

export default function IATSalePageB() {
  return (
    <Page page_name="External IAT Page - Variant">
      <SplitTestTracker variant="Variant 1" {...splitTestConfigs.iatSalesPageTest} />

      <IATContent isVariant={true} />
    </Page>
  )
}
