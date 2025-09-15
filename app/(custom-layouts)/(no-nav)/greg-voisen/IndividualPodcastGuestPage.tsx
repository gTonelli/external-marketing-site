// core
import Image from 'next/image'
// components
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { Section } from '@/components/Section'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import {
  faCcAmex,
  faCcDiscover,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from '@awesome.me/kit-545b942488/icons/classic/brands'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/light'
// config
import { TPodcastGuestPricing } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// style
import './style.css'

const trustbarSlides = [
  'mel-robbins-logo.png',
  'psychology-today-logo.png',
  'new-york-post-logo.png',
  'ceo-weekly-logo.png',
  'yahoo-logo.png',
]

interface IIndividualPodcastGuestPageProps {
  config: TPodcastGuestPricing
  checkoutUrl: string
}

export const IndividualPodcastGuestPage = ({
  config,
  checkoutUrl,
}: IIndividualPodcastGuestPageProps) => {
  return (
    <>
      <Section
        className="bg-hero w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-hero-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-7">
          <h1 className="mb-4">
            Unlock Access to the Ultimate Platform for Improving Your Relationships
          </h1>

          <p className="mb-8">
            The best lives and relationships don’t just happen; we make them happen. Discover the
            SECRET to truly overcoming your fears, healing from painful pasts, and creating
            powerful, loving relationships while finding and living as your authentic self. Make it
            happen with scientific-based theory and results-proven outcomes – only at The Personal
            Development School.
          </p>

          <ButtonCheckout label="CREATE YOUR DREAM LIFE NOW" href={checkoutUrl} />
        </div>
      </Section>

      <Section className="!py-0">
        <TrustbarSlider
          brandLogosList={trustbarSlides}
          className="items-stretch !pb-0"
          classNameImage="!mx-0"
          classNameSlides="flex flex-col flex-1 items-center justify-center"
        />
      </Section>

      <Section classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">The Game-Changing Secret to Thriving Relationships</h2>

          <p className="mb-4">
            Your attachment style is the most powerful and influential driving force behind your
            beliefs and behaviors and the ultimate predictor of success in your relationships.
          </p>

          <p className="mb-4">
            That's because it's an accumulation of all your experiences and interactions during
            childhood that set up a subconscious set of rules that dictate everything as an adult:
            your relationships, your patterns and beliefs, and how you perceive the world.
          </p>

          <p>
            There are four attachment styles{' '}
            <i>
              (based on the Attachment Theory developed by psychologists John Bowlby and Mary
              Ainsworth)
            </i>
            , all with different characteristics, each impacting people in different ways:
          </p>
        </div>

        <div className="text-left lg:mt-8">
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Anxious Preoccupied</strong> people exhibit fears of abandonment and become
              clingy.
            </li>

            <li>
              <strong>Dismissive Avoidants</strong> value independence and are known to withdraw.
            </li>

            <li>
              <strong>Fearful Avoidants</strong> tend to &quot;flip-flop&quot; about relationships
              due to fears of betrayal.
            </li>

            <li>
              <strong>Securely Attached</strong> people are confident and value communication but
              end up in out-of-balanced relationships or have a secondary &quot;hidden&quot;
              attachment style.
            </li>
          </ul>

          <p className="mb-4">
            Regardless of the attachment style, they're so powerful that they can affect your brain
            on the deepest level – <strong>your subconscious mind</strong>.
          </p>

          <p>
            And it was believed that your attachment style was with you for life. You couldn't
            change it. <strong>Until we came along</strong>.
          </p>
        </div>
      </Section>

      <Section classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">The Leading Platform for Relationship Transformation</h2>

          <p className="mb-4">
            If you've tried traditional methods and modalities but still haven't experienced any
            changes in your life, it's because you're not accessing the correct part of your brain:
            <strong> the subconscious mind</strong>.
          </p>

          <p className="mb-4">
            It's the place that stores your attachment style and is directly responsible for 95% of
            what keeps you stuck in your revolving patterns and beliefs.
          </p>

          <p className="mb-4 font-bold">
            That's why our innovative, proprietary method is revolutionary; it’s designed to work
            directly with your subconscious mind – the essential piece of the puzzle that drives
            lasting transformation.
          </p>

          <p className="mb-4">
            It’s the cutting-edge relationship blueprint that allows you to uncover the core wounds
            that impact your beliefs about love, the boundaries you’re putting up or down, and the
            communication challenges that roadblock your relationships from growing.
          </p>

          <p className="mb-4">
            And it’s our SECRET trailblazing method that is disrupting the relationship coaching
            industry because it’s simple, fast, and effective!
          </p>

          <ButtonCheckout label="START YOUR TRANSFORMATION" href={checkoutUrl} />
        </div>

        <div>
          <Image
            className="rounded-3xl h-full"
            alt="A lady watching Thais on a PC"
            src="/images/IndividualGuestPodcast/lady-watching-thais-on-pc.jpg"
            width={573}
            height={586}
          />
        </div>
      </Section>

      <Section classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <Image
            className="rounded-3xl h-full"
            alt="Watching PDS Course on an IPad"
            src="/images/IndividualGuestPodcast/watching-course-ipad-mockup.jpg"
            width={486}
            height={620}
          />
        </div>

        <div className="order-1 text-left">
          <h2 className="mb-4">
            Join Us If You're Ready for Powerful Ideas + World-Class Expertise
          </h2>

          <p className="mb-4">
            Everyone wants to be their best selves and have lasting and loving relationships.
          </p>

          <p className="mb-4">
            So, they try the traditional modalities and methods. There’s a small shift, but over
            time, things return to that &quot;stuck&quot; feeling.
          </p>

          <p className="mb-4">
            <strong>
              The good news is that we have the answers you're looking for – and made it easy.
            </strong>
          </p>

          <p className="mb-4">
            We take an innovative model, focusing on combining our revolutionary method with
            science, compassion, and community to deliver real-life outcomes that truly stay with
            you for life.
          </p>

          <p className="mb-4">
            We’re not just here for the good times (we love them too, don’t worry). We’re here for
            every moment that you need that pick-me-up, that insightful tool, or that genuine,
            supportive connection.
          </p>

          <p className="mb-4">
            Our platform is an accessible, efficient model that fuels your relationships and life.
            It provides practical tools and insightful guidance to overcome challenges and
            accomplish goals, regardless of what life throws at you.
          </p>

          <p className="mb-4">
            This is the school where you can make incredible changes in your life and relationships,
            and the best part is that you can do it on your own terms.
          </p>

          <ButtonCheckout label="UNLOCK YOUR POTENTIAL" href={checkoutUrl} />
        </div>
      </Section>

      <Section classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">Upgrade Your Life With Inspiring & Accessible Content</h2>

          <p className="mb-4">
            Anyone seeking personal growth or to find and empower connective and loving
            relationships now has an opportunity that others have longed for: our{' '}
            <strong>All-Access Pass</strong>.
          </p>

          <p className="mb-4">
            It’s our all-inclusive platform that immerses you in our innovative healing model.
            You’ll learn about what made you who you are today, why you show up to life and
            relationships the way you do, and how to break your old self-sabotaging patterns and
            materialize new inspiring habits…
          </p>

          <p className="mb-4">
            All with our innovative trailblazing method to unlock and reprogram your subconscious
            mind.
          </p>

          <p className="mb-4">
            Our platform features programs, courses, webinars, study groups, and more, all tailored
            to address the characteristics, behaviors, and challenges associated with your unique
            attachment style. You also have access to our collaborative and inspiring community that
            fosters growth and is a key driver in our members’ transformations.
          </p>

          <p className="mb-4">
            Most importantly, we’ve made the All-Access Pass affordable and accessible to anyone,
            anywhere.
          </p>

          <p className="mb-4">
            Now, you can finally become the best version of yourself and build the best
            relationships of your life – on your terms.
          </p>

          <ButtonCheckout label="BUILD YOUR DREAM LIFE" href={checkoutUrl} />
        </div>

        <div className="flex justify-center items-center">
          <Image
            className="rounded-3xl"
            alt="Watch PDS Content on any device"
            src="/images/SimplifiedFAPage/special-bonus-mockup.jpg"
            width={581}
            height={307}
          />
        </div>
      </Section>

      <Section>
        <div className="w-full grid grid-cols-1 gap-4 bg-gradient-to-b from-blue-lightest to-primary-light rounded-20 p-4 lg:grid-cols-2 lg:p-10">
          <div className="text-left">
            <h2 className="mb-4">{config.BANNER.header}</h2>

            <p>{config.BANNER.copy}</p>
          </div>

          <div className="flex flex-col justify-center bg-white rounded-20 shadow-md p-4">
            <p className="text-3xl mb-8">
              <span className="line-through">{config.BANNER.pricing.originalPrice}</span>

              <span className="font-bold mx-4">{config.BANNER.pricing.newPrice}</span>

              <span className="!text-base">{config.BANNER.pricing.timePeriod}</span>
            </p>

            <ButtonCheckout
              className="mb-8"
              label={config.BANNER.pricing.ctaLabel}
              href={checkoutUrl}
            />

            <div className="w-full flex justify-center">
              <FontAwesomeIcon icon={faCcAmex} size="2x" className="mr-2" />

              <FontAwesomeIcon icon={faCcDiscover} size="2x" className="mr-2" />

              <FontAwesomeIcon icon={faCcMastercard} size="2x" className="mr-2" />

              <FontAwesomeIcon icon={faCcPaypal} size="2x" className="mr-2" />

              <FontAwesomeIcon icon={faCcVisa} size="2x" className="mr-2" />
            </div>

            <p>{config.BANNER.pricing.subtext}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 border-b border-black pb-4 mt-16">
          {config.TABLE.columns.map((colHeader, idx) => (
            <div key={idx} className={`${!idx && 'text-left'} font-bold`}>
              {colHeader}
            </div>
          ))}

          {config.TABLE.items.map((item) => (
            <>
              <div>
                <p className="text-left">{item.label}</p>
              </div>

              <div>
                <p>{item.cost}</p>
              </div>

              <div>
                <FontAwesomeIcon icon={faCheckCircle} className="!text-green-check" size="2x" />
              </div>
            </>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 font-ssp mt-4">
          <p className="text-left text-3xl font-bold">Total Cost</p>

          <p>
            <span className="block text-3xl">
              <strong>{config.TABLE.total.totalCost}</strong>
            </span>
          </p>

          <p>
            <span className="block text-3xl text-green-check">
              <strong>{config.TABLE.total.discountedCost}</strong>
            </span>
          </p>
        </div>
      </Section>

      <Section classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">Hi, I'm Thais Gibson!</h2>

          <p className="mb-4">
            I'm the founder of The Personal Development School, a best-selling author, counselor,
            and leader in the personal development field.
          </p>

          <p className="mb-4">
            My journey here started the same as most people: I was letting my self-sabotaging
            patterns ruin my life and relationships. I wanted to heal and experience my life and
            relationships in a positive and empowering manner.
          </p>

          <p className="mb-4">So, I embarked on a voyage of relentless research and education.</p>

          <p className="mb-4">
            And it led me to combine my Master's Degree, 13 different psychology certifications,
            scientific research, personal experience, and a compassionate approach to create
            Integrated Attachment Theory™.
          </p>

          <p className="mb-4">
            It’s the results-backed method that empowers people to change their attachment styles
            through the unique and proprietary process of reprogramming the subconscious mind.
          </p>

          <p className="mb-4">
            The success of this groundbreaking method allowed me to create The Personal Development
            School, so anyone, anywhere, 24/7, can use Integrated Attachment Theory™.
          </p>

          <p className="mb-4">
            With over 40,000 people worldwide experiencing profound transformations, my cutting-edge
            method has been recognized by mainstream media outlets, such as Psychology Today, The
            New York Post, Yahoo! News, and CEO Weekly, and on many popular podcasts, including The
            Mel Robbins Podcast.
          </p>

          <p className="mb-4">
            But this isn’t the end. It’s just another step in the movement to help people worldwide
            on their journey to healthy, happy relationships while embracing their best selves.
          </p>

          <p className="mb-4">We hope you join us.</p>

          <ButtonCheckout label="BUILD YOUR DREAM LIFE" href={checkoutUrl} />
        </div>

        <div>
          <Image
            className="rounded-3xl h-full"
            alt="Thais Gibson Portrait"
            src="/images/IndividualGuestPodcast/thais-portrait-long.jpg"
            width={482}
            height={822}
          />
        </div>
      </Section>

      <Section className="max-w-full !py-0 my-8" classNameInner="!max-w-full !m-0 !p-0">
        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>
    </>
  )
}
