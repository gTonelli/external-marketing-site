'use client'

// core
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { WELLNESS_PAGE as AP } from './config'
// components
import { Page } from '@/components/Page'
import { Button } from '@/components/Button/Button'
import { Section } from '@/components/Section'
import { Video } from '@/components/Video/Video'
import { List } from '@/components/List'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
// libraries
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { faCheckCircle, faFaceSadSweat } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
//utils
import { EWindowWidth, ERoutes, EExternalRoutes } from '@/utils/constants'
import { ViewportContext } from '@/utils/contexts'

import 'swiper/css'
import 'swiper/css/pagination'
import './style.css'

export default function WellnessPage() {
  const page_name = 'Wellness Page FA' as Pages
  // ==================== Hooks ====================
  const router = useRouter()

  const onGoToCheckout = (event: React.MouseEvent<Element, MouseEvent>, gotoCheckout: boolean) => {
    Mixpanel.track.ButtonClicked({
      button_label: (event.target as HTMLButtonElement).innerText,
      page_name: page_name,
    })

    gotoCheckout
      ? window.location.assign(EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION)
      : router.push(ERoutes.EXPLORE_COURSES_PAGE)
  }

  return (
    <Page page_name="Wellness Page">
      {/**Attachment Style Section */}
      <Section className="relative w-full">
        <div className="max-w-3xl">
          <Image
            alt="heal-realtionship"
            className="mx-auto lg:hidden"
            src="WellnessPage/hero-mobile.jpg"
          />

          <Text.Heading
            className="mt-10 text-center text-primary lg:text-left lg:mt-0"
            content={AP.HERO.title}
          />

          <Text.Heading
            className="text-primary text-center !text-[60px] !leading-50 mt-5 lg:text-left"
            content={AP.HERO.attachmentStyle}
          />

          <div className="flex flex-col text-left mx-4 lg:flex-row lg:space-x-20">
            <div>
              <Text.Paragraph
                className="font-bold mt-10 lg:mt-20"
                content={AP.HERO.copy1.title}
                size={18}
              />

              <List
                classNameIcon="mt-1 !text-green-check"
                classNameListItems="mt-4"
                icon={faCheckCircle}
                listItems={AP.HERO.copy1.copy}
              />
            </div>

            <div>
              <Text.Paragraph
                className="font-bold mt-10 lg:mt-20"
                content={AP.HERO.copy2.title}
                size={18}
              />

              <List
                classNameIcon="mt-1"
                classNameListItems="mt-4"
                icon={faFaceSadSweat}
                listItems={AP.HERO.copy2.copy}
              />
            </div>
          </div>
        </div>

        <Image
          alt="heal-relationship"
          className="hidden absolute lg:block lg:top-[35%] lg:right-[-2%] lg:w-[30%] 2xl:top-[10%] 2xl:right-[5%]"
          src="WellnessPage/hero.jpg"
        />
      </Section>

      {/**Dream Life Section */}
      <Image alt="background" className="w-full" src="WellnessPage/dream-life-top.jpg" />
      <Section className="w-full bg-blue-lightest !px-4">
        <Text.Paragraph useMD className="text-left" content={AP.DREAM_LIFE.introduction} />

        <div className="text-left">
          <Button className="mt-8" label="SIGN UP TODAY" onClick={(e) => onGoToCheckout(e, true)} />
        </div>
      </Section>

      <Image
        alt="successful-realtionship"
        className="w-full md:hidden"
        src="WellnessPage/successful-relationship-mobile.jpg"
      />

      <section className="w-full bg-blue-lightest !px-4 !py-10 bg-successful-relationship md:!p-0">
        <div className="md:bg-black/60 md:pt-40 md:pb-32">
          <div className="max-w-5xl text-center mx-auto">
            <Text.Heading
              className="md:text-white"
              content={AP.DREAM_LIFE.successful_relationship_title}
              size={1}
            />

            <Text.Paragraph
              className="md:text-white mt-5"
              content={AP.DREAM_LIFE.successful_relationship_copy}
            />

            <Button
              className="border-none mt-8"
              label="SIGN UP NOW"
              onClick={(e) => onGoToCheckout(e, true)}
            />
          </div>
        </div>
      </section>

      <Section className="w-full bg-blue-lightest !pb-0 !px-4">
        <div className="max-w-lg mx-auto">
          <Text.Heading content={AP.DREAM_LIFE.discover_dreamlife_title} />

          <div className="max-w-lg bg-primary rounded-[30px] mx-auto mt-4 p-6">
            <Text.Paragraph
              useMD
              className="text-white mt-5"
              content={AP.DREAM_LIFE.discover_dreamlife_copy}
            />

            <Button
              className="border-none bg-teal mt-8"
              label="SIGN UP"
              onClick={(e) => onGoToCheckout(e, true)}
            />
          </div>

          <Text.Paragraph
            useMD
            className="mt-5"
            content={AP.DREAM_LIFE.discover_dreamlife_subcopy}
          />

          <Text.Heading className="mt-10 mb-0" content={AP.DREAM_LIFE.courses_title} />
        </div>
      </Section>
      <Image alt="background" className="w-full" src="WellnessPage/dream-life-bottom.jpg" />

      {/**Courses Section */}
      <CarouselSlider sliderType="courses" />

      {/**Instructor Section */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <Image
            alt="thais-personal-development-school"
            className="hidden lg:block"
            src="WellnessPage/instructor-mockup.jpg"
          />

          <Image
            alt="thais-personal-development-school"
            className="mx-auto lg:hidden"
            src="WellnessPage/instructor-mockup-mobile.jpg"
          />

          <Text.Heading className="mt-10" content={AP.PDS.question} />

          <Text.Paragraph className="max-w-2xl mx-auto mt-6" content={AP.PDS.answer} />

          <Button
            className="mt-6"
            label="ENROLL NOW AND SAVE"
            onClick={(e) => onGoToCheckout(e, true)}
          />

          <div className="flex flex-col space-y-6 mt-6 lg:flex-row lg:space-x-16 lg:space-y-0 lg:mt-16">
            <Image alt="thais-portrait" src="WellnessPage/thais-portrait.jpg" />

            <div className="text-left">
              <Text.Heading content={AP.INSTRUCTOR.title} />

              <Text.Paragraph useMD className="mt-8" content={AP.INSTRUCTOR.copy} />

              {AP.INSTRUCTOR.stats.map((stat, index) => (
                <div key={`stat_${index}`} className="mt-8 flex items-center">
                  <FontAwesomeIcon className="inline text-primary" icon={stat.icon} size="2x" />

                  <Text.Paragraph className="inline font-bold text-lg ml-6" content={stat.copy} />
                </div>
              ))}

              <Button
                className="mt-8"
                label="SIGN UP TODAY"
                onClick={(e) => onGoToCheckout(e, true)}
              />
            </div>
          </div>
        </div>
      </Section>

      <section>
        <Image
          alt="personal-development-school-courses"
          className="w-full"
          src="WellnessPage/tablet.jpg"
        />
      </section>

      {/**Wellness Section */}
      <Section>
        <div className="max-w-lg mt-10 mx-auto lg:mt-0">
          <Text.Heading content={AP.WELLNESS.title} />

          <Text.Paragraph className="mt-6" content={AP.WELLNESS.copy} />

          <Button
            className="mt-6"
            label="BEGIN YOUR JOURNEY TODAY"
            onClick={(e) => onGoToCheckout(e, true)}
          />

          <Text.Heading className="mt-12" content={AP.STORIES.title} />

          <Text.Paragraph className="mt-6" content={AP.STORIES.copy} />
        </div>

        <div className="mt-10">
          <CarouselSlider sliderType="testimonial" />
        </div>
      </Section>

      {/**Journey Section */}
      <Section className="bg-black">
        <div className="flex flex-col justify-between space-y-10 mt-10 lg:flex-row lg:space-y-0 lg:mt-0">
          <div className="max-w-lg text-white lg:text-left">
            <Text.Heading useMD content={AP.JOURNEY.title1} />

            <Text.Heading useMD content={AP.JOURNEY.title2} />

            <Text.Paragraph className="mt-6" content={AP.JOURNEY.copy} />
          </div>

          <div className="flex flex-col space-y-4">
            <Button
              className="border-primary"
              label="JOIN TODAY"
              onClick={(e) => onGoToCheckout(e, true)}
            />

            <Button
              className="bg-transparent !border-[3px] !border-white"
              label="EXPLORE"
              onClick={(e) => onGoToCheckout(e, false)}
            />
          </div>
        </div>
      </Section>
    </Page>
  )
}

const CarouselSlider = ({ sliderType }: { sliderType: string }) => {
  const { windowWidth } = useContext(ViewportContext)
  return (
    <div
      className={`relative max-w-5xl text-center mx-4 lg:mx-auto ${
        sliderType === 'courses' && '-mt-8 md:-mt-24 2xl:-mt-40'
      }`}>
      <Swiper
        className="!overflow-hidden"
        autoplay={{ delay: 6000 }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
          renderBullet: (_, className) =>
            '<div class="w-2 h-2 !bg-primary rounded-full ' + className + '"/></div>',
        }}
        slidesPerView={
          sliderType === 'courses'
            ? windowWidth <= EWindowWidth.lg
              ? windowWidth <= EWindowWidth.md
                ? 1.5
                : 2
              : 4
            : windowWidth <= EWindowWidth.lg
            ? windowWidth <= EWindowWidth.md
              ? 1.5
              : 2
            : 3
        }
        spaceBetween={10}>
        {sliderType === 'testimonial'
          ? AP.TESTIMONIALS.map((testimonial, index) => (
              <SwiperSlide key={`testimonial_${index}`}>
                <Video.Thumbnail
                  srcUrl={testimonial.url}
                  thumbnailAlt="personal-development-school-testimonial"
                  thumbnailUrl={`WellnessPage/${testimonial.thumbnail}`}
                />
              </SwiperSlide>
            ))
          : AP.COURSES.map((course, index) => (
              <SwiperSlide key={`course_${index}`}>
                <div className="max-w-[241px] h-[344px] text-left mx-auto">
                  <Image
                    alt="personal-development-school-courses"
                    className="rounded-10"
                    src={`WellnessPage/${course.thumbnail}`}
                  />

                  <Text.Paragraph className="mt-6 font-bold" content={course.title} />

                  <Text.Paragraph className="mt-4 pr-2" content={course.copy} />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}
