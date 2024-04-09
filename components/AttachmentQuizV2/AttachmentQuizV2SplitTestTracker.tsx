'use client'

// utils
import { useAttachmentQuizSplitTest } from '@/utils/hooks'

export const AttachmentQuizV2SplitTestTracker = ({
  showingVariant,
}: {
  showingVariant: boolean
}) => {
  useAttachmentQuizSplitTest(showingVariant)
  return undefined
}
