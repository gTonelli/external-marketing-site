// core
import { ImgHTMLAttributes } from 'react'
// components
import { IDefaultProps } from '@/components'
// utils
import { Regexes } from '@/utils/constants'

//
// For inline dynamic SVG rendering:
// https://stackoverflow.com/questions/61339259/how-to-dynamically-import-svg-and-render-it-inline
//

interface IImageProps extends IDefaultProps, Omit<ImgHTMLAttributes<HTMLImageElement>, 'id'> {}

export const Image = ({ alt, className, src = '', style, tabIndex }: IImageProps) => {
  // Checks whether the src is an actual URL or a local asset
  const isSrcLink = new RegExp(Regexes.url).test(src)

  return src ? (
    isSrcLink ? (
      <img alt={alt} className={className} src={src} style={style} tabIndex={tabIndex} />
    ) : (
      <img
        alt={alt}
        className={className}
        src={`/images/${src}`}
        style={style}
        tabIndex={tabIndex}
      />
    )
  ) : (
    <div className="w-full min-h-40 h-full bg-gray-300" />
  )
}
