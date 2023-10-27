'use client'

// .core
import React from 'react'
// components
import { DialogDefault, IDialogDefaultProps } from './variants/DialogDefault'
// import { DialogInline } from './variants/DialogInline'
// import { DialogRP } from './variants/DialogRP'

export class Dialog extends React.Component<IDialogDefaultProps> {
  // static Inline = DialogInline
  //   static RP = DialogRP

  render() {
    return <DialogDefault {...this.props} />
  }
}
