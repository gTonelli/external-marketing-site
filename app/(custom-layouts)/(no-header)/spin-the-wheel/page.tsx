// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import SpinWheelPage from '../spin-to-win/SpinWheelPage'

const metaData: Metadata = {
  title: 'Claim Your FREE Prize Now!',
  description:
    'Just spin the wheel to claim the most in-demand and rave-reviewed offers in Personal Development School history! Don’t miss this one-of-a-lifetime opportunity!',
  robots: 'noindex',
}

export default function SpinTheWheelOSMPage() {
  return (
    <Page page_name="Spin The Wheel - OSM">
      <SpinWheelPage pageVariant="osm" />
    </Page>
  )
}
