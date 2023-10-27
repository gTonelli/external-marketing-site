// core
import React from 'react'
// components
import { IVideoDefaultProps, VideoDefault } from './variants/VideoDefault'
import { VideoLarge } from './variants/VideoLarge'
import { VideoThumbnail } from './variants/VideoThumbnail'
import { VideoYoutube } from './variants/VideoYoutube'

export class Video extends React.Component<IVideoDefaultProps> {
  static Thumbnail = VideoThumbnail
  static Large = VideoLarge
  static Youtube = VideoYoutube

  render() {
    return <VideoDefault {...this.props} />
  }
}
