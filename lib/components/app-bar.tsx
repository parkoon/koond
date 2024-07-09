import { cn } from '../utils/cn'

export const APP_BAR_HEIGHT = 56

export type AppBarProps = {
  left?: React.ReactNode
  title?: React.ReactNode
  right?: React.ReactNode

  classNames?: {
    root?: string
    title?: string
  }
}
export const AppBar = ({ left, title, right, classNames }: AppBarProps) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex w-full items-center justify-between whitespace-nowrap bg-white px-5 py-4',
        classNames?.root,
      )}
      style={{ height: APP_BAR_HEIGHT }}
    >
      {left || <div />}
      {title && (
        <h3 className={cn('absolute left-1/2 -translate-x-1/2 font-bold', classNames?.title)}>
          {title}
        </h3>
      )}
      {right || <div />}
    </header>
  )
}
