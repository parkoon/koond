'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { useState } from 'react'

import { cn } from '../utils/cn'

type RadioGroupItem<T> = {
  label: string
  value: T
}

type RadioType = 'default' | 'button'

type RadioGroupProps<T> = {
  defaultValue?: T
  value?: T
  onChange?(value?: T): void
  items: RadioGroupItem<T>[]
  radioType?: RadioType
  classNames?: {
    root?: string
    radio?: string
  }
}
const RadioGroup = <T extends string>({
  items = [],
  defaultValue,
  radioType = 'default',
  classNames,
  ...props
}: RadioGroupProps<T>) => {
  const [activeRadio, setActiveRadio] = useState<T | undefined>(defaultValue)

  const _value = props.value || activeRadio

  const handleValueChange = (value: string) => {
    setActiveRadio(value as T)
    props.onChange?.(value as T)
  }
  return (
    <RadioGroupPrimitive.Root
      className={cn('flex flex-col gap-2', classNames?.root)}
      defaultValue={defaultValue}
      value={_value}
      onValueChange={handleValueChange}
    >
      {items.map(({ value, label }, index) => {
        const id = `r${index}`
        return (
          <div className="flex items-center">
            {radioType === 'button' ? (
              <RadioGroupPrimitive.Item
                className={cn(
                  'rounded-[16rem] border px-4 py-2 data-[state=checked]:bg-primary data-[state=checked]:text-white',
                  classNames?.radio,
                )}
                value={value}
                id={id}
              >
                {label}
              </RadioGroupPrimitive.Item>
            ) : (
              <div className="flex items-center gap-2">
                <RadioGroupPrimitive.Item
                  className="h-5 w-5 cursor-default rounded-full border bg-white outline-none data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                  value={value}
                  id={id}
                >
                  <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </RadioGroupPrimitive.Indicator>
                </RadioGroupPrimitive.Item>
                <label className="leading-none" htmlFor={id}>
                  {label}
                </label>
              </div>
            )}
          </div>
        )
      })}
    </RadioGroupPrimitive.Root>
  )
}

export default RadioGroup
