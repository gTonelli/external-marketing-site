'use client'

import { NotFound } from '@/components/NotFound'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <NotFound />
      </body>
    </html>
  )
}
