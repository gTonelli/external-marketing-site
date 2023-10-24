// core
import React from 'react'
// components
import { CarouselCourses } from './variants/CarouselCourses'
import { CarouselDefault, ICarouselDefaultProps } from './variants/CarouselDefault'
import { CarouselPopularCourses } from './variants/CarouselPopularCourses'
// import { CarouselQuiz } from './variants/CarouselQuiz'
import { CarouselTestimonial } from './variants/CarouselTestimonial'
// import { CarouselTestimonialSecondary } from './variants/CarouselTestimonialSecondary'

export class Carousel extends React.Component<ICarouselDefaultProps> {
  static PopularCourses = CarouselPopularCourses
  static Courses = CarouselCourses
  // static Quiz = CarouselQuiz
  // static TestimonialSecondary = CarouselTestimonialSecondary
  static Testimonial = CarouselTestimonial

  render() {
    return <CarouselDefault {...this.props} />
  }
}
