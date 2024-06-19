import type { Meta } from '@storybook/react'
import { Menu } from 'lucide-react'

import DropdownMenu from '../components/dropdown-menu'

const meta = {
  title: 'ui/DropdownMenu',
  component: DropdownMenu,
} satisfies Meta<typeof DropdownMenu>

export default meta

export const _DropdownMenu = () => {
  return (
    <div>
      <DropdownMenu
        trigger={
          <button className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white outline-none">
            <Menu />
          </button>
        }
        items={[
          { label: 'Latest', key: 'Latest' },
          { label: 'Due date', key: 'Duedate' },
          { label: 'Nearest', key: 'Nearest' },
        ]}
        defaultMenuKey="Latest"
      />
    </div>
  )
}
