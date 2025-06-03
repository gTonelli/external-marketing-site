'use client'

// core
import { useContext } from 'react'
// component
import { IDefaultProps } from '@/components'
import { Link } from './Link'
// libraries
import cx from 'classnames'
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faYoutube,
} from '@awesome.me/kit-545b942488/icons/classic/brands'
import { faPodcast } from '@awesome.me/kit-545b942488/icons/classic/solid'
// util
import { ViewportContext } from '@/utils/contexts'
import { externalRoutes, EWindowWidth } from '@/utils/constants'

export const SocialMediaLinks = ({ className }: IDefaultProps) => {
  // ==================== Context ====================
  const { windowWidth } = useContext(ViewportContext)

  return (
    <>
      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on YouTube"
        icon={faYoutube}
        iconSize={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        url={externalRoutes.youTube}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on TikTok"
        icon={faTiktok}
        iconSize={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        url={externalRoutes.tikTok}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on Facebook"
        icon={faFacebook}
        iconSize={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        url={externalRoutes.facebook}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on Instagram"
        icon={faInstagram}
        iconSize={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        url={externalRoutes.instagram}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School Podcast"
        icon={faPodcast}
        iconSize={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        url={externalRoutes.podcasts}
      />
    </>
  )
}
