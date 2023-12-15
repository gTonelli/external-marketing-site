import { Header } from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header clickableLogo={false} includeSideMenu={false} navLinks={[]} />

      {children}
    </>
  )
}
