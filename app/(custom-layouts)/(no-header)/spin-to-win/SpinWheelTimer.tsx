'use client'

// core
import { useEffect, useState } from 'react'
// components
import { CountdownTimer } from '@/components/CountDownTimer'
import { Loader } from '@/components/Loader'
// modules
import { Storage } from '@/modules/Storage'

export const SpinWheelTimer = () => {
  const [loading, setLoading] = useState(true)
  const [wheelHasSpun, setWheelHasSpun] = useState(false)

  useEffect(() => {
    if (
      Storage.get('gm-1834-spin-wheel-email') !== null ||
      Storage.get('gm-1834-spin-wheel-osm') !== null
    )
      setWheelHasSpun(true)
    setLoading(false)
  }, [])

  if (loading) return <Loader />

  if (wheelHasSpun) return

  return <CountdownTimer theme="light" />
}
