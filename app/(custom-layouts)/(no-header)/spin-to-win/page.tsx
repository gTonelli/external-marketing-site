// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import SpinWheelPage from './SpinWheelPage'

const metaData: Metadata = {
  title: 'Claim Your FREE Prize Now!',
  description:
    'Just spin the wheel to claim the most in-demand and rave-reviewed offers in Personal Development School history! Don’t miss this one-of-a-lifetime opportunity!',
}

export default async function SpinTheWheelEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const firstName = (await searchParams).firstName
  const email = (await searchParams).email

  return (
    <Page page_name="Spin The Wheel - Email">
      <SpinWheelPage
        pageVariant="email"
        firstName={typeof firstName === 'object' ? firstName[0] : firstName}
        email={typeof email === 'object' ? email[0] : email}
      />
    </Page>
  )
}
