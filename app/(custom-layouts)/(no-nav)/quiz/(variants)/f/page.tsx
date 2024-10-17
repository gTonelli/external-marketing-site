'use client'

// components
import { AttachmentQuizVariant } from '@/components/AttachmentQuiz/AttachmentQuizVariant'
import { ATTACHMENT_QUIZ_VARIANT, TAttachmentQuizVariant } from '../config'

export default function AttachmentQuizVariantEPage() {
  const page_name = 'Main Funnel Quiz Variant E'
  const config: TAttachmentQuizVariant = {
    ...ATTACHMENT_QUIZ_VARIANT,
    BANNER: {
      heading: 'Take Our Free Attachment Style Quiz To Help You Create Committed Relationships!',
      subheading:
        "In less than 5 minutes, you'll get a free personalized report to help you find and nurture a loving relationship!",
    },
    QUIZ_FOR: [
      'Healing from a broken or rocky relationship',
      'Tired of not being appreciated by your partner',
      'Always thinking you’ll be betrayed or abandoned',
      'Over being a “people-pleaser”',
      'Excited to find a loving, committed partner',
      'Ready to become independent',
    ],
    CTA_BANNER_1: {
      heading:
        'Discover How You Can Find & Form Loving, Committed Relationships – In Less Than 5 Minutes!',
      subheading:
        'Get a free personalized report – and overcome your fears to form committed, connected, and appreciated relationships.',
    },
    CTA_BANNER_2: {
      heading: 'Why Do I Feel I’ll Get Abandoned or Betrayed?',
      subheading:
        'Overcome your relationship fears thanks to our free personalized report – get one in less than 5 minutes!',
    },
  }
  return <AttachmentQuizVariant page_name={page_name} config={config} />
}
