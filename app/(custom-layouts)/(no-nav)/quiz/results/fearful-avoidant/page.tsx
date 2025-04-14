// core
import Image from 'next/image'
import { cookies } from 'next/headers'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { List } from '@/components/List'
// libraries
import { faCheckCircle, faCircleSmall } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { EExternalRoutes } from '@/utils/constants'

export default function SimplifiedFAResultsPage() {
  const userFirstName = cookies().get('firstName')?.value

  return (
    <Page page_name="VSL Royal Rumble Results - fa">
      <Section classNameInner="max-w-4xl mx-auto">
        <h1 className="text-primary mb-4">You're a Fearful Avoidant!</h1>

        <p className="mb-8">Your report is on its way! Check your inbox.</p>

        <h2>
          {userFirstName ? `Congratulations ${userFirstName}!` : 'Congratulations!'} You're 1 Step
          Away To Having Healthy, Loving Relationships – Without Being Fearful!
        </h2>
      </Section>

      <Section className="!py-0" classNameInner="!max-w-6xl">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>
              <VideoThumbnail
                srcUrl="https://storage.googleapis.com/pds_videos/FA_VSL_Funnel.mp4"
                thumbnailAlt={`Fearful Avoidant video fa thumbnail`}
                thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
                type="default"
              />
            </div>

            <div className="!mx-0 mb-4 md:text-left md:!m-4 md:w-1/2">
              <p className="mb-2">
                <strong>Special One-Time Invitation</strong>
              </p>

              <h2 className="mb-2 text-3xl">
                Claim Your Offer And Get The{' '}
                <span className="text-primary">7-Days to Transform Relationships</span> Course
              </h2>

              <p className="mb-2">(Included free with our All Access Pass)</p>

              <p className="mb-4">
                <strong>
                  The NEW WAY to understand and overcome your relationship fears, uncover your
                  needs, and create a powerful connection with someone special without compromising
                  your freedom, independence, and boundaries.
                </strong>
              </p>

              <ButtonCheckout
                href={EExternalRoutes.THINKIFIC_CHECKOUT_SIMPLIFIED_FA}
                label="YES! I WANT A HEALTHY RELATIONSHIP"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="max-w-6xl mx-auto" classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">
            Are you ready to start having the best relationships of your life?
          </h2>

          <p className="mb-4">
            Being a Fearful Avoidant can make relationships feel chaotic and challenging – despite
            your desire to connect with others. This fear leads you to swing from hot to cold when
            things become serious, struggle with unexpected emotions, and worry about abandonment
            and trusting others.
          </p>

          <p className="mb-4">But it doesn't have to be this way.</p>

          <p className="mb-4">
            It is absolutely possible to create the deep connection you want in relationships
            without being exposed emotionally and losing your independence.
          </p>

          <p className="mb-4">
            Our <strong>7-Days to Transform Relationships Course</strong> offers simple yet powerful
            tools to overcome your painful relationship patterns and negative emotions while
            building and fostering a loving, trusted, and exciting relationship with transparency
            and openness.
          </p>

          <p>
            Take it as part of our <strong>All-Access Pass</strong> Membership to experience the
            profound and transformational change you desire in yourself and your relationships.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Image
            alt="Upset couple"
            width={1000}
            height={668}
            src="/images/DreamLifeResultsPage/hero.jpg"
          />
        </div>
      </Section>

      <Section>
        <h2 className="max-w-2xl mx-auto mb-8">
          <span className="lg:block">Here’s Everything You’re Getting With Your </span>

          <span className="text-primary">7 Days to Transform Relationships Course:</span>
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              alt="7 Day Transform Course Mockup"
              width={586}
              height={426}
              src="/images/SimplifiedFAPage/7-day-transform-laptop-mockup.jpg"
            />
          </div>

          <div className="text-left">
            <List
              icon={faCheckCircle}
              iconSize="2x"
              className="mb-8"
              classNameIcon="!text-green-check"
              classNameListItems="mb-4"
              listItems={[
                'A personalized roadmap so you can understand why you act the way you do and how to change those habits.',
                'A detailed process to recognize your needs and desires so you can meet them yourself and when in a relationship.',
                'Simple strategies to create healthy boundaries and communication skills that stop you from burning out in relationships.',
                'Powerful techniques to overcome your insecurities and fears, empowering you to become confident and stable in your love life.',
                "Specific tools to quickly recognize others' attachment styles and to understand their needs, fears, and boundaries.",
                'A suite of tools to build confidence and self-belief to live a healthier, happier life with yourself and others.',
              ]}
            />

            <ButtonCheckout
              href={EExternalRoutes.THINKIFIC_CHECKOUT_SIMPLIFIED_FA}
              label="YES! I WANT A HEALTHY RELATIONSHIP"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-blue-lightest py-8">
        <h2 className="text-left mb-8">
          <span className="md:block">Those Who Take Our 7 Days to </span>

          <span>Transform Relationships Course:</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="text-left">
            <List
              icon={faCheckCircle}
              iconSize="2x"
              className="mb-8"
              classNameIcon="!text-green-check mr-4"
              classNameText="mt-2"
              classNameListItems="mb-4 last:mb-0"
              listItems={[
                'Learn to trust a partner who wants to grow with them',
                'Are happy and excited to be in a passionate relationship',
                'Overcome their fears about being in a relationship',
                'Feel seen and understood by their partner',
              ]}
            />
          </div>

          <div className="text-left !-mt-4 md:!mt-0">
            <List
              icon={faCheckCircle}
              iconSize="2x"
              className="mb-8"
              classNameIcon="!text-green-check mr-4"
              classNameText="mt-2"
              classNameListItems="mb-4"
              listItems={[
                'Stop the ups and downs in a relationship',
                'Keep the excitement alive in a relationship',
                'Heal themselves from childhood trauma',
                'Move past painful relationship wounds',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-left mb-4">And As A Special Bonus:</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="text-left">
            <p className="mb-4">
              When you join today, you will receive the{' '}
              <strong>7 Days to Transform Relationships Course</strong> and an exclusive one-time
              offer with our <strong>All-Access Pass!</strong>
            </p>

            <p className="mb-4">
              This membership gives you comprehensive and unlimited access to everything we offer at
              <strong> The Personal Development School</strong>, including:
            </p>

            <List
              icon={faCircleSmall}
              iconSize="xs"
              className="mb-4"
              classNameIcon="!text-black !mt-1 !mr-4"
              classNameListItems="mb-2"
              listItems={[
                'All courses and programs that teach you the secret ingredients to understand other attachment styles and what motivates them to invest in relationships.',
                'Our unique, groundbreaking, proprietary process – Integrated Attachment Theory™ – and how it’s unlike anything you’ve ever seen before. It works fast, is simple to use, and helps anyone, anywhere!',
                "Live weekly webinars and Q&As, hosted by myself and our registered coaches, where you'll get to ask questions about your life while learning new tools to overcome challenges.",
                'Invitation to our private online community where you can connect with other members who are also going through this life-changing journey.',
                'And much more!',
              ]}
            />

            <p className="mb-4">
              You unlock everything for one price of just <strong>$67/month</strong> instead of
              paying $197 for the <strong>7 Days to Transform Relationships Course</strong> alone.
            </p>

            <p>
              <em className="block">*Single course price normal price $197 </em>
              <em>*All-Access Pass normal price $97</em>
            </p>
          </div>

          <div className="flex justify-center items-center">
            <Image
              alt="Special Bonus Mockup"
              width={581}
              height={307}
              src="/images/SimplifiedFAPage/special-bonus-mockup.jpg"
            />
          </div>
        </div>
      </Section>

      <Section className="max-w-3xl mx-auto">
        <h2>
          With Us, Fearful Avoidants Are Now Enjoying Vibrant, Healthy, & Loving Relationships!
        </h2>
      </Section>

      <CarouselTestimonialThinkific className="mt-8 mb-16" initialSlide={1} />

      <Section
        className="!max-w-full bg-[url('/images/pds-bg-vector.svg')] bg-right-bottom bg-no-repeat !bg-cover mx-auto !p-0"
        classNameInner="px-4 py-24 lg:py-36">
        <h2 className="mb-4">
          Get The 7 Days to Transform Relationships Course & Start Having A Healthy, Loving
          Relationship – Without Any Fears
        </h2>

        <h2 className="text-primary mb-4">
          Enjoy the All-Access Pass For Just <span className="line-through">$97</span> $67/month
        </h2>

        <p className="max-w-xl text-xl mx-auto mb-8">
          <strong>
            If you’re not happy for any reason, your membership is backed by a 7-day, risk-free,
            money-back guarantee.
          </strong>
        </p>

        <ButtonCheckout
          href={EExternalRoutes.THINKIFIC_CHECKOUT_SIMPLIFIED_FA}
          label="YES! I WANT A HEALTHY RELATIONSHIP"
        />
      </Section>
    </Page>
  )
}
