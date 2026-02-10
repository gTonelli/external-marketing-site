// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { AttachmentReport } from '@/app/(custom-layouts)/(unclickable-logo-no-nav-no-footer)/attachment-report/[style]/AttachmentReport'
// utils
import { getAttachmentStyleText } from '@/utils/functions'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ style: 'fa' | 'ap' | 'da' }>
}): Promise<Metadata> {
  const { style } = await params
  const attachmentStyleText = getAttachmentStyleText(style)
  return {
    title: `${attachmentStyleText} Attachment Report | PDS`,
    description: `Your attachment style is ${attachmentStyleText}. Discover key traits, patterns, and growth tools in your personalized report by Thais Gibson.`,
    robots: 'noindex',
  }
}

export default function AttachmentReportVariantPage({
  params,
}: {
  params: { style: 'fa' | 'ap' | 'da' }
}) {
  return (
    <Page page_name={`Attachment Style Report Variant B - ${params.style}`}>
      <AttachmentReport funnelVariant style={params.style} />
    </Page>
  )
}
