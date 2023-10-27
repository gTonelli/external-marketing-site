//core
import React from 'react'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
//component
import { IReviewProps } from './TestimonialDefault'

export const TestimonialSecondary = ({ review }: IReviewProps) => {
  return (
    <div className="flex flex-col items-stretch drop-shadow-2xl">
      {/* CARD */}
      <div className="reviewCard min-w-[30px] border-none rounded-50 py-8">
        <Text.Paragraph className="italic text-purple-teal text-center" content={review.content} />
      </div>
      <div className="w-16 overflow-hidden inline-block ml-16">
        <div className="h-6 w-6 bg-white -rotate-45 transform origin-top-left" />
      </div>

      {/* REVIEW AUTHOR */}
      <div className="flex items-center pt-4">
        <Image
          className="max-w-14 max-h-14 rounded-full"
          src={`images/${review.author.picture}`}
          style={{ width: 'unset' }}
        />

        <div className="flex flex-col justify-center">
          {/* NAME */}
          <Text className="font-serif font-bold text-left pl-4" content={review.author.name} />
        </div>
      </div>
    </div>
  )
}
