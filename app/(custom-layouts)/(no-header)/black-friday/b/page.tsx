// components
import { Page } from '@/components/Page'
import { FourteenDayTrialPage } from '@/components/FourteenDayTrial/FourteenDayTrialPage'
import { SplitTestTracker } from '@/components/SplitTestTracker'
// middleware
import { splitTestConfigs } from '@/middleware'

export default function BlackFriday14DayPage() {
  return (
    <Page page_name="Black Friday Variant Page B">
      <SplitTestTracker variant="Variant 1" {...splitTestConfigs.blackFriday} />

      <FourteenDayTrialPage configKey="black-friday" />
    </Page>
  )
}
