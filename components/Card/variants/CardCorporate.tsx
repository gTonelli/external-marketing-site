// components
import { IDefaultProps } from '@/components'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
// libraries
import cx from 'classnames'

interface ICardBaseProps extends IDefaultProps {}

interface ICardSMProps extends ICardBaseProps {
  /**
   * Size of the card
   *
   * @default 'sm'
   */
  size: 'sm'
  type: 'time' | 'report' | 'relationship'
}
interface ICardMDProps extends ICardBaseProps {
  /**
   * Size of the card
   *
   * @default 'sm'
   */
  size: 'md'
  /**
   * Card's title
   */
  type: 'FA' | 'AP' | 'DA' | 'SA'
}

type ICardProps = ICardSMProps | ICardMDProps

export const CardCorporate = (props: ICardProps) =>
  props.size === 'sm' ? <CardSmall {...props} /> : <CardMedium {...props} />

//   SMALL CARD (img + text)
const CardSmall = ({ className, type }: ICardSMProps) => {
  const getText = (): string => {
    switch (type) {
      case 'time':
        return 'Take Less than 5 Minutes!'
      case 'report':
        return 'Get a Free Report!'
      case 'relationship':
        return 'Understand yourself & others!'

      default:
        return ''
    }
  }

  return (
    <div className={cx('card-sm', className)}>
      {type === 'time' && (
        <Image className="w-28 lg:w-auto" src="CorporatePage/corporate_hourglass.svg" />
      )}

      {type === 'report' && (
        <Image className="w-28 lg:w-auto" src="CorporatePage/corporate_report.svg" />
      )}

      {type === 'relationship' && (
        <Image className="w-28 lg:w-auto" src="CorporatePage/corporate_relationship.svg" />
      )}

      <p className="text-xs tracking-0.325 pt-2 lg:text-base lg:tracking-max">
        {getText().toUpperCase()}
      </p>
    </div>
  )
}

//   LARGE CARD (img + title + text)
const CardMedium = ({ className, type }: ICardMDProps) => {
  const getContent = (): { title: string; text: string } => {
    switch (type) {
      case 'FA':
        return {
          title: 'Fearful Avoidant',
          text: 'Are you passionate and hard-working? Although they are driven, Fearful Avoidants may also be inflexible at times.',
        }
      case 'AP':
        return {
          title: 'Anxious Preoccupied',
          text: 'Is your superpower collaborating with others? Anxious Preoccupied individuals are social, but can be over-giving.',
        }
      case 'DA':
        return {
          title: 'Dismissive Avoidant',
          text: 'Are you analytical, focused and intellectual? You may be a Dismissive Avoidant, especially if you tend to work independently.',
        }
      case 'SA':
        return {
          title: 'Secure Attachment',
          text: 'Do you find that you communicate well with others and feel balanced in the workplace? You could have a Secure Attachment Style.',
        }
      default:
        return { title: '', text: '' }
    }
  }

  return (
    <div className={cx('card-md anim-styles space-x-4 md:!flex-row lg:space-x-8', className)}>
      {type === 'FA' && (
        <Image className="w-auto" src="CorporatePage/corporate_landing_card_fa.svg" />
      )}
      {type === 'AP' && (
        <Image className="w-auto" src="CorporatePage/corporate_landing_card_ap.svg" />
      )}
      {type === 'DA' && (
        <Image className="w-auto" src="CorporatePage/corporate_landing_card_da.svg" />
      )}
      {type === 'SA' && (
        <Image className="w-auto" src="CorporatePage/corporate_landing_card_sa.svg" />
      )}

      <div className="flex flex-col">
        <Text.Heading
          className="text-primary font-normal text-left tracking-0.325 mb-3 heading-effra"
          content={getContent().title.toUpperCase()}
          size={3}
        />

        <Text.Paragraph className="text-left" content={getContent().text} />
      </div>
    </div>
  )
}
