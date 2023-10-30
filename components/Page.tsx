'use client'

// core
import { useEffect } from 'react'
import { IDefaultWrapperProps } from '.'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// utils
import { isMobile } from 'react-device-detect'
import { ScrollContext, ViewportContext } from '@/utils/contexts'
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

    Mixpanel.eventTime('Page Exit')

    function onEndSession() {
      Mixpanel.track.PageExited({ page_name })
    }

    if (isMobile) {
      window.addEventListener('visibilitychange', onEndSession, false)
    } else {
      window.addEventListener('beforeunload', onEndSession, false)
    }

    return () => {
      if (isMobile) {
        window.removeEventListener('visibilitychange', onEndSession, false)
      } else {
        window.removeEventListener('beforeunload', onEndSession, false)
      }
    }
  })

  return (
    <ViewportContext.Provider value={viewportValues}>
      <ScrollContext.Provider value={{ scrollPercentage }}>
        <main ref={scrollRef} className={className}>
          {children}
        </main>
      </ScrollContext.Provider>
    </ViewportContext.Provider>
  )
}
