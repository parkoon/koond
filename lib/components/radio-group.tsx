'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '../utils/cn'

export type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive.Root> & {
  inline?: boolean
}
export const RadioGroup = ({ inline, className, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('flex flex-col gap-2', inline && 'flex-row', className)}
      {...props}
    />
  )
}

export type RadioGroupButtonItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  block?: boolean
}
export const RadioGroupButtonItem = ({ block, className, ...props }: RadioGroupButtonItemProps) => (
  <RadioGroupPrimitive.Item
    className={cn(
      'flex h-9 items-center justify-center rounded-[16rem] border px-4 text-muted-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white',
      block && 'w-full',
      className,
    )}
    {...props}
  />
)

export type RadioGroupItemProps = React.ComponentProps<typeof RadioGroupPrimitive.Item>
export const RadioGroupItem = ({ className, ...props }: RadioGroupItemProps) => (
  <div className="flex items-center gap-2">
    <RadioGroupPrimitive.Item
      id={props.value}
      className={cn(
        'h-5 w-5 cursor-default rounded-full border bg-white outline-none data-[state=checked]:border-primary data-[state=checked]:bg-primary',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
    <label className="select-none leading-none" htmlFor={props.value}>
      {props.children}
    </label>
  </div>
)
