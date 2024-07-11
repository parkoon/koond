'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { useEffect, useRef } from 'react'

import { cn } from '../utils/cn'

type ScrollableTabsProps = React.ComponentProps<typeof TabsPrimitive.Root>
export const ScrollableTabs = ({ defaultValue, className, ...props }: ScrollableTabsProps) => {
  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      className={cn('w-full bg-white', className)}
      {...props}
    />
  )
}

type ScrollableTabsListProps = React.ComponentProps<typeof TabsPrimitive.List>
export const ScrollableTabsList = ({ className, ...props }: ScrollableTabsListProps) => (
  <TabsPrimitive.List
    className={cn(
      'relative flex overflow-x-scroll border-b scrollbar-hide focus:outline-none',
      className,
    )}
    {...props}
  />
)

type ScrollableTabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  scrollIntoView?: boolean
}
export const ScrollableTabsTrigger = ({
  value,
  scrollIntoView,
  ...props
}: ScrollableTabsTriggerProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const handleScrollIntoView = () => {
    triggerRef.current?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    })
  }

  useEffect(() => {
    if (scrollIntoView) {
      triggerRef.current?.scrollIntoView({
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [scrollIntoView])
  return (
    <TabsPrimitive.Trigger
      ref={triggerRef}
      onClick={handleScrollIntoView}
      className="h-10 shrink-0 select-none border-b-2 border-transparent bg-white px-5 leading-none focus:outline-none focus-visible:outline-none data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=active]:text-primary"
      value={value}
      {...props}
    />
  )
}

type ScrollableTabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>
export const ScrollableTabsContent = ({ className, ...props }: ScrollableTabsContentProps) => (
  <TabsPrimitive.Content className={cn('pt-4', className)} {...props} />
)
