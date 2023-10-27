import { TBreakpoints } from './types'

export interface IViewport {
  windowWidth: number
  isSmallerThan: { [key in TBreakpoints]: boolean }
  isLargerThan: { [key in TBreakpoints]: boolean }
}

export interface IScrolldepth {
  scrollPercentage: number
}

/**
 * A special definition of a regular empty `Object` type.
 * Use this istead of `object` type as it causes issues.
 *
 * https://github.com/microsoft/TypeScript/issues/21732
 *
 * (if you dont know what i'm talking about, just define any variable as `const temp: object = {}` and see what eslint tells you)
 */
export interface IObject<T = unknown> extends Record<string, T> {}
