// core
import React, { ReactNode, useEffect, useState } from 'react'
// components
import { IDefaultWrapperProps } from '.'
import { Button } from './Button/Button'
// libraries
import cx from 'classnames'
import { Image } from './Image'

export interface ITabProps<TabID> extends Omit<IDefaultWrapperProps, 'id'> {
  /**
   * Whether the `Tab` has icon
   */
  hasIcon?: boolean
  /**
   * Name of the icon
   */
  iconName?: string
  /**
   * Generic value for Tab's ID - if the Tabs are used within a column, the value should be the same as <Column<TabID> />
   */
  id: TabID
  /**
   * Whether the `Tab` is currently active
   *
   * @warning ! DO NOT SPECIFY IN JSX ! This prop is handled in `<Tabs>` via `React.cloneElement`
   *
   * @default undefined
   */
  isActive?: boolean
  /**
   * Whether the `Tab` has icon
   */
  isDesktop?: boolean
  /**
   * Whether the `Tab` is disabled
   *
   * @default undefined
   */
  isDisabled?: boolean
  /**
   * Text to display inside the `Tab`
   *
   * @default undefined
   */
  label?: ReactNode
  /**
   * Event called when the `Tab` is clicked
   *
   * @warning ! DO NOT SPECIFY IN JSX ! This prop is handled in `<Tabs>` via `React.cloneElement`
   *
   * @default undefined
   */
  onClick?(tabId: TabID): void
}

/**
 * Wrapper component for displaying a tab - wrapped in styless `<Button.Wrapper>`
 */
export function Tab<TabID = undefined>({
  className,
  hasIcon = false,
  iconName,
  id,
  isActive,
  isDesktop = true,
  isDisabled,
  label,
  onClick,
}: ITabProps<TabID>) {
  const _onClick = () => {
    if (isDisabled) return

    onClick?.(id)
  }

  return (
    <Button.Wrapper
      noStyles
      className={cx(
        isActive
          ? isDesktop
            ? 'w-full text-center border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
            : 'text-white bg-black'
          : isDesktop
          ? 'w-full text-center border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm'
          : 'text-black bg-blue-secondary',
        className,
        hasIcon ? 'flex flex-col' : ''
      )}
      isDisabled={isDisabled}
      onClick={_onClick}>
      {hasIcon && <Image className="mb-4" src={`${iconName}`} />}
      <span className="flex truncate">{String(label || id)}</span>
    </Button.Wrapper>
  )
}

//

interface ITabsProps<TabIDs> extends IDefaultWrapperProps {
  /**
   * Collection of JSX.Elements where each MUST be wrapped in `<Tab>`
   */
  children: React.ReactElement<ITabProps<TabIDs>>[]
  /** CSS classes applied directly to the `<nav />` */
  classNameNav?: string
  /**
   * ID of the currently active `Tab` - also used as its `key`
   *
   * @default undefined
   */
  activeTab?: TabIDs
  /**
   * Content to be rendered on the right side of the header tabs
   */
  contentRight?: ReactNode
  /**
   * Event called when a `<Tab>` is clicked, returns its ID
   * @param {TabIDs} tabID ID of the `Tab` user clicked on
   *
   * @default undefined
   */
  onChangeTab?(tabId: TabIDs): void
}

/**
 * Wrapper component for rendering tabs - its children MUST be of type `<Tab>`
 */
export function Tabs<TabIDs = undefined>({
  activeTab,
  children,
  className,
  classNameNav,
  contentRight,
  onChangeTab,
}: ITabsProps<TabIDs>) {
  const [currentTab, setCurrentTab] = useState<TabIDs | undefined>(activeTab)

  useEffect(() => {
    if (activeTab !== currentTab) setCurrentTab(activeTab)
  }, [activeTab, currentTab])

  const _onChangeTab = (tabId: TabIDs) => () => {
    setCurrentTab(tabId)
    onChangeTab?.(tabId)
  }

  return (
    <div className="tabs">
      {/* TABS HEADER */}
      <div className={cx('tabsHeader', className)}>
        <nav
          aria-label="Tabs"
          className={cx('flex justify-evenly items-center w-full overflow-x-auto', classNameNav)}>
          {children.map((tab, index) =>
            React.cloneElement(tab, {
              ...tab.props,
              key: (tab.props.id || `tab-${index}`) as any,
              isActive: tab.props.id === currentTab,
              onClick: _onChangeTab(tab.props.id),
            })
          )}

          {contentRight}
        </nav>
      </div>

      {/* TABS'S CONTENT */}
      {/* <Scrollable> */}
      {/* #TODO #DELETE className - later once dark mode is fully resolved on FE */}
      <div className="h-full w-full overflow-auto">
        {children[children.findIndex((child) => child.props.id === currentTab)]?.props.children}
      </div>
      {/* </Scrollable> */}
    </div>
  )
}
