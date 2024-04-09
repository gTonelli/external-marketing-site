// components
import { Page } from '@/components/Page'
import { AttachmentQuizV2ResultsPage as _Page } from '@/components/AttachmentQuizV2/AttachmentQuizV2ResultsPage'
// config
import { config } from './config'
// style
import '../../../styles.css'

export default function AttachmentQuizV2ResultsPage({ params }: { params: { scores: string[] } }) {
  return (
    <Page page_name={'Attachment Style Results - FA'}>
      <_Page config={config} params={params} />
    </Page>
  )
}
