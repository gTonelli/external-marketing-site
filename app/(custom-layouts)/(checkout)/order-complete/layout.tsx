import { Header, PDSLogoStacked } from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header clickableLogo={false} logoElement={<PDSLogoStacked />} navLinks={[]} />

      {children}
    </>
  )
}
