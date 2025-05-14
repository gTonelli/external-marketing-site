// components
import { Section } from '../Section'
import { TrustbarSlider } from '../Trustbar/variants/TrustbarSlider'

const TRUSTBAR = [
  `psychology-today-logo.png`,
  `forbes-logo.png`,
  `amazon-logo.png`,
  `superhuman-academy-logo.png`,
  `indigo-logo.png`,
  `success-logo.png`,
  `barnes-noble-logo.png`,
  `counseling-today-logo.png`,
  `marketwatch-logo.svg`,
  `yahoo-news-logo.png`,
]

export const IATTrustbar = () => (
  <Section className="w-full bg-white-secondary py-6 lg:py-8">
    <p className="font-bold tracking-0.325 text-center lg:text-lg">
      OUR PRODUCTS HAVE BEEN FEATURED IN
    </p>

    <TrustbarSlider brandLogosList={TRUSTBAR} />
  </Section>
)
