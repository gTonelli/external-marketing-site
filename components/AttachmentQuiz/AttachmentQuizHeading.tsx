'use client'

// core
import { useState, useEffect } from 'react'
// components
import { RESULTS } from '@/app/(default-layout)/quiz/results/fa/config'
// modules
import { Storage } from '@/modules/Storage'

export const AttachmentQuizHeading = () => {
  // ==================== State ====================
  const userFirstName = Storage.get('userFirstName')
  const [titleStart, setTitleStart] = useState('')

  useEffect(() => {
    setTitleStart(userFirstName ? userFirstName.toUpperCase() + ', ' : '')
  }, [userFirstName])

  return (
    <h1 className="text-purple-dark font-bold font-effra">
      {titleStart}
      {RESULTS['fa'].HERO_SECTION.headline}
    </h1>
  )
}
