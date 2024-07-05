import { Castle } from 'lucide-react'

import ListMenu from '../components/list-menu'
import Paper from '../components/paper'
import PromoBanner from '../components/promo-banner'
import PromoBottomSheet from '../components/promo-bottom-sheet'
import StepBar from '../components/step-bar'

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

      {/* <StepBar items={['신청전', 'b', '신고완료']} /> */}
      <StepBar items={['신청 전', '진행 중', '검토 중', '신고 완료']} currentStep={0} />

      <Paper shadow className="mb-5 p-5">
        Paper with shadow
      </Paper>
      <Paper className="p-5">Paper with border</Paper>

      <PromoBottomSheet id="promo_bottom_sheet">
        <img
          src="https://fastly.picsum.photos/id/866/800/600.jpg?hmac=ABydLIy9SfKp2C562ssO9GKtL4uss8xHHILcBin8K48"
          draggable={false}
        />
      </PromoBottomSheet>
    </div>
  )
}
