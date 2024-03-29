import { Animation } from '../Animation'
import { Icon } from '../Icon'

interface ISelfImpropvementCardProps {
  heading: string
  subheading: string
  number: number
  includeDelay?: boolean
}

export const AttachmentQuizV2SelfImprovementCard = ({
  heading,
  subheading,
  number,
  includeDelay = false,
}: ISelfImpropvementCardProps) => (
  <Animation direction="fromBottom" delay={includeDelay ? number * 0.15 : 0}>
    <div className="flex w-full-relative items-center overflow-visible">
      <Icon
        name="circle-check"
        className="text-blue rounded-full border-2 border-transparent mr-1"
      />

      <div className="w-full h-[2px] left-0 top-calc(50%-1px) bg-blue" />
    </div>

    <p>Day {number}</p>

    <h3>{heading}</h3>

    <p>{subheading}</p>
  </Animation>
)
