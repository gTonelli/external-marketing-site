// components
import { Page } from '@/components/Page'
import { AttachmentReport } from '@/app/(custom-layouts)/(unclickable-logo-no-nav-no-footer)/attachment-report/[style]/AttachmentReport'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }]
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
