// core
import { Metadata } from 'next'
// config
import { MHARelationshipConfig } from '../../config'
import { MentalHealthPage } from '../../page'

export const metadata: Metadata = {
  title: 'Find Calmness & Clarity with Our 14-Day Free Trial',
  description:
    'Your mental health matters. Make it a priority with our All-Access Pass, available for 14 days for FREE this Mental Health Awareness Month.',
  robots: 'noindex',
}

export default function MentalHealthRelationship() {
  const page_name = 'mha-month-relationship'

  return <MentalHealthPage page_name={page_name} MHAConfig={MHARelationshipConfig} />
}
