'use client'

// .core
import React from 'react'
// components
import { DialogDefault, IDialogDefaultProps } from './variants/DialogDefault'

export class Dialog extends React.Component<IDialogDefaultProps> {
  render() {
    return <DialogDefault {...this.props} />
  }
}
