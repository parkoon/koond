import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '../utils/cn'

export type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>
export const Tabs = ({ className, ...props }: TabsProps) => (
  <TabsPrimitive.Root className={className} {...props} />
)

export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>
export const TabsList = ({ className, ...props }: TabsListProps) => (
  <TabsPrimitive.List
    className={cn('flex overflow-scroll border-b scrollbar-hide focus:outline-none', className)}
    {...props}
  />
)

export type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>
export const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => (
  <TabsPrimitive.Trigger
    className={cn(
      'flex h-12 flex-1 shrink-0 select-none items-center justify-center border-b-2 border-transparent bg-white px-5 leading-none focus:outline-none focus-visible:outline-none data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=active]:text-primary',
      className,
    )}
    {...props}
  />
)

export type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>
export const TabsContent = ({ className, ...props }: TabsContentProps) => (
  <TabsPrimitive.Content className={cn('pt-4', className)} {...props} />
)
