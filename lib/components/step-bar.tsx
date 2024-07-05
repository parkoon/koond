import * as Progress from '@radix-ui/react-progress'

import { cn } from '../utils/cn'

const DEFAULT_START_PROGRESS_PERCENT = 7

type StepBarProps = {
  items: string[]
  currentStep: number
  startProgress?: number
}

const StepBar = ({
  items,
  startProgress = DEFAULT_START_PROGRESS_PERCENT,
  currentStep = 0,
}: StepBarProps) => {
  const step = 100 / (items.length - 1)
  const value = step * Math.min(currentStep, items.length) || startProgress

  return (
    <>
      <Progress.Root className="relative mb-1 h-2 w-full overflow-hidden rounded-full bg-primary/20">
        <Progress.Indicator
          className="h-full w-full flex-1 rounded-full bg-primary transition-all"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      </Progress.Root>

      <div className="flex justify-between">
        {items.map((item, index) => (
          <span
            key={index}
            className={cn(
              'text-placeholder',
              currentStep === index && 'font-semibold text-primary',
            )}
          >
            {item}
          </span>
        ))}
      </div>
    </>
  )
}

export default StepBar
