'use client'
// core
import { useRouter } from 'next/navigation'
// components
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
import { Icon } from '@/components/Icon'

interface IButtonBackProps extends IDefaultProps {
  label?: string
}

export const ButtonBack = ({ label = 'GO BACK', className }: IButtonBackProps) => {
  const router = useRouter()
  return (
    <div
      className={cx(
        'w-max flex items-center rounded-full px-4 py-2 cursor-pointer hover:bg-gray-50',
        className
      )}
      role="button"
      onClick={() => router.back()}>
      <Icon name="chevron-left" className="mr-4" />
      <span className="font-bold tracking-33">{label}</span>
    </div>
  )
}
