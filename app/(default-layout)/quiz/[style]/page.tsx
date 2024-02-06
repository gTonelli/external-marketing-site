// components
import { Page } from '@/components/Page'
import { AttachmentQuizHeading } from '@/components/AttachmentQuiz/AttachmentQuizHeading'
import Image from 'next/image'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { CarouselTestimonialAlt } from '@/components/Carousel/variants/CarouselTestimonialAlt'
import { Button } from '@/components/Button/Button'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Faq } from '@/components/Faq/Faq'
import { Icon } from '@/components/Icon'
import { CheckoutButton } from '@/components/CheckoutButton'
import Link from 'next/link'
// libraries
import cx from 'classnames'
// utils
import { ROYAL_RUMBLE } from './config'
import { TStyle } from '@/utils/types'
import { EExternalRoutes } from '@/utils/constants'

export interface IAttachmentStylePageParams {
  style: TStyle
}

type TParams = { params: { style: TStyle } }

export async function generateMetadata({ params }: TParams) {
  let title = 'Your Attachment Style Results'

  switch (params.style) {
    case 'fa':
      title = 'Fearful Avoidant | ' + title
      break

    case 'da':
      title = 'Dismissive Avoidant | ' + title
      break

    case 'ap':
      title = 'Anxious Preoccupied | ' + title
      break

    case 'sa':
      title = 'Securely Attached | ' + title
      break
  }

  return {
    title,
  }
}

export default function RoyalRumble({ params }: TParams) {
  const style = params.style

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
              <AttachmentQuizHeading
                className="!text-h2 !text-black !capitalize !font-ssp"
                copy={`You Have A${style === 'ap' ? 'n' : ''}`}
              />

              <h2 className="inline capitalize text-primary lg:block">
                {ROYAL_RUMBLE[style].TITLE + ' '}
              </h2>

              <h2 className="inline capitalize lg:block">Attachment Style</h2>
            </div>

            <div className="mt-10 md:mt-0">
              <VideoThumbnail
                playButtonSize="medium"
                srcUrl={ROYAL_RUMBLE[style].YOUTUBE_URL}
                style={{ maxWidth: '415px', borderRadius: '20px' }}
                thumbnailAlt="A picture of Thais teaching"
                thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
              />
            </div>
          </div>
        </div>

        <div className="max-w-[1024px] mt-8 md:mt-10 mx-4 md:mx-auto md:px-4">
          <div className="text-left">
            <p className="font-effra font-bold uppercase tracking-0.325 md:text-lg">
              {ROYAL_RUMBLE[style].BANNER_SEGMENT.headline}
            </p>

            {ROYAL_RUMBLE[style].BANNER_SEGMENT.copy.map((copy, index) => (
              <p
                key={`banner_segment_copy_${index}`}
                className="font-effra mt-4 md:mt-6 md:text-lg">
                {copy}
              </p>
            ))}

            <p className="font-effra mt-8 md:mt-10 md:text-lg">
              At The Personal Development School, we have a tailored program and suite of tools to
              assist you in changing these patterns in as little as 30 days. This will allow you to
              improve existing relationships, create lasting love and build new relationships with
              emotionally available people. Click the button below to enroll in exclusive access.
              <strong> This is 30% off for a limited time.</strong>
            </p>
          </div>

          <CheckoutButton className="mt-8 xxs:px-16 md:mt-10" label="UNLOCK MY DISCOUNT" />
        </div>
      </section>
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
          <div className="max-w-[850px] mx-4 md:mx-auto md:px-4 inset-0 mb-12 md:mb-20">
            <p className="capitalize mb-8 md:mb-10 text-2xl text-primary">
              Does any of this sound familiar?
            </p>

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

                        <p className="md:text-lg font-bold font-effra capitalize">
                          {content.title}
                        </p>
                      </div>
                      <p className="max-w-[415px] font-effra md:text-lg mt-2 text-left ml-6">
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

            <div className="mt-4 rounded-10 text-left">
              {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subHeadlineMobile.map((copy, index) => (
                <p
                  key={`familiar_segment_copy_${index}`}
                  className="font-sspb capitalize font-bold mt-4 md:hidden md:text-lg">
                  {copy}
                </p>
              ))}

              <p className="md:text-lg capitalize hidden font-bold md:block">
                {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subHeadline}
              </p>

              {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subheadlineTwo && (
                <p className="md:text-lg my-4 text-primary font-bold">
                  {ROYAL_RUMBLE[style].FAMILIAR_SEGMENTS.subheadlineTwo}
                </p>
              )}

              <CheckoutButton className="mt-4 px-16 md:mt-10" label="GET STARTED" />
            </div>
          </div>
        </div>
      </section>

      {/* ATTACHMENT ORIGIN SECTION */}
      <section className="w-full relative">
        <div className="max-w-[850px] mt-6 md:mt-32  mx-4 md:mx-auto md:px-4 text-left">
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

            <CheckoutButton className="px-16" label="GET STARTED" />
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
          <div className="max-w-[850px] mx-4 md:mx-auto md:px-4 text-left inset-0">
            <h2 className="mb-8 md:mb-10 text-2xl text-primary">Hi, I’m Thais!</h2>

            <p className="mb-4 md:text-lg text-justify">
              I have over a decade of experience as a relationship coach and counsellor and got into
              this field because I too, had a Fearful Avoidant attachment style, and was seeking
              answers and healing.
            </p>

            <p className="mb-4 md:text-lg text-justify">
              I embarked on a journey of relentless research and education which led to me
              completing a Master's Degree and more than 13 different certifications in a variety of
              psychology modalities including Cognitive Behavioral Therapy, Neuro Linguistic
              Programming, Internal Family Systems, Shadow Work and many more! I also ran a private
              practice for the last decade, working with people using the techniques in this course
              to transform lifelong relationship patterns.
            </p>

            <p className="mb-4 md:text-lg text-justify">
              Eventually, I transitioned into creating online programs - originally because my
              waitlist to see clients was over 2 years long. I have also published a best-selling
              book on this very topic, and have a Youtube channel with almost 200,000 subscribers.
              After fine-tuning this powerful formula to create attachment style healing, I created
              The Personal Development School so I could share this information with more people.
            </p>

            <p className="mb-4 md:text-lg text-justify">
              In the past 3 years alone, I have helped thousands of students on their journey to
              healthy, happy relationships using the techniques from the program that I'm sharing
              with you today. I am humbled to say that this program has received a 99.7%
              satisfaction rate from our students!
            </p>

            <p className="md:text-lg font-bold font-effra text-justify pb-4">
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
        <div className="max-w-[850px] mx-4 md:mx-auto md:px-4 inset-0">
          <div className="flex flex-col md:flex-row -space-y-2 md:space-y-0 space-x-2 justify-center">
            <h2 className="capitalize text-2xl text-white">Gain access to your</h2>

            <h2 className="capitalize text-2xl text-teal">personalized program</h2>
          </div>

          <div className="mt-8 md:mt-10 text-left">
            <p className="md:text-lg font-bold font-effra text-white uppercase tracking-0.325">
              program overview
            </p>

            {ROYAL_RUMBLE[style].GAINACCESS_SEGMENT.map((copy, index) => (
              <p key={`gain_access_${index}`} className="md:text-lg font-effra mt-4 text-white">
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
              This will empower you to create more attraction, chemistry and deeper connection in
              your love life - without the fear of losing yourself in relationships.
            </p>
            {ROYAL_RUMBLE[style].WHATPROGRAMCOVER_SEGMENT.copy.map((copy, index) => (
              <p key={`program_copy_${index}`} className="md:text-lg font-effra mt-4 text-white ">
                {copy}
              </p>
            ))}

            <ul className="mt-4 !ml-6 fa-ul text-white font-effra md:text-lg">
              {ROYAL_RUMBLE[style].WHATPROGRAMCOVER_SEGMENT.bullets.map((copy, index) => (
                <li key={`programcover_${index}`}>
                  <Icon
                    className="text-blue mr-2 my-auto w-4 h-4 fa-li"
                    name="check-circle"
                    type="regular"
                  />

                  <p className="my-4">{copy}</p>
                </li>
              ))}
            </ul>

            <CheckoutButton className="mt-8 md:mt-10 px-16" label="SIGN UP NOW" />
          </div>
        </div>
      </section>
      {/*LEARN HOWTO SECTION */}
      <section className="w-full">
        <Image
          alt="A ffull width image of 5 mockups of PDS courses, products, quizzes and social events."
          className="w-full"
          src="/images/RoyalRumblePage/royal-rumble-mockup.png"
          width={425}
          height={174}
          sizes="100vw"
        />

        <div className="bg-[#DEEAEA] pb-14 md:pb-20">
          <div className="max-w-[1024px] mx-4 md:mx-auto inset-0 pt-14 md:pt-0">
            <h2 className="capitalize text-h3-mobile">You will learn how to:</h2>

            <div className="mt-8 md:mt-20">
              {ROYAL_RUMBLE[style].LEARNHOWTO_SEGMENT.map((object, index) => {
                const image = ROYAL_RUMBLE.LEARNHOWTO_SEGMENT_IMAGES[index]

                return (
                  <div key={`learn_${index}`} className="mb-8 md:mb-10">
                    <div className="flex row max-w-[677px] items-center md:mx-auto mx-4 justify-between space-x-5 md:space-[107px]">
                      <div className="w-full max-w-96">
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
                          'py-[11px] text-left max-w-[240px]',
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

            <div className="max-w-[850px] mt-20 md:mt-32 md:px-4 md:mx-auto">
              <h2 className="capitalize text-2xl text-primary text-left lg:!text-3xl">
                Use the 3 Step Formula to Create Deep Attachment Style Healing in 30 Days AND Get
                Access to These Exclusive Bonuses:
              </h2>

              <div className="mt-8 md:mt-10 flex flex-col md:grid md:grid-cols-2 md:gap-4 text-left justify-between">
                <ul className="font-effra !ml-6 fa-ul max-w-[415px]">
                  {ROYAL_RUMBLE.EXCLUSIVEBONUS_SEGMENT.map((copy, index) => (
                    <li key={`bonus_${index}`} className="mb-6">
                      <Icon
                        className="text-primary mr-2 my-auto w-4 h-4 fa-li"
                        name="check-circle"
                        type="regular"
                      />

                      <p className="md:text-lg">{copy}</p>
                    </li>
                  ))}
                </ul>

                <ul className="font-effra md:text-lg !ml-6 fa-ul max-w-[415px]">
                  <li className="font-bold text-primary mb-4">
                    <Icon
                      className="text-primary mr-2 my-auto w-4 h-4 fa-li"
                      name="check-circle"
                      type="regular"
                    />
                    Not to mention, a 7-day money-back guarantee!
                  </li>

                  {ROYAL_RUMBLE.moneyBackGuaranteeCopy.map((copy, index) => (
                    <li key={`money_back_copy_${index}`}>
                      <p className="font-effra mb-4 md:text-lg">{copy}</p>
                    </li>
                  ))}

                  <li className="mt-8 md:mt-10">
                    <CheckoutButton label="ENROLL NOW" />
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
            <h2 className="capitalize text-2xl text-primary">
              Still not sure if our programs are right for you?
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

            <div className="mt-5">
              <p className="font-effra md:text-lg">
                {ROYAL_RUMBLE[style].STILLNOTSURE_SEGMENT.copy2}
              </p>

              <p className="font-bold font-effra md:text-lg">
                {ROYAL_RUMBLE.STILLNOTSURE_SEGMENT.copy3}
              </p>
            </div>
          </div>

          <div className="mt-20 md:mt-32 text-center">
            <h2 className="capitalize text-xl px-2">
              Our Programs have helped Thousands of People Transform Their Lives
            </h2>

            <CarouselTestimonialAlt />

            <CheckoutButton
              className="mt-4 md:hidden min-w-min xxs:min-w-max"
              label="START HEALING"
            />

            <CheckoutButton
              className="hidden mt-8 !px-16 md:mt-10 md:inline-block md:mx-auto min-w-max"
              label="START MY TRANSFORMATION"
            />
          </div>
        </div>
      </section>

      {/*BEST SELF SECTION */}
      <section className="w-full mt-8 md:mt-16 bg-black pt-10 pb-8 md:pb-10">
        <div className="max-w-[1024px] mx-4 md:mx-auto md:px-4 mt-10 inset-0">
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
                    <div
                      key={`bestSelfContent_${index}`}
                      className={`max-w-[492px] ${MARGIN} md:mb-0`}>
                      <p className="font-effra font-medium text-white uppercase tracking-0.325 md:text-lg">
                        {content.title}
                      </p>

                      <p className="font-effra text-white md:text-lg mt-2">{content.copy}</p>
                    </div>
                  )
                })}
              </div>
            ))}

            <CheckoutButton className="mt-2" label="I WANT THIS" />
          </div>
        </div>
      </section>
      {/* MY QUESTION SECTION */}
      <section className="w-full">
        <div className="mt-6 md:mt-32 max-w-[1024px] mx-4 md:mx-auto md:px-4 md:mb-10 text-left">
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
            <p className="font-effra md:text-lg">
              {ROYAL_RUMBLE[style].MYQUESTION_SEGMENT.subheading2}
            </p>
          </div>

          <CheckoutButton className="mt-6 md:mt-8" label="SIGN ME UP" />
        </div>
      </section>
      {/* REGISTER NOW SECTION */}
      <section className="w-full mt-20 md:mt-32">
        <div className="bg-gradient-to-b from-blue-lightest/50 to-primary-light/50 py-10 md:py-20">
          <div className="max-w-[1024px] mx-4 md:mx-auto">
            <h2 className="capitalize text-2xl text-primary">
              {style !== 'sa'
                ? `Heal Your Attachment Style with the ${ROYAL_RUMBLE[style].TITLE} to Secure Attachment Program`
                : `Start Building the Relationships you Deserve with the All-Access Program`}
            </h2>

            <div
              className="flex flex-center flex-col  py-10 text-left space-y-10 
                        lg:flex-row lg:space-x-5 lg:space-y-0">
              <div className="max-w-[502px]">
                <p className="font-effra font-bold tracking-0.325 md:text-lg">WHAT'S INCLUDED?</p>

                <p className="font-effra font-bold md:text-lg mt-3 md:mt-2">
                  {style !== 'sa'
                    ? `Heal Your Attachment Style in 30 Days with the ${ROYAL_RUMBLE[style].TITLE} to Securely Attached program.`
                    : `All the tools you need to create the relationship you deserve.`}
                </p>

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
                        <Icon
                          className="text-primary my-auto w-4 h-4 fa-li"
                          name="check-circle"
                          type="regular"
                        />
                        <p className="md:text-lg my-2 lg:my-1">{copy} </p>
                      </li>
                    ))}
                  </ul>
                </ul>
              </div>
              <div className="max-w-[502px] rounded-20 bg-primary-light py-11 px-4 md:px-10 text-center">
                <p
                  className={`max-w-[368px] font-effra font-bold p-1 text-${ROYAL_RUMBLE.OFFER_CARD.headingColor} border-y-2 border-${ROYAL_RUMBLE.OFFER_CARD.headingColor} mx-auto 
                    md:uppercase md:text-lg `}>
                  {ROYAL_RUMBLE.OFFER_CARD.heading}
                </p>

                <div className="max-w-[230px] mt-8 mx-auto">
                  <p className="font-effra font-bold md:text-lg text-center">
                    {ROYAL_RUMBLE.OFFER_CARD.subheaing}
                  </p>

                  <p className="font-effra font-bold !text-[100px] text-primary after:content-['/month'] after:text-sm md:after:text-lg">
                    {ROYAL_RUMBLE.OFFER_CARD.price}
                  </p>

                  <p className="md:text-lg line-through">Regular Price = $97/month</p>
                </div>
                <div className="mt-2">
                  <ul className="font-effra mt-8 ml-3 list-disc text-left">
                    <li>
                      <p className="md:text-lg">Special offer available for a limited time</p>
                    </li>
                    <li>
                      <p className="md:text-lg">
                        Get 30% off of the All-Access Pass for life if you sign up today
                      </p>
                    </li>
                    <li>
                      <p className="md:text-lg">7-Day Money Back Guarantee, No Questions Asked!</p>
                    </li>
                  </ul>

                  <CheckoutButton className="mt-6 md:mt-10" label="REGISTER NOW" />

                  <p className="font-effra font-bold md:text-lg mt-2">SAVE 30% NOW</p>
                </div>
              </div>
            </div>
            <div className="flex flex-center flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:px-4">
              <div className="max-w-[502px]">
                <Image
                  alt="4 mockups on different devices of Thais teaching PDS content."
                  src="/images/RoyalRumblePage/rr-offer.png"
                  width={393}
                  height={194}
                />
              </div>
              <div className="max-w-[502px] text-left">
                <p className="mb-2 md:text-lg">{`${
                  style !== 'sa'
                    ? `Enroll in The ${ROYAL_RUMBLE[style].TITLE} to Securely`
                    : 'Enroll in The Securely'
                } Attached Program now and prepare to create the safe home within yourself you’ve been looking for all along.`}</p>

                <p className="font-bold mb-2">
                  If you change your mind or are unable to commit we have a full 7-day money back
                  guarantee!
                </p>

                <p>
                  We’re happy to process a refund for you if that’s what you choose. No hard
                  feelings, and no questions asked!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[850px] mt-6 md:mt-32 mx-4 md:mx-auto md:px-4 text-left">
          <h2 className="capitalize text-2xl text-primary md:mb-10">
            If you don’t make a change now, then when? And if you don’t show up for yourself … who
            will?
          </h2>

          {ROYAL_RUMBLE[style].OFFER_SEGMENT.copy.map((copy, index) => (
            <p key={`offer_copy_${index}`} className="font-effra md:text-lg mb-4">
              {copy}
            </p>
          ))}
        </div>

        <CheckoutButton
          className="mt-8 md:mt-10 md:px-20 min-w-min xxs:min-w-max"
          label="REWRITE MY STORY"
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
