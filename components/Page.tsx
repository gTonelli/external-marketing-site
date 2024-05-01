'use client'

// core
import { useEffect } from 'react'
import { IDefaultWrapperProps } from '.'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// libraries
import cx from 'classnames'
// utils
import { PageContext, ScrollContext, ViewportContext } from '@/utils/contexts'
import { usePageScrolledEvent, useScrollPercentage, useWindowWidth } from '@/utils/hooks'
import { useGamAnalytics } from '@/modules/GAM'

interface IPageProps extends IDefaultWrapperProps {
  page_name: Pages
}

export const Page = ({ children, className, page_name }: IPageProps) => {
  // ==================== Hooks ====================
  const viewportValues = useWindowWidth()
  const [scrollRef, scrollPercentage] = useScrollPercentage()
  usePageScrolledEvent(scrollPercentage, page_name)
  useGamAnalytics()

  useEffect(() => {
    Mixpanel.track.PageViewed({ page_name })
  }, [page_name])

  return (
    <ViewportContext.Provider value={viewportValues}>
      <ScrollContext.Provider value={{ scrollPercentage }}>
        <PageContext.Provider value={{ page_name }}>
          <main ref={scrollRef} className={cx('overflow-x-hidden', className)}>
            {children}
          </main>
        </PageContext.Provider>
      </ScrollContext.Provider>
    </ViewportContext.Provider>
  )
}
