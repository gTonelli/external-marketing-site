'use client'

// core
import { useState, useEffect } from 'react'
// components
import { RESULTS } from '@/app/(default-layout)/quiz/results/[style]/config'
// modules
import { Storage } from '@/modules/Storage'
// utils
import { TStyle } from '@/utils/types'

interface IAttachmentQuizHeadingProps {
  style: TStyle
}

export const AttachmentQuizHeading = ({ style }: IAttachmentQuizHeadingProps) => {
  // ==================== State ====================
  const userFirstName = Storage.get('userFirstName')
  const [titleStart, setTitleStart] = useState('')

  useEffect(() => {
    setTitleStart(userFirstName ? userFirstName.toUpperCase() + ', ' : '')
  }, [])

  return (
    <h1 className="text-purple-dark font-bold font-effra">
      {titleStart}
      {RESULTS[style].HERO_SECTION.headline}
    </h1>
  )
}
