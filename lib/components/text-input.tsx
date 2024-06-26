import * as React from 'react'

import { cn } from '../utils/cn'

export type InputProps = {
  prefix?: string | React.ReactNode
  suffix?: string | React.ReactNode
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, prefix, suffix, ...props }, ref) => {
    return (
      <label className="flex h-10 w-full items-center gap-2 overflow-hidden rounded-md border border-input bg-transparent px-3 text-sm">
        {prefix}
        <input
          type="text"
          className={cn(
            'h-full w-full placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
        {suffix}
      </label>
    )
  },
)
TextInput.displayName = 'TextInput'

export default TextInput
