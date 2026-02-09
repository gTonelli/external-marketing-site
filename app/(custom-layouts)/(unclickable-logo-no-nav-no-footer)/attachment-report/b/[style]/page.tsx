// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
// import { AttachmentReport } from './AttachmentReport'
// utils
// import { TStyle } from '@/utils/types'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }]
}

export const metadata: Metadata = {
  /* TODO: General SEO meta */
  title: 'Discover & Learn About Your Attachment Style',
  description:
    'Discover, learn, and take the first steps to having your dream life by uncovering your attachment style. Get all the essential information you need!',
  robots: 'noindex',
}

export default function AttachmentReportVariantPage({
  params,
}: {
  params: { style: 'fa' | 'ap' | 'da' }
}) {
  return (
    <Page page_name={`Attachment Style Report Old - ${params.style}`}>
      {/* <AttachmentReport style={params.style} /> */}
    </Page>
  )
}
