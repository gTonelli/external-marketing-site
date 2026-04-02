'use client'

import { useScrollState } from '@/utils/hooks'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const scrollY = useScrollState()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const percent = docHeight ? (scrollY / docHeight) * 100 : 0
    setProgress(percent)
  }, [scrollY])

  return (
    <div className={`sticky top-0 left-0 z-[9999] h-1 w-full bg-transparent`}>
      <div
        className="h-full bg-primary transition-[width] duration-100 ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
