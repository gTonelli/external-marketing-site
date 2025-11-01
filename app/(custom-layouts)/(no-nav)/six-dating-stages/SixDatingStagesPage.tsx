import Link from 'next/link'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { BreakThroughSectionDesktop } from '@/components/BreakThroughSection/BreakThroughSectionDesktop'
import { BreakThroughSectionMobile } from '@/components/BreakThroughSection/BreakThroughSectionMobile'
import { Button } from '@/components/Button/Button'

export default function SixDatingStagesPage() {
  return (
    <Page page_name="Dating Quiz Landing Page">
      <Section className="bg-gradient-to-b from-blue-lightest-50 to-white">
        <h1>
          <span className="block">The Personal Development School&apos;s</span>

          <span className="block">Six Stages of Love Quiz by Thais Gibson</span>
        </h1>

        <p className="tracking-33 mb-8">
          <strong>
            TAKE OUR FREE RELATIONSHIP QUIZ TO DISCOVER WHAT STAGE OF DATING YOU ARE IN
          </strong>
        </p>

        <p>
          <strong>A Proven Science-Backed Healthy Relationship Quiz by Thais Gibson</strong>
        </p>

        <BreakThroughSectionDesktop />

        <BreakThroughSectionMobile />

        <Link href="/six-dating-stages/quiz">
          <Button label="START THE DATING QUIZ" />
        </Link>
      </Section>
    </Page>
  )
}
