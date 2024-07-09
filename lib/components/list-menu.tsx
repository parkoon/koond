import { ChevronRight } from 'lucide-react'
import React from 'react'

import { cn } from '../utils/cn'
import Separator from './separator'

type MenuItem =
  | {
      type?: 'link'
      label: string
      icon?: React.ReactNode
      extra?: string | React.ReactNode
      onClick?(): void
    }
  | {
      type: 'separator'
    }
export type ListMenuProps = {
  hideLinkIcon?: boolean
  title?: string
  items: MenuItem[]
  classNames?: {
    root?: string
    title?: string
    item?: string
  }
}

export const ListMenu = ({ title, items = [], classNames, hideLinkIcon }: ListMenuProps) => {
  return (
    <div className={classNames?.root}>
      {title && <h3 className={cn('mb-1 font-bold', classNames?.title)}>{title}</h3>}
      <ul>
        {items.map((item, index) => {
          if (item.type === 'separator') {
            return <Separator className="h-2 bg-muted" />
          }

          return (
            <li key={index} className={classNames?.item}>
              <button
                onClick={item.onClick}
                className="flex w-full items-center justify-between py-3"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </div>

                <div className="flex items-center gap-2">
                  {typeof item.extra === 'string' ? (
                    <span className="text-sm text-placeholder">{item.extra}</span>
                  ) : (
                    item.extra
                  )}
                  {!hideLinkIcon && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
