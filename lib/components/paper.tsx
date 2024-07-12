import React from 'react'

import { cn } from '../utils/cn'

export type PaperProps = React.ComponentProps<'div'> & {
  bordered?: boolean
  shadow?: boolean
}

const Paper = ({ children, bordered = true, shadow = false, className, ...props }: PaperProps) => {
  return (
    <div
      className={cn(
        'rounded-lg bg-background p-4',
        !shadow && bordered && 'border',
        shadow && 'shadow',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Paper
