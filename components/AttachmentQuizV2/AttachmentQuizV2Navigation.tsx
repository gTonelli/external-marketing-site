'use client'

// core
import { useRouter } from 'next/navigation'
// components
import Image from 'next/image'
import { Icon } from '../Icon'
import { IDefaultProps } from '..'
import Link from 'next/link'
import cx from 'classnames'
import { Button } from '../Button/Button'
// libraries
// utils
import { EExternalRoutes } from '@/utils/constants'

interface IAttachmentQuizV2NavigationProps extends IDefaultProps {
  onGoBack?: () => void
  showBackButton?: boolean
  includeContinueButton?: boolean
}

export const AttachmentQuizV2Navigation = ({
  className,
  onGoBack,
  showBackButton = true,
  includeContinueButton = false,
}: IAttachmentQuizV2NavigationProps) => {
  const router = useRouter()
  const _onGoBack = onGoBack ?? router.back

  return (
    <div
      className={cx(
        'relative z-15 py-3 px-5 grid items-center bg-[#f5f5f5] min-h-[94px] xl:px-24 2xl:px-48 3xl:px-72',
        includeContinueButton ? 'grid-cols-2 gap-4 lg:grid-cols-3' : 'grid-cols-[84px_1fr_84px]',
        className
      )}>
      {showBackButton && (
        <div className="flex items-center text-grey cursor-pointer" onClick={() => _onGoBack()}>
          <Icon className="mr-2" name="chevron-left" />

          <strong>Go Back</strong>
        </div>
      )}

      <Image
        alt="The Personal Development School Logo: A sapling in a circle with the business name next to it."
        className={cx('mx-auto', includeContinueButton ? 'lg:col-start-2' : 'col-start-2')}
        src="/images/pds-logo-stacked-right-primary.png"
        width={165}
        height={61}
      />

      {includeContinueButton && (
        <Link className="text-right" href={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}>
          <Button label="CONTINUE" />
        </Link>
      )}
    </div>
  )
}
