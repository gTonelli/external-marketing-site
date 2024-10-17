'use client'

// components
import { AttachmentQuizVariant } from '@/components/AttachmentQuiz/AttachmentQuizVariant'
import { ATTACHMENT_QUIZ_VARIANT, TAttachmentQuizVariant } from '../config'

export default function AttachmentQuizVariantDPage() {
  const page_name = 'Main Funnel Quiz Variant D'
  const config: TAttachmentQuizVariant = {
    ...ATTACHMENT_QUIZ_VARIANT,
    BANNER: {
      heading: 'Take Our Free Quiz To Build A Loving & Intimate Relationship!',
      subheading:
        'Unlock the keys to a healthy, loving relationship with our free personalized report!',
    },
    QUIZ_FOR: [
      'Tired of having regular arguments with your partner',
      'Confused about why your partner goes from loving to dismissive',
      'Having trust issues and fears of abandonment',
      'Struggling to set healthy boundaries',
      'Excited to stop the chaotic cycle of your relationship',
      'Ready to fill your relationship with love',
    ],
    CTA_BANNER_1: {
      heading: 'Take Our Free Attachment Style Quiz & Begin Building A Loving Relationship!',
      subheading:
        'In 5 minutes, you’ll get a free personalized report that will put you both on the path to forming a stronger, more loving bond.',
    },
    CTA_BANNER_2: {
      heading: 'Why Do I Keep Having Conflict With My Partner?',
      subheading:
        'Unlock the keys to a healthy, loving relationship with our free personalized report – it just takes 5 minutes!',
    },
  }
  return <AttachmentQuizVariant page_name={page_name} config={config} />
}
