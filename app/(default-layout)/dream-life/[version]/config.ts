// utils
import { externalRoutes } from '@/utils/constants'

export const config = {
  membership: {
    heading: 'Create Your Dream Life With The All-Access Pass',
    subheading:
      'Your Path to Transformation Awaits – Activate Your All-Access Pass Membership Before Time Runs Out! ',
    checkoutLink: externalRoutes.checkoutRegularSubscription,
  },

  trial: {
    heading: 'Start Your 7-Day Free Trial to Our All-Access Pass Now',
    subheading:
      'Your Path to Transformation Awaits – Activate Your Free Trial Before Time Runs Out!',
    checkoutLink: externalRoutes.checkout7DayTrial,
  },
}
