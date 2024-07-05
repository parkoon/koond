'use client'

import BottomSheet from './bottom-sheet'
import { Button, ButtonProps } from './button'
import usePromoVisibility, { UsePromoVisibilityOptions } from './use-promo-vibisility'

type PromoBottomSheetProps = {
  id: string
  strategy?: UsePromoVisibilityOptions['strategy']

  children: React.ReactNode

  hideButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
}
const PromoBottomSheet = ({
  id,
  children,
  strategy = { storage: 'local', expiredAt: { unit: 'd', value: 9999999 } },
  cancelButtonProps,
  hideButtonProps,
}: PromoBottomSheetProps) => {
  const { visible, closeWithStrategy, close } = usePromoVisibility(id, {
    initialVisibility: true,
    strategy,
  })

  const { onClick: onHideButtonClick, ...restHideButtonProps } = hideButtonProps || {}
  const { onClick: onCancelButtonClick, ...restCancelButtonProps } = cancelButtonProps || {}

  const handleHideClick: ButtonProps['onClick'] = (e) => {
    closeWithStrategy()
    onHideButtonClick?.(e)
  }

  const handleCloseClick: ButtonProps['onClick'] = (e) => {
    close()
    onCancelButtonClick?.(e)
  }
  return (
    <div>
      <BottomSheet
        open={visible}
        className="flex h-auto flex-col p-0"
        handleOnly
        maskClosable={false}
      >
        {children}

        <div className="flex h-[52px] items-center justify-between">
          <Button
            variant="ghost"
            className="text-placeholder"
            onClick={handleHideClick}
            {...restHideButtonProps}
          >
            다시 보지 않기
          </Button>
          <Button
            variant="ghost"
            className="font-semibold"
            onClick={handleCloseClick}
            {...restCancelButtonProps}
          >
            닫기
          </Button>
        </div>
      </BottomSheet>
    </div>
  )
}

export default PromoBottomSheet
