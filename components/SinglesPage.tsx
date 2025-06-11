// core
import Link from 'next/link'
// components
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { Button } from '@/components/Button/Button'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// utils
import { TStyle } from '@/utils/types'
// styles
import '../app/(custom-layouts)/(no-nav)/fa-single/[slug]/style.css'

interface IHero {
  header: string
  subheader: string
  videoId: string
}
interface ISinglesPageProps {
  style: TStyle
  slug: string
}

async function getConfig(style: TStyle) {
  switch (style) {
    case 'fa':
      return (await import('../app/(custom-layouts)/(no-nav)/fa-single/[slug]/config'))
        .FA_SINGLE_CONFIG
    case 'ap':
      return (await import('../app/(custom-layouts)/(no-nav)/ap-single/[slug]/config'))
        .AP_SINGLE_CONFIG
    default:
      throw new Error(`Invalid prop!`)
  }
}

export const SinglesPage = async ({ style, slug }: ISinglesPageProps) => {
  const config = await getConfig(style)
  const hero: IHero = config.versions[slug as keyof typeof config.versions]

  return (
    <>
      <Section
        className="bg-gradient-to-b from-blue-lightest to-white"
        classNameInner="!max-w-4xl mx-auto">
        <h1 className="text-primary mb-8">{hero.header}</h1>

        <p className="mb-8">{hero.subheader}</p>

        <div className="w-full bg-white rounded-2xl shadow-xl p-4 mx-auto">
          <VideoYoutube
            playInline
            classNameThumbnail="w-full"
            videoId={hero.videoId}
            thumbnail="/images/pds-video-thumbnail.jpg"
            thumbnailAlt={`Video about FA - ${slug}`}
          />
        </div>
      </Section>

      <Section classNameInner="!max-w-4xl mx-auto">
        <h2 className="mb-8">{config.common.program.header}</h2>

        <p className="tracking-33 mb-8">
          <strong>{config.common.program.subheader}</strong>
        </p>

        {config.common.program.copy.map((item: JSX.Element, idx: number) => (
          <p key={`program_copy-${idx}`} className="mb-8">
            {item}
          </p>
        ))}

        <Link href={config.common.checkoutUrl}>
          <Button label={config.common.program.ctaLabel} />
        </Link>
      </Section>

      <Section
        className="bg-woman-using-laptop min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-woman-using-laptop-mobile lg:hidden" />

        <div className="relative text-left p-4 z-5 lg:col-span-6">
          <h2 className="mb-4">{config.common.benefits.header}</h2>

          <p className="tracking-33 mb-8">
            <strong>{config.common.benefits.subheader}</strong>
          </p>

          <List
            classNameIcon="!text-primary mt-1"
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={config.common.benefits.listItems}
          />
        </div>
      </Section>

      <Section className="bg-black-secondary" classNameInner="text-white !max-w-4xl mx-auto">
        <h2 className="mb-8">{config.common.hook.header}</h2>

        <p className="mb-8">{config.common.hook.copy}</p>

        <Link href={config.common.checkoutUrl}>
          <Button label={config.common.hook.ctaLabel} />
        </Link>

        <p className="text-sm mt-8">
          <strong>
            <em>{config.common.hook.disclaimer}</em>
          </strong>
        </p>
      </Section>

      <Section
        className="bg-couple-using-laptop min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-couple-using-laptop-mobile lg:hidden" />

        <div className="relative text-left p-4 z-5 lg:col-start-7 lg:col-span-6">
          <h2 className="mb-4">{config.common.askYourself.header}</h2>

          <p className="tracking-33 mb-4">
            <strong>{config.common.askYourself.subheader}</strong>
          </p>

          <List
            classNameIcon="!text-primary mt-1"
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={config.common.askYourself.listItems}
          />

          {config.common.askYourself.copy.map((item: string | JSX.Element, idx: number) => (
            <p key={`askyourself_copy-${idx}`} className="mb-8">
              {item}
            </p>
          ))}

          <Link href={config.common.checkoutUrl}>
            <Button label={config.common.askYourself.ctaLabel} />
          </Link>
        </div>
      </Section>
    </>
  )
}
