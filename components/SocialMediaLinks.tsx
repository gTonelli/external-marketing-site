// core
import React, { useContext } from 'react'
// component
import { IDefaultProps } from '@/components'
import { Link } from './Link'
// import { ViewportContext } from 'App'
// libraries
import cx from 'classnames'
// util
import { ERoutes } from '@/utils/constants'
// import { EWindowWidth } from '@/utils/'

export const SocialMediaLinks = ({ className }: IDefaultProps) => {
  // ==================== Context ====================
  // const { windowWidth } = useContext(ViewportContext)

  return (
    <>
      <Link.Icon
        className={cx(className)}
        name="youtube"
        // size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={ERoutes.YOUTUBE}
      />

      <Link.Icon
        className={cx(className)}
        name="tiktok"
        // size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={ERoutes.TIKTOK}
      />

      <Link.Icon
        className={cx(className)}
        name="facebook"
        // size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={ERoutes.FACEBOOK}
      />

      <Link.Icon
        className={cx(className)}
        name="instagram"
        // size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={ERoutes.INSTAGRAM}
      />

      <Link.Icon
        className={cx(className)}
        name="podcast"
        // size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        url={ERoutes.PODCASTS}
      />
    </>
  )
}
