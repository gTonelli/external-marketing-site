'use client'

import { createContext } from 'react'
import { IScrolldepth, IViewport } from './interfaces'

// ==================== Viewport context ====================
export const ViewportContext = createContext<IViewport>({
  windowWidth: 0,
  isSmallerThan: {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  },
  isLargerThan: {
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  },
})

// ================== Scrolldepth context ====================
export const ScrollContext = createContext<IScrolldepth>({
  scrollPercentage: 0,
})
