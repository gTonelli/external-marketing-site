// core
import React, { useContext, useEffect, useState } from 'react'
// component
import { IDefaultProps } from '@/components'
import { Link } from './Link'
// libraries
import cx from 'classnames'
// util
import { ViewportContext } from '@/utils/contexts'
import { ERoutes, EWindowWidth } from '@/utils/constants'

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
        url={ERoutes.YOUTUBE}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on TikTok"
        name="tiktok"
        size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={ERoutes.TIKTOK}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on Facebook"
        name="facebook"
        size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={ERoutes.FACEBOOK}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School on Instagram"
        name="instagram"
        size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        type="brands"
        url={ERoutes.INSTAGRAM}
      />

      <Link.Icon
        className={cx(className)}
        label="The Personal Development School Podcast"
        name="podcast"
        size={windowWidth <= EWindowWidth.md ? '2x' : 'lg'}
        target="_blank"
        url={ERoutes.PODCASTS}
      />
    </>
  )
}
