'use client'

// components
import { IDefaultProps } from '@/components'
import { Image } from '@/components/Image'
import { Section } from '@/components/Section'
// libraries
import cx from 'classnames'

export interface ITrustbarDefaultProps extends IDefaultProps {
  /** images must come from images/Logo_Brand and include an extension */
  brandLogosList?: string[] | ILogo[]
  classNameImage?: string
}

interface ILogo extends IDefaultProps {
  img: string
}

export const DEFAULT_TRUSTBAR: ILogo[] = [
  { img: 'mel-robbins-logo.png', className: 'max-h-[36px] xxs:max-h-[53px]' },
  { img: 'psychology-today-logo.png', className: 'max-h-[42px] xxs:max-h-[61px]' },
  { img: 'new-york-post-logo.png', className: 'max-h-[24px] xxs:max-h-[33px]' },
  { img: 'ceo-weekly-logo.png', className: 'max-h-[44px] xxs:max-h-[60px]' },
  { img: 'yahoo-logo.png', className: 'max-h-[32px] xxs:max-h-[36px]' },
]

export const TrustbarDefault = ({
  brandLogosList = DEFAULT_TRUSTBAR,
  className,
  classNameImage,
}: ITrustbarDefaultProps) => {
  return (
    <Section
      classNameInner={cx(
        'flex items-center justify-around flex-wrap max-w-sm lg:max-w-screen-lg',
        className
      )}>
      {brandLogosList.map((logo, i) => (
        <Image
          alt={typeof logo === 'string' ? logo : logo.img}
          key={`brand_logo_${i}`}
          className={cx(
            'max-h-9 mb-2',
            classNameImage,
            typeof logo !== 'string' ? logo.className : ''
          )}
          src={`Logo_Brand/${typeof logo === 'string' ? logo : logo.img}`}
        />
      ))}
    </Section>
  )
}
