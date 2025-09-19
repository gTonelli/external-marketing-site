// core
import Image from 'next/image'
// components
import { faChevronDown, faCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { ButtonCheckout } from './Button/variants/ButtonCheckout'
import { Expandable } from './Expandable'
import { Section } from './Section'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IItineraryProps {
  listItems: TListItem[]
}

type TListItem = {
  heading: string
  body: (string | JSX.Element)[]
  hoursPerWeek: number
}

export const Itinerary = ({ listItems }: IItineraryProps) => {
  return (
    <>
      <Image
        src="/images/SegmentedResultsPages/teal-wave.png"
        className="w-full"
        alt="Teal wave"
        width={1920}
        height={57}
        quality={100}
        tabIndex={-1}
      />

      <Section className="bg-[rgba(227,237,237,0.5)]" classNameInner="!max-w-4xl">
        <h2>Your 90 Day Path to Healing</h2>

        <p>
          Your entire Secure Attachment Bootcamp is designed to target your subconscious mind for
          healing — because your subconscious drives 95–97% of your fears, patterns, and protective
          behaviors.
        </p>

        <p>
          As a Fearful Avoidant, you may feel torn{' '}
          <strong>between craving closeness and pulling away</strong> when things feel too intense.
          Integrated Attachment Theory works at the subconscious level to rewire the 6 pillars of
          attachment so you can build consistent trust and safety, both with yourself and in your
          relationships.
        </p>

        {listItems.map((item, i) => (
          <Expandable
            key={`section_six_week_item_${i}`}
            className="bg-white rounded-20 border-2 border-green mb-4"
            contentInnerClassName="text-left px-6 grid gap-4 grid-cols-[20px_1fr]"
            open={i === 0}
            openedClassName="bg-white rounded-20 border-2 border-green mb-4"
            trigger={
              <div className="flex justify-between items-center p-6">
                <p className="text-primary font-bold mb-0">{item.heading}</p>

                <FontAwesomeIcon
                  className="text-primary transition-transform"
                  icon={faChevronDown}
                />
              </div>
            }>
            <FontAwesomeIcon
              className="text-white rounded-full py-1 px-[5px] bg-success"
              icon={faCheck}
            />

            <div>
              {item.body.map((text, i) => (
                <p key={`section_six_week_item_text_${i}`}>{text}</p>
              ))}

              <p className="text-grey-9">
                Recommended time: {item.hoursPerWeek} hour{item.hoursPerWeek > 1 ? 's' : ''} per
                week
              </p>
            </div>
          </Expandable>
        ))}

        <div className="border-[3px] border-green-8 rounded-xl px-8 py-10 mt-10 bg-[rgba(49,212,0,0.18)]">
          <h2 className="font-bold mb-0">Change Your Life–Or Pay nothing</h2>
          <p>
            When you use the Secure Rewiring Method™ in our 90-Day Bootcamp, you will feel
            completely different or we’ll refund you and extend your membership for free until you
            do.
          </p>
          <p>
            <strong>This means you either change your life or you pay nothing.</strong> All we ask
            is that you complete the program.
          </p>

          <ButtonCheckout className="mt-7" label="START MY PROGRAM" />
        </div>
      </Section>
    </>
  )
}
