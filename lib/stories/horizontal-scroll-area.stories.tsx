import { Meta } from '@storybook/react'

import { Avatar } from '../components/avatar'
import { HorizontalScrollArea } from '../components/horizontal-scroll-area'

const meta = {
  title: 'ui/HorizontalScrollArea',
  component: HorizontalScrollArea,
  tags: ['autodocs'],
} satisfies Meta<typeof HorizontalScrollArea>

const images = Array.from({ length: 10 }).map(
  (_, index) => `https://picsum.photos/seed/${index + 1}/200`,
)

export const Default = () => (
  <HorizontalScrollArea>
    {images.map((_, index) => (
      <Avatar
        key={index}
        src={`https://picsum.photos/seed/${index + 1}/200`}
        shape="square"
        size={64}
      />
    ))}
  </HorizontalScrollArea>
)

export const WithoutMargin = () => (
  <HorizontalScrollArea margin={0}>
    {images.map((src, index) => (
      <Avatar key={index} src={src} shape="square" size={64} />
    ))}
  </HorizontalScrollArea>
)

export default meta
