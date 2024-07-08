import { cn } from '../utils/cn'

type SeparatedDescriptionProps = {
  items?: string[]
  className?: string
}

const SeparatedDescription = ({ items = [], className }: SeparatedDescriptionProps) => {
  return (
    <div className={cn('flex space-x-2 text-sm text-muted-foreground', className)}>
      {items.map((item, index) => {
        const isLast = items.length === index + 1

        return (
          <span key={index} className={cn('leading-none', !isLast && 'border-r pr-2')}>
            {item}
          </span>
        )
      })}
    </div>
  )
}

export default SeparatedDescription
