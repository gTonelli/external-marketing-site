'use client'

// core
import React from 'react'
// components
import { FaqDefault, IFAQsProps } from './variants/FaqDefault'
import { FaqSecondary } from './variants/FaqSecondary'

export class Faq extends React.Component<IFAQsProps> {
  static Secondary = FaqSecondary

  render() {
    return <FaqDefault {...this.props} />
  }
}
