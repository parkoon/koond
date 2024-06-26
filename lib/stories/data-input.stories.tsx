import type { Meta, StoryObj } from '@storybook/react'

import DateInput from '../components/date-input'

const meta = {
  title: 'ui/DateInput',
  component: DateInput,
  argTypes: {
    format: {
      options: ['YYYY.MM.DD', 'DD.MM.YYYY', 'MM.YYYY', 'YYYY.MM'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof DateInput>

export default meta
type Story = StoryObj<typeof meta>

export const _DateInput = (args: Story['args']) => {
  return <DateInput {...args} />
}
