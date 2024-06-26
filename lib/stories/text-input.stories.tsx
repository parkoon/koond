import type { Meta } from '@storybook/react'

import TextInput from '../components/text-input'

const meta = {
  title: 'ui/TextInput',
  component: TextInput,
  argTypes: {},
} satisfies Meta<typeof TextInput>

export default meta

export const _TextInput = () => {
  return <TextInput />
}
