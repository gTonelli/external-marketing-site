'use client'

// core
import { useEffect } from 'react'
import { IDefaultWrapperProps } from '.'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// utils
import { isMobile } from 'react-device-detect'
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
  const gamUserTracking = useGamAnalytics()

  useEffect(() => {
    Mixpanel.track.PageViewed({ page_name })
  }, [])

  return (
    <ViewportContext.Provider value={viewportValues}>
      <ScrollContext.Provider value={{ scrollPercentage }}>
        <PageContext.Provider value={{ page_name }}>
          <main ref={scrollRef} className={className}>
            {children}
          </main>
        </PageContext.Provider>
      </ScrollContext.Provider>
    </ViewportContext.Provider>
  )
}
