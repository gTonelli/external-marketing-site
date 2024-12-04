'use client'
// components
import { IATWebinarSuccessModal } from '@/components/Forms/IATWebinarForm'
import { useSearchParams } from 'next/navigation'

export const ShowSuccessModal = () => {
  const searchParams = useSearchParams()

  return <IATWebinarSuccessModal modalSuccess={searchParams.get('signup') === 'success'} />
}
