// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { AttachmentReport } from '../../attachment-report/[style]/AttachmentReport'
// utils
import { TStyle } from '@/utils/types'
import { getAttachmentStyleText } from '@/utils/functions'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ style: TStyle }>
}): Promise<Metadata> {
  const { style } = await params
  const attachmentStyleText = getAttachmentStyleText(style)
  return {
    title: `${attachmentStyleText} Attachment Report | PDS`,
    description: `Your attachment style is ${attachmentStyleText}. Discover key traits, patterns, and growth tools in your personalized report by Thais Gibson.`,
    robots: 'noindex',
  }
}

export default function AttachmentReportPage({ params }: { params: { style: TStyle } }) {
  return (
    <Page page_name={`Attachment Style Bundle Report - ${params.style}`}>
      <AttachmentReport memberVariant style={params.style} />
    </Page>
  )
}
