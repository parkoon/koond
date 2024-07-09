import type { Meta } from '@storybook/react'
import { Bell, Calendar, Home, LayoutGrid, Search } from 'lucide-react'

import { BottomNavigation } from '../components/bottom-navigation'

const meta = {
  title: 'ui/BottomNavigation',
  component: BottomNavigation,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomNavigation>

export default meta

export const Default = () => (
  <BottomNavigation
    items={[
      { icon: <Home />, label: 'Home' },
      { icon: <Search />, label: 'Search' },
      { icon: <Calendar />, label: 'Schedule' },
      { icon: <Bell />, label: 'Notification' },
      { icon: <LayoutGrid />, label: 'More' },
    ]}
  />
)
