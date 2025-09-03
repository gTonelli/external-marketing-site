'use client'

import { useContext, useEffect, useState } from 'react'
//components
import { Button } from './Button/Button'
import { Text } from './Text/Text'
//libraries
import cx from 'classnames'
// utils
import { ScrollContext } from '@/utils/contexts'

interface IStickyFooterProps {
  className?: string
  copyDesktop?: string
  copyMobile?: string
  redirectionURL: string
}

export const StickyFooter = ({
  className,
  copyDesktop,
  copyMobile,
  redirectionURL,
}: IStickyFooterProps) => {
  // ==================== Context ====================
  const { scrollPercentage } = useContext(ScrollContext)
  // ==================== State ====================
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    if (scrollPercentage >= 3 && scrollPercentage <= 95) {
      setShowFooter(true)
    } else if (scrollPercentage <= 3 || scrollPercentage >= 95) {
      setShowFooter(false)
    }
  }, [scrollPercentage])

  const onButtonClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    window.location.assign(redirectionURL)
  }
  return (
    <>
      {showFooter && (
        <footer
          className={cx(
            'anim-fade-in-secondary fixed inset-x-0 bottom-0 bg-black/90 z-10 py-6',
            className
          )}>
          <div className="max-w-5xl flex row items-center justify-between mx-auto px-4">
            <Text.Paragraph useMD className="text-white lg:hidden" content={copyMobile} />

            <Text.Paragraph useMD className="hidden text-white lg:block" content={copyDesktop} />

            <Button className="border-primary lg:hidden" label="SIGN UP" onClick={onButtonClick} />

            <Button
              className="hidden border-primary lg:block"
              label="START YOUR FREE TRIAL"
              onClick={onButtonClick}
            />
          </div>
        </footer>
      )}
    </>
  )
}
