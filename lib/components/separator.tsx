import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '../utils/cn'

const DEFAULT_SEPARATOR_SIZE = 1
const DEFAULT_SEPARATOR_MARGIN = 16

export type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  size?: number
  margin?: number
}
export const Separator = ({
  size = DEFAULT_SEPARATOR_SIZE,
  margin = DEFAULT_SEPARATOR_MARGIN,
  orientation = 'horizontal',
  className,
  style,
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive.Root
    orientation={orientation}
    className={cn(
      'shrink-0 bg-border',
      orientation === 'horizontal' ? 'my-3 w-full' : 'mx-3 h-full',
      className,
    )}
    style={{
      ...(orientation === 'horizontal' && {
        height: size,
        marginTop: margin,
        marginBottom: margin,
      }),
      ...(orientation === 'vertical' && { width: size, marginLeft: margin, marginRight: margin }),
      ...style,
    }}
    {...props}
  />
)
