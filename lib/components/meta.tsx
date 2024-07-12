import React from 'react'

import { cn } from '../utils/cn'
import { Avatar, AvatarProps } from './avatar'

type MetaProps = React.ComponentProps<'div'>

export const Meta = ({ className, ...props }: MetaProps) => {
  return <div className={cn('flex items-center space-x-2', className)} {...props} />
}

export type MetaAvatarProps = AvatarProps
export const MetaAvatar = ({
  className,
  size = 42,
  shape = 'square',
  ...props
}: MetaAvatarProps) => (
  <Avatar className={cn('shrink-0', className)} size={size} shape={shape} {...props} />
)

export type MetaContentProps = React.ComponentProps<'div'>
export const MetaContent = ({ className, ...props }: MetaDescriptionProps) => (
  <div className={cn('flex flex-1 flex-col space-y-1', className)} {...props} />
)

export type MetaDescriptionProps = React.ComponentProps<'p'>
export const MetaDescription = ({ className, ...props }: MetaDescriptionProps) => (
  <p className={cn('text-sm leading-none text-muted-foreground', className)} {...props} />
)

export type MetaTitleProps = React.ComponentProps<'h3'>
export const MetaTitle = ({ className, ...props }: MetaDescriptionProps) => (
  <h3 className={cn('text-lg font-semibold leading-none', className)} {...props} />
)

export type MetaExtraProps = React.ComponentProps<'div'>
export const MetaExtra = ({ className, ...props }: MetaDescriptionProps) => (
  <div className={cn('shrink-0', className)} {...props} />
)
