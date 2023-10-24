// // core
// import React, { forwardRef, useContext } from 'react'
// // components
// import { IDefaultProps, ScrollInAnimation, Testimonial } from 'components'
// import { ViewportContext } from 'App'
// // libraries
// import cx from 'classnames'
// import { Navigation, Pagination } from 'swiper'
// import { Swiper, SwiperSlide } from 'swiper/react'
// // utils
// import { EWindowWidth } from 'utils'
// import { TTestimonial } from '../../Testimonial/variants/TestimonialDefault'

// interface ICarouselTestimonialProps extends IDefaultProps {
//   /** Classnames for carousel children (cards) */
//   classNameCard?: string
//   /** Classnames for carousel children (cards) */
//   classNameHeader?: string
//   /** Classnames for swiper slides */
//   classNameSlide?: string
//   /** Classnames for swiper wrapper */
//   classNameSwiper?: string
//   /**
//    * Testimonials to show
//    */
//   testimonials?: TTestimonial[]
// }

// const DEFAULT_TESTIMONIALS = [
//   {
//     author: {
//       name: 'Melissa K.',
//       picture: 'avatar_melissa.png',
//     },
//     content:
//       '“I’ve researched relationships most of my life. However, I couldn’t find anything that explained my dynamic in them. I thought about therapy until I stumbled upon Thais’s YouTube channel. She explained EXACTLY what I was experiencing. She literally read my mind! I’m usually a bit of a skeptic but I was hooked! I finally figured out my problem and how to solve it!”',
//   },
//   {
//     author: {
//       name: 'Tappy P.',
//       picture: 'avatar_tappy.jpg',
//     },
//     content:
//       '“PDS has had such an amazing impact on my relationships, my self-esteem and has given me valuable self-awareness. The community has so many brilliant, and like-minded individuals who I always look forward to talking to! The tools within PDS have provided me with the strength, and ability to heal, almost completely from my anxiety, and I feel so much more confident within myself.”',
//   },
//   {
//     author: {
//       name: 'Athira D.',
//       picture: 'avatar_athira.jpg',
//     },
//     content:
//       '“PDS replaced therapy for me. I was a Fearful Avoidant, and I could not explain why I struggled in relationships. The constant need for connection and the fear of having one was very draining. I am so grateful to PDS that finally I realize that my worth is not related to anything I achieve but to the person that I am. Also learning about other attachment styles helped me to become more compassionate to people around me.”',
//   },
// ]

// export const CarouselTestimonialSecondary = forwardRef(
//   (
//     {
//       className,
//       classNameSlide,
//       classNameSwiper,
//       testimonials = DEFAULT_TESTIMONIALS,
//     }: ICarouselTestimonialProps,
//     ref: React.Ref<HTMLDivElement>
//   ) => {
//     // ==================== Context ====================
//     const { windowWidth } = useContext(ViewportContext)

//     return (
//       <section
//         ref={ref}
//         className={cx(
//           className,
//           'w-full flex flex-col items-center lg:px-page-xs xl:px-page-md 2xl:px-page'
//         )}>
//         {/* SLIDER */}
//         <div className="w-full flex items-start relative max-w-[1184px]">
//           <Swiper
//             loop
//             className={cx('pb-20', classNameSwiper)}
//             modules={[Navigation, Pagination]}
//             pagination={{
//               clickable: true,
//               renderBullet: (_, className) =>
//                 '<div class="w-4 h-4 bg-primary rounded-full ' + className + '"/></div>',
//             }}
//             slidesPerGroup={
//               windowWidth <= EWindowWidth.md ? 1 : windowWidth < EWindowWidth['xl'] ? 2 : 3
//             }
//             slidesPerView={
//               windowWidth <= EWindowWidth.md ? 1 : windowWidth < EWindowWidth['xl'] ? 2 : 3
//             }
//             spaceBetween={16}>
//             {testimonials.map((review, index) => (
//               <SwiperSlide
//                 key={`review_${index}`}
//                 className={cx('flex justify-evenly self-start', classNameSlide)}>
//                 <ScrollInAnimation animateIn="animFadeInUp" className="flex" delay={index * 100}>
//                   <Testimonial.Secondary review={review} />
//                 </ScrollInAnimation>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </section>
//     )
//   }
// )
