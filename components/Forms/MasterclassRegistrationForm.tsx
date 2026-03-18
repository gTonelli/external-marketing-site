'use client'
// core
import Script from 'next/script'
import { useState, useEffect } from 'react'
// components
import { Loader } from '../Loader'

export default function MasterclassRegistrationForm({ formId }: { formId: string }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return <Loader />
  return (
    <div className="ew-wid w-full h-auto" data-wid={formId} data-loaded="no" data-schloaded="no">
      <Script
        type="text/javascript"
        src="https://ewpcdn-ecs.easywebinar.com/widget/js/new/ew-script.js"
        strategy="afterInteractive"
      />
    </div>
  )
}
