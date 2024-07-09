import React from 'react'

import { cn } from '../utils/cn'

export const MAX_SCREEN_WIDTH = 440

type ScreenProps = {
  width?: number
  children: React.ReactNode
  className?: string
}

export const Screen = ({ className, children }: ScreenProps) => {
  return (
    <div
      className={cn('mx-auto flex min-h-full w-full flex-1 flex-col items-start', className)}
      style={{ boxShadow: '-1px 0 0 0 #eee, 1px 0 0 0 #eee', maxWidth: MAX_SCREEN_WIDTH }}
    >
      {children}{' '}
    </div>
  )
}

type ContentProps = {
  children: React.ReactNode
  className?: string
}

export const Content = ({ children, className }: ContentProps) => (
  <main className={cn('w-full flex-1', className)}>{children}</main>
)
