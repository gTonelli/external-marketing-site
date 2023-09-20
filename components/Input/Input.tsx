'use client'

// core
import React from 'react'
// components
import { InputCheckbox } from './variants/InputCheckbox'
import { IInputDefaultProps, InputDefault } from './variants/InputDefault'
import { InputField } from './variants/InputField'
// import { InputFieldMUI } from './variants/InputFieldMUI'
// import { InputTextArea } from './variants/InputTextarea'
// import { InputFile } from './variants/InputFile'
// import { InputNumber } from './variants/InputNumber'
// import { InputSearch } from './variants/InputSearch'
// import { InputSearchHeader } from './variants/InputSearchHeader'
// import { InputSelect } from './variants/InputSelect'
// import { InputSwitch } from './variants/InputSwitch'
// import { InputWithOptions } from './variants/InputWithOptions'

export class Input<T> extends React.Component<IInputDefaultProps<T>> {
  static Checkbox = InputCheckbox
  static Field = InputField
  // static FieldMUI = InputFieldMUI
  // static TextArea = InputTextArea
  //   static File = InputFile
  //   static Number = InputNumber
  //   static Search = InputSearch
  //   static SearchHeader = InputSearchHeader
  //   static Select = InputSelect
  //   static Switch = InputSwitch
  //   static WithOptions = InputWithOptions

  render() {
    return <InputDefault<T> {...this.props} />
  }
}
