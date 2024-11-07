// core
import { cookies } from 'next/headers'
// components
import { RESULTS } from '@/app/(custom-layouts)/(no-nav)/quiz/results/fa/config'
// modules
import { IDefaultProps } from '..'
// libraries
import cx from 'classnames'

interface IAttachmentQuizHeadingProps extends IDefaultProps {
  copy?: string
}

export const AttachmentQuizHeading = ({ copy, className }: IAttachmentQuizHeadingProps) => {
  const userFirstName = cookies().get('firstName')?.value

  return (
    <h1 className={cx('text-purple-dark font-bold font-effra uppercase', className)}>
      {userFirstName ? userFirstName + ', ' : ''}
      {copy || RESULTS['fa'].HERO_SECTION.headline}
    </h1>
  )
}
