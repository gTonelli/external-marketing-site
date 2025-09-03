import { IDefaultProps } from '..'
import { Button } from '../Button/Button'
import Mixpanel from '@/modules/Mixpanel'
import TripleWhale from '@/modules/TripleWhale'

interface IPodcastListCTAProps extends IDefaultProps {
  id: number
  spotifyId: string
  setCurrentVideoId: (id: number) => void
  setCurrentAudioId: (spotifyId: string) => void
}

export const PodcastListCTA = ({
  id,
  spotifyId,
  setCurrentVideoId,
  setCurrentAudioId,
}: IPodcastListCTAProps) => {
  const _onClickVideo = () => {
    Mixpanel.track.VideoStarted({
      video_type: `Podcast List Ep - ${id}`,
      page_name: 'Podcast Page',
    })

    TripleWhale.track.VideoStarted({
      video_type: `Podcast List Ep - ${id}`,
      page_name: 'Podcast Page',
    })

    setCurrentVideoId(id)
  }

  const _onClickAudio = () => {
    Mixpanel.track.AudioStarted({
      audio_type: `Podcast List Ep - ${id}`,
      page_name: 'Podcast Page',
    })
    setCurrentAudioId(spotifyId)
  }

  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 lg:w-60">
      <Button label="WATCH NOW" className="w-full" onClick={_onClickVideo} />

      <Button label="LISTEN NOW" theme="black" className="w-full" onClick={_onClickAudio} />
    </div>
  )
}
