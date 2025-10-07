import { Header } from '@/components/Header/Header'

export default function NoFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      {children}
    </>
  )
}
