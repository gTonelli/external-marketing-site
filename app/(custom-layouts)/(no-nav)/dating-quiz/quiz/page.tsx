// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { DatingQuiz } from '@/components/DatingQuiz/DatingQuiz'

export default function DatingQuizPage() {
  return (
    <Page page_name="Dating Quiz" className="flex-1">
      <Section className="flex items-center justify-center">
        <DatingQuiz showStartButton={false} />
      </Section>
    </Page>
  )
}
