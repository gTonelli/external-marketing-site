// core
import React, { useState } from 'react'
// components
import { IDefaultProps } from '@/components'
// libraries
import { IconName } from '@fortawesome/fontawesome-common-types'
import cx from 'classnames'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { Icon } from '@/components/Icon'
import { SwiperOptions } from 'swiper/types'

export interface ICarouselPopularCoursesProps extends IDefaultProps {
  /**
   * Font awesome icon name for arrows
   * @default triangle
   */
  arrowIcon?: IconName
  /** Breakpoints object */
  breakpoints?: SwiperOptions['breakpoints']
  /** Classes applied to arrow icon wrapper */
  classNameArrowWrapper?: string
  /** Classes applied to the heading */
  classNameHeading?: string
  /** Classes applied to the subheading */
  classNameSubheading?: string
  /** Heading text displayed at the top */
  heading?: string
  /**
   * Number of slides to slide per group
   * @default 1
   */
  slidesPerGroup?: number
  /**
   * Number of slides in the viewport
   * @default 1
   */
  slidesPerView?: number
  /**
   * Space between slides in px
   * @default 0
   */
  spaceBetweenSlides?: number
  /** Subheading text between the heading and slider */
  subheading?: string
  /** Subheading to display only on desktop */
  subheadingDesktop?: string
}

const defaultBreakpoints = {
  768: {
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 0,
  },
}

export const CarouselPopularCourses = ({
  arrowIcon = 'triangle',
  breakpoints = defaultBreakpoints,
  className,
  classNameArrowWrapper,
  classNameHeading,
  classNameSubheading,
  heading,
  slidesPerGroup = 1,
  slidesPerView = 1,
  spaceBetweenSlides = 0,
  subheading,
  subheadingDesktop,
}: ICarouselPopularCoursesProps) => {
  // ==================== State ====================
  const [prevElCourses, setPrevElCourses] = useState<HTMLElement | null>(null)
  const [nextElCourses, setNextElCourses] = useState<HTMLElement | null>(null)
  const [click, setClick] = useState<boolean>(false)

  //limit user 1 click per visit
  const courseClick = (course_title: string) => {
    if (!click) {
      Mixpanel.track.CourseBannerClicked({
        page_name: 'Lifetime',
        course_name: course_title,
      })
    }
    setClick((prev) => !prev)
  }

  const popularCourses = [
    {
      id: '522506',
      title: 'Eliminate Your Inner Guilt & Shame to Access Your Full Potential',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Guilt_Shame_32a7b6dbe4.jpg',
    },
    {
      id: '530898',
      title: 'Emotional Mastery & Belief Reprogramming',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Emotional_Mastery_Desktop_c150e19a57.jpg',
    },
    {
      id: '584963',
      title: 'Healthy Balance in Relationships: Ending Codependency & Enmeshment',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Codependency_1c365cba99.jpg',
    },
    {
      id: '530894',
      title: 'Reparenting Your Inner Child to Transcend Attachment Trauma Behaviors',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Reparenting_a40249d39c.jpg',
    },
    {
      id: '530903',
      title: 'Discover, Embrace & Fulfill Your Personal Needs',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Personal_Needs_ff35b1f4de.jpg',
    },
    {
      id: '530901',
      title:
        'Stop Abandonment & Rejection in A Relationship (Anxious Attachment Style Re-Programming)',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/Course_Thumbnail_Attachment_Specific_AP_Reprogram_Desktop_9af66ee926.jpg',
    },
    {
      id: '530899',
      title:
        'Healthy and Secure Relationships with/for the Emotionally Unavailable Person (Dismissive Avoidant Re-programming Course)',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/Course_Thumbnail_Attachment_Specific_DA_Reprogram_Desktop_a8ee2663bc.jpg',
    },
    {
      id: '530900',
      title:
        'Healthy and Passionate Relationships after Emotional Pain (Re-Programming the Fearful Avoidant Attachment Style)',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Attachment_Specific_FA_Reprogram_Desktop_6bc39e28ed.jpg',
    },
    {
      id: '530902',
      title: 'Skyrocket Your Self-Esteem',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Self_Esteem_Desktop_dfcf512ef5.jpg',
    },
    {
      id: '530904',
      title: 'Break Through Self-Sabotage & Procrastination For Good',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Self_Sabotage_Desktop_d7b7ff1c18.jpg',
    },
    {
      id: '550630',
      title: 'Overcoming Anxiety for Peace of Mind',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Overcoming_Anxiety_Desktop_23b3491642.jpg',
    },
    {
      id: '559093',
      title:
        'Conflict Resolution: Speaking Up & Steps to Healthily Resolve Relationship Challenges',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Conflict_Resolution_9feee77107.jpg',
    },
    {
      id: '566797',
      title: 'Mindset Mastery & Life-Mapping Course (A Journey Course)',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Mindset_Mastery_Desktop_ba63cf9ba2.jpg',
    },
    {
      id: '570395',
      title: 'The Key Pillars Necessary to Create a Secure Relationship',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Attachment_Specific_SA_Pillars_Desktop_639923340a.jpg',
    },
    {
      id: '584911',
      title: 'Transform Depression, Trauma Thoughts & Sadness',
      thumbnailUrl:
        'https://pds-strapi-bucket.s3-accelerate.amazonaws.com/Course_Thumbnail_Depression_fff8e59bdb.jpg',
    },
  ]

  return (
    // POPULAR COURSES
    <section
      className={cx(
        `relative w-full flex flex-col px-page-xxs pt-10 mb-15
        lg:px-page-md lg:mb-20
        xl:px-page`,
        className
      )}>
      {heading && (
        <Text.Heading
          className={cx('text-center', subheading ? 'mb-7' : 'mb-8 lg:mb-15', classNameHeading)}
          content={heading}
        />
      )}
      {subheading && (
        <Text.Paragraph
          className={cx(
            'text-center mb-8 -mt-1 lg:mb-15',
            subheadingDesktop && 'lg:hidden',
            classNameSubheading
          )}
          content={subheading}
        />
      )}

      {subheadingDesktop && (
        <Text.Paragraph
          className={cx(
            'text-center mb-8 -mt-1 lg:mb-15',
            subheading && 'hidden lg:block',
            classNameSubheading
          )}
          content={subheadingDesktop}
        />
      )}

      {/* SLIDER */}
      {popularCourses.length && (
        <div className="w-full flex relative">
          <Swiper
            loop
            breakpoints={breakpoints}
            className="!pb-12"
            modules={[Navigation, Pagination]}
            navigation={{ prevEl: prevElCourses, nextEl: nextElCourses }}
            pagination={{
              clickable: true,
              bulletActiveClass: '!opacity-100',
              bulletClass:
                'inline-block w-4 h-4 mx-1 my-1 bg-primary rounded-full opacity-50 cursor-pointer',
            }}
            slidesPerGroup={slidesPerGroup}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetweenSlides}>
            {popularCourses.map((course, index) => (
              <SwiperSlide key={`popularCourse_${index}`} className="p-2">
                <div onClick={() => courseClick(course.title)}>
                  <Image className="rounded-20 mx-auto" src={course.thumbnailUrl} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* LEFT ARROW ICON */}
          <div
            ref={(node) => setPrevElCourses(node)}
            className={cx(
              'absolute top-[20%] clickable-shadow group hidden w-10 h-10 flex-center rounded-full bg-grey-2 cursor-pointer lg:flex lg:-left-20',
              classNameArrowWrapper
            )}>
            <Icon
              className="text-white -rotate-90 group-hover:text-primary"
              name={arrowIcon}
              size="md"
              type="solid"
            />
          </div>

          {/* RIGHT ARROW ICON */}
          <div
            ref={(node) => setNextElCourses(node)}
            className={cx(
              'absolute top-[20%] clickable-shadow group hidden w-10 h-10 flex-center rounded-full bg-grey-2 cursor-pointer lg:flex lg:-right-20',
              classNameArrowWrapper
            )}>
            <Icon
              className="text-white rotate-90 group-hover:text-primary"
              name={arrowIcon}
              size="md"
              type="solid"
            />
          </div>
        </div>
      )}
    </section>
  )
}
