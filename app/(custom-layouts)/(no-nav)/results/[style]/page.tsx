// components
import { Button } from '@/components/Button/Button'
import { Page } from '@/components/Page'
import { TestimonialSection } from '@/components/TestimonialSection'
import VideoTeaser from '@/components/Video/variants/VideoTeaser'
import { Articles } from '@/components/Articles'
import { CommunityTeaser } from '@/components/CommunityTeaser'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { List } from '@/components/List'
import Image from 'next/image'
import { TextParagraph } from '@/components/Text/variants/TextParagraph'
import { IButtonCheckoutProps } from '@/components/Button/variants/ButtonCheckout'
import { ButtonCheckoutSplitTest } from '@/components/Button/variants/ButtonCheckoutSplitTest'
// config
import { RESULTS_COPY } from './config'
// libraries
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
// utils
import { TStyle } from '@/utils/types'
import { externalRoutes } from '@/utils/constants'
// styles
import './styles.css'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export default function ResultsPage({ params }: { params: { style: TStyle } }) {
  const copy = RESULTS_COPY[params.style]

  return (
    <Page page_name={`Attachment Style Results - ${params.style.toUpperCase()}`}>
      <Section
        className={`bg-hero-${params.style} w-full min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40`}
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className={`bg-hero-${params.style}-mobile lg:hidden`} />

        <div className="relative text-black text-left p-4 z-5 lg:col-span-7">
          <h1 className="capitalize leading-9 mb-6">{copy.hero.header}</h1>

          <p className="mb-8">
            Your attachment style is formed during childhood and is the #1 factor that determines
            whether your relationships will fail or succed. What's your attachment style? Keep
            reading to learn more about your attachment profile!
          </p>

          <ButtonCheckout />
        </div>
      </Section>

      {/* REULT */}
      <Section>
        <div className="w-full text-left lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <h2 className="mb-5 lg:hidden">
            Your Attachment Style Is:{' '}
            <span className="text-primary font-effra">{copy.result.header.toUpperCase()}</span>
          </h2>

          <VideoThumbnail
            className="my-4 lg:order-1 lg:my-0"
            playButtonSize="medium"
            srcUrl={copy.result.videoSrc}
            thumbnailUrl="AttachmentQuizResults/video-thumbnail.jpg"
          />

          <div>
            <h2 className="mb-2 hidden lg:block">
              Your Attachment Style Is:{' '}
              <span className="text-primary font-effra">{copy.result.header.toUpperCase()}</span>
            </h2>

            {copy.result.body.map((result, i) => (
              <p key={`result_body_${i}`} className="mb-4">
                {result}
              </p>
            ))}

            <ButtonCheckout />
          </div>
        </div>
      </Section>

      {/**LIST SECTION*/}
      <Section>
        <h2 className="mb-8">Does Any Of This Sound Like You?</h2>

        <div className="text-left lg:grid lg:grid-cols-2 lg:gap-8">
          <List
            classNameIcon="!text-green-check text-2xl mr-3"
            classNameListItems="mb-6"
            icon={faCircleCheck}
            listItems={copy.result.listItemsLeft}
          />

          <List
            classNameIcon="!text-green-check text-2xl mr-3"
            classNameListItems="mb-6"
            icon={faCircleCheck}
            listItems={copy.result.listItemsRight}
          />
        </div>

        <ButtonCheckout />
      </Section>

      {/**OFFER SECTION*/}
      <div className="w-full overflow-hidden -mb-1">
        <Image
          alt="A styled wave"
          className="relative w-[1024px] -left-56 max-w-none md:w-[1440px] lg:!w-full lg:left-0"
          tabIndex={-1}
          src="/images/AttachmentQuizResults/results-wave.svg"
          width={1440}
          height={106}
        />
      </div>
      <Section
        className="bg-gradient-to-b from-blue-lightest to-blue-75 lg:overflow-hidden"
        classNameInner="!max-w-screen-laptop">
        <TextParagraph
          useMD
          className="max-w-screen-lg mx-auto lg:mb-8"
          content={copy.result.offer}
        />

        <Image
          alt="A mockup of PDS courses on 2 phones side by side."
          className="w-auto max-h-96 mt-12 mb-8 mx-auto lg:hidden lg:max-h-max"
          src="/images/AttachmentQuizResults/offer-mockup-1.png"
          width={425}
          height={465}
        />

        <div className="lg:grid lg:grid-cols-[1fr_474px_1fr] lg:relative lg:items-start lg:w-[125%] lg:left-[-12.5%]">
          <Image
            alt="A mockup of PDS courses on 2 phones side by side."
            className="w-full hidden lg:block"
            src="/images/AttachmentQuizResults/offer-mockup-1-desktop.png"
            unoptimized
            width={1024}
            height={1000}
          />

          <ButtonCheckout className="hover:!no-underline">
            <div className="bg-primary text-white rounded-4xl default-padding">
              <h2>Step Into Your Dream Life</h2>

              <p className="tracking-33 uppercase my-4">See major breakthroughs in just 30 days!</p>

              <p className="my-4">
                You'll unlock unlimited access to our courses, social events, and powerful
                reprogramming tools for just $67/month (save 30% for a limited time).
              </p>

              <Button className="bg-green border-green text-black mb-4" label="SIGN UP NOW" />

              <p>You can cancel all your subscription anytime – no strings attached.</p>
            </div>
          </ButtonCheckout>

          <Image
            alt="A mockup of the PDS quiz and PDS webinar calendar on 2 phones side by side."
            className="w-full hidden lg:block"
            unoptimized
            src="/images/AttachmentQuizResults/offer-mockup-2-desktop.png"
            width={1024}
            height={1000}
          />
        </div>
      </Section>

      <Section className="">
        <h2>What Is An Attachment Style?</h2>

        <p className="tracking-33 my-8">EVERYONE HAS AN ATTACHMENT STYLE</p>

        <div>
          <List
            className="text-left lg:grid lg:grid-cols-3 lg:gap-4"
            classNameIcon="!text-green-check text-2xl mr-3 mt-1"
            classNameListItems="mb-6"
            icon={faCircleCheck}
            listItems={[
              `Your attachment style represents the subconscious set of rules you formed in childhood about how to love 
              and emotionally connect to others. It is one of the primary predictors of whether a relationship will thrive 
              or struggle.`,

              `When someone has a different attachment style than you, it's no different than trying to play a board game with 
              someone who has a completely different set of rules for how to play the game.`,

              `When you have a different set of rules and expectations for love, it's easy for things to be more confusing, defeating, 
              and overwhelming than they need to be. This can lead to issues finding, forming, or maintaining relationships.`,
            ]}
          />
        </div>

        <ButtonCheckout className="lg:hidden" />
      </Section>

      <Section
        className="xxs:"
        classNameInner="!max-w-xl mx-auto grid grid-cols-[80px_1fr] gap-4 items-center xxs:grid-cols-[120px_1fr] xs:grid-cols-[145px_1fr] lg:gap-8">
        <Image
          alt="A vector image of a man holding a women in his arms, with hearts above his head"
          className="w-full"
          src="/images/AttachmentQuizResults/lasting-love.svg"
          width={146}
          height={151}
        />

        <div className="text-left">
          <h3>Find Lasting Love</h3>

          <p>
            Connect deeply with others and build the best relationships of your life. Learn to work
            and thrive together and with each other's attachment styles.
          </p>
        </div>

        <Image
          alt="A vector image of a man and a woman kissing"
          src="/images/AttachmentQuizResults/heal-relationships.svg"
          className="w-full"
          width={154}
          height={150}
        />

        <div className="text-left">
          <h3>Heal Your Relationships</h3>

          <p>
            Feel 88% happier in relationships in as little as 7 days. Make substantial changes to
            your relationships by practicing for only 10 minutes a day.
          </p>
        </div>

        <Image
          alt="A vector image of a man and a woman holding hands"
          src="/images/AttachmentQuizResults/master-self-love.svg"
          className="w-full"
          width={135}
          height={142}
        />

        <div className="text-left">
          <h3>Master Self-Love</h3>

          <p>
            Learn how to love yourself and meet your own needs. I'll teach you how to set healthy
            boundaries and habits, so you become the best you possible.
          </p>
        </div>
      </Section>

      <Section classNameInner="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="text-left">
          <h2>Build Your Dream Life</h2>

          <p className="my-4">
            At The Personal Development School, we offer comprehensive virtual relationship courses
            that you can access anytime, any place. Our courses provide you with practical
            strategies, expert guidance, and a supportive online community to build the best
            relationships of your life.
          </p>

          <p>
            For a limited time, you can get our All-Access Pass for 30% off ($67 per month). You'll
            unlock all courses, webinars, workbooks, quizzes, and more. Plus, a 7-day money-back
            guarantee and the flexibility to cancel anytime.
          </p>

          <div className="text-center lg:text-left">
            <ButtonCheckout className="my-8" label="SAY YES TO YOUR DREAMS" />
          </div>
        </div>

        <Image
          alt="An image of a man holding a tablet with PDS courses on it."
          className="w-full rounded-3xl xs:rounded-4xl"
          src="/images/AttachmentQuizResults/tablet-mockup.jpg"
          width={357}
          height={282}
        />
      </Section>

      {/**TESTIMONIAL*/}
      <section className="max-w-4xl mx-auto px-4 pt-9">
        <TestimonialSection />

        <div className="text-center">
          <h1 className="mt-14 lg:mt-22">Take a Moment For Yourself</h1>

          <p className="mt-4">
            Explore some snippets of our most popular courses from each of the categories below!
          </p>

          <ButtonCheckout
            className="text-black bg-blue border-blue mt-8"
            label={
              params.style === 'sa'
                ? 'CREATE YOUR DREAM RELATIONSHIP'
                : 'BECOME SECURELY ATTACHED NOW'
            }
          />
        </div>
      </section>

      {/**VIDEO SECTION*/}
      <VideoTeaser />

      <Articles />

      <CommunityTeaser
        includePaymentOptions={false}
        teaserHeading="Join The Personal Development School for 30% Off"
        paymentOptionsConfigKey="dreamLife"
      />

      <Section className="bg-black text-center text-white">
        <h1>Step Into Your Dream Life</h1>

        <p className="tracking-widest my-4">See major breakthroughs in just 30 days!</p>

        <p className="max-w-106 mx-auto my-4">
          You'll unlock unlimited access to our courses, social events, and powerful reprogramming
          tools for just $67/month (save 30% for a limited time).
        </p>

        <ButtonCheckout className="text-white my-6" label="SIGN UP NOW" />

        <p className="max-w-80 mx-auto mt-4">
          You can cancel all your subscription anytime – no strings attached.
        </p>
      </Section>
    </Page>
  )
}

const ButtonCheckout = ({ ...props }: IButtonCheckoutProps) => {
  return (
    <ButtonCheckoutSplitTest
      variantUrl={externalRoutes.singleStepCheckoutRegularSubscription}
      experimentKey="PROD-3779"
      experimentName="PROD-3779-Single-Step-Checkout"
      useCookies={false}
      {...props}
    />
  )
}
