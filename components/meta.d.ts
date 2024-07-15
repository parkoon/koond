import { default as React } from '../../node_modules/react';
import { AvatarProps } from './avatar';

type MetaProps = React.ComponentProps<'div'>;
export declare const Meta: ({ className, ...props }: MetaProps) => import("react/jsx-runtime").JSX.Element;
export type MetaAvatarProps = AvatarProps;
export declare const MetaAvatar: ({ className, size, shape, ...props }: MetaAvatarProps) => import("react/jsx-runtime").JSX.Element;
export type MetaContentProps = React.ComponentProps<'div'>;
export declare const MetaContent: ({ className, ...props }: MetaDescriptionProps) => import("react/jsx-runtime").JSX.Element;
export type MetaDescriptionProps = React.ComponentProps<'p'>;
export declare const MetaDescription: ({ className, ...props }: MetaDescriptionProps) => import("react/jsx-runtime").JSX.Element;
export type MetaTitleProps = React.ComponentProps<'h3'>;
export declare const MetaTitle: ({ className, ...props }: MetaDescriptionProps) => import("react/jsx-runtime").JSX.Element;
export type MetaExtraProps = React.ComponentProps<'div'>;
export declare const MetaExtra: ({ className, ...props }: MetaDescriptionProps) => import("react/jsx-runtime").JSX.Element;
export {};
