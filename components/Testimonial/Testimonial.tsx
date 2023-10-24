'use client'

// core
import React from 'react'
// components
import { IReviewProps, TestimonialDefault } from './variants/TestimonialDefault'
import { TestimonialSecondary } from './variants/TestimonialSecondary'
import { TestimonialTertiary } from './variants/TestimonialTertiary'

export class Testimonial extends React.Component<IReviewProps> {
  static Secondary = TestimonialSecondary
  static Tertiary = TestimonialTertiary

  render() {
    return <TestimonialDefault {...this.props} />
  }
}
