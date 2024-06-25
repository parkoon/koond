import * as React from 'react'

import { cn } from '../utils/cn'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const TextInput = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      type="text"
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
TextInput.displayName = 'TextInput'

export default TextInput
