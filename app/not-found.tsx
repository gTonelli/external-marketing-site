import { Footer } from '@/components/Footer'
import { Header, PDSDefaultNavLinks } from '@/components/Header/Header'
import { NotFound } from '@/components/NotFound'

export default function NotFoundPage() {
  return (
    <>
      <Header includeSideMenu navLinks={PDSDefaultNavLinks} />

      <NotFound />

      <Footer includeLinks />
    </>
  )
}
