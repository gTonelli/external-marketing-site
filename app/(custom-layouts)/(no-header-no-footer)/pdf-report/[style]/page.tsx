import { AttachmentReport } from '@/app/(custom-layouts)/(unclickable-logo-no-nav-no-footer)/attachment-report/[style]/AttachmentReport'
import { Page } from '@/components/Page'
import { TStyle } from '@/utils/types'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export default function AttachmentReportPage({ params }: { params: { style: TStyle } }) {
  return (
    <Page page_name={`Attachment Style Report Old - ${params.style}`}>
      <AttachmentReport style={params.style} pdfVariant={true} />
    </Page>
  )
}
