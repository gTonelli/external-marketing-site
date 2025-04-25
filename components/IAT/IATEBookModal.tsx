'use client'

// core
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
// components
import { Dialog } from '@/components/Dialog/Dialog'
import { Button } from '../Button/Button'

interface IIATEBookModalProps {
  pageUrl: string
}

export const IATEBookModal = ({ pageUrl }: IIATEBookModalProps) => {
  const [modalSuccess, setModalSuccess] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pageUrl === 'ebook') if (searchParams.get('signup') === 'success') setModalSuccess(true)
  }, [pageUrl, searchParams])

  return (
    <Dialog
      className="max-w-xl p-4 bg-white rounded-20"
      isShown={modalSuccess}
      onToggle={() => setModalSuccess(!modalSuccess)}>
      <h2 className="text-4xl text-left mb-2">Thanks for Signing Up for Our Ebook!</h2>

      <p className="mb-4">
        Congratulations on starting your journey towards becoming a certified relationship coach!
        The eBook is on its way.
      </p>

      <p className="mb-4">
        I’ll be sending you the best resources and latest updates about our IAT™ Program. Stay
        tuned!
      </p>

      <p className="mb-4">
        Please continue on to learn more about what it includes, how it will change your life, and
        your exclusive offer for this revolutionary program!
      </p>

      <div className="text-center">
        <Button className="p-4" label="CONTINUE" onClick={() => setModalSuccess(false)} />
      </div>
    </Dialog>
  )
}
