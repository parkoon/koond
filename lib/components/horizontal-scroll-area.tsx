import React from 'react'

import { cn } from '../utils/cn'

const DEFAULT_SCROLL_MARGIN = 20
const DEFAULT_SCROLL_GAP = 16

export type HorizontalScrollAreaProps = {
  children: React.ReactNode
  className?: string

  gap?: number
  margin?: number
}

export const HorizontalScrollArea = ({
  children,
  className,
  margin = DEFAULT_SCROLL_MARGIN,
  gap = DEFAULT_SCROLL_GAP,
}: HorizontalScrollAreaProps) => {
  const items = React.Children.toArray(children)

  return (
    <div
      className={cn('flex snap-x snap-mandatory overflow-scroll scrollbar-hide', className)}
      style={{ gap }}
    >
      {items.map((child, index) => {
        if (!React.isValidElement(child)) return child

        if (index === 0) {
          return React.cloneElement(child, {
            ...child.props,
            style: {
              ...child.props.style,
              marginLeft: margin,
            },
          })
        }

        if (index + 1 === items.length) {
          return React.cloneElement(child, {
            ...child.props,
            style: {
              ...child.props.style,
              marginRight: margin,
            },
          })
        }

        return child
      })}
    </div>
  )
}
