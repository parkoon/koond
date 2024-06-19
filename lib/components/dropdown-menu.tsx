'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '../utils/cn'

export type DropdownMenuItem<T> = {
  key: T
  label: string
}
export type DropdownMenuProps<T> = {
  trigger: React.ReactNode
  defaultMenuKey?: T
  items: DropdownMenuItem<T>[]
  onMenuChange?(key: T): void
}

const DropdownMenu = <T extends string>({
  defaultMenuKey,
  trigger,
  items = [],
  onMenuChange,
}: DropdownMenuProps<T>) => {
  const [activeMenuKey, setActiveMenuKey] = useState<T | undefined>(defaultMenuKey)

  const handleValueChange = (value: string) => {
    setActiveMenuKey(value as T)
    onMenuChange?.(value as T)
  }

  useEffect(() => {
    setActiveMenuKey(defaultMenuKey)
  }, [defaultMenuKey])

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>{trigger}</DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          side="bottom"
          className="min-w-[10rem] rounded-md border data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          sideOffset={5}
          align="start"
        >
          <DropdownMenuPrimitive.RadioGroup value={activeMenuKey} onValueChange={handleValueChange}>
            {items?.map(({ key, label }, index) => {
              const isLast = index + 1 === items.length
              return (
                <DropdownMenuPrimitive.RadioItem
                  key={key}
                  value={key}
                  className={cn(
                    'flex select-none items-center justify-between px-4 py-3 leading-none outline-none',
                    !isLast && 'border-b',
                  )}
                >
                  {label}
                  <DropdownMenuPrimitive.ItemIndicator className="inline-flex items-center justify-center text-primary">
                    <CheckIcon className="h-4 w-4" />
                  </DropdownMenuPrimitive.ItemIndicator>
                </DropdownMenuPrimitive.RadioItem>
              )
            })}
          </DropdownMenuPrimitive.RadioGroup>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}

export default DropdownMenu
