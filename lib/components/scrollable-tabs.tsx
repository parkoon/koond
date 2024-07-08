'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import { useEffect, useRef } from 'react'

import { cn } from '../utils/cn'

type TabItem<T> = {
  key: T
  label: string
  children: string | React.ReactNode
}

type TabsProps<T> = {
  defaultValue?: T
  items: TabItem<T>[]
  extra?: React.ReactNode
  classNames?: {
    root?: string
    content?: string
  }
}
const ScrollableTabs = <T extends string>({
  items = [],
  defaultValue = items[0].key,
  extra,
  classNames,
}: TabsProps<T>) => {
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const handleScrollIntoView = (v: string) => {
    triggerRefs.current[v]?.scrollIntoView({ behavior: 'smooth', inline: 'center' })
  }

  useEffect(() => {
    if (defaultValue) {
      triggerRefs.current[defaultValue]?.scrollIntoView({ inline: 'center' })
    }
  }, [defaultValue])

  return (
    <TabsPrimitive.Root
      defaultValue={defaultValue}
      className={classNames?.root}
      onValueChange={handleScrollIntoView}
    >
      <TabsPrimitive.List className="relative flex overflow-x-scroll border-b scrollbar-hide focus:outline-none">
        {items.map((item) => (
          <TabsPrimitive.Trigger
            ref={(ref) => (triggerRefs.current[item.key] = ref)}
            data-value={item.key}
            key={item.key}
            className="h-10 select-none border-b-2 border-transparent bg-white px-5 leading-none focus:outline-none focus-visible:outline-none data-[state=active]:border-primary data-[state=active]:font-semibold data-[state=active]:text-primary"
            value={item.key}
          >
            {item.label}
          </TabsPrimitive.Trigger>
        ))}

        {extra && (
          <div className="sticky right-0 flex items-center justify-center bg-white pl-2">
            {extra}
          </div>
        )}
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
}

export default ScrollableTabs
