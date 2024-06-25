import type { Meta } from '@storybook/react'

import BirthInput from '../components/birth-input'
import TextInput from '../components/text-input'

const meta = {
  title: 'ui/Input',
  component: TextInput,
  argTypes: {},
} satisfies Meta<typeof TextInput>

export default meta

export const _Input = () => {
  return (
    <div className="flex flex-col gap-2">
      <TextInput />

      <BirthInput />
    </div>
  )
}
