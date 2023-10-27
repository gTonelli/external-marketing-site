// core
import React from 'react'
// components
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'
// utils
import { TFonts } from '@/utils/types'

/**
 * Available test sizes (in px)
 */
type TTextSize = 10 | 12 | 14 | 16 | 18 | 20

export interface ITextDefaultProps extends IDefaultProps {
  /**
   * Content of the text to display
   */
  content?: string | number | null
  /**
   * Font of the text
   * @default 'font-effra'
   */
  font?: TFonts

  /**
   * Font size of the text (in px)
   * @default 16 (text-base, leading-normal, tracking-normal)
   *
   * NOTE: While the numbers are in pixels for easier use along with design, the component still uses tailwing with rem units
   */
  size?: TTextSize
  /**
   * Custom letter spacing
   * @default 'tracking-normal'
   */
  spacing?: 'tracking-normal' | 'tracking-widest' | 'tracking-0.325'

  // #RECHECK
  useMD?: boolean
  /**
   * Event called when text is clicked - DOES NOT APPLY ANY CLASS
   */
  onClick?(e?: React.MouseEvent<HTMLSpanElement>): void
}

export const TextDefault = ({
  className,
  content = '',
  font = 'font-effra',
  useMD, // #CHECK
  size = 16,
  spacing,
  style,
  onClick,
}: ITextDefaultProps) => {
  const css = () => {
    let fontSize = 'text-base' // 16px
    const lineHeight = 'leading-snug' // 22px
    const letterSpacing = spacing || 'tracking-normal' // 0

    switch (size) {
      case 10:
        fontSize = 'text-xxs' // 10px
        break
      case 12:
        fontSize = 'text-xs' // 12px
        break
      case 14:
        fontSize = 'text-sm' // 14px
        // lineHeight - same as default
        // letterSpacing - same as default
        break
      case 18:
        fontSize = 'text-lg'
        break
      case 20:
        fontSize = 'text-xl'
        break
      case 16:
      default:
        break
    }

    return cx('block', font, fontSize, lineHeight, letterSpacing, className)
  }

  return useMD ? (
    <ReactMarkdown className={css()}>{String(content)}</ReactMarkdown>
  ) : (
    <span className={css()} style={style} onClick={onClick}>
      {content}
    </span>
  )
}
