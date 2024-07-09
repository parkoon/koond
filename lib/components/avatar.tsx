'use client'

import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '../utils/cn'

const DEFAULT_FALLBACK_DELAY_MS = 0
const DEFAULT_AVATAR_SIZE = 32
const DEFAULT_AVATAR_SHAPE: AvatarShape = 'round'

export type AvatarShape = 'round' | 'square'
export type AvatarProps = {
  src?: string
  alt?: string
  size?: number
  shape?: AvatarShape
  fallback?: string
  delayMs?: number
  style?: React.CSSProperties
  classNames?: {
    root?: string
    image?: string
    fallback?: string
  }
}

export const Avatar = ({
  delayMs = DEFAULT_FALLBACK_DELAY_MS,
  size = DEFAULT_AVATAR_SIZE,
  shape = DEFAULT_AVATAR_SHAPE,
  classNames,
  fallback,
  alt,
  src,
  style,
}: AvatarProps) => {
  return (
    <AvatarPrimitive.Root
      className={cn(
        'relative flex shrink-0 overflow-hidden',
        shape === 'round' ? 'rounded-full' : 'rounded',
        classNames?.root,
      )}
      style={{ width: size, height: size, ...style }}
    >
      <AvatarPrimitive.Image
        className={cn('aspect-square h-full w-full', classNames?.image)}
        alt={alt}
        src={src}
      />

      <AvatarPrimitive.Fallback
        className={cn(
          'flex h-full w-full items-center justify-center bg-muted',
          shape === 'round' ? 'rounded-full' : 'rounded-lg',
          classNames?.fallback,
        )}
        delayMs={delayMs}
      >
        {fallback}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  )
}
