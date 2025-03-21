// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { List } from '@/components/List'
import { Section } from '@/components/Section'
import { SpinningWheel } from '@/components/SpinningWheel'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// config
import { SPIN_THE_WHEEL_CONFIG as CONFIG } from './config'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'

const trustbarSlides = [
  'mel-robbins-logo.png',
  'psychology-today-logo.png',
  'new-york-post-logo.png',
  'ceo-weekly-logo.png',
  'yahoo-logo.png',
]

export default function SpinTheWheelPage() {
  return (
    <Page page_name="Spin The Wheel">
      <Section
        className="bg-gradient-to-b from-blue-lightest-50 to-primary-light"
        classNameInner="flex flex-col items-center">
        <Image
          alt="PDS logo"
          src="/images/pds-logo-stacked-right-primary.png"
          width={200}
          height={73}
        />

        <h1 className="mt-8 mb-4">Spin &amp; Win. No Risks. Only Rewards.</h1>

        <p className="mb-16">
          Spin Now for a Guaranteed Offer on the All-Access Pass. Unlock expert guidance, deep
          healing, and a secure love life.
        </p>
      </Section>

      <Section className="!mt-0" classNameInner="relative">
        <SpinningWheel />

        <div className="pt-96 grid grid-cols-1 gap-8 text-left lg:grid-cols-2">
          <div className="pt-16">
            <h2 className="mb-4">
              Your Exclusive Membership That Gives You Access to The Personal Development School — A
              Complete Platform for Healing
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

          <div className="pt-16">
            <Image
              alt="Courses mockup"
              src={`/images/SpinTheWheel/pds-courses-phone-mockup.png`}
              width={601}
              height={634}
            />
          </div>
        </div>
      </Section>

      <Section classNameInner="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {CONFIG.PERKS.map((perk, idx) => (
          <div key={`perk_${idx}`} className={`flex text-left rounded-2xl bg-[${perk.bgColor}]`}>
            <div className="p-4">
              <p className="mb-2">
                <strong>{perk.title}</strong>
              </p>

              <p>{perk.copy}</p>
            </div>

            <div className="w-full max-w-24 lg:max-w-36">
              <Image
                className="h-full"
                alt="A happy couple"
                src={`/images/SpinTheWheel/${perk.image}`}
                width={150}
                height={150}
              />
            </div>
          </div>
        ))}
      </Section>

      <Section>
        <h2 className="mb-4">Why Choose The Personal Development School?</h2>

        <p className="tracking-33 mb-4">
          <strong>OUR SCHOOL GIVES YOU SOMETHING YOU'VE NEVER EXPERIENCED BEFORE</strong>
        </p>

        <p className="mb-8">
          At The Personal Development School, we don’t just teach relationship advice — we give you
          the revolutionary tools to rewrite the subconscious patterns that keep you stuck in
          painful cycles so you can finally experience the love, security, and confidence you
          deserve.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {CONFIG.CHOOSE_PDS.map((bullet, idx) => (
            <div
              key={`bullet_${idx}`}
              className="flex rounded-2xl text-left bg-white-secondary p-6">
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

        <div className="lg:!w-60">
          <Image
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
          alt="A man and woman smiling and sharing a computer on the couch. They are sitting next to a dog and working together on their PC."
          className="absolute h-full aspect-[3/2] w-auto object-cover top-0 left-0 z-5 md:hidden"
          src="/images/SpinTheWheel/offer-bg.png"
          width={375}
          height={250}
        />

        <Image
          alt="A man and woman smiling and sharing a computer on the couch. They are sitting next to a dog and working together on their PC."
          className="absolute h-full aspect-[3.21/1] w-auto object-cover top-0 left-0 z-5 hidden md:block 2xl:w-full 2xl:h-auto"
          src="/images/SpinTheWheel/offer-bg-desktop.png"
          width={1024}
          height={319}
        />

        <div className="bg-white relative shadow-xl z-10 p-6 rounded-20 xs:p-10">
          <h2 className="mb-4">One Spin. Guaranteed Win. Unlimited Possibilities.</h2>

          <p className="mb-4">
            You get one spin, and you’re guaranteed to unlock something that can help you transform
            your relationships, confidence, and self-growth!
          </p>

          <ButtonScroll label="SPIN & WIN" target="spin-wheel" />
        </div>
      </Section>
    </Page>
  )
}
