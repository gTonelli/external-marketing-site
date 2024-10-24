'use client'

// core
import { useCallback, useEffect, useState } from 'react'
// components
import { LIMITED_OFFER } from './config'
import { Button } from '@/components/Button/Button'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Faq } from '@/components/Faq/Faq'
import { Video } from '@/components/Video/Video'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { Page } from '@/components/Page'
import { Loader } from '@/components/Loader'
// libraries
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { getOfferEndDate } from '@/utils/functions'
import { TStyle } from '@/utils/types'
import { TRIAL_PAGE } from '@/app/(custom-layouts)/(no-nav)/7-day-trial/config'

import 'swiper/css'
import 'swiper/css/pagination'

export interface ILimitedOfferPageParams {
  style: TStyle
}

export default function LimitedOfferPage({ params }: { params: { style: TStyle } }) {
  const style = params.style
  // ==================== Hook ====================
  const page_name = `Limited Offer - ${style}` as Pages

  // ==================== State ====================
  const pageCopy = LIMITED_OFFER[style]
  const [offerEndDate, setOfferEndDate] = useState<Date | undefined>()

  useEffect(() => {
    setOfferEndDate(getOfferEndDate(new Date(`2023-07-12T00:00:00`), 1))
  }, [page_name])

  const onGoToCheckout = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, seq_no: number) => {
      Mixpanel.track.ButtonClicked({
        button_label: event.currentTarget.innerText,
        page_name: page_name,
        seq_no: seq_no,
      })

      window.location.assign(EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION)
    },
    [page_name]
  )

  return (
    <Page page_name={`Limited Offer - ${style}`}>
      {/* COUNT DOWN TIMER SECTION */}
      <section className="w-full bg-black">
        <div className="py-4">
          {offerEndDate ? (
            <CountdownTimer date={offerEndDate} theme="dark" />
          ) : (
            <Loader className="!py-8 lg:py-10" classNameSpinner="text-white" />
          )}
        </div>
      </section>
      {/* HERO SECTION */}
      <section className="relative w-full bg-blue-lightest md:bg-[#F3F3F4]">
        <Image
          alt=""
          className="hidden md:block absolute top-0 right-0 "
          src="LimitedOfferPage/hero-vector.svg"
        />

        <div className="relative max-w-5xl flex flex-row justify-between items-center mx-auto py-16 px-4 md:px-8 lg:space-x-10">
          <div className="flex flex-col md:w-1/2">
            <Text
              className="font-bold !text-4xl text-center md:text-left text-purple-dark px-4 md:px-0"
              content={pageCopy.HERO.headline}
            />

            <Text.Paragraph className="font-bold mt-4" content={pageCopy.HERO.copy} />

            <div className="text-center mt-12 md:text-left">
              <Button
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="SIGN UP"
                onClick={(e) => onGoToCheckout(e, 1)}
              />
            </div>
          </div>

          <div className="hidden md:block md:w-1/2">
            <Image alt="" src="LimitedOfferPage/hero.png" />
          </div>
        </div>
      </section>

      {/* MOBILE WAVE */}
      <Image
        alt=""
        className="md:hidden w-full"
        src="LimitedOfferPage/hero-background-mobile.png"
      />

      {/* LOGO FEATURE SECTION */}
      <section className="hidden md:block w-full bg-[#F3F3F4]">
        <div className="py-8">
          <Text.Paragraph
            className="font-xs font-semibold text-center uppercase tracking-[0.3em]"
            content={LIMITED_OFFER.LOGO_FEATURE.title}
            spacing="tracking-0.325"
          />

          <ul className="max-w-3xl flex flex-row flex-wrap justify-between items-center mx-auto px-4 mt-8">
            {LIMITED_OFFER.LOGO_FEATURE.image.map((img, index) => (
              <li key={index}>
                <div className="h-full flex justify-center items-center">
                  <Image
                    alt={img.alt}
                    className="block w-[100px] h-[80px] max-w-full object-contain"
                    src={`Logo_Brand/${img.name}.png`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* QUOTE SECTION */}
      <section className="w-full">
        <div className="max-w-4xl flex flex-col items-center md:flex-row md:justify-center mx-auto px-4 py-8">
          <div className="max-w-sm border-2 border-primary-light rounded-20">
            <div className="flex flex-col items-center px-4 py-8">
              <Image className="w-[30px] pb-2" src="/homepage_quote_left.png" />

              <Text.Paragraph
                className="text-purple-dark text-center font-bold"
                content={pageCopy.QUOTE.quote}
                spacing="tracking-0.325"
              />
            </div>
          </div>
          <div className="max-w-sm md:pl-8">
            <Text.Paragraph useMD className="mt-4" content={pageCopy.QUOTE.copy1} />

            <Text.Paragraph className="mt-4" content={pageCopy.QUOTE.copy2} />
          </div>
        </div>
      </section>

      {/* LETS BE HONEST SECTION */}
      <Image className="hidden md:block w-full" src="LimitedOfferPage/background1.png" />
      <section className="w-full bg-[#EADBEB] pt-16 pb-40 md:pt-0">
        <div className="flex flex-col items-center text-center px-4">
          <Text.Heading content={pageCopy.HONEST.headline} />

          <Text.Paragraph className="max-w-sm mt-6" content={pageCopy.HONEST.subheadline} />

          <div className="max-w-5xl flex flex-col items-start lg:flex-row px-8">
            {pageCopy.HONEST.bullet.map((content, index) => (
              <div
                key={`trial_honest_${index}`}
                className="flex flex-col items-center mt-8 lg:mx-4">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white">
                  <FontAwesomeIcon className="text-purple-dark" icon={content.icon} size="2x" />
                </div>

                <Text.Paragraph className="max-w-sm text-center mt-4" content={content.text} />
              </div>
            ))}
          </div>
          <Text useMD className="mt-8" content={`**${pageCopy.HONEST.copy1}**`} />

          <Text
            useMD
            className="mt-8"
            content={`**${pageCopy.HONEST.copy2.text_bold1}** ${pageCopy.HONEST.copy2.text1}`}
          />

          <Text
            useMD
            className="max-w-lg"
            content={`**${pageCopy.HONEST.copy2.text_bold2}** ${pageCopy.HONEST.copy2.text2} **${pageCopy.HONEST.copy2.text_bold3}**`}
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full px-4 -mt-32 sm:-mt-28 md:-mt-24">
        <div className="max-w-4xl bg-purple-dark flex flex-col items-center rounded-20 mx-auto py-8 px-4">
          <div className="max-w-xl text-white mx-auto">
            <Text.Paragraph className="text-center mb-4" content={pageCopy.CTA.copyOne} />

            <Text.Paragraph className="text-center" content={pageCopy.CTA.copyTwo} />
          </div>
          <div className="mt-8">
            <Button
              className="!bg-blue !text-black !border-none drop-shadow-lg"
              label="SIGN UP"
              onClick={(e) => onGoToCheckout(e, 2)}
            />
          </div>
        </div>
      </section>

      {/* YOU WILL LEARN + CHAT POP UP SECTION */}
      <section className="w-full  my-16">
        <div className="max-w-5xl flex flex-col items-center mx-auto px-4">
          <Text.Heading className="mb-8" content="You Will Learn" />
          {/* mobile */}
          <div className="flex flex-col items-center md:hidden">
            <ul className="px-4">
              {pageCopy.LEARN.bullet.part1.map((point, index) => (
                <li key={index} className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-4">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-2"
                      icon={faCircleCheck}
                    />

                    <Text.Paragraph
                      useMD
                      className="text-left"
                      content={`${point.text_bold} ${point.text}`}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="-mt-16">
              <Image src="LimitedOfferPage/you-will-learn.png" />
            </div>
            <ul className="px-4 -mt-16">
              {pageCopy.LEARN.bullet.part2.map((point, index) => (
                <li key={index} className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-4">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-2"
                      icon={faCircleCheck}
                    />

                    <Text.Paragraph
                      useMD
                      className="text-left"
                      content={`${point.text_bold} ${point.text} `}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* desktop */}
          <div className="relative hidden md:block">
            <div className="flex relative z-10">
              <ul className="px-4">
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-8 ml-12">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <Text.Paragraph
                      useMD
                      className="text-left"
                      content={`${pageCopy.LEARN.bullet1.text_bold} ${pageCopy.LEARN.bullet1.text} `}
                    />
                  </div>
                </li>
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-8">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <Text.Paragraph
                      useMD
                      className="text-left"
                      content={`${pageCopy.LEARN.bullet2.text_bold} ${pageCopy.LEARN.bullet2.text}`}
                    />
                  </div>
                </li>
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-4 ml-12">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <Text.Paragraph
                      useMD
                      className="text-left"
                      content={`${pageCopy.LEARN.bullet3.text_bold} ${pageCopy.LEARN.bullet3.text}`}
                    />
                  </div>
                </li>
              </ul>
              <ul className="px-4 ">
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-4 ml-20">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <Text.Paragraph
                      useMD
                      className="text-left"
                      content={`${pageCopy.LEARN.bullet4.text_bold} ${pageCopy.LEARN.bullet4.text}`}
                    />
                  </div>
                </li>
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-16 ml-32">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <Text.Paragraph
                      useMD
                      className="text-left"
                      content={`${pageCopy.LEARN.bullet5.text_bold} ${pageCopy.LEARN.bullet5.text}`}
                    />
                  </div>
                </li>
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-4">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <Text.Paragraph
                      useMD
                      className="text-left"
                      content={`${pageCopy.LEARN.bullet6.text_bold} ${pageCopy.LEARN.bullet6.text}`}
                    />
                  </div>
                </li>
              </ul>
            </div>
            <div className="absolute flex justify-center items-center inset-0 z-5">
              <Image className="h-3/5" src="LimitedOfferPage/you-will-learn.png" />
            </div>
          </div>
        </div>
      </section>

      {/* THE FEARFUL AVOIDANT 7 DAY TRANSFORMATION SECTION */}
      <section className="w-full my-16">
        <div className="max-w-5xl text-center px-4 mx-auto ">
          <Text.Heading className="mb-4" content={pageCopy.BEST_VALUE.intro.title} />

          <Text.Paragraph
            className="uppercase text-primary font-bold mb-8"
            content={pageCopy.BEST_VALUE.intro.subtitle}
            spacing="tracking-0.325"
          />
          <Text.Paragraph
            useMD
            className="max-w-2xl mx-auto my-4"
            content={`**${pageCopy.BEST_VALUE.intro.copy1}**`}
          />

          <Text.Paragraph
            useMD
            className="max-w-2xl mx-auto text-primary"
            content={`**${pageCopy.BEST_VALUE.intro.copy2}**`}
          />

          <ul className="font-bold">
            {pageCopy.BEST_VALUE.intro.listItems.map((data, index) => (
              <li key={`offer_list_${index}`} className="font-bold">
                {data}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BEST VALUE */}
      <section className="relative w-full my-16 lg:mb-28">
        <div className="relative max-w-5xl px-4 md:mx-auto">
          <div className="border-2 border-purple-dark rounded-20 text-center px-4 pt-16 pb-8 ">
            <div className="absolute -mt-24 left-1/2 -translate-x-1/2 md:left-[7%] md:-translate-x-0">
              <Text.Paragraph
                className="w-[250px] text-center font-bold tracking-[0.4em] bg-yellow-secondary rounded-20 px-4 py-6"
                content="BEST VALUE"
              />
            </div>

            <div className="flex flex-col items-start md:flex-row md:justify-center md:px-8 md:items-center">
              <div className="max-w-lg mx-auto md:max-w-sm text-left">
                <Text.Paragraph
                  useMD
                  className="mb-4"
                  content={`**${pageCopy.BEST_VALUE.course.copy1}**`}
                />

                <Text.Paragraph useMD className="mb-4" content={pageCopy.BEST_VALUE.course.copy2} />

                <Text.Paragraph useMD className="mb-4" content={pageCopy.BEST_VALUE.course.copy3} />

                <Text.Paragraph useMD className="mb-4" content={pageCopy.BEST_VALUE.course.copy4} />

                <Text.Paragraph
                  useMD
                  className="inline"
                  content={pageCopy.BEST_VALUE.course.copy5}
                />

                <Text.Paragraph className="underline inline" content="limited time!" />
              </div>

              <div className="w-full flex flex-col items-center justify-evenly mt-8 lg:mt-0 md:w-1/2 lg:pl-16">
                <div className="mb-10">
                  {offerEndDate ? (
                    <CountdownTimer date={offerEndDate} theme="light" />
                  ) : (
                    <Loader className="!py-8 lg:py-10" classNameSpinner="text-white" />
                  )}
                </div>

                <Image className="max-w-md w-full mb-8" src="LimitedOfferPage/course-mock-up.png" />

                <Text.Paragraph
                  className="text-primary font-bold mb-4 lg:my-6"
                  content={pageCopy.BEST_VALUE.cta_text}
                  spacing="tracking-0.325"
                />

                <div className="mt-4 mb-8">
                  <Button
                    className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                    label="SIGN UP"
                    onClick={(e) => onGoToCheckout(e, 3)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-5xl flex flex-col mx-auto my-8 px-4 md:row md:items-center md:px-8">
          {/* left col  */}
          <div className="text-left mt-4 md:w-1/2 md:mt-0 md:pl-8">
            {pageCopy.MONEY_BACK.copy.map((text, index) => (
              <Text.Paragraph key={index} useMD className="mb-4 !text-lg" content={text} />
            ))}
            <div className="flex justify-center my-16 md:hidden">
              <Button
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="SIGN UP"
                onClick={(e) => onGoToCheckout(e, 4)}
              />
            </div>
          </div>

          {/* right col */}
          <div className="flex justify-center md:w-1/2 md:pr-8">
            <Image
              alt="Money back 7 day Guarantee"
              className="w-3/4 max-w-xs"
              src="money-back-7-day.png"
            />
          </div>
        </div>

        <div className="hidden mt-16 md:flex md:justify-center">
          <Button
            className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
            label="SIGN UP"
            onClick={(e) => onGoToCheckout(e, 5)}
          />
        </div>
      </section>

      {/* HOW DO I KNOW THAT THIS WORKS SO QUICKLY SECTION*/}
      <section className="w-full flex justify-center">
        <div className="max-w-5xl flex flex-col items-center mx-4 my-16">
          <div className="flex flex-col items-center text-center">
            <Text.Heading
              useMD
              className="font-bold font-sspb leading-9 lg:leading-50 tracking-[2px] mb-4"
              content={pageCopy.SPECIAL_BONUS.headline}
              size={1}
            />

            <Text.Paragraph
              className="max-w-xl mb-4"
              content={pageCopy.SPECIAL_BONUS.description}
            />

            <Text.Paragraph
              className="font-bold mt-5"
              content="AND AS A SPECIAL BONUS:"
              spacing="tracking-0.325"
            />
          </div>

          <div className="flex flex-col md:flex-row mt-8 md:px-8">
            {/* left col  */}
            <div className="md:w-1/2 md:flex md:flex-col md:justify-start md:px-8">
              <div className="flex flex-col items-center text-left md:items-start">
                {pageCopy.SPECIAL_BONUS.copy.map((text, index) => (
                  <Text.Paragraph
                    key={`trial_special_bonus_copy_${index}`}
                    useMD
                    className="mb-4"
                    content={text}
                  />
                ))}
              </div>
            </div>
            {/* right col */}
            <div className="flex flex-col items-center  md:items-end mt-8 md:mt-0 md:w-1/2 md:px-8">
              <Image alt="" className=" mt-4 sm:mt-8" src="RoyalRumbleResultsPage/promo2.png" />

              <Video
                playAuto
                playInline
                playButtonSize="none"
                srcUrl="https://storage.googleapis.com/pds_videos/SSPDashboard.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LOGO FEATURE SECTION */}
      <section className="w-full bg-[#F3F3F4] md:hidden">
        <div className="py-8">
          <Text.Paragraph
            className="font-xs font-semibold text-center uppercase tracking-[0.3em] px-4"
            content={LIMITED_OFFER.LOGO_FEATURE.title}
          />
          <ul className="grid grid-cols-3 gap-4 mt-8">
            {LIMITED_OFFER.LOGO_FEATURE.image.map((img, index) => (
              <li key={index}>
                <div className="h-full flex justify-center items-center">
                  <Image
                    alt={img.alt}
                    className="block w-[100px] h-[50px] max-w-full object-contain"
                    src={`Logo_Brand/${img.name}.png`}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DISCOUNT OFFER + COUNT DOWN TIMER */}
      <section className="w-full bg-purple-dark pt-8 pb-36">
        <div className="max-w-5xl w-full mx-auto my-8">
          <div className="flex flex-center flex-col justify-end md:flex-row md:px-8">
            <div>
              <VideoThumbnail
                srcUrl={pageCopy.videoSrc}
                thumbnailAlt={`Fearful Avoidant video ${style} thumbnail`}
                thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
                type="default"
              />
            </div>
            <div className="flex flex-col text-center m-4 p-2 md:text-left md:w-1/2">
              <Text.Heading
                className="text-white text-2xl"
                content="Discount Offer Expires Soon."
              />

              <Text.Heading className="text-white text-2xl mt-2" content="Claim Your Offer Now." />

              {/* <div className="text-center px-0 mt-2"> */}
              {offerEndDate ? (
                <CountdownTimer date={offerEndDate} theme="dark" />
              ) : (
                <Loader className="!py-8 lg:py-10" classNameSpinner="text-white" />
              )}
              {/* </div> */}

              <div className="pt-4">
                <Button
                  className="bg-blue text-black border-none drop-shadow-lg"
                  label="SIGN UP"
                  onClick={(e) => onGoToCheckout(e, 6)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE IMAGE BACKGROUND */}
      <Image alt="" className="w-full -mt-36 md:-mt-24" src="LimitedOfferPage/background2.png" />
      {/* INSTRUCTOR INTRO | "WHO TEACHES THIS COURSES SECTION" */}
      <section className="w-full bg-blue-lightest flex flex-col justify-center">
        <div className="max-w-5xl flex flex-col items-center mx-auto mt-8">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col items-center px-4 mt-8 md:items-start md:max-w-xl">
              <Text.Heading
                className="max-w-xl font-bold text-center"
                content={pageCopy.INSTRUCTOR.title}
                size={1}
              />

              {pageCopy.INSTRUCTOR.copy.map((text: string, index: number) => (
                <Text.Paragraph
                  key={`trial_instructor_copy_${index}`}
                  className="mt-8"
                  content={text}
                />
              ))}

              <div className="flex flex-col justify-center my-8 md:mt-16">
                <Button
                  className="bg-gradient-to-b from-purple-medium to-purple-dark hover:!text-white"
                  label="SIGN UP"
                  onClick={(e) => onGoToCheckout(e, 7)}
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-center md:items-end md:flex-row-reverse">
              <Image
                className="max-w-sm w-full md:hidden"
                src="LimitedOfferPage/thais-mobile.png"
              />

              <Image
                className="hidden max-w-sm md:block"
                src="LimitedOfferPage/thais-desktop.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MIRROR | "I WANT TO ASK YOU TO COURAGEOUSLY REFLECT SECTION" */}
      <section className="w-full flex justify-center bg-black pb-8  md:pb-60">
        <div className="max-w-5xl text-white flex flex-col items-center mx-4 my-12">
          <Text.Heading className="text-center" content={pageCopy.REFLECT.title} />

          <div className="flex flex-col my-8  md:items-start md:px-8">
            <div className="flex flex-col items-center md:flex-row md:justify-around md:px-8 ">
              <div className="max-w-sm md:max-w-md px-8">
                <Image alt="" src="LimitedOfferPage/reflect.png" />
              </div>

              <div className="mt-8">
                <ol>
                  {pageCopy.REFLECT.bullets.map((list, index) => (
                    <li
                      key={`promo4_list_${index}`}
                      className="flex flex-row items-start justify-start mb-4">
                      <div className="mx-4">
                        <Text.Paragraph
                          className="w-8 h-8 border-2 border-purple-dark rounded-full flex items-center justify-center"
                          content={index + 1}
                        />
                      </div>

                      <Text.Paragraph className="text-left" content={list} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <Text.Paragraph className="max-w-3xl text-center mb-8" content={pageCopy.REFLECT.copy1} />

          <Text.Paragraph className="max-w-3xl mb-8" content={pageCopy.REFLECT.copy2} />

          <Button
            className="bg-blue text-black border-none drop-shadow-lg"
            label="SIGN UP"
            onClick={(e) => onGoToCheckout(e, 8)}
          />
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL SECTION */}
      <div className="max-w-lg  mx-auto my-4 lg:max-w-screen-lg lg:px-10 md:-mt-60">
        <div className="w-full flex relative" style={{ maxWidth: '100vw' }}>
          <Swiper
            autoplay={{
              delay: 6000,
              reverseDirection: true,
            }}
            className="!overflow-hidden !py-2 xxs:!py-3 xs:!py-6 !px-2 lg:!px-18"
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
            {TRIAL_PAGE.testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={`testimonial_${index}`}
                className="bg-white p-6 py-12 shadow-centered rounded-2xl lg:px-8">
                <div className="flex mb-6">
                  <Image className="mr-2" src="quote.svg" />
                  <Image src="quote.svg" />
                </div>

                <div className="pl-5 border-l-[12px] border-blue-lightest">
                  <div className="flex items-center mb-6">
                    <Image
                      className="rounded-full overflow-hidden max-w-[40px]"
                      src={testimonial.img}
                    />
                    <Text className="font-semibold ml-3" content={testimonial.author} />
                  </div>

                  <Text useMD content={testimonial.testimonial} />
                </div>

                <div className="flex mt-6">
                  <Image className="ml-auto mr-2 -scale-x-100" src="quote.svg" />
                  <Image className="-scale-x-100" src="quote.svg" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* FAQ SECTION */}
      <Faq />
    </Page>
  )
}
