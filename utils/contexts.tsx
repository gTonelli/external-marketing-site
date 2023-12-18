'use client'

import { createContext } from 'react'
import { IPage, IScrolldepth, IViewport } from './interfaces'
import { Maybe } from 'yup'

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

// ==================== Page context ====================
export const PageContext = createContext<IPage>({ page_name: undefined })
