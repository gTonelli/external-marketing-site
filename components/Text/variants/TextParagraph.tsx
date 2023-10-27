// core
import React from 'react'
// components
import { ITextDefaultProps } from './TextDefault'
// libraries
import cx from 'classnames'
import ReactMarkdown from 'react-markdown'

export const TextParagraph = ({
  className,
  content,
  font = 'font-effra',
  useMD, // #CHECK
  size = 16,
  spacing,
  style,
  onClick,
}: ITextDefaultProps) => {
  const tw = () => {
    let fontSize = 'text-base' // 16px
    const lineHeight = 'leading-snug' // 22px
    const letterSpacing = spacing || 'tracking-normal' // 0

    switch (size) {
      case 14:
        fontSize = 'text-sm' // 14px
        // lineHeight - same as default
        // letterSpacing - same as default
        break
      case 16:
        break
      case 18:
        fontSize = 'text-lg'
        break
      case 20:
        fontSize = 'text-xl'
        break
      default:
        break
    }

    let css = cx('', font, fontSize, lineHeight, letterSpacing, className)

    if (!css.includes('whitespace')) css += ' whitespace-pre-line'

    return css // cx('', font, fontSize, lineHeight, letterSpacing, className)
  }

  return useMD ? (
    <ReactMarkdown className={tw()}>{String(content)}</ReactMarkdown>
  ) : (
    <p className={tw()} style={style} onClick={onClick}>
      {content}
    </p>
  )
}
