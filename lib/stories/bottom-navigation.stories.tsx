import type { Meta } from '@storybook/react'
import { DownloadCloud, SoupIcon, User } from 'lucide-react'

import BottomNavigation from '../components/bottom-navigation'

const meta = {
  title: 'ui/BottomNavigation',
  component: BottomNavigation,
} satisfies Meta<typeof BottomNavigation>

export default meta

export const _BottomNavigation = () => {
  return (
    <BottomNavigation
      items={[
        { icon: <User />, label: 'User' },
        { icon: <SoupIcon />, label: 'Soup' },
        { icon: <DownloadCloud />, label: 'Cloud' },
      ]}
    />
  )
}
