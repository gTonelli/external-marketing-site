// core
import React from 'react'
// components
import { ILoaderDefaultProps, LoaderDefault } from './variants/LoaderDefault'
import { LoaderFullscreen } from './variants/LoaderFullscreen'
import { LoaderWrapper } from './variants/LoaderWrapper'

export class Loader extends React.Component<ILoaderDefaultProps> {
  static Default = LoaderDefault
  static Fullscreen = LoaderFullscreen
  static Wrapper = LoaderWrapper

  render() {
    return <LoaderDefault {...this.props} />
  }
}
