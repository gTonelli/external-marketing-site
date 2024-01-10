'use client'

// core
import React, { useCallback, useEffect, useState } from 'react'
// components
import { Page } from '@/components/Page'
import { Text } from '@/components/Text/Text'
import { Video } from '@/components/Video/Video'
import { Button } from '@/components/Button/Button'
import { Carousel } from '@/components/Carousel/Carousel'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Icon } from '@/components/Icon'
import { Image } from '@/components/Image'
import { Trustbar } from '@/components/Trustbar/Trustbar'
import { List } from '@/components/List'
import { RESULTS } from './config'
import { Loader } from '@/components/Loader'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { getOfferEndDate } from '@/utils/functions'
import { TStyle } from '@/utils/types'
import { useCheckoutSplitTest } from '@/utils/hooks'

export default function RoyalRumbleResultsPage({ params }: { params: { style: TStyle } }) {
  const style = params.style
  // ==================== Hooks ====================
  const page_name = `VSL Royal Rumble Results - ${style}` as Pages
  const { checkoutLink } = useCheckoutSplitTest({ userStyle: style, trafficRatio: 0.2 })
  // ==================== State ====================
  const [watchedVideos, setWatchedVideos] = useState(new Set<string>())
  const userFirstName = Storage.get('userFirstName')
  const [titleStart, setTitleStart] = useState('')
  const [offerEndDate, setOfferEndDate] = useState<undefined | Date>()

  const onVideoStarted = (type: string) => {
    if (!watchedVideos.has(type)) {
      Mixpanel.track.VideoStarted({
        video_type: `${type} - ${page_name}`,
        page_name: page_name,
      })
    }

    setWatchedVideos(new Set<string>([...watchedVideos, type]))
  }

  useEffect(() => {
    setTitleStart(userFirstName ? userFirstName.toUpperCase() + ', ' : '')
    setOfferEndDate(getOfferEndDate(new Date(`2023-01-21T00:00:00`), 1))
  }, [])

  // ================== Events =====================
  const onGoToCheckout = useCallback(
    (event: React.MouseEvent<HTMLButtonElement | HTMLSpanElement, MouseEvent>, seq_no?: number) => {
      Mixpanel.track.ButtonClicked({
        button_label: event.currentTarget.innerText,
        page_name: page_name,
        seq_no: seq_no,
      })

      window.location.assign(
        checkoutLink || EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION
      )
    },
    [style]
  )

  return (
    <Page className="w-full text-center" page_name={page_name}>
      {/* HERO_SECTION */}
      <section className="w-full">
        <div className="bg-gradient-to-b from-blue-lightest to-white via-blue-lightest">
          <div className="flex flex-col justify-center items-center max-w-5xl pt-10 md:pt-20 px-4 md:mx-auto">
            <Text.Heading
              className="text-purple-dark font-bold"
              content={`${titleStart}${RESULTS[style].HERO_SECTION.headline}`}
              font="font-effra"
              size={1}
            />

            <Text.Paragraph
              className="max-w-3xl uppercase font-bold !tracking-0.325 mt-8 mb-8 md:mb-10"
              content={RESULTS[style].HERO_SECTION.subheadline}
            />

            {/* BANNER BACKGROUND */}
            <div className="max-w-5xl w-full my-8">
              <div className="flex flex-col md:flex-row-reverse md:px-8">
                <div>
                  <Video.Youtube
                    iframeClassName="rounded-10"
                    videoId={RESULTS[style].HERO_SECTION.videoURL}
                    onPlay={() => onVideoStarted('default')}
                  />
                </div>

                <div className="m-4 p-2 md:text-left md:w-1/2">
                  <Text.Heading
                    className="text-purple-dark text-2xl"
                    content={RESULTS[style].HERO_SECTION.title}
                  />

                  <Text.Paragraph
                    className="font-bold mt-4"
                    content="Congratulations on taking the Attachment Style Quiz!"
                  />

                  <Text.Paragraph className="mt-4" content={RESULTS[style].HERO_SECTION.copy} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOES ANY OF THIS SOUND LIKE YOU */}
      <section className="w-full">
        <Text.Heading
          className="text-purple-dark mb-4 text-2xl"
          content="Does Any Of This Sound Like You?"
        />

        <div className="w-full flex flex-col items-center px-4 mb-8 md:mt-8">
          <div className="max-w-5xl flex flex-col md:flex-row md:items-start md:px-8">
            {/* LEFT COL  */}
            <div className="md:w-1/2 md:px-8">
              {RESULTS[style].STYLE_TRAITS.bullets_left.map((bullet_point, index) => (
                <List
                  key={`traits1_${index}`}
                  className="flex items-start mb-4"
                  classNameIcon="!text-green-check pt-[3px] pr-4"
                  classNameListItems="text-left !text-lg !leading-6"
                  iconName="circle-check"
                  iconType="regular"
                  listItems={[bullet_point]}
                />
              ))}
            </div>
            {/* RIGHT COL */}
            <div className="md:w-1/2 md:px-8">
              {RESULTS[style].STYLE_TRAITS.bullets_right.map((bullet_point, index) => (
                <List
                  key={`traits2_${index}`}
                  className="flex flex-row mb-4"
                  classNameIcon="!text-green-check pt-[3px] pr-4"
                  classNameListItems="text-left !text-lg !leading-6"
                  iconName="circle-check"
                  iconType="regular"
                  listItems={[bullet_point]}
                />
              ))}
            </div>
          </div>

          <div className="w-full text-center mt-4">
            <Text.Paragraph
              className="max-w-2xl mx-auto mb-4 lg:mb-8"
              content={RESULTS[style].STYLE_TRAITS.copy1}
            />

            <Text.Paragraph
              className="max-w-2xl font-bold mx-auto mb-4 lg:mb-8"
              content={RESULTS[style].STYLE_TRAITS.copy2}
            />

            <Button
              className="bg-gradient-to-b from-purple-medium to-purple-dark font-bold hover:!text-white"
              label="UNLOCK MY DISCOUNT"
              onClick={onGoToCheckout}
            />
          </div>
        </div>
      </section>

      {/* ATTACHMENT_EXPLAIN | WHAT IS AN ATTACHMENT STYLE */}
      <section className="w-full flex flex-col items-center px-4 pt-8">
        <div className="max-w-5xl mb-8">
          <Text.Heading
            className="text-purple-dark text-3xl mb-4 px-4"
            content={RESULTS[style].ATTACHMENT_EXPLAIN.title}
          />

          <Text.Paragraph
            className="uppercase font-bold !tracking-0.325 mb-8 md:mb-10"
            content={RESULTS[style].ATTACHMENT_EXPLAIN.subtitle}
          />
          <div className="mb-4 md:px-8">
            <ul className="flex flex-col justify-evenly md:flex-row">
              {RESULTS[style].ATTACHMENT_EXPLAIN.bullets.map(
                (bullet_point: string, index: number) => (
                  <li key={`traits1_${index}`} className="md:w-1/3 flex items-start mb-4">
                    <Icon
                      className="text-green-check pt-[3px] pr-2"
                      name="circle-check"
                      type="regular"
                    />

                    <Text.Paragraph className="text-left font-semibold" content={bullet_point} />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* GOOD_NEWS */}
      <section className="w-full px-4 mb-8">
        <div className="default-padding max-w-5xl bg-purple-dark rounded-20 mx-auto">
          <div className="text-white mx-auto">
            <Text.Heading
              className="text-2xl md:text-md"
              content={RESULTS[style].GOOD_NEWS.header}
            />

            <div>
              <Text.Paragraph
                className="font-medium mt-8 mb-2"
                content={RESULTS[style].GOOD_NEWS.copy1}
              />

              <Text.Paragraph className="my-4" content={RESULTS[style].GOOD_NEWS.copy2} />

              <Text.Paragraph className="my-4" content={RESULTS[style].GOOD_NEWS.copy3} />
            </div>

            <div>
              <Button
                className="hidden bg-gradient-to-b from-yellow-tertiary-light to-yellow-tertiary uppercase font-bold !text-black border-none xxs:inline"
                label="SIGN UP NOW"
                onClick={(e) => onGoToCheckout(e, 1)}
              />
            </div>
          </div>
        </div>

        <Button
          className="bg-gradient-to-b from-yellow-tertiary-light to-yellow-tertiary uppercase font-bold !text-black border-none mt-6 xxs:hidden"
          label="SIGN UP NOW"
          onClick={(e) => onGoToCheckout(e, 2)}
        />
      </section>

      <div className="text-center">
        <Text.Paragraph
          className="default-padding my-4 font-bold !tracking-0.325 !text-2xl"
          content="WE HAVE BEEN FEATURED ON:"
        />

        <Trustbar.Slider />
      </div>

      {/* PROMOTION_1 | "BY TAKING OUR [STYLE] COURSE..." | COUNT DOWN TIMER */}
      <section className="w-full bg-gradient-to-b from-white via-primary-light-4 to-primary-light-4 mt-8">
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="max-w-5xl flex flex-col items-center mx-4">
            <Text.Heading
              className="max-w-2x uppercase font-effra font-bold l mb-8"
              content={RESULTS[style].PROMOTION_1.title}
              size={1}
            />

            {/* STAR BULLET */}
            <div className="flex flex-col md:flex-row md:items-start md:px-8">
              {/* LEFT COL  */}
              <div className="md:w-1/2 md:px-8">
                {RESULTS[style].PROMOTION_1.bullets.left.map((bullet, index) => (
                  <List
                    key={index}
                    className="flex flex-row"
                    classNameIcon="text-yellow-secondary text-xl"
                    classNameListItems="text-left mb-8"
                    iconName="star"
                    listItems={[`${bullet}`]}
                  />
                ))}
              </div>
              {/* RIGHT COL */}
              <div className="md:w-1/2 md:px-8">
                {RESULTS[style].PROMOTION_1.bullets.right.map((bullet, index) => (
                  <List
                    key={index}
                    className="flex flex-row"
                    classNameIcon="text-yellow-secondary text-xl"
                    classNameListItems="text-left mb-8"
                    iconName="star"
                    listItems={[`${bullet}`]}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center my-8 lg:px-8">
              {/* LEFT COL  */}
              <div className="flex justify-center items-center lg:w-1/2 lg:px-8">
                <div className="w-3/4 max-w-xs lg:w-full">
                  <Image alt="Money back 7 day Guarantee" src="money-back-7-day.png" />
                </div>
              </div>
              {/* RIGHT COL */}
              <div className="max-w-3xl text-left mt-8 lg:w-1/2 lg:mt-0 lg:px-8">
                <Text.Paragraph
                  useMD
                  className="my-4 text-primary !text-lg"
                  content={RESULTS[style].PROMOTION_1.copy6.part1}
                />

                <Text.Paragraph
                  useMD
                  className="my-4 !text-lg"
                  content={RESULTS[style].PROMOTION_1.copy6.part2}
                />

                <Text.Paragraph
                  className="my-4 !text-lg"
                  content={RESULTS[style].PROMOTION_1.copy6.part3}
                />
              </div>
            </div>

            <div className="my-4">
              <Text.Heading
                className="text-black mb-8"
                content={RESULTS[style].PROMOTION_2.title}
                size={1}
              />

              <Text.Paragraph
                className="max-w-xl mx-auto mb-8 text-black"
                content={RESULTS[style].PROMOTION_2.copy1}
              />

              <Button
                className="bg-gradient-to-b from-[#FFDE89] to-yellow-tertiary uppercase font-bold text-black border-none"
                label="SIGN UP NOW"
                onClick={(e) => onGoToCheckout(e, 3)}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-light-4">
        <div className="default-padding pt-4 lg:pt-8">
          <div>
            <div className="my-8">
              {offerEndDate ? (
                <CountdownTimer date={offerEndDate} theme="light" />
              ) : (
                <Loader className="!py-8 lg:py-10" />
              )}
            </div>
          </div>
        </div>
        {/* BANNER IMAGE TRANSITION */}
        <div className="w-full">
          <Image src="RoyalRumbleResultsPage/promo2_banner.png" />
        </div>
      </section>

      {/* PROMOTION_2 |  "AND AS A SPECIAL BONUS" */}
      <section className="w-full relative bg-blue-lightest flex justify-center z-10">
        <div className="max-w-5xl flex flex-col items-center mx-4 mb-8 -mt-12 md:max-w-5xl md:-mt-36 lg:-mt-48 xl:-mt-60 ">
          <Text.Heading
            className="font-bold tracking-[2px] "
            content="And As A Special Bonus:"
            size={1}
          />
          <div className="flex flex-col-reverse lg:flex-row mt-8 lg:px-8">
            {/* LEFT COL  */}
            <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0 lg:w-1/2 lg:px-8">
              <div className="max-w-xl">
                <Video
                  hideVideoControlsOnPlay
                  playAuto
                  playInline
                  playButtonSize="none"
                  srcUrl="https://storage.googleapis.com/pds_videos/SSPDashboard.mp4"
                />
              </div>

              <Image alt="" className="mt-4 sm:mt-8" src="RoyalRumbleResultsPage/promo2.png" />
            </div>
            {/* RIGHT COL */}
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-start lg:px-8">
              <div className="flex flex-col items-center text-left lg:items-start">
                <Text.Paragraph
                  className="font-bold mb-4"
                  content={RESULTS[style].PROMOTION_2.special_bonus.copy1}
                />

                <Text.Paragraph
                  className="font-bold mb-4"
                  content={RESULTS[style].PROMOTION_2.special_bonus.copy2}
                />

                <Text.Paragraph
                  className="w-full font-bold text-xl text-purple-dark mb-4"
                  content={RESULTS[style].PROMOTION_2.special_bonus.copy3}
                />

                <Text.Paragraph
                  className="mb-4"
                  content={RESULTS[style].PROMOTION_2.special_bonus.copy4}
                />

                <Text.Paragraph
                  className="mb-4"
                  content={RESULTS[style].PROMOTION_2.special_bonus.copy5}
                />

                <Text.Paragraph
                  className="mb-4"
                  content={RESULTS[style].PROMOTION_2.special_bonus.copy6}
                />

                <Text.Paragraph
                  className="font-bold mb-4"
                  content={RESULTS[style].PROMOTION_2.copy2}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center my-8 lg:justify-start">
            <Button
              className="bg-gradient-to-b from-purple-medium to-purple-dark font-bold hover:!text-white"
              label="SIGN UP NOW"
              onClick={(e) => onGoToCheckout(e, 4)}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-blue-lightest flex justify-center pt-8">
        <div className="max-w-5xl flex flex-col items-center mx-4 mb-16 md:max-w-5xl">
          <Text.Paragraph
            className="max-w-xl font-bold"
            content={RESULTS[style].PROMOTION_2.special_bonus.copy7}
          />

          <Text.Paragraph
            className="max-w-xl mt-8"
            content={RESULTS[style].PROMOTION_2.special_bonus.copy8}
          />

          <div className="flex flex-col items-center md:flex-row mt-8">
            <div className="max-w-md md:w-1/2 md:mr-8">
              <Image
                alt="7 Days to Transform Relationship Course Thumbnail"
                className="rounded-3xl "
                src="RoyalRumbleResultsPage/video_thumbnail.png"
              />
            </div>

            <div className="text-left md:w-1/2 mt-4 md:mt-0 md:px-4">
              <div className="hidden md:block max-w-xl mt-4">
                <Text.Paragraph
                  className="inline"
                  content={RESULTS[style].PROMOTION_2.special_bonus.copy9}
                />

                <Text.Paragraph
                  className="inline"
                  content={RESULTS[style].PROMOTION_2.special_bonus.copy10}
                />
              </div>
              <div className="block md:hidden max-w-xl">
                <Text.Paragraph content={RESULTS[style].PROMOTION_2.special_bonus.copy9} />

                <Text.Paragraph
                  className="mt-4"
                  content={RESULTS[style].PROMOTION_2.special_bonus.copy10}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTION_3 | "IN CASE YOU'RE WONDERING */}
      <section className="w-full flex flex-col justify-center px-4">
        <div className="max-w-5xl flex flex-col mx-auto mb-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="text-left">
            <Text.Paragraph className="font-bold mt-4" content={RESULTS[style].PROMOTION_3.copy1} />

            <Text.Paragraph className="mt-4" content={RESULTS[style].PROMOTION_3.copy2} />
          </div>

          <div className="text-left">
            <Text.Paragraph className="mt-4" content={RESULTS[style].PROMOTION_3.copy3} />

            <Text.Paragraph className="mt-4" content={RESULTS[style].PROMOTION_3.copy4} />

            <Text.Paragraph className="mt-4" content={RESULTS[style].PROMOTION_3.copy5} />
          </div>
        </div>
        <div>
          <Button
            className="bg-gradient-to-b from-purple-medium to-purple-dark my-8 hover:!text-white"
            label="SIGN UP NOW"
            onClick={(e) => onGoToCheckout(e, 5)}
          />
        </div>
      </section>

      <Carousel.Testimonial
        className="lg:mt-12"
        classNameHeader="px-2 !text-purple-dark !text-4xl"
      />

      {/* TESTIMONIAL (CAN THIS COURSE REALLY HELP YOU) */}
      <section className="w-full flex justify-center">
        <div className="max-w-5xl flex flex-col items-center mx-4 my-8">
          <Text.Heading
            className="text-purple-dark mb-4"
            content={RESULTS[style].TESTIMONIAL.title}
            size={1}
          />

          <Text.Paragraph content={RESULTS[style].TESTIMONIAL.subtitle} />

          {/* VIDEO TESTIMONIAL */}
          <div className="w-full flex flex-col justify-center mt-8 lg:mt-12">
            <div className="mx-auto">
              <Video.Youtube
                maxHeight={512}
                videoId={RESULTS[style].TESTIMONIAL_VIDEO_URL}
                onPlay={() => onVideoStarted('testimonial')}
              />
            </div>

            <div className="my-8">
              <Button
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none hover:!text-white"
                label="SIGN UP NOW"
                onClick={(e) => onGoToCheckout(e, 6)}
              />
            </div>
          </div>

          <div className="flex flex-col lg:items-start lg:my-8 lg:px-8">
            {/* LEFT COL  */}
            <div className="flex flex-col items-center mt-8 lg:flex-row lg:justify-around lg:px-8">
              <div className="max-w-sm px-8 lg:w-1/2 lg:max-w-md">
                <Image alt="" src="RoyalRumbleResultsPage/testimonial1.png" />
              </div>
              <div className="lg:w-1/2">
                <Text.Heading
                  className="max-w-md font-lg text-left mt-8"
                  content={RESULTS[style].TESTIMONIAL.story1.title}
                  size={1}
                />

                {RESULTS[style].TESTIMONIAL.story1.copy.map((copy, index) => (
                  <Text.Paragraph
                    key={`testimonial_story1_${index}`}
                    className="max-w-md text-left mt-4"
                    content={copy}
                  />
                ))}
              </div>
            </div>
            {/* RIGHT COL */}
            <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-around lg:px-8 mt-8 lg:mt-0">
              <div className="max-w-sm lg:w-1/2 lg:max-w-md">
                <Image alt="" className="px-8" src="RoyalRumbleResultsPage/testimonial2.png" />
              </div>
              <div className="lg:w-1/2">
                <Text.Heading
                  className="max-w-md font-lg text-left mt-8"
                  content={RESULTS[style].TESTIMONIAL.story2.title}
                  size={1}
                />

                {RESULTS[style].TESTIMONIAL.story2.copy.map((copy, index) => (
                  <Text.Paragraph
                    key={`testimonial_story2_${index}`}
                    className="max-w-md text-left mt-4"
                    content={copy}
                  />
                ))}

                <Text.Paragraph
                  className="text-blue-darkest font-bold text-left underline mt-8 cursor-pointer"
                  content={RESULTS[style].TESTIMONIAL.ctaText}
                  onClick={onGoToCheckout}
                />
              </div>
            </div>

            <div className="w-full">
              <Text.Heading className="italic mt-12" content={RESULTS[style].TESTIMONIAL.quote} />
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTION_4 */}
      <section className="w-full flex justify-center bg-black">
        <div className="max-w-5xl text-white flex flex-col items-center mx-4 my-12">
          <Text.Paragraph
            className="max-w-lg font-bold mb-8"
            content={RESULTS[style].PROMOTION_4.copy1}
          />

          <Text.Paragraph
            className="max-w-lg font-bold  mb-8"
            content={RESULTS[style].PROMOTION_4.copy2}
          />

          <Text.Heading className="capitalize" content={RESULTS[style].PROMOTION_4.title} />
          <div className="flex flex-col my-8  md:items-start md:px-8">
            <div className="flex-col items-center md:flex-row md:justify-around md:px-8 ">
              <div className="max-w-sm mx-auto md:max-w-md px-16">
                <Image alt="" src="RoyalRumbleResultsPage/mirror.png" />
              </div>

              <div className="mt-8">
                <ol>
                  {RESULTS[style].PROMOTION_4.bullets.map((list, index) => (
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

          <Text.Paragraph className="max-w-3xl mb-8" content={RESULTS[style].PROMOTION_4.copy3} />

          <Text.Paragraph className="max-w-3xl mb-8" content={RESULTS[style].PROMOTION_4.copy4} />

          <Text.Paragraph className="max-w-3xl mb-8" content={RESULTS[style].PROMOTION_4.copy5} />

          <Text.Paragraph className="max-w-3xl mb-8" content={RESULTS[style].PROMOTION_4.copy6} />

          <Button
            className="bg-gradient-to-b from-purple-medium to-purple-dark border-none hover:!text-white"
            label="SIGN UP NOW"
            onClick={(e) => onGoToCheckout(e, 7)}
          />
        </div>
      </section>
    </Page>
  )
}
