import { Castle } from 'lucide-react'

import ListMenu from '../components/list-menu'

const meta = {
  title: 'ui/Test',
}

export default meta

export const _Test = () => {
  return (
    <div>
      <ListMenu
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
    </div>
  )
}
