// core
import Image from 'next/image'
// components
import { AttachmentQuizHeading } from '@/components/AttachmentQuiz/AttachmentQuizHeading'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import { CheckoutButton } from '@/components/CheckoutButton'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Icon } from '@/components/Icon'
import { List } from '@/components/List'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { VideoDefault } from '@/components/Video/variants/VideoDefault'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// config
import { RESULTS } from './config'
// utils
import { EExternalRoutes, ERoutes } from '@/utils/constants'

interface IFAResultsPageProps {
  ageVariant?: boolean
}

export const FAResultsPage = ({ ageVariant = false }: IFAResultsPageProps) => {
  const style = 'fa'

  return (
    <>
      {/* HERO_SECTION */}
      <section className="w-full">
        <div className="bg-gradient-to-b from-blue-lightest to-white via-blue-lightest">
          <div className="flex flex-col justify-center items-center max-w-5xl pt-10 md:pt-20 px-4 md:mx-auto">
            <AttachmentQuizHeading
              copy={RESULTS[style].HERO_SECTION.headline}
              className="!font-ssp !text-3xl capitalize lg:!text-4xl"
            />

            <p className="max-w-3xl uppercase font-bold my-4">
              {RESULTS[style].HERO_SECTION.subheadline}
            </p>

            {/* BANNER BACKGROUND */}
            <div className="max-w-5xl w-full md:my-8">
              <div className="flex flex-col md:flex-row justify-center items-center space-x-6 md:px-8">
                <div>
                  <VideoThumbnail
                    srcUrl={RESULTS[style].HERO_SECTION.videoURL}
                    thumbnailAlt={`Fearful Avoidant video ${style} thumbnail`}
                    thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
                    type="default"
                    variantVideoData={{
                      key: 'GM-1152-FA-Video-control-vs-control',
                      videoId: RESULTS[style].HERO_SECTION.videoURL,
                      splitRatio: 0.5,
                    }}
                  />
                </div>

                <div className="!mx-0 mb-4 md:text-left md:!m-4 md:w-1/2">
                  <h2 className="text-purple-dark !text-3xl hidden md:block">
                    {RESULTS[style].HERO_SECTION.title}
                  </h2>

                  <p className="mt-4 hidden md:block">{RESULTS[style].HERO_SECTION.copy}</p>

                  <h2 className="text-purple-dark !text-3xl mt-6 md:hidden">
                    {RESULTS[style].HERO_SECTION.title}
                  </h2>

                  <p className="mt-4 md:hidden">{RESULTS[style].HERO_SECTION.copy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DOES ANY OF THIS SOUND LIKE YOU */}
      <section className="w-full">
        <h2 className="text-purple-dark mb-4 text-2xl">Does Any Of This Sound Like You?</h2>

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
            <p className="max-w-2xl mx-auto mb-4 lg:mb-8">{RESULTS[style].STYLE_TRAITS.copy1}</p>

            {ageVariant ? (
              <p className="max-w-2xl font-bold mx-auto mb-4 lg:mb-8">
                At the Personal Development School, we have a tailored program and suite of tools to
                assist you in changing these patterns in his little seven days. This will allow you
                to improve existing relationships, create lasting love, and build new relationships
                with emotionally available people. Click the button below to enroll in exclusive
                access. By signing up today, you will save $265 for a limited time.
              </p>
            ) : (
              <p className="max-w-2xl font-bold mx-auto mb-4 lg:mb-8">
                {RESULTS[style].STYLE_TRAITS.copy2}
              </p>
            )}

            <CheckoutButton theme="secondary" />
          </div>
        </div>
      </section>

      {/* ATTACHMENT_EXPLAIN | WHAT IS AN ATTACHMENT STYLE */}
      <section className="w-full flex flex-col items-center px-4 pt-8">
        <div className="max-w-5xl mb-8">
          <h2 className="text-purple-dark text-3xl mb-4 px-4">
            {RESULTS[style].ATTACHMENT_EXPLAIN.title}
          </h2>

          {style === 'fa' && (
            <p className="uppercase font-bold !tracking-0.325 mb-8 md:mb-10">
              {RESULTS[style].ATTACHMENT_EXPLAIN.subtitle}
            </p>
          )}

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

                    <p className="text-left font-semibold">{bullet_point}</p>
                  </li>
                )
              )}
            </ul>
          </div>

          {style !== 'fa' && (
            <div>
              <p className="font-bold mb-8 md:mb-10">
                Everyone has an attachment style. Traditionally, attachment styles were considered
                permanent; you couldn't change them. But at The Personal Development School, we have
                the tools, strategies, and processes to help you reprogram them to become more
                secure in yourself and your relationship.
              </p>

              <CheckoutButton />
            </div>
          )}
        </div>
      </section>

      {/* GOOD_NEWS */}
      <section className="w-full px-4 mb-8">
        <div className="default-padding max-w-5xl bg-purple-dark rounded-20 mx-auto">
          <div className="text-white mx-auto">
            <h2 className="text-2xl md:text-md">{RESULTS[style].GOOD_NEWS.header}</h2>

            {ageVariant ? (
              <div className="text-left px-10 lg:px-16">
                <p className="mt-8 mb-4">
                  We have created a bundle of three specialized courses that will help you let go of
                  painful relationship patterns, overcome negative emotions, and create fulfilling
                  relationships in your life.
                </p>

                <p className="font-bold my-4">
                  This bundle includes permanent access to three courses that are specifically
                  designed to teach you everything you need to know about building lasting,
                  passionate relationships. You’ll get access to:
                  <br />
                  1. The Fearful Avoidant Introductory Course <br />
                  2. The Handbook For a Better Life Course <br />
                  3. The Discover, Embrace and Fulfill Your Personal Needs Course
                  <br /> <br />
                  These courses are accessible 24/7 and can be watched anywhere, any time and at
                  your own pace.
                </p>

                <p className="my-4">
                  In less than an hour, you will learn the insights about your attachment style and
                  the 3 key ingredients you need to empower any relationship in your life that feels
                  stuck.
                </p>

                <p className="my-4">
                  You can join over 45,000 students who have taken these courses and have given us a
                  99.7% satisfaction score!
                </p>
              </div>
            ) : (
              <div>
                <p className="font-medium mt-8 mb-2">{RESULTS[style].GOOD_NEWS.copy1}</p>

                <p className="my-4">{RESULTS[style].GOOD_NEWS.copy2}</p>

                <p className="my-4">{RESULTS[style].GOOD_NEWS.copy3}</p>
              </div>
            )}

            <CheckoutButton className="bg-gradient-to-b from-yellow-tertiary-light to-yellow-tertiary uppercase font-bold !text-black border-none" />
          </div>
        </div>
      </section>

      <div className="text-center">
        <p className="default-padding my-4 font-bold !tracking-0.325 !text-2xl">
          WE HAVE BEEN FEATURED ON:
        </p>

        <TrustbarSlider />
      </div>

      {/* PROMOTION_1 | "BY TAKING OUR [STYLE] COURSE..." | COUNT DOWN TIMER */}
      <section className="w-full bg-gradient-to-b from-white to-purple-dark to-95% mt-8">
        <div className="w-full flex flex-col items-center justify-center ">
          <div className="max-w-5xl flex flex-col items-center mx-4">
            <h1 className="max-w-2x uppercase font-effra font-bold l mb-8">
              {ageVariant
                ? 'BY TAKING OUR FEARFUL AVOIDANT COURSE BUNDLE, YOU WILL LEARN...'
                : RESULTS[style].PROMOTION_1.title}
            </h1>

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
                  <Image
                    alt="Money back 7 day Guarantee"
                    className="w-full"
                    src="/images/money-back-7-day.png"
                    width={224}
                    height={224}
                  />
                </div>
              </div>
              {/* RIGHT COL */}
              <div className="max-w-3xl text-left mt-8 lg:w-1/2 lg:mt-0 lg:px-8">
                {ageVariant ? (
                  <>
                    <p className="font-bold mb-4">
                      If you join today, you’ll get these courses for a one-time fee of just $34.99,
                      which is an additional $265 off of the original price—and you’ll get to keep
                      the courses for life!
                    </p>

                    <p className="my-4">
                      On top of that, we offer a full 7-day money-back guarantee if you don’t see
                      the massive breakthrough in your dating and love life that you’ve been waiting
                      for. Just ask for a refund before your first 7 days are up, and we’ll get you
                      a full refund.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="my-4 text-primary !text-lg">
                      {RESULTS[style].PROMOTION_1.copy6.part1}
                    </p>

                    <p className="my-4 !text-lg">{RESULTS[style].PROMOTION_1.copy6.part2}</p>

                    <p className="my-4 !text-lg">{RESULTS[style].PROMOTION_1.copy6.part3}</p>
                  </>
                )}
              </div>
            </div>

            <div className="my-4">
              <h2 className="text-white mb-8">{RESULTS[style].PROMOTION_2.title}</h2>

              <p className="max-w-xl mx-auto mb-8 text-white">
                {ageVariant
                  ? "Because the first course in the bundle is only an hour long, it's easy to get through within 7 days. And it gives you everything you need to start experiencing major breakthroughs in your relationships - fast!"
                  : RESULTS[style].PROMOTION_2.copy1}
              </p>

              <CheckoutButton className="bg-gradient-to-b !from-[#FFDE89] !to-yellow-tertiary uppercase font-bold text-black border-none" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-dark">
        <div className="default-padding pt-4 lg:pt-8">
          <div>
            <div className="my-8">
              <CountdownTimer theme="dark" />
            </div>
          </div>
        </div>
        {/* BANNER IMAGE TRANSITION */}
        <div className="w-full">
          <Image
            alt="A collection of PDS course mockups on desktop web browsers."
            className="w-full"
            src="/images/RoyalRumbleResultsPage/promo2_banner.png"
            width={425}
            height={167}
            sizes="100vw"
          />
        </div>
      </section>

      {/* PROMOTION_2 |  "AND AS A SPECIAL BONUS" */}
      <section className="w-full relative bg-blue-lightest flex justify-center z-10">
        <div className="max-w-5xl flex flex-col items-center mx-4 mb-8 -mt-12 md:max-w-5xl md:-mt-36 lg:-mt-48 xl:-mt-60 ">
          <h2 className="font-bold tracking-[2px] ">And As A Special Bonus:</h2>

          <div className="flex flex-col-reverse lg:flex-row my-8 lg:px-8">
            {/* LEFT COL  */}
            <div className="flex flex-col items-center lg:items-end mt-8 lg:mt-0 lg:w-1/2 lg:px-8">
              <div className="max-w-xl">
                <VideoDefault
                  hideVideoControlsOnPlay
                  playAuto
                  playInline
                  playButtonSize="none"
                  srcUrl="https://storage.googleapis.com/pds_videos/SSPDashboard.mp4"
                />
              </div>

              <Image
                alt="Promotion Course Thumbnail for FA"
                className="mt-4 sm:mt-8"
                src="/images/RoyalRumbleResultsPage/promo2.png"
                width={288}
                height={152}
              />
            </div>
            {/* RIGHT COL */}
            <div className="lg:w-1/2 lg:flex lg:flex-col lg:justify-start lg:px-8">
              <div className="flex flex-col items-center text-left lg:leading-snug lg:items-start">
                {ageVariant ? (
                  <>
                    <p className="font-bold mb-4">
                      When you join today, you’ll also get access to our supportive community of
                      members through live chat or our Facebook-style forum. Here, you can ask your
                      relationship questions and receive guidance from others who are on the same
                      journey.
                    </p>

                    <p className="font-bold text-xl text-purple-dark mb-4">
                      With the Fearful Avoidant Attachment Style Bundle, you will learn the secret
                      ingredients to understand your attachment style, your needs, and what
                      motivates you to invest in relationships.
                    </p>

                    <p className="mb-4">
                      You might be wondering why I'm offering you access to these breakthrough
                      courses and our community for such a low price.
                    </p>

                    <p className="mb-4">
                      The short answer is because I know that these techniques actually work, so I
                      want to help you overcome painful attachment style patterns, just like I did.
                      I also know that once you've taken a first course, you will likely be excited
                      about diving into more of them so I can support you in other areas of your
                      life.
                    </p>

                    <p className="font-bold">
                      Use the Fearful Avoidant Course Bundle to Create Deep Inner Healing, Lasting
                      Connection and Success in Your Love Life!
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold mb-4">
                      {RESULTS[style].PROMOTION_2.special_bonus.copy1}
                    </p>

                    <p className="font-bold mb-4">
                      {RESULTS[style].PROMOTION_2.special_bonus.copy2}
                    </p>

                    <p className="w-full font-bold text-xl text-purple-dark mb-4">
                      {RESULTS[style].PROMOTION_2.special_bonus.copy3}
                    </p>

                    <p className="mb-4">{RESULTS[style].PROMOTION_2.special_bonus.copy4}</p>

                    <p className="mb-4">{RESULTS[style].PROMOTION_2.special_bonus.copy5}</p>

                    <p className="mb-4">{RESULTS[style].PROMOTION_2.special_bonus.copy6}</p>

                    <p className="font-bold mb-4">{RESULTS[style].PROMOTION_2.copy2}</p>
                  </>
                )}
              </div>
            </div>
          </div>

          <CheckoutButton className="font-bold" theme="secondary" />
        </div>
      </section>

      <section className="w-full bg-blue-lightest flex justify-center pt-8">
        <div className="max-w-5xl flex flex-col items-center mx-4 mb-16 md:max-w-5xl">
          <p className="max-w-xl font-bold">{RESULTS[style].PROMOTION_2.special_bonus.copy7}</p>

          <p className="max-w-xl mt-8">{RESULTS[style].PROMOTION_2.special_bonus.copy8}</p>

          <div className="flex flex-col items-center md:flex-row mt-8">
            <div className="max-w-md md:w-1/2 md:mr-8">
              <Image
                alt={RESULTS[style].PROMOTION_2.special_bonus.thumbnail.alt}
                className="rounded-3xl w-full"
                src={`/images/${RESULTS[style].PROMOTION_2.special_bonus.thumbnail.src}`}
                width={288}
                height={163}
              />
            </div>

            <div className="text-left md:w-1/2 mt-4 md:mt-0 md:px-4">
              <div className="hidden md:block max-w-xl mt-4">
                <p className="inline">{RESULTS[style].PROMOTION_2.special_bonus.copy9}</p>

                <p className="inline">{RESULTS[style].PROMOTION_2.special_bonus.copy10}</p>
              </div>
              <div className="block md:hidden max-w-xl">
                <p>{RESULTS[style].PROMOTION_2.special_bonus.copy9}</p>

                <p className="mt-4">{RESULTS[style].PROMOTION_2.special_bonus.copy10}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTION_3 | "IN CASE YOU'RE WONDERING */}
      <section className="w-full flex flex-col justify-center px-4">
        <div className="max-w-5xl flex flex-col mx-auto mb-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
          <div className="text-left">
            <p className="font-bold mt-4">{RESULTS[style].PROMOTION_3.copy1}</p>

            <p className="mt-4">{RESULTS[style].PROMOTION_3.copy2}</p>
          </div>

          <div className="text-left">
            <p className="mt-4">{RESULTS[style].PROMOTION_3.copy3}</p>

            <p className="mt-4">{RESULTS[style].PROMOTION_3.copy4}</p>

            <p className="mt-4">{RESULTS[style].PROMOTION_3.copy5}</p>
          </div>
        </div>

        <CheckoutButton theme="secondary" />
      </section>

      <CarouselTestimonial
        className="lg:mt-12"
        classNameHeader="px-2 !text-purple-dark !text-4xl"
      />

      {/* TESTIMONIAL (CAN THIS COURSE REALLY HELP YOU) */}
      <section className="w-full flex justify-center">
        <div className="max-w-5xl flex flex-col items-center mx-4 my-8">
          <h2 className="text-purple-dark mb-4">
            {ageVariant
              ? 'Can This Course Bundle Really Help You?'
              : RESULTS[style].TESTIMONIAL.title}
          </h2>

          <p>
            {ageVariant
              ? "This course bundle can help anyone. Let's look at some of our success stories:"
              : RESULTS[style].TESTIMONIAL.subtitle}
          </p>

          {/* VIDEO TESTIMONIAL */}
          <div className="w-full flex flex-col justify-center mt-8 lg:mt-12">
            <div className="mx-auto">
              <VideoThumbnail
                thumbnailUrl="RoyalRumbleResultsPage/testimonial_thumbnail.jpg"
                thumbnailAlt="testimonial thumbnail"
                srcUrl={RESULTS[style].TESTIMONIAL_VIDEO_URL}
                type="testimonial"
              />
            </div>

            <CheckoutButton className="mt-8" theme="secondary" />
          </div>

          <div className="flex flex-col lg:items-start lg:my-8 lg:px-8">
            {/* LEFT COL  */}
            <div className="flex flex-col items-center mt-8 lg:flex-row lg:justify-around lg:px-8">
              <div className="max-w-sm px-8 lg:w-1/2 lg:max-w-md">
                <Image
                  alt="A man and a woman smiling and facing the camera."
                  className="w-full"
                  src="/images/RoyalRumbleResultsPage/testimonial1.png"
                  width={279}
                  height={279}
                />
              </div>
              <div className="lg:w-1/2">
                <h1 className="max-w-md font-lg text-left mt-8">
                  {RESULTS[style].TESTIMONIAL.story1.title}
                </h1>

                {RESULTS[style].TESTIMONIAL.story1.copy.map((copy, index) => (
                  <p key={`testimonial_story1_${index}`} className="max-w-md text-left mt-4">
                    {copy}
                  </p>
                ))}
              </div>
            </div>
            {/* RIGHT COL */}
            <div className="flex flex-col items-center lg:flex-row-reverse lg:justify-around lg:px-8 mt-8 lg:mt-0">
              <div className="max-w-sm lg:w-1/2 lg:max-w-md">
                <Image
                  alt="A man smiling holding a woman leaning on his shoulder."
                  className="w-full px-8"
                  src="/images/RoyalRumbleResultsPage/testimonial2.png"
                  width={343}
                  height={287}
                />
              </div>
              <div className="lg:w-1/2">
                <h1 className="max-w-md font-lg text-left mt-8">
                  {RESULTS[style].TESTIMONIAL.story2.title}
                </h1>

                {RESULTS[style].TESTIMONIAL.story2.copy.map((copy, index) => (
                  <p key={`testimonial_story2_${index}`} className="max-w-md text-left mt-4">
                    {copy}
                  </p>
                ))}

                <CheckoutButton
                  className="tracking-normal underline font-bold inline !p-0 text-blue-darkest from-transparent to-transparent bg-transparent border-none text-left
                  hover:!text-blue-darkest hover:!bg-transparent hover:!shadow-none mt-4"
                  label={RESULTS[style].TESTIMONIAL.ctaText}
                />
              </div>
            </div>

            <div className="w-full">
              <h2 className="italic mt-12">{RESULTS[style].TESTIMONIAL.quote}</h2>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTION_4 */}
      <section className="w-full flex justify-center bg-black">
        <div className="max-w-5xl text-white flex flex-col items-center mx-4 my-12">
          <p className="max-w-lg font-bold mb-8">{RESULTS[style].PROMOTION_4.copy1}</p>

          <p className="max-w-lg font-bold  mb-8">{RESULTS[style].PROMOTION_4.copy2}</p>

          <h2 className="capitalize">{RESULTS[style].PROMOTION_4.title}</h2>
          <div className="flex flex-col my-8  md:items-start md:px-8">
            <div className="flex flex-col items-center md:flex-row md:justify-around md:px-8 ">
              <div className="max-w-sm mx-auto md:w-96 px-16">
                <Image
                  alt="A vector image of a mirror."
                  className="w-full"
                  src="/images/RoyalRumbleResultsPage/mirror.png"
                  width={215}
                  height={284}
                />
              </div>

              <div className="mt-8">
                <ol>
                  {RESULTS[style].PROMOTION_4.bullets.map((list, index) => (
                    <li
                      key={`promo4_list_${index}`}
                      className="flex flex-row items-start justify-start mb-4">
                      <div className="mx-4">
                        <p className="w-8 h-8 border-2 border-purple-dark rounded-full flex items-center justify-center">
                          {(index + 1).toString()}
                        </p>
                      </div>

                      <p className="text-left">{list}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <p className="max-w-3xl mb-8">{RESULTS[style].PROMOTION_4.copy3}</p>

          <p className="max-w-3xl mb-8">
            {ageVariant
              ? 'Remember, this easy-to-watch course bundle will help you understand yourself more deeply, heal old wounds and finally feel comfortable and at ease in love.'
              : RESULTS[style].PROMOTION_4.copy4}
          </p>

          <p className="max-w-3xl mb-8">{RESULTS[style].PROMOTION_4.copy5}</p>

          <p className="max-w-3xl mb-8">{RESULTS[style].PROMOTION_4.copy6}</p>

          <CheckoutButton theme="secondary" />
        </div>
      </section>
    </>
  )
}
