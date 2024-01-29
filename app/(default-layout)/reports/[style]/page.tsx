// core
import Image from 'next/image'
// components
import { List } from '@/components/List'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
// config
import { REPORT_COPY } from './config'
// utils
import { TStyle } from '@/utils/types'
// styles
import './styles.css'
import { TextHeading } from '@/components/Text/variants/TextHeading'
import { TextParagraph } from '@/components/Text/variants/TextParagraph'

export default function ResultsPage({ params }: { params: { style: TStyle } }) {
  const style = params.style
  const copy = REPORT_COPY[style]

  return (
    <Page page_name={`Attachment Style Report New - ${style.toUpperCase()}`}>
      <Section className={`bg-hero-mobile bg-hero z-15 lg:hidden`}>
        <div className="text-black text-left relative z-20 mt-56 lg:col-span-7 lg:mt-0">
          <TextHeading content={copy.hero.head} size={1} />

          <TextHeading content={copy.hero.subhead} size={5} />
        </div>
      </Section>

      <Section
        className={`w-full relative hidden z-10 bg-hero lg:py-40 xl:py-48 2xl:py-60 3xl:py-72 lg:block`}
        classNameInner="relative z-10 lg:grid lg:grid-cols-12">
        <div className="text-black text-left hidden lg:col-span-7 lg:block">
          <TextHeading content={copy.hero.head} size={1} />

          <TextHeading content={copy.hero.subhead} size={5} />
        </div>
      </Section>

      <Section
        className="w-full max-w-4xl mx-auto"
        classNameInner="flex flex-col items-stretch lg:flex-row">
        <div className="flex-1 text-left  lg:pr-8">
          <TextHeading className="mb-4" content="Does This Sound Like You?" size={5} />

          <List
            className="lg:mb-8"
            classNameListItems="items-center text-left mb-4"
            classNameIcon="!text-green-check mr-4"
            iconType="regular"
            iconSize="lg"
            iconName="circle-check"
            listItems={copy.soundLike.bullets1}
          />

          <TextParagraph className="font-bold mb-8" content={copy.soundLike.question} />

          <List
            className="lg:mb-8"
            classNameListItems="items-center text-left mb-4"
            listItems={copy.soundLike.bullets2}
          />
        </div>

        <Image src={copy.soundLike.image} width={435} height={487} alt="A happy couple" />
      </Section>

      <Section className="w-full max-w-4xl text-left mx-auto">
        <TextParagraph
          className="font-bold text-left mb-8"
          content="Do you feel you act this way because of these deep-rooted fears?"
        />

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <List
              className="lg:mb-8"
              classNameListItems="items-center text-left mb-4"
              iconType="regular"
              iconSize="lg"
              iconName="exclamation-circle"
              listItems={copy.deepFears.bulletsLeft}
            />
          </div>
          <div className="flex-1">
            <List
              classNameListItems="items-center text-left mb-4"
              iconType="regular"
              iconSize="lg"
              iconName="exclamation-circle"
              listItems={copy.deepFears.bulletsRight}
            />
          </div>
        </div>
      </Section>

      <Section className="w-full max-w-4xl mx-auto">
        <TextHeading
          className="text-left mb-8"
          content="Are you wondering why this is happening?"
        />

        <div className="flex flex-col lg:flex-row">
          <TextParagraph useMD className="flex-1 text-left lg:pr-8" content={copy.causes.copy1} />

          <TextParagraph useMD className="flex-1 text-left" content={copy.causes.copy2} />
        </div>
      </Section>

      <Section className="w-full max-w-4xl mx-auto" classNameInner="flex flex-col lg:flex-row">
        <div className="text-left flex-1">
          <TextParagraph className="mb-4" content="The question is..." />

          <TextHeading className="mb-4" content="Do You Want To Change Your Attachment Style?" />

          <TextParagraph
            className="font-bold mb-4"
            content={`You might think you're stuck with this attachment style and its habits and behaviors for life.\n\nBut you’re not.`}
          />

          <TextParagraph
            className="mb-4"
            content={`Until recently, your attachment style was considered unchangeable; it was forever.\n\nBut we’ve found the way.`}
          />
        </div>

        <div className="flex-1">
          <p>Image</p>
        </div>
      </Section>
    </Page>
  )
}
