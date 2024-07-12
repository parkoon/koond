'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { cn } from '../utils/cn'

export type AccordionProps = React.ComponentProps<typeof AccordionPrimitive.Root> & {
  bordered?: boolean
}
export const Accordion = ({ className, bordered = true, ...props }: AccordionProps) => (
  <AccordionPrimitive.Root
    className={cn('w-full', !bordered && '[&>.accordion-item]:border-none', className)}
    {...props}
  />
)

export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>
export const AccordionItem = ({ className, ...props }: AccordionItemProps) => (
  <AccordionPrimitive.Item className={cn('accordion-item border-b', className)} {...props} />
)

export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>
export const AccordionTrigger = ({ children, className, ...props }: AccordionTriggerProps) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        'flex flex-1 items-center justify-between py-4 text-sm transition-all [&[data-state=open]>svg]:rotate-180',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
)

export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>
export const AccordionContent = ({ className, children, ...props }: AccordionContentProps) => (
  <AccordionPrimitive.Content
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    {...props}
  >
    <div className={cn('pb-4 pt-0', className)}>{children}</div>
  </AccordionPrimitive.Content>
)
