// components
import { Image } from '@/components/Image'
import { SiteLinkButton } from '@/components/SiteLinkButton'

type SiteLink = {
  id: number
  label: string
  url: string
  target: '_self' | '_blank'
  iconAlt: string
  icon: {
    data: {
      attributes: {
        width: number
        height: number
        url: string
      }
    }
  }
}

const fetchSiteLinks = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/site-links-page?populate=*&populate=link.icon`,
    {
      next: { tags: ['sitelinks'], revalidate: 86400 },
    }
  )
  const data = await response.json()
  return data.data.attributes?.link || []
}

export default async function SiteLinksPage() {
  const siteLinks: SiteLink[] = await fetchSiteLinks()

  return (
    <div className="relative w-full flex flex-col flex-grow items-center justify-center overflow-hidden">
      <div className="max-w-3xl text-purple-dark mx-auto mt-8 z-10">
        <h2 className="text-center mb-4">
          Heal Your Attachment Style &amp; Dramatically Improve Your Relationships
        </h2>
      </div>

      <div className="max-w-104 flex flex-col mx-auto mb-8 z-10">
        {siteLinks &&
          siteLinks.map((button, idx) => (
            <SiteLinkButton
              key={idx}
              icon={button.icon.data.attributes}
              iconAlt={button.iconAlt}
              target={button.target}
              label={button.label}
              url={button.url}
            />
          ))}
        {(!siteLinks || siteLinks.length === 0) && (
          <SiteLinkButton
            target="_self"
            label="TAKE OUR ATTACHMENT QUIZ"
            url="https://attachment.personaldevelopmentschool.com/?utm_source=linktree&utm_medium=organic&utm_campaign=attachment-quiz&utm_id=attachment-quiz"
          />
        )}
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
