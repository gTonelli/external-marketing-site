'use client'

// core
import React, { useCallback } from 'react'
// components
import { SITELINKS } from './config'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { Link } from '@/components/Link'

export default function SiteLinksPage() {
  const page_name = `Site Links` as Pages

  const onLinkClicked = useCallback((label: string) => {
    Mixpanel.track.ButtonClicked({
      button_label: label,
      page_name: page_name,
    })
  }, [])

  return (
    <div className="relative w-full flex flex-col flex-grow items-center justify-center overflow-hidden">
      <div className="max-w-[1000px] flex flex-col bg-primary-light-50 rounded-20 m-4 p-6 md:flex-row md:mt-32 md:mx-24">
        <div className="flex-1">
          <Text.Paragraph
            className="uppercase font-bold leading-5 text-center mb-2 md:text-left"
            content={SITELINKS.HEADER.title}
          />
          <Link.Wrapper
            url={SITELINKS.HEADER.url}
            onClick={() => onLinkClicked(SITELINKS.HEADER.link)}>
            <Text.Heading
              className="text-purple-dark text-center text-2xl mb-4 md:text-left md:mb-0"
              content={SITELINKS.HEADER.link}
            />
          </Link.Wrapper>
        </div>

        <div className="relative flex-1">
          <Image
            alt="PDS-Courses"
            className="md:absolute md:bottom-0"
            height={221}
            src={SITELINKS.HEADER.asset}
            width={412}
          />
        </div>
      </div>

      <div className="mb-8 md:mx-24">
        {SITELINKS.BUTTONS.map((button, idx) => (
          <Link.Wrapper
            key={idx}
            className="w-full flex flex-col justify-center items-center bg-purple-dark rounded-20 p-5 mb-4  md:flex-row md:justify-start"
            url={button.url}
            onClick={() => onLinkClicked(button.label)}>
            <Image alt={`button-${idx + 1}`} className="mr-4 mb-2 md:mb-0" src={button.icon} />

            <Text.Paragraph
              className="text-white uppercase leading-5 font-bold text-center md:text-left"
              content={button.label}
            />
          </Link.Wrapper>
        ))}
      </div>

      <Image
        alt="vector-1"
        className="hidden absolute top-0 left-[-5%] -z-1 md:block"
        src="SiteLinksPage/vector-1.svg"
      />

      <Image
        alt="ellipse"
        className="hidden absolute left-[-5%] bottom-[-20%] -z-1 md:block"
        src="SiteLinksPage/ellipse.svg"
      />

      <Image
        alt="vector-2"
        className="hidden absolute top-0 right-0 -z-1 md:block"
        src="SiteLinksPage/vector-2.svg"
      />

      <Image
        alt="vector-2"
        className="hidden absolute top-[-5%] right-[15%] -z-1 md:block"
        src="SiteLinksPage/vector-3.svg"
      />
    </div>
  )
}
