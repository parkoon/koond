import type { Meta } from '@storybook/react'
import { DownloadCloud, SoupIcon, User } from 'lucide-react'

import BottomTabNavigation from '../components/bottom-tab-navigation'

const meta = {
  title: 'ui/BottomTabNavigation',
  component: BottomTabNavigation,
} satisfies Meta<typeof BottomTabNavigation>

export default meta

export const _BottomTabNavigation = () => {
  return (
    <BottomTabNavigation
      items={[
        { icon: <User />, label: 'User' },
        { icon: <SoupIcon />, label: 'Soup' },
        { icon: <DownloadCloud />, label: 'Cloud' },
      ]}
    />
  )
}
