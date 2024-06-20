import * as Dialog from '@radix-ui/react-dialog'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { cn } from '../utils/cn'

type SelectItem<T> = {
  label: string
  value: T
}
type SelectDialogProps<T> = {
  title?: string
  items: SelectItem<T>[]

  value?: T
  onChange?(value: T): void
}
const SelectDialog = <T extends string>({
  title,
  items = [],
  value,
  onChange,
}: SelectDialogProps<T>) => {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<T | undefined>()

  const _value = value || selectedValue

  const handleSelect = (v: string) => {
    setSelectedValue(v as T)
    onChange?.(v as T)
    setOpen(false)
  }

  const selectedLabel = items.find((item) => item.value === _value)?.label

  return (
    <Dialog.Root open={open}>
      <button
        onClick={() => setOpen(true)}
        className="flex h-10 w-full select-none items-center justify-between rounded border px-3"
      >
        {selectedLabel}
        {open ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </button>
      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-0 bg-[rgba(0,0,0,0.1)]"
          onClick={() => setOpen(false)}
        />

        <Dialog.Content className="scrollbar-hide fixed left-1/2 top-1/2 z-50 max-h-[50%] w-[calc(100%-4rem)] max-w-md -translate-x-1/2 -translate-y-1/2 overflow-scroll rounded border bg-background duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          {title && (
            <Dialog.Title className="mb-4 border-b pb-4 text-center font-semibold">
              Edit profile
            </Dialog.Title>
          )}
          <div className="flex flex-col px-4">
            {items.map((item, index) => {
              const isLast = items.length === index + 1
              const isSelected = item.value === _value
              return (
                <Item
                  bordered={!isLast}
                  selected={isSelected}
                  key={item.value}
                  onClick={() => handleSelect(item.value)}
                >
                  {item.label}
                </Item>
              )
            })}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

type SelectItemProps = {
  selected?: boolean
  bordered?: boolean
  onClick?(): void
  children: React.ReactNode
}
const Item = ({ selected, children, bordered, onClick }: SelectItemProps) => {
  const itemRef = useRef<HTMLButtonElement | null>(null)
  useEffect(() => {
    if (selected) {
      itemRef.current?.scrollIntoView({ block: 'center' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <button
      ref={itemRef}
      onClick={onClick}
      className={cn('flex w-full items-center justify-between px-2 py-3', bordered && 'border-b')}
    >
      {children}
      {selected && <Check className="h-4 w-4 text-primary" />}
    </button>
  )
}

export default SelectDialog
