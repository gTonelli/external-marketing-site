// libraries
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types'
// utils
import { externalRoutes } from '@/utils/constants'

export type TSpinWheelVariant = 'email' | 'osm'

export const prizes = [
  {
    option: 'Free 7-Day Trial',
    mixpanelIdentifier: '7DFT',
    title: (
      <>
        Congratulations! You’ve Won a{' '}
        <span className="text-primary">7-Day Free Trial to the Access Pass.</span>
      </>
    ),
    subheader: 'Your Secure Love Journey Starts Now!',
    copy: 'Enjoy complete, unlimited access to our on-demand courses, private, supportive community, and live webinars with me, Thais Gibson, (normally $97/month) completely FREE for the next 7 days! Your transformation begins now!',
    imgSrc: '/images/SpinTheWheel/free-trial-congratulations.png',
    imgAlt: 'Congratulations image with gifts and balloons and free trial mockup',
    disclaimer:
      "After your trial ends, you'll automatically continue as an All-Access Pass member at the discounted rate of $67/month (30% off the regular price).",
    checkoutLink: externalRoutes.checkout7DayTrial,
    userTag: 'mkt-spin-wheel-7dft',
    probability: 12,
  },
  {
    option: 'Free 14-Day Trial',
    mixpanelIdentifier: '14DFT',
    title: (
      <>
        Congratulations! You’ve Won a{' '}
        <span className="text-primary">14-Day Free Trial to the Access Pass.</span>
      </>
    ),
    subheader: 'Twice the Time, Double the Breakthrough!',
    copy: 'Unlock unlimited access (normally $97/month) to our on-demand courses, private, supportive community, and live webinars with me, Thais Gibson, for 14 days, completely FREE. Real relationship breakthroughs start here.',
    imgSrc: '/images/SpinTheWheel/free-trial-congratulations.png',
    imgAlt: 'Congratulations image with gifts and balloons and free trial mockup',
    disclaimer:
      "After your trial ends, you'll automatically continue as an All-Access Pass member at the discounted rate of $67/month (30% off the regular price).",
    checkoutLink: externalRoutes.checkout14DayTrial,
    userTag: 'mkt-spin-wheel-14dft',
    probability: 20,
  },
  {
    option: '60% Off First Month',
    mixpanelIdentifier: '60% off 1mo',
    title: (
      <>
        Congratulations! You’ve Won <span className="text-primary">60% OFF Your First Month.</span>
      </>
    ),
    subheader: 'Huge Savings, Instant Transformation!',
    copy: "You've unlocked full access to the All-Access Pass (normally $97/month) for just $39 for your first month! Instant support, expert guidance, and powerful breakthroughs await.",
    imgSrc: '/images/congratulations.png',
    imgAlt: 'Congratulations image with gifts and balloons',
    disclaimer:
      "After your free month ends, you'll automatically continue as an All-Access Pass member at the discounted rate of $67/month (30% off the regular price).",
    checkoutLink: externalRoutes.singleStepCheckout39FirstMonth,
    userTag: 'mkt-spin-wheel-39fmo',
    probability: 1,
  },
  {
    option: '7-Day Trial + Free Course',
    mixpanelIdentifier: '7DFT+Needs',
    title: (
      <>
        Congratulations! You’ve Won a{' '}
        <span className="text-primary">FREE Needs Course + 7-Day Free Trial.</span>
      </>
    ),
    subheader: 'Start Your Journey to Deep Emotional Fulfillment!',
    copy: (
      <>
        Get unlimited access (normally $97/month) to ALL courses, our community, and live webinars
        with me, Thais Gibson, for 7 days, plus keep your{' '}
        <strong>Discover, Embrace, and Fulfill Your Personal Needs</strong> course forever
        absolutely FREE!
      </>
    ),
    imgSrc: '/images/SpinTheWheel/needs-course-congratulations.png',
    imgAlt:
      'Congratulations image with gifts and balloons and Discover, Embrace, and Fulfull Personal Needs course mockup',
    disclaimer:
      "After your trial ends, you'll automatically continue as an All-Access Pass member at the discounted rate of $67/month (30% off the regular price). You get to keep the Discover, Embrace, and Fulfill Your Personal Needs course for life, even if you don’t continue.",
    checkoutLink: externalRoutes.checkoutJan2025PromoTrial,
    userTag: 'mkt-spin-wheel-ft-needs',
    probability: 35,
  },
  {
    option: 'Free Month Membership',
    mixpanelIdentifier: 'Free Month',
    title: (
      <>
        Congratulations! You’ve Won a{' '}
        <span className="text-primary">Free Month of the All-Access Pass.</span>
      </>
    ),
    subheader: 'Your Healing Journey Just Got Easier!',
    copy: 'Enjoy a full month of unlimited access (normally $97/month) to our entire library of courses and tools, supportive community, and live webinars with me, Thais Gibson, absolutely FREE. Real transformation, zero cost.',
    imgSrc: '/images/congratulations.png',
    imgAlt: 'Congratulations image with gifts and balloons',
    disclaimer:
      "After your free month ends, you'll automatically continue as an All-Access Pass member at the discounted rate of $67/month (30% off the regular price).",
    checkoutLink: externalRoutes.checkout1MonthFree,
    userTag: 'mkt-spin-wheel-1mo-free',
    probability: 1,
  },
  {
    option: '$19 Somatic Course',
    mixpanelIdentifier: '$19 Somatic',
    title: (
      <>
        Congratulations! You’ve Unlocked the{' '}
        <span className="text-primary">Somatic Healing Course for Just $19.</span>
      </>
    ),
    subheader: 'Experience Lasting Emotional Relief!',
    copy: (
      <>
        Learn daily rituals for self-soothing and nervous system healing. Get the{' '}
        <strong>Release Emotions with Somatic Processing</strong> course for just $19 instead of
        $250! That’s over 90% off. Limited-time offer—start your transformation today!
      </>
    ),
    imgSrc: '/images/SpinTheWheel/somatic-course-congratulations.png',
    imgAlt: 'Congratulations image with gifts and balloons and Somatic Healing course mockup',
    disclaimer: '',
    checkoutLink: externalRoutes.checkoutJuly2025PromoTrial,
    userTag: 'mkt-spin-wheel-somatic',
    probability: 1,
  },
  {
    option: '7-Day Trial + Free Course',
    mixpanelIdentifier: '7DFT+Relationship',
    title: (
      <>
        Congratulations! You’ve Won a{' '}
        <span className="text-primary">FREE Relationship Course + 7-Day Free Trial.</span>
      </>
    ),
    subheader: 'Start Your Path to Healthy, Secure Love Today!',
    copy: (
      <>
        Enjoy unlimited access (normally $97/month) to ALL courses, our community, and live webinars
        with me, Thais Gibson, for a full 7 days, plus keep the{' '}
        <strong>Key Pillars to a Secure Relationship</strong> course forever for FREE!
      </>
    ),
    imgSrc: '/images/SpinTheWheel/relationships-course-congratulations.png',
    imgAlt:
      'Congratulations image with gifts and balloons and Key Pillars to a Secure Relationship course mockup',
    disclaimer:
      "After your trial ends, you'll automatically continue as an All-Access Pass member at the discounted rate of $67/month (30% off the regular price). You get to keep the Key Pillars for a Secure Relationship Course for life, even if you don’t continue.",
    checkoutLink: externalRoutes.checkoutJune2025PromoTrial,
    userTag: 'mkt-spin-wheel-ft-relationships',
    probability: 30,
  },
]

const spinWheelEmailPrizes: WheelData[] = [
  { option: prizes[0].option, style: { backgroundColor: '#EDDBCD' } },
  { option: prizes[1].option, style: { backgroundColor: '#D1CDED' } },
  { option: prizes[2].option, style: { backgroundColor: '#E9CDED' } },
  { option: prizes[3].option, style: { backgroundColor: '#CDEDD1' } },
  { option: prizes[4].option, style: { backgroundColor: '#D7E7EA' } },
  { option: prizes[5].option, style: { backgroundColor: '#EDCDCE' } },
  { option: prizes[6].option, style: { backgroundColor: '#CDDCED' } },
]

const spinWheelOSMPrizes: WheelData[] = spinWheelEmailPrizes

// PROD
// const spinWheelEmailPrizeProbabilities = prizes.map((prize) => prize.probability)

// TEARDOWN
const spinWheelEmailPrizeProbabilities = [14, 14, 14, 14, 14, 14, 16]

const spinWheelOSMPrizeProbabilities = spinWheelEmailPrizeProbabilities

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
