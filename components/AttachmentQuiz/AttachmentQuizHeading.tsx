'use client'

// core
import { useState, useEffect } from 'react'
// components
import { RESULTS } from '@/app/(custom-layouts)/(no-nav)/quiz/results/fa/config'
// modules
import { Storage } from '@/modules/Storage'
import { IDefaultProps } from '..'
// libraries
import cx from 'classnames'
import { TStyle } from '@/utils/types'

interface IAttachmentQuizHeadingProps extends IDefaultProps {
  copy?: string
}

export const AttachmentQuizHeading = ({ copy, className }: IAttachmentQuizHeadingProps) => {
  // ==================== State ====================
  const userFirstName = Storage.get('userFirstName')
  const [titleStart, setTitleStart] = useState('')

  useEffect(() => {
    setTitleStart(userFirstName ? userFirstName + ', ' : '')
  }, [userFirstName])

  return (
    <h1 className={cx('text-purple-dark font-bold font-effra uppercase', className)}>
      {titleStart}
      {copy || RESULTS['fa'].HERO_SECTION.headline}
    </h1>
  )
}
