import type { Meta } from '@storybook/react'

import SelectDialog from '../components/select-dialog'

const meta = {
  title: 'ui/SelectDialog',
  component: SelectDialog,
  argTypes: {},
} satisfies Meta<typeof SelectDialog>

export default meta

export const _SelectDialog = () => {
  return (
    <SelectDialog
      items={[
        { label: '1900', value: '1900' },
        { label: '1901', value: '1901' },
        { label: '1902', value: '1902' },
        { label: '1903', value: '1903' },
        { label: '1904', value: '1904' },
        { label: '1905', value: '1905' },
        { label: '1906', value: '1906' },
        { label: '1907', value: '1907' },
        { label: '1908', value: '1908' },
        { label: '1909', value: '1909' },
        { label: '1910', value: '1910' },
        { label: '1911', value: '1911' },
      ]}
    />
  )
}
