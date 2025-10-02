// core
import Image from 'next/image'
// components
import { ButtonCheckout } from '../Button/variants/ButtonCheckout'
// libraries
import cx from 'classnames'

interface ISocialProofStatisticsProps {
  classNameCardWrapper?: string
  classNameHeading?: string
  sectionHeading?: string
  buttonLabel?: string
  buttonHref?: string
  includeButton?: boolean
}

export const SocialProofStatistics = ({
  classNameCardWrapper,
  classNameHeading,
  sectionHeading = 'Experience Belonging to an Unstoppable Powerhouse Community That Ignites Your Life!',
  buttonLabel = 'SIGN UP TODAY',
  buttonHref,
  includeButton = false,
}: ISocialProofStatisticsProps) => {
  return (
    <>
      <h2 className={cx('max-w-3xl mx-auto', classNameHeading)}>{sectionHeading}</h2>

      <div
        className={cx(
          'flex row justify-between space-x-4 mt-12 overflow-x-auto scrollbar-hide lg:mt-15',
          classNameCardWrapper
        )}>
        {cards.map((card, index) => (
          <div
            key={`card_${index}`}
            className="min-w-52 bg-white rounded-[30px] px-8 py-4 lg:w-60 lg:py-10 lg:px-9">
            <div className="min-w-28 min-h-20 mx-auto">
              <Image
                alt={card.alt}
                className="mx-auto"
                src={`/images/TrialHeadspace/${card.img}`}
                width={card.width || 64}
                height={64}
              />
            </div>

            <h2 className="text-black mt-3">{card.stat}</h2>

            <p className="text-black mt-6">{card.copy}</p>
          </div>
        ))}
      </div>

      {includeButton && <ButtonCheckout label={buttonLabel} href={buttonHref} />}
    </>
  )
}

const cards = [
  {
    img: 'ratings.png',
    stat: '99.7%',
    copy: 'Satisfaction rate',
    alt: '5 Stars in a row',
    width: 87,
  },
  {
    img: 'globe.png',
    stat: '120+',
    copy: 'Countries worldwide',
    alt: 'A vector image of the globe',
  },
  {
    img: 'heart.png',
    stat: '88.7%',
    copy: 'Relationship improvement',
    alt: 'A purple heart',
  },
]
