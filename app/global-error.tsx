'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { NotFound } from '@/components/NotFound'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <>
      <Header />

      <NotFound />

      <Footer />
    </>
  )
}
