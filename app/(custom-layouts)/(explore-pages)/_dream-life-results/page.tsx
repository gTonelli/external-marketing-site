'use client'

// core
import { useState } from 'react'
import { DREAM_LIFE_RESULTS_PAGE as TH } from './config'
// components
import { Button } from '@/components/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Section } from '@/components/Section'
import { Video } from '@/components/Video/Video'
import { List } from '@/components/List'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { TestimonialSection } from '@/components/TestimonialSection'
// libraries
import { faCheck, faLongArrowAltRight } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCheckCircle, faFaceSadSweat } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { Page } from '@/components/Page'
// modules
import { externalRoutes } from '@/utils/constants'
import Mixpanel, { Pages } from '@/modules/Mixpanel'
import TripleWhale from '@/modules/TripleWhale'

type ArticleKey = keyof typeof TH.ARTICLES

export default function DreamLifePage() {
  const page_name = '' as Pages
  // ==================== State ====================
  const [videoIndex, setVideoIndex] = useState(0)

  const onGoToBlog = (blog: ArticleKey) => {
    Mixpanel.track.ButtonClicked({
      button_label: TH.ARTICLES[blog].name,
      page_name: page_name,
    })

    TripleWhale.track.ButtonClicked({
      button_label: TH.ARTICLES[blog].name,
      page_name: page_name,
    })

    window.location.assign(TH.ARTICLES[blog].url)
  }

  const onGoToCheckout = (event: React.MouseEvent<Element, MouseEvent>) => {
    window.location.assign(externalRoutes.checkoutRegularSubscription)
  }

  return (
    <Page className="relative w-full overflow-hidden" page_name="Dreamlife Results Page FA">
      {/**Attachment Style Section */}
      <Section className="relative w-full">
        <div className="max-w-3xl">
          <Image
            alt="heal-realtionship"
            className="mx-auto lg:hidden"
            src="DreamLifeResultsPage/hero-mobile.jpg"
          />

          <Text.Heading
            className="mt-10 text-center text-primary lg:text-left lg:mt-0"
            content={TH.HERO.title}
          />

          <Text.Heading
            className="text-primary text-center !text-[60px] leading-50 mt-5 lg:text-left"
            content={TH.HERO.attachmentStyle}
          />

          <div className="flex flex-col text-left mx-4 lg:flex-row lg:space-x-20">
            <div>
              <Text.Paragraph
                className="font-bold mt-10 lg:mt-20"
                content={TH.HERO.copy1.title}
                size={18}
              />

              <List
                classNameIcon="mt-1 !text-green-check"
                classNameListItems="mt-4"
                icon={faCheckCircle}
                listItems={TH.HERO.copy1.copy}
              />
            </div>

            <div>
              <Text.Paragraph
                className="font-bold mt-10 lg:mt-20"
                content={TH.HERO.copy2.title}
                size={18}
              />

              <List
                classNameIcon="mt-1"
                classNameListItems="mt-4"
                icon={faFaceSadSweat}
                listItems={TH.HERO.copy2.copy}
              />
            </div>
          </div>
        </div>

        <Image
          alt="heal-relationship"
          className="hidden absolute lg:block lg:top-[35%] lg:right-[-2%] lg:w-[30%] 2xl:top-[10%] 2xl:right-[5%]"
          src="DreamLifeResultsPage/hero.jpg"
        />
      </Section>

      {/**PRICING SECTION */}
      <Image alt="background" className="w-full" src="TrialHeadspace/hero-bg-top.jpg" />
      <section className="relative w-full text-center bg-gradient-to-t from-blue to-blue/30 pt-6 pb-10 px-4 lg:pt-22 lg:pb-48">
        <Text.Paragraph
          useMD
          className="max-w-5xl text-left mx-auto"
          content={TH.PRICING.definition}
        />

        <Image
          alt="personal-development-school-dashboard"
          className="w-full mx-auto sm:w-3/4 md:w-1/2 lg:hidden"
          src="TrialHeadspace/hero-left-mockup.png"
        />

        <div className="max-w-[474px] bg-primary text-white rounded-[30px] mx-auto mt-10 py-5 px-6 lg:mt-20">
          <Text.Heading content={TH.PRICING.heading} />

          <Text.Paragraph
            className="font-bold mt-3"
            content={TH.PRICING.subheading}
            spacing="tracking-0.325"
          />

          <Text.Paragraph className="mt-4" content={TH.PRICING.copy} />

          <Button
            className="!bg-blue text-black !border-blue mt-8"
            label="SIGN UP NOW"
            onClick={onGoToCheckout}
          />

          <Text.Paragraph className="mt-5" content={TH.PRICING.cancelationPolicy} />
        </div>

        <Image
          alt="personal-development-school-dashboard"
          className="hidden absolute w-1/2 -bottom-20 lg:-left-56 lg:block xl:w-1/3 xl:-left-32 2xl:-left-44"
          src="TrialHeadspace/hero-left-mockup.png"
        />

        <Image
          alt="personal-development-school-dashboard"
          className="hidden absolute w-1/2 lg:-right-56 -bottom-20 lg:block xl:w-1/3 xl:-right-32"
          src="TrialHeadspace/hero-right-mockup.png"
        />
      </section>

      {/** DREAMLIFE SECTION  */}
      <section className="pt-4 lg:pt-16">
        <div className="max-w-5xl mx-4 lg:mx-auto">
          {TH.DREAM_LIFE.benefits.map((benefit, index) => (
            <div
              key={`benefits_${index}`}
              className="flex flex-row items-center space-x-4 mb-1 mx-auto md:justify-center lg:justify-start lg:space-x-14 lg:mb-12">
              <Image
                alt="personal-development-school-benefits"
                className="w-[150px] h-[150px]"
                src={`TrialHeadspace/${benefit.image}`}
              />

              <div className="flex flex-col space-y-1 lg:flex-row lg:space-x-20">
                <Text.Heading className="lg:w-56" content={benefit.title} size={3} />

                <Text.Paragraph
                  useMD
                  className="text-sm md:w-64 lg:w-72 lg:text-base"
                  content={benefit.copy}
                />
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center space-y-14 mx-4 mt-20 md:text-center lg:flex-row lg:space-x-20 lg:space-y-0 lg:text-left">
            <div>
              <Text.Heading content={TH.DREAM_LIFE.heading} />

              <Text.Paragraph className="mt-6 lg:mt-11" content={TH.DREAM_LIFE.copy} />

              <Button
                className="mt-8 px-6 lg:mt-11"
                label="CLAIM MY DISCOUNT"
                onClick={onGoToCheckout}
              />
            </div>

            <Image
              alt="personal-development-school-course-player"
              className="md:w-1/2"
              src="TrialHeadspace/dreamlife-mockup.jpg"
            />
          </div>
        </div>
      </section>

      {/**TESTIMONIAL*/}
      <section className="max-w-4xl mx-auto px-4 pt-9 lg:pt-[102px]">
        <TestimonialSection />

        <div className="text-center">
          <Text.Heading className="mt-14 lg:mt-22" content="Take a Moment For Yourself" size={1} />

          <Button
            className="text-black bg-blue mt-8"
            label="BECOME SECURELY ATTACHED NOW"
            onClick={onGoToCheckout}
          />
        </div>
      </section>

      {/**VIDEO SECTION*/}
      <section className="w-full pt-14 lg:pt-28">
        <div className="max-w-5xl bg-pale-pink text-center mx-auto px-4 py-16 lg:rounded-20 lg:px-36 lg:py-[68px]">
          <div className="-mt-[88px] lg:-mt-24">
            <div className="flex flex-row justify-center space-x-1 lg:space-x-9">
              {TH.VIDEO_CATEGORIES.map((category, index) => (
                <div
                  key={`category_${index}]`}
                  className={`${
                    videoIndex === index ? 'bg-black' : 'bg-primary'
                  } text-white rounded-10 cursor-pointer px-2 py-2 lg:w-[204px] lg:py-4`}
                  onClick={() => setVideoIndex(index)}>
                  <Text.Paragraph
                    className="font-bold !text-[12px] lg:!text-base"
                    content={category.name}
                  />
                </div>
              ))}
            </div>
          </div>

          <Text.Paragraph
            className="max-w-[430px] mx-auto mt-10"
            content="Learn to communicate more effectively, connect deeply, and repair any relationship in a matter of weeks."
          />

          <Video.Thumbnail
            playAuto
            playInline
            className="mt-5 lg:mx-auto lg:mt-10"
            classNameVideo="object-fit"
            playButtonSize="none"
            srcUrl={TH.VIDEO_CATEGORIES[videoIndex].url}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/**ARTICLE SECTION */}
      <section className="relative w-full pt-5 lg:pt-14">
        <Image
          alt="eclipse-left"
          className="hidden absolute top-5 lg:block 2xl:left-60"
          src="TrialHeadspace/eclipse-left.png"
        />

        <Image
          alt="eclipse-right"
          className="hidden absolute top-80 right-0 -z-10 lg:block 2xl:right-48"
          src="TrialHeadspace/eclipse-right.png"
        />

        <div className="max-w-5xl mx-auto px-4">
          <Text.Heading
            className="!text-h1 text-center mt-10 lg:text-right lg:mt-0"
            content="Latest Articles"
            size={1}
          />

          <div className="mt-5 lg:mt-14">
            <div className="flex flex-col items-center space-y-5 md:justify-center md:space-x-5 md:space-y-0 md:flex-row">
              <div className="relative">
                <Image
                  alt="impact-of-attachment-styles"
                  className="lg:hidden"
                  src="TrialHeadspace/article-mockup-mobile-1.png"
                />

                <Image
                  alt="repair-any-relationship"
                  className="hidden lg:block"
                  src="TrialHeadspace/article-mockup-1.png"
                />

                <div
                  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-[15px] cursor-pointer mx-auto px-6 py-7
                                lg:-translate-x-0 lg:left-5 lg:px-5 lg:pt-6 lg:pb-4"
                  onClick={() => onGoToBlog('article1')}>
                  <Text.Paragraph
                    className="!w-56 text-[#7b7b7b]"
                    content={TH.ARTICLES.article1.name}
                  />

                  <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
                </div>
              </div>

              <div className="relative">
                <Image
                  alt="impact-of-attachment-styles"
                  className="lg:hidden"
                  src="TrialHeadspace/article-mockup-mobile-2.png"
                />

                <Image
                  alt="repair-any-relationship"
                  className="hidden lg:block"
                  src="TrialHeadspace/article-mockup-2.png"
                />

                <div
                  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-[15px] cursor-pointer px-6 py-7 
                                lg:-translate-x-0 lg:left-5 lg:px-5 lg:pt-6 lg:pb-4"
                  onClick={() => onGoToBlog('article2')}>
                  <Text.Paragraph
                    className="!w-56 text-[#7b7b7b]"
                    content={TH.ARTICLES.article2.name}
                  />

                  <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
                </div>
              </div>
            </div>

            <div
              className="flex flex-row items-center justify-between border-primary border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article3')}>
              <div className="flex flex-row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article3.name}
                />

                <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
              </div>

              <Image
                alt="attachment-styles-for-beginners"
                className="lg:hidden"
                src="TrialHeadspace/article-mockup-mobile-3.png"
              />

              <Image
                alt="attachment-styles-for-beginners"
                className="hidden lg:block"
                src="TrialHeadspace/article-mockup-3.png"
              />
            </div>

            <div
              className="flex flex-row items-center justify-between border-grey-7 border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article4')}>
              <div className="flex flex-row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article4.name}
                />

                <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
              </div>

              <Image
                alt="how-to-heal-after-breakup"
                className="lg:hidden"
                src="TrialHeadspace/article-mockup-mobile-4.png"
              />

              <Image
                alt="how-to-heal-after-breakup"
                className="hidden lg:block"
                src="TrialHeadspace/article-mockup-4.png"
              />
            </div>

            <div
              className="flex flex-row items-center justify-between border-primary border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article5')}>
              <div className="flex flex-row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article5.name}
                />

                <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
              </div>

              <Image
                alt="how-to-end-codependency"
                className="lg:hidden"
                src="TrialHeadspace/article-mockup-mobile-5.png"
              />

              <Image
                alt="how-to-end-codependency"
                className="hidden lg:block"
                src="TrialHeadspace/article-mockup-5.png"
              />
            </div>

            <div
              className="flex flex-row items-center justify-between border-grey-7 border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article6')}>
              <div className="flex flex-row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article6.name}
                />

                <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
              </div>

              <Image
                alt="cultivate-secure-attachment"
                className="lg:hidden"
                src="TrialHeadspace/article-mockup-mobile-6.png"
              />

              <Image
                alt="cultivate-secure-attachment"
                className="hidden lg:block"
                src="TrialHeadspace/article-mockup-6.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/**LIFE ADVICE SECTION */}
      <section className="w-full pt-14 px-4">
        <div className="max-w-5xl text-center mx-auto">
          <Text.Heading
            className="max-w-3xl mx-auto"
            content="Life Advice for Any Relationship, Experience, or Goal"
            size={1}
          />

          <div className="flex flex-col items-center justify-between mt-12 lg:flex-row">
            <div className="lg:text-left">
              <Text.Heading content="Attachment Styles" size={3} />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article3.name}
                onClick={() => onGoToBlog('article3')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article1.name}
                onClick={() => onGoToBlog('article1')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article6.name}
                onClick={() => onGoToBlog('article6')}
              />

              <Text.Heading className="mt-12 lg:mt-14" content="Emotional Wellness" size={3} />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article4.name}
                onClick={() => onGoToBlog('article4')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article5.name}
                onClick={() => onGoToBlog('article5')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article2.name}
                onClick={() => onGoToBlog('article2')}
              />
            </div>

            <Image
              alt="life-advice"
              className="hidden lg:block"
              src="TrialHeadspace/life-advice-mockup.png"
            />
          </div>
        </div>
      </section>

      {/**COMMUNITY SECTION*/}
      <Image
        alt="background"
        className="w-full mt-10 -mb-1 lg:mt-0"
        src="TrialHeadspace/community-bg.png"
      />
      <section className="w-full bg-black px-4 py-20">
        <div className="max-w-5xl text-center text-white mx-auto">
          <Text.Heading className="max-w-xl mx-auto" content={TH.COMMUNITY.heading} size={1} />

          <div className="flex flex-row justify-between space-x-4 mt-12 overflow-x-auto scrollbar-hide lg:mt-15">
            {TH.COMMUNITY.cards.map((card, index) => (
              <div
                key={`card_${index}`}
                className="min-w-52 bg-white rounded-[30px] px-8 py-4 lg:w-60 lg:py-10 lg:px-9">
                <div className="min-w-28 min-h-20 mx-auto">
                  <Image
                    alt={card.copy}
                    className="w-16 h-16 mx-auto"
                    src={`TrialHeadspace/${card.img}`}
                  />
                </div>

                <Text.Heading className="text-black mt-3" content={card.stat} />

                <Text.Paragraph className="text-[#7B7B7B] mt-6" content={card.copy} />
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-[70px]">
            <Text.Heading
              className="text-center lg:text-left"
              content={TH.COMMUNITY.bullets.heading}
              size={1}
            />

            <div className="flex flex-col space-y-11 text-left mt-10 md:space-x-10 md:space-y-0 md:flex-row md:mt-20">
              <div>
                <div className="flex flex-row items-center space-x-6 lg:space-x-10">
                  <FontAwesomeIcon icon={faCheck} size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet1} />
                </div>

                <div className="flex flex-row items-center space-x-6 mt-11 lg:space-x-10 lg:mt-14">
                  <FontAwesomeIcon icon={faCheck} size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet2} />
                </div>
              </div>

              <div>
                <div className="flex flex-row items-center space-x-6 lg:space-x-10">
                  <FontAwesomeIcon icon={faCheck} size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet3} />
                </div>

                <div className="flex flex-row items-center space-x-6 mt-11 lg:space-x-10 lg:mt-14">
                  <FontAwesomeIcon icon={faCheck} size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet4} />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-lg mt-28 mx-auto">
            <Text.Heading content={TH.PRICING.heading} />

            <Text.Paragraph
              className="mt-4"
              content={TH.PRICING.subheading}
              spacing="tracking-0.325"
            />

            <Text.Paragraph className="mt-4" content={TH.PRICING.copy} />

            <Button className="mt-10 border-primary" label="SIGN UP NOW" onClick={onGoToCheckout} />

            <Text.Paragraph className="mt-7" content={TH.PRICING.cancelationPolicy} />
          </div>
        </div>
      </section>
    </Page>
  )
}
