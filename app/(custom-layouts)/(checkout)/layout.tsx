import { Header } from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        includeGoBackButton
        clickableLogo={false}
        includeSideMenu={false}
        goBackButtonText="Cancel"
        navLinks={[]}
      />

      {children}
    </>
  )
}
