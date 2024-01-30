'use client'

//core
import React, { useCallback, useEffect, useState } from 'react'
// components
import { Page } from '@/components/Page'
import { Text } from '@/components/Text/Text'
import { Video } from '@/components/Video/Video'
import { Button } from '@/components/Button/Button'
import { Image } from '@/components/Image'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Faq } from '@/components/Faq/Faq'
import { Icon } from '@/components/Icon'
import { ROYAL_RUMBLE } from './config'
import { Loader } from '@/components/Loader'
// libraries
import Cookies from 'universal-cookie'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { TStyle } from '@/utils/types'
import { getOfferEndDate } from '@/utils/functions'

import 'swiper/css'
import 'swiper/css/pagination'

export interface IAttachmentStylePageParams {
  style: TStyle
}

const cookies = new Cookies()

declare global {
  interface Window {
    $crisp: any[]
    CRISP_WEBSITE_ID: string | undefined
  }
}

export default function RoyalRumble({ params }: { params: { style: TStyle } }) {
  const style = params.style

  // ==================== Hooks ====================
  const page_name = `vsl-${ROYAL_RUMBLE[style].TITLE}` as Pages

  // ==================== State ====================
  const [titleStart, setTitleStart] = useState('')
  const [offerEndDate, setOfferEndDate] = useState<Date | undefined>()

  const userFirstName = Storage.get('userFirstName')

  const getTitleStart = useCallback(() => {
    if (!userFirstName) return `You have `
    return `${userFirstName}, you have `
  }, [userFirstName])

  useEffect(() => {
    document.title = page_name

    setTitleStart(getTitleStart() + `${style === 'ap' ? 'an' : 'a'}`)
    setOfferEndDate(getOfferEndDate(new Date(`2023-01-21T00:00:00`), 1))
  }, [getTitleStart, page_name, style])

  //============================ Events ========================================
  const onGoToCheckout = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      Mixpanel.track.ButtonClicked({
        button_label: (event.target as HTMLButtonElement).innerText,
        page_name: page_name,
      })

      window.location.assign(EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION)
    },
    [style, ROYAL_RUMBLE]
  )

  return (
    <Page className="w-full text-center z-10" page_name={`vsl-${style}`}>
      {/* BANNER SECTION */}
      <section className="w-full">
        <div className="relative max-w-[1008px] mt-10 md:mt-20 mx-4 md:w-calc(100%-2rem) lg:mx-auto px-9 md:px-22 py-10">
          {/* INTRO BACKGROUND */}
          <div className="bg-grey opacity-10 inset-0 rounded-20 absolute w-full"> </div>
          {/* TITLE + VIDEO */}
          <div className="text-left flex flex-center flex-col md:grid md:grid-cols-2 md:gap-8">
            <div className="my-auto">
              <Text.Heading
                className="inline capitalize lg:block"
                content={titleStart + ' '}
                size={2}
              />

              <Text.Heading
                className="inline capitalize text-primary lg:block"
                content={ROYAL_RUMBLE[style].TITLE + ' '}
                size={2}
              />

              <Text.Heading
                className="inline capitalize lg:block"
                content="Attachment Style"
                size={2}
              />
            </div>

            <div className="mt-10 md:mt-0">
              <Video.Thumbnail
                playButtonSize="medium"
                srcUrl={ROYAL_RUMBLE[style].YOUTUBE_URL}
                style={{ maxWidth: '415px', borderRadius: '20px' }}
                thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
                onClick={() =>
                  Mixpanel.track.VideoStarted({
                    video_type: `default - ${page_name}}`,
                    page_name: page_name,
                  })
                }
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1024px] mt-8 md:mt-10 mx-4 md:mx-auto md:px-4">
          <div className="text-left">
            <Text.Paragraph
              className="font-effra font-bold uppercase md:text-lg"
              content={ROYAL_RUMBLE[style].BANNER_SEGMENT.headline}
              spacing="tracking-0.325"
            />

            <Text.Paragraph
              className="font-effra mt-8 md:mt-10 md:text-lg"
              content={ROYAL_RUMBLE[style].BANNER_SEGMENT.copy}
            />

            <Text.Paragraph
              useMD
              className="font-effra mt-8 md:mt-10 md:text-lg"
              content={ROYAL_RUMBLE.firstOfferCopy}
            />
          </div>

          <Button
            className="bg-primary mt-8 xxs:px-16 md:mt-10"
            label="UNLOCK MY DISCOUNT"
            onClick={onGoToCheckout}
          />
        </div>
      </section>
      {/* FAMILIAR SECTION*/}
      <section className="w-full mt-20">
        <Image
          className="w-full mt-13 md:mt-0 md:-mb-[10px] lg:-mb-[30px] xl:-mb-[70px] 2xl:-mb-[100px] 3xl:-mb-[164px]"
          src="RoyalRumblePage/familiar-section-bg.png"
        />

        <div className="w-full overflow-hidden bg-blue-lightest/60">
          <div className="max-w-[850px] mx-4 md:mx-auto md:px-4 inset-0 mb-12 md:mb-20">
            <Text.Heading
              className="capitalize mb-8 md:mb-10 text-2xl text-primary"
              content="Does any of this sound familiar?"
            />

            {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.traits.map((object, index) => (
              <div
                key={`segment_${index}`}
                className="flex flex-col md:flex-row justify-between md:space-x-5 px-0 mb-4 md:mb-6">
                {object.map((content, index) => {
                  const MARGIN = index % 2 === 0 ? 'mb-4' : ''

                  return (
                    <div key={`content_${index}`} className={`${MARGIN}`}>
                      <div className="flex row text-left">
                        <Icon
                          className="text-primary mr-2 my-auto w-4 h-4"
                          name="square-check"
                          type="regular"
                        />
                        <Text.Paragraph
                          className="md:text-lg font-bold font-effra capitalize"
                          content={content.title}
                        />
                      </div>
                      <Text.Paragraph
                        className="max-w-[415px] font-effra md:text-lg mt-2 text-left ml-6"
                        content={content.copy}
                      />
                    </div>
                  )
                })}
              </div>
            ))}

            <div className="-mt-2 md:mt-4 text-left">
              <Text.Paragraph
                className="md:text-lg font-bold font-effra"
                content={ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.headline}
              />
            </div>

            <div className="mt-10 rounded-10 text-left">
              <Text
                useMD
                className="md:text-lg font-sspb capitalize md:hidden"
                content={ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subHeadlineMobile}
              />

              <Text
                useMD
                className="md:text-lg capitalize hidden md:block"
                content={ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subHeadline}
              />

              {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subheadlineTwo && (
                <Text
                  useMD
                  className="md:text-lg my-4 text-primary"
                  content={ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subheadlineTwo}
                />
              )}

              <Button
                className="bg-primary mt-8 px-16 md:mt-10"
                label="GET STARTED"
                onClick={onGoToCheckout}
              />
            </div>
          </div>
        </div>
      </section>
      {/* ATTACHMENT ORIGIN SECTION */}
      <section className="w-full relative">
        <div className="max-w-[850px] mt-6 md:mt-32  mx-4 md:mx-auto md:px-4 text-left">
          <Text.Heading
            className="capitalize mb-8 md:mb-10 text-2xl text-primary"
            content="So where does your attachment style come from?"
          />

          <div className="mt-8 md:mt-10 flex flex-center flex-col md:flex-row md:space-x-9">
            <Text.Paragraph
              useMD
              className="md:text-lg font-effra"
              content={ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.copy1}
            />

            <Image
              className="my-6 mx-12 md:m-0 w-3/4 sm:w-1/2 md:w-full"
              src="RoyalRumblePage/attachment-origin.svg"
            />
          </div>

          <div className="md:mt-5">
            <Text.Paragraph
              className="md:text-lg font-effra"
              content={ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.copy2}
            />

            <Text.Paragraph
              className="md:text-lg font-bold font-effra"
              content={ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.heading1}
            />

            <Text.Paragraph
              className="md:text-lg font-bold font-effra text-primary"
              content={ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.heading2}
            />

            {ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.heading3 && (
              <Text.Paragraph
                className="md:text-lg font-bold font-effra text-primary my-4"
                content={ROYAL_RUMBLE[style].ATTACHMENT_ORIGIN_SEGMENT.heading3}
              />
            )}

            <Button className="bg-primary px-16" label="GET STARTED" onClick={onGoToCheckout} />
          </div>
        </div>
      </section>

      <section className="w-full py-8 mt-4 bg-black lg:mt-12">
        <Text.Heading
          className="text-left !text-2xl lg:!text-3xl text-white pl-8 mb-2 md:text-center md:pl-0"
          content="Offer Ends Soon!"
        />

        {offerEndDate ? (
          <CountdownTimer date={offerEndDate} theme="dark" />
        ) : (
          <Loader className="!py-8 lg:py-10" classNameSpinner="text-white" />
        )}
      </section>
      {/* THAIS SECTION */}
      <div>
        <section className="w-full pt-10 md:pt-20 bg-gradient-to-b from-primary-light-4 to-primary-light-4">
          <div className="max-w-[850px] mx-4 md:mx-auto md:px-4 text-left inset-0">
            <Text.Heading
              className="mb-8 md:mb-10 text-2xl text-primary"
              content="Hi, I’m Thais!"
            />

            <Text.Paragraph
              className="md:text-lg font-effra text-justify"
              content={`I have over a decade of experience as a relationship coach and counsellor and got into this field because I too, had a Fearful Avoidant attachment style, and was seeking answers and healing. 

              I embarked on a journey of relentless research and education which led to me completing a Master's Degree and more than 13 different certifications in a variety of psychology modalities including Cognitive Behavioral Therapy, Neuro Linguistic Programming, Internal Family Systems, Shadow Work and many more! I also ran a private practice for the last decade, working with people using the techniques in this course to transform lifelong relationship patterns.
              
              Eventually, I transitioned into creating online programs - originally because my waitlist to see clients was over 2 years long. I have also published a best-selling book on this very topic, and have a Youtube channel with almost 200,000 subscribers. After fine-tuning this powerful formula to create attachment style healing, I created The Personal Development School so I could share this information with more people. 
              
              In the past 3 years alone, I have helped thousands of students on their journey to healthy, happy relationships using the techniques from the program that I'm sharing with you today. I am humbled to say that this program has received a 99.7% satisfaction rate from our students!`}
            />

            <Text.Paragraph
              className="md:text-lg font-bold font-effra text-justify pb-4"
              content={ROYAL_RUMBLE[style].THAIS_SEGMENT.copy}
            />
          </div>
        </section>
        <Image className="w-full xs:hidden" src="RoyalRumblePage/thais-bg-bottom-mobile.png" />
        <Image className="w-full hidden xs:block" src="RoyalRumblePage/thais-bg-bottom.png" />
      </div>

      {/*GAIN ACCESS SECTION */}
      <section className="w-full bg-black-secondary pb-10 pt-10 md:pt-[68px]">
        <div className="max-w-[850px] mx-4 md:mx-auto md:px-4 inset-0">
          <div className="flex flex-col md:flex-row -space-y-2 md:space-y-0 space-x-2 justify-center">
            <Text.Heading
              className="capitalize text-2xl text-white"
              content="Gain access to your"
              size={2}
            />

            <Text.Heading
              className="capitalize text-2xl text-teal"
              content="personalized program"
              size={2}
            />
          </div>

          <div className="mt-8 md:mt-10 text-left">
            <Text.Paragraph
              className="md:text-lg font-bold font-effra text-white uppercase"
              content="program overview"
              spacing="tracking-0.325"
            />

            <Text.Paragraph
              useMD
              className="md:text-lg font-effra mt-4 text-white "
              content={ROYAL_RUMBLE[style].GAINACCESS_SEGMENT}
            />

            <Text.Paragraph
              className="md:text-lg mt-8 font-bold font-effra text-white uppercase"
              content="How do the programs work?"
              spacing="tracking-0.325"
            />

            <ul className="mt-4 ml-6 text-white font-effra list-decimal">
              {ROYAL_RUMBLE[style].HOWPROGRAMWORK_SEGMENT.map((copy, index) => (
                <li key={`programwork_${index}`}>
                  <Text.Paragraph useMD className="md:text-lg" content={copy} />
                </li>
              ))}
            </ul>

            <Text.Paragraph
              className="md:text-lg mt-8 font-bold font-effra text-white uppercase"
              content="What Does The Program Cover?"
              spacing="tracking-0.325"
            />

            <Text.Paragraph
              className="font-bold text-blue mt-4"
              content="In the very first hour of your program, you will learn three simple steps
                to leave your painful attachment style patterns behind."
            />

            <Text.Paragraph
              className="font-bold text-blue mt-4"
              content="This will empower you to create more attraction, chemistry and 
                deeper connection in your love life - without the fear of losing yourself in relationships."
            />

            <Text.Paragraph
              useMD
              className="md:text-lg font-effra mt-4 text-white "
              content={ROYAL_RUMBLE[style].WHATPROGRAMCOVER_SEGMENT.copy}
            />

            <ul className="mt-4 !ml-6 fa-ul text-white font-effra md:text-lg">
              {ROYAL_RUMBLE[style].WHATPROGRAMCOVER_SEGMENT.bullets.map((copy, index) => (
                <li key={`programcover_${index}`}>
                  <Icon
                    className="text-blue mr-2 my-auto w-4 h-4 fa-li"
                    name="check-circle"
                    type="regular"
                  />
                  <Text useMD className="my-4" content={copy} />
                </li>
              ))}
            </ul>

            <Button
              className="mt-8 md:mt-10 bg-primary border-0 px-16"
              label="SIGN UP NOW"
              onClick={onGoToCheckout}
            />
          </div>
        </div>
      </section>
      {/*LEARN HOWTO SECTION */}
      <section className="w-full">
        <Image className="w-full" src="RoyalRumblePage/royal-rumble-mockup.png" />

        <div className="bg-[#DEEAEA] pb-14 md:pb-20">
          <div className="max-w-[1024px] mx-4 md:mx-auto inset-0 pt-14 md:pt-0">
            <Text.Heading className="capitalize text-h3-mobile" content="You will learn how to:" />

            <div className="mt-8 md:mt-20">
              {ROYAL_RUMBLE[style].LEARNHOWTO_SEGMENT.map((object, index) => {
                return (
                  <div key={`learn_${index}`} className="mb-8 md:mb-10">
                    <div className="flex row max-w-[677px] items-center md:mx-auto mx-4 justify-between space-x-5 md:space-[107px]">
                      {index % 2 === 1 && (
                        <div>
                          <Image
                            className="w-full h-full"
                            src={`RoyalRumblePage/${object.deskImageURL}`}
                          />
                        </div>
                      )}

                      <div className="py-[11px] text-left max-w-[240px]">
                        <Text
                          className="md:text-lg font-sspb capitalize text-primary"
                          content={object.title}
                        />

                        <Text.Paragraph
                          className="mt-4 font-effra md:text-lg"
                          content={object.copy}
                        />
                      </div>

                      {index % 2 === 0 && (
                        <div>
                          <Image
                            className="w-full h-full"
                            src={`RoyalRumblePage/${object.deskImageURL}`}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="max-w-[850px] mt-20 md:mt-32 md:px-4 md:mx-auto">
              <Text.Heading
                className="capitalize text-2xl text-primary text-left lg:!text-3xl"
                content="Use the 3 Step Formula to Create Deep Attachment Style Healing in 30 Days AND Get Access to These Exclusive Bonuses:                "
              />

              <div className="mt-8 md:mt-10 flex flex-col md:flex-row text-left justify-between">
                <ul className="font-effra !ml-6 fa-ul max-w-[415px]">
                  {ROYAL_RUMBLE[style].EXCLUSIVEBONUS_SEGMENT.map((copy, index) => (
                    <li key={`bonus_${index}`} className="mb-6">
                      <Icon
                        className="text-primary mr-2 my-auto w-4 h-4 fa-li"
                        name="check-circle"
                        type="regular"
                      />
                      <Text.Paragraph useMD className="md:text-lg" content={copy} />
                    </li>
                  ))}
                </ul>

                <ul className="font-effra md:text-lg !ml-6 fa-ul max-w-[415px]">
                  <li className="font-bold text-primary">
                    <Icon
                      className="text-primary mr-2 my-auto w-4 h-4 fa-li"
                      name="check-circle"
                      type="regular"
                    />
                    {`Not to mention, a 7-day money-back guarantee!
                `}
                  </li>

                  <li>
                    <Text.Paragraph
                      useMD
                      className="font-effra md:text-lg"
                      content={ROYAL_RUMBLE.moneyBackGuaranteeCopy}
                    />
                  </li>

                  <li className="mt-8 md:mt-10">
                    <Button className="bg-primary" label="ENROLL NOW" onClick={onGoToCheckout} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*STILL NOT SURE SECTION */}
      <section className="w-full">
        <div className="max-w-[850px] mt-6 md:mx-auto text-left md:mt-32">
          <div className="px-2 xxs:px-3 xs:px-4">
            <Text.Heading
              className="capitalize text-2xl text-primary"
              content="Still not sure if our programs are right for you?"
            />

            <div className="mt-6 md:mt-10 flex flex-center flex-col md:flex-row md:space-x-9">
              <Text.Paragraph
                useMD
                className="md:text-lg font-effra"
                content={ROYAL_RUMBLE[style].STILLNOTSURE_SEGMENT.copy1}
              />

              <Image
                className="my-6 mx-12 md:m-0 w-3/4 sm:w-1/2 md:w-full"
                src="RoyalRumblePage/rr-not-sure.svg"
              />
            </div>

            <div className="mt-5">
              <Text.Paragraph
                className="font-effra md:text-lg"
                content={ROYAL_RUMBLE[style].STILLNOTSURE_SEGMENT.copy2}
              />

              <Text.Paragraph
                className="font-bold font-effra md:text-lg"
                content={ROYAL_RUMBLE[style].STILLNOTSURE_SEGMENT.copy3}
              />
            </div>
          </div>

          <div className="mt-20 md:mt-32 text-center">
            <Text.Heading
              className="capitalize text-xl px-2"
              content="Our Programs have helped Thousands of People Transform Their Lives"
            />

            <div className="mt-10 w-full flex relative max-w-[640px] sm:max-w-[850px]">
              <Swiper
                autoplay={{
                  delay: 6000,
                  reverseDirection: true,
                }}
                className="!py-6 !px-2 lg:!px-18"
                modules={[Autoplay, Pagination]}
                pagination={{
                  bulletActiveClass: '!bg-black',
                  bulletClass:
                    'inline-block w-4 h-4 mx-1 bg-white border-2 rounded-full border-black cursor-pointer',
                  clickable: true,
                  horizontalClass: '!bottom-16',
                }}
                slidesPerView={1}
                spaceBetween={96}>
                {ROYAL_RUMBLE[style].TESTIMONIAL_SEGMENT.map((testimonial, index) => (
                  <SwiperSlide
                    key={`testimonial_${index}`}
                    className="p-6 py-12 shadow-centered rounded-2xl md:px-8">
                    <div className="mb-6">
                      <Image src="homepage_quote_left.png" />
                    </div>

                    <div className="pl-5 border-l-[12px] border-blue-lightest">
                      <div className="flex items-center mb-6">
                        <Image
                          className="rounded-full overflow-hidden w-8 h-8"
                          src={testimonial.avatar}
                        />
                        <Text className="font-semibold ml-3" content={testimonial.name} />
                      </div>

                      <Text useMD className="text-left" content={testimonial.testimonial} />
                    </div>

                    <div className="rotate-180 mt-6">
                      <Image src="homepage_quote_left.png" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <Button
              className="bg-primary mt-4 md:hidden min-w-min xxs:min-w-max"
              label="START HEALING"
              onClick={onGoToCheckout}
            />

            <Button
              className="hidden bg-primary mt-8 !px-16 md:mt-10 md:block md:mx-auto min-w-max"
              label="START MY TRANSFORMATION"
              onClick={onGoToCheckout}
            />
          </div>
        </div>
      </section>
      {/*BEST SELF SECTION */}
      <section className="w-full mt-8 md:mt-16 bg-black pt-10 pb-8 md:pb-10">
        <div className="max-w-[1024px] mx-4 md:mx-auto md:px-4 mt-10 inset-0">
          <div className="flex flex-center flex-col md:flex-row md:space-x-[85px]">
            <div className="my-auto text-left">
              <Text.Heading
                className="capitalize text-2xl text-primary-light"
                content="Picture you as your very best self; a secure self. What does that look and feel like?"
                size={2}
              />

              <Text.Paragraph
                className="font-effra font-bold md:text-lg mt-8 md:mt-10 text-white"
                content={ROYAL_RUMBLE[style].BESTSELF_SEGMENT.subheading}
              />
            </div>
            <Image
              className="!h-auto w-full px-16 py-8 md:p-0 sm:w-1/2"
              src="RoyalRumblePage/rr-best-self.png"
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
                    <div
                      key={`bestSelfContent_${index}`}
                      className={`max-w-[492px] ${MARGIN} md:mb-0`}>
                      <Text.Paragraph
                        className="font-effra font-medium text-white uppercase md:text-lg"
                        content={content.title}
                        spacing="tracking-0.325"
                      />
                      <Text.Paragraph
                        className="font-effra text-white md:text-lg mt-2"
                        content={content.copy}
                      />
                    </div>
                  )
                })}
              </div>
            ))}

            <Button
              className="bg-primary mt-2 border-0"
              label="I WANT THIS"
              onClick={onGoToCheckout}
            />
          </div>
        </div>
      </section>
      {/* MY QUESTION SECTION */}
      <section className="w-full">
        <div className="mt-6 md:mt-32 max-w-[1024px] mx-4 md:mx-auto md:px-4 text-left">
          <Text.Heading
            className="capitalize text-2xl text-primary"
            content="My question to you is: can you really afford to keep going the way that you are?"
          />

          <Text.Paragraph
            useMD
            className="font-effra md:text-lg mt-8 md:mt-10"
            content={ROYAL_RUMBLE[style].MYQUESTION_SEGMENT.subheading1}
          />

          <div className="flex flex-center flex-col md:flex-row md:space-x-11 mt-6">
            <div className="my-auto">
              <Text.Paragraph
                className="text-primary font-bold"
                content="And what is the cost to you when you choose to do nothing?"
              />

              <ul className="mt-4 ml-6 font-effra list-disc md:text-lg">
                {ROYAL_RUMBLE[style].MYQUESTION_SEGMENT.bullets.map((copy, index) => (
                  <li key={`programwork_${index}`} className="mb-4">
                    {copy}
                  </li>
                ))}
              </ul>
            </div>

            <Image
              className="my-6 md:my-0 w-3/4 sm:w-1/2 md:3/4"
              src="RoyalRumblePage/rr-myquestion.png"
            />
          </div>

          <div className="mt-6">
            <Text.Paragraph
              useMD
              className="font-effra md:text-lg"
              content={ROYAL_RUMBLE[style].MYQUESTION_SEGMENT.subheading2}
            />
          </div>

          <Button className="bg-primary mt-6 md:mt-8" label="SIGN ME UP" onClick={onGoToCheckout} />
        </div>
      </section>
      {/* REGISTER NOW SECTION */}
      <section className="w-full mt-20 md:mt-32">
        <div className="bg-gradient-to-b from-blue-lightest/50 to-primary-light/50 py-10 md:py-20">
          <div className="max-w-[1024px] mx-4 md:mx-auto">
            <Text.Heading
              className="capitalize text-2xl text-primary"
              content={
                style !== 'sa'
                  ? `Heal Your Attachment Style with the ${ROYAL_RUMBLE[style].TITLE} to Secure Attachment Program`
                  : `Start Building the Relationships you Deserve with the All-Access Program`
              }
            />
            <div
              className="flex flex-center flex-col  py-10 text-left space-y-10 
                        lg:flex-row lg:space-x-5 lg:space-y-0">
              <div className="max-w-[502px]">
                <Text.Paragraph
                  className="font-effra font-bold md:text-lg"
                  content="WHAT'S INCLUDED?"
                  spacing="tracking-0.325"
                />
                <Text.Paragraph
                  className="font-effra font-bold md:text-lg mt-3 md:mt-2"
                  content={
                    style !== 'sa'
                      ? `Heal Your Attachment Style in 30 Days with the ${ROYAL_RUMBLE[style].TITLE} to Securely Attached program.`
                      : `All the tools you need to create the relationship you deserve.`
                  }
                />
                <ul className="font-effra mt-4 ml-3 list-decimal">
                  <li>
                    <Text.Paragraph
                      className="md:text-lg"
                      content={
                        style !== 'sa'
                          ? `The ${ROYAL_RUMBLE[style].TITLE} to Securely Attached program + coursework`
                          : `The Securely Attached program + coursework`
                      }
                    />
                  </li>
                  <li>
                    <Text.Paragraph
                      className="md:text-lg"
                      content="All-access pass to The Personal Development School’s offering, granting you access to:"
                    />
                  </li>
                  <ul className="font-effra !ml-4 fa-ul">
                    {ROYAL_RUMBLE[style].OFFER_SEGMENT.bullets.map((copy, index) => (
                      <li key={`offer_${index}`}>
                        <Icon
                          className="text-primary my-auto w-4 h-4 fa-li"
                          name="check-circle"
                          type="regular"
                        />
                        <Text.Paragraph useMD className="md:text-lg my-2 lg:my-1" content={copy} />
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <div className="max-w-[502px] rounded-20 bg-primary-light py-11 px-4 md:px-10 text-center">
                <Text.Paragraph
                  className={`max-w-[368px] font-effra font-bold p-1 text-${ROYAL_RUMBLE.OFFER_CARD.headingColor} border-y-2 border-${ROYAL_RUMBLE.OFFER_CARD.headingColor} mx-auto 
                    md:uppercase md:text-lg `}
                  content={ROYAL_RUMBLE.OFFER_CARD.heading}
                />
                <div className="max-w-[230px] mt-8 mx-auto">
                  <Text.Paragraph
                    className="font-effra font-bold md:text-lg text-center"
                    content={ROYAL_RUMBLE.OFFER_CARD.subheaing}
                  />
                  <Text.Paragraph
                    className="font-effra font-bold !text-[100px] text-primary after:content-['/month'] after:text-sm md:after:text-lg"
                    content={ROYAL_RUMBLE.OFFER_CARD.price}
                  />
                  <Text.Paragraph
                    className="md:text-lg line-through"
                    content="Regular Price = $97/month"
                  />
                </div>
                <div className="mt-2">
                  <ul className="font-effra mt-8 ml-3 list-disc text-left">
                    <li>
                      <Text.Paragraph
                        className="md:text-lg"
                        content="Special offer available for a limited time"
                      />
                    </li>
                    <li>
                      <Text.Paragraph
                        className="md:text-lg"
                        content="Get 30% off of the All-Access Pass for life if you sign up today"
                      />
                    </li>
                    <li>
                      <Text.Paragraph
                        className="md:text-lg"
                        content="7-Day Money Back Guarantee, No Questions Asked!"
                      />
                    </li>
                  </ul>
                  <Button
                    className="bg-primary mt-6 md:mt-10 border-0"
                    label="REGISTER NOW"
                    onClick={onGoToCheckout}
                  />
                  <Text.Paragraph
                    className="font-effra font-bold md:text-lg mt-2"
                    content="SAVE 30% NOW"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-center flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:px-4">
              <div className="max-w-[502px]">
                <Image src="RoyalRumblePage/rr-offer.png" />
              </div>
              <div className="max-w-[502px] text-left">
                <Text.Paragraph
                  useMD
                  className="md:text-lg"
                  content={`${
                    style !== 'sa'
                      ? `Enroll in The ${ROYAL_RUMBLE[style].TITLE} to Securely`
                      : 'Enroll in The Securely'
                  } Attached Program now and prepare to create the safe home within yourself you’ve been looking for all along.
**If you change your mind or are unable to commit we have a full 7-day money back guarantee!**
                
We’re happy to process a refund for you if that’s what you choose. No hard feelings, and no questions asked!`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[850px] mt-6 md:mt-32 mx-4 md:mx-auto md:px-4 text-left">
          <Text.Heading
            className="capitalize text-2xl text-primary"
            content="If you don’t make a change now, then when? And if you don’t show up for yourself … who will?"
          />

          <Text.Paragraph
            useMD
            className="font-effra md:text-lg mt-8 md:mt-10"
            content={ROYAL_RUMBLE[style].OFFER_SEGMENT.copy}
          />
        </div>

        <Button
          className="bg-primary mt-8 md:mt-10 border-primary md:px-20 min-w-min xxs:min-w-max"
          label="REWRITE MY STORY"
          onClick={onGoToCheckout}
        />
      </section>
      {/* FAQ SECTION */}
      <Faq
        className="my-16"
        classNameHeading="text-primary"
        classNameIcon="text-primary"
        faq={ROYAL_RUMBLE.FAQs}
      />
    </Page>
  )
}
