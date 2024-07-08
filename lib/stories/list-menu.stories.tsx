import type { Meta } from '@storybook/react'
import { CakeSlice, Calculator, Camera, Clock8, Database } from 'lucide-react'

import ListMenu from '../components/list-menu'
import { Screen } from '../components/screen'

const meta = {
  title: 'ui/List Menu',
  component: ListMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof ListMenu>

export default meta

export const Default = () => {
  return (
    <Screen>
      <ListMenu
        title="My menu"
        items={[
          { type: 'link', label: 'Cake Slice', icon: <CakeSlice className="h-5 w-5" /> },
          { type: 'link', label: 'Calculator', icon: <Calculator className="h-5 w-5" /> },
          { type: 'link', label: 'Camera', icon: <Camera className="h-5 w-5" /> },
          { type: 'link', label: 'Clock', icon: <Clock8 className="h-5 w-5" /> },
          { type: 'link', label: 'Database', icon: <Database className="h-5 w-5" /> },
        ]}
      />
    </Screen>
  )
}
export const HideLinkIcon = () => {
  return (
    <Screen>
      <ListMenu
        title="My menu"
        hideLinkIcon
        items={[
          { type: 'link', label: 'Cake Slice', icon: <CakeSlice className="h-5 w-5" /> },
          { type: 'link', label: 'Calculator', icon: <Calculator className="h-5 w-5" /> },
          { type: 'link', label: 'Camera', icon: <Camera className="h-5 w-5" /> },
          { type: 'link', label: 'Clock', icon: <Clock8 className="h-5 w-5" /> },
          { type: 'link', label: 'Database', icon: <Database className="h-5 w-5" /> },
        ]}
      />
    </Screen>
  )
}
export const WithExtra = () => {
  return (
    <Screen>
      <ListMenu
        title="My menu"
        items={[
          {
            type: 'link',
            label: 'Cake Slice',
            icon: <CakeSlice className="h-5 w-5" />,
            extra: 'yummy',
          },
          { type: 'link', label: 'Calculator', icon: <Calculator className="h-5 w-5" /> },
          { type: 'link', label: 'Camera', icon: <Camera className="h-5 w-5" /> },
          { type: 'link', label: 'Clock', icon: <Clock8 className="h-5 w-5" /> },
          { type: 'link', label: 'Database', icon: <Database className="h-5 w-5" /> },
        ]}
      />
    </Screen>
  )
}

export const WithSeparator = () => {
  return (
    <Screen>
      <ListMenu
        title="My menu"
        items={[
          { type: 'link', label: 'Cake Slice', icon: <CakeSlice className="h-5 w-5" /> },
          { type: 'link', label: 'Calculator', icon: <Calculator className="h-5 w-5" /> },
          { type: 'link', label: 'Camera', icon: <Camera className="h-5 w-5" /> },
          { type: 'separator' },
          { type: 'link', label: 'Clock', icon: <Clock8 className="h-5 w-5" /> },
          { type: 'link', label: 'Database', icon: <Database className="h-5 w-5" /> },
        ]}
      />
    </Screen>
  )
}
