// components
import { SITELINKS } from './config'
// modules
// import Mixpanel, { Pages } from '@/modules/Mixpanel'
import { Image } from '@/components/Image'
// import { Text } from '@/components/Text/Text'
// import { Link } from '@/components/Link'
import { SiteLinkButton } from '@/components/SiteLinkButton'

type SiteLink = {
  id: number
  label: string
  url: string
  target: '_self' | '_blank'
  iconAlt: string
  iconWidth: number
  iconHeight: number
}

const fetchSiteLinks = async () => {
  const response = await fetch('http://127.0.0.1:1337/api/site-links-page?populate=*', {
    next: { revalidate: 60 },
  })
  const data = await response.json()
  console.log(data.data.attributes.Link)
  return data.data.attributes.Link
}

export default async function SiteLinksPage() {
  const siteLinks = await fetchSiteLinks()

  return (
    <div className="relative w-full flex flex-col flex-grow items-center justify-center overflow-hidden">
      <div className="max-w-3xl text-purple-dark mx-auto mt-8 z-10">
        <h2 className="text-center mb-4">{SITELINKS.HEADER.title}</h2>
      </div>

      <div className="max-w-104 flex flex-col mx-auto mb-8 z-10">
        {SITELINKS.BUTTONS.map((button, idx) => (
          <SiteLinkButton key={idx} icon={button.icon} label={button.label} url={button.url} />
          // <Link.Wrapper
          //   key={idx}
          //   className="w-full flex flex-col justify-center items-center bg-white border-2 border-purple-dark rounded-full p-5 mb-4 md:flex-row md:justify-start"
          //   url={button.url}
          //   onClick={() => onLinkClicked(button.label)}>
          //   <Image
          //     alt={`button-${idx + 1}`}
          //     className="hidden mr-4 mb-2 md:mb-0 md:flex"
          //     src={button.icon}
          //   />

          //   <Text.Paragraph
          //     className="text-purple-dark leading-5 font-bold text-center md:text-left"
          //     content={button.label}
          //   />
          // </Link.Wrapper>
        ))}
      </div>

      <Image
        alt="vector-1"
        className="hidden absolute top-0 left-[-5%] z-0 md:block"
        src="SiteLinksPage/vector-1.svg"
      />

      <Image
        alt="ellipse"
        className="hidden absolute left-[-15%] bottom-[-20%] z-0 md:block"
        src="SiteLinksPage/ellipse.svg"
      />

      <Image
        alt="vector-2"
        className="hidden absolute top-0 right-[-10%] z-0 md:block"
        src="SiteLinksPage/vector-2.svg"
      />

      <Image
        alt="vector-2"
        className="hidden absolute top-[-5%] right-[5%] z-0 md:block"
        src="SiteLinksPage/vector-3.svg"
      />
    </div>
  )
}
