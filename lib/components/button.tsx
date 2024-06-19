import { type VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import React from 'react'

import { cn } from '../utils/cn'

const buttonVariants = cva(
  'inline-flex select-none items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white shadow',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm',
        ghost: '',
        outlined: 'border bg-white',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-xs',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-9 w-9',
      },
      danger: {
        true: 'border-danger-foreground bg-danger text-white',
      },
      loading: {
        true: 'pointer-events-none opacity-50',
      },
      block: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, block, loading, danger, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, danger, className, block, loading }))}
        ref={ref}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
