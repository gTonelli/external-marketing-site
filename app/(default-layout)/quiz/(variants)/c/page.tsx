'use client'

// core
import React from 'react'
// components
import { AttachmentQuizVariant } from '@/components/AttachmentQuiz/AttachmentQuizVariant'
import { ATTACHMENT_QUIZ_VARIANT, TAttachmentQuizVariant } from '../config'

export default function AttachmentQuizVariantCPage() {
  const page_name = 'Main Funnel Quiz Variant C'
  const config: TAttachmentQuizVariant = {
    ...ATTACHMENT_QUIZ_VARIANT,
    BANNER: {
      heading: 'Take Our Free Quiz To Discover & Heal Your Insecure Love Patterns',
      subheading:
        'Get a personalized report in 5 minutes so you can begin healing your attachment style for good!',
    },
    QUIZ_FOR: [
      'Finding any relationship – family, friends, romantic – to be challenging',
      'Struggling with relationship anxiety and insecurity',
      'Fearful of commitment, causing you to swing from hot to cold',
      'Becoming needy and desperate to be around your partner',
      'Avoiding and becoming overwhelmed with intense emotions',
      'Ready to fine-tune your relationships with professional insight',
    ],
    CTA_BANNER_1: {
      heading: 'Take Our Free Attachment Style Quiz & Start Building Thriving Relationships',
      subheading:
        'Your attachment style can be HEALED! Our personalized report will explain how you can transform it – get yours in less than 5 minutes!',
    },
    CTA_BANNER_2: {
      heading: "Why Don't My Relationships Work Out?",
      subheading:
        'The first step to finding loving relationships is taking our 5-minute quiz and getting a free personalized relationship report!',
    },
  }
  return <AttachmentQuizVariant page_name={page_name} config={config} />
}
