import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '../utils/cn'

type TabItem<T> = {
  key: T
  label: string
  children: string | React.ReactNode
}

type TabsProps<T> = {
  defaultValue?: string
  items: TabItem<T>[]
  classNames?: {
    root?: string
    content?: string
  }
}
const Tabs = <T extends string>({
  items = [],
  defaultValue = items[0].key,
  classNames,
}: TabsProps<T>) => (
  <TabsPrimitive.Root defaultValue={defaultValue} className={classNames?.root}>
    <TabsPrimitive.List className="flex shrink-0 border-b focus:outline-none">
      {items.map((item) => (
        <TabsPrimitive.Trigger
          key={item.key}
          className="flex h-12 flex-1 select-none items-center justify-center border-b-2 border-transparent bg-white px-5 leading-none focus:outline-none focus-visible:outline-none data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=active]:text-primary"
          value={item.key}
        >
          {item.label}
        </TabsPrimitive.Trigger>
      ))}
    </TabsPrimitive.List>

    {items.map((item) => (
      <TabsPrimitive.Content
        key={item.key}
        value={item.key}
        className={cn('pt-4', classNames?.content)}
      >
        {item.children}
      </TabsPrimitive.Content>
    ))}
  </TabsPrimitive.Root>
)

export default Tabs
