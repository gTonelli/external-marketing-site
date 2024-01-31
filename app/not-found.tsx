import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { NotFound } from '@/components/NotFound'
import { EExternalRoutes, ERoutes } from '@/utils/constants'

export default function NotFoundPage() {
  return (
    <>
      <Header
        includeSideMenu
        navLinks={[
          {
            link: ERoutes.ATTACHMENT_QUIZ,
            text: 'Attachment Quiz',
          },
          {
            link: EExternalRoutes.PDS_COURSES,
            text: 'View Courses',
          },
          {
            link: ERoutes.IAT_SALES_PAGE,
            text: 'Certification',
          },
          {
            link: EExternalRoutes.COLLECTIONS,
            text: 'Memberships',
          },
          {
            link: ERoutes.LEARNING_LOVE_PAGE,
            text: 'Book',
          },
          {
            link: EExternalRoutes.ABOUT,
            text: 'About',
          },
          {
            link: EExternalRoutes.BLOG,
            text: 'Blog',
          },
        ]}
      />

      <NotFound />

      <Footer includeLinks />
    </>
  )
}
