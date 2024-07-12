import React from 'react'

import { cn } from '../utils/cn'

export const MAX_SCREEN_WIDTH = 440

type ScreenProps = {
  width?: number
} & React.ComponentProps<'div'>

export const Screen = ({ className, style, children, ...props }: ScreenProps) => {
  return (
    <div
      className={cn('mx-auto flex min-h-full w-full flex-1 flex-col items-start', className)}
      style={{ boxShadow: '-1px 0 0 0 #eee, 1px 0 0 0 #eee', maxWidth: MAX_SCREEN_WIDTH, ...style }}
      {...props}
    >
      <main className="w-full flex-1">{children}</main>
    </div>
  )
}
