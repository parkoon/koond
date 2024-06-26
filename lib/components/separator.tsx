import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '../utils/cn'

type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root>
const Separator = ({ orientation = 'horizontal', className, ...props }: SeparatorProps) => (
  <SeparatorPrimitive.Root
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'my-3 h-[1px] w-full' : 'mx-3 h-full w-[1px]',
      className,
    )}
    {...props}
  />
)

export default Separator
