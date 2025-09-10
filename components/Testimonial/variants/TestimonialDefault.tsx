// core
import Image from 'next/image'
// components
import { faStar } from '@awesome.me/kit-545b942488/icons/classic/solid'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  picture?: string
}

export const TestimonialDefault = ({ className, review, ratingBg = 'teal' }: IReviewProps) => {
  return (
    // <div className="flex flex-col items-center">
    // mb-14
    <div className={cx('relative 2xl:mb-0 h-full flex flex-col items-center', className)}>
      {/* REVIEW AUTHOR */}
      <div className="flex relative top-4 left-0">
        {review.author.picture && (
          <Image
            className="w-20 h-20 rounded-full"
            width={36}
            height={36}
            src={`/images/${review.author.picture}`}
            alt="author picture"
          />
        )}

        <div className="flex flex-col justify-center ml-2 pb-4">
          {/* NAME */}
          <span>
            <strong>{review.author.name}</strong>
          </span>

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
              <FontAwesomeIcon
                key={`star_'${ii}`}
                className={`text${'-' + ratingBg}`}
                icon={faStar}
              />
            ))}
        </div>

        <p>{review.content}</p>
      </div>
    </div>
  )
}
