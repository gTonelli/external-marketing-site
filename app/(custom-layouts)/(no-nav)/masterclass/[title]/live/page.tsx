// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
// config
import { MasterclassTitleSlugs, SEO_CONFIG, TMasterclassTitle } from '../../config'
import { MasterclassPage } from './MasterclassPage'
// styles
import '@/styles/default-styles.css'
import '../../style.css'

export const dynamicParams = false

interface IMasterclassPageParams {
  params: Promise<{
    title: TMasterclassTitle
  }>
}

export function generateStaticParams(): { title: TMasterclassTitle }[] {
  return MasterclassTitleSlugs
}

export async function generateMetadata({ params }: IMasterclassPageParams): Promise<Metadata> {
  const { title } = await params

  return {
    ...SEO_CONFIG[title].livePage,
    metadataBase: new URL(
      `https://attachment.personaldevelopmentschool.com/masterclass/${title}/live`
    ),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/',
      },
    },
  }
}

export default async function MasterclassLivePage({ params }: IMasterclassPageParams) {
  const { title } = await params

  return (
    <Page page_name={`Masterclass Live Page - ${title}`}>
      <MasterclassPage title={title} />
    </Page>
  )
}
