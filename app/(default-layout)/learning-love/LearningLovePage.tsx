'use client'

// core
import React, { useEffect, useState } from 'react'
import { Metadata } from 'next'
// components
import { IDefaultProps } from '@/components'
import { Icon } from '@/components/Icon'
import { Section } from '@/components/Section'
import { Trustbar } from '@/components/Trustbar/Trustbar'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
// libraries
import cx from 'classnames'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { EExternalRoutes, ERoutes } from '@/utils/constants'

import 'swiper/css'
import 'swiper/css/pagination'
import '@/styles/background-images.css'

const page_name = 'Learning Love Page' as any
let buttonInstance = 0

export const metadata: Metadata = {
  title: 'Learning Love - A Book by Thais Gibson',
  description:
    "Explore an overview of Learning Love by Thais Gibson. This book details the use of Integrated Attachment Theory and it's applications.",
}

export default function LearningLovePage() {
  return (
    <main className="w-full">
      <Section
        className="w-full bg-learning-love-header xl:pb-0"
        classNameInner="!max-w-[1600px] xl:px-12">
        <div className="relative lg:flex lg:items-center">
          <div className="hidden border-b-grey-6 border-b w-1/3 lg:block" />

          <Text
            className="text-grey-6 flex-grow"
            content="From #1 Best-Seller Thais Gibson"
            size={20}
          />

          <div className="hidden border-b-grey-6 border-b w-1/3 lg:block" />
        </div>

        <Trustbar />

        <div className="xl:grid xl:grid-cols-[330px_1fr_330px] xl:gap-8 xl:items-center 2xl:grid-cols-[430px_1fr_430px]">
          <Testimonial
            author="Bloomberg News"
            className="relative xl:-top-12 2xl:-top-28"
            text="“Gibson introduces a revolutionary approach to understanding and healing attachment styles, paving the way for more fulfilling and harmonious relationships.”"
          />

          <Image
            fetchPriority="high"
            className="mt-4 w-auto max-h-[90vh] max-w-full mx-auto lg:max-w-lg xl:w-full xl:max-h-max xl:max-w-xl"
            src="LearningLovePage/learning-love-book-cover.png"
          />

          <Testimonial
            author="Psychology Today"
            className="relative xl:-top-12 2xl:-top-28"
            text="“Learning Love provides a structured path for [individuals] to reshape their attachment styles, ultimately leading to healthier, more fulfilling relationships...”"
          />
        </div>
      </Section>

      {/* TESTIMONIALS MOBILE */}
      <Section
        className="xl:hidden"
        classNameInner="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center lg:px-12">
        <Testimonial
          mobileOnly
          author="Bloomberg News"
          text="“Gibson introduces a revolutionary approach to understanding and healing attachment styles, paving the way for more fulfilling and harmonious relationships.”"
        />

        <Testimonial
          mobileOnly
          author="Psychology Today"
          text="“Learning Love provides a structured path for [individuals] to reshape their attachment styles, ultimately leading to healthier, more fulfilling relationships...”"
        />
      </Section>

      {/* COMPLETE GUIDE SECTION */}
      <Section classNameInner="text-left">
        <Text.Heading
          className="mb-4 lg:hidden"
          content="The Complete Guide to Building The Best Relationships of Your Life"
          size={3}
        />

        <Text.Heading
          className="hidden mb-6 lg:block"
          content="The Complete Guide to Building The Best Relationships of Your Life"
        />

        <Text.Paragraph
          className="mb-4"
          content="Have you ever been in a relationship where you felt as though you weren’t on the same
            page? Perhaps you say one thing, and your partner interprets it differently. Or maybe,
            after an argument, you yearn for closeness while they withdraw."
          size={20}
        />

        <Text.Paragraph
          className="mb-4"
          content="These misunderstandings stem from differing attachment styles. Rooted in our early
            childhood experiences, attachment theory categorizes us into one of four patterns:"
          size={20}
        />

        {AttachmentStyleCards.map((card, i) => (
          <AttachmentStyleCard key={`card_${i}`} {...card} />
        ))}

        <Text.Paragraph
          className="mb-4"
          content="Your attachment style impacts every relationship in your life friendships, family dynamics, and romantic relationships."
          size={20}
        />

        <Text.Paragraph
          className="mb-4"
          content="It has traditionally been assumed that attachment styles are unchanging and static. This is no longer the case.
            In Learning Love, you will learn how to become securely attached so you can finally build fulfilling relationships and heal broken connections."
          size={20}
        />

        <Text.Paragraph
          className="font-bold mb-4"
          content="There is a better way to love—and be loved."
          size={20}
        />

        <Button label="Buy Now" />
      </Section>

      {/* AUTHOR SECTION */}
      <Section classNameInner="text-left lg:grid lg:grid-cols-2 lg:gap-32">
        <Text.Heading className="mb-4 lg:hidden" content="Note From The Author" />

        <Image className="mb-4 mx-auto lg:hidden" src="LearningLovePage/thais.jpg" />

        <div>
          <Text.Heading
            className="hidden lg:mb-6 lg:block"
            content="A Note From The Author"
            size={1}
          />

          <Text.Paragraph
            className="mb-4"
            content="We know that relationships are foundational to our happiness and success in life. But what many people don't realize is that there 
              is a science to relationships. More importantly,  this science can be leveraged to build more fulfilling and harmonious connections with others. "
            size={20}
          />

          <Text.Paragraph
            className="mb-4"
            content="As a result, I've completed a certifications in over 13 different modalities to thoroughly understand exactly how to do this. "
            size={20}
          />

          <Text.Paragraph
            className="mb-4"
            content="It's all distilled into learning love so that you can be empowered to build the best relationships of your life."
            size={20}
          />

          <Image className="w-1/2 max-w-36 my-12" src="thais-gibson-signature.svg" />

          <Button label="Buy Now" />
        </div>

        <Image
          className="hidden bg-[#E6E6E6] rounded-20 lg:block"
          src="RoyalRumbleResultsPage/thais-desktop.png"
        />
      </Section>

      {/* WHATS INSIDE */}
      <Section classNameInner="text-left">
        <Text.Heading className="inline" content="A Look At What Is Inside Of " />

        <Text.Heading className="inline italic" content="Learning Love" />

        <div className="lg:hidden">
          {TeaserCards.map((card, i) => (
            <TeaserCard key={`teaser_card_${i}`} number={i} {...card} />
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="flex items-start justify-between">
            <TeaserCard number={0} {...TeaserCards[0]} />

            <TeaserCard number={3} {...TeaserCards[3]} />
          </div>

          <div className="flex items-start justify-between">
            <TeaserCard number={1} {...TeaserCards[1]} />

            <TeaserCard number={4} {...TeaserCards[4]} />
          </div>

          <div className="flex items-start justify-between">
            <TeaserCard number={2} {...TeaserCards[2]} />

            <TeaserCard number={5} {...TeaserCards[5]} />
          </div>
        </div>
      </Section>

      <Image className="w-full md:hidden" src="LearningLovePage/magazine-mockup.jpg" />

      <div className="hidden relative w-full bg-learning-love-parallax md:block">
        <div className="absolute w-24 top-0 left-0 h-full bg-gradient-to-r from-white to-transparent 2xl:via-white-80" />

        <div className="absolute w-24 top-0 right-0 h-full bg-gradient-to-l from-white to-transparent" />
      </div>

      {/* TESTIMONIAL SLIDER */}
      <Section className="!pb-0 lg:overflow-hidden" classNameInner="!pb-0">
        <Text.Heading className="mb-4 lg:mb-8" content="Hear What Others Have to Say" />

        <Swiper
          loop
          className="!pb-8 lg:w-1/2 lg:pb-12 lg:overflow-visible"
          initialSlide={1}
          modules={[Pagination]}
          pagination={{
            bulletActiveClass: '!bg-blue-tertiary',
            bulletClass:
              'inline-block w-4 h-4 mx-1 bg-white border-2 rounded-full border-blue-tertiary cursor-pointer',
            clickable: true,
          }}>
          {TestimonialSlides.map((data, i) => (
            <SwiperSlide
              key={`testimonial_slide_${i}`}
              className="p-3 lg:self-stretch lg:h-auto lg:flex lg:flex-col lg:cursor-pointer">
              <div className="shadow-center-light rounded-20 lg:h-full p-2 py-6 lg:p-6">
                <div className="flex justify-center">
                  {Array(5)
                    .fill(' ')
                    .map((_, j) => (
                      <Icon
                        key={`star_${i}_${j}`}
                        className="text-blue-tertiary mx-1"
                        name="star"
                      />
                    ))}
                </div>

                <Text.Paragraph className="font-bold my-4" content={data.author} size={20} />

                <Text.Paragraph content={data.testimonial} size={20} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      {/* COUNTDOWN */}
      <Section>
        <Text.Heading content="Pre-Order Now!" size={1} />

        <Image
          className="sm:hidden w-full"
          src="LearningLovePage/book-mockup-2.png"
          fetchPriority="low"
          loading="lazy"
        />

        <Image
          className="hidden sm:block lg:hidden w-full"
          src="LearningLovePage/book-mockup-2-desktop.png"
        />

        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:mt-2 lg:gap-12 2xl:gap-16">
          <Image
            className="hidden w-full lg:block lg:col-span-5"
            src="LearningLovePage/book-mockup-2-desktop.png"
          />

          <div className="text-left lg:col-start-6 lg:col-span-7">
            <Text.Paragraph
              className="mb-4 lg:mb-7"
              content="You deserve to have long-lasting and fulfilling relationships. "
              size={20}
            />

            <Text.Paragraph
              className="mb-4 lg:mb-7"
              content="Whether you're looking to reconnect with family members, strengthen friendships or find a romantic connection 
                that will bring you true happiness, the path to doing this is outlined in learning love."
              size={20}
            />

            <Button className="lg:hidden" label="Buy Now" />

            <Button className="hidden lg:block" label="Buy Now" />
          </div>
        </div>
      </Section>
    </main>
  )
}

interface ITestimonialProps extends IDefaultProps {
  text: string
  author: string
  mobileOnly?: boolean
}

const Testimonial = ({ className, text, author, mobileOnly = false }: ITestimonialProps) => {
  return (
    <div
      className={cx(
        'text-center mb-6 w-full',
        mobileOnly ? 'xl:hidden' : 'hidden xl:block',
        className
      )}>
      <div className="mb-4">
        {Array(5)
          .fill('')
          .map((_, i) => (
            <Icon key={`star_${i}`} className="text-blue-tertiary mx-1" name="star" />
          ))}
      </div>

      <Text.Paragraph className="mb-4" content={text} size={20} />

      <Text.Paragraph className="font-bold" content={author} size={20} />
    </div>
  )
}

interface IAttachmentStyleCardProps {
  classNameHeader?: string
  classNameImage?: string
  header: string
  img: string
  text: string
}

const AttachmentStyleCard = ({
  classNameHeader,
  classNameImage,
  header,
  img,
  text,
}: IAttachmentStyleCardProps) => {
  return (
    <div className="text-center rounded-20 shadow-md p-4 my-4 lg:flex lg:items-center lg:shadow-none lg:text-left">
      <Image
        className={cx('mx-auto lg:mx-0 lg:w-16', classNameImage)}
        src={`LearningLovePage/${img}`}
      />

      <div className="lg:ml-6 lg:flex-grow">
        <Text.Paragraph
          className={cx('font-bold lg:float-left lg:mr-[5px]', classNameHeader)}
          content={header}
          size={20}
        />

        <Text.Paragraph content={text} size={20} />
      </div>
    </div>
  )
}

const AttachmentStyleCards = [
  {
    classNameHeader: 'text-[#E12D6E]',
    header: 'Anxious Preoccupied: ',
    img: 'hands.png',
    text: 'individuals who fear abandonment and often people-please to avoid it.',
  },
  {
    classNameHeader: 'text-blue-tertiary',
    header: 'Dismissive Avoidant: ',
    img: 'heart-puzzle.png',
    text: 'highly independent individuals who can withdraw in emotional situations.',
  },
  {
    classNameHeader: 'text-purple-dark-secondary',
    header: 'Fearful Avoidant: ',
    img: 'flame.png',
    text: 'those who are “hot and cold” in relationships due to their fear of betrayal.',
  },
  {
    header: 'Secure Attachment: ',
    img: 'heart.png',
    text: 'those who are effective at communicating their needs and thrive in their relationships.',
  },
]

interface IButtonProps extends IDefaultProps {
  label: string
}

const Button = ({ className, label }: IButtonProps) => {
  // =================== State ====================
  const [instanceNumber, setInstanceNumber] = useState(0)

  useEffect(() => {
    setInstanceNumber(buttonInstance)
    buttonInstance++
  }, [])

  const onGoToAmazon = () => {
    Mixpanel.track.ButtonClicked({
      button_label: label,
      page_name,
      redirection: EExternalRoutes.AMAZON_LEARNING_LOVE_BOOK_PURCHASE,
      seq_no: instanceNumber,
    })

    window.location.assign(EExternalRoutes.AMAZON_LEARNING_LOVE_BOOK_PURCHASE)
  }

  return (
    <button
      className={cx(
        'rounded-20 text-white bg-purple-dark-secondary cursor-pointer border-2 border-purple-dark-secondary transition-all text-xl py-[10px] px-6 lg:hover:bg-[#522EAB80]',
        className
      )}
      onClick={onGoToAmazon}>
      <div className="flex items-center font-bold">
        <Image className="hidden lg:block lg:mr-4" src="LearningLovePage/gift.svg" />

        <span>{label}</span>
      </div>
    </button>
  )
}

interface ITeaserCardProps {
  heading: string
  includeButton?: boolean
  number: number
  texts: string[]
}

const TeaserCard = ({ heading, includeButton = false, number, texts }: ITeaserCardProps) => {
  return (
    <div className="my-8 lg:h-min lg:my-4 lg:w-[calc(50%-1rem)]">
      <Text.Heading className="text-blue-tertiary mb-4 text-center" content={'0' + (number + 1)} />

      <Text.Heading className="mb-4" content={heading} />

      {texts.map((text, i) => (
        <Text.Paragraph key={`TeaserCard_text_${i}`} className="mb-4" content={text} size={20} />
      ))}

      {includeButton && <Button label="Buy Now" />}
    </div>
  )
}

const TeaserCards = [
  {
    heading: 'Attachment theory',
    texts: [
      'Attachment theory explains how childhood experiences impact adulthood behaviors. In this chapter, you’ll learn the history and basics of how this theory came to be and what it means for the quality of your life. ',
    ],
  },
  {
    heading: 'The Subconscious Mind',
    texts: [
      'The subconscious mind is responsible for up to 95% of your thoughts, behaviors and actions. In this section, you’ll learn about the significant role it plays in your relationships and how it underpins to attachment theory. ',
    ],
  },
  {
    heading: 'Integrated attachment theory',
    texts: [
      'Integrated attachment theory expands upon the basic tenets of attachment theory by giving you clear exercises that recondition you to become secure. ',
      'You’ll get a customized profile that outlines your subconscious core wounds, needs, emotional patterns, relationship expectations, coping mechanisms, boundaries and communication patterns. ',
    ],
  },
  {
    heading: 'Wounds, Needs & Emotions',
    texts: [
      'Next, you’ll learn how to heal your core wounds, meet your own needs and improve your emotional well-being. Use the step-by-step exercises outlined to uncover a clear path to healthier, happier relationships.',
    ],
  },
  {
    heading: 'Expectations & Boundaries',
    texts: [
      'Then, discover the unrealistic relationship expectations, boundaries, and coping mechanisms you may have. Find out how to uproot unhealthy patterns, and replace them with healthy habits.',
    ],
  },
  {
    heading: 'How to Communicate ',
    includeButton: true,
    texts: [
      "Last, you'll get access to exclusive scripts that will help you communicate through conflict, tying everything together.",
      'Learning Love gives you a comprehensive blueprint to truly build the best relationships of your life.',
    ],
  },
]

const TestimonialSlides = [
  {
    author: 'Leona D.',
    testimonial: `The single best decision I made as it opened my eyes to the possibility that I could dramatically improve the quality of my 
      relationships and that my past did not have to define my future. I learned about my attachment style, core wounds and personality needs 
      and how these have been affecting the quality of my life currently.`,
  },
  {
    author: 'Jake J.',
    testimonial: `[This] has impacted my life immensely. From creating a healthy relationship to self, improving my family dynamics, impacting 
      my awareness of my subconscious programming, to providing the skills/tools for improving my communication with others in all relationships. 
      It has honestly changed my life for the better and I am on a path towards becoming a more secure person.`,
  },
  {
    author: 'Heather J.',
    testimonial:
      "This has been such an incredible journey and I'm feeling so excited for this next chapter [ahead of me]. Thank you Thais Gibson!",
  },
  {
    author: 'Gary',
    testimonial:
      'The learning and support is deep, the profound knowledge and patience, the breakdown of the info…don’t hesitate.',
  },
  {
    author: 'Tappy P.',
    testimonial: `Such an amazing impact on my relationships, my self-esteem and has given me valuable self-awareness. The tools have provided 
      me with the strength, and ability to heal, almost completely from my anxiety, and I feel so much more confident within myself.`,
  },

  {
    author: 'Robin A.',
    testimonial: `Thais is passionate about her work and the embodiment of it, she over delivers in every way and the experience, her content and 
      her community are priceless and life changing.`,
  },
]
