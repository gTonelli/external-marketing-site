'use client'

// core
import { useEffect, useState } from 'react'
// modules
import { Storage } from '@/modules/Storage'

export const AttachmentQuizV2ResultsHeading = () => {
  const [title, setTitle] = useState('Made For')

  useEffect(() => {
    const name = Storage.get('userFullName')
    if (name) setTitle(`Made For ${name}`)
  }, [])

  return <h1>{title}</h1>
}
