import React from 'react'

import { cn } from '../utils/cn'

export const DEFAULT_SCREEN_WIDTH = 440

type ScreenProps = {
  width?: number
  children: React.ReactNode
  className?: string
}

export const Screen = ({ className, children }: ScreenProps) => {
  return (
    <div
      className={cn('mx-auto flex min-h-full w-full flex-1 flex-col', className)}
      style={{ boxShadow: '-1px 0 0 0 #eee, 1px 0 0 0 #eee', maxWidth: DEFAULT_SCREEN_WIDTH }}
    >
      {children}{' '}
    </div>
  )
}

type ScreenContentProps = {
  children: React.ReactNode
  className?: string
}

export const ScreenContent = ({ children, className }: ScreenContentProps) => (
  <div className={cn('px-5 py-4', className)}>{children}</div>
)
