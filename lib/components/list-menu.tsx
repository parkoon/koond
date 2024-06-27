import { ChevronRight } from 'lucide-react'
import React from 'react'

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
      color?: string
    }
type ListMenuProps = {
  hideLinkIcon?: boolean
  items: MenuItem[]
}

const ListMenu = ({ hideLinkIcon, items = [] }: ListMenuProps) => {
  return (
    <ul>
      {items.map((item, index) => {
        if (item.type === 'separator') {
          return (
            <div className="h-2" style={{ backgroundColor: item.color || 'rgba(0,0,0,0.01)' }} />
          )
        }

        return (
          <li key={index}>
            <button
              onClick={item.onClick}
              className="flex w-full items-center justify-between px-5 py-3"
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {item.label}
              </div>

              <div className="flex items-center gap-2">
                {typeof item.extra === 'string' ? (
                  <span className="text-placeholder text-sm">{item.extra}</span>
                ) : (
                  item.extra
                )}
                {!hideLinkIcon && <ChevronRight className="h-5 w-5" />}
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default ListMenu
