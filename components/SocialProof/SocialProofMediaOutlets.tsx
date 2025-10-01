// core
import Image from 'next/image'
// libraries
import cx from 'classnames'

export const SocialProofMediaOutlets = () => {
  return (
    <>
      <p className="tracking-33 font-bold">OUR SCHOOL HAS BEEN FEATURED ON</p>

      <div className="flex flex-wrap gap-4 items-center justify-between">
        {socialProof.map((logo, i) => (
          <Image
            key={`social_proof_logo_${i}`}
            className={cx('mx-2', logo.classNames)}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
          />
        ))}
      </div>
    </>
  )
}

const socialProof = [
  {
    src: '/images/SegmentedResultsPages/mel-robbins-logo.svg',
    alt: 'Mel Robbins Logo',
    width: 96,
    height: 36,
    classNames: 'lg:w-[149px] lg:h-[56px]',
  },
  {
    src: '/images/SegmentedResultsPages/psychology-today-logo.svg',
    alt: 'Psychology Today Logo',
    width: 108,
    height: 36,
    classNames: 'lg:w-[208px] lg:h-[70px]',
  },
  {
    src: '/images/SegmentedResultsPages/new-york-post-logo.svg',
    alt: 'New York Post',
    width: 103,
    height: 30,
    classNames: 'lg:w-[231px] lg:h-[35px]',
  },
  {
    src: '/images/SegmentedResultsPages/ceo-weekly-logo.svg',
    alt: 'CEO Weekly',
    width: 54,
    height: 36,
    classNames: 'lg:w-[145px] lg:h-[50px]',
  },
  {
    src: '/images/SegmentedResultsPages/yahoo-logo.svg',
    alt: 'Yahoo',
    width: 87,
    height: 24,
    classNames: 'lg:w-[157px] lg:h-[44px]',
  },
]
