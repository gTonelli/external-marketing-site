import Image from 'next/image'
import { Section } from './Section'
import { ButtonCheckout, IButtonCheckoutProps } from './Button/variants/ButtonCheckout'
import cx from 'classnames'
import { ButtonDefault, IButtonDefaultProps } from './Button/variants/ButtonDefault'

interface ITextAndMediaProps {
  className?: string
  classNameInner?: string
  heading: string
  body?: (string | JSX.Element)[] | (() => (string | JSX.Element)[]) | JSX.Element
  children?: React.ReactNode
  image: TImage
  includeButton?: boolean
  reverse?: boolean
  button?:
    | React.ReactElement<IButtonCheckoutProps, typeof ButtonCheckout>
    | React.ReactElement<IButtonDefaultProps, typeof ButtonDefault>
}

type TImage = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export const TextAndMedia = ({
  heading,
  body,
  children,
  image,
  button,
  reverse = false,
  className,
  classNameInner,
}: ITextAndMediaProps) => {
  return (
    <Section
      className={className}
      classNameInner={cx('grid gap-4 lg:grid-cols-2 lg:items-center lg:gap-8', classNameInner)}>
      <Image
        src={image.src}
        alt="A mockup of PDS courses on a Macbook"
        className={cx('w-full rounded-2xl', reverse && 'order-2', image.className)}
        width={image.width}
        height={image.height}
      />

      <div className={cx('text-left', reverse && 'order-1')}>
        <h2>{heading}</h2>

        {Array.isArray(body)
          ? body.map((text, i) => <p key={`${heading}_${i}`}>{text}</p>)
          : typeof body === 'function'
          ? body()
          : body}

        {children}

        {button}
      </div>
    </Section>
  )
}
