import type { Meta } from '@storybook/react'
import { Search } from 'lucide-react'

import { TextInput } from '../components/text-input'

const meta = {
  title: 'ui/TextInput',
  component: TextInput,
  argTypes: {},
} satisfies Meta<typeof TextInput>

export default meta

export const Default = () => {
  return <TextInput placeholder="culpa asperiores aliquam quae" />
}
export const Filled = () => {
  return <TextInput filled placeholder="culpa asperiores aliquam quae" />
}
export const WithPrefix = () => {
  return <TextInput prefix={<Search />} placeholder="culpa asperiores aliquam quae" />
}
