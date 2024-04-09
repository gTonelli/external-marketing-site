import { AttachmentQuizV2Navigation } from '@/components/AttachmentQuizV2/AttachmentQuizV2Navigation'

export default function AttachmentQuizV2ResultsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AttachmentQuizV2Navigation
        includeContinueButton
        className="sticky top-0"
        showBackButton={false}
      />

      {children}
    </>
  )
}
