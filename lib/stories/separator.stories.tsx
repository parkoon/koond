import type { Meta } from '@storybook/react'

import { Separator } from '../components/separator'

const meta = {
  title: 'ui/Separator',
  component: Separator,
} satisfies Meta<typeof Separator>

export default meta

export const _Separator = () => {
  return (
    <div>
      <div>
        <span>HORIZON</span>
        <Separator orientation="horizontal" />
        <span>TAL</span>
      </div>
      <div className="flex h-5">
        <span>VERTI</span>
        <Separator orientation="vertical" />
        <span>CAL</span>
      </div>
    </div>
  )
}
