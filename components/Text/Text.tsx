// core
import React from 'react'
// components
import { ITextDefaultProps, TextDefault } from './variants/TextDefault'
import { TextHeading } from './variants/TextHeading'
import { TextParagraph } from './variants/TextParagraph'
import { TextTag } from './variants/TextTag'
import { TextWrapper } from './variants/TextWrapper'

export class Text extends React.Component<ITextDefaultProps> {
  static Heading = TextHeading
  static Paragraph = TextParagraph
  static Tag = TextTag
  static Wrapper = TextWrapper

  render() {
    return <TextDefault {...this.props} />
  }
}
