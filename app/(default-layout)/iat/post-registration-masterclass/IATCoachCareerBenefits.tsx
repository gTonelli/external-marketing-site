// components
import { List } from '@/components/List'
import { Section } from '@/components/Section'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'

interface IATCoachCareerBenefitsProps {
  title?: string
}

export const IATCoachCareerBenefits = ({ title }: IATCoachCareerBenefitsProps) => {
  return (
    <Section
      className="bg-coach min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
      classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
      <div className="bg-gradient lg:hidden" />

      <div className="bg-coach-mobile lg:hidden" />

      <div className="relative text-black text-left p-4 z-5 lg:col-span-7">
        <h2 className="mb-8">
          {title || 'Here’s What Your Life Could Look Like as a Certified IAT™ Coach'}
        </h2>

        <List
          classNameListItems="mb-6"
          icon={faCheckCircle}
          listItems={[
            'Embrace the fulfillment that comes with making a massive impact by helping people transform their lives and relationships.',
            'Join a powerful and inspiring movement to make the world a happier, healthier, and better place.',
            'Enhance your coaching skillset to upgrade your practice or expand your career in any field by using the latest in scientific-backed tools and theory.',
            'Experience your personal growth by utilizing these powerful tools yourself so you can live your best life with the people you love.',
            'Make your business and brand unstoppable with results-proven strategies and funnels to attract customers and consistent high-end revenue.',
            'Get the financial and career recognition you deserve for driving real-life and profound results for people worldwide.',
          ]}
        />
      </div>
    </Section>
  )
}
