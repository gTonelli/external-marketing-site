//components
import { Page } from '@/components/Page'
import { Articles } from '@/components/Articles'
import { CommunityTeaser } from '@/components/CommunityTeaser'
import VideoTeaser from '@/components/Video/variants/VideoTeaser'
import { TestimonialSection } from '@/components/TestimonialSection'
import { DreamLifeBanner } from '@/components/DreamLifeBanner'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
// utils
import { externalRoutes } from '@/utils/constants'

export default function DreamLifePage() {
  return (
    <Page className="relative w-full overflow-hidden" page_name="7 Day Free Trial Headspace">
      <DreamLifeBanner paymentOptionsConfigKey="dreamLife" />

      {/**TESTIMONIAL*/}
      <section className="max-w-4xl mx-auto px-4 pt-9 lg:pt-[102px]">
        <TestimonialSection />

        <div className="text-center">
          <h2 className="mt-14 lg:mt-22">Take a Moment For Yourself</h2>

          <p className="mt-4">
            Explore some snippets of our most popular courses from each of the categories below!
          </p>

          <ButtonCheckout
            className="text-black bg-blue mt-8"
            label="TRY FOR FREE"
            href={externalRoutes.checkout7DayTrial}
          />
        </div>
      </section>

      <VideoTeaser />

      <Articles />

      <CommunityTeaser paymentOptionsConfigKey="dreamLife" />
    </Page>
  )
}
