// core
import React from 'react'
// libraries
import cx from 'classnames'
// components
import { Icon } from '../../Icon'
import { Image } from '../../Image'

export interface IReviewProps {
  className?: string
  review: TTestimonial
  ratingBg?: string
}

export type TTestimonial = {
  author: TAuthor
  score?: number
  content: string
}

type TAuthor = {
  name: string
  state?: string
  country?: string
  picture: string
}

export const TestimonialDefault = ({ className, review, ratingBg = 'teal' }: IReviewProps) => {
  return (
    // <div className="flex flex-col items-center">
    // mb-14
    <div className={cx('relative 2xl:mb-0 h-full flex flex-col items-center', className)}>
      {/* REVIEW AUTHOR */}
      <div className="flex items-center relative top-6 left-8">
        <Image
          className="max-w-28 max-h-28 rounded-full"
          src={`${review.author.picture}`}
          style={{ width: 'unset' }}
        />

        <div className="flex flex-col justify-center">
          {/* NAME */}
          <span className="font-bold text-left tracking-0.325 ml-2">{review.author.name}</span>

          {/* LOCATION */}
          {(review.author.state || review.author.country) && (
            <span className="block">
              {review.author.state}, {review.author.country}
            </span>
          )}
        </div>
      </div>

      {/* CARD */}
      <div className="reviewCard !h-full min-h-[430px]">
        <div className="flex mb-6 space-x-2">
          {Array(review.score || 5)
            .fill(1)
            .map((_: any, ii: number) => (
              <Icon key={`star_'${ii}`} className={`text${'-' + ratingBg}`} name="star" />
            ))}
        </div>

        <p>{review.content}</p>
      </div>
    </div>
  )
}
