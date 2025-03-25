import { EExternalRoutes } from '@/utils/constants'
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types'

export type TSpinWheelVariant = 'email' | 'osm'

export const prizes = [
  {
    option: '7-day free trial',
    title: (
      <>
        Congratulations – You’ve Won a{' '}
        <span className="text-primary">7-day Free Trial to the Access Pass!</span>
      </>
    ),
    subheader:
      'You’ve won a 7-day Free Trial to the Access Pass! That’s unlimited access to our school’s entire collection — for free for 7 days!',
    disclaimer:
      'At the end of the trial, you’ll automatically become a member of the $67.00/month plan, which is 30% off the regular price.',
    checkoutLink: EExternalRoutes.THINKIFIC_CHECKOUT_7_DAY_TRIAL,
    userTag: 'spin-wheel-7dft',
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
      'You’ve won a 14-day Free Trial to the Access Pass! That’s unlimited access to our school’s entire collection — for free for 14 days!',
    disclaimer:
      'At the end of the trial, you’ll automatically become a member of the $67.00/month plan, which is 30% off the regular price.',
    checkoutLink: EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL,
    userTag: 'spin-wheel-14dft',
  },
  {
    option: '60% off first month',
    title: (
      <>
        Congratulations – You’ve Won <span className="text-primary">60% Off your First Month!</span>
      </>
    ),
    subheader:
      'Start your healing journey for less! You’ve unlocked this epic discount on the Access Pass—for only $39 for your first month—instead of the usual $97!',
    disclaimer:
      'At the end of the first month, you’ll automatically become a member of the $67.00/month plan, which is 30% off the regular price.',
    checkoutLink: EExternalRoutes.STRIPE_CHECKOUT_39_FIRST_MONTH,
    userTag: 'spin-wheel-39fmo',
  },
  {
    option: 'Free Trial + Free Course',
    title: (
      <>
        Congratulations – You’ve Won a{' '}
        <span className="text-primary">Free Trial & Free Course!</span>
      </>
    ),
    subheader:
      'You’ve won a 7-day Free Trial to the Access Pass! Plus, keep the Needs Course for LIFE!',
    disclaimer:
      'At the end of the trial, you’ll automatically become a member of the $67.00/month plan. You’ll still keep the Needs Course for life even if you don’t stay on.',
    checkoutLink: EExternalRoutes.THINKIFIC_CHECKOUT_JAN_2025_PROMO_TRIAL,
    userTag: 'spin-wheel-ft-fc',
  },
  {
    option: '50% off quarterly',
    title: (
      <>
        Congratulations – You’ve Won{' '}
        <span className="text-primary">50% off a Quarterly Membership for Life!</span>
      </>
    ),
    subheader:
      'You’ve won a permanent discount, so you can keep growing! $149 for 3 months – a 50% discount off the regular price for LIFE.',
    disclaimer: 'You can cancel at any time with no commitment.',
    checkoutLink: EExternalRoutes.THINKIFIC_CHECKOUT_QUARTERLY_PLAN,
    userTag: 'spin-wheel-50off-quarterly',
  },
  {
    option: 'Free 1 Month Membership',
    title: (
      <>
        Congratulations – You’ve Won{' '}
        <span className="text-primary">50% off a Quarterly Membership for Life!</span>
      </>
    ),
    subheader:
      'You’ve won a permanent discount, so you can keep growing! $149 for 3 months – a 50% discount off the regular price for LIFE.',
    disclaimer: 'You can cancel at any time with no commitment.',
    checkoutLink: EExternalRoutes.THINKIFIC_CHECKOUT_QUARTERLY_PLAN,
    userTag: 'spin-wheel-50off-quarterly',
  },
]

const spinWheelEmailPrizes: WheelData[] = [
  { option: prizes[0].option, style: { backgroundColor: '#EDDBCD' } },
  { option: prizes[1].option, style: { backgroundColor: '#D1CDED' } },
  { option: prizes[2].option, style: { backgroundColor: '#E9CDED' } },
  { option: prizes[3].option, style: { backgroundColor: '#CDEDD1' } },
  { option: prizes[4].option, style: { backgroundColor: '#EDECCD' } },
]

const spinWheelOSMPrizes: WheelData[] = spinWheelEmailPrizes.slice(0, 4)
// spinWheelOSMPrizes.push({ option: prizes[4].option, style: { backgroundColor: '#EDECCD' } })

const spinWheelEmailPrizeProbabilities = [30, 25, 10, 25, 10]

const spinWheelOSMPrizeProbabilities = [30, 30, 5, 35]

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
