import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import React from 'react'

import { cn } from '../utils/cn'
import { Button, ButtonProps } from './button'

type AlertDialogProps = {
  title?: string
  description?: string | React.ReactNode
  open?: boolean
  onOk?(): void
  onCancel?(): void
  okText?: string
  cancelText?: string
  okButtonProps?: ButtonProps
  cancelButtonProps?: ButtonProps
  hideCancelButton?: boolean
  classNames?: {
    title?: string
    description?: string
  }
}

const AlertDialog = ({
  title,
  description,
  open,
  onOk,
  onCancel,
  classNames,
  okButtonProps,
  cancelButtonProps,
  hideCancelButton = false,
  okText = 'Confirm',
  cancelText = 'Cancel',
}: AlertDialogProps) => {
  return (
    <AlertDialogPrimitive.Root open={open}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <AlertDialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-white p-5 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          {title && (
            <AlertDialogPrimitive.Title
              className={cn('mb-2 text-center text-lg font-bold', classNames?.title)}
            >
              {title}
            </AlertDialogPrimitive.Title>
          )}
          {description && (
            <AlertDialogPrimitive.Description
              className={cn('mb-5 text-center', classNames?.description)}
            >
              {description}
            </AlertDialogPrimitive.Description>
          )}

          <div className="flex gap-2">
            {!hideCancelButton && (
              <Button variant="outlined" block onClick={onCancel} {...cancelButtonProps}>
                {cancelText}
              </Button>
            )}

            <Button variant="primary" block onClick={onOk} {...okButtonProps}>
              {okText}
            </Button>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  )
}

export default AlertDialog
