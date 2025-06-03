// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { CountdownTimer } from '@/components/CountDownTimer'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import { CarouselPopularCourses } from '@/components/Carousel/variants/CarouselPopularCourses'
import { LifetimePricing } from '@/components/LifetimePricing'
import { faCircleSmall } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// config
import { LIFETIME } from './config'

export default function LifeTimePage() {
  return (
    <Page page_name="Lifetime">
      {/* COUNT DOWN TIMER SECTION */}
      <section className="w-full bg-black">
        <div className="py-4">
          <CountdownTimer date={new Date(`2023-06-29T00:00:00`)} theme="dark" />
        </div>
      </section>

      {/* HERO SECTION */}
      <Section className="max-w-full bg-blue-lightest">
        <p className="max-w-md font-bold uppercase tracking-33 text-black mx-auto">
          {LIFETIME.HERO_SECTION.subheader}
        </p>

        <h1 className="max-w-3xl font-bold text-purple-dark pt-4 mx-auto">
          {LIFETIME.HERO_SECTION.header}
        </h1>

        <p className="text-green-check font-bold mt-4 md:mt-6">
          {LIFETIME.HERO_SECTION.promo_text}
        </p>

        <div className="mx-auto mt-4 md:mt-8">
          <ButtonScroll
            className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
            label={LIFETIME.HERO_SECTION.ctaLabel}
            target="#pricing"
          />
        </div>
      </Section>

      <Image
        alt="green wave"
        className="w-full"
        src="/images/styled-wave-green.png"
        width={1700}
        height={90}
      />

      {/* SITUATIONS SECTION */}
      <Section>
        <h2 className="text-center my-8">{LIFETIME.SITUATION_SECTION.header}</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="mt-4 md:mt-0 md:pr-4">
            <Image
              alt="an upset couple"
              src="/images/LifeTimePage/lifetime_situation.jpg"
              width={462}
              height={380}
            />
          </div>

          <div className="mt-4 md:mt-0 md:pl-2">
            <List
              iconSize="xs"
              icon={faCircleSmall}
              className="flex flex-col items-start pb-4"
              classNameIcon="!text-black mt-1 pr-2"
              classNameListItems="text-left text-black !leading-6 pb-4"
              listItems={LIFETIME.SITUATION_SECTION.bullets}
            />
          </div>
        </div>
      </Section>

      {/* IMAGINE SECTION */}
      <Image
        alt="purple"
        className="w-full"
        src="/images/LifeTimePage/purple-wave.png"
        width={1440}
        height={205}
      />

      <Section
        className="max-w-full bg-primary-light-50"
        classNameInner="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-center md:text-left">{LIFETIME.IMAGINE_SECTION.header}</h2>

          <List
            icon={faCircleSmall}
            iconSize="xs"
            className="flex flex-col items-start py-4"
            classNameIcon="!text-black !pt-[10px] pr-2"
            classNameListItems="text-left text-black !leading-6 pt-4"
            listItems={LIFETIME.IMAGINE_SECTION.bullets}
          />
        </div>

        <div>
          <Image
            alt="a confident woman"
            src="/images/LifeTimePage/woman-headshot.png"
            width={462}
            height={592}
          />
        </div>
      </Section>

      {/* ATTACHMENT PROGRAM SECTION */}
      <Section className="max-w-full bg-black-secondary" classNameInner="text-white">
        <div className="flex flex-col items-center text-center pt-12 px-4 md:px-8 md:pt-16">
          <Image
            alt="PDS courses mockup"
            src="/images/LifeTimePage/lifetime_mock_up.png"
            width={506}
            height={229}
          />

          <h2 className="mt-8">{LIFETIME.UNLOCK_SECTION.header}</h2>

          <p className="mt-8">{LIFETIME.UNLOCK_SECTION.subheader}</p>

          <div className="mx-auto mt-8">
            <List
              icon={faCircleCheck}
              className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 gap-x-12 lg:gap-y-8"
              classNameIcon="!text-green-check mt-1 pr-2"
              classNameListItems="text-left !text-lg !leading-6 pb-4"
              listItems={LIFETIME.UNLOCK_SECTION.bullets}
            />
          </div>
        </div>

        <ButtonScroll
          className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
          label="UNLOCK LIFETIME ACCESS NOW!"
          target="#pricing"
        />
      </Section>

      <Image
        alt="black wave"
        className="w-full"
        src="/images/LifeTimePage/black-wave.png"
        width={1440}
        height={102}
      />

      {/* FEATURE SECTION */}
      <Section>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-none">
          {LIFETIME.FEATURE_SECTION.bullets.map((bullet, index) => (
            <div
              key={`attachment_program_section_bullet${index}`}
              className="max-w-96 flex flex-col items-center py-2 px-6">
              <Image
                alt="vector icon"
                className="w-auto h-36"
                src={`/images/LifeTimePage/${bullet.img}`}
                width={150}
                height={150}
              />

              <p className="font-bold text-left h-full mt-8">{bullet.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ATTACHMENT PROGRAM SECTION PART 2 */}
      <Section>
        <h2 className="mb-8">{LIFETIME.THAIS_SECTION.header}</h2>

        <p className="font-bold mb-8">{LIFETIME.THAIS_SECTION.subheader}</p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="text-left">
            {LIFETIME.THAIS_SECTION.text.map((item, index) => (
              <p key={`unlock_section_text_${index}`} className="mb-4">
                {item}
              </p>
            ))}
          </div>

          <div className="mt-4 md:mt-0">
            <Image
              alt="Thais and PDS products"
              className="w-full"
              src="/images/LifeTimePage/lifetime-thais.jpg"
              width={481}
              height={568}
            />
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL SECTION */}
      <CarouselTestimonial
        className="lg:mt-12"
        classNameHeader="px-2"
        headingText="What Our Students Are Saying"
      />

      {/* MEMBERSHIP_SECTION */}
      <Section className="max-w-full bg-blue-lightest">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-purple-dark mb-8">{LIFETIME.MEMBERSHIP_SECTION.header}</h2>

          <div className="max-w-4xl mx-auto">
            {LIFETIME.MEMBERSHIP_SECTION.text.map((item, index) => (
              <p key={`membership_section_text_${index}`} className="mb-4">
                {item}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-4 md:mt-8">
            <ButtonScroll
              className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
              label="UNLOCK LIFETIME ACCESS NOW!"
              target="#pricing"
            />
          </div>
        </div>
      </Section>

      {/* LEVEL-UP_SECTION */}
      <Section>
        <h2 className="text-center">{LIFETIME.LEVEL_SECTION.header}</h2>

        <div className="grid grid-cols-1 justify-items-center pt-8 lg:grid-cols-3">
          {LIFETIME.LEVEL_SECTION.bullets.map((bullet, index) => (
            <div
              key={`attachment_program_section_bullet${index}`}
              className="flex flex-col items-center py-2 lg:py-8 px-6">
              <Image
                alt="vector icon"
                className="w-auto max-h-32"
                src={`/images/LifeTimePage/${bullet.img}`}
                width={125}
                height={125}
              />

              <h4 className="mt-8 mb-4">{bullet.title}</h4>

              <p className="text-center h-full">{bullet.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING SECTION */}
      <LifetimePricing />

      {/* POPULAR COURSE SECTION */}
      <Section>
        <CarouselPopularCourses
          className="lg:!px-0 xl:!px-0"
          classNameSubheading="max-w-4xl mx-auto !mb-8"
          heading="Our Most Popular Courses"
          subheading="Courses range from: Repairing Any Relationship, Communicating in Relationships, Overcoming Anxiety for Peace of Mind, Beating Procrastination and Setting Goals, Skyrocketing Your Self-Esteem and more!"
        />
      </Section>

      {/* SECTION VIDEO PLAYER */}
      <Section>
        <h4 className="font-effra font-medium tracking-33 mb-9 lg:mb-10">GET A SNEAK PEEK</h4>

        <VideoThumbnail
          className="max-w-xl mx-auto"
          thumbnailUrl="course-emotional-mastery.jpg"
          thumbnailAlt="emotional mastery thumbanil"
          srcUrl="https://storage.googleapis.com/pds_videos/Emotional_mastery_trailer.mp4"
          type="testimonial"
        />
      </Section>

      {/* EXPLORE COURSE SECTION */}
      <Section>
        <h2 className="mb-8">{LIFETIME.COURSE_BENEFITS_SECTION.header}</h2>

        <p className="max-w-3xl mb-8 mx-auto">{LIFETIME.COURSE_BENEFITS_SECTION.subheader}</p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="text-left">
            <div className="w-full flex flex-col self-center space-y-4 mb-5 lg:items-start lg:mr-20 lg:mb-0">
              {LIFETIME.COURSE_BENEFITS_SECTION.bullets.map((benefit, index) => (
                <div key={`lifetime_explore_course_benefit_${index}`} className="flex space-x-4">
                  <FontAwesomeIcon className="text-primary pt-1" icon={faCircleCheck} />

                  <p>{benefit}</p>
                </div>
              ))}
            </div>

            <ButtonScroll
              className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg mt-8 hover:!text-white"
              label="LAST CHANCE FOR LIFETIME ACCESS!"
              target="#pricing"
            />
          </div>

          <div className="flex-center flex-col">
            <Image
              alt="vector icon"
              className="mb-8 lg:mb-10"
              src="/images/LifeTimePage/lifetime_page_explore.png"
              width={269}
              height={200}
            />
          </div>
        </div>
      </Section>
    </Page>
  )
}
