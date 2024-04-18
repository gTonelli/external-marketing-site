// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { CarouselSocialProof } from '@/components/Carousel/variants/CarouselSocialProof'
import { Icon } from '@/components/Icon'
import { List } from '@/components/List'
import { Animation } from '@/components/Animation'
import { AttachmentQuizV2Navigation } from '@/components/AttachmentQuizV2/AttachmentQuizV2Navigation'
import { AttachmentQuizV2Faq } from '@/components/AttachmentQuizV2/AttachmentQuizV2Faq'
import { AttachmentQuizV2SplitTestTracker } from '@/components/AttachmentQuizV2/AttachmentQuizV2SplitTestTracker'
// config
import { Section, StartQuizButton, PAGE_CONFIG } from './config'
// libraries
import { IconName } from '@fortawesome/fontawesome-common-types'

// styles
import './styles.css'

export default function AttachmentQuizV2Page() {
  return (
    <Page page_name="Attachment Style Quiz">
      <AttachmentQuizV2SplitTestTracker showingVariant={true} />

      <AttachmentQuizV2Navigation />

      <Section
        className="!pb-0 from-green-light bg-gradient-to-r to-primary-light/20"
        classNameInner="!text-left lg:grid lg:grid-cols-[1fr_500px] lg:gap-8">
        <Animation className="mb-12">
          <p className="text-xs tracking-33 lg:text-base">THE ATTACHMENT STYLE QUIZ</p>

          <h1>What Is Your Attachment Style?</h1>

          <p>
            Take Thais Gibson’s free quiz to discover your attachment style and learn how to find
            better love, create emotional connections, save and heal your relationships, and much
            more. 
          </p>

          <p>
            It only takes 5 minutes, and allows us to create a free personalized report with a
            roadmap to guide you toward achieving your relationship and personal development goals. 
          </p>

          <p className="lg:mb-8">
            Transform your life and elevate your relationships with Thais Gibson and The Personal
            Development School.
          </p>

          <StartQuizButton label="START THAIS' QUIZ" />
        </Animation>

        <Animation direction="fromRight">
          <Image
            priority
            alt="An image of Thais smiling, looking and pointing at a bubble of a happy couple."
            className="animFadeInLeft lg:w-full lg:self-end"
            src="/images/AttachmentQuiz/V2/hero.png"
            width={500}
            height={425}
          />
        </Animation>
      </Section>

      <Section className="bg-black text-white lg:mb-8" classNameInner="!text-left">
        <Animation direction="fromBottom">
          <CarouselSocialProof slides={PAGE_CONFIG.slides} />
        </Animation>
      </Section>

      <Section classNameInner="grid grid-cols-2 gap-4 !max-w-2xl lg:!max-w-screen-xl lg:grid-cols-4">
        <Animation className="col-span-2 lg:col-span-4">
          <h3>Fulfill Your Relationship Needs with Thais Gibson</h3>

          <p>
            I’ll teach you how to uncover and fulfill your unique personal and relationship needs!
          </p>
        </Animation>

        {PAGE_CONFIG.cards.map((card, i) => (
          <Animation
            direction="fromBottom"
            delay={i * 0.2}
            key={`card_${i}`}
            className="bg-[#F1F2F4] p-4 flex flex-col items-center gap-2 rounded-lg lg:gap-4">
            <Icon className="text-primary text-4xl" name={card.name} />

            <strong>{card.text}</strong>
          </Animation>
        ))}
      </Section>

      <Section classNameInner="!text-left lg:grid lg:grid-cols-2 lg:gap-10">
        <Animation>
          <Image
            alt="An image of a couple sitting on a couch working together on a computer"
            className="mb-4 rounded-20 lg:mb-0 lg:self-stretch lg:object-cover lg:h-full lg:w-auto"
            src="/images/AttachmentQuiz/V2/connections.png"
            width={393}
            height={262}
            sizes="(max-width: 1023px) 393px, 580px"
          />
        </Animation>

        <Animation direction="fromRight">
          <h3 className="lg:text-h2">
            The Enjoyable & Easy Route To Greater Connection With Your Partner
          </h3>

          <p>
            Whether you're seeking meaningful connections, cultivating positive habits and
            self-belief, or searching for your ideal partner, your dream relationship is well within
            reach.
          </p>

          <strong className="block mb-4">
            …and getting there is funner and easier than you think.
          </strong>

          <p>
            Led by Ph.D. recipient, best-selling author, and personal development leader Thais
            Gibson, we'll send you a personalized report with a roadmap of easily digestible courses
            to help you create more meaningful relationships.
          </p>

          <p>
            Renowned for her authentic and approachable style, Thais will expertly guide you through
            each course, explaining concepts, tools, and strategies with real-life examples to help
            you break free from attachment style patterns and empower yourself to embrace new
            connections.
          </p>

          <p>
            Interactive, enjoyable, and simple, you’ll never experience an easier transformation
            than this. 
          </p>

          <p>And it all begins with taking our quiz.</p>

          <strong className="block mb-8 text-primary">
            Get a glimpse of a recorded Live Webinar with Thais Gibson after taking the quiz!
          </strong>

          <StartQuizButton />
        </Animation>
      </Section>

      <Section classNameInner="default-padding rounded-20 bg-green-light grid grid-cols-2 gap-4 lg:grid-cols-3">
        <Animation className="col-span-2 -mb-1 lg:col-span-3">
          <h3>How We’ll Transform Your Attachment Style</h3>

          <p>Unlock the secrets to a fulfilling love life with our unique approach</p>
        </Animation>

        {PAGE_CONFIG.bulletPoints.map((point, i) => (
          <Animation
            key={`point_${i}`}
            direction="fromTop"
            delay={i * 0.2}
            className="bg-white text-left rounded-lg p-2 lg:p-4">
            <Icon className="text-primary" name="circle-check" type="light" />

            <p>{point}</p>
          </Animation>
        ))}
      </Section>

      <Section classNameInner="!text-left lg:grid lg:grid-cols-[1fr_530px] lg:gap-10">
        <Animation className="lg:order-2" direction="fromRight">
          <Image
            alt="A woman sitting at her computer and texting on her phone."
            className="rounded-20 mb-4 lg:w-full lg:self-stretch lg:object-cover lg:object-rightlg:mb-0"
            src="/images/AttachmentQuiz/V2/relationships.png"
            width={393}
            height={262}
            sizes="(max-width: 1023px) 393px, 530px"
          />
        </Animation>

        <Animation>
          <h3 className="mb-4">Easy Quiz, Big Insights for Better Relationships</h3>

          <p>
            Our quiz is all about keeping it easy-breezy when it comes to figuring out
            relationships:
          </p>

          <List listItems={PAGE_CONFIG.listItems} iconName="circle-check" iconType="light" />

          <p>Are you ready to embark on a journey of self-discovery?</p>

          <strong className="block mb-6">
            Take our quiz today and enhance your understanding of relationships and love with
            insights designed just for you.
          </strong>

          <StartQuizButton label="BEGIN MY QUIZ" />
        </Animation>
      </Section>

      <Section
        className="bg-gradient-to-b from-green-light to-primary-light bg-opacity-50 lg:my-8"
        classNameInner="default-padding grid gap-4 !py-0 md:grid-cols-2 lg:grid-cols-4 !text-left">
        {PAGE_CONFIG.features.map((feature, i) => (
          <Animation
            direction="fromTop"
            delay={i * 0.2}
            key={`feature_${i}`}
            className="bg-white rounded-2xl p-6">
            <div className="grid grid-cols-[24px_1fr] items-start mb-2">
              <Icon
                className="text-white text-lg bg-black p-1 rounded-md"
                name={(i + 1) as unknown as IconName}
              />

              <Image
                alt={feature.imgAlt}
                className="mx-auto"
                src={feature.imgSrc}
                width={80}
                height={80}
              />
            </div>

            <strong>{feature.text}</strong>
          </Animation>
        ))}
      </Section>

      <Section>
        <Animation>
          <h3 className="max-w-[480px] mx-auto lg:text-h2">
            You’ve Come This Far In Your Journey, So Why Not Get An Exclusive?
          </h3>

          <p className="text-left lg:text-center">
            Here’s How Our Courses Will Guide You To Loving & Long-Lasting Relationships
          </p>
        </Animation>

        <Animation
          direction="fromRight"
          className="default-padding bg-primary-light bg-opacity-30 rounded-lg !py-4 text-left">
          <AttachmentQuizV2Faq />
        </Animation>
      </Section>
    </Page>
  )
}
