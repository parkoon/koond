'use client'

import { VariantProps, cva } from 'class-variance-authority'
import { ChevronRight } from 'lucide-react'

import { cn } from '../utils/cn'

const alertVariants = cva(
  'relative h-14 w-full overflow-hidden rounded-lg border px-4 py-3 text-sm [&>.alert-slot~*]:pl-10',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        danger: 'border-danger text-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type AlertProps = VariantProps<typeof alertVariants> &
  Omit<React.ComponentProps<'div'>, 'role'> & { clickable?: boolean }
export const Alert = ({ className, variant, clickable, children, ...props }: AlertProps) => {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), clickable && 'cursor-pointer', className)}
      {...props}
    >
      {children}
      {clickable && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <ChevronRight />
        </div>
      )}
    </div>
  )
}

export type AlertTitleProps = React.ComponentProps<'h5'>
export const AlertTitle = ({ className, ...props }: AlertTitleProps) => (
  <h5 className={cn('font-medium leading-none', className)} {...props} />
)

export type AlertDescriptionProps = React.ComponentProps<'p'>
export const AlertDescription = ({ className, ...props }: AlertDescriptionProps) => (
  <p className={cn('text-sm', className)} {...props} />
)

export type AlertSlotProps = React.ComponentProps<'div'>
export const AlertSlot = ({ className, ...props }: AlertSlotProps) => (
  <div
    className={cn(
      'alert-slot absolute left-0 top-0 flex h-14 w-14 items-center justify-center overflow-hidden',
      className,
    )}
    {...props}
  />
)
