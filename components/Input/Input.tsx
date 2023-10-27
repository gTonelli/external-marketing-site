'use client'

// core
import React from 'react'
// components
import { IInputDefaultProps, InputDefault } from './variants/InputDefault'
import { InputCheckbox } from './variants/InputCheckbox'
import { InputField } from './variants/InputField'

export class Input<T> extends React.Component<IInputDefaultProps<T>> {
  static Checkbox = InputCheckbox
  static Field = InputField

  render() {
    return <InputDefault<T> {...this.props} />
  }
}
