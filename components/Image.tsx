// core
import React, { ImgHTMLAttributes } from 'react'
// components
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
// utils
import { Regexes } from '@/utils/constants'

//
// For inline dynamic SVG rendering:
// https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline
//

interface IImageProps extends IDefaultProps, Omit<ImgHTMLAttributes<HTMLImageElement>, 'id'> {}

export const Image = ({ alt, className, src = '', style }: IImageProps) => {
  // Checks whether the src is an actual URL or a local asset
  const isSrcLink = new RegExp(Regexes.url).test(src)

  return src ? (
    isSrcLink ? (
      <img alt={alt} className={cx('', className)} src={src} style={style} />
    ) : (
      <img alt={alt} className={cx('', className)} src={`/images/${src}`} style={style} />
    )
  ) : (
    <div className="w-full min-h-40 h-full bg-gray-300" />
  )
}
