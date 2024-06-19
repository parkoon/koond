import type { Meta } from '@storybook/react'

import Tabs from '../components/tabs'

const meta = {
  title: 'ui/Tabs',
  component: Tabs,
  argTypes: {},
} satisfies Meta<typeof Tabs>

export default meta

export const _Tabs = () => {
  return (
    <Tabs
      items={[
        { key: 'job', label: 'Job', children: <div>Job list</div> },
        { key: 'business', label: 'Business', children: <div>Business list</div> },
      ]}
    />
  )
}
