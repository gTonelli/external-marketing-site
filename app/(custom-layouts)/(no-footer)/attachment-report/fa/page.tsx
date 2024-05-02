import { Page } from '@/components/Page'
import { REPORT_COPY } from './config'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { List } from '@/components/List'

export default function AttachmentReport() {
  const COPY = REPORT_COPY['fa']

  return (
    <Page page_name="Attachment Style Report Old - fa">
      <Section
        className="max-w-5xl mx-auto"
        classNameInner="grid grid-cols-1 gap-4 py-16 md:grid-cols-2">
        <div className="text-left">
          <p className="font-bold tracking-33">YOUR ATTACHMENT STYLE IS</p>

          <h1 className="text-primary">{COPY.banner.style}</h1>
        </div>

        <div>
          <VideoThumbnail
            srcUrl={COPY.banner.video}
            thumbnailAlt="Thais explaining your attachment style"
          />
        </div>
      </Section>

      <Section
        className="max-w-5xl my-8 mx-auto"
        classNameInner="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="text-left mb-4 md:order-2">
          <p className="font-bold mb-4">{COPY.copy1.header}</p>

          <List
            iconName="circle"
            iconSize="2xs"
            className="mb-8"
            classNameIcon="mt-2"
            classNameListItems="mb-2"
            listItems={COPY.copy1.list}
          />

          <p className="font-bold mb-4">{COPY.copy2.header}</p>

          <List
            iconName="circle"
            iconSize="2xs"
            classNameIcon="mt-2"
            classNameListItems="mb-2"
            listItems={COPY.copy2.list}
          />
        </div>

        <div className="text-left md:order-1">
          <p>Image</p>
        </div>
      </Section>
    </Page>
  )
}
