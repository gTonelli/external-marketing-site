// core
import Image from 'next/image'
// components
import { AttachmentQuizHeading } from '@/components/AttachmentQuiz/AttachmentQuizHeading'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { CarouselTestimonialAlt } from '@/components/Carousel/variants/CarouselTestimonialAlt'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Faq } from '@/components/Faq/Faq'
import { List } from '@/components/List'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { RoyalRumbleHeadline } from './RoyalRumbleHeadline'
import { faCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'
import {
  faCheckCircle,
  faCircleCheck,
  faSquareCheck,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
// config
import {
  ROYAL_RUMBLE as CONFIG,
  AGE_CONFIG,
  AGE_PRICING,
  MEL_ROBBINS_CONFIG as MR_CONFIG,
} from './config'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// utils
import { TStyle } from '@/utils/types'
import { externalRoutes } from '@/utils/constants'

export interface IQuizResultsPageProps {
  style: TStyle
  ageVariant?: boolean
  melRobbinsVariant?: boolean
  youtubeVariant?: boolean
  checkoutUrl?: string
}

export const QuizResultsPage = ({
  style,
  ageVariant = false,
  melRobbinsVariant = false,
  youtubeVariant = false,
  checkoutUrl = externalRoutes.checkoutRegularSubscription,
}: IQuizResultsPageProps) => {
  const ROYAL_RUMBLE = ageVariant ? AGE_CONFIG : melRobbinsVariant ? MR_CONFIG : CONFIG

  return (
    <>
      {/* BANNER SECTION */}
      {(style === 'da' || style === 'sa') && !melRobbinsVariant ? (
        <RoyalRumbleHeadline
          youtubeVariant={youtubeVariant}
          style={style}
          ageVariant={ageVariant}
        />
      ) : (
        <section className="w-full">
          <div className="bg-gradient-to-b from-blue-lightest to-white via-blue-lightest">
            <div className="flex flex-col justify-center items-center max-w-5xl pt-10 md:pt-20 px-4 md:mx-auto">
              <AttachmentQuizHeading
                copy={
                  youtubeVariant
                    ? ROYAL_RUMBLE[style].HERO_SECTION.headlineYT
                    : ROYAL_RUMBLE[style].HERO_SECTION.headline
                }
                className="!font-ssp !text-3xl text-center capitalize lg:!text-4xl"
              />

              <p className="max-w-3xl uppercase font-bold my-4 text-center">
                {ROYAL_RUMBLE[style].HERO_SECTION.subheadline}
              </p>

              {/* BANNER BACKGROUND */}
              <div className="max-w-5xl w-full">
                {melRobbinsVariant && (
                  <>
                    <h2 className="text-purple-dark mb-2 !text-3xl max-w-2xl mx-auto text-center hidden lg:block lg:mb-4">
                      {ROYAL_RUMBLE[style].HERO_SECTION.title}
                    </h2>

                    <p className="font-bold mb-4 hidden lg:block">
                      Our groundbreaking, proprietary process is unlike anything you’ve ever seen
                      before. It is disrupting the relationship industry, because of how fast it
                      works, and how simple it is!
                    </p>
                  </>
                )}

                <div className="flex flex-col lg:flex-row justify-center items-center space-x-6 md:px-8">
                  <div className="mb-4">
                    <h2 className="text-purple-dark mb-4 !text-3xl">
                      {youtubeVariant && ROYAL_RUMBLE[style].HERO_SECTION.titleYT}
                    </h2>

                    <VideoThumbnail
                      className="lg:max-w-screen-xs"
                      srcUrl={ROYAL_RUMBLE[style].HERO_SECTION.videoURL}
                      thumbnailAlt={
                        melRobbinsVariant
                          ? 'An image of Mel Robbins smiling'
                          : `Attachment Style: ${style} thumbnail`
                      }
                      thumbnailUrl={
                        melRobbinsVariant
                          ? 'RoyalRumblePage/mel-robbins.jpg'
                          : 'RoyalRumblePage/rr-video-thumbnail.png'
                      }
                      type="default"
                    />

                    {youtubeVariant && (
                      <>
                        <p className="max-w-md font-bold text-center mt-8">
                          {ROYAL_RUMBLE[style].BANNER_SEGMENT.copyYT}
                        </p>

                        <ButtonCheckout
                          href={checkoutUrl}
                          className="my-8 xxs:px-16"
                          label="GET STARTED NOW!"
                        />
                      </>
                    )}
                  </div>

                  {!youtubeVariant && (
                    <div className="!mx-0 lg:text-left lg:!mx-4 lg:w-1/2">
                      {melRobbinsVariant ? (
                        <>
                          <h2 className="text-purple-dark mb-2 !text-3xl max-w-2xl mx-auto text-center lg:hidden">
                            {ROYAL_RUMBLE[style].HERO_SECTION.title}
                          </h2>

                          <p className="font-bold mb-4 lg:hidden">
                            Our groundbreaking, proprietary process is unlike anything you’ve ever
                            seen before. It is disrupting the relationship industry, because of how
                            fast it works, and how simple it is! As seen with thousands of students
                            in the Personal Development School.
                          </p>
                        </>
                      ) : (
                        <h2 className="text-purple-dark mb-4 !text-3xl">
                          {ROYAL_RUMBLE[style].HERO_SECTION.title}
                        </h2>
                      )}

                      {melRobbinsVariant && (
                        <List
                          className="text-black"
                          classNameListItems="mb-2"
                          classNameIcon="!text-black w-2 h-2 !pt-1"
                          // @ts-ignore
                          listItems={ROYAL_RUMBLE[style].HERO_SECTION.list}
                          icon={faCircle}
                          iconSize="xs"
                        />
                      )}

                      {!melRobbinsVariant && <p>{ROYAL_RUMBLE[style].HERO_SECTION.copy}</p>}
                    </div>
                  )}
                </div>

                {melRobbinsVariant && (
                  <>
                    <p className="text-sm text-center mb-2 lg:mb-6">
                      {ROYAL_RUMBLE[style].HERO_SECTION.copy}
                    </p>

                    <p className="text-center mb-4 font-bold text-green-secondary lg:mb-4">
                      Your personalized course program will help you heal old attachment patterns
                      and build the best relationships of your life in as little as 90 days. It is
                      filled with video courses, simple steps to heal your attachment style,
                      workbook exercises and tools for rapid transformation.{' '}
                    </p>

                    <div className="text-center mb-4 lg:mb-0">
                      <ButtonCheckout
                        href={checkoutUrl}
                        className="xxs:px-16"
                        label="UNLOCK MY DISCOUNT"
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {youtubeVariant && (
            <RegisterNowSection
              checkoutUrl={checkoutUrl}
              ageVariant={ageVariant}
              style={style}
              melRobbinsVariant={melRobbinsVariant}
              youtubeVariant={youtubeVariant}
            />
          )}

          <div className="max-w-5xl mt-4 mx-4 md:mx-auto md:px-4">
            <div className="text-left">
              <p className="font-effra font-bold tracking-widest md:text-lg">
                ABOUT YOUR ATTACHMENT STYLE:{' '}
                <span className="text-primary">{ROYAL_RUMBLE[style].BANNER_SEGMENT.headline}</span>
              </p>

              {ROYAL_RUMBLE[style].BANNER_SEGMENT.copy.map((copy, index) => (
                <p
                  key={`banner_segment_copy_${index}`}
                  className="font-effra mt-4 md:mt-6 md:text-lg">
                  {copy}
                </p>
              ))}

              {ageVariant ? (
                <p className="mt-8 md:mt-10 md:text-lg">
                  At the Personal Development School, we have a tailored program and suite of tools
                  to assist you in changing these patterns in his little seven days. This will allow
                  you to improve existing relationships, create lasting love, and build new
                  relationships with emotionally available people. Click the button below to enroll
                  in exclusive access.
                  <strong> By signing up today, you will save $265 for a limited time.</strong>
                </p>
              ) : !youtubeVariant ? (
                <p className="font-effra mt-8 md:mt-10 md:text-lg">
                  At The Personal Development School, we have a tailored program and suite of tools
                  to assist you in changing these patterns in as little as 30 days. This will allow
                  you to improve existing relationships, create lasting love and build new
                  relationships with emotionally available people. Click the button below to enroll
                  in exclusive access.
                  <strong> This is 30% off for a limited time.</strong>
                </p>
              ) : (
                <p className="font-effra mt-8 md:mt-10 md:text-lg">
                  Too many people let their attachment styles, their beliefs, and their subconscious
                  relationship patterns control their whole lives. But that doesn’t have to be you
                  too, with our tailored programs you can find lasting change, and start building
                  the best relationships of your life today.
                </p>
              )}
            </div>

            <ButtonCheckout
              href={checkoutUrl}
              className="mt-8 xxs:px-16 md:mt-10"
              label="UNLOCK MY DISCOUNT"
            />
          </div>
        </section>
      )}
      {/* FAMILIAR SECTION*/}
      <section className="w-full mt-20">
        <Image
          alt="A green vector wave"
          tabIndex={-1}
          className="w-full mt-13 md:mt-0 md:-mb-[10px] lg:-mb-[30px] xl:-mb-[70px] 2xl:-mb-[100px] 3xl:-mb-[164px]"
          src="/images/RoyalRumblePage/familiar-section-bg.png"
          width={425}
          height={85}
          sizes="100vw"
        />

        <div className="w-full overflow-hidden bg-blue-lightest/60">
          <div className="max-w-4xl mx-4 md:mx-auto md:px-4 inset-0 mb-12 md:mb-20">
            <h2 className="capitalize mb-8 md:mb-10 text-2xl text-primary">
              Does any of this sound familiar?
            </h2>

            {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.traits.map((object, index) => (
              <div
                key={`segment_${index}`}
                className="flex flex-col md:flex-row justify-between md:space-x-5 px-0 mb-4 md:mb-6">
                {object.map((content, index) => {
                  const MARGIN = index % 2 === 0 ? 'mb-4' : ''

                  return (
                    <div key={`content_${index}`} className={`${MARGIN}`}>
                      <div className="flex row text-left">
                        <FontAwesomeIcon
                          className="text-primary mr-2 my-auto w-4 h-4"
                          icon={faSquareCheck}
                        />

                        <p className="md:text-lg font-bold font-effra capitalize">
                          {content.title}
                        </p>
                      </div>
                      <p className="max-w-md font-effra md:text-lg mt-2 text-left ml-6">
                        {content.copy}
                      </p>
                    </div>
                  )
                })}
              </div>
            ))}

            <div className="md:mt-4 text-left">
              <p className="md:text-lg font-bold font-effra">
                {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.headline}
              </p>
            </div>

            <div className="mt-4 text-left rounded-10">
              {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subHeadlineMobile.map((copy, index) => (
                <p
                  key={`familiar_segment_copy_${index}`}
                  className="font-sspb font-bold mt-4 md:hidden md:text-lg">
                  {copy}
                </p>
              ))}

              <p className="md:text-lg hidden font-bold md:block">
                {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subHeadline}
              </p>

              {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subheadlineTwo && (
                <p className="md:text-lg my-4 text-primary font-bold">
                  {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subheadlineTwo}
                </p>
              )}

              <ButtonCheckout
                href={checkoutUrl}
                className="mt-4 px-16 md:mt-10"
                label="GET STARTED"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ATTACHMENT ORIGIN SECTION */}
      <section className="w-full relative">
        <div className="max-w-4xl mt-6 md:mt-32  mx-4 md:mx-auto md:px-4 text-left">
          <h2 className="capitalize mb-8 md:mb-10 text-2xl text-primary">
            So where does your attachment style come from?
          </h2>

          <div className="mt-8 md:mt-10 flex flex-center flex-col md:flex-row md:space-x-9">
            <div>
              {ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.copy1.map((copy, index) => (
                <p key={`attachment_origin_copy_${index}`} className="mb-4 md:text-lg font-effra">
                  {copy}
                </p>
              ))}
            </div>

            <Image
              alt="A man pushing a woman sitting in a box in a new home. Both are smiling and looking forward."
              className="my-6 mx-12 md:m-0 w-3/4 sm:w-1/2 md:w-full"
              src="/images/RoyalRumblePage/attachment-origin.png"
              width={300}
              height={300}
            />
          </div>

          <div>
            <p className="md:text-lg font-effra mb-4">
              {ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.copy2}
            </p>

            <p className="md:text-lg font-bold font-effra mb-4">
              {ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.heading1}
            </p>

            <p className="md:text-lg font-bold font-effra text-primary mb-4">
              {ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.heading2}
            </p>

            {ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.heading3 && (
              <p className="md:text-lg font-bold font-effra text-primary my-4">
                {ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.heading3}
              </p>
            )}

            <ButtonCheckout href={checkoutUrl} className="px-16" label="GET STARTED" />
          </div>
        </div>
      </section>

      <section className="w-full py-8 mt-4 bg-black lg:mt-12">
        <h2 className="text-left !text-2xl lg:!text-3xl text-white pl-8 mb-2 md:text-center md:pl-0">
          Offer Ends Soon!
        </h2>

        <CountdownTimer theme="dark" />
      </section>
      {/* THAIS SECTION */}
      <div>
        <section className="w-full pt-10 md:pt-20 bg-gradient-to-b from-primary-light-4 to-primary-light-4">
          <div className="max-w-4xl mx-4 md:mx-auto md:px-4 text-left inset-0">
            <h2 className="mb-8 md:mb-10 text-2xl text-primary">Hi, I’m Thais!</h2>

            <p className="mb-4 md:text-lg">
              I have over a decade of experience as a relationship coach and counsellor and got into
              this field because I too, had a Fearful Avoidant attachment style, and was seeking
              answers and healing.
            </p>

            <p className="mb-4 md:text-lg">
              I embarked on a journey of relentless research and education which led to me
              completing a Master's Degree and more than 13 different certifications in a variety of
              psychology modalities including Cognitive Behavioral Therapy, Neuro Linguistic
              Programming, Internal Family Systems, Shadow Work and many more! I also ran a private
              practice for the last decade, working with people using the techniques in this course
              to transform lifelong relationship patterns.
            </p>

            <p className="mb-4 md:text-lg">
              Eventually, I transitioned into creating online programs - originally because my
              waitlist to see clients was over 2 years long. I have also published a best-selling
              book on this very topic, and have a Youtube channel with more than 200,000
              subscribers. After fine-tuning this powerful formula to create attachment style
              healing, I created The Personal Development School so I could share this information
              with more people.
            </p>

            <p className="mb-4 md:text-lg">
              In the past 5 years alone, I have helped thousands of students on their journey to
              healthy, happy relationships using the techniques from the program that I'm sharing
              with you today. I am humbled to say that this program has received a 99.7%
              satisfaction rate from our students!
            </p>

            <p className="md:text-lg font-bold font-effra pb-4">
              {ROYAL_RUMBLE[style].THAIS_SEGMENT.copy}
            </p>
          </div>
        </section>

        <Image
          alt="An image of Thais smiling with her head tilted. She's sitting on a white couch wearing a bluie shirt."
          className="w-full xs:hidden"
          src="/images/RoyalRumblePage/thais-bg-bottom-mobile.png"
          width={320}
          height={258}
        />
        <Image
          alt="An image of Thais smiling with her head tilted. She's sitting on a white couch wearing a bluie shirt."
          className="w-full hidden xs:block"
          src="/images/RoyalRumblePage/thais-bg-bottom.png"
          width={425}
          height={76}
          sizes="100vw"
        />
      </div>

      {/*GAIN ACCESS SECTION */}
      <section className="w-full bg-black-secondary pb-10 pt-10 md:pt-[68px]">
        <div className="max-w-4xl mx-4 md:mx-auto md:px-4 inset-0">
          <div className="flex flex-col md:flex-row -space-y-2 md:space-y-0 space-x-2 justify-center">
            <h2 className="capitalize text-2xl text-white">Gain access to your</h2>

            <h2 className="capitalize text-2xl text-teal">
              {ageVariant ? 'personalized course bundle' : 'personalized program'}
            </h2>
          </div>

          <div className="mt-8 md:mt-10 text-left">
            {ageVariant ? (
              <>
                <p className="md:text-lg font-bold text-white tracking-0.325">BUNDLE OVERVIEW</p>

                <p className="text-white mt-4 md:text-lg">
                  This online course bundle is designed to show you, step by step, how to reprogram
                  your attachment style by teaching you highly-targeted and effective tools based on
                  the latest research and my decades of experience counseling couples and
                  individuals.
                  <br />
                  <br />
                  My system differs from other personal development programs because it’s designed
                  to work directly with your subconscious mind – which is ESSENTIAL for any lasting
                  change to occur.
                  <br />
                  <br />
                  You also get access to in-depth quizzes to help you discover your secondary
                  attachment style, and how your attachment style can change with friends, family,
                  and partners. This will arm you with new awareness on which situations cause you
                  to shift into an insecure attachment style.
                </p>

                <p className="md:text-lg mt-8 font-bold font-effra text-white uppercase tracking-0.325">
                  How do the courses work?
                </p>

                <ul className="mt-4 ml-6 text-white font-effra list-decimal">
                  <li>
                    <p className="md:text-lg">
                      Sign up for the course bundle. You get access to three personalized courses in
                      your bundle: The{' '}
                      {style !== 'sa'
                        ? `${ROYAL_RUMBLE[style].TITLE} Introductory Course`
                        : 'The Repair Any Relationship Course'}
                      , The Handbook for a Better Life Course, and the Discover, Embrace and Fulfill
                      Your Personal Needs Course.
                    </p>
                  </li>

                  <li>
                    <p className="md:text-lg">
                      Make your way through the bundle’s online videos at your own pace.
                    </p>
                  </li>

                  <li>
                    <p className="md:text-lg">Access your workbooks and complete your exercises.</p>
                  </li>

                  <li>
                    <p className="md:text-lg">Get your certificate of completion.</p>
                  </li>

                  <li>
                    <p className="md:text-lg">
                      Access your course materials again whenever you need a refresh.
                    </p>
                  </li>
                </ul>

                <p className="md:text-lg mt-8 font-bold font-effra text-white uppercase tracking-0.325">
                  What Do The Courses Cover?
                </p>

                <p className="font-bold text-blue mt-4">
                  In the very first hour of your first course, you will learn three simple steps to
                  leave your painful attachment style patterns behind.
                  <br /> <br />
                  This will empower you to create more attraction, chemistry and deeper connection
                  in your love life - without the fear of losing yourself in relationships.
                </p>

                <p className="md:text-lg font-effra mt-4 text-white ">
                  The {ROYAL_RUMBLE[style].TITLE} Course Bundle gives you access to three tailored
                  online courses that you can complete on your own schedule. Through the course
                  videos, highly effective exercises, and community support, we'll tackle a list of
                  other emotional issues that you might deal with in your life that come from your
                  attachment trauma, like:
                </p>
              </>
            ) : (
              <>
                <p className="md:text-lg font-bold text-white uppercase tracking-0.325">
                  program overview
                </p>

                {ROYAL_RUMBLE[style].GAINACCESS_SEGMENT.map((copy, index) => (
                  <p key={`gain_access_${index}`} className="md:text-lg mt-4 text-white">
                    {copy}
                  </p>
                ))}

                <p className="md:text-lg mt-8 font-bold font-effra text-white uppercase tracking-0.325">
                  How do the programs work?
                </p>

                <ul className="mt-4 ml-6 text-white font-effra list-decimal">
                  {ROYAL_RUMBLE[style].HOWPROGRAMWORK_SEGMENT.map((copy, index) => (
                    <li key={`programwork_${index}`}>
                      <p className="md:text-lg">{copy} </p>
                    </li>
                  ))}
                </ul>

                <p className="md:text-lg mt-8 font-bold font-effra text-white uppercase tracking-0.325">
                  What Does The Program Cover?
                </p>

                <p className="font-bold text-blue mt-4">
                  In the very first hour of your program, you will learn three simple steps to leave
                  your painful attachment style patterns behind.
                </p>

                <p className="font-bold text-blue mt-4">
                  This will empower you to create more attraction, chemistry and deeper connection
                  in your love life - without the fear of losing yourself in relationships.
                </p>
                {ROYAL_RUMBLE[style].WHATPROGRAMCOVER_SEGMENT.copy.map((copy, index) => (
                  <p
                    key={`program_copy_${index}`}
                    className="md:text-lg font-effra mt-4 text-white ">
                    {copy}
                  </p>
                ))}
              </>
            )}
            <ul className="mt-4 !ml-6 fa-ul text-white font-effra md:text-lg">
              {ROYAL_RUMBLE[style].WHATPROGRAMCOVER_SEGMENT.bullets.map((copy, index) => (
                <li key={`programcover_${index}`}>
                  <FontAwesomeIcon
                    className="text-blue mr-2 my-auto w-4 h-4 fa-li"
                    icon={faCheckCircle}
                  />

                  <p className="my-4">{copy}</p>
                </li>
              ))}
            </ul>

            <ButtonCheckout
              href={checkoutUrl}
              className="mt-8 md:mt-10 px-16"
              label="SIGN UP NOW"
            />
          </div>
        </div>
      </section>
      {/*LEARN HOWTO SECTION */}
      <section className="w-full">
        <Image
          alt="A full width image of 5 mockups of PDS courses, products, quizzes and social events."
          className="w-full"
          src="/images/RoyalRumblePage/royal-rumble-mockup.png"
          width={425}
          height={174}
          sizes="100vw"
        />

        <div className="bg-grey-7 pb-14 md:pb-20">
          <div className="max-w-5xl mx-4 md:mx-auto inset-0 pt-14 md:pt-0">
            <h2 className="capitalize text-h3-mobile">You will learn how to:</h2>

            <div className="mt-8 md:mt-20">
              {ROYAL_RUMBLE[style].LEARNHOWTO_SEGMENT.map((object, index) => {
                const image = ROYAL_RUMBLE.LEARNHOWTO_SEGMENT_IMAGES[index]

                return (
                  <div key={`learn_${index}`} className="mb-8 md:mb-10">
                    <div className="flex row max-w-2xl items-center md:mx-auto mx-4 justify-between space-x-5 md:space-[107px]">
                      <div className="w-full max-w-sm">
                        <Image
                          alt={image.alt}
                          className="w-full h-full"
                          width={image.width}
                          height={image.height}
                          src={`/images/RoyalRumblePage/${image.deskImageURL}`}
                        />
                      </div>

                      <div
                        className={cx(
                          'py-[11px] text-left max-w-3xs',
                          index % 2 === 1 && '-order-1'
                        )}>
                        <span className="md:text-lg font-sspb capitalize text-primary">
                          {object.title}
                        </span>

                        <p className="mt-4 font-effra md:text-lg">{object.copy}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="max-w-4xl mt-20 md:mt-32 md:px-4 md:mx-auto">
              <h2 className="capitalize text-2xl text-primary text-left lg:!text-3xl">
                Use the 3 Step Formula {ageVariant && 'In Your Course Bundle'} To Create Deep
                Attachment Style Healing in {ageVariant ? '7' : '30'} Days AND Get Access to These
                Exclusive Bonuses:
              </h2>

              <div className="mt-8 md:mt-10 flex flex-col md:grid md:grid-cols-2 md:gap-4 text-left justify-between">
                <ul className="font-effra !ml-6 fa-ul max-w-md">
                  {ROYAL_RUMBLE.EXCLUSIVEBONUS_SEGMENT.map((copy, index) => (
                    <li key={`bonus_${index}`} className="mb-6">
                      <FontAwesomeIcon
                        className="text-primary mr-2 mt-1 my-auto w-4 h-4 fa-li"
                        icon={faCheckCircle}
                      />

                      <p className="md:text-lg">{copy}</p>
                    </li>
                  ))}
                </ul>

                <ul className="font-effra md:text-lg !ml-6 fa-ul max-w-md">
                  <li className="font-bold text-primary mb-4">
                    <FontAwesomeIcon
                      className="text-primary mr-2 my-auto w-4 h-4 fa-li"
                      icon={faCheckCircle}
                    />
                    Not to mention, a 7-day money-back guarantee!
                  </li>

                  {ROYAL_RUMBLE.moneyBackGuaranteeCopy.map((copy, index) => (
                    <li key={`money_back_copy_${index}`}>
                      <p className="font-effra mb-4 md:text-lg">{copy}</p>
                    </li>
                  ))}

                  <li className="mt-8 md:mt-10">
                    <ButtonCheckout href={checkoutUrl} label="ENROLL NOW" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*STILL NOT SURE SECTION */}
      <section className="w-full">
        <div className="max-w-4xl mt-6 md:mx-auto text-left md:mt-32">
          <div className="px-2 xxs:px-3 xs:px-4">
            <h2 className="capitalize text-2xl text-primary">
              Still not sure if our {ageVariant ? 'courses' : 'programs'} are right for you?
            </h2>

            <div className="mt-6 md:mt-10 flex flex-center flex-col md:grid md:gap-9 md:grid-cols-[1fr_264px]">
              <div>
                {ROYAL_RUMBLE.STILLNOTSURE_SEGMENT.copy1.map((copy, index) => (
                  <p key={`still_not_sure_copy_${index}`} className="mb-4 md:text-lg font-effra">
                    {copy}
                  </p>
                ))}
              </div>

              <Image
                alt="An elderly couple dancing and smiling in their kitchen"
                className="my-6 mx-12 md:m-0 w-3/4 sm:w-1/2 md:w-full"
                width={264}
                height={264}
                src="/images/RoyalRumblePage/rr-not-sure.png"
              />
            </div>

            <div className="mt-4">
              <p className="font-effra mb-4 md:text-lg">
                {ROYAL_RUMBLE[style].STILLNOTSURE_SEGMENT.copy2.map((copy, index) => (
                  <p key={`still_not_sure_copy_${index}`} className="mb-4 md:text-lg font-effra">
                    {copy}
                  </p>
                ))}
              </p>

              <p className="font-bold font-effra md:text-lg">
                {ROYAL_RUMBLE.STILLNOTSURE_SEGMENT.copy3}
              </p>
            </div>
          </div>

          <div className="mt-20 md:mt-32 text-center">
            <h2 className="capitalize text-xl px-2">
              Our {ageVariant ? 'Course Bundles' : 'Programs'} have helped Thousands of People
              Transform Their Lives
            </h2>

            <CarouselTestimonialAlt />

            <ButtonCheckout
              href={checkoutUrl}
              className="mt-4 md:hidden min-w-min xxs:min-w-max"
              label="START HEALING"
            />

            <ButtonCheckout
              href={checkoutUrl}
              className="hidden mt-8 !px-16 md:mt-10 md:inline-block md:mx-auto min-w-max"
              label="START MY TRANSFORMATION"
            />
          </div>
        </div>
      </section>

      {/*BEST SELF SECTION */}
      <section className="w-full mt-8 md:mt-16 bg-black pt-10 pb-8 md:pb-10">
        <div className="max-w-5xl mx-4 md:mx-auto md:px-4 mt-10 inset-0">
          <div className="flex flex-center flex-col md:flex-row md:space-x-[85px]">
            <div className="my-auto text-left">
              <h2 className="capitalize text-2xl text-primary-light">
                Picture you as your very best self; a secure self. What does that look and feel
                like?"
              </h2>

              <p className="font-effra font-bold md:text-lg mt-8 md:mt-10 text-white">
                {ROYAL_RUMBLE[style].BESTSELF_SEGMENT.subheading}
              </p>
            </div>
            <Image
              alt="An image of a woamn pulling a person by the hand. The images' point of view is from that of the person being pulled."
              className="!h-auto w-full px-16 py-8 md:p-0 sm:w-1/2"
              width={393}
              height={329}
              src="/images/RoyalRumblePage/rr-best-self.png"
            />
          </div>

          <div className="md:mt-11 text-left">
            {ROYAL_RUMBLE[style].BESTSELF_SEGMENT.bullets.map((element, index) => (
              <div
                key={`bestSelf_${index}`}
                className="flex flex-col md:grid md:grid-cols-2 mb-6 md:mb-8 md:space-x-10 justify-between">
                {element.map((content, index) => {
                  const MARGIN = index % 2 === 0 ? 'mb-6' : ''
                  return (
                    <div key={`bestSelfContent_${index}`} className={`max-w-lg ${MARGIN} md:mb-0`}>
                      <p className="font-effra font-medium text-white uppercase tracking-0.325 md:text-lg">
                        {content.title}
                      </p>

                      <p className="font-effra text-white md:text-lg mt-2">{content.copy}</p>
                    </div>
                  )
                })}
              </div>
            ))}

            <ButtonCheckout href={checkoutUrl} className="mt-2" label="I WANT THIS" />
          </div>
        </div>
      </section>
      {/* MY QUESTION SECTION */}
      <section className="w-full">
        <div className="mt-6 md:mt-32 max-w-5xl mx-4 md:mx-auto md:px-4 md:mb-10 text-left">
          <h2 className="capitalize text-2xl text-primary">
            My question to you is: can you really afford to keep going the way that you are?
          </h2>

          {ROYAL_RUMBLE[style].MYQUESTION_SEGMENT.subheading1.map((copy, index) => (
            <p key={`my_question_copy_${index}`} className="font-effra md:text-lg mt-4">
              {copy}
            </p>
          ))}

          <div className="flex flex-center flex-col md:flex-row md:space-x-11 mt-6">
            <div className="my-auto">
              <p className="text-primary font-bold">
                And what is the cost to you when you choose to do nothing?
              </p>

              <ul className="mt-4 ml-6 font-effra list-disc md:text-lg">
                {ROYAL_RUMBLE[style].MYQUESTION_SEGMENT.bullets.map((copy, index) => (
                  <li key={`programwork_${index}`} className="mb-4">
                    {copy}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              alt="A woman looking off camera to the left thoughtfully, holding her hands together."
              className="my-6 md:my-0 w-3/4 sm:w-1/2 md:3/4"
              width={295}
              height={295}
              src="/images/RoyalRumblePage/rr-myquestion.png"
            />
          </div>

          <div className="mt-6">
            <p className="mb-4 md:text-lg">
              <strong>The biggest risk you can take is doing nothing at all.</strong>
            </p>

            <p className="mb-4 md:text-lg">
              Signing up for a {ageVariant ? 'course bundle' : 'program'} at The Personal
              Development School is your chance to step in and put an end to your vicious attachment
              cycles.
            </p>

            <p className="md:text-lg">
              <strong>
                Too many people let their attachment styles, their beliefs, and their subconscious
                relationship patterns control their whole lives. But not you. It doesn’t have to be
                you too.
              </strong>
            </p>
          </div>

          <ButtonCheckout href={checkoutUrl} className="mt-6 md:mt-8" label="SIGN ME UP" />
        </div>
      </section>
      {/* REGISTER NOW SECTION */}
      {!youtubeVariant && (
        <RegisterNowSection
          checkoutUrl={checkoutUrl}
          ageVariant={ageVariant}
          style={style}
          melRobbinsVariant={melRobbinsVariant}
          youtubeVariant={youtubeVariant}
        />
      )}

      <section>
        <div
          className={`${
            youtubeVariant ? 'max-w-5xl' : 'max-w-4xl'
          } mt-6 md:mt-32 mx-4 md:mx-auto md:px-4 text-left`}>
          <h2 className="capitalize text-2xl text-primary md:mb-10">
            If you don’t make a change now, then when? And if you don’t show up for yourself … who
            will?
          </h2>

          {ROYAL_RUMBLE[style].OFFER_SEGMENT.copy.map((copy, index) => (
            <p key={`offer_copy_${index}`} className="font-effra md:text-lg mb-4">
              {copy}
            </p>
          ))}

          <ButtonCheckout
            href={checkoutUrl}
            className="mt-8 md:mt-10 md:px-20 min-w-min xxs:min-w-max"
            label="REWRITE MY STORY"
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <Faq
        className="my-16"
        classNameHeading="text-primary"
        classNameIcon="text-primary"
        faq={ROYAL_RUMBLE.FAQs}
      />
    </>
  )
}

export const RegisterNowSection = ({
  ageVariant,
  style,
  melRobbinsVariant,
  youtubeVariant,
  checkoutUrl,
}: IQuizResultsPageProps) => {
  const ROYAL_RUMBLE = ageVariant ? AGE_CONFIG : melRobbinsVariant ? MR_CONFIG : CONFIG

  return (
    <section className={`w-full ${youtubeVariant ? 'mb-10 md:mt-4 md:mb-12' : 'mt-20 md:mt-32'}`}>
      <div className="bg-gradient-to-b from-blue-lightest/50 to-primary-light/50 py-10 md:py-20">
        <div className="max-w-5xl mx-4 md:mx-auto">
          <h2 className="capitalize text-2xl text-primary">
            {style !== 'sa'
              ? ageVariant
                ? `Heal Your Attachment Style with the ${ROYAL_RUMBLE[style].TITLE} Course Bundle`
                : `Heal Your Attachment Style with the ${ROYAL_RUMBLE[style].TITLE} to Secure Attachment Program`
              : `Start Building the Relationships you Deserve with ${
                  ageVariant ? 'Secure Attachment Course Bundle' : 'the All-Access Program'
                }`}
          </h2>

          <div
            className="flex flex-center flex-col  py-10 text-left space-y-10 
                        lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="max-w-lg">
              <p className="font-effra font-bold tracking-0.325 md:text-lg">WHAT'S INCLUDED?</p>

              <p className="font-effra font-bold md:text-lg mt-3 md:mt-2">
                {ageVariant
                  ? AGE_PRICING[style].copy1
                  : style !== 'sa'
                  ? `Heal Your Attachment Style in 30 Days with the ${ROYAL_RUMBLE[style].TITLE} to Securely Attached program.`
                  : `All the tools you need to create the relationship you deserve.`}
              </p>

              {ageVariant ? (
                <List
                  icon={faCircleCheck}
                  iconSize="lg"
                  className="mt-4"
                  classNameIcon="text-primary !mt-4"
                  classNameListItems="mb-4"
                  classNameText="md:text-lg"
                  listItems={AGE_PRICING[style].list}
                />
              ) : (
                <ul className="font-effra mt-4 ml-3 list-decimal">
                  <li>
                    <p className="md:text-lg">
                      {style !== 'sa'
                        ? `The ${ROYAL_RUMBLE[style].TITLE} to Securely Attached program + coursework`
                        : `The Securely Attached program + coursework`}
                    </p>
                  </li>
                  <li>
                    <p className="md:text-lg">
                      All-access pass to The Personal Development School’s offering, granting you
                      access to:
                    </p>
                  </li>
                  <ul className="font-effra !ml-4 fa-ul">
                    {ROYAL_RUMBLE[style].OFFER_SEGMENT.bullets.map((copy, index) => (
                      <li key={`offer_${index}`}>
                        <FontAwesomeIcon
                          className="text-primary my-auto w-4 h-4 fa-li"
                          icon={faCheckCircle}
                          type="regular"
                        />
                        <p className="md:text-lg my-2 lg:my-1">{copy} </p>
                      </li>
                    ))}
                  </ul>
                </ul>
              )}
            </div>
            <div className="max-w-lg rounded-20 bg-primary-light py-11 px-4 md:px-10 text-center">
              <p
                className={`max-w-sm font-effra font-bold p-1 text-${ROYAL_RUMBLE.OFFER_CARD.headingColor} border-y-2 border-${ROYAL_RUMBLE.OFFER_CARD.headingColor} mx-auto 
                    md:uppercase md:text-lg `}>
                {ROYAL_RUMBLE.OFFER_CARD.heading}
              </p>

              <div className="max-w-3xs mt-8 mx-auto">
                <p className="font-effra font-bold md:text-lg text-center">
                  {ROYAL_RUMBLE.OFFER_CARD.subheading}
                </p>

                <p
                  className={cx(
                    'font-bold !text-[72px] text-primary after:text-sm md:after:text-lg',
                    !ageVariant && "after:content-['/month']"
                  )}>
                  {ROYAL_RUMBLE.OFFER_CARD.price}
                </p>

                <p className="md:text-lg line-through">
                  Regular Price = {ageVariant ? '$299' : '$97/month'}
                </p>
              </div>
              <div className="mt-2">
                <ul className="font-effra mt-8 ml-3 list-disc text-left">
                  <li>
                    <p className="md:text-lg">Special offer available for a limited time</p>
                  </li>
                  {!ageVariant && (
                    <li>
                      <p className="md:text-lg">
                        Get 30% off of the All-Access Pass for life if you sign up today
                      </p>
                    </li>
                  )}
                  <li>
                    <p className="md:text-lg">7-Day Money Back Guarantee, No Questions Asked!</p>
                  </li>
                </ul>

                <ButtonCheckout href={checkoutUrl} className="mt-6 md:mt-10" label="REGISTER NOW" />

                <p className="font-effra font-bold md:text-lg mt-2">
                  {ageVariant
                    ? 'SAVE AN ADDITIONAL $265 OFF THE ORIGINAL PRICE FOR A LIMITED TIME ONLY!!'
                    : 'SAVE 30% NOW'}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-center flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:px-4">
            <div className="max-w-lg">
              <Image
                alt="4 mockups on different devices of Thais teaching PDS content."
                src="/images/RoyalRumblePage/rr-offer.png"
                width={393}
                height={194}
              />
            </div>
            <div className="max-w-lg text-left">
              <p className="mb-2 md:text-lg">{`${
                style !== 'sa'
                  ? `Enroll in The ${ROYAL_RUMBLE[style].TITLE} ${ageVariant ? '' : 'to Securely'}`
                  : `Enroll in The Secure${ageVariant ? ' Attachment ' : 'ly'}`
              } ${
                ageVariant ? 'Course Bundle' : 'Attached Program'
              } now and prepare to create the safe home within yourself you’ve been looking for all along.`}</p>

              <p className="font-bold mb-2">
                If you change your mind or are unable to commit we have a full 7-day money back
                guarantee!
              </p>

              <p>
                We’re happy to process a refund for you if that’s what you choose. No hard feelings,
                and no questions asked!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
