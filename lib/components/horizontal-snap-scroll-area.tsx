import React from 'react'

const DEFAULT_SLIDES_TO_SHOW = 3
const DEFAULT_SCROLL_PADDING = 16

export type HorizontalSnapScrollAreaProps = {
  children: React.ReactNode
  slidesToShow?: number
  padding?: number
}
export const HorizontalSnapScrollArea = ({
  children,
  slidesToShow = DEFAULT_SLIDES_TO_SHOW,
  padding = DEFAULT_SCROLL_PADDING,
}: HorizontalSnapScrollAreaProps) => {
  const items = React.Children.toArray(children)

  return (
    <ul
      className="flex snap-x snap-mandatory overflow-x-scroll scrollbar-hide"
      style={{ paddingRight: padding }}
    >
      {items.map((child, index) => (
        <li
          key={index}
          className="shrink-0 snap-start"
          style={{
            width: `calc(100%/${slidesToShow} + ${padding}px)`,
            paddingLeft: padding,
            ...(index !== 0 && { marginLeft: `-${padding / 2}px` }),
          }}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}
