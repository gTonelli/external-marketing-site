import { Metadata } from 'next'
import { ValentinesDayPage } from './ValentinesDayPage'

export const metadata: Metadata = {
  title: "Get a 14-day FREE Trial this Valentine's Day | The Personal Development School",
  description:
    "Unlock FREE access to everything The Personal Development School offers this Valentine's Day with a 14-day free trial to our All-Access Pass. Sign up now!",
}

export default function ValentinePage() {
  return <ValentinesDayPage />
}
