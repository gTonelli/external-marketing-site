// core
import { Metadata } from 'next'
// components
import { metadata as _metadata } from '../../attachment-report/[style]/page'
import { Page } from '@/components/Page'
import { AttachmentReport } from '../../attachment-report/[style]/AttachmentReport'
// utils
import { TStyle } from '@/utils/types'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export const metadata: Metadata = _metadata

export default function AttachmentReportPage({ params }: { params: { style: TStyle } }) {
  return (
    <Page page_name={`Attachment Style Bundle Report - ${params.style}`}>
      <AttachmentReport memberVariant style={params.style} />
    </Page>
  )
}
