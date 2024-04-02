import { Metadata } from 'next'
import { FreeTrial14Day } from './FreeTrial14Day'

export const metadata: Metadata = {
  title: 'Get Your Free 14-day Trial | The Personal Development School',
  description:
    'Unlock FREE access to everything The Personal Development School offers with a 14-day Free Trial to our All-Access Pass. Sign up now!',
  robots: 'noindex',
}

export default function FreeTrial14DayPage() {
  return <FreeTrial14Day />
}
