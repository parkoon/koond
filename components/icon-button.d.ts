import { default as React } from '../../node_modules/react';
import { ButtonProps } from './button';

export type IconButtonProps = {
    icon: React.ReactNode;
} & Omit<ButtonProps, 'children' | 'size' | 'danger'>;
export declare const IconButton: ({ icon, variant, loading, ...props }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
