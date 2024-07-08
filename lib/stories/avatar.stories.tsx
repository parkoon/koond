import type { Meta } from '@storybook/react'

import { Avatar } from '../components/avatar'

const meta = {
  title: 'ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta

export const Default = () => <Avatar src="https://picsum.photos/200/300" fallback="JH" />

export const SquareAvatar = () => (
  <Avatar src="https://picsum.photos/200/300" fallback="JH" shape="square" />
)
