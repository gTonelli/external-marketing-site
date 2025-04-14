'use client'

// core
import { useContext, useEffect } from 'react'
// libraries
import Cookies from 'universal-cookie'
// modules
import Mixpanel, { ExperimentVariant } from '@/modules/Mixpanel'
//utils
import { TSplitTestConfig } from '@/middleware'
import { PageContext } from '@/utils/contexts'

interface ISplitTestTrackerProps extends Pick<TSplitTestConfig, 'experimentName' | 'cookieKey'> {
  variant: ExperimentVariant
}

export const SplitTestTracker = ({
  cookieKey,
  experimentName,
  variant,
}: ISplitTestTrackerProps) => {
  const pageContext = useContext(PageContext)

  useEffect(() => {
    const cookies = new Cookies()
    const eventWasTracked = cookies.get(cookieKey)

    if (eventWasTracked === undefined) {
      Mixpanel.track.ExperimentStarted({
        'Experiment name': experimentName,
        'Variant name': variant,
        page_name: pageContext.page_name,
      })

      cookies.set(cookieKey, variant === 'Control' ? 'false' : 'true', { maxAge: 7776000 })
    }
  }, [cookieKey, experimentName, pageContext.page_name, variant])

  return undefined
}
