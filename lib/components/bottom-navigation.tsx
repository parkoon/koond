import React, { useState } from 'react'

import { cn } from '../utils/cn'
import { MAX_SCREEN_WIDTH } from './screen'

export const BOTTOM_TAB_NAVIGATION_HEIGHT = 56

type NavItem = {
  label: string
  icon: React.ReactNode
}
export type BottomNavigationProps = {
  classNames?: {
    root?: string
    item?: string
    label?: string
  }
  items: NavItem[]

  value?: number
  onChange?(value: number): void
}
export const BottomNavigation = ({ classNames, value, onChange, items }: BottomNavigationProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const _activeTab = value ?? activeTab

  const handleClick = (index: number) => {
    setActiveTab(index)
    onChange?.(index)
  }

  return (
    <>
      <div style={{ height: BOTTOM_TAB_NAVIGATION_HEIGHT }} />
      <nav
        style={{ height: BOTTOM_TAB_NAVIGATION_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
        className={cn(
          'fixed bottom-0 left-0 right-0 mx-auto max-w-lg border-t bg-white',
          classNames?.root,
        )}
      >
        <div className="flex h-full items-center">
          {items.map((item, index) => {
            const isActive = index === _activeTab
            return (
              <button
                key={item.label + index}
                className={cn(
                  'flex flex-1 flex-col items-center justify-center px-2 text-muted-foreground',
                  isActive && 'text-foreground',
                  classNames?.item,
                )}
                onClick={() => handleClick(index)}
              >
                {item.icon}
                <span className={cn('text-sm', classNames?.label)}>{item.label}</span>
              </button>
            )
          })}
        </div>
      </nav>
    </>
  )
}
