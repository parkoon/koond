'use client'

import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'

import { cn } from '../utils/cn'

const DEFAULT_AUTO_PLAY_DELAY = 3000

export type CarouselProps = {
  children: React.ReactNode
  gap?: number
  options?: EmblaOptionsType
  classNames?: {
    slide?: string
    root?: string
  }
  autoplay?: boolean
  delay?: number
}

export const Carousel = ({
  children,
  classNames,
  options,
  autoplay,
  delay = DEFAULT_AUTO_PLAY_DELAY,
  gap = 0,
}: CarouselProps) => {
  const plugins = autoplay ? [Autoplay({ playOnInit: true, delay })] : []

  const [carouselRef, api] = useEmblaCarousel({ loop: autoplay, ...options }, plugins)

  const [selectedIndex, setSelectedIndex] = useState(1)

  const onSelect = useCallback((api: EmblaCarouselType) => {
    if (!api) {
      return
    }

    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return

    onSelect(api)
    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <section className={cn('relative w-full', classNames?.root)}>
      <div className="overflow-hidden" ref={carouselRef}>
        <div className="flex" style={{ gap }}>
          {React.Children.map(children, (child, index) => (
            <div className={cn('shrink-0 grow-0 basis-full', classNames?.slide)} key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-2 right-2 rounded bg-[rgba(0,0,0,0.4)] px-2 py-1 text-sm">
        <span className="text-white">{selectedIndex + 1}</span>
        <span className="text-white opacity-50"> / {React.Children.count(children)}</span>
      </div>
    </section>
  )
}
