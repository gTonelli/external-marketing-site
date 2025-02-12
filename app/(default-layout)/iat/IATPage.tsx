'use client'

/* eslint-disable @typescript-eslint/no-use-before-define */
// core
import { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
// components
import { IDefaultProps } from '@/components'
import { Button } from '@/components/Button/Button'
import { Captcha } from '@/components/Captcha'
import { Dialog } from '@/components/Dialog/Dialog'
import { Expandable } from '@/components/Expandable'
import { Faq } from '@/components/Faq/Faq'
import { Page } from '@/components/Page'
import { Video } from '@/components/Video/Video'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { Input } from '@/components/Input/Input'
import { List } from '@/components/List'
import { EExternalRoutes, Regexes } from '@/utils/constants'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { Trustbar } from '@/components/Trustbar/Trustbar'
import { IAT_COPY as IAT } from './config'
import { IATBanner } from './IATBanner'
import { Loader } from '@/components/Loader'
import { CheckoutButton } from '@/components/CheckoutButton'
// libraries
import cx from 'classnames'
import { Form, Formik, FormikConfig, FormikHelpers } from 'formik'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as Yup from 'yup'
import {
  faArrowLeftLong,
  faArrowRightLong,
  faChevronDown,
  faChevronsRight,
  faCircle,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faBook, faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmarkCircle } from '@awesome.me/kit-545b942488/icons/classic/light'
import { Elements, PaymentMethodMessagingElement } from '@stripe/react-stripe-js'
import { loadStripe, StripePaymentMethodMessagingElementOptions } from '@stripe/stripe-js'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
import { useGamAnalytics } from '@/modules/GAM'
// utils
import { getSplitTest, getUserCountry, setSplitTest } from '@/utils/functions'
// styles
import 'swiper/css'
import 'swiper/css/navigation'

const TRUSTBAR = [
  `psychology-today-logo.png`,
  `forbes-logo.png`,
  `amazon-logo.png`,
  `superhuman-academy-logo.png`,
  `indigo-logo.png`,
  `success-logo.png`,
  `barnes-noble-logo.png`,
  `counseling-today-logo.png`,
  `marketwatch-logo.svg`,
  `yahoo-news-logo.png`,
]

export const IATPage = ({
  page_name,
  pageUrl = 'other',
  showLeadGenForm = false,
  showKlarnaTest = false,
}: {
  page_name: Pages
  pageUrl?: 'other' | 'ebook'
  showLeadGenForm?: boolean
  showKlarnaTest?: boolean
}) => {
  const searchParams = useSearchParams()

  // ============== Hooks =================
  const priceRef = useRef<null | HTMLDivElement>(null)
  const { getUserData } = useGamAnalytics()

  // ==================== State ====================
  const [watchedVideos, setWatchedVideos] = useState(new Set<string>())
  const [modalSuccess, setModalSuccess] = useState(false)

  useEffect(() => {
    if (pageUrl === 'ebook') if (searchParams.get('signup') === 'success') setModalSuccess(true)
  }, [pageUrl, searchParams])

  const onVideoStarted = (type: string) => {
    if (!watchedVideos.has(type)) {
      Mixpanel.track.VideoStarted({
        video_type: `${type} - ${page_name}`,
        page_name: page_name,
      })
    }

    setWatchedVideos(new Set<string>([...watchedVideos, type]))
  }

  const onClickPurchase = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (priceRef.current) priceRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const onBookNow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const url = new URL(EExternalRoutes.CALENDLY_MELANIE)

    const { gamLastTouchData } = getUserData()

    const utmParams = {
      utm_campaign: gamLastTouchData?.utm_campaign_last,
      utm_medium: gamLastTouchData?.utm_medium_last,
      utm_source: gamLastTouchData?.utm_source_last,
      utm_content: gamLastTouchData?.utm_content_last,
      utm_term: gamLastTouchData?.utm_term_last,
      wicked_source: gamLastTouchData?.wicked_source_last,
      wicked_id: gamLastTouchData?.wicked_id_last,
    }

    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) {
        url.searchParams.append(key, value)
      }
    })

    window.location.assign(url.toString())

    Mixpanel.track.ButtonClicked({
      button_label: event.currentTarget.innerText,
      page_name: page_name,
    })
  }

  return (
    <Page className="w-full" page_name={page_name}>
      {/* TOP HERO SECTION */}
      <Dialog
        className="max-w-xl p-4 bg-white rounded-20"
        isShown={modalSuccess}
        onToggle={() => setModalSuccess(!modalSuccess)}>
        <h2 className="text-4xl text-left mb-2">Thanks for Signing Up for Our Ebook!</h2>

        <p className="mb-4">
          Congratulations on starting your journey towards becoming a certified relationship coach!
          The eBook is on its way.
        </p>

        <p className="mb-4">
          I’ll be sending you the best resources and latest updates about our IAT™ Program. Stay
          tuned!
        </p>

        <p className="mb-4">
          Please continue on to learn more about what it includes, how it will change your life, and
          your exclusive offer for this revolutionary program!
        </p>

        <div className="text-center">
          <Button className="p-4" label="CONTINUE" onClick={() => setModalSuccess(false)} />
        </div>
      </Dialog>

      <Section className="w-full relative z-10 bg-blue-lightest 3xl:pb-0">
        <IATBanner page={pageUrl} onClickPurchase={onClickPurchase} />
      </Section>

      <div className="relative">
        <Image
          alt="Blue Curve Background on Mobile"
          className="w-full md:hidden"
          src="IATPage/iat-hero-bg.png"
        />

        <Image
          alt="Blue Curve Background on Desktop"
          className="w-full hidden md:block"
          src="IATPage/iat-hero-bg-desktop.png"
        />
      </div>

      {/* VIDEO SECTION */}
      <Section className="pt-9 lg:pt-16">
        {pageUrl === 'ebook' && (
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="mb-4">Unlock Your Potential With a Free Consultation</h2>

            <p className="mb-4">
              Are you excited about your career as a Certified IAT™ Coach? Discover your potential,
              unlock the key benefits of the IAT™ Program, get all your questions answered,{' '}
              <strong>and claim your special discount</strong> by booking a FREE call with our
              coaching specialist!
            </p>

            <Button
              className="trial-btn mb-16"
              label="BOOK YOUR FREE CALL NOW"
              onClick={onBookNow}
            />

            <h3 className="mb-4">Watch Below To Get The Breakdown Of Your New IAT™ Career</h3>
          </div>
        )}

        <Video.Large
          className="mx-auto shadow-centered max-w-3xl lg:p-8"
          srcUrl="https://storage.googleapis.com/pds_videos/Integrated_Attachment_Theory_2023.mp4"
          thumbnailUrl="IATPage/iat-video-thumbnail.png"
          thumbnailAlt="IAT Video Thumbnail"
          onPlay={() => onVideoStarted('default')}
        />

        <Button
          className="trial-btn mt-8 lg:mt-13"
          label="GET STARTED NOW"
          onClick={onClickPurchase}
        />
      </Section>

      {showLeadGenForm && (
        <Section classNameInner="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 !text-left">
          <div className="lg:order-2">
            <Text.Heading
              content="Ignite Your Entrepreneurial Passion: Get Your FREE E-Book to Kickstart Your Relationship Coaching Business!"
              className="mb-4"
            />

            <Text.Paragraph content="Take the first step towards success today by joining our email community. Receive exclusive offers, expert tips, and a complimentary copy of the Relationship Coaching eBook by renowned author Thais Gibson - don't miss out on this valuable resource!" />

            <IATRegistrationForm />
          </div>

          <Image
            alt="A mockup of the ebook 'Transform Your Coaching Practice"
            className="w-full max-w-xl"
            src="IATPage/iat-ebook-mockup.png"
          />
        </Section>
      )}

      {/* BECOME A RELATIONSHIP COACH SECTION */}
      <Section className="pt-0 lg:py-0" classNameInner="max-w-3xl">
        <div>
          <Text.Heading
            className="font-bold text-black text-[48px] leading-[50px]"
            content={IAT.relationship_section.heading}
          />

          <div className="text-left lg:grid lg:grid-cols-2 lg:gap-5">
            <Text.Paragraph useMD className="mt-6" content={IAT.relationship_section.copy_left} />

            <Text.Paragraph useMD className="mt-6" content={IAT.relationship_section.copy_right} />
          </div>
        </div>
      </Section>

      {/* INITIAL 4 WEEKS SECTION */}
      <div className="relative">
        <Image
          alt="Pink Wave Background on Mobile"
          className="w-full lg:hidden"
          src="IATPage/initial-weeks-bg.png"
        />

        <Image
          alt="Pink Wave Background on Desktop"
          className="w-full hidden lg:block"
          src="IATPage/initial-weeks-bg-desktop.png"
        />
      </div>

      <Section className="bg-primary-light-50 pt-0 pb-12 lg:pb-[120px]">
        <Text.Heading
          className="max-w-3xl font-bold mx-auto"
          content={IAT.initial_weeks.heading}
          size={3}
        />

        <div className="flex flex-col mt-6 space-y-8 lg:items-start lg:flex-row lg:mt-9 lg:space-y-0 lg:space-x-14">
          <Image
            alt="A Girl Using a Laptop Mockup"
            className="w-full"
            src="IATPage/initial-weeks-mockup.png"
          />

          <div className="text-center lg:text-left">
            <Text.Paragraph className="font-bold" content={IAT.initial_weeks.subheading} />

            <List
              className="mt-5 text-left"
              classNameIcon="!text-black mt-3"
              classNameListItems="mt-5"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.initial_weeks.content}
            />

            <Button
              className="trial-btn mt-9 lg:mt-7"
              label="GET STARTED NOW"
              onClick={onClickPurchase}
            />
          </div>
        </div>
      </Section>

      {/* TRAINING PROGRAM TOOLS SECTION */}
      <Section className="pt-11 pb-16 lg:py-12" classNameInner="lg:max-w-2xl">
        <Text.Paragraph
          useMD
          className="font-bold text-[18px]"
          content={IAT.trainingProgramTools}
        />

        <Button
          className="trial-btn mt-9 lg:mt-7"
          label="SIGN UP TODAY"
          onClick={onClickPurchase}
        />
      </Section>

      {/* TRUST BAR SECTION */}
      <Section className="w-full bg-grey-10 py-6 lg:py-8">
        <Text
          className="font-bold tracking-0.325 text-center lg:text-lg"
          content="OUR PRODUCTS HAVE BEEN FEATURED IN"
        />

        <Trustbar.Slider brandLogosList={TRUSTBAR} />
      </Section>

      {/* TRAINING SECTION */}
      <Section className="lg:mt-3" classNameInner="text-center lg:max-w-5xl">
        <Text.Heading
          className="text-black !text-[26px]"
          content="Where and When is the Training?"
        />

        <div className="mb-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center lg:mt-11">
          <div className="text-left lg:col-span-7">
            <Text.Paragraph useMD className="my-8 lg:my-6" content={IAT.training.copy} />
          </div>

          <Image
            alt="IAT Training at PDS Mockup"
            className="lg:col-start-8 lg:col-span-5 lg:pl-4"
            src="IATPage/iat-training-mockup.jpg"
          />
        </div>

        <Image alt="Live Icon" className="hidden mx-auto lg:block" src="IATPage/live-icon.png" />

        <Text.Heading
          className="text-black !text-[26px] mt-4"
          content="Live Training Format"
          size={3}
        />

        <div className="flex flex-col text-left mt-11 lg:flex-row space-y-10 lg:space-y-0 lg:space-x-[60px] lg:mt-13">
          <div>
            <Text.Paragraph
              className="font-effra font-bold text-purple-dark"
              content="PREREQUISITE WEEK 1-4"
              spacing="tracking-0.325"
            />

            <List
              className="mt-3"
              classNameIcon="!text-green-check"
              classNameListItems="font-bold"
              icon={faCircleCheck}
              listItems={IAT.training.live_training.prerequisite_week.heading}
            />

            <Text.Paragraph
              useMD
              className="py-8"
              content={IAT.training.live_training.prerequisite_week.copy}
            />

            <Text.Paragraph className="font-bold" content="Week One" />

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.prerequisite_week.week1}
            />

            <Text.Paragraph className="font-bold mt-6" content="Week Two" />

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.prerequisite_week.week2}
            />

            <Text.Paragraph className="font-bold mt-6" content="Week Three" />

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.prerequisite_week.week3}
            />

            <Text.Paragraph className="font-bold mt-6" content="Week Four" />

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.prerequisite_week.week4}
            />
          </div>

          <div>
            <Text.Paragraph
              className="font-effra font-bold text-purple-dark"
              content="INTENSIVE TRAINING WEEK 5-12"
              spacing="tracking-0.325"
            />

            <List
              className="mt-3"
              classNameIcon="!text-green-check"
              classNameListItems="font-bold mt-2"
              icon={faCircleCheck}
              listItems={IAT.training.live_training.intensive_week.heading}
            />

            <Text.Paragraph
              useMD
              className="pt-6 pb-12"
              content={IAT.training.live_training.intensive_week.copy}
            />

            <Text.Paragraph
              className="font-bold"
              content={IAT.training.live_training.intensive_week.features.heading}
            />

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.intensive_week.features.copy}
            />

            <Text.Paragraph
              className="font-bold mt-6"
              content={IAT.training.live_training.intensive_week.features.subheading}
            />
          </div>
        </div>

        <FontAwesomeIcon className="text-black mt-13" icon={faBook} size="3x" />

        <Text.Heading
          className="text-black !text-[26px] mt-4"
          content="On-Demand Training Format"
          size={3}
        />

        <div className="flex flex-col text-left mt-11 lg:flex-row space-y-7 lg:space-y-0 lg:space-x-[60px] lg:mt-20">
          <div className="max-w-[498px]">
            <Text.Paragraph useMD content={IAT.training.on_demand_training.left_section} />
          </div>

          <div>
            <Text.Paragraph
              className="font-bold"
              content={IAT.training.on_demand_training.right_section.heading}
            />

            <List
              className="mt-6"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.on_demand_training.right_section.course_material}
            />
          </div>
        </div>

        <div className="max-w-5xl text-center text-white bg-purple-dark rounded-3xl py-9 px-7 mt-9 lg:py-12">
          <Text.Heading
            className="!text-[26px]"
            content="Complete Your Certification Exam"
            size={3}
          />

          <Text.Paragraph
            className="mt-3"
            content="Whichever format you choose, you’ll be invited to complete your certification exam at the end of your 12 weeks."
          />
        </div>

        <Button
          className="trial-btn mt-12 lg:mt-14"
          label="GET STARTED NOW"
          onClick={onClickPurchase}
        />
      </Section>

      <IATTestimonialSection />

      {/* WHO IS THE CERTIFACTION FOR SECTION */}
      <Section className="pt-14 pb-8 lg:pb-18" classNameInner="xs:px-7">
        <div className="flex flex-col text-left space-y-6 lg:flex-row lg:space-y-0 lg:space-x-14">
          <div className="max-w-[502px]">
            <Text.Heading
              className="text-black"
              content="Who is this Certification for?"
              size={1}
            />

            <Text.Paragraph className="mt-8 lg:mt-10" content={IAT.certification.title} />

            <List
              className="mt-6"
              classNameIcon="!text-green-check"
              classNameListItems="font-bold mt-2"
              icon={faCircleCheck}
              listItems={IAT.certification.bullets}
            />

            <Text.Paragraph className="mt-8 lg:mt-8" content={IAT.certification.copy} />
          </div>

          <div>
            <Image
              alt="A Girl With A Notepad Mockup"
              className="w-full hidden lg:block"
              src="IATPage/certification-mockup.png"
            />
          </div>
        </div>

        <div className="mt-14 lg:grid lg:grid-cols-3 lg:gap-5 lg:mt-16">
          {IAT.certification.coaches.map((coach, index) => {
            return (
              <div key={`audience-${index}`} className="mt-9 lg:mt-0">
                <Image
                  alt={`IAT Coach - ${coach.title}`}
                  className="w-3/4 mx-auto max-w-64"
                  src={`IATPage/iat-coaches-${index + 1}.png`}
                />

                <Text.Paragraph
                  className="text-purple-dark font-bold my-4 lg:my-6"
                  content={coach.title}
                  spacing="tracking-0.325"
                />

                <Text.Paragraph content={coach.copy} />
              </div>
            )
          })}
        </div>

        <Button
          className="trial-btn rounded-3xl px-4 sm:px-4 xs:py-6 !mt-10  lg:!w-1/2 lg:!mt-[72px]"
          label="SAVE MORE THAN 50% NOW"
          onClick={onClickPurchase}
        />
      </Section>

      {/* WHAT YOU'LL GET SECTION */}
      <Section
        className="bg-black-secondary text-white px-7 py-8 lg:py-14"
        classNameInner="!text-left">
        <div className="flex flex-col lg:space-x-14 lg:flex-row">
          <div className="max-w-[502px] mt-6">
            <Text.Heading content="What You'll Get" />

            <Text.Paragraph useMD className="mt-10" content={IAT.what_you_get.copy} />

            <Image
              alt="IAT Certification Mockup 1"
              className="mt-10 lg:mt-15"
              src="IATPage/iat-learn-mockup.png"
            />
          </div>

          <div className="max-w-[502px]">
            {IAT.what_you_get.benefits.map((benefit, index) => (
              <div key={`benefit-${index}`}>
                <div className="flex flex-row mt-10 lg:mt-6">
                  <FontAwesomeIcon className="text-teal my-auto" icon={benefit.icon} size="lg" />

                  <Text.Paragraph
                    className="font-bold ml-5"
                    content={benefit.title}
                    spacing="tracking-0.325"
                  />
                </div>
                <Text.Paragraph className="font-normal mt-2" content={benefit.copy} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center lg:mt-28">
          <Text.Heading content="Is this certification for me?" />

          <div className="flex flex-col mt-8 lg:mt-13 lg:flex-row lg:space-x-14">
            <div className="max-w-[502px] text-center lg:text-left">
              <Image
                alt="IAT Benefits Mockup Mobile"
                className="w-full lg:hidden"
                src="IATPage/benefits-mockup.png"
              />

              <Text.Paragraph
                className="font-bold text-left mt-10 lg:mt-0"
                content="IT'S FOR EVERYONE"
                spacing="tracking-0.325"
              />

              <Text.Paragraph className="text-left mt-2" content={IAT.what_you_get.secondaryCopy} />

              <Button
                className="trial-btn border-0 mt-12 lg:mt-14"
                label="SIGN UP TODAY"
                onClick={onClickPurchase}
              />
            </div>

            <div className="max-w-[502px]">
              <Image
                alt="IAT Benefits Mockup Desktop"
                className="w-full hidden lg:block"
                src="IATPage/benefits-mockup-desktop.png"
              />
            </div>
          </div>
        </div>
      </Section>

      <div>
        <Image
          alt="Black Wave Background on Mobile"
          className="w-full -mt-4 md:hidden"
          src="IATPage/benefits-bg.png"
        />

        <Image
          alt="Black Wave Background on Desktop"
          className="w-full hidden md:block"
          src="IATPage/benefits-bg-desktop.png"
        />
      </div>

      {/* PRICE CARDS */}
      <div ref={priceRef} className="text-center mb-12 lg:mb-18">
        <IATPriceCardSection showKlarnaTest={showKlarnaTest} />

        <Text.Heading
          className="text-black text-[26px] mt-4 mb-8 mx-6"
          content={
            pageUrl === 'ebook'
              ? 'Schedule a  Free Call with our Coaching Specialist to Learn More'
              : 'Schedule a Free Call to Learn More'
          }
        />

        <Button className="trial-btn xxs:inline" label="BOOK NOW" onClick={onBookNow} />
      </div>

      {/* PROGRAM ITINERARY */}
      <Image
        alt="Grey Curve Background on Mobile"
        className="w-full md:hidden"
        src="IATPage/iat-curriculum-bg.png"
      />
      <Image
        alt="Grey Curve Background on Desktop"
        className="relative z-10 hidden w-full md:block"
        src="IATPage/iat-curriculum-bg-desktop.jpg"
      />
      <Section className="relative z-5 bg-[#e3eded80] lg:bottom-12">
        <Text.Heading
          className="text-black text-[26px] mb-4 lg:mb-16"
          content="Program Itinerary"
        />

        {IAT.itinerary.map((week, index) => (
          <IATCurriculumCard
            key={`itinerary_${index}`}
            heading={week.heading}
            initialOpenState={index == 0 ? true : false}
            listItems={week.listItems}
            textBottom={week.textBottom}
            textTop={week.textTop}
          />
        ))}

        <Button
          className="trial-btn border-0 mt-4 lg:mt-8"
          label="SIGN UP TODAY"
          onClick={onClickPurchase}
        />
      </Section>

      {/* HOW WILL YOU BE CERTIFIED SECTION */}
      <Section classNameInner="lg:max-w-5xl lg:pt-4 lg:pb-10">
        <div className="flex flex-center flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-14">
          <Image
            alt="IAT Certificate Framed on a Wall"
            className="w-full"
            src="IATPage/iat-certfication.png"
          />

          <div className="lg:min-w-[502px]">
            <Text.Heading
              className="text-black text-[32px] text-left"
              content="How Will You Be Certified?"
            />

            <Text.Paragraph
              useMD
              className="text-left mt-8 md:mt-10 md:text-lg"
              content={IAT.how_to_certify.copy}
            />

            <Button
              className="trial-btn mt-10 xxs:inline"
              label="GET STARTED NOW"
              onClick={onClickPurchase}
            />
          </div>
        </div>

        <div className="flex flex-center flex-col space-y-6 mt-12 lg:flex-row lg:space-y-0 lg:space-x-14">
          <div className="lg:min-w-[502px]">
            <Text.Heading className="text-black text-[32px] text-left" content="Thais Gibson" />

            <Text.Paragraph
              useMD
              className="text-left mt-8 mb-4 md:mt-10 md:text-lg"
              content={IAT.thais_section.copy}
            />
          </div>

          <Image
            alt="Thais Gibson's Portrait"
            className="w-full"
            src="IATPage/thais-portrait.png"
          />
        </div>
      </Section>

      {/* IMPACT SECTION */}
      <Section className="bg-primary-light-50" classNameInner="py-9 lg:pt-1 lg:pb-4">
        <Text.Heading
          className="text-black text-[26px] text-center"
          content={IAT.thais_section.subsection.heading}
          size={3}
        />

        <div className="flex flex-col space-y-6 mt-8 lg:flex-row lg:space-y-0 lg:space-x-[72px] lg:mt-11">
          <Image
            alt="A Man Indulged in Deep Thinking"
            className="w-full"
            src="IATPage/iat-impact.png"
          />

          <div className="text-center lg:text-left">
            <Text.Paragraph
              useMD
              className="text-black text-left"
              content={IAT.thais_section.subsection.subheading}
            />

            <ul className="font-effra text-left mt-4 ml-4 list-decimal">
              {IAT.thais_section.subsection.copy.map((copy, index) => (
                <li key={`imapct_${index}`}>
                  <Text.Paragraph className="mt-4" content={copy} />
                </li>
              ))}
            </ul>

            <Button
              className="trial-btn mt-7 xxs:inline"
              label="GET STARTED NOW"
              onClick={onClickPurchase}
            />
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL VIDEO SECTION */}
      <Section className="2xl:pb-24">
        <Text.Heading
          className="my-4 max-w-4xl mx-auto lg:mb-12"
          content="Here's What Our Students Say:"
        />

        <VideoThumbnail
          thumbnailUrl="IATPage/IAT-testimonial-thumbnail.png"
          thumbnailAlt="IAT Testimonial Thumbnail"
          srcUrl="https://storage.googleapis.com/pds_videos/Integrated_attachment_theory_coaching_training_testimonials.mp4"
          type="testimonial"
        />
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-blue-lightest py-0 lg:py-5">
        <Faq.Secondary
          className="bg-transparent py-0"
          classNameFAQ="mx-0"
          faq={IAT.faq}
          headerText="Frequently Asked Questions"
          subheaderTextDesktop=""
          subheaderTextMobile=""
        />
      </Section>
    </Page>
  )
}

const iatRecordedPrices: TIATPrice[] = [
  {
    price: '$1,999.00',
    priceLabel: '',
    bottomText: 'ONE TIME PAYMENT',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_RECORDED_UPFRONT,
  },
  {
    price: '$689.00',
    priceLabel: '/ month',
    bottomText: '3 MONTH PAYMENT PLAN',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_RECORDED_3_MONTH_PLAN,
  },
  {
    price: '$359.00',
    priceLabel: '/ month',
    bottomText: '6 MONTH PAYMENT PLAN',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_RECORDED_6_MONTH_PLAN,
  },
  {
    price: '$189.00',
    priceLabel: '/ month',
    bottomText: '12 MONTH PAYMENT PLAN',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_RECORDED_12_MONTH_PLAN,
  },
]

const iatLivePrices: TIATPrice[] = [
  {
    price: '$3,499.00',
    priceLabel: '',
    bottomText: 'ONE TIME PAYMENT',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_SPRING_2025_UPFRONT,
  },
  {
    price: '$1,209.00',
    priceLabel: '/ month',
    bottomText: '3 MONTH PAYMENT PLAN',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_SPRING_2025_3_MONTH_PLAN,
  },
  {
    price: '$629.00',
    priceLabel: '/ month',
    bottomText: '6 MONTH PAYMENT PLAN',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_SPRING_2025_6_MONTH_PLAN,
  },
  {
    price: '$339.00',
    priceLabel: '/ month',
    bottomText: '12 MONTH PAYMENT PLAN',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_SPRING_2025_12_MONTH_PLAN,
  },
]

type TIATPrice = {
  price: string
  priceLabel?: string
  bottomText: string
  link: EExternalRoutes
}

interface IIATPriceCard {
  benefits: string[]
  heading: string
  isLive?: boolean
  originalPrice?: string
  prices: TIATPrice[]
  salePrice: string
  subheading?: string
}

const IATPriceCard = ({
  benefits,
  heading,
  isLive = false,
  originalPrice,
  prices,
  salePrice,
  subheading,
}: IIATPriceCard) => {
  // ================== State =============
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)
  const router = useRouter()

  return (
    <>
      {!isExpanded ? (
        isLive ? (
          // LIVE, NOT EXPANDED
          <Section className="relative rounded-3xl border-2 border-green-check px-3 pt-4 pb-4 lg:px-4 lg:pb-6 lg:pt-6">
            <div className="absolute -mt-24 left-1/2 -translate-x-1/2 ">
              <Text.Paragraph
                className="w-[280px] text-center text-white font-bold bg-green-check rounded-10 py-4 md:px-4"
                content="RECOMMENDED"
                spacing="tracking-0.325"
              />
            </div>

            <Image alt="Live Icon Red" className="mx-auto" src="IATPage/live-icon-red.png" />

            <Text.Heading className="mt-5" content={heading} />

            {originalPrice && (
              <Text.Paragraph
                className="font-bold line-through mt-1"
                content={originalPrice}
                spacing="tracking-0.325"
              />
            )}

            {subheading && (
              <Text.Paragraph
                className="font-bold mt-5"
                content={subheading}
                spacing="tracking-0.325"
              />
            )}
            <div className="flex flex-center flex-row mt-1">
              <Text.Paragraph
                className="font-ssp font-bold !text-green-check !text-[26px]"
                content="50% OFF:&nbsp;"
              />

              <Text.Heading className="mt-1 mb-0" content={` ${salePrice}`} size={3} />
            </div>

            <List
              className="text-left mt-7"
              classNameIcon="!text-green-check"
              classNameListItems="mt-4"
              icon={faCircleCheck}
              listItems={benefits}
            />

            <Button
              className="w-max mx-auto trial-btn mt-12 lg:mt-14"
              label="SEE PRICES"
              onClick={() => setIsExpanded(true)}
            />

            <Text.Paragraph
              className="italic mt-3"
              content="Book a call to get additional 5% OFF"
            />
          </Section>
        ) : (
          // RECORDED, NOT EXPANDED
          <Section
            className="flex flex-col relative rounded-3xl shadow-2xl px-3 pt-4 pb-4 lg:px-4 lg:pb-6 lg:pt-6"
            classNameInner="flex flex-col flex-grow">
            <Text.Heading content={heading} />

            {originalPrice && (
              <Text.Paragraph
                className="font-bold line-through mt-1"
                content={originalPrice}
                spacing="tracking-0.325"
              />
            )}

            <div className="flex flex-center flex-row mt-1">
              <Text.Paragraph
                className="font-ssp font-bold !text-green-check !text-[26px]"
                content="50% OFF:&nbsp;"
              />

              <Text.Heading className="mt-1 mb-0" content={` ${salePrice}`} size={3} />
            </div>

            {subheading && (
              <Text.Paragraph
                className="font-bold mt-5"
                content={subheading}
                spacing="tracking-0.325"
              />
            )}

            <div className="grid grid-cols-3 gap-9 mt-4">
              <div className="font-bold border rounded-10 py-3">
                <Text.Paragraph content="3 Months" />

                <Text.Paragraph content="$689/m" />
              </div>

              <div className="font-bold border rounded-10 py-3">
                <Text.Paragraph content="6 Months" />

                <Text.Paragraph content="$359/m" />
              </div>

              <div className="font-bold border rounded-10 py-3">
                <Text.Paragraph content="12 Months" />

                <Text.Paragraph content="$189/m" />
              </div>
            </div>

            <List
              className="text-left mt-7"
              classNameIcon="!text-green-check"
              classNameListItems="mt-4"
              icon={faCircleCheck}
              listItems={benefits}
            />

            <Button
              className="trial-btn mt-12 w-max mx-auto lg:mt-14"
              label="SEE PRICES"
              onClick={() => setIsExpanded(true)}
            />

            <Text.Paragraph
              className="italic mt-3"
              content="Book a call to get additional 5% OFF"
            />
          </Section>
        )
      ) : (
        // EXPANDED
        <Section
          className={`relative rounded-3xl ${
            isLive ? 'border-2 border-green-check' : 'shadow-2xl'
          } px-3 pt-16 pb-12 lg:px-11`}>
          {isLive && (
            <div className="absolute -mt-24 left-1/2 -translate-x-1/2 ">
              <Text.Paragraph
                className="w-[280px] text-center text-white font-bold bg-green-check rounded-10 py-4 md:px-4"
                content="RECOMMENDED"
                spacing="tracking-0.325"
              />
            </div>
          )}

          {originalPrice && (
            <Text className="text-xl font-medium line-through" content={originalPrice} />
          )}

          <Text.Heading className="text-black mb-6" content={salePrice} size={1} />

          {subheading && (
            <Text className="tracking-[0.2em] font-semibold mb-4" content={subheading} />
          )}

          <div className="grid grid-cols-2 items-center gap-2 border-grey border-t-2 py-2 mb-2 lg:gap-4">
            {prices.map((data, index) => (
              <div
                key={`price_${index}`}
                className={`p-2 rounded-10 col-span-2 border-2 border-purple-dark cursor-pointer
                lg:hover:bg-gray-light lg:p-3 ${
                  selectedCardIndex === index
                    ? 'bg-purple-dark text-white lg:hover:!bg-purple-medium lg:hover:!border-purple-medium'
                    : ''
                }`}
                onClick={() => setSelectedCardIndex(index)}>
                <div className="flex items-start mb-2">
                  {selectedCardIndex === index ? (
                    <FontAwesomeIcon className="pt-[5px] text-white" icon={faCircleCheck} />
                  ) : (
                    <FontAwesomeIcon className="pt-[5px] text-black" icon={faCircle} />
                  )}

                  <div className="flex items-end">
                    <Text
                      className={`inline font-sspb !text-4xl text-black mx-2 ${
                        selectedCardIndex === index ? 'text-white' : 'text-black'
                      }`}
                      content={data.price}
                    />

                    <Text className="inline text-lg font-medium" content={data.priceLabel} />
                  </div>
                </div>

                <Text.Paragraph
                  className="text-left tracking-[0.2em] font-medium font-xl"
                  content={data.bottomText}
                />
              </div>
            ))}

            <Button
              className="!text-black border-purple-dark border-2 bg-white"
              label="BACK"
              onClick={() => setIsExpanded(false)}
            />

            <CheckoutButton
              className="trial-btn"
              label="BUY NOW"
              href={prices[selectedCardIndex].link}
              mpProps={{
                plan_pricing: prices[selectedCardIndex].bottomText,
                plan_type: `${isLive ? 'live' : 'recorded'}`,
              }}
            />
          </div>
        </Section>
      )}
    </>
  )
}

interface IIATCurriculumCardProps {
  heading: string
  textTop?: string
  listItems: string[]
  textBottom?: string
  initialOpenState?: boolean
}

const IATCurriculumCard = ({
  heading,
  textTop = "In this week's module, you'll learn:",
  listItems,
  textBottom = "Plus, you'll get the recorded Q&A session.",
  initialOpenState = false,
}: IIATCurriculumCardProps) => {
  // ============State ===============
  const [isOpen, setIsOpen] = useState(initialOpenState)

  return (
    <div
      className="text-left rounded-20 border-2 border-blue bg-white p-4 cursor-pointer pb-2 my-4 lg:my-8 lg:hover:bg-gray-50 lg:p-8 lg:pb-4"
      onClick={() => setIsOpen(!isOpen)}>
      <div className="w-full flex justify-between items-center pb-2 lg:pb-4">
        <Text className="font-semibold uppercase" content={heading} />

        <FontAwesomeIcon
          className={`text-primary transition-all font-semibold text-xl ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
          icon={faChevronDown}
        />
      </div>
      <Expandable className="" open={isOpen} trigger="">
        <Text.Paragraph
          className="border-t-2 border-blue pt-2 mb-2 lg:pt-4 lg:mb-4"
          content={textTop}
        />

        <List
          className="my-2 lg:my-3"
          classNameIcon="!text-blue !pt-1"
          classNameListItems="my-2"
          icon={faChevronsRight}
          listItems={listItems}
        />
        <Text.Paragraph className="my-2 lg:my-4" content={textBottom} />
      </Expandable>
    </div>
  )
}

const stripe = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_TX9ha9wfpmmbbQF0kpuVuNRl00r3Lanubq',
  { stripeAccount: 'acct_1Pv1BOCWMNXx1IFm' }
)

const IATPriceCardSection = ({ showKlarnaTest }: { showKlarnaTest: boolean }) => {
  const [countryCode, setCountryCode] = useState<string | undefined>()
  const [isVariant, setIsVariant] = useState<boolean | undefined>()
  console.log('showklarna', showKlarnaTest)
  useEffect(() => {
    if (!showKlarnaTest) {
      setCountryCode('Unknown')
      return setIsVariant(false)
    }
    const abortController = new AbortController()
    getUserCountry().then((countryCode) => {
      if (abortController.signal.aborted) return
      if (countryCode !== 'US') {
        setIsVariant(false)
        setSplitTest({ key: 'PROD-3571', value: false })
      } else {
        setIsVariant(
          getSplitTest({
            key: 'PROD-3571',
            experimentName: 'PROD-3571-Klarna-Test',
            props: { countryCode },
          })
        )
      }
      setCountryCode(countryCode)
    })

    return () => {
      abortController.abort()
    }
  }, [showKlarnaTest])

  if (!countryCode || isVariant === undefined) return <Loader className="!py-96" />

  return (
    <Section classNameInner="max-w-md mt-12 lg:max-w-5xl lg:mt-0">
      <div className="lg:grid-cols-2 lg:grid lg:gap-8">
        <Elements stripe={stripe}>
          <IATPriceCard
            isLive
            benefits={IAT.price.live_mode}
            heading="Live Training"
            originalPrice={'$7,000.00'}
            prices={iatLivePrices}
            salePrice={'$3,499.00'}
          />

          <IATPriceCard
            benefits={IAT.price.recorded_mode}
            heading="On Demand"
            originalPrice={'$4,000.00'}
            prices={iatRecordedPrices}
            salePrice={'$1,999.00'}
            subheading={`MONTHLY INSTALLMENT PAYMENT OPTIONS AVAILABLE:'`}
          />
        </Elements>
      </div>
    </Section>
  )
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface ContactUsVariables {
  name: string
  email: string
  captcha: string
}

interface IFormDefaultProps<Values>
  extends Omit<FormikConfig<Values>, 'initialValues'>,
    IDefaultProps {
  initialValues?: Values
}

const schema: Yup.Schema<ContactUsVariables> = Yup.object({
  name: Yup.string().defined().ensure().required('Name is required').default(''),
  email: Yup.string()
    .defined()
    .ensure()
    .required('E-mail is required')
    .matches(Regexes.email, 'Email must be valid')
    .default(''),
  captcha: Yup.string().defined().ensure().required(),
})

export type TFormContactUs = Yup.InferType<typeof schema>
const initialValues = schema.cast({}) as TFormContactUs

interface IFormContactUsProps<TForm> extends IFormDefaultProps<TForm> {}

const IATFormContactUs = (props: IFormContactUsProps<TFormContactUs>) => {
  const defaultInputClasses = '!rounded-10  border-1 border-primary !border-solid py-3 mt-4'

  return (
    <Formik<TFormContactUs> {...props} initialValues={initialValues} validationSchema={schema}>
      {({ setFieldValue }) => (
        <Form className="flex flex-col justify-start">
          <Input.Field
            noStyles
            classNameInput={cx(defaultInputClasses)}
            name="name"
            placeholder="Name"
          />

          <Input.Field
            noStyles
            classNameInput={cx(defaultInputClasses)}
            name="email"
            placeholder="Email"
            type="email"
          />

          <Captcha
            className={
              (cx(defaultInputClasses),
              'transform origin-left scale-[80%] sm:transform-none sm:pt-4')
            }
            onError={() => setFieldValue('captcha', false)}
            onSuccess={(val) => {
              setFieldValue('captcha', val)
            }}
          />

          <Button.Submit className="px-8 mt-8 rounded-full" label="Submit" />
        </Form>
      )}
    </Formik>
  )
}

const IATTestimonialSection = () => {
  // ==================== State ====================
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <Section
      className="relative max-w-7xl mx-auto py-8 px-0 xxs:px-0 xs:px-0"
      classNameInner="lg:max-w-7xl">
      <Swiper
        centeredSlides
        loop
        autoplay={{
          delay: 6000,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="!overflow-hidden !px-4 mb-4"
        wrapperClass="!pb-4"
        modules={[Autoplay, Navigation]}
        navigation={{ prevEl, nextEl }}
        slidesPerView={1}
        spaceBetween={16}>
        {IAT.testimonials.map((testimonial, index) => (
          <SwiperSlide key={`iat_testimonial_${index}`} className="!h-auto">
            {({ isActive }) => (
              <div
                className={`w-full h-full ${
                  !isActive && 'bg-gray-bg-primary opacity-50'
                } rounded-3xl shadow-lg transition-colors my-2 p-8`}>
                <Image
                  alt="Quotation Icon"
                  className="!w-16 h-auto rotate-180"
                  src="TrialHeadspace/quotation-left.png"
                />

                <Text.Paragraph className="text-left mt-8" content={testimonial.review} />

                <Text.Paragraph className="text-left font-bold mt-4" content={testimonial.author} />

                <Text.Paragraph className="text-left" content={testimonial.designation} />

                <Text.Paragraph className="text-left italic mt-4" content={testimonial.location} />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute flex right-9 bottom-0">
        <div ref={(node) => setPrevEl(node)} className="mx-2">
          <FontAwesomeIcon icon={faArrowLeftLong} size="lg" />
        </div>

        <div ref={(node) => setNextEl(node)} className="mx-2">
          <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
        </div>
      </div>
    </Section>
  )
}

const RegistrationFormValidationSchema = Yup.object()
  .shape({
    firstName: Yup.string().defined().ensure().required('First name required'),
    email: Yup.string().defined().ensure().required('Email required'),
  })
  .defined()

export interface IRegistrationFormSchema
  extends Yup.InferType<typeof RegistrationFormValidationSchema> {}

const registrationFormInitialValues: IRegistrationFormSchema =
  RegistrationFormValidationSchema.cast({})

const IATRegistrationForm = () => {
  const [formSubmissionSuccess, setFormSubmissionSuccess] = useState(false)
  const [formSubmissionError, setFormSubmissionError] = useState('')

  const onSubmit = async (values: IRegistrationFormSchema, formikHelpers: FormikHelpers<any>) => {
    setFormSubmissionError('')
    await fetch('https://strapi.personaldevelopmentschool.com/api/register', {
      method: 'POST',
      body: JSON.stringify({
        email: values.email,
        firstName: values.firstName,
        tags: ['iat-tips-ebook'],
        listIds: [54],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          throw typeof data.message === 'string' ? data.message : 'An unexpected error occured!'
        }
        formikHelpers.setSubmitting(false)
        setFormSubmissionSuccess(true)

        Mixpanel.setUser(values.email)
        Mixpanel.track.SignUp({ distinct_id: values.email })
      })
      .catch((err: any) => {
        formikHelpers.setSubmitting(false)
        setFormSubmissionError(typeof err === 'string' ? err : 'An unexpected error occured!')
      })
  }

  if (formSubmissionSuccess)
    return (
      <div className="p-4 bg-success text-white mt-4 rounded-lg">
        <Text.Heading className="mb-2" content="Welcome to our email community!" size={4} />

        <Text.Paragraph content="Your free ebook is en route to your inbox! Stay tuned for more exciting updates, exclusive offers, and valuable content. And most of all enjoy!" />
      </div>
    )

  return (
    <Formik
      initialValues={registrationFormInitialValues}
      validateOnBlur={false}
      validationSchema={RegistrationFormValidationSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form className="w-full max-w-xl mx-auto">
          <div className="flex">
            <Input.Field className="mx-0 mr-4 flex-1" label="Your First name" name="firstName" />

            <Input.Field className="mx-0 flex-1" label="Email Address" name="email" />
          </div>

          {formSubmissionError && (
            <div className="flex items-center p-4 bg-danger text-white mt-4 rounded-lg">
              <FontAwesomeIcon className="mr-4" icon={faXmarkCircle} />

              <Text.Paragraph content={formSubmissionError} />
            </div>
          )}

          <Button.Submit
            className="block w-full font-bold text-base self-start text-center rounded-full tracking-widest mt-4"
            disabled={isSubmitting}
            label={'SUBMIT'}
          />
        </Form>
      )}
    </Formik>
  )
}

function getPaymentMethodMessagingElementOptions(
  countryCode: string | undefined,
  type: 'live' | 'recorded'
): StripePaymentMethodMessagingElementOptions | undefined {
  switch (countryCode) {
    case 'CA':
      return type === 'recorded'
        ? {
            amount: 289900,
            currency: 'CAD',
            countryCode: 'CA',
            paymentMethodTypes: ['klarna'],
          }
        : {
            amount: 499900,
            currency: 'CAD',
            countryCode: 'CA',
            paymentMethodTypes: ['klarna'],
          }
    default:
      return type === 'recorded'
        ? {
            amount: 199900,
            currency: 'USD',
            countryCode: 'US',
            paymentMethodTypes: ['klarna'],
          }
        : {
            amount: 349900,
            currency: 'USD',
            countryCode: 'US',
            paymentMethodTypes: ['klarna'],
          }
  }
}
