import { cn } from '../utils/cn'

export type IndicatorProps = {
  children: React.ReactNode
  dot?: boolean
  label?: string
  color?: string
  disabled?: boolean
}
export const Indicator = ({ children, dot, label, color, disabled }: IndicatorProps) => {
  return (
    <div className="relative inline-block w-fit">
      {children}
      {(label || dot) && (
        <div
          className={cn(
            'absolute right-0 top-0 flex -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-danger text-xs leading-none text-white',
            dot && 'box-content h-1.5 w-1.5',
            label && 'min-h-5 min-w-5 px-1',
            disabled && 'invisible',
          )}
          style={{ backgroundColor: color }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
