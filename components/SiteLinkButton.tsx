'use client'

// core
import { useCallback } from 'react'
import Image from 'next/image'
// components
import { LinkWrapper } from './Link'
// modules
import Mixpanel from '@/modules/Mixpanel'

type Props = {
  icon: {
    width: number
    height: number
    url: string
  }
  iconAlt: string
  target: '_self' | '_blank'
  label: string
  url: string
}

export const SiteLinkButton = ({ icon, iconAlt, label, target, url }: Props) => {
  const onClick = useCallback(() => {
    Mixpanel.track.ButtonClicked({
      button_label: label,
      page_name: 'Site Links',
    })
  }, [])

  return (
    <LinkWrapper
      target={target}
      url={url}
      onClick={onClick}
      className="w-full flex flex-col justify-center items-center bg-white border-2 border-purple-dark rounded-full p-5 mb-4 md:flex-row md:justify-start">
      <Image
        alt={iconAlt}
        className="hidden mr-4 mb-2 md:mb-0 md:flex"
        width={icon.width}
        height={icon.height}
        src={icon.url}
      />

      <p className="text-purple-dark leading-5 font-bold text-center md:text-left">{label}</p>
    </LinkWrapper>
  )
}
