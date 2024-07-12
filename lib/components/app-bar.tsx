import { cn } from '../utils/cn'

export const APP_BAR_HEIGHT = 56

export type AppBarProps = React.ComponentProps<'header'>
export const AppBar = ({ style, className, ...props }: AppBarProps) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex w-full items-center justify-between whitespace-nowrap bg-white px-4 py-4',
        className,
      )}
      style={{ height: APP_BAR_HEIGHT, ...style }}
      {...props}
    />
  )
}

export type AppBarTitleProps = React.ComponentProps<'h3'>
export const AppBarTitle = ({ className, ...props }: AppBarTitleProps) => (
  <h3 className={cn('absolute left-1/2 -translate-x-1/2 font-bold', className)} {...props} />
)

export type AppBarActionProps = React.ComponentProps<'div'>
export const AppBarAction = ({ ...props }: AppBarActionProps) => <div {...props} />

export type AppBarExtraProps = React.ComponentProps<'div'>
export const AppBarExtra = ({ className, ...props }: AppBarExtraProps) => (
  <div className={cn('flex items-center space-x-2', className)} {...props} />
)
