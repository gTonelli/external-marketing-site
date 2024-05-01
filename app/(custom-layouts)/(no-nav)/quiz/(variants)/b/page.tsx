'use client'

// core
import React from 'react'
// components
import { AttachmentQuizVariant } from '@/components/AttachmentQuiz/AttachmentQuizVariant'
import { ATTACHMENT_QUIZ_VARIANT } from '../config'

export default function AttachmentQuizVariantPage() {
  const page_name = 'Main Funnel Quiz Variant'
  return <AttachmentQuizVariant page_name={page_name} config={ATTACHMENT_QUIZ_VARIANT} />
}
