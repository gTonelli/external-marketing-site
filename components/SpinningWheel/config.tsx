// libraries
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types'
// utils
import { externalRoutes } from '@/utils/constants'

export type TSpinWheelVariant = 'email' | 'osm'

const features = [
  'Live Webinars & Q&As with Thais Gibson',
  'All Attachment Style Courses + All Courses Inside the School',
  'Access to Our Supportive Community & Study Groups',
]

const commonPrizes = [
  {
    option: '7-day free trial',
    title: (
      <>
        Congratulations – You’ve Won a{' '}
        <span className="text-primary">7-day Free Trial to the Access Pass!</span>
      </>
    ),
    subheader:
      'Get unlimited access to our school’s entire collection — for free for 7 days! That includes:',
    features,
    disclaimer:
      'At the end of the trial, you’ll automatically become a member of the $67.00/month plan, which is 30% off the regular price.',
    checkoutLink: externalRoutes.checkout7DayTrial,
    userTag: 'mkt-spin-wheel-7dft',
  },
  {
    option: '14-day free trial',
    title: (
      <>
        Congratulations – You’ve Won a{' '}
        <span className="text-primary">14-day Free Trial to the Access Pass!</span>
      </>
    ),
    subheader:
      'Get unlimited access to our school’s entire collection — for free for 14 days! That includes:',
    features,
    disclaimer:
      'At the end of the trial, you’ll automatically become a member of the $67.00/month plan, which is 30% off the regular price.',
    checkoutLink: externalRoutes.checkout14DayTrial,
    userTag: 'mkt-spin-wheel-14dft',
  },
  {
    option: '60% off first month',
    title: (
      <>
        Congratulations – You’ve Won <span className="text-primary">60% Off Your First Month!</span>
      </>
    ),
    subheader:
      'Start your healing journey for less! You’ve unlocked this epic discount on the Access Pass—for only $39 for your first month—instead of the usual $97!  You’ll get:',
    features,
    disclaimer:
      'At the end of the first month, you’ll automatically become a member of the $67.00/month plan, which is 30% off the regular price.',
    checkoutLink: externalRoutes.singleStepCheckout39FirstMonth,
    userTag: 'mkt-spin-wheel-39fmo',
  },
  {
    option: 'Free trial + free course',
    title: (
      <>
        Congratulations – You’ve Won a{' '}
        <span className="text-primary">Free Trial & Free Course!</span>
      </>
    ),
    subheader:
      'You’ve won a 7-day Free Trial to the Access Pass and can keep the Needs Course for LIFE! You’ll enjoy:',
    features: [
      'Live Webinars & Q&As with Thais + Community Access',
      'All Attachment Style Courses + All Courses Inside the School',
      'Keep the Needs Course for Life',
    ],
    disclaimer:
      'At the end of the trial, you’ll automatically become a member of the $67.00/month plan. You’ll still keep the Needs Course for life even if you don’t stay on.',
    checkoutLink: externalRoutes.checkoutJan2025PromoTrial,
    userTag: 'mkt-spin-wheel-ft-fc',
  },
]

export const prizes = {
  email: [
    ...commonPrizes,
    {
      option: '50% off quarterly',
      title: (
        <>
          Congratulations – You’ve Won{' '}
          <span className="text-primary">50% Off a Quarterly Membership for Life!</span>
        </>
      ),
      subheader:
        'You’ve won a permanent discount, so you can keep growing! $149 for 3 months – a 50% discount off the regular price for LIFE. You’ll get:',
      features,
      disclaimer: 'You can cancel at any time with no commitment.',
      checkoutLink: externalRoutes.checkoutQuarterly149,
      userTag: 'mkt-spin-wheel-50off-quarterly',
    },
  ],
  osm: [
    ...commonPrizes,
    {
      option: 'Free month membership',
      title: (
        <>
          Congratulations – You’ve Won a{' '}
          <span className="text-primary">Free 1-Month Membership!</span>
        </>
      ),
      subheader:
        'Enjoy everything the All-Access Pass has to offer for FREE for 1-month! For 30 days, you’ll get:',
      features,
      disclaimer:
        'At the end of the month, you’ll automatically become a member of the $67.00/month plan, which is 30% off the regular price.',
      checkoutLink: externalRoutes.checkout1MonthFree,
      userTag: 'mkt-spin-wheel-1mo-free',
    },
  ],
}

const spinWheelEmailPrizes: WheelData[] = [
  { option: prizes['email'][0].option, style: { backgroundColor: '#EDDBCD' } },
  { option: prizes['email'][1].option, style: { backgroundColor: '#D1CDED' } },
  { option: prizes['email'][2].option, style: { backgroundColor: '#E9CDED' } },
  { option: prizes['email'][3].option, style: { backgroundColor: '#CDEDD1' } },
  { option: prizes['email'][4].option, style: { backgroundColor: '#EDECCD' } },
]

const spinWheelOSMPrizes: WheelData[] = spinWheelEmailPrizes.slice(0, 4)
spinWheelOSMPrizes.push({ option: prizes['osm'][4].option, style: { backgroundColor: '#EDECCD' } })

const spinWheelEmailPrizeProbabilities = [35, 35, 5, 20, 5]

const spinWheelOSMPrizeProbabilities = [30, 30, 4, 35, 1]

/** cummulative probabilities array of email prizes */
const spinWheelEmailPrizeDistribution = spinWheelEmailPrizeProbabilities.reduce<number[]>(
  (arr, probability, index) => {
    arr.push((arr[index - 1] || 0) + probability)
    return arr
  },
  []
)

/** cummulative probabilities array of osm prizes */
const spinWheelOSMPrizeDistribution = spinWheelOSMPrizeProbabilities.reduce<number[]>(
  (arr, probability, index) => {
    arr.push((arr[index - 1] || 0) + probability)
    return arr
  },
  []
)

export const getSpinWheelPrizes = (pageVariant: TSpinWheelVariant) =>
  pageVariant === 'email' ? spinWheelEmailPrizes : spinWheelOSMPrizes

export const getSpinWheelPrizeDistribution = (pageVariant: TSpinWheelVariant) =>
  pageVariant === 'email' ? spinWheelEmailPrizeDistribution : spinWheelOSMPrizeDistribution
