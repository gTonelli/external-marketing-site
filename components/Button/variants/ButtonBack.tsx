'use client'
// core
import { useRouter } from 'next/navigation'
// components
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@awesome.me/kit-545b942488/icons/classic/solid'

interface IButtonBackProps extends IDefaultProps {
  label?: string
  goBackUrl?: string
}

export const ButtonBack = ({ label = 'GO BACK', goBackUrl, className }: IButtonBackProps) => {
  const router = useRouter()
  return (
    <div
      className={cx(
        'w-max flex items-center rounded-full px-4 py-2 cursor-pointer hover:bg-gray-50',
        className
      )}
      role="button"
      onClick={() => (goBackUrl ? router.push(goBackUrl) : router.back())}>
      <FontAwesomeIcon icon={faChevronLeft} className="mr-4" />

      <span className="font-bold tracking-33">{label}</span>
    </div>
  )
}
