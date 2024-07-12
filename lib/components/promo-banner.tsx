'use client'

import { X } from 'lucide-react'

import { cn } from '../utils/cn'
import usePromoVisibility, { UsePromoVisibilityOptions } from './use-promo-vibisility'

const STORAGE_KEY = 'promo_banner_hide'

export type PromoBannerProps = {
  id?: string
  content: React.ReactNode
  classNames?: { close?: string; root?: string }
  strategy?: UsePromoVisibilityOptions['strategy']
}
const PromoBanner = ({
  id = STORAGE_KEY,
  content,
  classNames,
  strategy = { storage: 'local', expiredAt: { unit: 'd', value: 1 } },
}: PromoBannerProps) => {
  const { visible, close } = usePromoVisibility(id, { strategy })

  if (!visible) {
    return null
  }

  return (
    <section className={cn('relative', classNames?.root)}>
      {content}
      <button
        className={cn('absolute right-1 top-1 text-muted-foreground', classNames?.close)}
        onClick={close}
      >
        <X className="h-4 w-4" />
      </button>
    </section>
  )
}

export default PromoBanner
