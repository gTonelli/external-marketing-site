// components
import { Page } from '@/components/Page'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { List } from '@/components/List'
import { Section } from '@/components/Section'
import { IATPriceCardSection } from './IATPriceCardSection'
import Image from 'next/image'
import { TrustbarSlider } from '../Trustbar/variants/TrustbarSlider'
import { IATBanner } from '@/components/IAT/IATBanner'
import { KlarnaPricing } from './KlarnaPricing'
import { IATEBookModal } from './IATEBookModal'
import { IATCalendlyBookingButton } from './IATCalendlyBookingButton'
import { IATVideo } from './IATVideo'
import { IATCurriculumCard } from './IATCurriculumCard'
import { IATTestimonialSection } from './IATTestimonialSection'
import { IATRegistrationForm } from './IATRegistrationForm'
import { FaqSecondary } from '../Faq/variants/FaqSecondary'
import { IATPurchaseButton } from './IATPurchaseButton'
// config
import { IAT_COPY as IAT } from '../../app/(default-layout)/iat/config'
// libraries
import { faCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faBook, faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// modules
import { Pages } from '@/modules/Mixpanel'
// styles
import 'swiper/css'
import 'swiper/css/navigation'

const TRUSTBAR = [
  `psychology-today-logo.png`,
  `forbes-logo.png`,
  `amazon-logo.png`,
  `superhuman-academy-logo.png`,
  `indigo-logo.png`,
  `success-logo.png`,
  `barnes-noble-logo.png`,
  `counseling-today-logo.png`,
  `marketwatch-logo.svg`,
  `yahoo-news-logo.png`,
]

export const IATPage = ({
  page_name,
  pageUrl = 'other',
  showLeadGenForm = false,
  showKlarna = false,
}: {
  page_name: Pages
  pageUrl?: 'other' | 'ebook'
  showLeadGenForm?: boolean
  showKlarna?: boolean
}) => {
  return (
    <Page className="w-full" page_name={page_name}>
      {/* TOP HERO SECTION */}
      <IATEBookModal pageUrl={pageUrl} />

      <Section className="w-full relative z-10 bg-blue-lightest 3xl:pb-0">
        <IATBanner page={pageUrl} />
      </Section>

      <div className="relative">
        <Image
          alt="Blue Curve Background on Mobile"
          className="w-full md:hidden"
          src="/images/IATPage/iat-hero-bg.png"
          width={375}
          height={25}
        />

        <Image
          alt="Blue Curve Background on Desktop"
          className="w-full hidden md:block"
          src="/images/IATPage/iat-hero-bg-desktop.png"
          width={1440}
          height={90}
          sizes="100vw"
        />
      </div>

      {/* VIDEO SECTION */}
      <Section className="pt-9 lg:pt-16">
        {pageUrl === 'ebook' && (
          <div className="max-w-3xl text-center mx-auto">
            <h2 className="mb-4">Unlock Your Potential With a Free Consultation</h2>

            <p className="mb-4">
              Are you excited about your career as a Certified IAT™ Coach? Discover your potential,
              unlock the key benefits of the IAT™ Program, get all your questions answered,{' '}
              <strong>and claim your special discount</strong> by booking a FREE call with our
              coaching specialist!
            </p>

            <IATCalendlyBookingButton label="BOOK YOUR FREE CALL NOW" />

            <h3 className="mb-4">Watch Below To Get The Breakdown Of Your New IAT™ Career</h3>
          </div>
        )}

        <IATVideo />

        <IATPurchaseButton />
      </Section>

      {showLeadGenForm && (
        <Section classNameInner="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8 !text-left">
          <div className="lg:order-2">
            <h2 className="mb-4">
              Ignite Your Entrepreneurial Passion: Get Your FREE E-Book to Kickstart Your
              Relationship Coaching Business!
            </h2>

            <p>
              Take the first step towards success today by joining our email community. Receive
              exclusive offers, expert tips, and a complimentary copy of the Relationship Coaching
              eBook by renowned author Thais Gibson - don't miss out on this valuable resource!
            </p>

            <IATRegistrationForm />
          </div>

          <Image
            alt="A mockup of the ebook 'Transform Your Coaching Practice"
            className="w-full max-w-xl"
            src="/images/IATPage/iat-ebook-mockup.png"
            width={393}
            height={450}
            quality={100}
          />
        </Section>
      )}

      {/* BECOME A RELATIONSHIP COACH SECTION */}
      <Section className="pt-0 lg:py-0" classNameInner="max-w-3xl">
        <div>
          <h2 className="font-bold text-black mb-6 text-[48px] leading-[50px]">
            {IAT.relationship_section.heading}
          </h2>

          <div className="text-left lg:grid lg:grid-cols-2 lg:gap-5">
            <div>
              {IAT.relationship_section.copy_left.map((copy, i) => (
                <p key={`relationship_copy_left_${i}`} className="mb-4">
                  {copy}
                </p>
              ))}
            </div>

            <div>
              {IAT.relationship_section.copy_right.map((copy, i) => (
                <p key={`relationship_copy_right_${i}`} className="mb-4">
                  {copy}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* INITIAL 4 WEEKS SECTION */}
      <div className="relative">
        <Image
          alt="Pink Wave Background on Mobile"
          className="w-full lg:hidden"
          src="/images/IATPage/initial-weeks-bg.png"
          width={375}
          height={93}
          quality={100}
        />

        <Image
          alt="Pink Wave Background on Desktop"
          className="w-full hidden lg:block"
          src="/images/IATPage/initial-weeks-bg-desktop.png"
          width={1440}
          height={158}
          sizes="100vw"
          quality={100}
        />
      </div>

      <Section className="bg-primary-light-50 pt-0 pb-12 lg:pb-[120px]">
        <h3 className="max-w-3xl font-bold mx-auto">{IAT.initial_weeks.heading}</h3>

        <div className="flex flex-col mt-6 space-y-8 lg:items-start lg:flex-row lg:mt-9 lg:space-y-0 lg:space-x-14">
          <Image
            alt="A Girl Using a Laptop Mockup"
            className="w-full"
            src="/images/IATPage/initial-weeks-mockup.png"
            width={351}
            height={526}
            quality={100}
          />

          <div className="text-center lg:text-left">
            <p className="font-bold">{IAT.initial_weeks.subheading}</p>

            <List
              className="mt-5 text-left"
              classNameIcon="!text-black mt-3"
              classNameListItems="mt-5"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.initial_weeks.content}
            />

            <IATPurchaseButton />
          </div>
        </div>
      </Section>

      {/* TRAINING PROGRAM TOOLS SECTION */}
      <Section className="pt-11 pb-16 lg:py-12" classNameInner="lg:max-w-2xl">
        {IAT.trainingProgramTools.map((copy, i) => (
          <p key={`training_program_tools_text_${i}`} className="font-bold text-[18px] mb-4">
            {copy}
          </p>
        ))}

        <IATPurchaseButton label="SIGN UP TODAY" />
      </Section>

      {/* TRUST BAR SECTION */}
      <Section className="w-full bg-grey-10 py-6 lg:py-8">
        <p className="font-bold tracking-0.325 text-center lg:text-lg">
          OUR PRODUCTS HAVE BEEN FEATURED IN
        </p>

        <TrustbarSlider brandLogosList={TRUSTBAR} />
      </Section>

      {/* TRAINING SECTION */}
      <Section className="lg:mt-3" classNameInner="text-center lg:max-w-5xl">
        <h2 className="text-black !text-[26px]">Where and When is the Training?</h2>

        <div className="mb-8 lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center lg:mt-11">
          <div className="text-left lg:col-span-7">
            {IAT.training.copy.map((copy, i) => (
              <p key={`training_copy_${i}`} className="my-8 lg:my-6">
                {copy}
              </p>
            ))}
          </div>

          <Image
            alt="IAT Training at PDS Mockup"
            className="lg:col-start-8 lg:col-span-5 lg:pl-4"
            src="/images/IATPage/iat-training-mockup.jpg"
            width={351}
            height={220}
          />
        </div>

        <Image
          alt="Live Icon"
          className="hidden mx-auto lg:block"
          src="/images/IATPage/live-icon.png"
          width={97}
          height={35}
        />

        <h3 className="text-black !text-[26px] mt-4">Live Training Format</h3>

        <div className="flex flex-col text-left mt-11 lg:flex-row space-y-10 lg:space-y-0 lg:space-x-[60px] lg:mt-13">
          <div>
            <p className="font-effra font-bold text-purple-dark tracking-0.325 mb-4">
              PREREQUISITE WEEK 1-4
            </p>

            <List
              className="mb-4"
              classNameIcon="!text-green-check"
              classNameListItems="font-bold"
              icon={faCircleCheck}
              listItems={IAT.training.live_training.prerequisite_week.heading}
            />

            {IAT.training.live_training.prerequisite_week.copy.map((copy, i) => (
              <p key={`live_training_prerequisite_copy_${i}`} className="mb-4">
                {copy}
              </p>
            ))}

            <p className="font-bold">Week One</p>

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.prerequisite_week.week1}
            />

            <p className="font-bold mt-6">Week Two</p>

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.prerequisite_week.week2}
            />

            <p className="font-bold mt-6">Week Three</p>

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.prerequisite_week.week3}
            />

            <p className="font-bold mt-6">Week Four</p>

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.prerequisite_week.week4}
            />
          </div>

          <div>
            <p className="font-effra font-bold text-purple-dark tracking-0.325 mb-4">
              INTENSIVE TRAINING WEEK 5-12
            </p>

            <List
              className="mb-4"
              classNameIcon="!text-green-check"
              classNameListItems="font-bold mt-2"
              icon={faCircleCheck}
              listItems={IAT.training.live_training.intensive_week.heading}
            />

            {IAT.training.live_training.intensive_week.copy.map((copy, i) => (
              <p key={`live_training_intensive_week_copy_${i}`} className="mb-4">
                {copy}
              </p>
            ))}

            <p className="font-bold">
              {IAT.training.live_training.intensive_week.features.heading}
            </p>

            <List
              className="mt-2"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.live_training.intensive_week.features.copy}
            />

            <p className="font-bold mt-6">
              {IAT.training.live_training.intensive_week.features.subheading}
            </p>
          </div>
        </div>

        <FontAwesomeIcon className="text-black mt-13" icon={faBook} size="3x" />

        <h3 className="text-black !text-[26px] mt-4">On-Demand Training Format</h3>

        <div className="flex flex-col text-left mt-11 lg:flex-row space-y-7 lg:space-y-0 lg:space-x-[60px] lg:mt-20">
          <div className="max-w-[498px]">
            {IAT.training.on_demand_training.left_section.map((copy, i) => (
              <p key={`on_demand_training_left_section_copy_${i}`} className="mb-4">
                {copy}
              </p>
            ))}
          </div>

          <div>
            <p className="font-bold">{IAT.training.on_demand_training.right_section.heading}</p>

            <List
              className="mt-6"
              classNameIcon="!text-black mt-2"
              classNameListItems="mt-1"
              icon={faCircle}
              iconSize="2xs"
              listItems={IAT.training.on_demand_training.right_section.course_material}
            />
          </div>
        </div>

        <div className="max-w-5xl text-center text-white bg-purple-dark rounded-3xl py-9 px-7 mt-9 lg:py-12">
          <h3 className="!text-[26px]">Complete Your Certification Exam</h3>

          <p className="mt-3">
            Whichever format you choose, you’ll be invited to complete your certification exam at
            the end of your 12 weeks.
          </p>
        </div>

        <IATPurchaseButton />
      </Section>

      <IATTestimonialSection />

      {/* WHO IS THE CERTIFACTION FOR SECTION */}
      <Section className="pt-14 pb-8 lg:pb-18" classNameInner="xs:px-7">
        <div className="flex flex-col text-left space-y-6 lg:flex-row lg:space-y-0 lg:space-x-14">
          <div className="max-w-[502px]">
            <h1 className="text-black">Who is this Certification for?</h1>

            <p className="mt-8 lg:mt-10">{IAT.certification.title} </p>

            <List
              className="mt-6"
              classNameIcon="!text-green-check"
              classNameListItems="font-bold mt-2"
              icon={faCircleCheck}
              listItems={IAT.certification.bullets}
            />

            <p className="mt-8 lg:mt-8">{IAT.certification.copy}</p>
          </div>

          <div>
            <Image
              alt="A Girl With A Notepad Mockup"
              className="w-full hidden lg:block lg:w-[466px]"
              src="/images/IATPage/certification-mockup.png"
              width={378}
              height={453}
            />
          </div>
        </div>

        <div className="mt-14 lg:grid lg:grid-cols-3 lg:gap-5 lg:mt-16">
          {IAT.certification.coaches.map((coach, index) => {
            return (
              <div key={`audience-${index}`} className="mt-9 lg:mt-0">
                <Image
                  alt={`IAT Coach - ${coach.title}`}
                  className="w-3/4 mx-auto max-w-64"
                  src={`/images/IATPage/iat-coaches-${index + 1}.png`}
                  width={256}
                  height={247}
                />

                <p className="text-purple-dark font-bold my-4 tracking-0.325 lg:my-6">
                  {coach.title}
                </p>

                <p>{coach.copy}</p>
              </div>
            )
          })}
        </div>

        <IATPurchaseButton label="SAVE MORE THAN 50% NOW" />
      </Section>

      {/* WHAT YOU'LL GET SECTION */}
      <Section
        className="bg-black-secondary text-white px-7 py-8 lg:py-14"
        classNameInner="!text-left">
        <div className="flex flex-col lg:space-x-14 lg:flex-row">
          <div className="max-w-[502px] mt-6">
            <h2 className="mb-10">What You'll Get</h2>

            {IAT.what_you_get.copy.map((copy, i) => (
              <p key={`what_you_get_copy_${i}`} className="mb-4">
                {copy}
              </p>
            ))}

            <Image
              alt="IAT Certification Mockup 1"
              className="mt-6 lg:w-full lg:mt-11"
              src="/images/IATPage/iat-learn-mockup.png"
              width={351}
              height={266}
            />
          </div>

          <div className="max-w-[502px]">
            {IAT.what_you_get.benefits.map((benefit, index) => (
              <div key={`benefit-${index}`}>
                <div className="flex flex-row mt-10 lg:mt-6">
                  <FontAwesomeIcon className="text-teal my-auto" icon={benefit.icon} size="lg" />

                  <p className="font-bold ml-5 tracking-0.325">{benefit.title}</p>
                </div>

                <p className="font-normal mt-2">{benefit.copy}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center lg:mt-28">
          <h2>Is this certification for me?</h2>

          <div className="flex flex-col mt-8 lg:mt-13 lg:flex-row lg:space-x-14">
            <div className="max-w-[502px] text-center lg:text-left">
              <Image
                alt="IAT Benefits Mockup Mobile"
                className="w-full lg:hidden"
                src="/images/IATPage/benefits-mockup.png"
                width={351}
                height={452}
              />

              <p className="font-bold text-left mt-10 tracking-0.325 lg:mt-0">IT'S FOR EVERYONE</p>

              <p className="text-left mt-2">{IAT.what_you_get.secondaryCopy}</p>

              <IATPurchaseButton label="SIGN UP TODAY" />
            </div>

            <div className="w-full max-w-[502px]">
              <Image
                alt="IAT Benefits Mockup Desktop"
                className="w-full hidden lg:block"
                src="/images/IATPage/benefits-mockup-desktop.png"
                width={434}
                height={386}
              />
            </div>
          </div>
        </div>
      </Section>

      <div>
        <Image
          alt="Black Wave Background on Mobile"
          className="w-full -mt-4 md:hidden"
          src="/images/IATPage/benefits-bg.png"
          width={375}
          height={143}
        />

        <Image
          alt="Black Wave Background on Desktop"
          className="w-full hidden md:block"
          src="/images/IATPage/benefits-bg-desktop.png"
          width={1440}
          height={162}
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* PRICE CARDS */}
      <div id="click-purchase-target" className="text-center mb-12 scroll-m-16 lg:mb-18">
        {showKlarna ? <KlarnaPricing /> : <IATPriceCardSection />}

        <p className="text-black text-[26px] mt-4 mb-8 mx-6">
          {pageUrl === 'ebook'
            ? 'Schedule a  Free Call with our Coaching Specialist to Learn More'
            : 'Schedule a Free Call to Learn More'}
        </p>

        <IATCalendlyBookingButton />
      </div>

      {/* PROGRAM ITINERARY */}
      <Image
        alt="Grey Curve Background on Mobile"
        className="w-full md:hidden"
        src="/images/IATPage/iat-curriculum-bg.png"
        width={375}
        height={14}
      />

      <Image
        alt="Grey Curve Background on Desktop"
        className="relative z-10 hidden w-full md:block"
        src="/images/IATPage/iat-curriculum-bg-desktop.jpg"
        width={1440}
        height={88}
        quality={100}
        sizes="100vw"
      />
      <Section className="relative z-5 bg-[#e3eded80] lg:bottom-12">
        <h2 className="text-black text-[26px] mb-4 lg:mb-16">Program Itinerary</h2>

        {IAT.itinerary.map((week, index) => (
          <IATCurriculumCard
            key={`itinerary_${index}`}
            heading={week.heading}
            initialOpenState={index == 0 ? true : false}
            listItems={week.listItems}
            textBottom={week.textBottom}
            textTop={week.textTop}
          />
        ))}

        <IATPurchaseButton label="SIGN UP TODAY" />
      </Section>

      {/* HOW WILL YOU BE CERTIFIED SECTION */}
      <Section classNameInner="lg:max-w-5xl lg:pt-4 lg:pb-10">
        <div className="flex flex-center flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-14">
          <Image
            alt="IAT Certificate Framed on a Wall"
            className="w-full lg:w-[473px] lg:h-[400px]"
            src="/images/IATPage/iat-certfication.png"
            width={351}
            height={297}
            quality={100}
          />

          <div className="lg:min-w-[502px]">
            <h2 className="text-black text-[32px] text-left">How Will You Be Certified?</h2>

            <p className="text-left mt-8 md:mt-10 md:text-lg">{IAT.how_to_certify.copy}</p>

            <IATPurchaseButton />
          </div>
        </div>

        <div className="flex flex-center flex-col space-y-6 mt-12 lg:flex-row lg:space-y-0 lg:space-x-14">
          <div className="lg:min-w-[502px]">
            <h2 className="text-black text-[32px] text-left mb-4">Thais Gibson</h2>

            {IAT.thais_section.copy.map((copy, i) => (
              <p key={`thais_section_${i}`} className="text-left mb-4 md:text-lg">
                {copy}
              </p>
            ))}
          </div>

          <Image
            alt="Thais Gibson's Portrait"
            className="w-full lg:w-[359px] lg:h-[390px]"
            src="/images/IATPage/thais-portrait.png"
            width={351}
            height={381}
          />
        </div>
      </Section>

      {/* IMPACT SECTION */}
      <Section className="bg-primary-light-50" classNameInner="py-9 lg:pt-1 lg:pb-4">
        <h3 className="text-black text-[26px] text-center">
          {IAT.thais_section.subsection.heading}
        </h3>

        <div className="flex flex-col space-y-6 mt-8 lg:flex-row lg:space-y-0 lg:space-x-[72px] lg:mt-11">
          <Image
            alt="A Man Indulged in Deep Thinking"
            className="w-full"
            src="/images/IATPage/iat-impact.png"
            width={351}
            height={228}
          />

          <div className="text-center lg:text-left">
            <p className="text-black text-left font-bold">
              {IAT.thais_section.subsection.subheading}
            </p>

            <ul className="font-effra text-left mt-4 ml-4 list-decimal">
              {IAT.thais_section.subsection.copy.map((copy, index) => (
                <li key={`imapct_${index}`}>
                  <p className="mt-4">{copy}</p>
                </li>
              ))}
            </ul>

            <IATPurchaseButton />
          </div>
        </div>
      </Section>

      {/* TESTIMONIAL VIDEO SECTION */}
      <Section className="2xl:pb-24">
        <h2 className="my-4 max-w-4xl mx-auto lg:mb-12">Here's What Our Students Say:</h2>

        <VideoThumbnail
          thumbnailUrl="IATPage/IAT-testimonial-thumbnail.png"
          thumbnailAlt="IAT Testimonial Thumbnail"
          srcUrl="https://storage.googleapis.com/pds_videos/Integrated_attachment_theory_coaching_training_testimonials.mp4"
          type="testimonial"
        />
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-blue-lightest py-0 lg:py-5">
        <FaqSecondary
          className="bg-transparent py-0"
          classNameFAQ="mx-0"
          faq={IAT.faq}
          headerText="Frequently Asked Questions"
          subheaderTextDesktop=""
          subheaderTextMobile=""
        />
      </Section>
    </Page>
  )
}
