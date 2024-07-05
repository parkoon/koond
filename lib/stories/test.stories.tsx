import { Castle } from 'lucide-react'

import ListMenu from '../components/list-menu'
import PromoBanner from '../components/promo-banner'
import PromoBottomSheet from '../components/promo-bottom-sheet'

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

      <PromoBottomSheet id="promo_bottom_sheet">
        <img
          src="https://fastly.picsum.photos/id/866/800/600.jpg?hmac=ABydLIy9SfKp2C562ssO9GKtL4uss8xHHILcBin8K48"
          draggable={false}
        />
      </PromoBottomSheet>
    </div>
  )
}
