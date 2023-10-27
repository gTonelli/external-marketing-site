'use client'

// core
import React from 'react'
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

const DEFAULT_TRUSTBAR: ILogo[] = [
  { img: 'psychology-today-logo.png', className: 'max-h-[30px] xxs:max-h-[40px]' },
  { img: 'forbes-logo.png', className: 'max-h-[24px] xxs:max-h-[33px]' },
  { img: 'amazon-com-logo.png', className: 'max-h-[30px] xxs:max-h-[39px]' },
  { img: 'success-logo-alt.png', className: 'max-h-[21px] xxs:max-h-[28px]' },
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
