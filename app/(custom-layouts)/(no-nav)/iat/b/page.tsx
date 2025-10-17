// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { IATContent } from '../IATContent'
import { metadata as controlMetadata } from '../page'
// styles
import '../style.css'

export const metadata: Metadata = {
  ...controlMetadata,
  metadataBase: new URL('https://attachment.personaldevelopmentschool.com/iat/b'),
}

export default function IATSalePageB() {
  return (
    <Page page_name="External IAT Page - Variant">
      <IATContent isVariant={true} />
    </Page>
  )
}
