import type { Meta } from '@storybook/react'
import { CalendarHeart } from 'lucide-react'

import { Alert, AlertDescription, AlertSlot, AlertTitle } from '../components/alert'

const meta = {
  title: 'ui/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta

export const Default = () => (
  <Alert>
    <AlertTitle>Lorem ipsum dolor sit</AlertTitle>
    <AlertDescription>reiciendis alias temporibus officia quia</AlertDescription>
  </Alert>
)
export const WithSlot = () => (
  <Alert>
    <AlertSlot>
      <CalendarHeart />
    </AlertSlot>
    <AlertTitle>Lorem ipsum dolor sit</AlertTitle>
    <AlertDescription>reiciendis alias temporibus officia quia</AlertDescription>
  </Alert>
)

export const DangerAlert = () => (
  <Alert variant="danger">
    <AlertTitle>Lorem ipsum dolor sit</AlertTitle>
    <AlertDescription>reiciendis alias temporibus officia quia</AlertDescription>
  </Alert>
)

export const ClickableAlert = () => (
  <Alert clickable>
    <AlertTitle>Lorem ipsum dolor sit</AlertTitle>
    <AlertDescription>reiciendis alias temporibus officia quia</AlertDescription>
  </Alert>
)
