'use client'

import React from 'react'
import { Drawer } from 'vaul'

import { cn } from '../utils/cn'

type BottomSheetProps = {
  className?: string
  children?: React.ReactNode
  open?: boolean
  onClose?(): void
  hideHandle?: boolean
  maskClosable?: boolean
  height?: number
  handleOnly?: boolean
}

const BottomSheet = ({
  className,
  open,
  children,
  hideHandle,
  onClose,
  height,
  maskClosable = true,
  handleOnly = false,
}: BottomSheetProps) => {
  return (
    <Drawer.Root open={open} onClose={onClose} noBodyStyles handleOnly={handleOnly}>
      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 z-50 bg-black/30"
          onClick={maskClosable ? onClose : () => {}}
        />
        <Drawer.Content
          className={cn(
            'fixed inset-x-0 bottom-0 z-50 mx-auto mt-24 h-[50%] max-w-lg overflow-hidden rounded-t-2xl bg-white px-4 outline-none',
            className,
          )}
          style={{ height }}
        >
          {hideHandle && <Drawer.Handle className="mb-6 mt-3 bg-black/10" />}

          <div className="mx-auto w-full max-w-lg">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

export default BottomSheet
