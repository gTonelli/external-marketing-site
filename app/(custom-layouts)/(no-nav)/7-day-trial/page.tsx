'use client'

// core
import { useEffect, useState } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Card } from '@/components/Card/Card'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { SocialProofBar } from '@/components/SocialProof/SocialProofBar'
import { Carousel } from '@/components/Carousel/Carousel'
import { Page } from '@/components/Page'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
// libraries
import cx from 'classnames'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
// utils
import { externalRoutes } from '@/utils/constants'
import { TRIAL_PAGE } from './config'

import 'swiper/css'
import 'swiper/css/pagination'

interface IChecklistItemProps extends IDefaultProps {
  label: string
  className?: string
  classNameLi?: string
}

export default function TrialPage() {
  useEffect(() => {
    document.title = 'PDS 7 Day Free Trial'
  }, [])

  return (
    <Page page_name="7-Day Trial Page (Variant)">
      {/* HEADER */}
      <div className="text-left relative bg-gradient-to-b from-purple-light to-primary-light-25 lg:bg-gradient-to-r">
        <div
          className="relative z-5 max-w-lg mx-auto p-4 items-center 
                        lg:max-w-screen-xl lg:px-12 lg:grid lg:grid-cols-12 lg:gap-12 lg:py-24">
          <Image
            className="hidden lg:block lg:col-span-6 xl:col-span-5"
            src="TrialPage/trial-page-header-couple.png"
          />

          <div className="lg:col-span-6 xl:col-span-6">
            <Text.Heading
              className="lg:mb-12"
              content="Want To Heal Your Attachment Style… For Good? We Have A Tailored, Results-Driven Program Just For YOU"
            />

            <Image
              className="w-5/6 mx-auto my-4 lg:hidden"
              src="TrialPage/trial-page-header-couple.png"
            />

            <Text
              content="Get your 7-day free trial of the All-Access Pass membership to access highly-tailored programs 
                      to suit your needs so you can experience lasting transformations in as little as 10 minutes a day. Go at your 
                      own pace, be supported every step of the way."
            />

            <div className="text-center py-4 lg:text-left">
              <ButtonCheckout
                className="trial-btn mb-4"
                label="TRY FOR $0"
                href={externalRoutes.checkout7DayTrial}
              />

              <Text content="$67/mo after 7 days. Cancel anytime." />
            </div>
          </div>
        </div>

        <Image
          className="absolute lg:hidden w-1/2 max-w-48 top-6 -left-4"
          src="TrialPage/trial-page-header-art-mobile.png"
        />

        <Image
          className="max-w-106 hidden w-1/2 absolute
          lg:block top-0 right-0"
          src="TrialPage/trial-page-header-art-desktop-tr.png"
        />

        <Image
          className="max-w-60 hidden w-1/2 absolute
          lg:block -bottom-12 left-0"
          src="TrialPage/trial-page-header-art-desktop-bl.png"
        />
      </div>

      {/* MAIN INFO SECTION */}
      <div
        className="max-w-lg mx-auto px-4 py-8 bg-white 
                      lg:max-w-screen-lg lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        {/* LEFT WRAPPER */}
        <div>
          <Text.Heading
            className="mb-4 lg:mb-12 lg:mt-12"
            content="Is Your Attachment Style Sabotaging Your Relationships? It’s Time To Take Your Power Back"
            size={3}
          />

          <Text
            useMD
            className="mb-4 lg:mb-6"
            content={`Interesting fact for you: your attachment style doesn't just affect your romantic relationships.\\
            \\
            It actually determines how you relate with everyone in your life, such as your closest friends, your boss, and of course, your family.\\
            \\
            In fact, your attachment style is the reason you…\\
            \\
            \\
            might **feel insecure and put certain people on pedestals** – such as dates you're really attracted to, people in authority and successful friends.\\
            \\
            hide the real you from others because you **fear being rejected, abandoned or shamed.**\\
            \\
            find emotions so overwhelming that you **shut down or push people away** when they try to get close.\\
            \\
            might **feel others' emotions intensely,** and naturally then put their needs above your own.`}
          />

          <ButtonCheckout
            className="hidden trial-btn mt-12 lg:block"
            label="GET STARTED TODAY!"
            href={externalRoutes.checkout7DayTrial}
          />
        </div>

        {/* RIGHT WRAPPER */}
        <div>
          <Image className="my-9 lg:max-w-80" src="TrialPage/trial-page-mountaineer.jpg" />

          <Text
            useMD
            className="mb-7"
            content={`As you may have experienced, these automatic patterns can lead to unfulfilling and unhealthy relationships, robbing you of the joy, love and connection that you deeply desire.\\
            \\
            But it doesn't have to be this way.\\
            \\
            With our cutting edge tools and support, your attachment style (and subsequent behaviors and fears) can be transformed! We have a proven track record with thousands of students world-wide and want to share the opportunity to try this out for free today!\\
            \\
            The Personal Development School has received a whopping 99.7% NPS Score from our own students because our tools truly facilitate change. If you are ready to understand the real formula for successful relationships so that you can build deeper connections and feel truly cherished by others - join us for free today and come check it out for yourself!\\
            \\
            All you have to do is click below to gain entry to our All-Access Pass and discover the proven tools that will help you create healthy, lasting relationships, boost your self-esteem and have true success in your love life!`}
          />

          <div className="text-center">
            <ButtonCheckout
              className="trial-btn my-4 lg:hidden"
              label="GET STARTED TODAY!"
              href={externalRoutes.checkout7DayTrial}
            />
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF CARDS */}
      <SocialProofBar />

      {/* PHONE MOCKUP AND CHECKLIST */}
      <div
        className="max-w-lg mx-auto py-6 px-4 items-center 
                      lg:grid lg:grid-cols-12 lg:gap-2 lg:max-w-screen-xl">
        <Text.Heading
          className="text-center mb-6 lg:col-span-12 xl:mb-9"
          content="Here’s What You Get With Your 7-Day Free Trial"
          size={3}
        />

        <div className="lg:col-span-5 xl:col-span-4">
          <Image
            className="w-2/3 mx-auto max-w-96 lg:w-full lg:max-w-80"
            src="TrialPage/trial-page-phone-mockup.jpg"
          />
        </div>

        <div className="lg:col-span-7 xl:col-span-8">
          <ChecklistItem
            label="Access to a **proven, simple course journey with video modules to heal your attachment style** and 
            rapidly transform your relationships so you can create thriving, lasting connections"
          />

          <ChecklistItem
            label="**Step-by-step guidance on how to use the powerful techniques**, which are based on extensive 
            research and years of proven results (plus thousands of success stories!)"
          />

          <ChecklistItem
            label="**BONUS video programs to transform any area of life**, such as how to gain emotional mastery, 
            personal success, master your relationship to money, increase your self-esteem, overcome burnout and procrastination, 
            and so much more! "
          />

          <Text
            className="my-4"
            content="Plus to give you all the support you need, you’ll also get access to:"
          />

          <ChecklistItem label="**4 LIVE weekly webinars and Q&As** – Thais Gibson will further explain the healing techniques and personally give feedback on your biggest relationship or emotional challenges" />

          <ChecklistItem label="**Daily online events led by trained coaches** - join events on self-love routines, study groups, online dating support group, communication practice, sharing circles and much more" />

          <ChecklistItem label="**24/7 live chat functionality with other members** – chat with other members in real-time so you’re never alone" />

          <ChecklistItem label="**Members-only forum and Facebook group** – connect with like-minded people who are also working on healing their emotions and relationships" />

          <Text
            className="my-4"
            content="Simply go at your own pace, choose the level of support and guidance you need. This is your opportunity to experience fast results and major transformation."
          />
        </div>
      </div>

      {/* TRIAL OFFER SECTION */}
      <div
        className="max-w-lg mx-auto p-4 items-center 
                      lg:max-w-screen-lg lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8">
        <div>
          <Text.Heading
            content="Start Your Personalized Program Today With Your 7-Day Free Trial"
            size={3}
          />

          <Text.Heading content="(Limited-Time Offer)" size={3} />

          <Text
            className="font-bold my-4"
            content="What’s included? Everything you’ll need to live a better life"
          />

          <ChecklistItem
            className="items-center my-3"
            label="Personalized programs and workbooks"
          />

          <ChecklistItem
            className="items-center my-3"
            label="4 weekly webinars with Thais Gibson"
          />

          <ChecklistItem className="items-center my-3" label="Simple and results-oriented tools" />

          <ChecklistItem
            className="items-center my-3"
            label="Online community events to access for extra support"
          />

          <ChecklistItem className="items-center my-3" label="24/7 live chat functionality" />

          <ChecklistItem
            className="items-center my-3"
            label="Private Members Forum and Facebook Group"
          />

          <div className="text-center">
            <ButtonCheckout
              className="trial-btn my-4"
              label="TRY FOR $0"
              href={externalRoutes.checkout7DayTrial}
            />

            <Text className="font-semibold" content="$67/mo after 7 days. Cancel anytime." />
          </div>
        </div>

        {/* OFFER GRAPHIC */}
        <Card.Offer
          showBadges
          showDisclaimer
          bottomSubText="to start living the life you want"
          bottomText="Less than $3 a day"
          className="!rounded-bl-none"
          link={externalRoutes.checkout7DayTrial}
          offerPrice="$67"
          offerSubText="per-month"
          topSubheadingText="ONLY"
          topText="ALL-ACCESS PASS"
        />
      </div>

      {/* THAIS SECTION */}
      <div
        className="max-w-lg mx-auto 
                      lg:max-w-screen-lg 
                      xl:max-w-screen-xl">
        <div
          className="relative p-6 pb-0 px-5 bg-primary-light-50 
                        xs:px-4 
                        lg:grid lg:grid-cols-12 lg:gap-4 lg:items-end">
          <div className="lg:col-span-8 lg:order-1 lg:pb-12 lg:px-6 lg:row-start-1 lg:col-start-5 xl:pb-32">
            <Text.Heading
              className="relative z-5 text-center mb-4 
                          lg:text-left"
              content="Hi, I'm Thais!"
              size={3}
            />

            <Text
              useMD
              className="relative z-5 mb-4"
              content={`I’m a personal development expert, best-selling author and founder of The
              Personal Development School.\\
              \\
              After completing my master’s degree and over 13 different certifications
              in a variety of disciplines such as Cognitive Behavioral Therapy, NLP, Somatic Experiencing and more –
              I ran an extremely busy client-based practice for the better part of a decade.\\
              \\
              Now I help clients across the globe transform their relationships and
              overcome lifelong emotional challenges through the Personal Development School.\\
              \\
              Since co-creating the Personal Development School, and my years of research
              and client experience, I have become a leading authority on healing attachment trauma, and have built a
              thriving membership and online community, including over 15 million views on YouTube.`}
            />
          </div>

          <Image
            className="relative z-5 w-2/3 mx-auto max-w-96 
                      lg:col-span-4 lg:w-full"
            src="TrialPage/trial-page-thais.png"
          />

          <div className="hidden absolute left-0 top-0 bg-white h-[160px] w-full lg:block"> </div>
          <div className="hidden absolute left-0 top-0 bg-white h-full w-[100px] lg:block xl:w-[150px]">
            {' '}
          </div>
          {/* <div className="hidden absolute left-0 bottom-0 bg-white h-[80px] w-full xl:block"> </div> */}
        </div>
      </div>

      {/* EXPLORE OUR PROGRAMS TEXT */}
      <div
        className="max-w-lg mx-auto p-4 mt-4 
                      lg:max-w-screen-md">
        <Text.Heading className="mb-6 text-center" content="Explore Our Programs" size={3} />

        <Text
          useMD
          className="mb-4"
          content={`As an All-Access Pass member, you’ll have access to personalized programs and webinars. But with a whole
          library of amazing programs and webinars to choose from, we get that it can be hard to know where to start.\\
          \\
          This is why we have designed 8 different program tracks to guide you on which programs are best for
          your attachment style and healing goals. Each program lists which courses you should take so you have a clear and proven
          roadmap to help you get the healing you need, minus the overwhelm.\\
          \\
          **Pick a program to suit your healing goals so you can experience lasting results:**`}
        />
      </div>

      {/* COURSE SLIDER */}
      <div
        className="max-w-lg mx-auto px-4 pb-8 
                      lg:max-w-screen-lg lg:px-10">
        <CourseSlider />

        <div className="text-center">
          <ButtonCheckout
            className="trial-btn mt-6"
            label="TRY FOR $0"
            href={externalRoutes.checkout7DayTrial}
          />
          <Text className="text-sm pt-4 mb-4" content="$67/mo after 7 days. Cancel anytime." />
        </div>
      </div>

      {/* TESTIMONIAL SLIDER */}
      <Carousel.Testimonial
        classNameCard="!items-center"
        headingText="What Our Students Are Saying"
      />

      {/* FINAL OFFER */}
      <Image
        className="relative z-5 w-full lg:-mb-4"
        src="TrialPage/trial-page-footer-desktop.jpg"
      />
      <div className="relative mt-0 text-center overflow-hidden bg-gradient-to-b from-pink-tertiary to-teal-tertiary">
        <div className="p-4 lg:pb-8 xl:pb-12 2xl:pb-16 3xl:pb-20">
          <Image className="max-w-[56px] mx-auto" src="logo.svg" />

          <Text.Heading className="my-6" content="Join Over 15,000 Users Today!" size={3} />

          <Text
            useMD
            content="Discover the tools that have helped thousands heal their relationships,  
            emotions and life at the Personal Development School."
          />

          <ButtonCheckout
            className="trial-btn mt-6"
            label="TRY FOR $0"
            href={externalRoutes.checkout7DayTrial}
          />

          <Text className="text-sm pt-4 mb-4" content="$67/mo after 7 days. Cancel anytime." />
        </div>
      </div>
    </Page>
  )
}

const ChecklistItem = ({ label, className, classNameLi }: IChecklistItemProps) => {
  return (
    <div className={cx('my-7 grid grid-cols-12 items-start xl:mt-0', className)}>
      <FontAwesomeIcon
        className="w-4 p-1 mt-1 text-center border-2 rounded-full border-green-check text-green-check"
        icon={faCheck}
      />

      <Text useMD className={cx('col-span-11 pl-2', classNameLi)} content={label} />
    </div>
  )
}

const CourseSlider = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className="w-full flex relative" style={{ maxWidth: '100vw' }}>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className="!overflow-hidden !pb-8"
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{ prevEl, nextEl }}
        pagination={{
          bulletActiveClass: '!opacity-100 !w-6 !h-6 !my-0',
          bulletClass:
            'inline-block w-4 h-4 mx-1 my-1 bg-primary rounded-full opacity-50 cursor-pointer',
          clickable: true,
          // horizontalClass: 'swiper-pagination-horizontal items-center',
        }}
        slidesPerView={1}>
        {TRIAL_PAGE.courses.map((program, index) => (
          <SwiperSlide key={`program_${index}`} className="p-4 pb-6 flex items-center lg:px-8">
            <div className="p-4 pb-6 rounded-2xl shadow-centered lg:p-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <Image
                  className="rounded-2xl mb-2
                            lg:rounded-r-none lg:mb-6"
                  src={`TrialPage/${program.thumbnail}`}
                />

                <div className="lg:flex lg:flex-col lg:py-5">
                  <Text.Heading
                    className="font-semibold mb-2 lg:mb-4"
                    content={program.name}
                    size={3}
                  />

                  <Text className="mb-2 lg:mb-4" content={program.description} />

                  <div className="max-w-[200px] grid grid-cols-5 items-center mb-2 lg:mb-4 lg:mt-auto">
                    {Array(5)
                      .fill(1)
                      .map((i, ii) => (
                        <FontAwesomeIcon
                          key={`star_${ii}`}
                          className="text-yellow text-xl"
                          icon={faStar}
                        />
                      ))}
                  </div>
                </div>
              </div>

              <Text className="font-semibold mb-2 lg:mb-4" content="Courses in this Program" />

              <div className="lg:grid lg:grid-cols-2 lg:gap-x-6">
                {program.courses.map((course, index) => (
                  <div key={`course_${index}`} className="grid grid-cols-12 gap-1 mb-1 lg:mb-4">
                    <FontAwesomeIcon className="text-primary" size="lg" icon={faCheck} />

                    <Text className="col-span-11 pl-1" content={course} />
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT ARROW ICON */}
      <div
        ref={(node) => setPrevEl(node)}
        className="absolute top-1/2 -left-[14px] clickable-shadow flex w-6 h-6 flex-center rounded-full bg-primary lg:-left-8">
        <FontAwesomeIcon className="text-white text-sm" icon={faChevronLeft} />
      </div>

      {/* RIGHT ARROW ICON */}
      <div
        ref={(node) => setNextEl(node)}
        className="absolute top-1/2 -right-[14px] clickable-shadow flex w-6 h-6 flex-center rounded-full bg-primary lg:-right-8">
        <FontAwesomeIcon className="text-white text-sm" icon={faChevronRight} />
      </div>
    </div>
  )
}
