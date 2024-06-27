import React, { useState } from 'react'

import { cn } from '../utils/cn'

export const BOTTOM_TAB_NAVIGATION_HEIGHT = 56

type NavItem = {
  label: string
  icon: React.ReactNode
}
type BottomNavigationProps = {
  classNames?: {
    root?: string
    item?: string
    label?: string
  }
  items: NavItem[]

  value?: number
  onChange?(value: number): void
}
const BottomNavigation = ({ classNames, value, onChange, items }: BottomNavigationProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const _activeTab = value ?? activeTab

  const handleClick = (index: number) => {
    setActiveTab(index)
    onChange?.(index)
  }

  return (
    <nav
      style={{ height: BOTTOM_TAB_NAVIGATION_HEIGHT }}
      className={cn('fixed bottom-0 left-0 right-0 mx-auto max-w-lg bg-white', classNames?.root)}
    >
      <div className="flex h-full items-center">
        {items.map((item, index) => (
          <button
            className={cn(
              'flex flex-1 flex-col items-center justify-center px-2',
              classNames?.item,
            )}
            onClick={() => handleClick(index)}
          >
            {item.icon}
            <span
              className={cn('text-sm', index === _activeTab && 'font-semibold', classNames?.label)}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export default BottomNavigation
