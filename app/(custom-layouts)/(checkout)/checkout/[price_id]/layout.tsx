import { Header, PDSLogoStacked } from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        includeGoBackButton
        clickableLogo={false}
        logoElement={<PDSLogoStacked />}
        goBackButtonText="Cancel"
        navLinks={[]}
      />

      {children}
    </>
  )
}
