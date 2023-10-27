'use client'

// core
import React from 'react'
// components
import { ButtonDefault, IButtonDefaultProps } from './variants/ButtonDefault'
import { ButtonSubmit } from './variants/ButtonSubmit'
import { ButtonWrapper } from './variants/ButtonWrapper'

export class Button extends React.Component<IButtonDefaultProps> {
  static Submit = ButtonSubmit
  static Wrapper = ButtonWrapper

  render() {
    return <ButtonDefault {...this.props} />
  }
}
