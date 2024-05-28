'use client'

// core
import { default as NextLink } from 'next/link'
import React, { useCallback, useContext } from 'react'
// components
import { IDefaultProps, IDefaultWrapperProps } from '@/components'
import { Icon, IIconProps } from './Icon'
// libraries
import cx from 'classnames'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
import { EExternalRoutes, ERoutes } from '@/utils/constants'
import { PageContext } from '@/utils/contexts'

export interface ILink {
  /**
   * URL of the asset (png/svg) to display INSTEAD of the `label`
   * NOTE: `label` is still mandatory as it's used for `alt` tag
   */
  assetUrl?: string
  /**
   * Displayed text of a link, also used for `alt` tag if asset is displayed instead of a text
   */
  label: string
  /**
   * URL of a link
   */
  url: string
  /**
   * Type of hover effect (which CSS class will be applied)
   */
  hoverType?: 'primary'
  /**
   * Target value for a tag
   */
  target?: '_blank' | '_self' | '_parent' | '_top'
  /**
   * onClick listener for tracking MixPanel Event
   */
  onClick?(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void
}

interface ILinkDefaultProps extends ILink, IDefaultProps {}

export const LinkDefault = ({
  className,
  assetUrl,
  hoverType,
  label,
  url,
  target,
  onClick,
}: ILinkDefaultProps) => {
  const { page_name } = useContext(PageContext)

  const _onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      Mixpanel.track.ButtonClicked({
        button_label: event.currentTarget.innerText,
        page_name,
      })
      onClick?.(event)
    },
    [onClick]
  )
  return (
    <NextLink
      className={cx(
        'cursor-pointer no-underline hover:underline',
        hoverType === 'primary' && 'hover:text-primary',
        className
      )}
      href={url}
      target={target}
      onClick={_onClick}>
      {assetUrl ? <img alt={label} src={assetUrl} /> : label}
    </NextLink>
  )
}

interface ILinkIconProps extends IIconProps {
  url: ERoutes | EExternalRoutes
  /**
   * Target value for a tag
   */
  target?: '_blank' | '_self' | '_parent' | '_top'
  /**
   * Label prop for the link text
   */
  label?: string
}

export const LinkIcon = ({
  className,
  url,
  onClick,
  target,
  label,
  ...iconProps
}: ILinkIconProps) => {
  return (
    <a
      aria-label={label}
      className={cx('cursor-pointer transform transition ease-in-out hover:scale-110', className)}
      href={url}
      target={target}
      onClick={onClick}>
      <Icon {...iconProps} />
    </a>
  )
}

interface ILinkWrapperProps extends Omit<ILink, 'label'>, IDefaultWrapperProps {}

export const LinkWrapper = ({
  children,
  className,
  hoverType,
  url,
  onClick,
}: ILinkWrapperProps) => {
  return (
    <a
      className={cx(
        'cursor-pointer no-underline hover:underline',
        hoverType === 'primary' && 'hover:text-primary',
        className
      )}
      href={url}
      onClick={onClick}>
      {children}
    </a>
  )
}

export class Link extends React.Component<ILinkDefaultProps> {
  static Icon = LinkIcon
  static Wrapper = LinkWrapper

  render() {
    return <LinkDefault {...this.props} />
  }
}
