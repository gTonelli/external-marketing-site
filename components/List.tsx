'use client'

// core
import React from 'react'
// componenets
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
import { Icon, TIcon, TIconName, TIconSize } from './Icon'
import { Text } from './Text/Text'

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
   * Classname for secondary icons
   * for use with iconNameSecondary and secondaryLiItemsIndex
   */
  classNameIconSecondary?: string
  /**
   * Classname for secondary list items
   * for use with iconNameSecondary and secondaryLiItemsIndex
   */
  classNameListItemsSecondary?: string
  /**
   * Name for the Font Awesome Icon
   * @default undefined
   */
  iconName?: TIconName
  /**
   * For use with secondaryLiItemsIndex (as n)
   * declares a secondary icon name for nth children and above
   */
  iconNameSecondary?: TIconName
  /**
   * List items to display.
   */
  iconSize?: TIconSize
  /**
   * Icon size
   */
  iconType?: TIcon
  /**
   * Icon type
   */
  listItems: string[]
  /**
   * Will display secondary icon after this index and render based on secondaryClassNames
   * @warning for default behavior this must be set to -1
   */
  secondaryLiItemsIndex?: number
}

export const List = ({
  classNameListItems,
  classNameText,
  classNameIcon,
  classNameIconSecondary,
  classNameListItemsSecondary,
  className,
  iconName,
  iconNameSecondary,
  iconSize,
  iconType = 'solid',
  listItems,
  secondaryLiItemsIndex,
}: IListProps) => {
  if (secondaryLiItemsIndex === 0) {
    // eslint-disable-next-line no-param-reassign
    secondaryLiItemsIndex = -1
    console.error('List component not configured properly.')
  }

  return (
    <ul className={className}>
      {listItems.map((data, index) => (
        <li key={`list_item_${index}`} className={cx('flex items-start ', classNameListItems)}>
          {(iconName || (iconNameSecondary && secondaryLiItemsIndex)) && (
            <Icon
              className={cx(
                'pt-[1px] mr-2 text-primary font-semibold ',
                classNameIcon,
                `${
                  secondaryLiItemsIndex && iconNameSecondary && index > secondaryLiItemsIndex - 1
                    ? classNameIconSecondary
                    : null
                }`
              )}
              // @ts-ignore
              name={
                secondaryLiItemsIndex && iconNameSecondary
                  ? index > secondaryLiItemsIndex - 1
                    ? iconNameSecondary
                    : iconName || iconNameSecondary
                  : iconName || iconNameSecondary
              }
              size={iconSize}
              type={iconType}
            />
          )}

          <Text
            useMD
            className={cx(
              classNameText,
              secondaryLiItemsIndex && index > secondaryLiItemsIndex - 1
                ? classNameListItemsSecondary
                : null
            )}
            content={data}
          />
        </li>
      ))}
    </ul>
  )
}
