'use client'

import { X } from 'lucide-react'
import { useEffect, useState } from 'react'

import { cn } from '../utils/cn'

const calcExpiredTimeFromNow = (value: number, unit: ExpiredAtUnit) => {
  const now = Date.now()

  let expiredTime = now

  if (unit === 'h') {
    expiredTime = now + 1 * value * 60 * 60 * 1000
  }

  if (unit === 'd') {
    expiredTime = now + 24 * value * 60 * 60 * 1000
  }

  return expiredTime
}

type ExpiredAtUnit = 'h' | 'd'
type PromoBannerStrategy =
  | {
      storage?: 'session'
    }
  | {
      storage?: 'local'
      expiredAt: {
        value: number
        unit: ExpiredAtUnit
      }
    }

const STORAGE_KEY = 'promo_banner_hide'

export type PromoBannerProps = {
  id?: string
  content: React.ReactNode
  classNames?: { close?: string; root?: string }
  strategy?: PromoBannerStrategy
}
const PromoBanner = ({
  id = STORAGE_KEY,
  content,
  classNames,
  strategy = { storage: 'local', expiredAt: { unit: 'd', value: 1 } },
}: PromoBannerProps) => {
  const [visible, setVisible] = useState(false)

  const handleClose = () => {
    if (strategy.storage === 'session') {
      window.sessionStorage.setItem(id, JSON.stringify(true))
    }

    if (strategy.storage === 'local') {
      window.localStorage.setItem(
        id,
        JSON.stringify(calcExpiredTimeFromNow(strategy.expiredAt.value, strategy.expiredAt.unit)),
      )
    }
    setVisible(false)
  }

  useEffect(() => {
    if (strategy.storage === 'session') {
      setVisible(!window.sessionStorage.getItem(id))
    }

    if (strategy.storage === 'local') {
      const str = window.localStorage.getItem(id)

      if (!str) {
        setVisible(true)
        return
      }

      const expiredAt = JSON.parse(str)

      setVisible(Date.now() > expiredAt)
    }
  }, [id, strategy.storage])

  if (!visible) {
    return null
  }

  return (
    <section className={cn('relative', classNames?.root)}>
      {content}
      <button
        className={cn('text-placeholder absolute right-1 top-1', classNames?.close)}
        onClick={handleClose}
      >
        <X className="h-4 w-4" />
      </button>
    </section>
  )
}

export default PromoBanner
