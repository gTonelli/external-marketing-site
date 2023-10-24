'use client'
/* eslint-disable react/prefer-stateless-function */
// core
import React from 'react'
// components
import { ITrustbarDefaultProps, TrustbarDefault } from './variants/TrustbarDefault'
import { TrustbarSlider } from './variants/TrustbarSlider'

export class Trustbar extends React.Component<ITrustbarDefaultProps> {
  static Slider = TrustbarSlider

  render() {
    return <TrustbarDefault {...this.props} />
  }
}
