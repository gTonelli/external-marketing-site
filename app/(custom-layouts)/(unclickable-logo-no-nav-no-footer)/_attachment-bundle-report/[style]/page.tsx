// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
// utils
import { TStyle } from '@/utils/types'
import { AttachmentReport } from '../../attachment-report/[style]/AttachmentReport'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export const metadata: Metadata = {
  /* TODO: General SEO meta */
  title: 'Discover & Learn About Your Attachment Style',
  description:
    'Discover, learn, and take the first steps to having your dream life by uncovering your attachment style. Get all the essential information you need!',
  robots: 'noindex',
}

export default function AttachmentReportPage({ params }: { params: { style: TStyle } }) {
  return (
    <Page page_name={`Attachment Style Bundle Report - ${params.style}`}>
      <AttachmentReport ageVariant style={params.style} />
    </Page>
  )
}
