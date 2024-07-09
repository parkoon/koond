import { Meta } from '@storybook/react'

import { HorizontalSnapScrollArea } from '../components/horizontal-snap-scroll-area'

const meta = {
  title: 'ui/HorizontalSnapScrollArea',
  component: HorizontalSnapScrollArea,
  tags: ['autodocs'],
} satisfies Meta<typeof HorizontalSnapScrollArea>

const images = Array.from({ length: 10 }).map(
  (_, index) => `https://picsum.photos/seed/${index + 1}/200`,
)

export const Default = () => (
  <HorizontalSnapScrollArea>
    {images.map((_, index) => (
      <img src={`https://picsum.photos/seed/${index + 1}/200`} className="w-full" />
    ))}
  </HorizontalSnapScrollArea>
)
export const WithoutPadding = () => (
  <HorizontalSnapScrollArea padding={0}>
    {images.map((_, index) => (
      <img src={`https://picsum.photos/seed/${index + 1}/200`} className="w-full" />
    ))}
  </HorizontalSnapScrollArea>
)
export const SlideToShow = () => (
  <HorizontalSnapScrollArea slidesToShow={1}>
    {images.map((_, index) => (
      <img
        src={`https://picsum.photos/seed/${index + 1}/600`}
        className="h-[240px] w-full object-cover"
      />
    ))}
  </HorizontalSnapScrollArea>
)

export default meta
