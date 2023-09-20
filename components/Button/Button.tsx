'use client'

// core
import React from 'react'
// components
import { ButtonDefault, IButtonDefaultProps } from './variants/ButtonDefault'
// import { ButtonPrimary } from './variants/ButtonPrimary'
import { ButtonSubmit } from './variants/ButtonSubmit'
// import { ButtonWrapper } from './variants/ButtonWrapper'

export class Button extends React.Component<IButtonDefaultProps> {
  // OLD
  static Submit = ButtonSubmit

  render() {
    return <ButtonDefault {...this.props} />
  }
}
