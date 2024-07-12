import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '../utils/cn'

const badgeVariants = cva(
  'inline-flex select-none items-center rounded-md border px-2.5 py-0.5 text-sm transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        danger: 'border-transparent bg-danger text-danger-foreground shadow',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeProps = VariantProps<typeof badgeVariants> & React.ComponentProps<'div'>

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}
