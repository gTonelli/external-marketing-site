'use client'

// componenets
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
import { Text } from './Text/Text'
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IListProps extends IDefaultProps {
  /**
   * Classnames for the list item elements
   */
  classNameListItems?: string
  /**
   * Classnames for the text elements
   */
  classNameText?: string
  /**
   * Classnames for the Icon elements
   */
  classNameIcon?: string
  /**
   * Name for the Font Awesome Icon
   * @default undefined
   */
  icon?: IconProp
  /**
   * List items to display.
   */
  iconSize?: SizeProp
  /**
   * Icon type
   */
  listItems: (string | JSX.Element)[]
  /**
   * Use Markdown?
   * @default true
   */
  useMD?: boolean
}

export const List = ({
  classNameListItems,
  classNameText,
  classNameIcon,
  className,
  icon,
  iconSize,
  listItems,
  useMD = true,
}: IListProps) => {
  return (
    <ul className={className}>
      {listItems.map((data, index) => (
        <li key={`list_item_${index}`} className={cx('flex items-start ', classNameListItems)}>
          {icon && (
            <FontAwesomeIcon
              className={cx('pt-[1px] mr-2 text-primary font-semibold ', classNameIcon)}
              icon={icon}
              size={iconSize}
            />
          )}

          {typeof data === 'string' ? (
            <Text useMD={useMD} className={cx(classNameText)} content={data} />
          ) : (
            <span className={cx(classNameText)}>{data}</span>
          )}
        </li>
      ))}
    </ul>
  )
}
