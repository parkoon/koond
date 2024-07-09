export type IndicatorProps = {
  children: React.ReactNode
  dot?: boolean
  label?: string
  color?: string
}
export const Indicator = ({ children, dot, label, color }: IndicatorProps) => {
  return (
    <div className="relative inline-block w-fit">
      {children}
      {!label && dot && (
        <div
          className="absolute right-0 top-0 z-10 box-content h-1.5 w-1.5 -translate-y-1/2 translate-x-1/2 rounded-full border-2 border-white bg-danger"
          style={{ backgroundColor: color }}
        />
      )}
      {label && (
        <div
          className="absolute right-0 top-0 z-10 flex min-h-5 min-w-5 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-danger px-1 text-sm leading-none text-white"
          style={{ backgroundColor: color }}
        >
          {label}
        </div>
      )}
    </div>
  )
}
