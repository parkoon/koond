import type { Meta } from '@storybook/react'

import SeparatedDescription from '../components/separated-description'

const meta = {
  title: 'ui/Separated Description',
  component: SeparatedDescription,
} satisfies Meta<typeof SeparatedDescription>

export default meta

export const Default = () => {
  return <SeparatedDescription items={['Lorem', 'Ipsum']} />
}
