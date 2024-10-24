// components
import { IDefaultWrapperProps } from '@/components'
// import { Callout } from 'components/Callout/Callout'
// import { Translation } from 'components/Translation/Translation'
import { ILoaderDefaultProps, LoaderDefault } from './LoaderDefault'
import { LoaderFullscreen } from './LoaderFullscreen'
// libraries
import cx from 'classnames'
// utils
import { TOpacityValues } from '@/utils/types'

const DEFAULT_OPACITY: TOpacityValues = 'opacity-0'

interface ILoaderWrapperProps extends ILoaderDefaultProps, IDefaultWrapperProps {
  /**
   * Has error?
   */
  error?: boolean | string
  /**
   * The opacity value, if defined, it will render wrapper's children regardless of loading status
   *
   * ! PARENT MUST HAVE `position: relative` TO WORK !
   *
   * @default 0
   */
  opacity?: TOpacityValues
}

export const LoaderWrapper = ({
  children,
  className,
  error,
  isLoading,
  opacity = DEFAULT_OPACITY,
}: ILoaderWrapperProps) => {
  return (
    // #NOTE: this fragment has to be here so this component returns JSX.Element instaed of ReactNode, which in turn prevents TS error: Type 'undefined' is not assignable to type 'Element | null' since whole pages are wrapped in this component
    <>
      {isLoading ? (
        opacity !== DEFAULT_OPACITY ? (
          <>
            {children}

            <div className={cx('loader-wrapper absolute left-0 top-0 bg-gray-200', opacity)}>
              <LoaderDefault className="text-gray-700" />
            </div>
          </>
        ) : (
          <LoaderFullscreen className={className} />
        )
      ) : error ? (
        // <Callout
        //   icon="exclamation-triangle"
        //   title={
        //     typeof error === 'string' ? (
        //       error
        //     ) : (
        //       <Translation keyValue="general.response.error_loading_data" />
        //     )
        //   }
        // />
        <div className={cx('lg:min-h-screen flex-center', className)}>
          <span className="text-black text-xl">{error}</span>
        </div>
      ) : (
        children
      )}
    </>
  )
}
