'use client'

// core
import React, { useContext, useState } from 'react'
// components
import { Button } from '@/components/Button/Button'
import { IButtonDefaultProps } from '@/components/Button/variants/ButtonDefault'
import { Card } from '@/components/Card/Card'
import { Carousel } from '@/components/Carousel/Carousel'
import { Faq } from '@/components/Faq/Faq'
import { Icon } from '@/components/Icon'
import { Section } from '@/components/Section'
import { SocialProofBar } from '@/components/SocialProofBar'
import { ITextDefaultProps } from '@/components/Text/variants/TextDefault'
import { Video } from '@/components/Video/Video'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { List } from '@/components/List'
// libraries
import cx from 'classnames'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { useWindowWidth } from '@/utils/hooks'

import 'swiper/css'
import 'swiper/css/pagination'
import { PageContext } from '@/utils/contexts'

export const SpecialPromotion = () => {
  // ==================== Hooks ====================
  const page_name = useContext(PageContext).page_name
  const [watchedVideos, setWatchedVideos] = useState(new Set<string>())

  const onVideoStarted = (type: string) => {
    if (!watchedVideos.has(type)) {
      Mixpanel.track.VideoStarted({
        video_type: `${type} - ${page_name}`,
        page_name: page_name,
      })
    }

    setWatchedVideos(new Set<string>([...watchedVideos, type]))
  }

  return (
    <>
      <Section
        className="2xl:py-24"
        classNameInner="lg:grid lg:grid-cols-2 lg:gap-12 xl:max-w-6xl xl:items-start">
        <div className="col-start-2 lg:text-left xl:max-w-">
          <MHAPageText
            className="lg:mt-0"
            content="Does the same challenge or negative pattern keep surfacing in your life over and over again? 
            Are you still having a hard time letting go of your ex? Do you feel a burning resentment towards a family member?
            Are you struggling to form a healthy new habit no matter how hard you try? Or are your spending habits getting 
            entirely out of control?"
          />

          <MHAPageText
            content="We get it might be hard to make big life changes. That's why we’re offering a helping hand – and for free, too. 
            We’re giving you 14 days of free access to ALL of our courses, live webinars, and online support groups to give you the 
            breakthrough you need to work through whatever’s been keeping you up at night."
          />

          <MHAPageText
            className="lg:mb-0"
            content="This free trial is your chance to get to the root of your biggest emotional challenges and 
            start feeling more confident, in control, and fulfilled in every aspect of your life."
          />
        </div>

        <div className="lg:row-start-2 lg:col-span-2">
          <MHAButton />

          <Text
            className="font-bold italic mt-3"
            content="* This offer is available for a limited time *"
          />
        </div>

        <Image
          className="w-full rounded-20 my-4 lg:my-0 lg:col-start-1 lg:row-start-1"
          src="BlackFridayPage/mha-hero.jpg"
        />
      </Section>

      {/* YOUR ALL-ACCESS PASS IS THE QUICKEST AND MOST AFFRODABLE SECTION */}
      <Section className="text-white bg-black-secondary lg:pb-0 2xl:py-24 2xl:pb-0">
        <Text.Heading
          className="mb-4"
          content="Your All-Access Pass Is the Quickest and Most Affordable Way"
        />

        <Text.Paragraph
          className="font-bold text-xl !tracking-widest lg:text-3xl lg:max-w-4xl lg:mx-auto 2xl:mb-12"
          content="TO GET THE BREAKTHROUGH YOU NEED TO MAKE SURE YOU NEVER GO BACK TO YOUR OLD WAYS AGAIN."
        />

        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="text-left">
            <MHAPageText
              content="The Personal Development School is the leading online school helping over 
                200,000 members change how they think and become more fulfilled in every area of their lives."
            />

            <MHAPageText
              content="Our All-Access Pass gives you access to both the practical tools and caring 
                support you need to figure out the root cause of your painful emotions, negative thinking patterns, 
                and relationship issues so that you can change them once and for all."
            />

            <MHAPageText
              content="When you activate your 14-Day All-Access Pass, you’ll have two weeks to explore 
                all of our courses for free and start learning our scientifically-proven formulas for:"
            />
          </div>

          <div className="text-left">
            <List
              classNameIcon="!text-3xl text-yellow"
              classNameListItems="my-4 font-bold lg:my-5 lg:!pl-7"
              classNameText="lg:pl-3"
              iconName="star"
              listItems={[
                'Healing your attachment style and overcoming your greatest obstacles to happy, healthy relationships.',
                'Battling anxiety, depression, loneliness, and deep sadness.',
                'Setting life and career goals that are aligned with your unique personality needs.',
                'Breaking bad spending habits and developing a healthier relationship with money.',
                'Putting procrastination, resentment, people-pleasing and self-esteem issues to bed.',
              ]}
            />
          </div>
        </div>

        <SocialProofBar
          cardNumbers={[4100000, 33000000, 113]}
          cardTexts={['Attachment Styles Discovered', 'Youtube Views', 'Countries']}
          className="text-black"
          classNameCard="lg:pt-7 xs:!px-3 lg:pb-5"
          classNameIcon="!bg-white"
          iconImgs={[
            'BlackFridayPage/envelope-open-text.svg',
            'BlackFridayPage/users.svg',
            'BlackFridayPage/earth-americas.svg',
          ]}
        />

        {/* JOIN THOUSANDS OF OUR MEMBERS HERO SECTION */}
        <Text.Heading
          className="text-left lg:mb-12"
          content="Join Thousands of Our Members in Learning Practical, Powerful, and Proven Techniques for Creating Change That Actually Lasts."
        />

        <div className="text-left lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <MHAPageText content="Wondering why we’re giving away free access to our platform?" />

            <MHAPageText content="That’s because we know that our courses work. " />

            <MHAPageText
              content="The techniques we teach inside of The Personal Development School work directly
                with the different parts of your mind to bring you the breakthrough you need to create change that 
                lasts a lifetime."
            />

            <MHAPageText
              content="We’ve surveyed thousands of our students from around the world who have taken our 
                courses and given us honest ratings. They consistently report:"
            />

            <List
              classNameIcon="!text-white !text-xxs pt-[6px]"
              classNameListItems="font-medium my-4 text-lg"
              iconName="circle"
              listItems={[
                '3X more self-confidence and fulfillment in their dating lives (if single).',
                'A 50% improvement in their current relationship (if in a committed relationship).',
                'A 40% improvement in their self-esteem and self-talk.',
                '30% fewer anxiety and panic attacks than they had before. ',
                '90% success rate in forming a new habit within 21 days.',
              ]}
            />

            <MHAPageText
              className="lg:hidden"
              content="Whether you need help building healthier habits, understanding where your toxic relationship 
                patterns come from, or learning healthy coping mechanisms for dealing with your anxiety week to week, you’ll spend 
                the next 14 days learning essential tools that will help you create the change you’re looking for in a short amount 
                of time."
            />
          </div>

          <Image
            className="rounded-20 lg:mt-4 lg:col-span-6"
            src="BlackFridayPage/mha-woman-hugging-herself.jpg"
          />
        </div>

        <MHAPageText
          className="hidden text-left mb-0 lg:block"
          content="Whether you need help building healthier habits, understanding where your toxic relationship 
                patterns come from, or learning healthy coping mechanisms for dealing with your anxiety week to week, you’ll spend 
                the next 14 days learning essential tools that will help you create the change you’re looking for in a short amount 
                of time."
        />
      </Section>

      <Image className="w-full md:hidden" src="BlackFridayPage/black-secondary-wave.jpg" />

      <Image
        className="w-full hidden md:block"
        src="BlackFridayPage/black-secondary-wave-desktop.jpg"
      />

      {/* TESTIMONIAL CAROUSEL */}
      <div className="w-full max-w-[100vw]">
        <Carousel.Testimonial
          className="mt-6"
          classNameHeader="text-center"
          headingText="You Could Be Joining Our Members in Having Breakthroughs Like This:"
          showQuotations={false}
        />
      </div>

      {/* HERES WHAT YOU GET CARDS */}
      <Section className="bg-blue-lightest 2xl:py-24">
        <Text.Heading
          className="mb-4"
          content="Here’s What You Get With Your 14-Day All-Access Pass:"
        />

        <Card
          className="default-padding text-left border-none my-4 
            lg:grid lg:grid-cols-2 lg:gap-12 lg:p-6 lg:items-start lg:my-12 
            xl:p-8">
          <div>
            <Text
              className="text-primary font-thin italic text-2xl tracking-widest mb-2 lg:mb-6"
              content="EMPOWERING ONLINE COURSES FOR EVERY AREA OF YOUR LIFE"
            />

            <Image className="w-full" src="BlackFridayPage/dashboard-preview.jpg" />
          </div>

          <div>
            <MHAPageText
              className="lg:mt-0"
              content="Take 14 days to explore our complete list of tailed courses carefully designed to 
                help you tackle a wide range of personal challenges you might be facing, like:"
            />

            <List
              classNameIcon="!text-black text-[0.25em] pt-[6px]"
              classNameListItems="font-bold text-lg"
              iconName="circle"
              listItems={[
                'Setting boundaries to end compulsive people-pleasing',
                'Learning your relationship needs to feel truly loved',
                'Building your self-esteem',
                'Repairing your relationship',
                'Releasing resentments',
                'And many more!',
              ]}
            />

            <MHAPageText
              content="Courses range from between 1 and 3 hours in length and will give you the simple, 
                step-by-step ingredients you need to see a significant transformation in a short period of time."
            />

            <MHAPageText
              content="Each course comes with a PDF workbook filled with thought-provoking exercises you 
                can apply to your daily life to see results faster."
            />
          </div>
        </Card>

        <Card
          className="default-padding text-left border-none my-4 
            lg:grid lg:grid-cols-2 lg:gap-12 lg:p-6 lg:items-start lg:my-12 
            xl:p-8">
          <div>
            <Text
              className="text-primary font-thin italic text-2xl tracking-widest mb-2 lg:mb-6"
              content="INVITES TO WEEKLY LIVE WEBINARS AND Q&A SESSIONS"
            />

            <Image className="w-full lg:mt-20" src="BlackFridayPage/live-webinar.jpg" />
          </div>

          <div>
            <MHAPageText
              className="lg:mt-0"
              content="Get additional guidance from me as you make your way through our courses and face the deeper parts of yourself."
            />

            <List
              classNameIcon="!text-black text-[0.25em] pt-[6px]"
              classNameListItems="text-lg"
              iconName="circle"
              listItems={[
                `**Live webinars** - Each week, I’ll break down your course learnings in more detail and share practical tips and examples 
                on how to use the tools and techniques in your life.`,
                `**Q&A sessions** – got something that’s keeping you up at night? During these calls, I’ll personally answer your questions 
                and guide you in resolving your biggest challenges.`,
                `**Live webinars and Q&As** are totally optional! They are not a required part of any course but are simply there for extra 
                support and connection! I’ll be there 4X each week to answer your questions, guide you on your journey and help you see any 
                blind spots you might be missing!`,
                `**Access past recordings** – listen (or re-listen) to all of our webinars and Q&As whenever is convenient for you so you 
                never miss out.`,
              ]}
            />
          </div>
        </Card>

        <Card
          className="default-padding text-left border-none my-4 
            lg:grid lg:grid-cols-2 lg:gap-12 lg:p-6 lg:items-center lg:my-12 
            xl:p-8">
          <div>
            <Text
              className="text-primary font-thin italic text-2xl tracking-widest mb-2 lg:mb-6"
              content="A WELCOME INTO A COMMUNITY THAT TRULY UNDERSTANDS YOU"
            />

            <Image className="W-FULL" src="BlackFridayPage/socials-preview.jpg" />
          </div>

          <div>
            <MHAPageText
              className="lg:mt-0"
              content="You don’t need to go through this healing journey on your own."
            />

            <MHAPageText
              content="As a member, you can join our **online study groups, sharing circles, self-love routines** and **other 
              support groups** led by our trained coaches."
            />

            <MHAPageText
              content="Plus, you’ll also get access to our **private online forum and Facebook group,** where you can connect
              with like-minded people also working on improving their emotions, relationships and attachment styles."
            />

            <MHAPageText
              content="**This is also an optional feature** and is not required to see massive results. It’s here for daily guidance, 
              inspiration and connection with like-minded people if you find that to be a supportive part of your learning process!"
            />
          </div>
        </Card>

        <div className="lg:row-start-2 lg:col-span-2">
          <MHAButton />

          <Text
            className="font-bold italic mt-3"
            content="* This offer is available for a limited time *"
          />
        </div>
      </Section>
      {/* COURSES CAROUSEL */}
      <CarouselCourses />

      {/* THAIS SECTION */}
      <Section classNameInner="lg:grid lg:grid-cols-12 lg:gap-24 lg:items-center">
        <div className="text-left lg:col-span-7">
          <Text.Heading content="Hi! I’m Thais." />

          <MHAPageText
            className="font-medium lg:my-6"
            content="I’m a personal development expert, best-selling author and founder of 
            The Personal Development School."
          />

          <MHAPageText
            content="After completing my master’s degree, my Ph.D. and over 13 different certifications in a variety of disciplines, 
            such as Cognitive Behavioral Therapy, Hypnosis, Somatic Experiencing and more – I ran an extremely busy client-based practice 
            for the better part of a decade."
          />

          <MHAPageText
            className="lg:my-6"
            content="Now I help clients across the globe overcome lifelong emotional challenges through the Personal 
            Development School."
          />

          <MHAPageText
            content="Since co-creating the Personal Development School and my years of research and client experience, 
            I have become a leading authority on healing attachment trauma and have built a thriving membership and online community, 
            including over 15,000 members in 113+ countries worldwide, more than 21,000,000 views on YouTube and 15,000+ course enrollments."
          />
        </div>

        <Image
          className="w-full rounded-full max-w-106 lg:max-w-none lg:col-span-5 lg:p-4"
          src="thais_headshot.png"
        />
      </Section>

      {/* MENTAL HEALTH SECTION */}
      <Image className="w-full lg:hidden" src="BlackFridayPage/mha-purple-wave.jpg" />

      <Image className="w-full hidden lg:block" src="BlackFridayPage/mha-purple-wave-desktop.jpg" />

      <Section className="bg-primary-light-50 lg:pt-0 2xl:pb-24">
        <div className="lg:-mt-4 2xl:-mt-12 3xl:">
          <Text.Heading content="Can your mental health really keep taking the back seat?" />

          <MHAPageText
            className="max-w-3xl mx-auto lg:my-8"
            content="If you’re questioning whether you can make the time for your personal development in the next two weeks, ask yourself:"
          />

          <div className="lg:grid lg:grid-cols-4 lg:gap-6">
            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto">
                <Icon className="text-purple-dark text-4xl" name="eye" type="regular" />
              </div>

              <MHAPageText
                className="w-3/4 mx-auto lg:w-auto"
                content="What does my life look and feel like every day if I don’t get a hold of my anxiety?"
              />
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto">
                <Icon className="text-purple-dark text-4xl" name="heart" type="regular" />
              </div>

              <MHAPageText
                className="w-3/4 mx-auto lg:w-auto"
                content="How much will it hurt me if I find myself in yet another situationship?"
              />
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto">
                <Icon className="text-purple-dark text-4xl" name="sad-tear" type="regular" />
              </div>

              <MHAPageText
                className="w-3/4 mx-auto lg:w-auto"
                content="How disappointed will I be in myself if I break my habit streak again?"
              />
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto">
                <Icon className="text-purple-dark text-4xl" name="clock" type="regular" />
              </div>

              <MHAPageText
                className="w-3/4 mx-auto lg:w-auto"
                content="How much longer can I let my self-esteem block me from reaching my potential?"
              />
            </div>
          </div>

          <MHAPageText
            className="font-medium max-w-xl mx-auto"
            content="This limited-time offer is your call to learn everything you need to know to break your patterns once and for 
            all and start experiencing the change you want to see in your life."
          />

          <MHAPageText
            className="max-w-xl mx-auto"
            content="Don’t forget that all of our courses are self-paced courses you can work through however it works for you. 
            Many of them are as short as one hour in length!"
          />

          <MHAButton />
        </div>
      </Section>

      {/* BREATHROUGH SECTION */}
      <Section className="bg-black-secondary text-white 2xl:py-24">
        <Text.Heading content="Ready for Your First Breakthrough?" />

        <Text
          className="max-w-64 tracking-widest text-xl mb-4 mx-auto xs:tracking-0.325 xs:max-w-80 lg:text-3xl lg:!max-w-xl lg:mt-8"
          content="TRY OUR MEMBERSHIP FOR FREE FOR 14 DAYS."
        />

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:my-8">
          <Image className="w-full" src="best-value-mockup.png" />

          <div className="text-left">
            <MHAPageText className="font-medium" content="Join today and get instant access to:" />

            <List
              className="mb-4"
              classNameIcon="text-success"
              classNameListItems="my-4"
              iconName="circle-check"
              iconType="regular"
              listItems={[
                `Our complete library of video courses you can watch to manage emotions, learn new 
            coping mechanisms, and get to the bottom of your biggest challenges.`,
                `Weekly webinars and Q&A sessions where you can ask me questions and get even more 
            support (plus recordings of these sessions so you never miss out).`,
                `Community support to suit your needs, including our online forum and weekly support 
            groups led by our trained coaches.`,
              ]}
            />
          </div>
        </div>

        <MHAButton label="TRY FOR FREE FOR 14 DAYS" />

        <Text
          className="italic font-medium mt-4"
          content="* This offer is available for a limited time *"
        />
      </Section>

      {/* VIDEO SECTION */}
      <Section className="2xl:pb-24">
        <Text.Heading
          className="my-4 max-w-4xl mx-auto lg:mb-12"
          content="Curious to See How the All-Access Pass Can Change Your Life? Hit Play to Find Out What Awaits You."
        />

        <Video.Youtube
          className=" rounded-10 mx-auto"
          iframeClassName="rounded-10"
          maxHeight={432}
          thumbnail="/images/BlackFridayPage/mha-video-thumbnail.png"
          videoId="zpwXtAyKl6Q"
          onPlay={() => onVideoStarted('testimonial')}
        />
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-blue-lightest 2xl:py-24">
        <Faq.Secondary
          className="bg-transparent py-0"
          faq={ValentinesFAQs}
          subheaderTextDesktop="BEFORE STARTING YOUR FREE TRIAL"
        />
      </Section>
    </>
  )
}

export const MHAPageText = ({ className, content }: ITextDefaultProps) => (
  <Text.Paragraph useMD className={cx('text-lg my-4', className)} content={content} />
)

export const MHAButton = ({ label }: IButtonDefaultProps) => {
  // ==================== Hooks ====================
  const windowWidth = useWindowWidth().windowWidth
  const page_name = useContext(PageContext).page_name

  const onGoToCheckout = (event: React.MouseEvent<Element, MouseEvent>) => {
    Mixpanel.track.ButtonClicked({
      button_label: (event.target as HTMLButtonElement).innerText,
      page_name: page_name,
    })

    window.location.assign(EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL)
  }

  return (
    <Button
      className="px-4 xs:px-8 xs:text-xl"
      label={label ?? `START YOUR 14-DAY ${windowWidth < 375 ? 'TRIAL' : 'ALL-ACCESS PASS'}`}
      onClick={onGoToCheckout}
    />
  )
}

const courses = [
  `course-fa-to-sa.jpg`,
  `course-fa-advance.jpg`,
  `course-ap-to-sa.jpg`,
  `course-ap-advance.jpg`,
  `course-da-to-sa.jpg`,
  `course-da-advance.jpg`,
  `course-heal-from-breakup.jpg`,
  `course-emotional-mastery.jpg`,
]

const CarouselCourses = () => {
  // ==================== State ====================
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <Section className="max-w-[100vw] 2xl:pt-24" classNameInner="max-w-screen-2xl">
      <Text.Heading className="text-2xl" content="Explore Some of Our Life-Changing Courses." />

      <MHAPageText
        className="max-w-4xl mx-auto"
        content="Take a sneak peek at some of the courses that have 
            helped thousands of students break their destructive habits, build their self-esteem, release resentments, and transform 
            their lives from the inside out."
      />

      <div className="relative w-full">
        <Swiper
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            896: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 36,
            },
          }}
          className="w-full py-12 lg:px-8 lg:pb-20"
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{ prevEl, nextEl }}
          pagination={{
            clickable: true,
            renderBullet: (_, className) =>
              '<div class="w-3 h-3 bg-primary rounded-full ' + className + '"/></div>',
          }}
          slidesPerView={1}
          spaceBetween={10}>
          {courses.map((obj, index) => (
            <SwiperSlide key={`trustbar_${index}`}>
              <Image className="w-full rounded-20" src={`${obj}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT ARROW ICON */}
        <div
          ref={(node) => setPrevEl(node)}
          className="clickable-shadow hidden w-8 h-8 flex-center rounded-full bg-grey-20 absolute top-1/2 z-5
            lg:flex lg:-left-3 lg:top-[calc(50%-2rem)]
            3xl:-left-10 xl:w-10 xl:h-10">
          <Icon className="text-primary" name="chevron-left" size="lg" />
        </div>

        {/* RIGHT ARROW ICON */}
        <div
          ref={(node) => setNextEl(node)}
          className="clickable-shadow hidden w-8 h-8 flex-center rounded-full bg-grey-20 absolute top-1/2 z-5
            lg:flex lg:-right-3 lg:top-[calc(50%-2rem)]
            3xl:-right-10 xl:w-10 xl:h-10">
          <Icon className="text-primary" name="chevron-right" size="lg" />
        </div>
      </div>
    </Section>
  )
}

export const ValentinesFAQs = [
  {
    question:
      'The trial includes access to over 60 courses! Where should I start to make the most of my 14-day free trial?',
    answer: `If you haven’t already done so, go to our website and take the attachment Style Quiz to learn your attachment style. Then once you 
    have signed up for your free trial, login to the members area and download our Course Guide to discover which courses you should start with.`,
  },
  {
    question: 'What happens after my 14-day free trial expires?',
    answer: `After your trial ends, you’ll automatically become a monthly member and be charged $67/month to retain access to everything. 
    But if you feel it’s not the right fit for you, there is zero obligation and you can cancel before your trial ends by logging into the members area.`,
  },
  {
    question: 'Do I have to attend classes, or are your courses self-paced?',
    answer: `All our online courses are self-paced courses you can work through on your own time, whenever works best for you. Binge our video modules in one 
    go or spend as little as 15 minutes a day working through them.`,
  },
  {
    question: 'Can I cancel later if I become a member of The Personal Development School?',
    answer: `Absolutely! If you decide to become a member after your trial expires, you can still cancel any time. Plus, we also offer a no-questions asked 
    7-day money-back guarantee – meaning there is zero risk if you become a member.`,
  },
  {
    question: 'Can you remind me what I get access to?',
    answer: `Sure! You get access to over 60 courses to reprogram your attachment style, improve your relationships and gain emotional mastery. You also get 
    access to weekly live webinars and Q&A calls, and all of our past recordings. Plus, access to our members-only forum and Facebook group, as well as online 
    study groups and social events so you can get additional support and connect with likeminded members.`,
  },
]
