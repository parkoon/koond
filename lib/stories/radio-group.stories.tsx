import type { Meta } from '@storybook/react'

import { RadioGroup, RadioGroupButtonItem, RadioGroupItem } from '../components/radio-group'

const meta = {
  title: 'ui/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta

export const Default = () => {
  return (
    <RadioGroup defaultValue="all">
      <RadioGroupItem value="all">All</RadioGroupItem>
      <RadioGroupItem value="popular">Popular JOB</RadioGroupItem>
      <RadioGroupItem value="urgent">Urgent Hiring JOB</RadioGroupItem>
    </RadioGroup>
  )
}

export const ButtonTypeRadio = () => (
  <RadioGroup inline defaultValue="all">
    <RadioGroupButtonItem value="all">All</RadioGroupButtonItem>
    <RadioGroupButtonItem value="popular">Popular JOB</RadioGroupButtonItem>
    <RadioGroupButtonItem value="urgent">Urgent Hiring JOB</RadioGroupButtonItem>
  </RadioGroup>
)
export const FullButtonTypeRadio = () => (
  <RadioGroup defaultValue="all" className="grid grid-cols-2">
    <RadioGroupButtonItem value="all" block>
      All
    </RadioGroupButtonItem>
    <RadioGroupButtonItem value="popular" block>
      Popular JOB
    </RadioGroupButtonItem>
    <RadioGroupButtonItem value="urgent" block>
      Urgent Hiring JOB
    </RadioGroupButtonItem>
  </RadioGroup>
)
