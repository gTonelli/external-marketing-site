import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { Faq } from '@/components/Faq/Faq'
import { List } from '@/components/List'
import { Section } from '@/components/Section'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PDSFeaturesSection } from './PDSFeaturesSection'
import { faSparkles, faCircleInfo } from '@awesome.me/kit-545b942488/icons/classic/solid'
import Image from 'next/image'

export const PDSResultsOfferSection = () => {
  return (
    <>
      <Section classNameInner="lg:!max-w-screen-xl" id="pds-offer">
        <h2>This Is Where We at The Personal Development School Come In</h2>

        <p className="mb-4">
          <strong>We’ve helped thousands of people just like you. Now, it’s your turn.</strong>
        </p>

        <div className="mb-4 lg:mb-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">
          <Image
            src="/images/AttachmentQuizResults/course-player-mockup.png"
            className="w-full mb-4 lg:mb-0"
            alt="2 Card images overlaid on each other with some text. The first image is of a woman sitting and smiling doing a course workbook. The second image is a mockup of the PDS course player on a lap top. The text reads: 'Easy, step-by-step program. Teaches you everything you need to know about relationships.'"
            width={300}
            height={215}
            quality={100}
            sizes="100vw"
          />

          <div className="text-left">
            <p>
              You now know what real healing requires:{' '}
              <strong>safety, the right tools, and consistent support.</strong>
            </p>

            <p>
              But most people don’t know where to find those things. They’re not taught in school.
              They’re not easy to Google. And even when you want to heal, it’s hard to know where to
              start.
            </p>

            <p className="mb-0">
              <strong>That’s why we created The Personal Development School.</strong>
            </p>

            <p>
              The Personal Development School is a dedicated space for healing—offering on-demand
              courses designed to influence real change, live weekly webinars, and a private
              community of people who truly understand what you’re working through.
            </p>

            <div className="flex bg-white-secondary text-primary rounded mb-4 px-4 py-2">
              <FontAwesomeIcon className="mt-1" icon={faSparkles} />

              <p className="ml-2 mb-0">
                It’s designed so you can access everything you need to rewire old patterns and build
                healthier relationships, all in one place.
              </p>
            </div>

            <p>
              And it’s all included in your <strong>All-Access Pass</strong> with us.
            </p>
          </div>
        </div>

        <h2 className="max-w-[lg:mb-6">
          That Means You'll Get The Three Essential Elements You Need For Change In Your All-Access
          Pass. That Includes:
        </h2>

        <PDSFeaturesSection attachmentStyleLong={attachmentStyleLong} />

        <Image
          src="/images/AttachmentQuizResults/course-player-mockup-2.png"
          className="w-full max-w-[816px] mx-auto mb-6 lg:mb-10"
          alt="An image of the Pds course player on several devices: a 3 different size tablets, a phone, and a mac"
          width={343}
          height={113}
          quality={100}
          sizes="100vw"
        />

        <p className="text-lg font-bold">So what does this look like for you?</p>

        <ButtonCheckout className="mb-4" label="JOIN THE ALL-ACCESS & SAVE 30%" />

        <div className="bg-[#D9E0FE] flex text-blue-darkest p-4 rounded">
          <FontAwesomeIcon className="mr-2" icon={faCircleInfo} />

          <p className="mb-0">
            When you sign up, you'll pay the monthly membership of $67 instead of the regular price
            $97!
          </p>
        </div>
      </Section>

      <Section className="bg-white-secondary">
        <h2>Five Easy Steps Towards Secure Attachment: Your Path to Lasting Love</h2>

        <p>
          Go At Your Own Pace! Healing happens on your timeline. No one will push or rush you, and
          there’s no deadline for ‘getting it right.’ When you feel safe to take each step, that’s
          when real change becomes possible
        </p>

        <p className="mb-4">
          <strong>Here’s what healing could look like for you:</strong>
        </p>

        <Image
          src="/images/AttachmentQuizResults/steps-paper-airplane.svg"
          alt="The number 1 through 5 in a line followed by a paper airplane."
          className="w-full mb-6 max-w-[942px] mx-auto"
          width={311}
          height={75}
        />

        <div className="text-left mb-4 lg:grid lg:grid-cols-5 lg:gap-4">
          {baseConfig.healingSteps(attachmentStyleLong).map((step, i) => (
            <div
              key={`healing_step_${i}`}
              className="bg-white rounded-lg default-padding mb-4 lg:mb-0 lg:py-4">
              <div className="flex mb-4">
                <FontAwesomeIcon
                  className="text-white bg-primary py-1 px-2 rounded"
                  icon={step.icon}
                />

                <p className="text-primary ml-2 mb-0 font-bold">Step {i + 1}</p>
              </div>

              <p className="mb-0">{step.text}</p>
            </div>
          ))}
        </div>

        <ButtonCheckout label="START YOUR JOURNEY TODAY" />
      </Section>

      <section>
        <div className=" default-padding max-w-screen-lg mx-auto text-center">
          <h2>Over 30,000 People Have Healed—Now It's Your Turn</h2>

          <p>
            Thousands have successfully transformed their fearful relationship patterns into secure,
            loving connections. They now live without fear of abandonment, betrayal, or losing
            themselves.
          </p>

          <p>
            <em>You deserve relationships that feel safe, fulfilling, and deeply connected.</em>
          </p>
        </div>

        <CarouselTestimonialThinkific className="mb-4" />
      </section>

      <Section className="!pb-0 bg-[#EFEDF2]" classNameInner="!text-left lg:grid lg:grid-cols-2">
        <div>
          <h2 className="mb-0">Meet Thais Gibson, PhD:</h2>

          <h2>Your Mentor and Attachment Expert</h2>

          <p>
            Your healing begins with someone who’s been where you are—and knows exactly how to help
            you get where you want to be.
          </p>

          <p>{attachmentStyleConfig.thaisBio}</p>

          <List
            useMD={false}
            icon={faCircleCheck}
            classNameListItems="mb-4"
            listItems={[
              <>
                In our webinars, you’ll get live mentorship directly from Thais every week in the
                Q&A Webinars. Each session is built on{' '}
                <strong>respect for your individual boundaries</strong>, so you can finally trust
                that you’re growing without sacrificing who you are.
              </>,

              <>
                You’ll learn from someone who has helped{' '}
                <strong>over 30,000 people transform</strong> and understands exactly what it takes
                because she’s walked that path herself.
              </>,
            ]}
          />
        </div>

        <Image
          src="/images/AttachmentQuizResults/thais-couch-mobile.png"
          alt="Thais sitting on a couch smiling with her head slightly tilted to the side."
          className="w-full lg:hidden"
          width={343}
          height={321}
        />

        <Image
          src="/images/AttachmentQuizResults/thais-couch-desktop.png"
          alt="Thais sitting on a couch smiling with her head slightly tilted to the side."
          className="hidden lg:block lg:self-end"
          width={668}
          height={321}
        />
      </Section>

      <Section classNameInner="!text-left lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">
        <div>
          <h2>Your Next Step—Start Experiencing the Relationships You Truly Desire</h2>

          <p>
            You deserve a love that feels safe, fulfilling, and authentically yours. Begin your
            journey towards trust today.
          </p>

          <Image
            alt="A mockup of PDS courses on the PDs course players on 2 tablets and a laptop."
            className="mb-4 w-full max-w-[502px]"
            src="/images/AttachmentQuizResults/course-player-mockup-3.png"
            width={343}
            height={177}
          />
        </div>

        <div className="default-padding rounded-2xl shadow-centered-card relative overflow-hidden lg:py-10 lg:px-10">
          <p className="w-full text-center text-white absolute top-8 -right-[calc(50%-39px)] rotate-45 bg-[#30A114]">
            SAVE 30%
          </p>

          <p className="font-ssp lg:text-2xl">
            <strong>Your All-Access Pass includes:</strong>
          </p>

          <div className="flex items-center pl-10 mb-4 lg:mb-6">
            <p className="text-danger text-2xl font-bold font-ssp mb-0 lg:text-h2">
              <s>$97</s>
            </p>

            <p className="text-primary text-h1 font-bold font-ssp mx-2 mb-0 lg:text-6xl">$67</p>

            <p className="text-primary mb-0">/ per month</p>
          </div>

          <List
            classNameIcon="text-primary mb-6"
            icon={faCircleCheck}
            listItems={[
              `Unlimited access to 70+ transformative courses, including your starting point, the ${attachmentStyleLong} to Securely Attached program.`,
              'Weekly personalized mentorship sessions with Thais Gibson.',
              'A private, supportive community for safe emotional growth.',
            ]}
          />

          <ButtonCheckout label="Feel Safe In Love–Start Healing Today" />
        </div>
      </Section>

      <Faq
        className="lg:grid lg:grid-cols-2 lg:max-w-screen-xl lg:gap-6"
        classNameHeading="lg:col-span-2"
        faq={baseConfig.faqs}
      />
    </>
  )
}
