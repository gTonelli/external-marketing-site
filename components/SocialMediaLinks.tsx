// core
import { useContext } from 'react'
// component
import { IDefaultProps } from '@/components'
import { Link } from './Link'
// libraries
import cx from 'classnames'
// util
import { ViewportContext } from '@/utils/contexts'
import { EExternalRoutes, EWindowWidth } from '@/utils/constants'

export const SocialMediaLinks = ({ className }: IDefaultProps) => {
  // ==================== Context ====================
  const { windowWidth } = useContext(ViewportContext)

  return (
    <>
      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on YouTube"
        name="youtube"
        size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={EExternalRoutes.YOUTUBE}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on TikTok"
        name="tiktok"
        size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={EExternalRoutes.TIKTOK}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on Facebook"
        name="facebook"
        size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={EExternalRoutes.FACEBOOK}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on Instagram"
        name="instagram"
        size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={EExternalRoutes.INSTAGRAM}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School Podcast"
        name="podcast"
        size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        url={EExternalRoutes.PODCASTS}
      />
    </>
  )
}
