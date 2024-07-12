import {
  Bell,
  CakeSlice,
  Calculator,
  Calendar,
  Camera,
  Clock8,
  Database,
  Drum,
  Home,
  LayoutGrid,
  Search,
} from 'lucide-react'

import { Avatar } from '../../components/avatar'
import { BottomNavigation } from '../../components/bottom-navigation'
import { ListMenu } from '../../components/list-menu'
import { Screen } from '../../components/screen'
import { SeparatedDescription } from '../../components/separated-description'
import { Separator } from '../../components/separator'

const meta = {
  title: 'blocks/Settings App',
}

export const SettingsApp = () => {
  return (
    <Screen className="py-4">
      <div className="flex space-x-4 px-5">
        <Avatar src="https://picsum.photos/200/300" fallback="Lo" size={40} shape="square" />
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">Lorem</h2>
          <SeparatedDescription items={['Lorem ipsum', 'dolor sit']} />
        </div>
      </div>

      <Separator />
      <ListMenu
        classNames={{ item: 'px-5', title: 'px-5' }}
        title="My menu"
        items={[
          {
            type: 'link',
            label: 'Cake Slice',
            icon: <CakeSlice />,
          },
          {
            type: 'link',
            label: 'Calculator',
            icon: <Calculator />,
          },
          {
            type: 'link',
            label: 'Camera',
            icon: <Camera />,
          },
          {
            type: 'link',
            label: 'Clock',
            icon: <Clock8 />,
          },
          {
            type: 'link',
            label: 'Database',
            icon: <Database />,
          },
          {
            type: 'separator',
          },
          {
            type: 'link',
            label: 'Drum',
            icon: <Drum />,
          },
        ]}
      />

      <BottomNavigation
        items={[
          { icon: <Home />, label: 'Home' },
          { icon: <Search />, label: 'Search' },
          { icon: <Calendar />, label: 'Schedule' },
          { icon: <Bell />, label: 'Notification' },
          { icon: <LayoutGrid />, label: 'More' },
        ]}
      />
    </Screen>
  )
}

export default meta
