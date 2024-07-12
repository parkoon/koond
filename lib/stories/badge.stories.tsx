import type { Meta } from '@storybook/react'

import { Badge } from '../components/badge'

const meta = {
  title: 'ui/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta

export const Default = () => <Badge>Lorem</Badge>
export const Secondary = () => <Badge variant="secondary">Lorem</Badge>
export const Outline = () => <Badge variant="outline">Lorem</Badge>
export const Danger = () => <Badge variant="danger">Lorem</Badge>
