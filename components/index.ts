import React, { Key } from 'react'

export type AlignPosition = 'left' | 'center' | 'right'

export type TKey = Key | undefined | null
export type TUserMenuTabValue = 'history' | 'notifications' | 'user'

/**
 * Interface for default props that all components must extend
 */
export interface IDefaultProps {
  id?: TKey
  key?: TKey
  className?: string
  style?: React.CSSProperties
}

/**
 * Interface for default wrapper components - same as `IDefaultProps` with additional support for children
 */
export interface IDefaultWrapperProps extends IDefaultProps {
  children: React.ReactNode
}

// // A
// export * from "./AttachmentStylesTabs/AttachmentStylesTabs";
// export * from "./Avatar/Avatar";
// // B
// export * from "./Backdrop";
export * from './Button/Button'
// // C
// export * from "./Carousel/Carousel";
// export * from "./Card/Card";
export * from './Captcha'
// export * from "./CountDownTimer";
// export * from "./CourseDeniedAccessDialog";
// export * from "./CompanyLogo";
// export * from "./CourseInfo";
// // D
// export * from "./Dialog/Dialog";
// // E
// export * from "./Expandable";
// // F
// export * from "./Faq/Faq";
export * from './Footer'
// // H
export * from './Header'
// // I
export * from './Icon'
// export * from "./Image";
export * from './Input/Input'
// // L
// export * from './Loader/Loader'
// export * from "./Link";
// export * from "./List";
// // M
// // N
// export * from "./NoData";
// // P
export * from './Page'
// export * from "./Pill";
export * from './ProgressBar'
// export * from "./Pricing";
// // Q
// export * from "./Quiz";
export * from './QuizRegistrationForm'
// // S
// export * from "./Section";
// export * from "./ScrollInAnimation";
// export * from "./ScrollToTop";
// export * from "./SocialMediaLinks";
// export * from "./SocialProofBar";
// export * from "./SidePanel";
// export * from "./StickyFooter";
// // T
// export * from "./Tabs";
// export * from "./Testimonial/Testimonial";
// export * from "./TestimonialSlider";
export * from './Tooltip'
// // V
// export * from "./Video/Video";
