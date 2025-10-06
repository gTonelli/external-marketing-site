import { externalRoutes, routes } from '@/utils/constants'
import { TRole, TUserData } from '@/utils/types'
import {
  faClipboard,
  faIdCardAlt,
  faLaptop,
  faSignOut,
  faUserFriends,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
import {
  faBook,
  faCalendarAlt,
  faCog,
  faCommentAltLines,
  faCommentsQuestionCheck,
  faListDropdown,
  faUsers,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export const SideMenuLinks = [
  {
    imgAlt: 'The Attachment Quiz Icon, a hand prerssing a checkmark button',
    link: routes.attachmentQuiz,
    imgSrc: '/icons/sidemenu-quiz.svg',
    text: 'Attachment Quiz',
  },
  {
    imgAlt: 'PDS Courses Icon, a vector image of a person on a computer',
    link: externalRoutes.pdsCourses,
    imgSrc: '/icons/sidemenu-courses.svg',
    text: 'View Courses',
  },
  {
    imgAlt: 'Memberships Icon: a vector image of 3 pamphlet leafs',
    link: externalRoutes.collections,
    imgSrc: '/icons/sidemenu-membership.svg',
    text: 'Memberships',
  },
  {
    imgAlt: 'Certifications Icon: a vector image of a sheet with a badge',
    link: routes.iatSalesPage,
    imgSrc: '/icons/sidemenu-certification.svg',
    text: 'Certification',
  },
  {
    imgAlt: 'Book Icon: a vector image of a Book',
    link: routes.learningLovePage,
    imgSrc: '/icons/sidemenu-book.svg',
    text: 'Book',
  },
  {
    imgAlt: 'About Icon: An information icon over a vector image of a person',
    link: externalRoutes.about,
    imgSrc: '/icons/sidemenu-about.svg',
    text: 'About',
  },
  {
    imgAlt: 'Blog Icon: a plain folder',
    link: externalRoutes.blog,
    imgSrc: '/icons/sidemenu-blog.svg',
    text: 'Blog',
  },
  {
    imgAlt: 'Help Icon: a question mark in a circle',
    link: externalRoutes.supportPage,
    imgSrc: '/icons/sidemenu-faq.svg',
    text: 'Help',
  },
  {
    imgAlt: 'Sign In Icon: an arrow pointing to an overlaid door.',
    link: externalRoutes.signIn,
    imgSrc: '/icons/sidemenu-sign-in.svg',
    text: 'Sign In',
  },
]

type TLink = { text: string; link: string }

export type TLoggedInSideMenuLink = {
  heading?: string
  description?: string
  icon?: IconDefinition
  link?: (roles?: TRole[]) => TLink
  links?: ((roles?: TRole[]) => TLink[]) | (() => TLink[])
}

export const LoggedInSideMenuLinks: { [key: string]: TLoggedInSideMenuLink } = {
  accountSettings: {
    description: 'Keep your information secure and up-to-date',
    heading: 'Account Settings',
    icon: faCog,
    links: () => [
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
  },

  attachmentQuiz: {
    link: (roles?: TRole[]) => {
      if (roles?.includes('member')) {
        return { text: "Member's Quiz", link: routes.membersQuiz }
      }
      return { text: 'Attachment Quiz', link: routes.home }
    },
  },

  bootcamp: {
    description: 'Transform your attachment style with guided programs.',
    heading: 'Bootcamp',
    icon: faListDropdown,
    links: () => [
      { text: 'Fearful Avoidant', link: externalRoutes.attachmentBootcampFearfulAvoidant },
      { text: 'Anxious Preoccupied', link: externalRoutes.attachmentBootcampAnxiousPreoccupied },
      { text: 'Dismissive Avoidant', link: externalRoutes.attachmentBootcampDismissiveAvoidant },
      { text: 'My Bootcamp', link: externalRoutes.attachmentBootcamp },
    ],
  },

  coaches: {
    description: 'Become a certified coach or find expert guidance.',
    heading: 'IAT Certification',
    icon: faUserFriends,
    links: (roles?: TRole[]) => {
      if (roles?.includes('iat_member')) {
        return [
          { text: 'Begin Program', link: externalRoutes.dashboardIat },
          { text: 'My IAT', link: externalRoutes.iatHub },
        ]
      }
      return [
        { text: 'Become A Coach', link: routes.iatSalesPage },
        { text: 'Find A Coach', link: externalRoutes.attachmentCoaches },
        { text: 'FAQ', link: externalRoutes.faq },
        { text: 'Book A Call', link: externalRoutes.higherLevelMelanie },
        { text: 'My IAT', link: externalRoutes.iatHub },
      ]
    },
  },

  community: {
    description: 'Engage with others and find support in your journey.',
    heading: 'Community',
    icon: faUsers,
    links: () => [
      { text: 'Community Hub', link: externalRoutes.communityHub },
      { text: 'Ask A Question', link: externalRoutes.communityAskQuestion },
      { text: 'Latest Posts', link: externalRoutes.communityLatestPosts },
    ],
  },

  courses: {
    description: 'Access your personalized learning journey and progress.',
    heading: 'Courses',
    icon: faLaptop,
    links: () => [
      { text: 'Courses', link: externalRoutes.dashboardCourses },
      {
        text: 'Programs',
        link: externalRoutes.programs,
      },
      {
        text: 'My Dashboard',
        link: externalRoutes.dashboard,
      },
      {
        text: 'For You',
        link: externalRoutes.forYou,
      },
    ],
  },

  membership: {
    description: 'Unlock exclusive resources for your personal growth.',
    heading: 'Membership',
    icon: faClipboard,
    links: () => [
      {
        text: 'Become a Member',
        link: externalRoutes.collections,
      },
    ],
  },

  pdsResources: {
    description: 'Explore a variety of valuable learning resources anytime.',
    heading: 'Resources',
    icon: faBook,
    links: () => [
      {
        text: 'Podcast',
        link: routes.podcast,
      },
      {
        text: 'Blog',
        link: externalRoutes.blog,
      },
      {
        text: 'Book',
        link: routes.learningLovePage,
      },
    ],
  },

  results: {
    description: 'See real success stories and PDS impact.',
    heading: 'Results',
    icon: faCommentAltLines,
    links: () => [
      {
        text: 'Success Stories',
        link: externalRoutes.testimonials,
      },
      {
        text: 'How does PDS work?',
        link: externalRoutes.about,
      },
    ],
  },

  signOut: {
    icon: faSignOut,
    link: () => {
      return { text: 'Sign Out', link: externalRoutes.signOut }
    },
  },

  students: {
    description: 'Explore tools to grow and connect meaningfully.',
    heading: 'Students',
    icon: faIdCardAlt,
    links: () => [
      {
        text: 'Courses',
        link: externalRoutes.pdsCourses,
      },
      {
        text: 'Webinars',
        link: externalRoutes.membersLounge,
      },
      {
        text: 'Community Hub',
        link: externalRoutes.communityHub,
      },
      {
        text: 'Attend Bootcamp',
        link: externalRoutes.attachmentBootcamp,
      },
      {
        text: 'Get Started',
        link: externalRoutes.collections,
      },
      {
        text: 'My Dashboard',
        link: externalRoutes.dashboard,
      },
    ],
  },

  support: {
    description: 'Get the help you need anytime, anywhere.',
    heading: 'Support',
    icon: faCommentsQuestionCheck,
    links: () => [
      {
        text: 'Help Center',
        link: externalRoutes.supportPage,
      },
      {
        text: 'Contact Us',
        link: externalRoutes.contactUs,
      },
    ],
  },

  webinarsEvents: {
    description: 'Join live webinars and watch past webinars to grow and connect.',
    heading: 'Webinars',
    icon: faCalendarAlt,
    links: () => [
      {
        text: 'Upcoming Events',
        link: externalRoutes.webinarsEventsCalendar,
      },
      {
        text: 'Join Webinars',
        link: externalRoutes.webinarsEvents,
      },
      {
        text: 'Watch Recordings',
        link: externalRoutes.webinarLibrary,
      },
    ],
  },
}
