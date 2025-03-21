// core
import { Metadata } from 'next'
// components
import { IATInfo } from './IATInfo'
import { Page } from '@/components/Page'
import { SplitTestTracker } from '@/components/SplitTestTracker'
// middleware
import { splitTestConfigs } from '@/middleware'
// styles
import './style.css'

export const metadata: Metadata = {
  title: "Thais Gibson's Integrated Attachment Theory Coaching Certification",
  description: 'Become an Integrated Attachment Coach through PDS',
  robots: 'noindex',
}

export default async function IATInfoPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const isEbookSplitTestControl = (await searchParams).utm_source === 'paid-youtube'

  return (
    <Page page_name={'IAT Info Page'}>
      {isEbookSplitTestControl && (
        <SplitTestTracker variant="Control" {...splitTestConfigs.iatEbookTest} />
      )}

      <IATInfo />
    </Page>
  )
}
