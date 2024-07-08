import type { Meta } from '@storybook/react'
import { Castle } from 'lucide-react'

import ListMenu from '../components/list-menu'
import { Screen } from '../components/screen'

const meta = {
  title: 'ui/List Menu',
  component: ListMenu,
} satisfies Meta<typeof ListMenu>

export default meta

export const Default = () => {
  return (
    <Screen>
      <ListMenu
        title="나의 거래"
        hideLinkIcon
        items={[
          { type: 'link', label: '1', icon: <Castle /> },
          { type: 'link', label: '2', icon: <Castle />, extra: 'lorem ipsum' },
          { type: 'separator' },
          {
            type: 'link',
            label: '3',
            icon: <Castle />,
            extra: <p style={{ color: 'lightgreen', fontWeight: 'bold' }}>English</p>,
          },
        ]}
      />
    </Screen>
  )
}
