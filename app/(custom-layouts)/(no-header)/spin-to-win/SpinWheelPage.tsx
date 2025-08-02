// core
import Image from 'next/image'
// components
import { List } from '@/components/List'
import { Section } from '@/components/Section'
import { SpinningWheel } from '@/components/SpinningWheel/SpinningWheel'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { SpinWheelTimer } from './SpinWheelTimer'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faSparkles } from '@awesome.me/kit-545b942488/icons/classic/solid'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// config
import { SPIN_THE_WHEEL_CONFIG as CONFIG } from './config'

const trustbarSlides = [
  'mel-robbins-logo.png',
  'psychology-today-logo.png',
  'new-york-post-logo.png',
  'ceo-weekly-logo.png',
  'yahoo-logo.png',
]

interface ISpinWheelPageProps {
  pageVariant: 'email' | 'osm'
  firstName?: string
  email?: string
}

export default function SpinWheelPage({ pageVariant, email, firstName }: ISpinWheelPageProps) {
  return (
    <>
      <Section
        className="bg-gradient-to-b from-blue-lightest-50 to-primary-light"
        classNameInner="!max-w-4xl flex flex-col items-center mx-auto">
        <Image
          alt="PDS logo"
          src="/images/pds-logo-stacked-right-primary.png"
          width={200}
          height={73}
        />

        <h1 className="mt-8 mb-4">Spin and Claim Your Guaranteed Prize. No Risks! </h1>

        <p className="mb-4">
          <strong>
            Unlock the tools to build a thriving relationship! Spin and win a GUARANTEED offer on
            our bestsellers in seconds!
          </strong>
        </p>

        <p className="mb-8">
          Spin to Win is back! It’s bigger, better, and personally curated by me, Thais Gibson!
          Every spin wins, guaranteed, unlocking handpicked tools designed specifically for
          attachment style healing, emotional fulfillment, and secure, lasting love.
        </p>

        <div className="mb-16">
          <p>
            <strong>THIS OFFER ENDS SOON! SPIN NOW BEFORE IT'S GONE!</strong>
          </p>

          <SpinWheelTimer />
        </div>
      </Section>

      <Section>
        <SpinningWheel pageVariant={pageVariant} firstName={firstName} email={email} />
      </Section>

      <Section classNameInner="!max-w-4xl flex flex-col gap-4 mx-auto md:flex-row">
        <div className="min-w-72">
          <Image
            src="/images/SpinTheWheel/thais-writing-no-bg.png"
            alt="An image of Thais Gibson writing in a book"
            width={300}
            height={300}
            sizes="100vw"
            quality={100}
          />
        </div>

        <div className="text-left">
          <h2 className="mb-4">Win Prizes from Thais Herself!</h2>

          {[
            <>
              <em>
                I handpicked every prize on this wheel because, time and again, I've seen these
                tools genuinely help people create real, lasting changes in their lives. After
                guiding over 40,000 students toward calmer nervous systems, happier relationships,
                and secure, fulfilling love, I chose resources I deeply trust and believe in.
              </em>
            </>,
            <>
              <em>Whatever prize you land on today, I’m confident you’ll see meaningful growth.</em>
            </>,
            <>
              <strong>Warmly,</strong>
            </>,
            <>
              <strong>
                <em>Thais Gibson</em>
              </strong>
            </>,
          ].map((copy, idx) => (
            <p key={`thais_letter_copy_${idx}`} className="mt-4 last:!mt-0">
              {copy}
            </p>
          ))}
        </div>
      </Section>

      <Section
        className="bg-white-secondary"
        classNameInner="!max-w-4xl flex flex-col items-center mx-auto">
        <Image
          className="mb-4"
          alt="Limited Offer Illustration"
          src="/images/limited-offer-vector.png"
          width={150}
          height={90}
          sizes="100vw"
          quality={100}
        />

        <h2 className="mb-4">
          This Is Your Chance to Win My Top Tools to Heal Your Attachment Style
        </h2>

        <p>
          <strong>
            So, What Does the All-Access Pass at The Personal Development School Give You?
          </strong>
        </p>
      </Section>

      <Section classNameInner="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">
            It’s Your Exclusive Membership to The Personal Development School & A Complete Platform
            for Healing
          </h2>

          <p className="tracking-33 mb-4">
            <strong>
              NO MORE GUESSWORK. NO MORE PAIN. JUST A REVOLUTIONARY APPROACH, EXPERT GUIDANCE &
              REAL, LIFE-CHANGING RESULTS.
            </strong>
          </p>

          {CONFIG.MEMBERSHIP.map((copy, idx) => (
            <p key={`membership_${idx}`} className="mb-4">
              {copy}
            </p>
          ))}
        </div>

        <div>
          <Image
            priority
            alt="Courses mockup"
            src={`/images/SpinTheWheel/pds-courses-phone-mockup.png`}
            width={588}
            height={588}
            sizes="100vw"
            quality={100}
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
          {CONFIG.PERKS.map((perk, idx) => (
            <div key={`perk_${idx}`} className={`flex text-left rounded-2xl ${perk.bgColor}`}>
              <div className="p-2 lg:p-4">
                <p className="mb-2">
                  <strong>{perk.title}</strong>
                </p>

                <p>{perk.copy}</p>
              </div>

              <div className="w-full min-w-28 max-w-28 lg:max-w-36">
                <Image
                  className="w-full h-full"
                  alt="A happy couple"
                  src={`/images/SpinTheWheel/${perk.image}`}
                  width={150}
                  height={150}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex bg-primary-light rounded-lg p-4 my-4 lg:my-8">
          <div className="!w-6 mr-2">
            <FontAwesomeIcon icon={faSparkles} className="!text-primary" />
          </div>

          <div className="text-left">
            <p>
              <strong>
                Ask Yourself: Can I afford not to take action today? What would my life look like if
                I continue on this same path? What happens if I don’t spin the wheel?
              </strong>
            </p>
          </div>
        </div>

        <ButtonScroll target="#spin-wheel" label="SPIN & WIN NOW!" />
      </Section>

      <Section>
        <h2 className="mb-4">Why Choose The Personal Development School?</h2>

        <p className="tracking-33 mb-4">
          <strong>OUR SCHOOL GIVES YOU SOMETHING YOU'VE NEVER EXPERIENCED BEFORE</strong>
        </p>

        <p className="mb-8">
          At The Personal Development School, we don’t just teach relationship advice—we give you
          the revolutionary tools to rewrite the subconscious patterns that keep you stuck in
          painful cycles so you can finally experience the love, security, and confidence you
          deserve.
        </p>

        <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
          {CONFIG.CHOOSE_PDS.map((bullet, idx) => (
            <div
              key={`bullet_${idx}`}
              className="flex rounded-2xl text-left bg-white-secondary p-2 lg:p-6">
              <div className="!w-6 mr-2">
                <FontAwesomeIcon icon={bullet.icon} className="!text-primary" />
              </div>

              <div>
                <p className="mb-2">
                  <strong>{bullet.title}</strong>
                </p>

                <p>{bullet.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        className="max-w-full w-full bg-primary !mx-0"
        classNameInner="flex flex-col gap-8 text-white lg:flex-row">
        <div className="text-left">
          <h2 className="mb-4">The Personal Development School Promise</h2>

          <p className="tracking-33 mb-8">
            <strong>NO RISK — JUST THE LIFE-CHANGING RESULTS YOU'RE LOOKING FOR</strong>
          </p>

          <List
            icon={faCheckCircle}
            classNameListItems="mb-2"
            classNameIcon="!mr-2 !text-white"
            listItems={[
              'We offer a hassle-free money-back guarantee.',
              'If you don’t feel a shift within 7 days, you can get a full refund.',
              'No risks at all—just the life-changing results you’ve been waiting for.',
            ]}
          />
        </div>

        <div className="flex items-center justify-center lg:!w-60">
          <Image
            className="w-64 h-64 lg:h-full"
            alt="7 day money back guarantee badge"
            src="/images/money-back-7-day.png"
            width={335}
            height={335}
          />
        </div>
      </Section>

      <Section className="shadow-lg">
        <p className="font-bold tracking-33">OUR SCHOOL HAS BEEN FEATURED ON</p>

        <TrustbarSlider
          brandLogosList={trustbarSlides}
          className="items-stretch !pb-0"
          classNameImage="!mx-0"
          classNameSlides="flex flex-col flex-1 items-center justify-center"
        />
      </Section>

      <Section className="max-w-full p-4 my-16 lg:!p-0" classNameInner="!max-w-full !m-0 !p-0">
        <h2 className="mb-4">What Our Students are Saying</h2>

        <p className="mb-8">
          The Personal Development School has helped thousands of people make inspiring life
          transformations.
        </p>

        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>

      <Section
        className="overflow-hidden relative"
        classNameInner="max-w-none pb-10 pt-72 grid-cols-2 gap-4 md:pt-10 md:grid md:max-w-screen-lg">
        <Image
          alt="A man and a woman dancing in their home"
          className="absolute h-full aspect-[3/2] w-auto object-cover [object-position:80%_100%] top-0 left-0 z-5 md:hidden"
          src="/images/SpinTheWheel/couple-dancing.webp"
          width={375}
          height={250}
          sizes="100vw"
          quality={100}
        />

        <Image
          alt="A man and a woman dancing in their home"
          className="absolute h-full aspect-[3.21/1] w-auto object-cover [object-position:80%_100%] top-0 left-0 z-5 hidden md:block 2xl:w-full 2xl:h-auto"
          src="/images/SpinTheWheel/couple-dancing-desktop.webp"
          width={1024}
          height={319}
          sizes="100vw"
          quality={100}
        />

        <div className="bg-white relative shadow-xl z-10 p-6 rounded-20 xs:p-10">
          <h2 className="mb-4">Spin and Claim Your Guaranteed Prize. No Risks!</h2>

          <p className="mb-4">
            This is your chance to win my bestselling tools to build a thriving relationship{' '}
            <strong>totally risk-free</strong>! Spin and win a GUARANTEED offer that can help
            transform your relationships.
          </p>

          <ButtonScroll target="#spin-wheel" label="SPIN & WIN!" />
        </div>
      </Section>
    </>
  )
}
