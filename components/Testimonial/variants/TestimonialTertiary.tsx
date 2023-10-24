//core
import React from 'react'
//component

import { IReviewProps } from './TestimonialDefault'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'

export const TestimonialTertiary = ({ review }: IReviewProps) => {
  return (
    <div className="flex col flex-center px-4 md:row lg:px-20">
      <Image
        className="w-1/2 rounded-10 z-10 -mb-20 md:hidden"
        src={`TrialMasterclass/${review.author.picture}`}
      />

      <div className="text-white text-center bg-black rounded-20 z-5 pt-28 pb-8 px-8 md:-mr-32 md:p-20">
        <Text.Paragraph content={review.content} />

        <Text.Paragraph className="mt-8" content={`${review.author.name}`} />
      </div>

      <Image
        className="hidden w-[469px] h-[500px] rounded-10 z-0 md:block"
        src={`TrialMasterclass/${review.author.picture}`}
      />
    </div>
  )
}
