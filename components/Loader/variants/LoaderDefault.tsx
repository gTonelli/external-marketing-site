// components
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'
export interface ILoaderDefaultProps extends IDefaultProps {
  /**
   * Whether the loader is actually loading data
   *
   * ! NOTE ! - DONT USE WITH `LoaderDefault`
   * this prop is used only for LoaderWrapper and LoaderLine since they're the only ones rendering loading indicator conditionaly
   *
   * @default false
   */
  isLoading?: boolean
}

/**
 * Default - `Spinner` variant of animated loading indicator
 */
export const LoaderDefault = ({ className }: ILoaderDefaultProps) => {
  return (
    <svg
      className={two(cx('animate-spin h-4 w-4 text-primary', className))}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />

      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      />
    </svg>
  )
}
