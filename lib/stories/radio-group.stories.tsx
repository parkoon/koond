import type { Meta } from '@storybook/react'

import RadioGroup from '../components/radio-group'

const meta = {
  title: 'ui/RadioGroup',
  component: RadioGroup,
  argTypes: {
    radioType: {
      options: ['default', 'button'],
      control: { type: 'radio' },
    },

    defaultValue: { control: false },
  },
  parameters: {
    controls: {
      exclude: ['defaultValue', 'value', 'items', 'radioType', 'classNames'],
    },
  },
  args: {},
} satisfies Meta<typeof RadioGroup>

export default meta

export const Default = () => {
  return (
    <RadioGroup
      defaultValue="all"
      items={[
        { label: 'All', value: 'all' },
        { label: 'Popular JOB', value: 'popular_job' },
        { label: 'Urgent Hiring', value: 'urgent_hiring' },
      ]}
      radioType="default"
    />
  )
}
export const Button = () => {
  return (
    <RadioGroup
      defaultValue="all"
      items={[
        { label: 'All', value: 'all' },
        { label: 'Popular JOB', value: 'popular_job' },
        { label: 'Urgent Hiring', value: 'urgent_hiring' },
      ]}
      radioType="button"
    />
  )
}
export const InlineButton = () => {
  return (
    <RadioGroup
      defaultValue="all"
      classNames={{ root: 'flex-row' }}
      items={[
        { label: 'All', value: 'all' },
        { label: 'Popular JOB', value: 'popular_job' },
        { label: 'Urgent Hiring', value: 'urgent_hiring' },
      ]}
      radioType="button"
    />
  )
}

export const InlineFullButton = () => {
  return (
    <RadioGroup
      defaultValue="male"
      classNames={{ root: 'grid grid-cols-2', radio: 'w-full rounded-lg' }}
      items={[
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ]}
      radioType="button"
    />
  )
}
