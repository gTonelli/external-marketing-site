'use client'
// core
import { useEffect, useState } from 'react'
import { Page } from '@/components/Page'
// components
import AttachmentQuizVariantPage from './QuizVariantPage'
import AttachmentQuizControlPage from './QuizControlPage'
// modules
import { Storage } from '@/modules/Storage'
import Mixpanel from '@/modules/Mixpanel'
// libraries
import cx from 'classnames'

export default function QuizPage() {
  const [showOrganicVariant, setShowOrganicVariant] = useState<boolean>()

  useEffect(() => {
    let showOrganicVariant: string | null | boolean = Storage.get('seo-90-organic-quiz-test')
    if (showOrganicVariant === null) {
      showOrganicVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.2
      Storage.set('seo-90-organic-quiz-test', showOrganicVariant)
      Mixpanel.track.ExperimentStarted({
        'Experiment name': 'SEO-90-Organic-Quiz-Test',
        'Variant name': showOrganicVariant ? 'Variant 1' : 'Control',
      })
    }
    setShowOrganicVariant(showOrganicVariant === 'true' || showOrganicVariant === true)
  }, [])

  return (
    <Page
      className={cx(
        'w-full text-center relative z-10',
        showOrganicVariant === undefined ? 'opacity-0' : 'opacity-100'
      )}
      page_name="Attachment Style Quiz">
      {showOrganicVariant ? <AttachmentQuizVariantPage /> : <AttachmentQuizControlPage />}
    </Page>
  )
}
