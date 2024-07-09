import { Meta } from '@storybook/react'

import { Avatar } from '../components/avatar'
import { Indicator } from '../components/indicator'

const meta = {
  title: 'ui/Indicator',
  component: Indicator,
  tags: ['autodocs'],
} satisfies Meta<typeof Indicator>

export const Default = () => (
  <Indicator dot>
    <Avatar src="https://picsum.photos/200/300" shape="square" />
  </Indicator>
)
export const WithLabel = () => (
  <div className="flex flex-col space-y-2">
    <Indicator label="NEW">
      <Avatar src="https://picsum.photos/200/300" shape="square" size={64} />
    </Indicator>
    <Indicator label="12">
      <Avatar src="https://picsum.photos/200/300" shape="square" size={64} />
    </Indicator>
  </div>
)

export const DynamicColor = () => (
  <div className="flex flex-col space-y-2">
    <Indicator label="NEW" color="green">
      <Avatar src="https://picsum.photos/200/300" shape="square" size={64} />
    </Indicator>
    <Indicator label="12" color="blue">
      <Avatar src="https://picsum.photos/200/300" shape="square" size={64} />
    </Indicator>
  </div>
)

export default meta
