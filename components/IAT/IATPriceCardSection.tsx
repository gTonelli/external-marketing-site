// components
import { Section } from '../Section'
import { IATPriceCard } from '../IATPriceCard/IATPriceCard'
// config
import { IAT_COPY as IAT } from '../../app/(default-layout)/iat/config'
// utils
import { externalRoutes } from '@/utils/constants'

const iatRecordedPrices = [
  {
    price: '$1,999.00',
    priceLabel: '',
    bottomText: 'ONE TIME PAYMENT',
    link: externalRoutes.checkoutIATRecordedUpfront,
  },
  {
    price: '$689.00',
    priceLabel: '/ month',
    bottomText: '3 MONTH PAYMENT PLAN',
    link: externalRoutes.checkoutIATRecorded3MonthPlan,
  },
  {
    price: '$359.00',
    priceLabel: '/ month',
    bottomText: '6 MONTH PAYMENT PLAN',
    link: externalRoutes.checkoutIATRecorded6MonthPlan,
  },
  {
    price: '$189.00',
    priceLabel: '/ month',
    bottomText: '12 MONTH PAYMENT PLAN',
    link: externalRoutes.checkoutIATRecorded12MonthPlan,
  },
]

const iatLivePrices = [
  {
    price: '$3,499.00',
    priceLabel: '',
    bottomText: 'ONE TIME PAYMENT',
    link: externalRoutes.checkoutIATSummer2025Upfront,
  },
  {
    price: '$1,209.00',
    priceLabel: '/ month',
    bottomText: '3 MONTH PAYMENT PLAN',
    link: externalRoutes.checkoutIATSummer20253MonthPlan,
  },
  {
    price: '$629.00',
    priceLabel: '/ month',
    bottomText: '6 MONTH PAYMENT PLAN',
    link: externalRoutes.checkoutIATSummer20256MonthPlan,
  },
  {
    price: '$339.00',
    priceLabel: '/ month',
    bottomText: '12 MONTH PAYMENT PLAN',
    link: externalRoutes.checkoutIATSummer202512MonthPlan,
  },
]

export const IATPriceCardSection = () => {
  return (
    <Section classNameInner="max-w-md mt-12 lg:max-w-5xl lg:mt-0">
      <div className="lg:grid-cols-2 lg:grid lg:gap-8">
        <IATPriceCard
          isLive
          benefits={IAT.price.live_mode}
          heading="Live Training"
          originalPrice={'$7,000.00'}
          prices={iatLivePrices}
          salePrice={'$3,499.00'}
        />

        <IATPriceCard
          benefits={IAT.price.recorded_mode}
          heading="On Demand"
          originalPrice={'$4,000.00'}
          prices={iatRecordedPrices}
          salePrice={'$1,999.00'}
          subheading={`MONTHLY INSTALLMENT PAYMENT OPTIONS AVAILABLE`}
        />
      </div>
    </Section>
  )
}
