import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lifetime All-Access - The Personal Development School',
  description: 'Get your lifetime, all-access pass to The Personal Development School today!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
