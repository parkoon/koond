import { Castle } from 'lucide-react'

import ListMenu from '../components/list-menu'
import PromoBanner from '../components/promo-banner'

const meta = {
  title: 'ui/Test',
}

export default meta

export const _Test = () => {
  return (
    <div>
      <PromoBanner id="banner_1" strategy={{ storage: 'session' }} content={'session storage'} />
      <PromoBanner
        id="banner_2"
        strategy={{ storage: 'local', expiredAt: { unit: 'h', value: 1 } }}
        content={'local storage'}
      />
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
    </div>
  )
}
