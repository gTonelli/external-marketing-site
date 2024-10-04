// core
import Link from 'next/link'
// components
/* eslint-disable react/jsx-key */
import { IDefaultProps } from '@/components'
import { ISectionProps } from '@/components/Section'
import { Section as _Section } from '@/components/Section'
// libraries
import cx from 'classnames'
import { IconName } from '@fortawesome/fontawesome-common-types'

interface IStartButtonQuizProps extends IDefaultProps {
  label?: string
}

export const StartQuizButton = ({
  className,
  label = 'START YOUR QUIZ',
}: IStartButtonQuizProps) => {
  return (
    <Link
      className={cx(
        `border-2 rounded-full tracking-10 px-4 py-2 transition-colors bg-primary border-primary text-white
          hover:no-underline active:shadow-md active:text-white active:bg-opacity-50 
          hover:text-white hover:shadow-md hover:bg-opacity-50`,
        className
      )}
      href="/quiz/v2/questions">
      {label}
    </Link>
  )
}

export const Section = (props: ISectionProps) => {
  return <_Section {...props} classNameInner={cx('!max-w-screen-xl', props.classNameInner)} />
}

const cards: TCard[] = [
  { name: 'heart-circle-check', text: 'Discover True Love' },
  { name: 'shield-heart', text: 'Empower Your Relationships' },
  { name: 'comments', text: 'Forge Deeper Connections' },
  { name: 'user-check', text: 'Improve Self-Belief' },
]

type TCard = {
  name: IconName
  text: string
}

export const PAGE_CONFIG = {
  slides: [
    {
      topText: 'Everyone Has',
      midText: '1 of 4',
      botText: 'Attachment Styles',
    },
    {
      topText: 'Over',
      midText: '4.7M',
      botText: 'People Have Taken Our Quiz',
    },
    {
      topText: 'People From',
      midText: '195',
      botText: 'Countries Around The World',
    },
    {
      topText: 'A Satisfaction Rate of',
      midText: '97%',
      botText: 'From All Members',
    },
    {
      topText: 'Science-backed Approach:',
      midText: '99%',
      botText: 'Success Rate Guaranteed',
    },
  ],

  cards,

  bulletPoints: [
    <>
      Transform your journey with<strong> a customized step-by-step roadmap</strong>
    </>,
    <>
      Benefit from <strong>Thais Gibson's genuine expertise and guidance</strong>
    </>,
    <>
      Gain practical insights for real-life situations with<strong> interactive coaching</strong>
    </>,
    <>
      Practice powerful tools and strategies<strong> to change your relationships</strong>
    </>,
    <>
      Join<strong> a supportive community </strong>and share experiences with like-minded
      individuals
    </>,
    <>
      Effortlessly learn at<strong> your own pace, anytime, anywhere, on any device</strong>
    </>,
  ],

  listItems: [
    'Take our 5-minute quiz anywhere, on any device, to get your report',
    'Elevate your experience with exclusive personalized reports that go beyond the ordinary',
    'Get tailored insights and a deeper understanding of your relationship dynamics',
    "Discover scientific-backed guidance, tools, and strategies that you won't find elsewhere",
  ],

  features: [
    {
      imgSrc: '/images/AttachmentQuiz/V2/writing.svg',
      imgAlt: 'A vector image of a hand writing a test with checkboxes',
      text: 'It’s so simple! Take our free 5-minute attachment style quiz.',
    },
    {
      imgSrc: '/images/AttachmentQuiz/V2/report.svg',
      imgAlt: 'A vector image of a hand grabbing pieces of paper',
      text: 'Get a personalized report to learn about your attachment style.',
    },
    {
      imgSrc: '/images/AttachmentQuiz/V2/tablet.svg',
      imgAlt: 'A vector image of a hand tapping a tablet screen',
      text: 'Learn powerful tools and strategies with our easy-to-digest courses.',
    },
    {
      imgSrc: '/images/AttachmentQuiz/V2/flag.svg',
      imgAlt: 'A vector image of a hand waving a purple flag',
      text: 'Experience profound personal changes and build your dream relationships.',
    },
  ],
}
