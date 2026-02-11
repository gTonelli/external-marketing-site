// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Faq } from '@/components/Faq/Faq'
import { TestimonialSSP } from '@/components/Testimonial/variants/TestimonialSSP'
import { List } from '@/components/List'
import { faCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import {
  LIMITED_OFFER,
  LIMITED_OFFER_VARIANT,
  LIMITED_OFFER_SEO_CONFIG as SEO_CONFIG,
} from '../config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// utils
import { externalRoutes } from '@/utils/constants'

export interface ILimitedOfferPageParams {
  params: Promise<{
    style: 'ap' | 'da' | 'fa'
  }>
}

export async function generateMetadata({ params }: ILimitedOfferPageParams): Promise<Metadata> {
  const { style } = await params

  return {
    title: SEO_CONFIG[style].title,
    description: SEO_CONFIG[style].description,
    robots: 'noindex',
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }]
}

export default async function LimitedOfferVariantPage({ params }: ILimitedOfferPageParams) {
  const { style } = await params
  const pageCopy = LIMITED_OFFER[style]
  const pageVariant = LIMITED_OFFER_VARIANT[style]
  const checkoutUrl = externalRoutes.checkoutRegularSubscription.concat(
    `&promo_label=vsl-funnel-variant`
  )

  return (
    <Page page_name={`Limited Offer Variant B - ${style}`}>
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
              {pageVariant.HERO.headline}
            </p>

            <p className="font-bold mt-4">{pageVariant.HERO.copy}</p>

            <div className="mt-8">
              <div className="w-fit">
                <p className="text-center mb-2">Join Today and Save 30%</p>

                <ButtonCheckout
                  className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                  label="GET STARTED TODAY"
                  href={checkoutUrl}
                />
              </div>
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
            {LIMITED_OFFER_VARIANT.LOGO_FEATURE.title}
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
        <h2 className="text-center mt-8">{LIMITED_OFFER_VARIANT.QUOTE.headline}</h2>

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

              <p className="text-purple-dark tracking-33 text-center font-bold">
                {pageCopy.QUOTE.quote}
              </p>
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
            <p className="text-center mb-4">{LIMITED_OFFER_VARIANT.CTA.copyOne}</p>

            <p className="text-center">{pageCopy.CTA.copyTwo}</p>
          </div>
          <div className="mt-8">
            <ButtonCheckout
              className="!bg-blue !text-black !border-none drop-shadow-lg"
              label="SIGN UP"
              href={checkoutUrl}
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

                    <p className="text-left">
                      <strong>{point.text_bold}</strong> {point.text}
                    </p>
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

                    <p className="text-left">
                      <strong>{point.text_bold}</strong> {point.text}
                    </p>
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
                      <strong>{pageCopy.LEARN.bullet1.text_bold}</strong>{' '}
                      {pageCopy.LEARN.bullet1.text}
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
                      <strong>{pageCopy.LEARN.bullet2.text_bold}</strong>{' '}
                      {pageCopy.LEARN.bullet2.text}
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
                      <strong>{pageCopy.LEARN.bullet3.text_bold}</strong>{' '}
                      {pageCopy.LEARN.bullet3.text}
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
                      <strong>{pageCopy.LEARN.bullet4.text_bold}</strong>{' '}
                      {pageCopy.LEARN.bullet4.text}
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
                      <strong>{pageCopy.LEARN.bullet5.text_bold}</strong>{' '}
                      {pageCopy.LEARN.bullet5.text}
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
                      <strong>{pageCopy.LEARN.bullet6.text_bold}</strong>{' '}
                      {pageCopy.LEARN.bullet6.text}
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

      <section className="w-full my-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center mb-8">{LIMITED_OFFER_VARIANT.ACCESS.headline}</h2>

          {pageVariant.ACCESS.copy.map((copy, index) => (
            <p key={`access_copy_${index}`} className="mb-4">
              {copy}
            </p>
          ))}

          <div className="mb-4">
            <p>
              <strong>{pageVariant.ACCESS.feature.title}</strong>
            </p>

            <p>{pageVariant.ACCESS.feature.copy}</p>
          </div>

          {LIMITED_OFFER_VARIANT.ACCESS.features.map((feature, index) => (
            <div key={`access_feature_${index}`} className="mb-4">
              <p>
                <strong>{feature.title}</strong>
              </p>

              <p>{feature.copy}</p>
            </div>
          ))}
        </div>
      </section>

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

          <ul className="font-bold mb-8">
            {pageCopy.BEST_VALUE.intro.listItems.map((data, index) => (
              <li key={`offer_list_${index}`} className="font-bold">
                {data}
              </li>
            ))}
          </ul>

          <ButtonCheckout
            className="bg-gradient-to-b from-purple-medium to-purple-dark hover:!text-white"
            label="GET STARTED TODAY"
            href={checkoutUrl}
          />
        </div>
      </section>

      <section className="w-full my-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center mb-8">{pageVariant.PROGRAM.headline}</h2>

          {pageVariant.PROGRAM.copy.map((copy, index) => (
            <p key={`program_copy_${index}`} className="mb-4">
              {copy}
            </p>
          ))}

          <List
            icon={faCircle}
            iconSize="2xs"
            className="mb-8"
            classNameListItems="mb-4"
            classNameIcon="!text-black mt-1"
            listItems={pageVariant.PROGRAM.listItems}
          />

          <div className="text-center">
            <ButtonCheckout
              className="bg-gradient-to-b from-purple-medium to-purple-dark hover:!text-white"
              label="GET STARTED TODAY"
              href={checkoutUrl}
            />

            <p className="mt-4">Join Today and Get This $595 Progam FREE</p>
          </div>
        </div>
      </section>

      <section className="w-full my-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center mb-8">{LIMITED_OFFER_VARIANT.RISKFREE.headline1}</h2>

          {LIMITED_OFFER_VARIANT.RISKFREE.copy1.map((copy, index) => (
            <p key={`riskfree_copy1_${index}`} className="mb-4">
              {copy}
            </p>
          ))}

          <p>
            <strong>If you're single:</strong>
          </p>

          <p className="mb-4">{pageVariant.SINGLE}</p>

          <p>
            <strong>If you're in a relationship:</strong>
          </p>

          <p className="mb-8">{pageVariant.RELATIONSHIP}</p>

          <h2 className="text-center mb-8">{LIMITED_OFFER_VARIANT.RISKFREE.headline2}</h2>

          <p className="mb-8">{LIMITED_OFFER_VARIANT.RISKFREE.copy2}</p>

          <div className="text-center">
            <ButtonCheckout
              className="bg-gradient-to-b from-purple-medium to-purple-dark hover:!text-white"
              label="JOIN THE PERSONAL DEVELOPMENT SCHOOL"
              href={checkoutUrl}
            />

            <h3 className="my-8">{LIMITED_OFFER_VARIANT.RISKFREE.headline3}</h3>
          </div>

          {LIMITED_OFFER_VARIANT.RISKFREE.copy3.map((copy, index) => (
            <p key={`riskfree_copy3_${index}`} className="mb-4">
              {copy}
            </p>
          ))}

          <h3 className="text-center my-8">{LIMITED_OFFER_VARIANT.RISKFREE.headline4}</h3>

          {LIMITED_OFFER_VARIANT.RISKFREE.copy4.map((copy, index) => (
            <p key={`riskfree_copy4_${index}`} className="mb-4">
              {copy}
            </p>
          ))}
        </div>
      </section>

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
                  href={checkoutUrl}
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
            href={checkoutUrl}
          />
        </div>
      </section>

      {/* TESTIMONIAL CAROUSEL SECTION */}
      <TestimonialSSP />

      {/* FAQ SECTION */}
      <Faq />

      <div className="text-center my-8">
        <ButtonCheckout
          className="bg-gradient-to-b from-purple-medium to-purple-dark hover:!text-white"
          label="JOIN THE PERSONAL DEVELOPMENT SCHOOL"
          href={checkoutUrl}
        />
      </div>
    </Page>
  )
}
