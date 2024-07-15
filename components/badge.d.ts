import { VariantProps } from 'class-variance-authority';

import * as React from 'react';
declare const badgeVariants: (props?: ({
    variant?: "secondary" | "default" | "danger" | "outline" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeProps = VariantProps<typeof badgeVariants> & React.ComponentProps<'div'>;
export declare const Badge: ({ className, variant, ...props }: BadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
