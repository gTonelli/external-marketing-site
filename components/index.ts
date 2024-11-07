// this can be made a barrel file if/when NextJS fixes the issues with them https://github.com/vercel/next.js/issues/12557
import { Key } from 'react'

export type AlignPosition = 'left' | 'center' | 'right'

export type TKey = Key | undefined | null
export type TUserMenuTabValue = 'history' | 'notifications' | 'user'

/**
 * Interface for default props that all components must extend
 */
export interface IDefaultProps {
  id?: TKey
  key?: TKey
  className?: string
  style?: React.CSSProperties
}

/**
 * Interface for default wrapper components - same as `IDefaultProps` with additional support for children
 */
export interface IDefaultWrapperProps extends IDefaultProps {
  children: React.ReactNode
}
