'use client'

// core
import { useContext, useState } from 'react'
// components
import { Video } from '../Video/Video'
// modules
import Mixpanel from '@/modules/Mixpanel'
import TripleWhale from '@/modules/TripleWhale'
// utils
import { PageContext } from '@/utils/contexts'

export const IATVideo = () => {
  // ==================== State ====================
  const [watchedVideos, setWatchedVideos] = useState(new Set<string>())

  const { page_name } = useContext(PageContext)

  const onVideoStarted = (type: string) => {
    if (!watchedVideos.has(type)) {
      Mixpanel.track.VideoStarted({
        video_type: `${type} - ${page_name}`,
        page_name: page_name,
      })

      TripleWhale.track.VideoStarted({
        video_type: `${type} - ${page_name}`,
        page_name: page_name,
      })
    }

    setWatchedVideos(new Set<string>([...watchedVideos, type]))
  }

  return (
    <Video.Large
      className="mx-auto shadow-centered max-w-3xl lg:p-8"
      srcUrl="https://storage.googleapis.com/pds_videos/Integrated_Attachment_Theory_2023.mp4"
      thumbnailUrl="IATPage/iat-video-thumbnail.png"
      thumbnailAlt="IAT Video Thumbnail"
      onPlay={() => onVideoStarted('default')}
    />
  )
}
