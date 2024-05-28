// components
import { AttachmentQuizHeading } from '@/components/AttachmentQuiz/AttachmentQuizHeading'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { CheckoutButton } from '@/components/CheckoutButton'
import { List } from '@/components/List'
import { ROYAL_RUMBLE } from './config'
// utils
import { TStyle } from '@/utils/types'

type Props = {
  style: Extract<TStyle, 'da' | 'sa'>
}

export const RoyalRumbleHeadline = ({ style }: Props) => {
  return (
    <section className="w-full">
      <div className="bg-gradient-to-b from-blue-lightest to-white via-blue-lightest">
        <div className="flex flex-col justify-center items-center max-w-5xl pt-10 md:pt-20 px-4 md:mx-auto">
          <AttachmentQuizHeading
            copy={ROYAL_RUMBLE[style].HERO_SECTION.headline}
            className="!font-ssp !text-3xl capitalize"
          />

          <p className="max-w-3xl uppercase font-bold my-4">
            {ROYAL_RUMBLE[style].HERO_SECTION.subheadline}
          </p>

          {/* BANNER BACKGROUND */}
          <div className="max-w-5xl w-full md:my-8">
            <div className="flex flex-col md:flex-row justify-center items-center space-x-6 md:px-8">
              <div>
                <VideoThumbnail
                  srcUrl={ROYAL_RUMBLE[style].HERO_SECTION.videoURL}
                  thumbnailAlt={`Fearful Avoidant video ${style} thumbnail`}
                  thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
                  type="default"
                />
              </div>

              <div className="m-4 md:text-left md:w-1/2">
                <h2 className="text-purple-dark !text-3xl hidden md:block">
                  {ROYAL_RUMBLE[style].HERO_SECTION.title}
                </h2>

                <p className="mt-4 hidden md:block">{ROYAL_RUMBLE[style].HERO_SECTION.copy}</p>

                <h2 className="text-purple-dark !text-3xl mt-6 md:hidden">
                  {ROYAL_RUMBLE[style].HERO_SECTION.title}
                </h2>

                <p className="mt-4 md:hidden">{ROYAL_RUMBLE[style].HERO_SECTION.copy}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[850px] text-left mx-4 mt-8 md:w-calc(100%-2rem) lg:mx-auto lg:max-w-[1008px]">
        <h3>{ROYAL_RUMBLE[style].BANNER_SEGMENT.variantSubheader}</h3>

        <h4 className="my-8">Does this sound like you?</h4>

        <List
          className="my-8"
          classNameListItems="items-center mb-2"
          classNameText="md:text-lg"
          iconName="chevron-double-right"
          iconSize="sm"
          listItems={ROYAL_RUMBLE[style].BANNER_SEGMENT.variantCopy1}
        />

        {ROYAL_RUMBLE[style].BANNER_SEGMENT.variantCopy2.map((copy, index) => (
          <p key={`banner_segment_copy_v_${index}`} className="mb-4 md:text-lg">
            {copy}
          </p>
        ))}

        <h3 className="my-8">Our Personalized Courses Can Guide You to Achieve These Goals</h3>

        {ROYAL_RUMBLE[style].BANNER_SEGMENT.variantCopy3.map((copy, index) => (
          <p key={`banner_segment_copy_v_${index}`} className="mb-4 md:text-lg">
            {copy}
          </p>
        ))}

        <div className="flex justify-center">
          <CheckoutButton className="mt-8 xxs:px-16 md:mt-10" label="UNLOCK MY DISCOUNT" />
        </div>
      </div>
    </section>
  )
}
