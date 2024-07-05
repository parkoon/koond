'use client'

import { useEffect, useState } from 'react'

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

export type PromoBannerStrategy =
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
export type UsePromoVisibilityOptions = {
  initialVisibility?: boolean
  strategy?: PromoBannerStrategy
}

const usePromoVisibility = (
  key: string,
  {
    initialVisibility = false,
    strategy = { storage: 'local', expiredAt: { unit: 'd', value: 1 } },
  }: UsePromoVisibilityOptions = {},
) => {
  const [visible, setVisible] = useState(initialVisibility)

  const closeWithStrategy = () => {
    if (strategy.storage === 'session') {
      window.sessionStorage.setItem(key, JSON.stringify(true))
    }

    if (strategy.storage === 'local') {
      window.localStorage.setItem(
        key,
        JSON.stringify(calcExpiredTimeFromNow(strategy.expiredAt.value, strategy.expiredAt.unit)),
      )
    }
    setVisible(false)
  }

  useEffect(() => {
    if (strategy.storage === 'session') {
      setVisible(!window.sessionStorage.getItem(key))
    }

    if (strategy.storage === 'local') {
      const str = window.localStorage.getItem(key)

      if (!str) {
        setVisible(true)
        return
      }

      const expiredAt = JSON.parse(str)

      setVisible(Date.now() > expiredAt)
    }
  }, [key, strategy.storage])

  return {
    visible,
    close: () => setVisible(false),
    closeWithStrategy,
  }
}

export default usePromoVisibility
