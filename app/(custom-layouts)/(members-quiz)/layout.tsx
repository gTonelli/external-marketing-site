// components
import { Header, PDSDefaultNavLinks } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "The Personal Development School's Member's Quiz",
  description: 'Take your attachment style knowledge to the next level with extra quizzes!',
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header includeSideMenu useMembersQuiz navLinks={PDSDefaultNavLinks} />

      {children}

      <Footer includeLinks />
    </>
  )
}
