// components
import { Page } from '@/components/Page'
import { SimplifiedResultsPage } from './SimplifiedResultsPage'
import { SIMPLIFIED_RESULTS_CONFIG } from './config'

export default function SimplifiedFAResultsPage() {
  return (
    <Page page_name="VSL Royal Rumble Results - fa">
      <SimplifiedResultsPage configKey="fa" config={SIMPLIFIED_RESULTS_CONFIG.fa} />
    </Page>
  )
}
