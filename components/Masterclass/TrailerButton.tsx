'use client'

import { useState } from 'react'
import { Button } from '@/components/Button/Button'
import { Dialog } from '@/components/Dialog/Dialog'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@awesome.me/kit-545b942488/icons/classic/solid'

interface ITrailerButtonProps {
  videoId: string
  thumbnailSrc?: string
}

export const TrailerButton = ({ videoId, thumbnailSrc = '' }: ITrailerButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        className="masterclass-transparent-cta hidden lg:block"
        label="WATCH TRAILER"
        onClick={() => setIsOpen(true)}
      />

      <Dialog isShown={isOpen} onToggle={() => setIsOpen(false)} className="w-full !shadow-none">
        <div className="relative max-w-5xl w-full mx-auto">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors cursor-pointer z-10">
            <FontAwesomeIcon icon={faXmark} className="text-3xl" />
          </button>

          <div className="w-full rounded-xl overflow-hidden bg-black shadow-2xl">
            <VideoStream autoplay videoId={videoId} thumbnailSrc={thumbnailSrc} />
          </div>
        </div>
      </Dialog>
    </>
  )
}
