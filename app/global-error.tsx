'use server'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header/Header'
import { NotFound } from '@/components/NotFound'

export default async function GlobalError() {
  return (
    <>
      <Header />

      <NotFound />

      <Footer />
    </>
  )
}
