import { externalRoutes } from '@/utils/constants'

export const headerSideMenuButtonConfig = {
  accountSettingsLinks: [
    {
      text: 'Profile',
      link: externalRoutes.account,
    },
    {
      text: 'Password',
      link: externalRoutes.accountPassword,
    },
    {
      text: 'Certificates',
      link: externalRoutes.accountCertificates,
    },
    {
      text: 'Notifications',
      link: externalRoutes.accountNotifications,
    },
    {
      text: 'Billing',
      link: externalRoutes.accountBilling,
    },
    {
      text: 'Membership',
      link: externalRoutes.accountMembership,
    },
    {
      text: 'Order History',
      link: externalRoutes.accountOrders,
    },
  ],
}
