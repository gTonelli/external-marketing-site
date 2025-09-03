// components
import { Section } from '@/components/Section'
import {
  IATWebinarPriceCard,
  TIATCardDetails,
  TIATPriceOption,
} from '../IATPriceCard/variants/IATWebinarPriceCard'
// utils
import { externalRoutes } from '@/utils/constants'

const IATLiveCardDetails: TIATCardDetails = {
  title: 'Live Training',
  originalPrice: [
    { price: '$7,000' },
    { price: '$3,499', label: '(50% off)' },
    { price: '$3,299', label: '(Specialist Call Discount)' },
  ],
  currentPrice: '$2,999.00',
  currentPriceLabel: '(Including $300 Masterclass Discount)',
  discount: 'TOTAL SAVINGS: $4,001',
  subheader: 'Unleash Your Coaching Potential with this Interactive Experience',
  copy: 'Join weekly group practice and Q&A sessions with Thais Gibson. Get on-the-spot support to learn quickly, receive helpful feedback to boost your confidence, and have all your questions answered about relationship coaching or building a business. Seats are limited for this unique opportunity.',
  perks: [
    '12-Week Comprehensive Live Program',
    '8 Weeks of Intensive Training with Thais Gibson',
    'Immersive & Engaging Classroom Experience',
    'Designed for All Levels of Expertise',
  ],
}

const OnDemandIATCardDetails: TIATCardDetails = {
  title: 'On Demand',
  originalPrice: [{ price: '$4,000' }, { price: '$1,999', label: '(50% off)' }],
  currentPrice: '$1,799.00',
  currentPriceLabel: '(Including $200 Masterclass Discount)',
  discount: 'TOTAL SAVINGS: $2,201',
  subheader: 'Ignite Your Career & Finances With a Self-Paced Format',
  copy: "The perfect format for self-paced learners or those who can't make the weekly sessions. Get access to the same features as the Live Program IAT™, including pre-recorded video modules, essential client resources, and business materials to build your coaching practice. You can enroll for this Program at any time.",
  perks: [
    'Pre-Recorded & Detailed Video Modules',
    'Self-Paced & Flexible Format',
    'Monthly Payment Plans Available',
    'Additional Prerequisites Courses',
  ],
}

const IATLiveCardPricing: TIATPriceOption[] = [
  {
    label: 'ONE TIME PAYMENT',
    price: '$2,999.00',
    checkout: externalRoutes.checkoutIATWebinarUpfront,
  },
  {
    label: '3 MONTH PAYMENT PLAN',
    price: '$1,039.00',
    checkout: externalRoutes.checkoutIATWebinar3MonthPlan,
  },
  {
    label: '6 MONTH PAYMENT PLAN',
    price: '$539.00',
    checkout: externalRoutes.checkoutIATWebinar6MonthPlan,
  },
  {
    label: '12 MONTH PAYMENT PLAN',
    price: '$289.00',
    checkout: externalRoutes.checkoutIATWebinar12MonthPlan,
  },
]

const OnDemandIATCardPricing: TIATPriceOption[] = [
  {
    label: 'ONE TIME PAYMENT',
    price: '$1,799.00',
    checkout: externalRoutes.checkoutIATRecordedWebinarUpfront,
  },
  {
    label: '3 MONTH PAYMENT PLAN',
    price: '$619.00',
    checkout: externalRoutes.checkoutIATRecordedWebinar3MonthPlan,
  },
  {
    label: '6 MONTH PAYMENT PLAN',
    price: '$319.00',
    checkout: externalRoutes.checkoutIATRecordedWebinar6MonthPlan,
  },
  {
    label: '12 MONTH PAYMENT PLAN',
    price: '$169.00',
    checkout: externalRoutes.checkoutIATRecordedWebinar12MonthPlan,
  },
]

export const IATWebinarPricing = () => {
  return (
    <Section>
      <div id="pricing" className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <IATWebinarPriceCard
          isLive
          cardDetails={IATLiveCardDetails}
          pricingMenu={IATLiveCardPricing}
        />

        <IATWebinarPriceCard
          cardDetails={OnDemandIATCardDetails}
          pricingMenu={OnDemandIATCardPricing}
        />
      </div>
    </Section>
  )
}
