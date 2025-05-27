'use client'

// core
import NextLink from 'next/link'
import React, { useCallback, useContext } from 'react'
// components
import { IDefaultProps, IDefaultWrapperProps } from '@/components'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
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
  prefetch?: boolean
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
  /** additional mixpanel props */
  mpProps?: { [key: string]: string }
}

interface ILinkDefaultProps extends ILink, IDefaultProps {}

export const LinkDefault = ({
  className,
  assetUrl,
  hoverType,
  label,
  prefetch = true,
  url,
  target,
  onClick,
  mpProps,
}: ILinkDefaultProps) => {
  const { page_name } = useContext(PageContext)

  const _onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      Mixpanel.track.ButtonClicked({
        button_label: event.currentTarget.innerText,
        page_name,
        ...mpProps,
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
      prefetch={prefetch}
      target={target}
      onClick={_onClick}>
      {assetUrl ? <img alt={label} src={assetUrl} /> : label}
    </NextLink>
  )
}

interface ILinkIconProps extends IDefaultProps {
  url: string
  icon: IconProp
  iconSize?: SizeProp
  /**
   * Target value for a tag
   */
  target?: '_blank' | '_self' | '_parent' | '_top'
  /**
   * Label prop for the link text
   */
  label?: string
}

export const LinkIcon = ({ className, url, target, label, icon, iconSize }: ILinkIconProps) => {
  return (
    <a
      aria-label={label}
      className={cx('cursor-pointer transform transition ease-in-out hover:scale-110', className)}
      href={url}
      target={target}>
      <FontAwesomeIcon icon={icon} size={iconSize} />
    </a>
  )
}

interface ILinkWrapperProps extends Omit<ILink, 'label'>, IDefaultWrapperProps {}

export const LinkWrapper = ({
  children,
  className,
  hoverType,
  prefetch = true,
  url,
  onClick,
  mpProps,
}: ILinkWrapperProps) => {
  const { page_name } = useContext(PageContext)

  const _onClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      Mixpanel.track.ButtonClicked({
        button_label: event.currentTarget.innerText,
        page_name,
        ...mpProps,
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
      prefetch={prefetch}
      onClick={_onClick}>
      {children}
    </NextLink>
  )
}

export class Link extends React.Component<ILinkDefaultProps> {
  static Icon = LinkIcon
  static Wrapper = LinkWrapper

  render() {
    return <LinkDefault {...this.props} />
  }
}
