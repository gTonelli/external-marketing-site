import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'
import { routes } from '@/utils/constants'

export const metadata: Metadata = {
  title: 'Explore PDS Courses',
  description: 'Explore a variety of courses from Thais Gibson & The Personal development School',
  robots: 'noindex',
}

export default function ExploreCoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        clickableLogo={false}
        navLinks={[
          {
            link: routes.exploreCoursesPage,
            text: 'View Courses',
            className: '!mr-auto !ml-0',
          },
        ]}
      />

      {children}

      <Footer />
    </>
  )
}
