// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Faq } from '@/components/Faq/Faq'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { TestimonialSSP } from '@/components/Testimonial/variants/TestimonialSSP'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { LIMITED_OFFER, LIMITED_OFFER_SEO_CONFIG as SEO_CONFIG } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// utils
import { TStyle } from '@/utils/types'

export interface ILimitedOfferPageParams {
  params: Promise<{
    style: TStyle
  }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export async function generateMetadata({ params }: ILimitedOfferPageParams): Promise<Metadata> {
  const { style } = await params

  return {
    title: SEO_CONFIG[style].title,
    description: SEO_CONFIG[style].description,
    robots: 'noindex',
  }
}

export default async function LimitedOfferPage({ params }: ILimitedOfferPageParams) {
  const { style } = await params
  const pageCopy = LIMITED_OFFER[style]

  return (
    <Page page_name={`Limited Offer - ${style}`}>
      {/* COUNT DOWN TIMER SECTION */}
      <section className="w-full bg-black">
        <div className="py-4">
          <CountdownTimer date={new Date(`2023-07-12T00:00:00`)} theme="dark" />
        </div>
      </section>
      {/* HERO SECTION */}
      <section className="relative w-full bg-blue-lightest md:bg-[#F3F3F4]">
        <Image
          alt="a blue blob vector"
          className="hidden md:block absolute top-0 right-0"
          src="/images/LimitedOfferPage/hero-vector.svg"
          width={500}
          height={500}
        />

        <div className="relative max-w-5xl flex flex-row justify-between items-center mx-auto py-16 px-4 md:px-8 lg:space-x-10">
          <div className="flex flex-col md:w-1/2">
            <p className="font-bold !text-4xl text-center md:text-left text-purple-dark px-4 md:px-0">
              {pageCopy.HERO.headline}
            </p>

            <p className="font-bold mt-4">{pageCopy.HERO.copy}</p>

            <div className="text-center mt-12 md:text-left">
              <ButtonCheckout
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="SIGN UP"
              />
            </div>
          </div>

          <div className="hidden md:block md:w-1/2">
            <Image
              alt="mockups of PDS platform accessible on different devices"
              src="/images/LimitedOfferPage/hero.png"
              width={891}
              height={411}
            />
          </div>
        </div>
      </section>

      {/* MOBILE WAVE */}
      <Image
        alt="a wave vector"
        width={643}
        height={83}
        className="md:hidden w-full"
        src="/images/LimitedOfferPage/hero-background-mobile.png"
      />

      {/* LOGO FEATURE SECTION */}
      <section className="hidden md:block w-full bg-[#F3F3F4]">
        <div className="py-8">
          <p className="font-xs font-semibold text-center uppercase tracking-[0.3em]">
            {LIMITED_OFFER.LOGO_FEATURE.title}
          </p>

          <ul className="max-w-3xl flex flex-row flex-wrap justify-between items-center mx-auto px-4 mt-8">
            {LIMITED_OFFER.LOGO_FEATURE.image.map((img, index) => (
              <li key={index}>
                <div className="h-full flex justify-center items-center">
                  <Image
                    alt={img.alt}
                    className="block w-[100px] h-[80px] max-w-full object-contain"
                    src={`/images/Logo_Brand/${img.name}.png`}
                    width={100}
                    height={80}
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
              <Image
                alt="a quote left icon"
                className="w-[30px] pb-2"
                src="/images/homepage_quote_left.png"
                width={30}
                height={30}
              />

              <p className="text-purple-dark tracking-33 text-center font-bold">{pageCopy.QUOTE.quote}</p>
            </div>
          </div>
          <div className="max-w-sm md:pl-8">
            <p className="mt-4">{pageCopy.QUOTE.copy1}</p>

            <p className="mt-4">{pageCopy.QUOTE.copy2}</p>
          </div>
        </div>
      </section>

      {/* LETS BE HONEST SECTION */}
      <Image
        alt="a wave vector"
        className="hidden md:block w-full"
        src="/images/LimitedOfferPage/background1.png"
        width={1000}
        height={392}
      />
      <section className="w-full bg-[#EADBEB] pt-16 pb-40 md:pt-0">
        <div className="flex flex-col items-center text-center px-4">
          <h2>{pageCopy.HONEST.headline}</h2>

          <p className="max-w-sm mt-6">{pageCopy.HONEST.subheadline}</p>

          <div className="max-w-5xl flex flex-col items-start lg:flex-row px-8">
            {pageCopy.HONEST.bullet.map((content, index) => (
              <div
                key={`trial_honest_${index}`}
                className="flex flex-col items-center mt-8 lg:mx-4">
                <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white">
                  <FontAwesomeIcon className="text-purple-dark" icon={content.icon} size="2x" />
                </div>

                <p className="max-w-sm text-center mt-4">{content.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <strong>{pageCopy.HONEST.copy1}</strong>
          </p>

          <p className="mt-8">
            <strong>{pageCopy.HONEST.copy2.text_bold1}</strong> {pageCopy.HONEST.copy2.text1}
          </p>

          <p className="max-w-lg">
            <strong>{pageCopy.HONEST.copy2.text_bold2}</strong> {pageCopy.HONEST.copy2.text2}{' '}
            <strong>{pageCopy.HONEST.copy2.text_bold3}</strong>
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full px-4 -mt-32 sm:-mt-28 md:-mt-24">
        <div className="max-w-4xl bg-purple-dark flex flex-col items-center rounded-20 mx-auto py-8 px-4">
          <div className="max-w-xl text-white mx-auto">
            <p className="text-center mb-4">{pageCopy.CTA.copyOne}</p>

            <p className="text-center">{pageCopy.CTA.copyTwo}</p>
          </div>
          <div className="mt-8">
            <ButtonCheckout
              className="!bg-blue !text-black !border-none drop-shadow-lg"
              label="SIGN UP"
            />
          </div>
        </div>
      </section>

      {/* YOU WILL LEARN + CHAT POP UP SECTION */}
      <section className="w-full  my-16">
        <div className="max-w-5xl flex flex-col items-center mx-auto px-4">
          <h2 className="mb-8">You Will Learn</h2>
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

                    <p className="text-left"><strong>{point.text_bold}</strong> {point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="-mt-16">
              <Image
                className="!w-auto"
                alt="a lady lying in bed using her phone"
                src="/images/LimitedOfferPage/you-will-learn.png"
                width={1000}
                height={1000}
              />
            </div>
            <ul className="px-4 -mt-16">
              {pageCopy.LEARN.bullet.part2.map((point, index) => (
                <li key={index} className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-4">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-2"
                      icon={faCircleCheck}
                    />

                    <p className="text-left"><strong>{point.text_bold}</strong> {point.text}</p>
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

                    <p className="text-left">
                      <strong>{pageCopy.LEARN.bullet1.text_bold}</strong> {pageCopy.LEARN.bullet1.text}
                    </p>
                  </div>
                </li>
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-8">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <p className="text-left">
                      <strong>{pageCopy.LEARN.bullet2.text_bold}</strong> {pageCopy.LEARN.bullet2.text}
                    </p>
                  </div>
                </li>
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-4 ml-12">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <p className="text-left">
                      <strong>{pageCopy.LEARN.bullet3.text_bold}</strong> {pageCopy.LEARN.bullet3.text}
                    </p>
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

                    <p className="text-left">
                      <strong>{pageCopy.LEARN.bullet4.text_bold}</strong> {pageCopy.LEARN.bullet4.text}
                    </p>
                  </div>
                </li>
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-16 ml-32">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <p className="text-left">
                      <strong>{pageCopy.LEARN.bullet5.text_bold}</strong> {pageCopy.LEARN.bullet5.text}
                    </p>
                  </div>
                </li>
                <li className="max-w-sm bg-white rounded-20 drop-shadow-2xl mb-4">
                  <div className="flex flex-col items-start px-4 py-8">
                    <FontAwesomeIcon
                      className="text-green-check pt-[3px] pr-4 pb-4"
                      icon={faCircleCheck}
                      size="lg"
                    />

                    <p className="text-left">
                      <strong>{pageCopy.LEARN.bullet6.text_bold}</strong> {pageCopy.LEARN.bullet6.text}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="absolute flex justify-center items-center inset-0 z-5">
              <Image
                alt="a lady lying in bed using her phone"
                className="w-auto h-3/5"
                src="/images/LimitedOfferPage/you-will-learn.png"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </section>

      {/* THE FEARFUL AVOIDANT 7 DAY TRANSFORMATION SECTION */}
      <section className="w-full my-16">
        <div className="max-w-5xl text-center px-4 mx-auto ">
          <h2 className="mb-4">{pageCopy.BEST_VALUE.intro.title}</h2>

          <p className="uppercase tracking-33 text-primary font-bold mb-8">
            {pageCopy.BEST_VALUE.intro.subtitle}
          </p>
          <p className="max-w-2xl mx-auto my-4">
            <strong>{pageCopy.BEST_VALUE.intro.copy1}</strong>
          </p>

          <p className="max-w-2xl mx-auto text-primary">
            <strong>{pageCopy.BEST_VALUE.intro.copy2}</strong>
          </p>

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
              <p className="w-[250px] text-center font-bold tracking-[0.4em] bg-yellow-secondary rounded-20 px-4 py-6">
                BEST VALUE
              </p>
            </div>

            <div className="flex flex-col items-start md:flex-row md:justify-center md:px-8 md:items-center">
              <div className="max-w-lg mx-auto md:max-w-sm text-left">
                <p className="mb-4">
                  <strong>{pageCopy.BEST_VALUE.course.copy1}</strong>
                </p>

                <p className="mb-4">{pageCopy.BEST_VALUE.course.copy2}</p>

                <p className="mb-4">{pageCopy.BEST_VALUE.course.copy3}</p>

                <p className="mb-4">{pageCopy.BEST_VALUE.course.copy4}</p>

                <p className="inline">{pageCopy.BEST_VALUE.course.copy5}</p>

                <p className="underline inline">limited time!</p>
              </div>

              <div className="w-full flex flex-col items-center justify-evenly mt-8 lg:mt-0 md:w-1/2 lg:pl-16">
                <div className="mb-10">
                  <CountdownTimer date={new Date(`2023-07-12T00:00:00`)} theme="light" />
                </div>

                <Image
                  alt="a course mockup"
                  className="max-w-md w-full mb-8"
                  src="/images/LimitedOfferPage/course-mock-up.png"
                  width={495}
                  height={362}
                />

                <p className="tracking-33 text-primary font-bold mb-4 lg:my-6">
                  {pageCopy.BEST_VALUE.cta_text}
                </p>

                <div className="mt-4 mb-8">
                  <ButtonCheckout
                    className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                    label="SIGN UP"
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
              <p key={index} className="mb-4 !text-lg">
                {text}
              </p>
            ))}
            <div className="flex justify-center my-16 md:hidden">
              <ButtonCheckout
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="SIGN UP"
              />
            </div>
          </div>

          {/* right col */}
          <div className="flex justify-center md:w-1/2 md:pr-8">
            <Image
              alt="Money back 7 day Guarantee"
              className="w-3/4 max-w-xs"
              src="/images/money-back-7-day.png"
              width={335}
              height={335}
            />
          </div>
        </div>

        <div className="hidden mt-16 md:flex md:justify-center">
          <ButtonCheckout
            className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
            label="SIGN UP"
          />
        </div>
      </section>

      {/* HOW DO I KNOW THAT THIS WORKS SO QUICKLY SECTION*/}
      <section className="w-full flex justify-center">
        <div className="max-w-5xl flex flex-col items-center mx-4 my-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-4">
              {pageCopy.SPECIAL_BONUS.headline}
            </h2>

            <p className="max-w-xl mb-4">{pageCopy.SPECIAL_BONUS.description}</p>

            <p className="max-w-xl tracking-33 mb-4"><strong>AND AS A SPECIAL BONUS:</strong></p>
          </div>

          <div className="flex flex-col md:flex-row mt-8 md:px-8">
            {/* left col  */}
            <div className="md:w-1/2 md:flex md:flex-col md:justify-start md:px-8">
              <div className="flex flex-col items-center text-left md:items-start">
                {pageCopy.SPECIAL_BONUS.copy.map((text, index) => (
                  <p key={`trial_special_bonus_copy_${index}`} className="mb-4">
                    {text}
                  </p>
                ))}
              </div>
            </div>
            {/* right col */}
            <div className="flex flex-col items-center  md:items-end mt-8 md:mt-0 md:w-1/2 md:px-8">
              <Image
                alt="image of thais in a webinar"
                className="mt-4 sm:mt-8"
                src="/images/RoyalRumbleResultsPage/promo2.png"
                width={1516}
                height={804}
              />

              <VideoThumbnail
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
          <p className="font-xs font-semibold text-center uppercase tracking-[0.3em] px-4">
            {LIMITED_OFFER.LOGO_FEATURE.title}
          </p>

          <ul className="grid grid-cols-3 gap-4 mt-8">
            {LIMITED_OFFER.LOGO_FEATURE.image.map((img, index) => (
              <li key={index}>
                <div className="h-full flex justify-center items-center">
                  <Image
                    alt={img.alt}
                    className="block w-[100px] h-[50px] max-w-full object-contain"
                    src={`/images/Logo_Brand/${img.name}.png`}
                    width={100}
                    height={80}
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
              <h2 className="text-white text-2xl">Discount Offer Expires Soon.</h2>

              <h2 className="text-white text-2xl">Claim Your Offer Now.</h2>

              {/* <div className="text-center px-0 mt-2"> */}
              <CountdownTimer date={new Date(`2023-07-12T00:00:00`)} theme="dark" />
              {/* </div> */}

              <div className="pt-4">
                <ButtonCheckout
                  className="bg-blue text-black border-none drop-shadow-lg"
                  label="SIGN UP"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAVE IMAGE BACKGROUND */}
      <Image
        alt="wave image background"
        className="w-full -mt-36 md:-mt-24"
        src="/images/LimitedOfferPage/background2.png"
        width={1000}
        height={140}
      />
      {/* INSTRUCTOR INTRO | "WHO TEACHES THIS COURSES SECTION" */}
      <section className="w-full bg-blue-lightest flex flex-col justify-center">
        <div className="max-w-5xl flex flex-col items-center mx-auto mt-8">
          <div className="flex flex-col justify-between md:flex-row">
            <div className="flex flex-col items-center px-4 mt-8 md:items-start md:max-w-xl">
              <h2 className="max-w-xl font-bold text-center">{pageCopy.INSTRUCTOR.title}</h2>

              {pageCopy.INSTRUCTOR.copy.map((text: string, index: number) => (
                <p key={`trial_instructor_copy_${index}`} className="mt-8">
                  {text}
                </p>
              ))}

              <div className="flex flex-col justify-center my-8 md:mt-16">
                <ButtonCheckout
                  className="bg-gradient-to-b from-purple-medium to-purple-dark hover:!text-white"
                  label="SIGN UP"
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-center md:items-end md:flex-row-reverse">
              <Image
                alt="image of thais in a mobile"
                className="max-w-sm w-full md:hidden"
                src="/images/LimitedOfferPage/thais-mobile.png"
                width={617}
                height={695}
              />

              <Image
                alt="image of thais in a desktop"
                className="hidden max-w-sm md:block"
                src="/images/LimitedOfferPage/thais-desktop.png"
                width={701}
                height={1053}
              />
            </div>
          </div>
        </div>
      </section>

      {/* MIRROR | "I WANT TO ASK YOU TO COURAGEOUSLY REFLECT SECTION" */}
      <section className="w-full flex justify-center bg-black pb-8  md:pb-60">
        <div className="max-w-5xl text-white flex flex-col items-center mx-4 my-12">
          <h2 className="text-center">{pageCopy.REFLECT.title}</h2>

          <div className="flex flex-col my-8  md:items-start md:px-8">
            <div className="flex flex-col items-center md:flex-row md:justify-around md:px-8 ">
              <div className="max-w-sm md:max-w-md px-8">
                <Image
                  alt="vector illustration of a woman engaged in thought while looking at her laptop screen"
                  src="/images/LimitedOfferPage/reflect.png"
                  width={440}
                  height={392}
                />
              </div>

              <div className="mt-8">
                <ol>
                  {pageCopy.REFLECT.bullets.map((list, index) => (
                    <li
                      key={`promo4_list_${index}`}
                      className="flex flex-row items-start justify-start mb-4">
                      <div className="mx-4">
                        <p className="w-8 h-8 border-2 border-purple-dark rounded-full flex items-center justify-center">
                          {index + 1}
                        </p>
                      </div>

                      <p className="text-left">{list}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <p className="max-w-3xl text-center mb-8">{pageCopy.REFLECT.copy1}</p>

          <p className="max-w-3xl text-center mb-8">{pageCopy.REFLECT.copy2}</p>

          <ButtonCheckout
            className="bg-blue text-black border-none drop-shadow-lg"
            label="SIGN UP"
          />
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL SECTION */}
      <TestimonialSSP />

      {/* FAQ SECTION */}
      <Faq />
    </Page>
  )
}