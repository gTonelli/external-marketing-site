'use client'

// core
import React from 'react'
// components
import { AttachmentQuizVariant } from '@/components/AttachmentQuiz/AttachmentQuizVariant'
import { ATTACHMENT_QUIZ_VARIANT, TAttachmentQuizVariant } from '../config'

export default function AttachmentQuizVariantEPage() {
  const page_name = 'Main Funnel Quiz Variant E'
  const config: TAttachmentQuizVariant = {
    ...ATTACHMENT_QUIZ_VARIANT,
    BANNER: {
      heading: 'Find Lasting Love By Taking Our Free 5-Minute Attachment Style Quiz Today!',
      subheading:
        'With our free personalized quiz, you’ll learn to be valued, loved, and happy in your relationships!',
    },
    QUIZ_FOR: [
      'Being abandoned or betrayed by your partner',
      'Growing distance or apart in your relationship',
      'Feeling powerless to heal yourself',
      'Scared that there is “too much” to do when fixing yourself',
      'Ready to be happy in relationships',
      'Desiring to be healed from childhood trauma',
    ],
    CTA_BANNER_1: {
      heading:
        'Discover Your Attachment Style With Our Free Quiz & Start Forming A Loving Relationship!',
      subheading:
        'You’ll get a free personalized report – after 5 minutes – that will guide you on the next steps to finding lasting love!',
    },
    CTA_BANNER_2: {
      heading: 'Why Can’t I Find Loving Relationships?',
      subheading:
        'Take our short 5-minute quiz to get a free personalized report on how you can overcome your fearful patterns to make yourself feel worthy of love!',
    },
  }
  return <AttachmentQuizVariant page_name={page_name} config={config} />
}
