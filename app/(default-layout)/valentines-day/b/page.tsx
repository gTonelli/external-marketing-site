// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import Image from 'next/image'
import { Card } from '@/components/Card/Card'
import { CarouselCourses } from '@/components/Carousel/variants/CarouselCourses'
import { Icon } from '@/components/Icon'
import { SocialProofBar } from '@/components/SocialProofBar'
import { List } from '@/components/List'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import Link from 'next/link'
import { Button } from '@/components/Button/Button'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { FaqSecondary } from '@/components/Faq/variants/FaqSecondary'
// utils
import { ERoutes } from '@/utils/constants'
// styles
import './styles.css'

export default function ValentinesDayPageVariant() {
  return (
    <Page className="w-full overflow-hidden" page_name="Valentine's Day">
      {/* HEADER TEXT */}
      <Section className="relative z-10 bg-blue-lightest lg:pb-0">
        <p className="mb-3 rounded-lg font-bold bg-blue-dark text-white px-8 py-5 lg:py-6 lg:text-3xl">
          Valentine's Day Offer!
        </p>

        <h2 className="text-primary font-bold mb-4 lg:max-w-[940px] lg:mx-auto lg:text-5xl lg:mb-8">
          Are You Ready To Transform Your Relationships And Find Lasting Love?
        </h2>

        <h4 className="!text-lg font-medium mb-4 lg:max-w-3xl lg:mx-auto">
          Unlock free access to the empowering courses and inspiring simple-to-do tools that are
          giving our members the breakthroughs they've been looking for.{' '}
          <span className="underline">Better yet, get 60% off your first month</span>! And you can
          do it all right from the comfort of your home. Start building the best relationships of
          your life now!
        </h4>

        <CheckoutLink />

        <p className="mt-2 font-bold italic">*This offer ends soon!*</p>
      </Section>

      <Image
        alt="A green, styled accent wave below the section."
        className="relative w-full mt-0 z-5 2xl:-mt-5"
        src="/images/styled-wave-green.png"
        tabIndex={-1}
        width={425}
        height={22}
        sizes="100vw"
      />

      <Section
        className="2xl:py-24"
        classNameInner="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-4 xl:max-w-6xl xl:items-start">
        <div className="col-start-2 text-left">
          <p className="lg:mt-0">Does any of this sound like you?</p>

          <ul className="list-disc pl-4 space-y-4 mb-4">
            <li>You keep repeating the same negative patterns over and over.</li>

            <li>You feel a burning resentment towards a family member, friend, or partner.</li>

            <li>You struggle to form a healthy new habit no matter how hard you try.</li>

            <li>You find it difficult to open up emotionally and connect with someone.</li>

            <li>You keep trying to change but fail each time.</li>
          </ul>

          <p>
            I get it; making big life changes is challenging, particularly if you don’t know how to
            start, what to do, or how to do it.
          </p>
        </div>

        <div className="text-left col-start-1 row-start-2 col-span-2">
          <p>
            Well, I’ve developed an approach that helps you every step of the way, delivering
            real-life transformations.
          </p>

          <p>
            It’s called the Integrated Attachment Theory (IAT™), and it’s focused on changing your
            patterns, beliefs, and behaviors through your subconscious mind.
          </p>

          <p>
            It’s the basis of our All-Access Pass, which includes our courses, webinars, online
            support groups, and easy-to-use strategies and tools.
          </p>

          <p>
            To help get you off to a positive start, I’m offering a 60% discount on your first month
            on our All-Access Pass (That's $39 instead of the usual $67).
          </p>

          <p>
            This offer is your chance to get to the root of your biggest emotional challenges and
            start feeling more confident, in control, and fulfilled in every aspect of your life.
          </p>
        </div>

        <div className="lg:row-start-3 lg:col-span-2">
          <CheckoutLink />

          <p className="text-base font-bold italic mt-3">
            * This offer is available for a limited time *
          </p>
        </div>

        <Image
          alt="A woman drinking coffee and looking out of a porch window."
          className="w-full rounded-20 my-4 lg:my-0 lg:col-start-1 lg:row-start-1"
          src="/images/BlackFridayPage/mha-hero.jpg"
          width={393}
          height={263}
        />
      </Section>

      {/* YOUR ALL-ACCESS PASS IS THE QUICKEST AND MOST AFFRODABLE SECTION */}
      <Section className="text-white bg-black-secondary lg:pb-0 2xl:py-24 2xl:pb-0">
        <h2 className="mb-4">
          Your All-Access Pass Will Guide You to Make the Breakthroughs to Experience True
          Transformations in Your Life
        </h2>

        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="text-left">
            <p>
              The Personal Development School is the leading online school, helping over 200,000
              members change their thoughts and become more fulfilled in every area of their lives.
            </p>

            <p>
              Our All-Access Pass gives you the authentic experience of our Integrated Attachment
              Theory™. You’ll get access to both the practical tools and caring support you need to
              figure out the root cause of your painful emotions, negative thinking patterns, and
              relationship issues so that you can change them once and for all.
            </p>

            <p>
              When you activate your All-Access Pass, you’ll have the opportunity to take any of our
              courses and start learning our scientifically-proven formulas for:
            </p>
          </div>

          <div className="text-left">
            <List
              classNameIcon="!text-3xl text-yellow"
              classNameListItems="font-bold mb-4"
              classNameText="lg:pl-1"
              iconName="star"
              listItems={[
                'Healing your attachment style and overcoming your greatest obstacles to happy, healthy relationships.',
                'Battling anxiety, depression, loneliness, and deep sadness.',
                'Setting life and career goals that are aligned with your unique personality needs.',
                'Breaking bad spending habits and developing a healthier relationship with money.',
                'Putting procrastination, resentment, people-pleasing and self-esteem issues to bed.',
              ]}
            />
          </div>
        </div>

        <SocialProofBar
          cardNumbers={[4100000, 33000000, 113]}
          cardTexts={['Attachment Styles Discovered', 'Youtube Views', 'Countries']}
          className="text-black"
          classNameCard="lg:pt-7 xs:!px-3 lg:pb-5"
          classNameIcon="!bg-white"
          iconImgs={[
            'BlackFridayPage/envelope-open-text.svg',
            'BlackFridayPage/users.svg',
            'BlackFridayPage/earth-americas.svg',
          ]}
        />

        {/* JOIN THOUSANDS OF OUR MEMBERS HERO SECTION */}
        <h2 className="text-left lg:mb-12">
          Join Thousands of Our Members in Learning Practical, Powerful, and Proven Techniques for
          Creating Change That Actually Lasts.
        </h2>

        <div className="text-left lg:grid lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <p content="Wondering why we’re giving away free access to our platform?" />

            <p>Are you wondering why I’m giving a special offer for our All-Access Pass?</p>

            <p>
              That’s because I know that our IAT™ approach works. It’s been proven time and again by
              members who’ve experienced the change they want.
            </p>

            <p>
              We’ve surveyed thousands of our students from around the world who have taken our
              courses and given us honest ratings. They consistently report:
            </p>

            <List
              classNameIcon="!text-white !text-xxs pt-[6px]"
              classNameListItems="font-medium mb-4"
              iconName="circle"
              listItems={[
                '3X more self-confidence and fulfillment in their dating lives (if single).',
                'A 50% improvement in their current relationship (if in a committed relationship).',
                'A 40% improvement in their self-esteem and self-talk.',
                '30% fewer anxiety and panic attacks than they had before. ',
                '90% success rate in forming a new habit within 21 days.',
              ]}
            />
          </div>

          <div className="lg:hidden">
            <p>
              Whether you need help building healthier habits, understanding where your toxic
              relationship patterns come from, or learning healthy coping mechanisms for dealing
              with your anxiety week to week, you’ll have the opportunity to learn essential tools
              that will change your life.
            </p>

            <p>
              All you need is 10 minutes daily for 90 days for you to experience a truly authentic
              and purposeful transformation.
            </p>
          </div>

          <Image
            alt="An woman hugging herself and smiling with her eyes closed."
            className="rounded-20 lg:mt-4 lg:col-span-6"
            src="/images/BlackFridayPage/mha-woman-hugging-herself.jpg"
            width={393}
            height={428}
          />
        </div>

        <div className="hidden text-left lg:block lg:col-span-12">
          <p>
            Whether you need help building healthier habits, understanding where your toxic
            relationship patterns come from, or learning healthy coping mechanisms for dealing with
            your anxiety week to week, you’ll have the opportunity to learn essential tools that
            will change your life.
          </p>

          <p className="mb-0">
            All you need is 10 minutes daily for 90 days for you to experience a truly authentic and
            purposeful transformation.
          </p>
        </div>
      </Section>

      <Image
        alt="A styled black wave decorating the bottom of the section"
        className="w-full md:hidden"
        src="/images/BlackFridayPage/black-secondary-wave.jpg"
        tabIndex={-1}
        width={425}
        height={112}
      />

      <Image
        alt="A styled black wave decorating the bottom of the section"
        className="w-full hidden md:block"
        src="/images/BlackFridayPage/black-secondary-wave-desktop.jpg"
        tabIndex={-1}
        width={768}
        height={116}
        sizes="100vw"
      />

      {/* TESTIMONIAL CAROUSEL */}
      <div className="w-full max-w-[100vw]">
        <CarouselTestimonial
          className="mt-6"
          classNameHeader="text-center"
          headingText="You Could Be Joining Our Members in Having Breakthroughs Like This:"
          showQuotations={false}
        />
      </div>

      {/* HERES WHAT YOU GET CARDS */}
      <Section className="bg-blue-lightest relative z-10 2xl:py-24">
        <h2 className="mb-4">Here’s What You Get With Your All-Access Pass:</h2>

        <Card
          className="default-padding text-left border-none my-4 
            lg:grid lg:grid-cols-2 lg:gap-12 lg:p-6 lg:items-start lg:my-12 
            xl:p-8">
          <div>
            <p className="text-primary font-thin italic text-2xl tracking-widest mb-2">
              EMPOWERING ONLINE COURSES FOR EVERY AREA OF YOUR LIFE
            </p>

            <Image
              alt="A moxkup of the PDS dashboard showing the courses and search features of the platform."
              className="w-full"
              src="/images/BlackFridayPage/dashboard-preview.jpg"
              width={361}
              height={290}
            />
          </div>

          <div>
            <p>
              Take the time to explore our complete list of tailed courses (which range from between
              1 and 3 hours) carefully designed to help you tackle any personal challenge stopping
              you from living your dream life.
            </p>

            <p>
              In each course, I’ll guide you with simple, step-by-step IAT™ concepts and real-life
              examples and stories to highlight how they work. I’ll explain and show you the
              scientifically-backed tools, strategies, and techniques you can use in everyday life
              to begin achieving your goals.
            </p>

            <p>
              You can begin practicing and mastering these tools, strategies, and techniques with
              the PDF workbook (filled with thought-provoking exercises) that comes with each
              course. It’s the best and most effective way to learn the approach of Integrated
              Attachment Theory™!
            </p>
          </div>
        </Card>

        <Card
          className="default-padding text-left border-none my-4 
            lg:grid lg:grid-cols-2 lg:gap-12 lg:p-6 lg:items-start lg:my-12 
            xl:p-8">
          <div>
            <p className="text-primary font-thin italic text-2xl tracking-widest mb-2">
              INVITES TO WEEKLY LIVE WEBINARS AND Q&A SESSIONS
            </p>

            <Image
              alt="A mockup of Thais teaching an online webinar to several students."
              className="w-full lg:mt-20"
              src="/images/BlackFridayPage/live-webinar.jpg"
              width={361}
              height={192}
            />
          </div>

          <div>
            <p className="lg:mt-0">
              Get additional guidance from me as you make your way through our courses and face the
              deeper parts of yourself.
            </p>

            <List
              classNameIcon="!text-black text-[0.25em] pt-[6px]"
              classNameListItems="text-lg"
              iconName="circle"
              listItems={[
                `**Live webinars** - Each week, I’ll break down your course learnings in more detail and share practical tips and examples 
                on how to use the tools and techniques in your life.`,
                `**Q&A sessions** – got something that’s keeping you up at night? During these calls, I’ll personally answer your questions 
                and guide you in resolving your biggest challenges.`,
                `**Live webinars and Q&As** are totally optional! They are not a required part of any course but are simply there for extra 
                support and connection! I’ll be there 4X each week to answer your questions, guide you on your journey and help you see any 
                blind spots you might be missing!`,
                `**Access past recordings** – listen (or re-listen) to all of our webinars and Q&As whenever is convenient for you so you 
                never miss out.`,
              ]}
            />
          </div>
        </Card>

        <Card
          className="default-padding text-left border-none my-4 
            lg:grid lg:grid-cols-2 lg:gap-12 lg:p-6 lg:items-center lg:my-12 
            xl:p-8">
          <div>
            <p className="text-primary font-thin italic text-2xl tracking-widest mb-2">
              A WELCOME INTO A COMMUNITY THAT TRULY UNDERSTANDS YOU
            </p>

            <Image
              alt="A screenshot of the social events available at PDS: Self Discovery Routine, Communication Scripts Practice, Self-Love Routine, Guided Meditations, Sharing Circle and Study Groups."
              className="W-FULL"
              src="/images/BlackFridayPage/socials-preview.jpg"
              width={361}
              height={290}
            />
          </div>

          <div>
            <p className="lg:mt-0">
              You don’t need to go through this healing journey on your own.
            </p>

            <p>
              As a member, you can join our
              <strong>online study groups, sharing circles, self-love routines</strong> and{' '}
              <strong>other support groups</strong> led by our trained coaches.
            </p>

            <p>
              Plus, you’ll also get access to our **private online forum and Facebook group,** where
              you can connect with like-minded people also working on improving their emotions,
              relationships and attachment styles.
            </p>

            <p>
              **This is also an optional feature** and is not required to see massive results. It’s
              here for daily guidance, inspiration and connection with like-minded people if you
              find that to be a supportive part of your learning process!
            </p>
          </div>
        </Card>

        <div className="lg:row-start-2 lg:col-span-2">
          <CheckoutLink />

          <p className="font-bold italic mt-3 mb-0">
            * This offer is available for a limited time *
          </p>
        </div>
      </Section>
      {/* COURSES CAROUSEL */}
      <CarouselCourses
        classNameArrow="!bg-green-light"
        classNameSubheading="mb-0"
        checkoutLink={ERoutes.STRIPE_CHECKOUT_39_FIRST_MONTH}
      />

      {/* THAIS SECTION */}
      <Section classNameInner="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center">
        <div className="text-left order-1">
          <h2 className="mb-4">Hi! I’m Thais.</h2>

          <p>
            I’m a personal development expert, best-selling author, and co-founder of The Personal
            Development School.
          </p>

          <p>
            And everything I’ve told you so far about Integrated Attachment Theory™, how it works,
            and how it’s all interconnected with our All-Access Pass comes from one thing...
          </p>

          <p>My own personal experience.</p>

          <p>
            I, too, struggled with relationships, love, destructive patterns, and the inability to
            change them.
          </p>

          <p>
            Then, in my darkest moment, it occurred to me that if I could figure out why I kept
            repeating the same subconscious behaviors and patterns, I could change them.
          </p>

          <p>
            I started recognizing my patterns, what triggered them, and the healthy ways to change
            and shift my subconscious mind.
          </p>
        </div>

        <Image
          alt="A headshot of Thais smiling at the camera."
          className="w-full rounded-full max-w-106 order-3 lg:order-2 lg:max-w-none lg:p-4"
          src="/images/thais_headshot.png"
          width={393}
          height={393}
        />

        <div className="text-left order-2 lg:order-3 lg:col-span-2">
          <p>And it worked. Amazingly.</p>

          <p>
            I looked at a completely empowered, confident, and inspired person. And it led me to a
            profound realization: I need to help people experience the same changes I did.
          </p>

          <p>
            This inspired experience propelled me to a decade of self-discovery, academic training
            (completing a Master’s Degree and Ph.D.), and client-based research (my own clinic),
            which became the basis for my Integrated Attachment Theory™. It’s the foundation of
            everything here at The Personal Development School.
          </p>

          <p>
            I aim to help people seek change and achieve their goals by overcoming their emotional
            challenges, low self-esteem and confidence, subconscious mental blocks, and attachment
            styles.
          </p>

          <p>Are you ready to join us?</p>
        </div>
      </Section>

      {/* MENTAL HEALTH SECTION */}
      <Image
        alt="A styled pink wave to decorate the top of the section"
        className="w-full lg:hidden"
        src="/images/BlackFridayPage/mha-purple-wave.jpg"
        tabIndex={-1}
        width={425}
        height={228}
        sizes="100vw"
      />

      <Image
        alt="A styled pink wave to decorate the top of the section"
        className="w-full hidden lg:block"
        src="/images/BlackFridayPage/mha-purple-wave-desktop.jpg"
        tabIndex={-1}
        width={1024}
        height={153}
        sizes="100vw"
      />

      <Section className="bg-primary-light-50 lg:pt-0 2xl:pb-24">
        <div className="lg:-mt-4 2xl:-mt-12 3xl:">
          <h2> Is your personal well-being always going to be in the backseat?</h2>

          <p className="max-w-3xl mx-auto lg:my-8">
            If you’re questioning whether you can make the time for your personal development, ask
            yourself:
          </p>

          <div className="lg:grid lg:grid-cols-4 lg:gap-6">
            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto">
                <Icon className="text-purple-dark text-4xl" name="eye" type="regular" />
              </div>

              <p className="w-3/4 mx-auto lg:w-auto">
                What does my life look and feel like if I hold onto resentment?
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto">
                <Icon className="text-purple-dark text-4xl" name="heart" type="regular" />
              </div>

              <p className="w-3/4 mx-auto lg:w-auto">
                Will I ever be ready to open up and form a true, loving connection with someone?
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto">
                <Icon className="text-purple-dark text-4xl" name="sad-tear" type="regular" />
              </div>

              <p className="w-3/4 mx-auto lg:w-auto">
                What happens if I keep repeating those same negative patterns over and over?
              </p>
            </div>

            <div>
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto">
                <Icon className="text-purple-dark text-4xl" name="clock" type="regular" />
              </div>

              <p className="w-3/4 mx-auto lg:w-auto">
                How much longer can I let my self-esteem block me from forming healthy habits?
              </p>
            </div>
          </div>

          <p className="font-medium max-w-xl mx-auto">
            This limited-time offer is your call to learn everything you need to know to break your
            patterns once and for all and start experiencing the change you want to see in your
            life.
          </p>

          <p className="max-w-xl mx-auto">
            Don’t forget that all of our courses are self-paced courses you can work through however
            it works for you. Many of them are as short as one hour in length!
          </p>

          <CheckoutLink />
        </div>
      </Section>

      {/* BREATHROUGH SECTION */}
      <Section className="bg-black-secondary text-white 2xl:py-24">
        <h2>Ready for Your First Breakthrough?</h2>

        <p className="max-w-64 tracking-widest text-xl mb-4 mx-auto xs:tracking-0.325 xs:max-w-80 lg:text-3xl lg:!max-w-xl lg:mt-8">
          TRY OUR ALL-ACCESS PASS.
        </p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:my-8">
          <Image
            alt="A mockup of PDS courses and features on several devices: an iMac, macbook, iPad and iPhone."
            className="w-full"
            src="/images/best-value-mockup.png"
            width={393}
            height={195}
          />

          <div className="text-left">
            <p className="font-medium">Join today and get instant access to:</p>

            <List
              className="mb-4"
              classNameIcon="text-success"
              classNameListItems="my-4"
              iconName="circle-check"
              iconType="regular"
              listItems={[
                `Our complete library of video courses you can watch to manage emotions, learn new 
            coping mechanisms, and get to the bottom of your biggest challenges.`,
                `Weekly webinars and Q&A sessions where you can ask me questions and get even more 
            support (plus recordings of these sessions so you never miss out).`,
                `Community support to suit your needs, including our online forum and weekly support 
            groups led by our trained coaches.`,
              ]}
            />
          </div>
        </div>

        <CheckoutLink />

        <span className="block italic font-medium mt-4">
          * This offer is available for a limited time *
        </span>
      </Section>

      {/* VIDEO SECTION */}
      <Section className="2xl:pb-24">
        <h2 className="my-4 max-w-4xl mx-auto lg:mb-12">
          Curious to See How the All-Access Pass Can Change Your Life? Hit Play to Find Out What
          Awaits You.
        </h2>

        <VideoYoutube
          className=" rounded-10 mx-auto"
          iframeClassName="rounded-10"
          maxHeight={432}
          thumbnail="/images/BlackFridayPage/mha-video-thumbnail.png"
          videoId="zpwXtAyKl6Q"
          type="testimonial"
        />
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-blue-lightest 2xl:py-24">
        <FaqSecondary
          className="bg-transparent py-0"
          faq={FAQs}
          subheaderTextDesktop="BEFORE STARTING YOUR FREE TRIAL"
        />
      </Section>
    </Page>
  )
}

const CheckoutLink = ({ label = 'Start My All-Access Pass' }: { label?: string }) => (
  <Link href={ERoutes.STRIPE_CHECKOUT_39_FIRST_MONTH}>
    <Button className="text-xl" label={label} />
  </Link>
)

const FAQs = [
  {
    question:
      'The trial includes access to over 60 courses! Where should I start to make the most of my membership?',
    answer: `If you haven’t already done so, go to our website and take the attachment Style Quiz to learn your attachment style. Then once you 
  have signed up for your free trial, login to the members area and download our Course Guide to discover which courses you should start with.`,
  },
  {
    question: 'What happens after my first month?',
    answer: `After your first month (so your second month), you’ll automatically be charged the standard $67/month to retain access to everything. 
      But if you feel it’s not the right fit for you, there is zero obligation and you can cancel before your first month ends by logging into 
      the members area.`,
  },
  {
    question: 'Can I cancel later on?',
    answer:
      'Absolutely! You can cancel any time. Plus, we also offer a no-questions asked 7-day money-back guarantee – meaning there is zero risk if you become a member.',
  },
  {
    question: 'Can you remind me what I get access to?',
    answer: `Sure! You get access to over 60 courses to reprogram your attachment style, improve your relationships and gain emotional mastery. You also get 
    access to weekly live webinars and Q&A calls, and all of our past recordings. Plus, access to our members-only forum and Facebook group, as well as online 
    study groups and social events so you can get additional support and connect with likeminded members.`,
  },
]
