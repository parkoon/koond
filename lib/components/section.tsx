import { cn } from '../utils/cn'

type SectionProps = React.ComponentProps<'section'>
export const Section = ({ children, ...props }: SectionProps) => {
  return <section {...props}>{children}</section>
}

export type SectionHeaderProps = {
  title?: string
  description?: string
  extra?: React.ReactNode
} & React.ComponentProps<'header'>

export const SectionHeader = ({
  title,
  description,
  extra,
  className,
  ...props
}: SectionHeaderProps) => (
  <header className={cn('mb-4 px-4', className)} {...props}>
    <div className="flex justify-between">
      <h3 className="text-xl font-bold">{title}</h3>
      {extra}
    </div>
    <p className="text-muted-foreground">{description}</p>
  </header>
)

export type SectionBodyProps = React.ComponentProps<'div'>
export const SectionBody = ({ children, ...props }: SectionBodyProps) => (
  <div {...props}>{children}</div>
)
